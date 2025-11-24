import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFound } from './pages/not-found/not-found';
import { MainLayout as MainLayoutComponent } from '../../shared/components/layouts/main-layout/main-layout';



@NgModule({
  declarations: [
    NotFound
  ],
  imports: [
    CommonModule,
    MainLayoutComponent
  ]
})
export class NotFoundModule { }
