/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGeographicHighDensityScatterSeriesModule } from './igx-geographic-high-density-scatter-series-module';
import { IgxGeographicHighDensityScatterSeriesComponent } from './igx-geographic-high-density-scatter-series-component';
import { GeographicHighDensityScatterSeries } from './GeographicHighDensityScatterSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxGeographicHighDensityScatterSeriesModule],
    exports: [IgxGeographicHighDensityScatterSeriesModule],
    entryComponents: [IgxGeographicHighDensityScatterSeriesComponent]
})
export class IgxGeographicHighDensityScatterSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxGeographicHighDensityScatterSeriesComponent", IgxGeographicHighDensityScatterSeriesComponent);
        TypeRegistrar.register("GeographicHighDensityScatterSeries", (<any>GeographicHighDensityScatterSeries).$type);
    }
}
