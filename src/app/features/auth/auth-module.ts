import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { AuthLayout as AuthLayoutComponent } from '../../shared/components/layouts/auth-layout/auth-layout';

@NgModule({
  declarations: [
    Login,
    Register
  ],
  imports: [
    CommonModule,
    AuthLayoutComponent
  ]
})
export class AuthModule { }
