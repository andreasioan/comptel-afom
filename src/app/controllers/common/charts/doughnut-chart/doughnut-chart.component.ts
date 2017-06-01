import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-doughnut-chart',
    templateUrl: 'doughnut-chart.component.html'
})

export class DoughnutChartComponent implements OnInit {
    @Input() data: number[] = [1];
    @Input() headings: string[] = ['num'];

    doughnutChartType = 'doughnut';

    constructor() { }

    ngOnInit() { }
}
