/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxSplineSeriesModule } from './igx-spline-series-module';
import { IgxSplineSeriesComponent } from './igx-spline-series-component';
import { SplineSeries } from './SplineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxSplineSeriesModule],
    exports: [IgxSplineSeriesModule],
    entryComponents: [IgxSplineSeriesComponent]
})
export class IgxSplineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxSplineSeriesComponent", IgxSplineSeriesComponent);
        TypeRegistrar.register("SplineSeries", (<any>SplineSeries).$type);
    }
}
