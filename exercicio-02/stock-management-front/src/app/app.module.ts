import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { LoginDataService } from './services/login-data.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/auth.interceptor';
import { LoginService } from './services/login.service';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './components/layout/layout.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    LayoutModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true // Important for adding to the chain
  },
    LoginDataService,
    LoginService,
  provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
