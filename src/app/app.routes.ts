import { Routes } from '@angular/router';

import { Ipv4Overview } from './pages/ipv4-overview/ipv4-overview';
import { Ipv4Exercise } from './pages/ipv4-exercise/ipv4-exercise';
import { DecHexBinTable } from './pages/dec-hex-bin-table/dec-hex-bin-table';
import { DecHexBinExercise } from './pages/dec-hex-bin-exercise/dec-hex-bin-exercise';

export const routes: Routes = [
    { path: 'dec-hex-bin-table', component: DecHexBinTable },
    { path: 'dec-hex-bin-exercise', component: DecHexBinExercise },
    { path: 'ipv4-overview', component: Ipv4Overview },
    { path: 'ipv4-exercise', component: Ipv4Exercise },
    { path: '', redirectTo: 'ipv4-overview', pathMatch: 'full' }
];
