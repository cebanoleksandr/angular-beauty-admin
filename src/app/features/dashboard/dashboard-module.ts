import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './pages/dashboard/dashboard';
import { MainLayoutModule } from '../../shared/components/layouts/main-layout/main-layout-module';



@NgModule({
  declarations: [
    Dashboard
  ],
  imports: [
    CommonModule,
    MainLayoutModule
  ]
})
export class DashboardModule { }
