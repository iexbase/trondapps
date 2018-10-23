import {SharedModule} from '../shared/shared.module';
import {NgModule} from '@angular/core';
import {ProjectComponent} from './project/project.component';
import {ProjectRoutingModule} from './project-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
      ProjectComponent
  ]
})
export class ProjectModule { }
