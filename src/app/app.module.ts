import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './controllers/common/header/header.component';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import { BarChartComponent } from './controllers/common/charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './controllers/common/charts/doughnut-chart/doughnut-chart.component';
import { FalloutsComponent } from './controllers/fallouts/fallouts.component';
import { ResolutionsComponent } from './controllers/resolutions/resolutions.component';
import {ReportsComponent} from './controllers/reports/reports.component';
import { TableComponent } from './controllers/common/table/table.component';
import { SearchFilterComponent } from './controllers/common/search-filter/search-filter.component';
import { LoadingComponent } from './controllers/common/loading/loading.component';
import { PaginateComponent } from './controllers/common/paginate/paginate.component';
import { DetailsModalComponent } from './controllers/common/table/details-modal/details-modal.component';
import { ResolutionErrorModalComponent } from './controllers/common/table/resolution-error-modal/resolution-error-modal.component';
import { LineChartComponent} from './controllers/common/charts/line-chart/line-chart.component';

import { NiceDatePipe } from './controllers/common/pipes/moment.pipe';

import { ChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { routing } from './app.routing';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DashboardComponent,
		BarChartComponent,
		DoughnutChartComponent,
		FalloutsComponent,
		ResolutionsComponent,
		TableComponent,
		SearchFilterComponent,
		LoadingComponent,
		PaginateComponent,
		DetailsModalComponent,
		NiceDatePipe,
		ResolutionErrorModalComponent,
		ReportsComponent,
		LineChartComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing, // Router
		ChartsModule, // valor-ng2-charts
		ModalModule.forRoot(), // valor-ng2-modal
		CollapseModule.forRoot() // valor-ng2-collapse
	],
	providers: [
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
