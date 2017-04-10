// import { Injectable } from '@angular/core';

import { Fallout } from '../../models/fallout.model';
import { Resolution } from '../../models/resolution.model';

import { FALLOUTS } from '../seed/fallouts.seed';
import { RESOLUTIONS } from '../seed/resolutions.seed';

// @Injectable()
export class TempService {

    falloutRows: Fallout[] = FALLOUTS;
    resolutionRows: Resolution[] = RESOLUTIONS;

    getFallouts() {

    }

    getResolutions() {

    }
}