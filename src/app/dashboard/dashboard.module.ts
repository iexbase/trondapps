import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {SubmitDappComponent} from './submit-dapp/submit-dapp.component';
import {MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import { CookieModule } from 'ngx-cookie';
import {SearchComponent} from './search/search.component';

@NgModule({
    imports: [
        SharedModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        MatSelectModule,
        CookieModule.forRoot(),
        MatSnackBarModule
    ],
    declarations: [
        DashboardComponent,
        SubmitDappComponent,
        SearchComponent
    ]
})
export class DashboardModule { }
