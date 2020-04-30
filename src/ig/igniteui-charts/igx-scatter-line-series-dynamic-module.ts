/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxScatterLineSeriesModule } from './igx-scatter-line-series-module';
import { IgxScatterLineSeriesComponent } from './igx-scatter-line-series-component';
import { ScatterLineSeries } from './ScatterLineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxScatterLineSeriesModule],
    exports: [IgxScatterLineSeriesModule],
    entryComponents: [IgxScatterLineSeriesComponent]
})
export class IgxScatterLineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxScatterLineSeriesComponent", IgxScatterLineSeriesComponent);
        TypeRegistrar.register("ScatterLineSeries", (<any>ScatterLineSeries).$type);
    }
}
