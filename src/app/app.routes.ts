import { Routes } from '@angular/router';

import { Ipv4Overview } from './pages/ipv4-overview/ipv4-overview';
import { Ipv4Exercise } from './pages/ipv4-exercise/ipv4-exercise';

export const routes: Routes = [
    { path: 'ipv4-overview', component: Ipv4Overview },
    { path: 'ipv4-exercise', component: Ipv4Exercise },
    { path: '', redirectTo: 'ipv4-overview', pathMatch: 'full' }
];
