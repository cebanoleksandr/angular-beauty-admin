import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayout as AuthLayoutComponent } from './auth-layout';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule
  ],
  exports: [AuthLayoutComponent]
})
export class AuthLayoutModule { }
