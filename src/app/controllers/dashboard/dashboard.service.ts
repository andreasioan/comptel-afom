import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Fallout } from '../common/models/fallout.model';
import { Resolution } from '../common/models/resolution.model';
import { DashboardGet } from '../common/models/dashboard-get.model';

@Injectable()
export class DashboardService {

    dashboard: DashboardGet;

    constructor(private http: Http) { }

    getDashData() {
        return this.http.get('https://comptel-api.herokuapp.com/api/dashboard')
            .map((response: Response) => {
                const res = response.json();

                let fallouts: Fallout[] = [];
                for (let row of res.fallouts) {
                    fallouts.push(new Fallout(row.id, row.source_system, row.source_fallout_id, row.source_error_code, row.creation_date, row.due_date, row.status));
                }

                let resolutions: Resolution[] = [];
                for (let row of res.resolutions) {
                    resolutions.push(new Resolution(row.id, row.source_fallout_id, row.action_id, row.target_system, row.creation_date, row.due_date, row.status, row.retry_count, row.error_code, row.error_desc));
                }

                this.dashboard = {
                    fallouts: fallouts,
                    resolutions: resolutions,
                    totalFallouts: res.total_fallouts,
                    totalResolutions: res.total_resolutions,
                    falloutsToday: res.fallouts_today,
                    resolutionsToday: res.resolutions_today,
                    totalUnresolvesFallouts: res.total_unresolved_fallouts,
                    donutChart: {
                        startedCount: res.started_count,
                        createdCount: res.created_count,
                        errorCount: res.error_count,
                        closedFailureCount: res.closed_failure_count,
                        closedSuccessfullCount: res.closed_successfull_count
                    },
                    barChart: {
                        falloutsDay0: res.fallouts_day_0_count, 
                        falloutsDay1: res.fallouts_day_1_count, 
                        falloutsDay2: res.fallouts_day_2_count, 
                        falloutsDay3: res.fallouts_day_3_count, 
                        falloutsDay4: res.fallouts_day_4_count, 
                        falloutsDay5: res.fallouts_day_5_count,
                        resolutionsDay0: res.resolutions_day_0_count, 
                        resolutionsDay1: res.resolutions_day_1_count, 
                        resolutionsDay2: res.resolutions_day_2_count, 
                        resolutionsDay3: res.resolutions_day_3_count, 
                        resolutionsDay4: res.resolutions_day_4_count, 
                        resolutionsDay5: res.resolutions_day_5_count,
                    }
                };
                return this.dashboard;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}