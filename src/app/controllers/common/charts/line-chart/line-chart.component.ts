import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-line-chart',
	templateUrl: 'line-chart.component.html'
})
export class LineChartComponent implements OnInit {
	@Input() data: any[] = [{data: [1], label: 'twat'}];
	@Input() headings: string[] = ['wot'];

	public lineChartOptions: any = {
		responsive: true
	};
	public lineChartLegend = true;
	public lineChartType = 'line';

	constructor() { }

	ngOnInit() { }
}
