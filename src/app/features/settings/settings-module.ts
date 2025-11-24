import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Settings } from './pages/settings/settings';
import { MainLayout as MainLayoutComponent } from '../../shared/components/layouts/main-layout/main-layout';



@NgModule({
  declarations: [
    Settings
  ],
  imports: [
    CommonModule,
    MainLayoutComponent
  ]
})
export class SettingsModule { }
