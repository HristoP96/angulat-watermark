/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxScatterContourSeriesModule } from './igx-scatter-contour-series-module';
import { IgxScatterContourSeriesComponent } from './igx-scatter-contour-series-component';
import { ScatterContourSeries } from './ScatterContourSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxScatterContourSeriesModule],
    exports: [IgxScatterContourSeriesModule],
    entryComponents: [IgxScatterContourSeriesComponent]
})
export class IgxScatterContourSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxScatterContourSeriesComponent", IgxScatterContourSeriesComponent);
        TypeRegistrar.register("ScatterContourSeries", (<any>ScatterContourSeries).$type);
    }
}
