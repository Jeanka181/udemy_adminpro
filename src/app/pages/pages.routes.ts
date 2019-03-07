import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


import { LoginGuardGuard } from '../services/service.index';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Panel de control', descripcion: 'App del curso de Udemy' }},
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }},
      { path: 'graphics1', component: Graphics1Component, data: { titulo: 'Estadísticas' }},
      { path: 'promesas', component: PromesasComponent},
      { path: 'rxjs', component: RxjsComponent},
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Perzonalización de la App.' }},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
