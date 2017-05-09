import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { Resolution } from '../../models/resolution.model';

@Component({
    moduleId: module.id,
    selector: 'app-resolution-error-modal',
    templateUrl: 'resolution-error-modal.component.html'
})

export class ResolutionErrorModalComponent implements OnInit {
    @ViewChild('childModal') public childModal: ModalDirective;
    @Output() closeModal = new EventEmitter<any>();
    @Input() resolution: Resolution;

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