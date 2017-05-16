import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx'

@Injectable()
export class ReportsService {

    constructor(private http: Http) { }

    getCreationDate(length?: string) {
        let params = new URLSearchParams();

        if(length) {
            params.set('length', length);
        }

        return this.http.get('https://comptel-api.herokuapp.com/api/reports/creationdate', { search: params })
            .map((response: Response) => {
                const res = response.json();
                let data = [
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

}