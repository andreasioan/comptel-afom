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

	constructor() { }

	ngOnInit() {
		this.setFalse();
		this.onCreationDate();
		this.searchFilterCollapse = false;

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

		if (this.searchQuery.search.column) {
			if (this.tableType === 'resolution' && this.searchQuery.search.column === 'source_fallout_id') {
				this.searchQuery.search.column = 'Fallout ID';
			} else {
				this.searchQuery.search.column = getColumnDisplayName(this.searchQuery.search.column);
			}
		}
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
