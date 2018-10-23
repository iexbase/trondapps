import { NgModule } from '@angular/core';

import { DecimalPipe } from '@angular/common';

import {
    Logger,
    AppProvider
} from './index';

@NgModule({
    providers: [
        Logger,
        AppProvider
    ]
})


export class ProvidersModule {}
