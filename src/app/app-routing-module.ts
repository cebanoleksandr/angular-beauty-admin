import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { Calendar } from './features/calendar/pages/calendar/calendar';
import { Clients } from './features/clients/pages/clients/clients';
import { Client } from './features/clients/pages/client/client';
import { Materiales } from './features/materiales/pages/materiales/materiales';
import { Material } from './features/materiales/pages/material/material';
import { Services } from './features/services/pages/services/services';
import { Service } from './features/services/pages/service/service';
import { Settings } from './features/settings/pages/settings/settings';
import { Staff } from './features/staff/pages/staff/staff';
import { Master } from './features/staff/pages/master/master';
import { NotFound } from './features/not-found/pages/not-found/not-found';
import { MainLayout as MainLayoutComponent } from './shared/components/layouts/main-layout/main-layout';
import { AuthLayout as AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: Dashboard },
      { path: 'calendar', component: Calendar },
      { path: 'clients', component: Clients },
      { path: 'clients/:id', component: Client },
      { path: 'materiales', component: Materiales },
      { path: 'materiales/:id', component: Material },
      { path: 'services', component: Services },
      { path: 'services/:id', component: Service },
      { path: 'settings', component: Settings },
      { path: 'staff', component: Staff },
      { path: 'staff/:id', component: Master },
    ]
  },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
