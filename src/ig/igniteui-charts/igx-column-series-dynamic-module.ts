/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxColumnSeriesModule } from './igx-column-series-module';
import { IgxColumnSeriesComponent } from './igx-column-series-component';
import { ColumnSeries } from './ColumnSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxColumnSeriesModule],
    exports: [IgxColumnSeriesModule],
    entryComponents: [IgxColumnSeriesComponent]
})
export class IgxColumnSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxColumnSeriesComponent", IgxColumnSeriesComponent);
        TypeRegistrar.register("ColumnSeries", (<any>ColumnSeries).$type);
    }
}
