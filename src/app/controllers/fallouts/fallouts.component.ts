import { Component, OnInit } from '@angular/core';

import { FalloutsService } from './fallouts.service';

import { Fallout } from '../common/models/fallout.model';

@Component({
    moduleId: module.id,
    selector: 'app-fallouts',
    templateUrl: 'fallouts.component.html',
    providers: [FalloutsService]
})

export class FalloutsComponent implements OnInit {
    falloutRows: Fallout[];

    constructor(private falloutsService: FalloutsService) { }

    ngOnInit() {
        this.falloutRows = this.falloutsService.getFallouts();
    }
}