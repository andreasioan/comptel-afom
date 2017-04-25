import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Resolution } from '../common/models/resolution.model';
import { SearchFilter } from '../common/models/search-filter.model';

@Injectable()
export class ResolutionsService {
    resolutions: Resolution[];

    constructor(private http: Http) { }

    getResolutions(page?: number, limit?: number, searchFilter?: SearchFilter) {
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

        return this.http.get('http://localhost:3000/api/resolutions', { search: params })
            .map((response: Response) => {
                const res = response.json();
                let transformedRows: Resolution[] = [];
                for (let row of res.docs) {
                    transformedRows.push(new Resolution(row.id, row.source_fallout_id, row.action_id, row.target_system, row.creation_date, row.due_date, row.status, row.retry_count));
                }
                this.resolutions = transformedRows;

                let data = {
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