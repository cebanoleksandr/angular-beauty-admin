import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './pages/services/services';
import { Service } from './pages/service/service';


@NgModule({
  declarations: [
    Services,
    Service
  ],
  imports: [
    CommonModule,
  ]
})
export class ServicesModule { }
