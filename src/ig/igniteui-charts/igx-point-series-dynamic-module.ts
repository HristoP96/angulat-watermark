/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxPointSeriesModule } from './igx-point-series-module';
import { IgxPointSeriesComponent } from './igx-point-series-component';
import { PointSeries } from './PointSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxPointSeriesModule],
    exports: [IgxPointSeriesModule],
    entryComponents: [IgxPointSeriesComponent]
})
export class IgxPointSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxPointSeriesComponent", IgxPointSeriesComponent);
        TypeRegistrar.register("PointSeries", (<any>PointSeries).$type);
    }
}
