import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-doughnut-chart',
    templateUrl: 'doughnut-chart.component.html'
})

export class DoughnutChartComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    // Doughnut
    public doughnutChartLabels: string[] = ['Started', 'Created', 'Closed-Successful', 'Error', 'Closed-Failure'];
    public doughnutChartData: number[] = [this.rand(), this.rand(), this.rand(), this.rand(), this.rand()];
    public doughnutChartType: string = 'doughnut';

    rand(){
        return Math.floor(Math.random() * 10000 - 1);
    }
}