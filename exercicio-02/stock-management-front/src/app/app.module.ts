import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { App } from './app';
import { ComponentsModule } from './components/components.module';
import { LoginDataService } from './services/login-data.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/auth.interceptor';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
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
