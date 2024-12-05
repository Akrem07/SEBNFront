import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, provideHttpClient, withFetch ,HttpClientModule} from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';

import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { NgToastModule } from 'ng-angular-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TokenInterceptor } from './interceptors/token.interceptor';



// Import the 'routes' variable from the appropriate file

@NgModule({
  declarations: [
    AppComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    DataTablesModule,
    RouterModule,
    ReactiveFormsModule,HttpClientModule,NgToastModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    JwtHelperService, // Add this line
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },




  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
