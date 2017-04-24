import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-bar-chart',
    templateUrl: 'bar-chart.component.html'
})

export class BarChartComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    barChartOptions: any = {
        scaleShowVerticalLines: true,
        responsive: true
    };
    barChartLabels: string[] = ['2007', '2008', '2009', '2010', '2011', '2012'];
    barChartType: string = 'bar';
    barChartLegend: boolean = true;

    barChartData: any[] = [
        { data: [this.rand(), this.rand(), this.rand(), this.rand(), this.rand(), this.rand()], label: 'Fallouts' },
        { data: [this.rand(), this.rand(), this.rand(), this.rand(), this.rand(), this.rand()], label: 'Resolutions' }
    ];

    rand() {
        return Math.round(Math.random() * 100);
    }
}
