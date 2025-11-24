import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout as MainLayoutComponent } from './main-layout';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
