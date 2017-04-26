import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx'

import { Fallout } from '../common/models/fallout.model';
import { SearchFilter } from '../common/models/search-filter.model';

@Injectable()
export class FalloutsService {
    fallouts: Fallout[];

    constructor(private http: Http) { }

    getFallouts(page?: number, limit?: number, searchFilter?: SearchFilter) {
        let params = new URLSearchParams();

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

            if (searchFilter.creationTimestamp.from && searchFilter.creationTimestamp.to) {
                params.set('fromDate', searchFilter.creationTimestamp.from);
                params.set('toDate', searchFilter.creationTimestamp.to);
            }

            if (searchFilter.dueDate.from && searchFilter.dueDate.to) {
                params.set('fromDate', searchFilter.dueDate.from);
                params.set('toDate', searchFilter.dueDate.to);
            }

            if (searchFilter.search.query && searchFilter.search.column) {
                params.set('in', searchFilter.search.column);
                params.set('search', searchFilter.search.query.toUpperCase());
            }
        }

        return this.http.get('https://comptel-api.herokuapp.com/api/fallouts', { search: params })
            .map((response: Response) => {
                const res = response.json();
                let transformedRows: Fallout[] = [];
                for (let row of res.docs) {
                    transformedRows.push(new Fallout(row.id, row.source, row.source_fallout_id, row.error_code, row.creation_timestamp, row.due_date, row.status));
                }
                this.fallouts = transformedRows;

                let data = {
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