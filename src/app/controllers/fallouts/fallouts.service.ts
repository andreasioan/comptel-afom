import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx'

import { TempService } from '../common/temp/services/temp.service';

import { Fallout } from '../common/models/fallout.model';

@Injectable()
export class FalloutsService {
    fallouts: Fallout[];

    constructor(private tempService: TempService, private http: Http) { }

    getFallouts() {
        return this.http.get('https://afom.hickey.io/rest/public.fallout_master')
            .map((response: Response) => {
                const rows = response.json();
                let transformedRows: Fallout[] = [];
                for (let row of rows.models) {
                    transformedRows.push(new Fallout(row.id, row.source_system, row.source_fallout_id, row.source_error_code, row.creation_date, row.due_date, row.status));
                }
                this.fallouts = transformedRows;
                return this.fallouts;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}