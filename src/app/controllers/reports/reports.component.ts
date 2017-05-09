import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-reports',
    templateUrl: 'reports.component.html',
    styleUrls: ['reports.component.css']
})

export class ReportsComponent implements OnInit {
    showDate: string;

    constructor() { }

    ngOnInit() { 
        this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
    }
}