import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Staff } from './pages/staff/staff';
import { Master } from './pages/master/master';
import { MainLayoutModule } from '../../shared/components/layouts/main-layout/main-layout-module';



@NgModule({
  declarations: [
    Staff,
    Master
  ],
  imports: [
    CommonModule,
    MainLayoutModule
  ]
})
export class StaffModule { }
