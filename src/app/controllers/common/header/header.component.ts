import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    public isCollapsed: boolean = true;

    public collapsed(event: any): void {

    }

    public expanded(event: any): void {

    }
}