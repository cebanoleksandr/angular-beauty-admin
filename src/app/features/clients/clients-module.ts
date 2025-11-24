import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clients } from './pages/clients/clients';
import { Client } from './pages/client/client';
import { MainLayout as MainLayoutComponent } from '../../shared/components/layouts/main-layout/main-layout';



@NgModule({
  declarations: [
    Clients,
    Client
  ],
  imports: [
    CommonModule,
    MainLayoutComponent
  ]
})
export class ClientsModule { }
