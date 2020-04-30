/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStacked100SplineSeriesModule } from './igx-stacked-100-spline-series-module';
import { IgxStacked100SplineSeriesComponent } from './igx-stacked-100-spline-series-component';
import { Stacked100SplineSeries } from './Stacked100SplineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStacked100SplineSeriesModule],
    exports: [IgxStacked100SplineSeriesModule],
    entryComponents: [IgxStacked100SplineSeriesComponent]
})
export class IgxStacked100SplineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStacked100SplineSeriesComponent", IgxStacked100SplineSeriesComponent);
        TypeRegistrar.register("Stacked100SplineSeries", (<any>Stacked100SplineSeries).$type);
    }
}
