import { Component, OnInit, ViewChild } from '@angular/core';

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
    falloutLoaded: boolean = false;
    resolutionLoaded: boolean = false;
    pageLoaded: boolean = false;

    falloutRows: Fallout[];
    resolutionRows: Resolution[];
    showDate: String;

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {

        this.dashboardService.getFallouts()
            .subscribe((fallouts: Fallout[]) => {
                this.falloutRows = fallouts;
                this.falloutLoaded = true;
                this.isLoaded();
            });

        this.dashboardService.getResolutions()
            .subscribe((resolutions: Resolution[]) => {
                this.resolutionRows = resolutions;
                this.resolutionLoaded = true;
                this.isLoaded();
            });

        this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
    }

    isLoaded() {
        if (this.falloutLoaded && this.resolutionLoaded) {
            this.pageLoaded = true;
        }
    }


}