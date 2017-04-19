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
	loading: string = 'Loading, please wait...';

	constructor() { }

	ngOnInit() {
		setTimeout(() => { 
			this.loading = 'This is taking longer than usual...';
		}, 5000);
	}
}
