import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-reports',
    templateUrl: 'reports.component.html',
    styleUrls: ['reports.component.css']
})

export class ReportsComponent implements OnInit {
    showDate: string;
    isLoaded: boolean = false;

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.isLoaded = true;
        }, 300);
        this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
    }
}