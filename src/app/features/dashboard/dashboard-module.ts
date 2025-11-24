import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './pages/dashboard/dashboard';
import { MainLayout as MainLayoutComponent } from '../../shared/components/layouts/main-layout/main-layout';



@NgModule({
  declarations: [
    Dashboard
  ],
  imports: [
    CommonModule,
    MainLayoutComponent
  ]
})
export class DashboardModule { }
