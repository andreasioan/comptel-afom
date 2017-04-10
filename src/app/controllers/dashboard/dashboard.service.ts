import { Injectable } from '@angular/core';

import { TempService } from '../common/temp/services/temp.service';

import { Fallout } from '../common/models/fallout.model';
import { Resolution } from '../common/models/resolution.model';

@Injectable()
export class DashboardService {

    falloutRows: Fallout[];
    resolutionsRows: Resolution[];

    constructor(private tempService: TempService) { 
        this.startup();
    }

    startup() {
        this.falloutRows = this.tempService.getFallouts();
        this.resolutionsRows = this.tempService.getResolutions();
    }

    getFallouts() {
        return this.falloutRows;
    }

    getResolutions() {
        return this.resolutionsRows;
    }

}