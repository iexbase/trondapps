import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {AppProvider} from '../../../../providers';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    searchExpanded = false;
    project_count: number;
    private app: any;

    constructor(
        app: AppProvider
    ) {
        this.app = app;
        this.project_count = 0;
    }

    ngOnInit(): void {
        this.app.getStatistics().subscribe((data: any) => {
            this.project_count = data[0]['project_count'];
        });
    }

}
