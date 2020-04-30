/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxHighDensityScatterSeriesModule } from './igx-high-density-scatter-series-module';
import { IgxHighDensityScatterSeriesComponent } from './igx-high-density-scatter-series-component';
import { HighDensityScatterSeries } from './HighDensityScatterSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxHighDensityScatterSeriesModule],
    exports: [IgxHighDensityScatterSeriesModule],
    entryComponents: [IgxHighDensityScatterSeriesComponent]
})
export class IgxHighDensityScatterSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxHighDensityScatterSeriesComponent", IgxHighDensityScatterSeriesComponent);
        TypeRegistrar.register("HighDensityScatterSeries", (<any>HighDensityScatterSeries).$type);
    }
}
