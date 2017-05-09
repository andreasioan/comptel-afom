import { Component, OnInit, ViewChild } from '@angular/core';

import { Fallout } from '../common/models/fallout.model';
import { Resolution } from '../common/models/resolution.model';
import { DashboardGet } from '../common/models/dashboard-get.model';

import { DashboardService } from './dashboard.service';

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

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.pageLoaded = false;
        this.donutHeadings = ['Started', 'Created', 'Closed-Successful', 'Error', 'Closed-Failure'];
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
            });

        this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
    }
}