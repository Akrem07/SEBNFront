import { TokenApiModel } from './../model/token-api.model';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private toast: NgToastService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken();

    if (myToken) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${myToken}` }
      });
    }

    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            return this.handleUnAuthorizedError(request, next);
          }
        }
        return throwError(() => err);
      })
    );
  }

  private handleUnAuthorizedError(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenApiModel = new TokenApiModel();
    tokenApiModel.accessToken = this.auth.getToken()!;
    tokenApiModel.refreshToken = this.auth.getRefreshToken()!;
    return this.auth.renewToken(tokenApiModel).pipe(
      switchMap((data: TokenApiModel) => {
        this.auth.storeRefreshToken(data.refreshToken);
        this.auth.storeToken(data.accessToken);
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${data.accessToken}` }
        });
        return next.handle(req);
      }),
      catchError((err) => {
        this.toast.warning("Token is expired, Please Login again");
        this.router.navigate(['login']);
        return throwError(() => err);
      })
    );
  }
}
