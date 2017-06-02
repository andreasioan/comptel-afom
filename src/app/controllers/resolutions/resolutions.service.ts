import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Resolution } from '../common/models/resolution.model';
import { SearchFilter } from '../common/models/search-filter.model';
import { getColumnName } from '../common/functions/column-names';

@Injectable()
export class ResolutionsService {
	resolutions: Resolution[];

	constructor(private http: Http) { }

	getResolutions(page?: number, limit?: number, searchFilter?: SearchFilter) {
		const params = new URLSearchParams();

		if (page) {
			params.set('page', page.toString());
		}

		if (limit) {
			params.set('rows', limit.toString());
		}

		if (searchFilter) {
			if (searchFilter.orderBy.column) {
				if (searchFilter.orderBy.orderBy === 'desc') {
					params.set('sort', '-' + searchFilter.orderBy.column);
				} else {
					params.set('sort', searchFilter.orderBy.column);
				}
			}

			if (searchFilter.creationDate.type === 'range') {
				if (searchFilter.creationDate.from && searchFilter.creationDate.to) {
					params.set('createdatefrom', searchFilter.creationDate.from);
					params.set('createdateto', searchFilter.creationDate.to);
				}
			} else if (searchFilter.creationDate.type === 'day') {
				if (searchFilter.creationDate.day) {
					params.set('createdateday', searchFilter.creationDate.day);
				}
			}

			if (searchFilter.dueDate.type === 'range') {
				if (searchFilter.dueDate.from && searchFilter.dueDate.to) {
					params.set('duedatefrom', searchFilter.dueDate.from);
					params.set('duedateto', searchFilter.dueDate.to);
				}
			} else if (searchFilter.dueDate.type === 'day') {
				if (searchFilter.dueDate.day) {
					params.set('duedateday', searchFilter.dueDate.day);
				}
			}

			if (searchFilter.search.query && searchFilter.search.column) {
				params.set('in', getColumnName(searchFilter.search.column));
				params.set('search', searchFilter.search.query.toUpperCase());
			}

			if (searchFilter.system) {
				params.set('system', searchFilter.system);
			}

			if (searchFilter.status) {
				params.set('status', searchFilter.status);
			}
		}

		return this.http.get('https://comptel-api.herokuapp.com/api/resolutions', { search: params })
			.map((response: Response) => {
				const res = response.json();
				const transformedRows: Resolution[] = [];
				for (const row of res.docs) {
					transformedRows.push(new Resolution(
						row.id,
						row.source_fallout_id,
						row.action_id,
						row.target_system,
						row.creation_date,
						row.due_date,
						row.status,
						row.retry_count,
						row.error_code,
						row.error_desc
					));
				}
				this.resolutions = transformedRows;

				const data = {
					fallouts: this.resolutions,
					page: Number(res.page),
					pages: Number(res.pages),
					limit: Number(res.limit)
				};

				return data;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}
}
