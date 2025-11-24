import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayout as AuthLayoutComponent } from './auth-layout';


@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    AuthLayoutModule
  ],
  exports: [AuthLayoutComponent]
})
export class AuthLayoutModule { }
