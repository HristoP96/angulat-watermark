/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStacked100LineSeriesModule } from './igx-stacked-100-line-series-module';
import { IgxStacked100LineSeriesComponent } from './igx-stacked-100-line-series-component';
import { Stacked100LineSeries } from './Stacked100LineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStacked100LineSeriesModule],
    exports: [IgxStacked100LineSeriesModule],
    entryComponents: [IgxStacked100LineSeriesComponent]
})
export class IgxStacked100LineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStacked100LineSeriesComponent", IgxStacked100LineSeriesComponent);
        TypeRegistrar.register("Stacked100LineSeries", (<any>Stacked100LineSeries).$type);
    }
}
