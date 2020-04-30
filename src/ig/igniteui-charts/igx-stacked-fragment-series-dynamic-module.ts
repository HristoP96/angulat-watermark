/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStackedFragmentSeriesModule } from './igx-stacked-fragment-series-module';
import { IgxStackedFragmentSeriesComponent } from './igx-stacked-fragment-series-component';
import { StackedFragmentSeries } from './StackedFragmentSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStackedFragmentSeriesModule],
    exports: [IgxStackedFragmentSeriesModule],
    entryComponents: [IgxStackedFragmentSeriesComponent]
})
export class IgxStackedFragmentSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStackedFragmentSeriesComponent", IgxStackedFragmentSeriesComponent);
        TypeRegistrar.register("StackedFragmentSeries", (<any>StackedFragmentSeries).$type);
    }
}
