import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-paginate',
    templateUrl: 'paginate.component.html',
    styleUrls: ['paginate.component.css']
})

export class PaginateComponent implements OnInit {
    @Output() nextPage = new EventEmitter<number>();
    @Input() paginate: any;  //TODO: Add paginate model
    totalPages = [];
    isLoaded: boolean = false;

    constructor() { }

    ngOnInit() {    
        this.updatePaginate();
    }

    updatePaginate() {
        let startPage: number;
        let endPage: number;

        if (this.paginate.pages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = this.paginate.pages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (this.paginate.page <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (this.paginate.page + 4 >= this.paginate.pages) {
                startPage = this.paginate.pages - 9;
                endPage = this.paginate.pages;
            } else {
                startPage = this.paginate.page - 5;
                endPage = this.paginate.page + 4;
            }
        }
        
        for (var i = startPage - 1; i < endPage; i++) {
            this.totalPages.push(i + 1);
        }

        this.isLoaded = true;
    }

    setPage(page: number) {
        if (page < 1 || page > this.paginate.pages || page === this.paginate.page) {
            return;
        }
        
        this.nextPage.emit(page);
    }
}