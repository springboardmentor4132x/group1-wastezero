import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Dashboard } from './components/dashboard/dashboard';
import { SchedulePickup } from './components/schedule-pickup/schedule-pickup';
import { Opportunities } from './components/opportunities/opportunities';
import { Messages } from './components/messages/messages';
import { Profile } from './components/profile/profile';
import { AdminPanel } from './components/admin-panel/admin-panel';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard },
  { path: 'schedule-pickup', component: SchedulePickup },
  { path: 'opportunities', component: Opportunities },
  { path: 'messages', component: Messages },
  { path: 'profile', component: Profile },
  { path: 'admin', component: AdminPanel }
];