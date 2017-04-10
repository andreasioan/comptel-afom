import { Injectable } from '@angular/core';

import { TempService } from '../common/temp/services/temp.service';

import { Fallout } from '../common/models/fallout.model';

@Injectable()
export class FalloutsService {
    fallouts: Fallout[];

    constructor(private tempService: TempService) { }
    
    getFallouts() {
        this.fallouts = this.tempService.getAllFallouts();
        return this.fallouts;
    }
}