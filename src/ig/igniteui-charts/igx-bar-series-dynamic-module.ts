/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxBarSeriesModule } from './igx-bar-series-module';
import { IgxBarSeriesComponent } from './igx-bar-series-component';
import { BarSeries } from './BarSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxBarSeriesModule],
    exports: [IgxBarSeriesModule],
    entryComponents: [IgxBarSeriesComponent]
})
export class IgxBarSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxBarSeriesComponent", IgxBarSeriesComponent);
        TypeRegistrar.register("BarSeries", (<any>BarSeries).$type);
    }
}
