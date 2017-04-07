import { Component, OnInit, Input } from '@angular/core';

import { Fallout } from '../models/fallout.model';

@Component({
    moduleId: module.id,
    selector: 'app-table',
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    @Input() tableType: String;
    @Input() rows: any[] = [];

    headings: String[];

    constructor() { }

    ngOnInit() {
        let falloutHeadings = ['ID', 'Source', 'SourceFalloutID', 'ErrorCode', 'CreationTimestamp', 'DueDate', 'Status'];
        let resolutionHeadings = ['ID', 'FalloutID', 'ActionID', 'SourceSystem', 'CreationTimestamp', 'DueDate', 'Status', 'RetryCount'];

        if (this.tableType == 'fallout') {
            this.headings = falloutHeadings;
        }
        else if (this.tableType == 'resolution') {
            this.headings = resolutionHeadings
        }

        //TODO: add proper rows input
        this.rows = [
            new Fallout(
                "AFOM00001",
                "ORDERMANAGER",
                "ORDERMANAGER59037",
                "ERROR4181",
                "13/03/17 18:04",
                "24/03/17 18:04",
                "CREATED"
            ),
            new Fallout(
                "AFOM00003",
                "ORDERMANAGER",
                "ORDERMANAGER13048",
                "ERROR9646",
                "13/03/17 12:10",
                "24/03/17 12:10",
                "STARTED"
            )
        ];
    }
}