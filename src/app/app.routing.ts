import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import { FalloutsComponent } from './controllers/fallouts/fallouts.component';
import { ResolutionsComponent } from './controllers/resolutions/resolutions.component';
import { ReportsComponent } from './controllers/reports/reports.component';

const APP_ROUTES: Routes = [
	{ path: '', component: DashboardComponent, pathMatch: 'full' },
	{ path: 'fallouts', component: FalloutsComponent },
	{ path: 'resolutions', component: ResolutionsComponent },
	{ path: 'reports', component: ReportsComponent },
	{ path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
