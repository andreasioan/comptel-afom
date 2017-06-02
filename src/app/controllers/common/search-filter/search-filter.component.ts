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

	// headings: String[];
	searchColumns: string[];

	creationDate: boolean;
	dueDate: boolean;
	sourceSystem: boolean;
	status: boolean;
	reset: boolean;
	searchFilterCollapse: boolean;
	dateTypes: any[] = [];

	// formSearchFilter: SearchFilter;

	constructor() { }

	ngOnInit() {
		this.setFalse();
		this.onCreationDate();
		this.searchFilterCollapse = false;

		// const falloutHeadings = ['ID', 'Source', 'Source Fallout ID', 'Error Code', 'Creation Date', 'Due Date', 'Status'];
		// const resolutionHeadings = ['ID', 'Fallout ID', 'Action ID', 'Source System', 'Creation Date', 'Due Date', 'Status', 'Retry Count'];

		// if (this.tableType === 'fallout') {
		// 	this.headings = falloutHeadings;
		// } else if (this.tableType === 'resolution') {
		// 	this.headings = resolutionHeadings;
		// }

		const falloutSearch = ['ID', 'Source Fallout ID', 'Error Code'];
		const resolutionSearch = ['ID', 'Fallout ID', 'Action ID'];

		if (this.tableType === 'fallout') {
			this.searchColumns = falloutSearch;
		} else if (this.tableType === 'resolution') {
			this.searchColumns = resolutionSearch;
		}

		this.dateTypes = [
			{ value: 'day', display: 'Single Day' },
			{ value: 'range', display: 'Range' }
		];
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
		this.searchQuery.search.query.toUpperCase();
		this.searchQuery.search.column = getColumnName(this.searchQuery.search.column);
		this.searchFilterQuery.emit(this.searchQuery);
	}
}
