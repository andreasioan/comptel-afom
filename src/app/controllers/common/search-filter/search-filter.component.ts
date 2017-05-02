import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SearchFilter } from '../models/search-filter.model';
import { getColumnName } from '../function/functions';

@Component({
    moduleId: module.id,
    selector: 'app-search-filter',
    templateUrl: 'search-filter.component.html',
    styleUrls: ['search-filter.component.css']
})

export class SearchFilterComponent implements OnInit {
    @Input() tableType: String;
    @Input() searchQuery: SearchFilter = {};
    @Output() searchFilterQuery = new EventEmitter<SearchFilter>();
    @Output() resetClicked = new EventEmitter<any>();

    headings: String[];
    searchColumns: string[];

    creationDate: boolean;
    dueDate: boolean;
    reset: boolean;
    searchFilterCollapse: boolean;

    // formSearchFilter: SearchFilter;

    constructor() { }

    ngOnInit() {
        this.setFalse();
        this.onCreationDate();
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
        this.creationDate = false;
        this.dueDate = false;
        this.reset = false;
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

    onResetClick() {
        this.resetClicked.emit();
    }

    onApply() {
        this.searchQuery.creationTimestamp = {
            from: this.searchQuery.creationTimestamp.from,
            to: this.searchQuery.creationTimestamp.to
        };
        this.searchQuery.dueDate = {
            from: this.searchQuery.dueDate.from,
            to: this.searchQuery.dueDate.to
        };
        this.searchQuery.search = {
            column: getColumnName(this.searchQuery.search.column),
            query: this.searchQuery.search.query
        }

        console.log(this.searchQuery);

        this.searchFilterQuery.emit(this.searchQuery);
    }
}