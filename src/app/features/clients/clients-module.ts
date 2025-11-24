import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clients } from './pages/clients/clients';
import { Client } from './pages/client/client';
import { MainLayoutModule } from '../../shared/components/layouts/main-layout/main-layout-module';



@NgModule({
  declarations: [
    Clients,
    Client
  ],
  imports: [
    CommonModule,
    MainLayoutModule
  ]
})
export class ClientsModule { }
