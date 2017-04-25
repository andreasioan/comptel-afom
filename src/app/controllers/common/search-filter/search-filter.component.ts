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
    @Input() searchQuery: SearchFilter = {};
    @Output() searchFilterQuery = new EventEmitter<SearchFilter>();
    @Output() resetClicked = new EventEmitter<any>();

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

    onResetClick() {
        this.resetClicked.emit();
    }

    onApply() {
        this.formSearchFilter = {
            orderBy: {
                column: this.getColumnName(this.searchQuery.orderBy.column),
                orderBy: this.searchQuery.orderBy.orderBy
            },
            creationTimestamp: {
                from: this.searchQuery.creationTimestamp.from,
                to: this.searchQuery.creationTimestamp.to
            },
            dueDate: {
                from: this.searchQuery.dueDate.from,
                to: this.searchQuery.dueDate.to
            },
            search: {
                column: this.getColumnName(this.searchQuery.search.column),
                query: this.searchQuery.search.query
            }
        };

        this.searchFilterQuery.emit(this.formSearchFilter);
    }

    getColumnName(column: string) {
        switch (column) {
            case 'ID':
                return 'id';
            case 'Source':
                return 'source';
            case 'Source Fallout ID':
                return 'source_fallout_id';
            case 'Error Code':
                return 'error_code';
            case 'Creation Timestamp':
                return 'creation_timestamp';
            case 'Due Date':
                return 'due_date';
            case 'Status':
                return 'status';
            case 'Fallout ID':
                return 'source_fallout_id';
            case 'Action ID':
                return 'action_id';
            case 'Source System':
                return 'target_system';
            case 'Retry Count':
                return 'retry_count';
        }
    }

}