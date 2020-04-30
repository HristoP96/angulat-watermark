/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStacked100BarSeriesModule } from './igx-stacked-100-bar-series-module';
import { IgxStacked100BarSeriesComponent } from './igx-stacked-100-bar-series-component';
import { Stacked100BarSeries } from './Stacked100BarSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStacked100BarSeriesModule],
    exports: [IgxStacked100BarSeriesModule],
    entryComponents: [IgxStacked100BarSeriesComponent]
})
export class IgxStacked100BarSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStacked100BarSeriesComponent", IgxStacked100BarSeriesComponent);
        TypeRegistrar.register("Stacked100BarSeries", (<any>Stacked100BarSeries).$type);
    }
}
