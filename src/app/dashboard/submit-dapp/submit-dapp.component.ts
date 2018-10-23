import { Component, OnInit } from '@angular/core';
import {AppProvider} from '../../../providers';
import {CategoryModel, StatusModel} from '../../../models/project.model';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';

@Component({
    templateUrl: './submit-dapp.component.html',
    styleUrls: ['./submit-dapp.component.scss']
})
export class SubmitDappComponent implements OnInit {
    fields: any = {
        name: <string> '',
        author: <string> '',
        email: <string> '',
        short_text: <string> '',
        text: <string> '',
        website_url: <string> '',
        software_licence: <string> '',
        status: <number> 1,
        category: <number> 1,
        contract_address: <string> '',
        github: <string> '',
        logo_url: <any> [],
        launch_url: <string> ''
    }

    public errors: any = {
        name: <string> null,
        author: <string> null,
        email: <string> null,
        short_text: <string> null,
        text: <string> null,
        website_url: <string> null,
        software_licence: <string> null,
        status: <number> 1,
        category: <number> 1,
        contract_address: <string> null,
        github: <string> null,
        logo_url: <any> [],
        launch_url: <string> null
    };

    public statusses: any = [];
    public categories: any = [];

    public isLoading: boolean;

    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(public app: AppProvider,
                public snackBar: MatSnackBar) {
        this.app = app;
        this.isLoading = false;
        this.snackBar = snackBar;
    }

    ngOnInit() {
        // Список статусов
        this.app.getStatuses().subscribe((data: StatusModel) => {
            this.statusses = data;
        });

        // Список категорий
        this.app.getCategories().subscribe((data: CategoryModel) => {
            this.categories = data;
        });
    }

    onFileChanged(event: any) {

        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (events: any) => {
                this.fields.logo_url = events.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);

            console.log(reader.result);
        }
    }


    onSubmit() {

        const config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = 5000;

        this.app.addProject(this.fields).subscribe((data: any) => {
            this.snackBar.open('Application created successfully', 'Close', config);
            this.clear();
        }, (error1: any) => {
            this.errors = error1.error;
        });
    }


    clear() {
        this.fields.name = '';
        this.fields.author = '';
        this.fields.email = '';
        this.fields.short_text = '';
        this.fields.text = '';
        this.fields.website_url = '';
        this.fields.software_licence = '';
        this.fields.status = '';
        this.fields.category = '';
        this.fields.contract_address = '';
        this.fields.github = '';
        this.fields.logo_url = '';
        this.fields.launch_url = '';
    }
}
