import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Settings } from './pages/settings/settings';
import { MainLayoutModule } from '../../shared/components/layouts/main-layout/main-layout-module';



@NgModule({
  declarations: [
    Settings
  ],
  imports: [
    CommonModule,
    MainLayoutModule
  ]
})
export class SettingsModule { }
