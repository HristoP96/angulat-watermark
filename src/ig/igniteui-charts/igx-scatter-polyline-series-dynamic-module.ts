/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxScatterPolylineSeriesModule } from './igx-scatter-polyline-series-module';
import { IgxScatterPolylineSeriesComponent } from './igx-scatter-polyline-series-component';
import { ScatterPolylineSeries } from './ScatterPolylineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxScatterPolylineSeriesModule],
    exports: [IgxScatterPolylineSeriesModule],
    entryComponents: [IgxScatterPolylineSeriesComponent]
})
export class IgxScatterPolylineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxScatterPolylineSeriesComponent", IgxScatterPolylineSeriesComponent);
        TypeRegistrar.register("ScatterPolylineSeries", (<any>ScatterPolylineSeries).$type);
    }
}
