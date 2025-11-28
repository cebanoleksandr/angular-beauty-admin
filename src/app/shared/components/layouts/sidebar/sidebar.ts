import { Component } from '@angular/core';
import { ISidebarItem } from '../../../models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  sidebarItems: ISidebarItem[] = [
    { title: 'Домашня', icon: 'heroHomeSolid', href: '/dashboard' },
    { title: 'Послуги', icon: 'heroSparklesSolid', href: '/services' },
    { title: 'Календар', icon: 'heroCalendarSolid', href: '/calendar' },
    { title: 'Клієнти', icon: 'heroUserGroupSolid', href: '/clients' },
    { title: 'Майстри', icon: 'heroUsersSolid', href: '/staff' },
    { title: 'Матерiали', icon: 'heroBeakerSolid', href: '/materiales' },
    { title: 'Налаштування', icon: 'heroCog6ToothSolid', href: '/settings' },
  ];
}
