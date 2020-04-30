/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStacked100ColumnSeriesModule } from './igx-stacked-100-column-series-module';
import { IgxStacked100ColumnSeriesComponent } from './igx-stacked-100-column-series-component';
import { Stacked100ColumnSeries } from './Stacked100ColumnSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStacked100ColumnSeriesModule],
    exports: [IgxStacked100ColumnSeriesModule],
    entryComponents: [IgxStacked100ColumnSeriesComponent]
})
export class IgxStacked100ColumnSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStacked100ColumnSeriesComponent", IgxStacked100ColumnSeriesComponent);
        TypeRegistrar.register("Stacked100ColumnSeries", (<any>Stacked100ColumnSeries).$type);
    }
}
