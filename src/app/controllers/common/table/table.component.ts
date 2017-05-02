import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Fallout } from '../models/fallout.model';

@Component({
    moduleId: module.id,
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})

export class TableComponent implements OnInit {
    @Input() tableType: String;
    @Input() rows: any[] = [];
    @ViewChild('childModal') public childModal: ModalDirective;

    headings: String[];

    constructor() { }

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

    public showChildModal(): void {
        this.childModal.show();
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }
}