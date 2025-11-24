import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calendar } from './pages/calendar/calendar';
import { MainLayout as MainLayoutComponent } from '../../shared/components/layouts/main-layout/main-layout';

@NgModule({
  declarations: [
    Calendar
  ],
  imports: [
    CommonModule,
    MainLayoutComponent
  ]
})
export class CalendarModule { }
