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
        let falloutHeadings = ['ID', 'Source', 'Source Fallout ID', 'Error Code', 'Creation Timestamp', 'Due Date', 'Status'];
        let resolutionHeadings = ['ID', 'Fallout ID', 'Action ID', 'Source System', 'Creation Timestamp', 'Due Date', 'Status', 'Retry Count'];

        if (this.tableType == 'fallout') {
            this.headings = falloutHeadings;
        }
        else if (this.tableType == 'resolution') {
            this.headings = resolutionHeadings
        }
    }
}