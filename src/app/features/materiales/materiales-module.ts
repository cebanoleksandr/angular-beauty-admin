import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Materiales } from './pages/materiales/materiales';
import { Material } from './pages/material/material';
import { MainLayoutModule } from '../../shared/components/layouts/main-layout/main-layout-module';



@NgModule({
  declarations: [
    Materiales,
    Material
  ],
  imports: [
    CommonModule,
    MainLayoutModule
  ]
})
export class MaterialesModule { }
