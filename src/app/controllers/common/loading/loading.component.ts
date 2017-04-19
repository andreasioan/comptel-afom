import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-loading',
	templateUrl: 'loading.component.html',
	styles: [
		`
			p {
				padding-top: 10px;
			}
		`
	]
})

export class LoadingComponent implements OnInit {
	constructor() { }

	ngOnInit() { 

	}
}
