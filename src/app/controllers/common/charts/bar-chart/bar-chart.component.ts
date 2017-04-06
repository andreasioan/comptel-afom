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
    barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    barChartType: string = 'bar';
    barChartLegend: boolean = true;

    barChartData: any[] = [
        { data: [this.rand(), this.rand(), this.rand(), this.rand(), this.rand(), this.rand(), this.rand()], label: 'Fallouts' },
        { data: [this.rand(), this.rand(), this.rand(), this.rand(), this.rand(), this.rand(), this.rand()], label: 'Resolutions' }
    ];

    col1 = this.getColour();
    col2 = this.getColour();

    getColour() {
        return (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256));
    }

    rand() {
        return Math.round(Math.random() * 100);
    }
}
