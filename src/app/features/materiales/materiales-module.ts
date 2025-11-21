import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Materiales } from './pages/materiales/materiales';
import { Material } from './pages/material/material';



@NgModule({
  declarations: [
    Materiales,
    Material
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialesModule { }
