import { Component, OnInit } from '@angular/core';

import { FalloutsService } from './fallouts.service';

import { Fallout } from '../common/models/fallout.model';
import { SearchFilter } from '../common/models/search-filter.model';

@Component({
    moduleId: module.id,
    selector: 'app-fallouts',
    templateUrl: 'fallouts.component.html',
    providers: [FalloutsService]
})

export class FalloutsComponent implements OnInit {
    falloutRows: Fallout[];
    falloutsLoaded: boolean = false;

    constructor(private falloutsService: FalloutsService) { }

    ngOnInit() {
        this.falloutsService.getFallouts()
            .subscribe((fallouts: Fallout[]) => {
                this.falloutRows = fallouts
                this.falloutsLoaded = true;
            });
    }

    onSearchFilter(searchQuery: SearchFilter) {
        // console.log(searchQuery);
    }
}