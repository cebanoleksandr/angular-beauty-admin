import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFound } from './pages/not-found/not-found';
import { MainLayoutModule } from '../../shared/components/layouts/main-layout/main-layout-module';



@NgModule({
  declarations: [
    NotFound
  ],
  imports: [
    CommonModule,
    MainLayoutModule
  ]
})
export class NotFoundModule { }
