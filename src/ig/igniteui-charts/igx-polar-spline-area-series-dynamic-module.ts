/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxPolarSplineAreaSeriesModule } from './igx-polar-spline-area-series-module';
import { IgxPolarSplineAreaSeriesComponent } from './igx-polar-spline-area-series-component';
import { PolarSplineAreaSeries } from './PolarSplineAreaSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxPolarSplineAreaSeriesModule],
    exports: [IgxPolarSplineAreaSeriesModule],
    entryComponents: [IgxPolarSplineAreaSeriesComponent]
})
export class IgxPolarSplineAreaSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxPolarSplineAreaSeriesComponent", IgxPolarSplineAreaSeriesComponent);
        TypeRegistrar.register("PolarSplineAreaSeries", (<any>PolarSplineAreaSeries).$type);
    }
}
