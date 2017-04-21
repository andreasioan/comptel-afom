import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-search-filter',
    templateUrl: 'search-filter.component.html',
    styleUrls: ['search-filter.component.css']
})

export class SearchFilterComponent implements OnInit {
    orderBy: boolean;
    creationDate: boolean;
    dueDate: boolean;
    reset: boolean;
    searchFilterCollapse: boolean;

    constructor() { }

    ngOnInit() {
        this.setFalse();
        this.onOrderBy();
        this.searchFilterCollapse = false;
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

}