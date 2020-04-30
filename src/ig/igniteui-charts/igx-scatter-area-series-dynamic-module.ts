/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxScatterAreaSeriesModule } from './igx-scatter-area-series-module';
import { IgxScatterAreaSeriesComponent } from './igx-scatter-area-series-component';
import { ScatterAreaSeries } from './ScatterAreaSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxScatterAreaSeriesModule],
    exports: [IgxScatterAreaSeriesModule],
    entryComponents: [IgxScatterAreaSeriesComponent]
})
export class IgxScatterAreaSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxScatterAreaSeriesComponent", IgxScatterAreaSeriesComponent);
        TypeRegistrar.register("ScatterAreaSeries", (<any>ScatterAreaSeries).$type);
    }
}
