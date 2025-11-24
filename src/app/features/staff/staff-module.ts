import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Staff } from './pages/staff/staff';
import { Master } from './pages/master/master';
import { MainLayout as MainLayoutComponent } from '../../shared/components/layouts/main-layout/main-layout';



@NgModule({
  declarations: [
    Staff,
    Master
  ],
  imports: [
    CommonModule,
    MainLayoutComponent
  ]
})
export class StaffModule { }
