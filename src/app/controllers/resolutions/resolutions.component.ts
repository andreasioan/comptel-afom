import { Component, OnInit, ViewChild } from '@angular/core';

import { ResolutionsService } from './resolutions.service';

import { Resolution } from '../common/models/resolution.model';
import { PaginateComponent } from '../common/paginate/paginate.component';
import { SearchFilter } from '../common/models/search-filter.model';

@Component({
    moduleId: module.id,
    selector: 'app-resolutions',
    templateUrl: 'resolutions.component.html',
    providers: [ResolutionsService]
})

export class ResolutionsComponent implements OnInit {
@ViewChild(PaginateComponent) paginateComponent: PaginateComponent;

    resolutionRows: Resolution[];
    resolutionsLoaded: boolean = false;
    paginate: any;
    limit: number = 25;
    page: number = 1;
    searchFilter: SearchFilter;

    constructor(private resolutionService: ResolutionsService) { }

    ngOnInit() {
        this.onResetClicked();
    }

    getResolutions() {
        this.resolutionService.getResolutions(this.page, this.limit, this.searchFilter)
            .subscribe((data: any) => {
                this.resolutionRows = data.fallouts;
                this.paginate = {
                    page: data.page,
                    pages: data.pages,
                    limit: data.limit
                };
                this.resolutionsLoaded = true;
            });
    }

    onSearchFilter(searchQuery: SearchFilter) {
        this.searchFilter = searchQuery;
        this.page = 1;
        this.getResolutions();
        this.resolutionsLoaded = false;
    }

    onPaginate(page: number) {
        this.page = page;
        this.getResolutions();
        this.resolutionsLoaded = false;
    }

    onRows(rows: number) {
        this.limit = rows;
        this.page = 1;
        this.getResolutions();
        this.resolutionsLoaded = false;
    }

    onResetClicked() {
        this.searchFilter = {
            orderBy: {
                column: '',
                orderBy: ''
            },
            creationTimestamp: {
                from: '',
                to: ''
            },
            dueDate: {
                from: '',
                to: ''
            },
            search: {
                column: '',
                query: ''
            }
        };

        this.limit = 25;
        this.page = 1;
        this.getResolutions();
        this.resolutionsLoaded = false;
    }
}