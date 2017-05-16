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
    creationDateData: any[];
    creationDateHeadings: any[];

    isLoading: boolean = true;

    isDateLoaded: boolean;
    dateType: string = 'creation';

    constructor(private reportsService: ReportsService) { }

    ngOnInit() {
        this.setDate('days');

        this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
    }

    setDate(length: any) {
        this.isDateLoaded = false;
        this.creationDateLength = length;
        if (this.dateType === 'creation') {
            this.reportsService.getCreationDate(length)
                .subscribe((data) => {
                    this.creationDateData = data;
                    this.creationDateHeadings = this.setDateHeadings();
                    this.isDateLoaded = true;
        
                });
        }
    }

    setDateHeadings() {
        let creationDateFormat: string = 'dddd';

        switch (this.creationDateLength) {
            case 'days':
                creationDateFormat = 'dddd';
                break;
            case 'months':
                creationDateFormat = 'MMMM';
                break;
            case 'years':
                creationDateFormat = 'YYYY';
                break;
        }

        let headings = [
            Moment(new Date()).subtract(10, 'weeks').subtract(6, this.creationDateLength).format(creationDateFormat),
            Moment(new Date()).subtract(10, 'weeks').subtract(5, this.creationDateLength).format(creationDateFormat),
            Moment(new Date()).subtract(10, 'weeks').subtract(4, this.creationDateLength).format(creationDateFormat),
            Moment(new Date()).subtract(10, 'weeks').subtract(3, this.creationDateLength).format(creationDateFormat),
            Moment(new Date()).subtract(10, 'weeks').subtract(2, this.creationDateLength).format(creationDateFormat),
            Moment(new Date()).subtract(10, 'weeks').subtract(1, this.creationDateLength).format(creationDateFormat),
            Moment(new Date()).subtract(10, 'weeks').format(creationDateFormat)
        ];
        return headings;
    }
}