import { Component, OnInit } from '@angular/core';

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