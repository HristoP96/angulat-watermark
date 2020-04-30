/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGeographicSymbolSeriesModule } from './igx-geographic-symbol-series-module';
import { IgxGeographicSymbolSeriesComponent } from './igx-geographic-symbol-series-component';
import { GeographicSymbolSeries } from './GeographicSymbolSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxGeographicSymbolSeriesModule],
    exports: [IgxGeographicSymbolSeriesModule],
    entryComponents: [IgxGeographicSymbolSeriesComponent]
})
export class IgxGeographicSymbolSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxGeographicSymbolSeriesComponent", IgxGeographicSymbolSeriesComponent);
        TypeRegistrar.register("GeographicSymbolSeries", (<any>GeographicSymbolSeries).$type);
    }
}
