import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AuthLayout as AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout';
import { MainLayout as MainLayoutComponent } from './shared/components/layouts/main-layout/main-layout';

@NgModule({
  declarations: [
    App,
    MainLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
