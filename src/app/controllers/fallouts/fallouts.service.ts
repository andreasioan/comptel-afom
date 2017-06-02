import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Fallout } from '../common/models/fallout.model';
import { SearchFilter } from '../common/models/search-filter.model';

@Injectable()
export class FalloutsService {
	fallouts: Fallout[];

	constructor(private http: Http) { }

	getFallouts(page?: number, limit?: number, searchFilter?: SearchFilter) {
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
				params.set('in', searchFilter.search.column);
				params.set('search', searchFilter.search.query.toUpperCase());
			}
		}

		return this.http.get('https://comptel-api.herokuapp.com/api/fallouts', { search: params })
			.map((response: Response) => {
				const res = response.json();
				const transformedRows: Fallout[] = [];
				for (const row of res.docs) {
					transformedRows.push(new Fallout(
						row.id,
						row.source_system,
						row.source_fallout_id,
						row.source_error_code,
						row.creation_date,
						row.due_date,
						row.status
					));
				}
				this.fallouts = transformedRows;

				const data = {
					fallouts: this.fallouts,
					page: Number(res.page),
					pages: Number(res.pages),
					limit: Number(res.limit)
				};

				return data;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}
}
