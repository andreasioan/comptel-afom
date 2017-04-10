import { Component, OnInit } from '@angular/core';

import { Fallout } from '../common/models/fallout.model';
import { Resolution }from '../common/models/resolution.model';



@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    date = new Date();
    showDate = this.date.toLocaleDateString('en-AU', {weekday: 'long', day: 'numeric', month: 'long'});
}