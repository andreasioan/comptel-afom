import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-bar-chart',
    templateUrl: 'bar-chart.component.html'
})

export class BarChartComponent implements OnInit {
    @Input() data: number[] = [1];
    @Input() headings: string[] = ['wot']

    constructor() { }

    ngOnInit() { }

    barChartOptions: any = {
        scaleShowVerticalLines: true,
        responsive: true
    };
    barChartType: string = 'bar';
    barChartLegend: boolean = true;
}
