/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRangeAreaSeriesModule } from './igx-range-area-series-module';
import { IgxRangeAreaSeriesComponent } from './igx-range-area-series-component';
import { RangeAreaSeries } from './RangeAreaSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxRangeAreaSeriesModule],
    exports: [IgxRangeAreaSeriesModule],
    entryComponents: [IgxRangeAreaSeriesComponent]
})
export class IgxRangeAreaSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxRangeAreaSeriesComponent", IgxRangeAreaSeriesComponent);
        TypeRegistrar.register("RangeAreaSeries", (<any>RangeAreaSeries).$type);
    }
}
