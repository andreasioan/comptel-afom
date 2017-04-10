import { Injectable } from '@angular/core';

import { TempService } from '../common/temp/services/temp.service';

import { Resolution } from '../common/models/resolution.model';

@Injectable()
export class ResolutionsService {
    resolutions: Resolution[];

    constructor(private tempService: TempService) { }
    
    getResolutions() {
        this.resolutions = this.tempService.getAllResolutions();
        return this.resolutions;
    }
} 