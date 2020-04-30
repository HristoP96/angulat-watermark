/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGeographicShapeSeriesModule } from './igx-geographic-shape-series-module';
import { IgxGeographicShapeSeriesComponent } from './igx-geographic-shape-series-component';
import { GeographicShapeSeries } from './GeographicShapeSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxGeographicShapeSeriesModule],
    exports: [IgxGeographicShapeSeriesModule],
    entryComponents: [IgxGeographicShapeSeriesComponent]
})
export class IgxGeographicShapeSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxGeographicShapeSeriesComponent", IgxGeographicShapeSeriesComponent);
        TypeRegistrar.register("GeographicShapeSeries", (<any>GeographicShapeSeries).$type);
    }
}
