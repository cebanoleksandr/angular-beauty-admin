import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './pages/services/services';
import { Service } from './pages/service/service';
import { MainLayout as MainLayoutComponent } from '../../shared/components/layouts/main-layout/main-layout';



@NgModule({
  declarations: [
    Services,
    Service
  ],
  imports: [
    CommonModule,
    MainLayoutComponent
  ]
})
export class ServicesModule { }
