import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { AuthLayoutModule } from '../../shared/components/layouts/auth-layout/auth-layout-module';

@NgModule({
  declarations: [
    Login,
    Register
  ],
  imports: [
    CommonModule,
    AuthLayoutModule
  ]
})
export class AuthModule { }
