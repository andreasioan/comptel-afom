import { Component, OnInit } from '@angular/core';

import { ResolutionsService } from './resolutions.service';

import { Resolution } from '../common/models/resolution.model';

@Component({
    moduleId: module.id,
    selector: 'app-resolutions',
    templateUrl: 'resolutions.component.html',
    providers: [ResolutionsService]
})

export class ResolutionsComponent implements OnInit {
    resolutionRows: Resolution[];

    constructor(private resolutionService: ResolutionsService) { }

    ngOnInit() { 
        this.resolutionRows = this.resolutionService.getResolutions();
    }
}