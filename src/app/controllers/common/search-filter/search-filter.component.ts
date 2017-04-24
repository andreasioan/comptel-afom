import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SearchFilter } from '../models/search-filter.model';

@Component({
    moduleId: module.id,
    selector: 'app-search-filter',
    templateUrl: 'search-filter.component.html',
    styleUrls: ['search-filter.component.css']
})

export class SearchFilterComponent implements OnInit {
    @Input() tableType: String;
    @Output() searchFilterQuery = new EventEmitter<SearchFilter>();

    headings: String[];
    searchColumns: string[];

    orderBy: boolean;
    creationDate: boolean;
    dueDate: boolean;
    reset: boolean;
    searchFilterCollapse: boolean;

    formSearchFilter: SearchFilter;

    constructor() { }

    ngOnInit() {
        this.setFalse();
        this.onOrderBy();
        this.searchFilterCollapse = false;

        let falloutHeadings = ['ID', 'Source', 'Source Fallout ID', 'Error Code', 'Creation Timestamp', 'Due Date', 'Status'];
        let resolutionHeadings = ['ID', 'Fallout ID', 'Action ID', 'Source System', 'Creation Timestamp', 'Due Date', 'Status', 'Retry Count'];

        if (this.tableType == 'fallout') {
            this.headings = falloutHeadings;
        }
        else if (this.tableType == 'resolution') {
            this.headings = resolutionHeadings
        }

        let falloutSearch = ['ID', 'Source', 'Source Fallout ID', 'Error Code', 'Status'];
        let resolutionSearch = ['ID', 'Fallout ID', 'Action ID', 'Source System', 'Status', 'Retry Count'];

        if (this.tableType == 'fallout') {
            this.searchColumns = falloutSearch;
        }
        else if (this.tableType == 'resolution') {
            this.searchColumns = resolutionSearch;
        }
    }

    searchFilter() {
        this.searchFilterCollapse = !this.searchFilterCollapse;
    }

    setFalse() {
        this.orderBy = false;
        this.creationDate = false;
        this.dueDate = false;
        this.reset = false;
    }

    onOrderBy() {
        this.setFalse();
        this.orderBy = true;
    }

    onCreationDate() {
        this.setFalse();
        this.creationDate = true;
    }

    onDueDate() {
        this.setFalse();
        this.dueDate = true;
    }

    onReset() {
        this.setFalse();
        this.reset = true;
    }

    onApply() {
        this.formSearchFilter = {
            orderBy: {
                column: 'twat',
                orderBy: 'no'
            },
            search: {
                column: 'what column',
                query: 'DO THINGS'
            }
        };
        
        this.searchFilterQuery.emit(this.formSearchFilter);
    }

}