import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Materiales } from './pages/materiales/materiales';
import { Material } from './pages/material/material';
import { MainLayout as MainLayoutComponent } from '../../shared/components/layouts/main-layout/main-layout';



@NgModule({
  declarations: [
    Materiales,
    Material
  ],
  imports: [
    CommonModule,
    MainLayoutComponent
  ]
})
export class MaterialesModule { }
