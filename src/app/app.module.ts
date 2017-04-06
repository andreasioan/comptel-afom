import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './controllers/common/header/header.component';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import { BarChartComponent } from './controllers/common/charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './controllers/common/charts/doughnut-chart/doughnut-chart.component';
import { FalloutComponent } from './controllers/fallout/fallout.component';
import { ResolutionComponent } from './controllers/resolution/resolution.component';

import { ChartsModule } from 'ng2-charts';
import { routing } from './app.routing';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DashboardComponent,
		BarChartComponent,
		DoughnutChartComponent,
		FalloutComponent,
		ResolutionComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing, // Router
		ChartsModule //valor-ng2-charts
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
