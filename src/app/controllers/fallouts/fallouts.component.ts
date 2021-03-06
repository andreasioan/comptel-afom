import { Component, OnInit, ViewChild } from '@angular/core';

import { FalloutsService } from './fallouts.service';

import { Fallout } from '../common/models/fallout.model';
import { SearchFilter } from '../common/models/search-filter.model';
import { PaginateComponent } from '../common/paginate/paginate.component';

@Component({
	moduleId: module.id,
	selector: 'app-fallouts',
	templateUrl: 'fallouts.component.html',
	providers: [FalloutsService]
})

export class FalloutsComponent implements OnInit {
	@ViewChild(PaginateComponent) paginateComponent: PaginateComponent;

	falloutRows: Fallout[];
	falloutsLoaded = false;
	paginate: any;
	limit = 25;
	page = 1;
	searchFilter: SearchFilter;

	showDate: string;

	constructor(private falloutsService: FalloutsService) { }

	ngOnInit() {
		this.onResetClicked();

		this.showDate = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
	}

	getFallouts() {
		this.falloutsService.getFallouts(this.page, this.limit, this.searchFilter)
			.subscribe((data: any) => {
				this.falloutRows = data.fallouts;
				this.paginate = {
					page: data.page,
					pages: data.pages,
					limit: data.limit
				};
				this.falloutsLoaded = true;
			});
	}

	onSearchFilter(searchQuery: SearchFilter) {
		this.searchFilter = searchQuery;
		this.page = 1;
		this.getFallouts();
		this.falloutsLoaded = false;
	}

	onPaginate(page: number) {
		this.page = page;
		this.getFallouts();
		this.falloutsLoaded = false;
	}

	onSort(data: any) {
		this.searchFilter.orderBy = data;
		this.page = 1;
		this.getFallouts();
		this.falloutsLoaded = false;
	}

	onRows(rows: number) {
		this.limit = rows;
		this.page = 1;
		this.getFallouts();
		this.falloutsLoaded = false;
	}

	onResetClicked() {
		this.searchFilter = {
			orderBy: {
				column: 'creation_date',
				orderBy: 'desc'
			},
			creationDate: {
				from: '',
				to: '',
				type: 'day',
				day: ''
			},
			dueDate: {
				from: '',
				to: '',
				type: 'day',
				day: ''
			},
			search: {
				column: '',
				query: ''
			},
			system: '',
			status: ''
		};

		this.limit = 25;
		this.page = 1;
		this.getFallouts();
		this.falloutsLoaded = false;
	}
}
