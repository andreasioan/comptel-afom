import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-loading',
	templateUrl: 'loading.component.html',
	styleUrls: ['loading.component.css']
})
export class LoadingComponent implements OnInit {
	loading = 'Loading, please wait...';

	constructor() { }

	ngOnInit() {
		setTimeout(() => {
			this.loading = 'This is taking longer than usual...';
		}, 5000);
	}
}
