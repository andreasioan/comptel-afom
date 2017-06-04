import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { DetailsModalComponent } from './details-modal/details-modal.component';
import { ResolutionErrorModalComponent } from './resolution-error-modal/resolution-error-modal.component';

import { Detail } from '../models/detail.model';
import { Fallout } from '../models/fallout.model';
import { Resolution } from '../models/resolution.model';
import { getColumnName } from '../functions/column-names';

import { TableService } from './table.service';


@Component({
	moduleId: module.id,
	selector: 'app-table',
	templateUrl: 'table.component.html',
	providers: [TableService]
})

export class TableComponent implements OnInit {
	@ViewChild(DetailsModalComponent) public childModal: DetailsModalComponent;
	@ViewChild(ResolutionErrorModalComponent) public resErrorModal: ResolutionErrorModalComponent;

	@Input() tableType: String;
	@Input() rows: any[] = [];
	@Input() allowSort = true;
	@Input() sort: any;
	@Output() sortColumn = new EventEmitter<any>();

	headings: String[];


	// details modal
	showModal = false;
	isDetailsLoaded = false;
	detailsRows: Detail[];
	falloutDetail: Fallout;

	// resolution error modal
	showResError = false;
	resolutionError: Resolution;

	constructor(private tableService: TableService) { }

	ngOnInit() {
		const falloutHeadings = [
			'ID',
			'Source System',
			'Source Fallout ID',
			'Error Code',
			'Creation Date',
			'Due Date',
			'Status'
		];
		const resolutionHeadings = [
			'ID',
			'Fallout ID',
			'Action ID',
			'Target System',
			'Creation Date',
			'Due Date',
			'Status',
			'Retry Count',
			'Error'
		];

		if (this.tableType === 'fallout') {
			this.headings = falloutHeadings;
		} else if (this.tableType === 'resolution') {
			this.headings = resolutionHeadings;
		}
	}

	showDetails(fallout: Fallout) {
		this.showModal = true;
		this.falloutDetail = fallout;
		this.tableService.getDetail(fallout.ID)
			.subscribe((data: Detail[]) => {
				this.detailsRows = data;
				this.isDetailsLoaded = true;
			});

		setTimeout(() => {
			// Set timeout removes the a-synchronous nature - to allow the modal object to be craeted
			this.childModal.showChildModal();
		});
	}

	detailsClosed() {
		this.showModal = false;
		this.isDetailsLoaded = false;
	}

	columnName(column: string) {
		return getColumnName(column);
	}

	onSort(heading: string) {
		if (this.allowSort) {
			let order = 'desc';

			if (this.columnName(heading) === this.sort.column) {
				order = this.sort.orderBy === 'desc' ? 'asc' : 'desc';
			}

			const newSort = {
				column: this.columnName(heading),
				orderBy: order
			};

			this.sortColumn.emit(newSort);
		}
	}

	onViewResolutionError(resolution: Resolution) {
		this.showResError = true;
		this.resolutionError = resolution;
		setTimeout(() => {
			this.resErrorModal.showChildModal();
		});
	}

	onResErrorClose() {
		this.showResError = false;
		this.resolutionError = null;
	}
}
