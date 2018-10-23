import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MasterpageComponent } from './shared/masterpage/masterpage.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {SubmitDappComponent} from './dashboard/submit-dapp/submit-dapp.component';
import {SearchComponent} from './dashboard/search/search.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MasterpageComponent,
        children: [
            { path: '', pathMatch: 'full', component: DashboardComponent },
            { path: 'search', component: SearchComponent },
            { path: 'submit', pathMatch: 'full', component: SubmitDappComponent },
            { path: 'project', loadChildren: './project/project.module#ProjectModule'}
        ]
    }
];

@NgModule({
    imports: [
        DashboardModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
