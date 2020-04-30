/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxSplineAreaSeriesModule } from './igx-spline-area-series-module';
import { IgxSplineAreaSeriesComponent } from './igx-spline-area-series-component';
import { SplineAreaSeries } from './SplineAreaSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxSplineAreaSeriesModule],
    exports: [IgxSplineAreaSeriesModule],
    entryComponents: [IgxSplineAreaSeriesComponent]
})
export class IgxSplineAreaSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxSplineAreaSeriesComponent", IgxSplineAreaSeriesComponent);
        TypeRegistrar.register("SplineAreaSeries", (<any>SplineAreaSeries).$type);
    }
}
