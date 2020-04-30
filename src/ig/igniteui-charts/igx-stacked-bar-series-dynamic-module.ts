/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStackedBarSeriesModule } from './igx-stacked-bar-series-module';
import { IgxStackedBarSeriesComponent } from './igx-stacked-bar-series-component';
import { StackedBarSeries } from './StackedBarSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStackedBarSeriesModule],
    exports: [IgxStackedBarSeriesModule],
    entryComponents: [IgxStackedBarSeriesComponent]
})
export class IgxStackedBarSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStackedBarSeriesComponent", IgxStackedBarSeriesComponent);
        TypeRegistrar.register("StackedBarSeries", (<any>StackedBarSeries).$type);
    }
}
