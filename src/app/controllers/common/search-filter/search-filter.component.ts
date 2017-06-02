import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SearchFilter } from '../models/search-filter.model';
import { getColumnName, getColumnDisplayName } from '../functions/column-names';

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
	system: boolean;
	status: boolean;
	reset: boolean;
	searchFilterCollapse: boolean;
	systems: any[] = [];
	statuses: any[] = [];
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

		const falloutStatuses = ['STARTED', 'CREATED', 'CLOSED-SUCCESSFUL', 'CLOSED-FAILURE', 'ERROR'];
		const resolutionStatuses = ['STARTED', 'RETRY-STARTED', 'RETRY-SUCCESS', 'RETRY-FAILURE', 'CLOSED-SUCCESSFUL', 'CLOSED-FAILURE', 'ERROR'];

		const falloutSystems = ['COM', 'PNI', 'ORDERMANAGER'];
		const resolutionSystems = ['PNI', 'HFC-SRI', 'FTTN-SRI'];

		if (this.tableType === 'fallout') {
			this.searchColumns = falloutSearch;
			this.systems = falloutSystems;
			this.statuses = falloutStatuses;
		} else if (this.tableType === 'resolution') {
			this.searchColumns = resolutionSearch;
			this.systems = resolutionSystems;
			this.statuses = resolutionStatuses;
		}

		this.dateTypes = [
			{ value: 'day', display: 'Single Day' },
			{ value: 'range', display: 'Range' }
		];

		this.searchQuery.search.column = getColumnDisplayName(this.searchQuery.search.column);
	}

	searchFilter() {
		this.searchFilterCollapse = !this.searchFilterCollapse;
	}

	setFalse() {
		this.creationDate = false;
		this.dueDate = false;
		this.system = false;
		this.status = false;
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

	onSystem() {
		this.setFalse();
		this.system = true;
	}

	onStatus() {
		this.setFalse();
		this.status = true;
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
