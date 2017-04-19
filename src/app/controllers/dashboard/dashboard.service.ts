import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Fallout } from '../common/models/fallout.model';
import { Resolution } from '../common/models/resolution.model';

@Injectable()
export class DashboardService {

    falloutRows: Fallout[];
    resolutionsRows: Resolution[];

    constructor(private http: Http) { }

    getFallouts() {
        return this.http.get('https://afom.hickey.io/rest/public.fallout_master')
            .map((response: Response) => {
                const rows = response.json();
                let transformedRows: Fallout[] = [];
                for (let row of rows.models) {
                    transformedRows.push(new Fallout(row.id, row.source_system, row.source_fallout_id, row.source_error_code, row.creation_date, row.due_date, row.status));
                }
                this.falloutRows = transformedRows;
                return this.falloutRows.slice(0, 5);
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getResolutions() {
        return this.http.get('https://afom.hickey.io/rest/public.resolution_action_orchestration')
            .map((response: Response) => {
                const rows = response.json();
                let transformedRows: Resolution[] = [];
                for (let row of rows.models) {
                    transformedRows.push(new Resolution(row.id, row.source_fallout_id, row.action_id, row.target_system, row.creation_date, row.due_date, row.status, row.retry_count));
                }
                this.resolutionsRows = transformedRows;
                return this.resolutionsRows.slice(0, 5);
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}