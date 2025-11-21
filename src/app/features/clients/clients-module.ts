import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clients } from './pages/clients/clients';
import { Client } from './pages/client/client';



@NgModule({
  declarations: [
    Clients,
    Client
  ],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
