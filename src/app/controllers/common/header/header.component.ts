import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-header',
	templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
	public isCollapsed = true;

	constructor() { }

	ngOnInit() { }

	public collapsed(event: any): void {
	}

	public expanded(event: any): void {

	}
}
