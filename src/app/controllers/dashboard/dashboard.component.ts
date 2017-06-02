import { Component, OnInit, ViewChild } from '@angular/core';

import { Fallout } from '../common/models/fallout.model';
import { Resolution } from '../common/models/resolution.model';
import { DashboardGet } from '../common/models/dashboard-get.model';

import { DashboardService } from './dashboard.service';

import * as Moment from 'moment';

@Component({
	moduleId: module.id,
	selector: 'app-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.css'],
	providers: [DashboardService]
})

export class DashboardComponent implements OnInit {
	pageLoaded = false;
	dashboard: DashboardGet;
	showDate: String;

	donutData: number[];
	donutHeadings: string[];

	barData: any[];
	barHeadings: string[] = [];

	constructor(private dashboardService: DashboardService) { }

	ngOnInit() {
		this.pageLoaded = false;
		this.donutHeadings = ['Started', 'Created', 'Closed-Successful', 'Error', 'Closed-Failure'];
		for (let i = 6; i > 0; i--) {
			this.barHeadings.push(Moment(new Date()).subtract(10, 'weeks').subtract(i, 'days').format('dddd'));
		}
		this.dashboardService.getDashData()
			.subscribe((dashboard: DashboardGet) => {
				this.dashboard = dashboard;
				this.pageLoaded = true;

				this.donutData = [
					dashboard.donutChart.startedCount,
					dashboard.donutChart.createdCount,
					dashboard.donutChart.closedSuccessfullCount,
					dashboard.donutChart.errorCount,
					dashboard.donutChart.closedFailureCount
				];

				this.barData = [
					{
						data: [
							dashboard.barChart.falloutsDay5,
							dashboard.barChart.falloutsDay4,
							dashboard.barChart.falloutsDay3,
							dashboard.barChart.falloutsDay2,
							dashboard.barChart.falloutsDay1,
							dashboard.barChart.falloutsDay0,
						],
						label: 'Fallouts'
					},
					{
						data: [
							dashboard.barChart.resolutionsDay5,
							dashboard.barChart.resolutionsDay4,
							dashboard.barChart.resolutionsDay3,
							dashboard.barChart.resolutionsDay2,
							dashboard.barChart.resolutionsDay1,
							dashboard.barChart.resolutionsDay0,
						],
						label: 'Resolutions'
					}
				];
			});

		this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
	}
}
