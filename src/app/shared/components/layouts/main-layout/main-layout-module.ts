import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout as MainLayoutComponent } from './main-layout';
import { AuthLayoutModule } from '../auth-layout/auth-layout-module';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    AuthLayoutModule
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
