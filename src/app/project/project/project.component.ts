import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppProvider} from '../../../providers';
import {CategoryModel, ProjectModel, StatusModel} from '../../../models/project.model';

@Component({
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

    public item: any = {};
    public status: any = [];
    public category: any = [];
    public isLoading: boolean;

    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private app: AppProvider,
    ) {
        this.isLoading = false;
        this.app = app;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe((params: any) => {

            this.app.getStatuses().subscribe((data: StatusModel) => {
                Object.values(data).forEach((value, index) => {
                    this.status[value['id']] = value;
                });
            });

            this.app.getCategories().subscribe((data: CategoryModel) => {
                Object.values(data).forEach((value, index) => {
                    this.category[value['id']] = value;
                });
            });


            this.app.getProject(params['id']).subscribe((data: ProjectModel) => {
                this.item = data;
                this.isLoading = true;
            });

        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
