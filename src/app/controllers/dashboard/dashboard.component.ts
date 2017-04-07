import { Component, OnInit } from '@angular/core';

import { Fallout } from '../common/models/fallout.model';
import { FALLOUTS } from '../common/seed/fallouts.seed';

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    falloutRows: Fallout[] = FALLOUTS;

    constructor() { }

    ngOnInit() { }

    date = new Date();
    showDate = this.date.toLocaleDateString('en-AU', {weekday: 'long', day: 'numeric', month: 'long'});
}