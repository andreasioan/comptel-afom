import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx'

import { Detail } from '../models/detail.model';

@Injectable()
export class TableService {
    details: Detail[];

    constructor(private http: Http) { }

    getDetail(id: string) {
        return this.http.get('https://comptel-api.herokuapp.com/api/details/' + id)
            .map((response: Response) => {
                const res = response.json();

                let transformedRows: Detail[] = [];
                for (let row of res) {
                    transformedRows.push(new Detail(row.id, row.fallout_id, row.property_name, row.property_value));
                }
                this.details = transformedRows;
                return this.details;

            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}