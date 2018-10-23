import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';

import { MasterpageComponent } from './masterpage/masterpage.component';
import { HeaderComponent } from './masterpage/header/header.component';
import { SearchComponent } from './masterpage/search/search.component';

const sharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  FlexLayoutModule
];

const sharedMaterialModules = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatCardModule,
  MatTableModule,
  MatExpansionModule,
  MatTabsModule,
  MatBadgeModule
];

const sharedComponents = [
  MasterpageComponent,
  HeaderComponent,
  SearchComponent,
];

const sharedPipes = [

];

@NgModule({
  imports: [
    ...sharedModules,
    ...sharedMaterialModules
  ],
  declarations: [
    ...sharedComponents,
    ...sharedPipes
  ],
  exports: [
    ...sharedModules,
    ...sharedMaterialModules,
    ...sharedComponents,
    ...sharedPipes
  ]
})
export class SharedModule { }
