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
    public doughnutChartLabels: string[] = ['PNI', 'ORDERMANAGER', 'COM'];
    public doughnutChartData: number[] = [this.rand(), this.rand(), this.rand()];
    public doughnutChartType: string = 'doughnut';

    rand(){
        return Math.floor(Math.random() * 1000 - 1);
    }
}