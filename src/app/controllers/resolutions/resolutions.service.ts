import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { TempService } from '../common/temp/services/temp.service';

import { Resolution } from '../common/models/resolution.model';

@Injectable()
export class ResolutionsService {
    resolutions: Resolution[];

    constructor(private tempService: TempService, private http: Http) { }

    getResolutions() {
        return this.http.get('https://afom.hickey.io/rest/public.resolution_action_orchestration')
            .map((response: Response) => {
                const rows = response.json();
                let transformedRows: Resolution[] = [];
                for (let row of rows.models) {
                    transformedRows.push(new Resolution(row.id, row.source_fallout_id, row.action_id, row.target_system, row.creation_date, row.due_date, row.status, row.retry_count));
                }
                this.resolutions = transformedRows;
                return this.resolutions;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
} 