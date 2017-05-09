import { Component, OnInit } from '@angular/core';

import { ReportsService } from './reports.service';

import * as Moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'app-reports',
    templateUrl: 'reports.component.html',
    styleUrls: ['reports.component.css'],
    providers: [ReportsService]
})

export class ReportsComponent implements OnInit {
    showDate: string;

    creationDateLength: Moment.unitOfTime.DurationConstructor = 'days';
    creationDateFormat: string = 'dddd';
    creationDateData: any[];
    creationDateHeadings = [
        Moment(new Date()).subtract(10, 'weeks').subtract(7, this.creationDateLength).format(this.creationDateFormat),
        Moment(new Date()).subtract(10, 'weeks').subtract(6, this.creationDateLength).format(this.creationDateFormat),
        Moment(new Date()).subtract(10, 'weeks').subtract(5, this.creationDateLength).format(this.creationDateFormat),
        Moment(new Date()).subtract(10, 'weeks').subtract(4, this.creationDateLength).format(this.creationDateFormat),
        Moment(new Date()).subtract(10, 'weeks').subtract(3, this.creationDateLength).format(this.creationDateFormat),
        Moment(new Date()).subtract(10, 'weeks').subtract(2, this.creationDateLength).format(this.creationDateFormat),
        Moment(new Date()).subtract(10, 'weeks').subtract(1, this.creationDateLength).format(this.creationDateFormat),
        Moment(new Date()).subtract(10, 'weeks').subtract(0, this.creationDateLength).format(this.creationDateFormat)
    ];
    isCreationDateLoaded: boolean;

    constructor(private reportsService: ReportsService) { }

    ngOnInit() {
        this.isCreationDateLoaded = false;
        this.reportsService.getCreationDate()
            .subscribe((data) => {
                this.creationDateData = data;
                this.isCreationDateLoaded = true;
            });

        this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
    }
}