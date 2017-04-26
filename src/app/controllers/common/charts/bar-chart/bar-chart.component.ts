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
    barChartLabels: string[] = ['November', 'December', 'January', 'February', 'March', 'April'];
    barChartType: string = 'bar';
    barChartLegend: boolean = true;

    barChartData: any[] = [
        { data: [this.rand(), this.rand(), this.rand(), this.rand(), this.rand(), this.rand()], label: 'Fallouts' },
        { data: [this.rand(), this.rand(), this.rand(), this.rand(), this.rand(), this.rand()], label: 'Resolutions' }
    ];

    rand() {
        return Math.round(Math.random() * 1000);
    }
}
