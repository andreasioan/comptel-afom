import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { DetailsModalComponent } from './details-modal/details-modal.component';

import { Detail } from '../models/detail.model';

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

    headings: String[];

    //modal
    showModal: boolean = false;
    isDetailsLoaded: boolean = false;
    detailsRows: Detail[];
    falloutId: string;

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

    showDetails(id: string) {
        this.showModal = true;
        this.falloutId = id;
        this.tableService.getDetail(id)
            .subscribe((data: Detail[]) => {
                this.detailsRows = data;
                this.isDetailsLoaded = true;
            });

        setTimeout(() => {
            // Set timeout removes the a-synchronous nature. 
            this.childModal.showChildModal();
        });
    }

    detailsClosed() {
        this.showModal = false;
        this.isDetailsLoaded = false;
    }
}
