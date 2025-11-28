import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { 
  heroBars3Solid, 
  heroBeakerSolid, 
  heroCalendarSolid, 
  heroCog6ToothSolid, 
  heroHomeSolid, 
  heroSparklesSolid, 
  heroUserGroupSolid, 
  heroUsersSolid 
} from '@ng-icons/heroicons/solid'; 
import { heroArrowRightStartOnRectangle, heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { RouterModule } from '@angular/router';
import { AuthLayout as AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout';
import { MainLayout as MainLayoutComponent } from './components/layouts/main-layout/main-layout';
import { HeaderComponent } from './components/layouts/header/header';
import { Sidebar as SidebarComponent } from './components/layouts/sidebar/sidebar';
import { SidebarItemComponent } from './components/layouts/sidebar-item/sidebar-item';
import { ButtonComponent } from './components/UI/button/button';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    AuthLayoutComponent,
    SidebarItemComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({ 
      heroBars3Solid,
      heroMagnifyingGlass,
      heroArrowRightStartOnRectangle,
      heroHomeSolid,
      heroSparklesSolid,
      heroCalendarSolid,
      heroCog6ToothSolid,
      heroUserGroupSolid,
      heroUsersSolid,
      heroBeakerSolid,
    })
  ],
  exports: [
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    AuthLayoutComponent,
    SidebarItemComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
