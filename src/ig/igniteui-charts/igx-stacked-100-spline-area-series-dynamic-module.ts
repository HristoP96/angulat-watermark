/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStacked100SplineAreaSeriesModule } from './igx-stacked-100-spline-area-series-module';
import { IgxStacked100SplineAreaSeriesComponent } from './igx-stacked-100-spline-area-series-component';
import { Stacked100SplineAreaSeries } from './Stacked100SplineAreaSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStacked100SplineAreaSeriesModule],
    exports: [IgxStacked100SplineAreaSeriesModule],
    entryComponents: [IgxStacked100SplineAreaSeriesComponent]
})
export class IgxStacked100SplineAreaSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStacked100SplineAreaSeriesComponent", IgxStacked100SplineAreaSeriesComponent);
        TypeRegistrar.register("Stacked100SplineAreaSeries", (<any>Stacked100SplineAreaSeries).$type);
    }
}
