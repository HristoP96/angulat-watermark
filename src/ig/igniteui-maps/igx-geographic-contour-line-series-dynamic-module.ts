/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGeographicContourLineSeriesModule } from './igx-geographic-contour-line-series-module';
import { IgxGeographicContourLineSeriesComponent } from './igx-geographic-contour-line-series-component';
import { GeographicContourLineSeries } from './GeographicContourLineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxGeographicContourLineSeriesModule],
    exports: [IgxGeographicContourLineSeriesModule],
    entryComponents: [IgxGeographicContourLineSeriesComponent]
})
export class IgxGeographicContourLineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxGeographicContourLineSeriesComponent", IgxGeographicContourLineSeriesComponent);
        TypeRegistrar.register("GeographicContourLineSeries", (<any>GeographicContourLineSeries).$type);
    }
}
