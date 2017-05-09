import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-doughnut-chart',
    templateUrl: 'doughnut-chart.component.html'
})

export class DoughnutChartComponent implements OnInit {
    @Input() data: number[];
    @Input() headings: string[];

    doughnutChartType: string = 'doughnut';

    constructor() { }

    ngOnInit() { 

    }

    // Doughnut
    // public doughnutChartLabels: string[] = ['Started', 'Created', 'Closed-Successful', 'Error', 'Closed-Failure'];
    // public doughnutChartData: number[] = [this.rand(), this.rand(), this.rand(), this.rand(), this.rand()];
    // public 

    rand() {
        return Math.floor(Math.random() * 10000 - 1);
    }
}