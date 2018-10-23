import { Component, OnInit } from '@angular/core';
import {AppProvider} from '../../../providers';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public projects: any = [];
    public status: any = [];

    public isLoading: boolean;

    constructor(public app: AppProvider) {
        this.app = app;
        this.isLoading = false;
    }

    ngOnInit() {
        this.app.getStatuses().subscribe((data: any) => {
            Object.values(data).forEach((value, index) => {
                this.status[value['id']] = value;
            });
        });

        this.app.getProjects().subscribe((data: any) => {
            this.projects = data['results'];
            this.isLoading = true;
        });

    }

}
