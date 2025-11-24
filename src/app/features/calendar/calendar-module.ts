import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calendar } from './pages/calendar/calendar';
import { MainLayout as MainLayoutComponent } from '../../shared/components/layouts/main-layout/main-layout';
import { MainLayoutModule } from '../../shared/components/layouts/main-layout/main-layout-module';

@NgModule({
  declarations: [
    Calendar
  ],
  imports: [
    CommonModule,
    MainLayoutModule
  ]
})
export class CalendarModule { }
