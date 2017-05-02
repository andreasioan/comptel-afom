import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { DetailsModalComponent } from './details-modal/details-modal.component';

import { Detail } from '../models/detail.model';
import { Fallout } from '../models/fallout.model';

import { TableService } from './table.service';


@Component({
    moduleId: module.id,
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css'],
    providers: [TableService]
})

export class TableComponent implements OnInit {
    @ViewChild(DetailsModalComponent) public childModal: DetailsModalComponent;

    @Input() tableType: String;
    @Input() rows: any[] = [];
    @Input() allowSort: boolean  = true;

    headings: String[];

    //modal
    showModal: boolean = false;
    isDetailsLoaded: boolean = false;
    detailsRows: Detail[];
    falloutDetail: Fallout;

    constructor(private tableService: TableService) { }

    ngOnInit() {
        let falloutHeadings = ['ID', 'Source', 'Source Fallout ID', 'Error Code', 'Creation Timestamp', 'Due Date', 'Status'];
        let resolutionHeadings = ['ID', 'Fallout ID', 'Action ID', 'Source System', 'Creation Timestamp', 'Due Date', 'Status', 'Retry Count'];

        if (this.tableType == 'fallout') {
            this.headings = falloutHeadings;
        }
        else if (this.tableType == 'resolution') {
            this.headings = resolutionHeadings
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
}
