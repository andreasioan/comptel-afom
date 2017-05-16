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
    isDateLoaded: boolean;
    dateType: string;

    falloutDate: any[];
    falloutHeadings: any[] = [];
    isFalloutLoaded: boolean;
    falloutCode: number;
    isFalloutAverageLoaded: boolean;
    falloutAverageData: any[];
    falloutAverageHeadings: any[];

    constructor(private reportsService: ReportsService) { }

    ngOnInit() {
        this.setDate('days', 'creation_date');
        this.setFallout(1001);
        this.setFalloutAverage();

        this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
    }

    setDate(length: any, dateType?: string) {
        this.dateType = dateType ? dateType : this.dateType;
        this.isDateLoaded = false;
        this.creationDateLength = length;
        this.reportsService.getDates(length, this.dateType)
            .subscribe((data) => {
                this.creationDateData = data;
                this.creationDateHeadings = this.setDateHeadings();
                this.isDateLoaded = true;
            });
    }
    setDateHeadings() {
        let creationDateFormat: string = 'dddd';

        switch (this.creationDateLength) {
            case 'hours':
                creationDateFormat = 'hh:00';
                break;
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

    setFallout(code: number) {
        this.isFalloutLoaded = false;
        this.falloutCode = code;
        this.reportsService.getFallout(this.falloutCode)
            .subscribe((data) => {
                this.falloutDate = data;
                this.setFalloutHeadings();
                this.isFalloutLoaded = true;
            });
    }
    setFalloutHeadings() {
        let temp = [];
        for (let i = 0; i < 15; i++) {
            temp.push(this.falloutCode + i);
        }
        this.falloutHeadings = temp;
    }
    setFalloutAverage() {
        this.isFalloutAverageLoaded = false;
        this.reportsService.getFalloutAverage()
            .subscribe((data) => {
                this.falloutAverageData = data;
                this.falloutAverageHeadings = ['1001 - 1015', '1101 - 1115', '1201 - 1215'];
                this.isFalloutAverageLoaded = true;
            });
    }

}