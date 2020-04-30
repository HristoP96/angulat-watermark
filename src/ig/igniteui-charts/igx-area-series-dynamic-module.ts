/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxAreaSeriesModule } from './igx-area-series-module';
import { IgxAreaSeriesComponent } from './igx-area-series-component';
import { AreaSeries } from './AreaSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxAreaSeriesModule],
    exports: [IgxAreaSeriesModule],
    entryComponents: [IgxAreaSeriesComponent]
})
export class IgxAreaSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxAreaSeriesComponent", IgxAreaSeriesComponent);
        TypeRegistrar.register("AreaSeries", (<any>AreaSeries).$type);
    }
}
