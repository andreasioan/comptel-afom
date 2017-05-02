import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { Detail } from '../../models/detail.model';

@Component({
    moduleId: module.id,
    selector: 'app-details-modal',
    templateUrl: 'details-modal.component.html'
})

export class DetailsModalComponent implements OnInit {
    @ViewChild('childModal') public childModal: ModalDirective;
    @Input() isLoaded: boolean = false;
    @Input() rows: Detail[];
    @Input() falloutId: string;
    @Output() closeModal = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    public showChildModal(): void {
        this.childModal.show();
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

    public onHidden() {
        this.closeModal.emit();
    }
}