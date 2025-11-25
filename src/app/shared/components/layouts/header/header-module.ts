import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
// import { LogoutPopupComponent } from '../../popups/logout-popup/logout-popup.component';
// import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    // LogoutPopupComponent,
    // MobileMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}
