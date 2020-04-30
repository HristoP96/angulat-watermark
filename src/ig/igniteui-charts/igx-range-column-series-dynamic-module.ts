/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRangeColumnSeriesModule } from './igx-range-column-series-module';
import { IgxRangeColumnSeriesComponent } from './igx-range-column-series-component';
import { RangeColumnSeries } from './RangeColumnSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxRangeColumnSeriesModule],
    exports: [IgxRangeColumnSeriesModule],
    entryComponents: [IgxRangeColumnSeriesComponent]
})
export class IgxRangeColumnSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxRangeColumnSeriesComponent", IgxRangeColumnSeriesComponent);
        TypeRegistrar.register("RangeColumnSeries", (<any>RangeColumnSeries).$type);
    }
}
