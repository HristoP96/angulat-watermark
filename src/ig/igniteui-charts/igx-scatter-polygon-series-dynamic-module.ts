/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxScatterPolygonSeriesModule } from './igx-scatter-polygon-series-module';
import { IgxScatterPolygonSeriesComponent } from './igx-scatter-polygon-series-component';
import { ScatterPolygonSeries } from './ScatterPolygonSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxScatterPolygonSeriesModule],
    exports: [IgxScatterPolygonSeriesModule],
    entryComponents: [IgxScatterPolygonSeriesComponent]
})
export class IgxScatterPolygonSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxScatterPolygonSeriesComponent", IgxScatterPolygonSeriesComponent);
        TypeRegistrar.register("ScatterPolygonSeries", (<any>ScatterPolygonSeries).$type);
    }
}
