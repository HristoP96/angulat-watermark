/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGeographicPolylineSeriesModule } from './igx-geographic-polyline-series-module';
import { IgxGeographicPolylineSeriesComponent } from './igx-geographic-polyline-series-component';
import { GeographicPolylineSeries } from './GeographicPolylineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxGeographicPolylineSeriesModule],
    exports: [IgxGeographicPolylineSeriesModule],
    entryComponents: [IgxGeographicPolylineSeriesComponent]
})
export class IgxGeographicPolylineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxGeographicPolylineSeriesComponent", IgxGeographicPolylineSeriesComponent);
        TypeRegistrar.register("GeographicPolylineSeries", (<any>GeographicPolylineSeries).$type);
    }
}
