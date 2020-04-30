/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStackedLineSeriesModule } from './igx-stacked-line-series-module';
import { IgxStackedLineSeriesComponent } from './igx-stacked-line-series-component';
import { StackedLineSeries } from './StackedLineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStackedLineSeriesModule],
    exports: [IgxStackedLineSeriesModule],
    entryComponents: [IgxStackedLineSeriesComponent]
})
export class IgxStackedLineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStackedLineSeriesComponent", IgxStackedLineSeriesComponent);
        TypeRegistrar.register("StackedLineSeries", (<any>StackedLineSeries).$type);
    }
}
