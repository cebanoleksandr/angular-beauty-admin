import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar';
import { NgIconsModule } from '@ng-icons/core';
import { heroBeakerSolid, heroCalendarSolid, heroCog6ToothSolid, heroHomeSolid, heroSparklesSolid, heroUserGroupSolid, heroUsersSolid } from '@ng-icons/heroicons/solid';



@NgModule({
  declarations: [
    Sidebar
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ 
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
    Sidebar
  ]
})
export class SidebarModule { }
