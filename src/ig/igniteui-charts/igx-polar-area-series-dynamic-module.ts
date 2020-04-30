/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxPolarAreaSeriesModule } from './igx-polar-area-series-module';
import { IgxPolarAreaSeriesComponent } from './igx-polar-area-series-component';
import { PolarAreaSeries } from './PolarAreaSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxPolarAreaSeriesModule],
    exports: [IgxPolarAreaSeriesModule],
    entryComponents: [IgxPolarAreaSeriesComponent]
})
export class IgxPolarAreaSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxPolarAreaSeriesComponent", IgxPolarAreaSeriesComponent);
        TypeRegistrar.register("PolarAreaSeries", (<any>PolarAreaSeries).$type);
    }
}
