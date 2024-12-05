import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenApiModel } from '../model/token-api.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FicheModel, UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  private baseUrl: string = `${environment.apiUrl}/User/`;
  private userPayload: any;

  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodedToken();
  }

  renewToken(tokenApiModel: TokenApiModel): Observable<TokenApiModel> {
    return this.http.post<TokenApiModel>(`${this.baseUrl}renew-token`, tokenApiModel);
  }

  signIn(mat:number,password:string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Login?mat=${mat}&Password=${password}`,{TokenApiModel});
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  storeToken(tokenValue: string): void {
    localStorage.setItem('token', tokenValue);
  }

  storeRefreshToken(tokenValue: string): void {
    localStorage.setItem('refreshToken', tokenValue);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  

  decodedToken(): any {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken();
    return token ? jwtHelper.decodeToken(token) : null;
  }

  getFullNameFromToken(): string | null {
    return this.userPayload ? this.userPayload.name : null;
  }

  getRoleFromToken(): string | null {
    return this.userPayload ? this.userPayload.role : null;
  }


  getMatFromToken(): number | null {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken();
    const decodedToken = token ? jwtHelper.decodeToken(token) : null;
    return decodedToken ? +decodedToken.sub : null; // Assuming 'sub' contains the 'mat'
  }
  




  getUserByMat(mat: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}GetUserByMat/${mat}`);
  }

  getFicheByMat(mat: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}GetFicheByMat/${mat}`);
  }

}
