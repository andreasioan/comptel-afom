import { Component, OnInit, ViewChild } from '@angular/core';

import { Fallout } from '../common/models/fallout.model';
import { Resolution } from '../common/models/resolution.model';
import { DashboardGet } from '../common/models/dashboard-get.model';

import { DashboardService } from './dashboard.service';

import * as Moment from 'moment'

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    providers: [DashboardService]
})

export class DashboardComponent implements OnInit {
    pageLoaded: boolean = false;
    dashboard: DashboardGet;
    showDate: String;

    donutData: number[];
    donutHeadings: string[];

    barData: any[];
    barHeadings: string[];

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.pageLoaded = false;
        this.donutHeadings = ['Started', 'Created', 'Closed-Successful', 'Error', 'Closed-Failure'];
        this.barHeadings = [
            Moment(new Date()).subtract(10, 'weeks').subtract(6, 'days').format('dddd'),
            Moment(new Date()).subtract(10, 'weeks').subtract(5, 'days').format('dddd'),
            Moment(new Date()).subtract(10, 'weeks').subtract(4, 'days').format('dddd'),
            Moment(new Date()).subtract(10, 'weeks').subtract(3, 'days').format('dddd'),
            Moment(new Date()).subtract(10, 'weeks').subtract(2, 'days').format('dddd'),
            Moment(new Date()).subtract(10, 'weeks').subtract(1, 'days').format('dddd')
        ];
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
                            dashboard.barChart.falloutsMonth5,
                            dashboard.barChart.falloutsMonth4,
                            dashboard.barChart.falloutsMonth3,
                            dashboard.barChart.falloutsMonth2,
                            dashboard.barChart.falloutsMonth1,
                            dashboard.barChart.falloutsMonth0,
                        ],
                        label: 'Fallouts'
                    },
                    {
                        data: [
                            dashboard.barChart.resolutionsMonth5,
                            dashboard.barChart.resolutionsMonth4,
                            dashboard.barChart.resolutionsMonth3,
                            dashboard.barChart.resolutionsMonth2,
                            dashboard.barChart.resolutionsMonth1,
                            dashboard.barChart.resolutionsMonth0,
                        ],
                        label: 'Resolutions'
                    }
                ]
            });

        this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
    }
}