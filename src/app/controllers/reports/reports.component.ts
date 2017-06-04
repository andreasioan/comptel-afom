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
	sourceSystem = 'All';
	sourceSystems = ['All', 'COM', 'PNI', 'ORDERMANAGER'];
	targetSystem = 'All';
	targetSystems = ['All', 'PNI', 'HFC-SRI', 'FTTN-SRI'];

	falloutData: any[];
	falloutHeadings: any[] = [];
	isFalloutLoaded: boolean;
	falloutCode: number;
	isFalloutAverageLoaded: boolean;
	falloutAverageData: any[];
	falloutAverageHeadings: any[];
	falloutType: string;
	falloutSourceSystem = 'All';
	falloutLength: Moment.unitOfTime.DurationConstructor = 'months';

	resolutionData: any[];
	resolutionHeadings: any[];
	isResolutionLoaded: boolean;
	resolutionType: string;
	resolutionSystem = 'All';
	resolutionLength: Moment.unitOfTime.DurationConstructor = 'months';

	isSourceLoaded: boolean;
	resolutionSourceHeadings = ['PNI', 'HFC-SRI', 'FTTN-SRI'];
	resolutionSourceData: any[];
	falloutSourceHeadings = ['COM', 'PNI', 'ORDERMANAGER'];
	falloutSourceData: any[];

	constructor(private reportsService: ReportsService) { }

	ngOnInit() {
		this.setDate('days', 'creation_date');
		this.setFallout(1001, 'error');
		this.setFalloutAverage();
		this.setResolution('error', 'All');
		this.setSourceData();

		this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
	}

	setDate(length?: any, dateType?: string) {
		this.dateType = dateType ? dateType : this.dateType;
		this.isDateLoaded = false;
		this.creationDateLength = length ? length : this.creationDateLength;
		this.reportsService.getDates(this.creationDateLength, this.dateType, this.sourceSystem, this.targetSystem)
			.subscribe((data) => {
				this.creationDateData = data;
				this.creationDateHeadings = this.setDateHeadings();
				this.isDateLoaded = true;
			});
	}
	setDateHeadings() {
		let creationDateFormat = 'dddd';

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

		const headings: any[] = [];

		for (let i = 6; i >= 0; i--) {
			headings.push(Moment(new Date()).subtract(10, 'weeks').subtract(i, this.creationDateLength).format(creationDateFormat));
		}
		return headings;
	}

	setFallout(code?: number, falloutType?: string, length?: any) {
		if (falloutType === 'error') {
			this.setFalloutAverage();
		}
		if (falloutType === 'status') {
			this.falloutSourceSystem = 'All';
		}
		if (length) {
			this.falloutLength = length;
		}

		this.falloutType = falloutType ? falloutType : this.falloutType;
		this.isFalloutLoaded = false;
		this.falloutCode = code ? code : this.falloutCode;
		if (this.falloutType === 'error') {
			// this.setFalloutAverage();
			this.reportsService.getFallout(this.falloutCode, null, this.falloutLength)
				.subscribe((data) => {
					this.falloutData = data;
					this.setFalloutHeadings();
					this.isFalloutLoaded = true;
				});
		} else if (this.falloutType === 'status') {
			this.reportsService.getFallout(null, this.falloutSourceSystem, this.falloutLength)
				.subscribe((data) => {
					this.falloutData = data;
					this.setFalloutHeadings();
					this.isFalloutLoaded = true;
				});
		}
	}
	setFalloutHeadings() {
		let temp = [];
		if (this.falloutType === 'error') {
			for (let i = 0; i < 15; i++) {
				temp.push(this.falloutCode + i);
			}
		} else if (this.falloutType === 'status') {
			temp = [
				'Started',
				'Created',
				'Error',
				'Closed-Failure',
				'Closed-Successful'
			];
		}
		this.falloutHeadings = temp;
	}
	setFalloutAverage() {
		this.isFalloutAverageLoaded = false;
		this.reportsService.getFalloutAverage(this.falloutLength)
			.subscribe((data) => {
				this.falloutAverageData = data;
				this.falloutAverageHeadings = ['1001 - 1015', '1101 - 1115', '1201 - 1215'];
				this.isFalloutAverageLoaded = true;
			});
	}

	setResolution(resolutionType?: string, source?: string, length?: any) {
		if (resolutionType) {
			this.resolutionType = resolutionType;
			this.resolutionSystem = source;
		}

		if (length) {
			this.resolutionLength = length;
		}

		this.isResolutionLoaded = false;
		if (this.resolutionType === 'error') {
			this.reportsService.getResolution(this.resolutionSystem, this.resolutionType, this.resolutionLength)
				.subscribe((data) => {
					this.resolutionData = data;
					this.resolutionHeadings = ['ERR001', 'ERR002', 'ERR003'];
					this.isResolutionLoaded = true;
				});
		} else if (this.resolutionType === 'status') {
			this.reportsService.getResolution(this.resolutionSystem, this.resolutionType, this.resolutionLength)
				.subscribe((data) => {
					this.resolutionData = data;
					this.resolutionHeadings = [
						'Started',
						'Closed-Failure',
						'Retry-Started',
						'Retry-Success',
						'Closed-Successful',
						'Retry-Failure',
						'Error'
					];
					this.isResolutionLoaded = true;
				});
		}
	}

	setSourceData() {
		this.isSourceLoaded = false;

		this.reportsService.getSourceData()
			.subscribe((data) => {
				this.falloutSourceData = data.falloutData;
				this.resolutionSourceData = data.resolutionData;
				this.isSourceLoaded = true;
			});
	}
}
