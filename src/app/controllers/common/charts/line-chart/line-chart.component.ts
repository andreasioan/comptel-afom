import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-line-chart',
    templateUrl: 'line-chart.component.html'
})
export class LineChartComponent implements OnInit {
    @Input() data: any[] = [1];
    @Input() headings: string[] = ['wot'];

    constructor() { }

    ngOnInit() { 
    }

    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
}