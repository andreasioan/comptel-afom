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
import { TableComponent } from './controllers/common/table/table.component';
import { SearchFilterComponent } from './controllers/common/search-filter/search-filter.component';
import { LoadingComponent } from './controllers/common/loading/loading.component';

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
		LoadingComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing, // Router
		ChartsModule, //valor-ng2-charts
		ModalModule.forRoot(), //valor-ng2-modal
		CollapseModule.forRoot()
	],
	providers: [
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
