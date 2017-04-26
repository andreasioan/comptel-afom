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

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.pageLoaded = false;

        this.dashboardService.getDashData()
            .subscribe((dashboard: DashboardGet) => {
                this.dashboard = dashboard;
                this.pageLoaded = true;
            });

        this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
    }
}