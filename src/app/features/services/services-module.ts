import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './pages/services/services';
import { Service } from './pages/service/service';
import { MainLayoutModule } from '../../shared/components/layouts/main-layout/main-layout-module';



@NgModule({
  declarations: [
    Services,
    Service
  ],
  imports: [
    CommonModule,
    MainLayoutModule
  ]
})
export class ServicesModule { }
