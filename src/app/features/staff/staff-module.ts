import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Staff } from './pages/staff/staff';
import { Master } from './pages/master/master';


@NgModule({
  declarations: [
    Staff,
    Master
  ],
  imports: [
    CommonModule,
  ]
})
export class StaffModule { }
