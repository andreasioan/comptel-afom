import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ReportsService {

	constructor(private http: Http) { }

	getDates(length: string, dateType: string, source: string, target: string) {
		const params = new URLSearchParams();
		params.set('length', length);
		params.set('datetype', dateType);
		if (source !== 'All') {
			params.set('source', source);
		}
		if (target !== 'All') {
			params.set('target', target);
		}

		return this.http.get('https://comptel-api.herokuapp.com/api/reports/dates', { search: params })
			.map((response: Response) => {
				const res = response.json();
				const data = [
					{
						data: [
							res.fallouts_month_6_count,
							res.fallouts_month_5_count,
							res.fallouts_month_4_count,
							res.fallouts_month_3_count,
							res.fallouts_month_2_count,
							res.fallouts_month_1_count,
							res.fallouts_month_0_count
						],
						label: 'Fallouts'
					},
					{
						data: [
							res.resolutions_month_6_count,
							res.resolutions_month_5_count,
							res.resolutions_month_4_count,
							res.resolutions_month_3_count,
							res.resolutions_month_2_count,
							res.resolutions_month_1_count,
							res.resolutions_month_0_count
						],
						label: 'Resolutions'
					}
				];
				return data;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}

	getFallout(code: number, source: string, length: any) {
		const params = new URLSearchParams();
		params.set('length', length);
		if (code) {
			params.set('code', code.toString());
		}
		if (source) {
			params.set('source', source);
		}

		return this.http.get('https://comptel-api.herokuapp.com/api/reports/fallout', { search: params })
			.map((response: Response) => {
				if (code) {
					const res = response.json();
					const data = [
						res.error_code_0,
						res.error_code_1,
						res.error_code_2,
						res.error_code_3,
						res.error_code_4,
						res.error_code_5,
						res.error_code_6,
						res.error_code_7,
						res.error_code_8,
						res.error_code_9,
						res.error_code_10,
						res.error_code_11,
						res.error_code_12,
						res.error_code_13,
						res.error_code_14,
					];
					return data;
				} else {
					const res = response.json();
					const data = [
						res.started_count,
						res.created_count,
						res.error_count,
						res.closed_failure_count,
						res.closed_successfull_count
					];
					return data;
				}

			})
			.catch((error: Response) => Observable.throw(error.json()));
	}

	getFalloutAverage(length: any) {
		const params = new URLSearchParams();
		params.set('length', length);
		return this.http.get('https://comptel-api.herokuapp.com/api/reports/falloutaverage', { search: params })
			.map((response: Response) => {
				const res = response.json();
				const data = [
					res.fallout_average_0,
					res.fallout_average_1,
					res.fallout_average_2
				];
				return data;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}

	getResolution(target: string, type: string, length: any) {
		const params = new URLSearchParams();
		params.set('length', length);
		params.set('target', target);
		params.set('type', type);

		return this.http.get('https://comptel-api.herokuapp.com/api/reports/resolution', { search: params })
			.map((response: Response) => {
				if (type === 'error') {
					const res = response.json();
					const data = [
						res.error_code_0,
						res.error_code_1,
						res.error_code_2
					];
					return data;
				} else if (type === 'status') {
					const res = response.json();
					const data = [
						res.started_count,
						res.closed_failure_count,
						res.retry_started_count,
						res.retry_success_count,
						res.closed_successful_count,
						res.retry_failure_count,
						res.error_count
					];
					return data;
				}

			})
			.catch((error: Response) => Observable.throw(error.json()));
	}

	getSourceData() {
		return this.http.get('https://comptel-api.herokuapp.com/api/reports/sourcedata')
			.map((response: Response) => {
				const res = response.json();
				const falloutData = [
					res.fallout_COM,
					res.fallout_PNI,
					res.fallout_ORDERMANAGER
				];
				const resolutionData = [
					res.resolution_PNI,
					res.resolution_HFC,
					res.resolution_FTTN
				];

				const data = {
					falloutData: falloutData,
					resolutionData: resolutionData
				};

				return data;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}
}
