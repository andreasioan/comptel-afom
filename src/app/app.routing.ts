import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import { FalloutComponent } from './controllers/fallout/fallout.component';
import { ResolutionComponent } from './controllers/resolution/resolution.component';

const APP_ROUTES: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'fallout', component: FalloutComponent },
    { path: 'resolution', component: ResolutionComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);