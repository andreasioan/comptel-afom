import { Component, OnInit } from '@angular/core';

import { Fallout } from '../common/models/fallout.model';
import { Resolution } from '../common/models/resolution.model';

import { DashboardService } from './dashboard.service';

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [DashboardService]
})

export class DashboardComponent implements OnInit {
    falloutRows: Fallout[];
    resolutionRows: Resolution[];
    showDate: String;

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.falloutRows = this.dashboardService.getFallouts();
        this.resolutionRows = this.dashboardService.getResolutions();

        let date = new Date();
        this.showDate = date.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
    }
}