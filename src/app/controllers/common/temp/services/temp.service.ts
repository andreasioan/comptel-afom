// import { Injectable } from '@angular/core';

import { Fallout } from '../../models/fallout.model';
import { Resolution } from '../../models/resolution.model';

import { FALLOUTS } from '../seed/fallouts.seed';
import { RESOLUTIONS } from '../seed/resolutions.seed';

// @Injectable()
export class TempService {

    falloutRows: Fallout[] = FALLOUTS;
    resolutionRows: Resolution[] = RESOLUTIONS;


    // FALLOUTS
    getFallouts() {
        this.sortFallouts(this.falloutRows);
        return this.falloutRows.slice(0, 5);
    }

    sortFallouts(fallouts: Fallout[]) {
        fallouts.sort(function (a, b) {
            var falloutA = a.ID.toUpperCase();
            var falloutB = b.ID.toUpperCase();

            if (falloutA > falloutB) {
                return -1
            } else if (falloutA < falloutB) {
                return 1
            } else {
                return 0;
            }
        });
    }

    getAllFallouts() {
        this.sortFallouts(this.falloutRows);
        return this.falloutRows.slice();
    }


    // RESOLUTIONS
    getResolutions() {
        this.sortResolutions(this.resolutionRows);
        return this.resolutionRows.slice(0, 5);
    }

    sortResolutions(resolutions: Resolution[]) {
        resolutions.sort(function (a, b) {
            return a.ID + b.ID;
        });
    }

    getAllResolutions() {
        this.sortResolutions(this.resolutionRows);
        return this.resolutionRows.slice();
    }
}