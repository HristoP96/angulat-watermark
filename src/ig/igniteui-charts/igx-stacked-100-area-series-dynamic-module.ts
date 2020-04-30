/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStacked100AreaSeriesModule } from './igx-stacked-100-area-series-module';
import { IgxStacked100AreaSeriesComponent } from './igx-stacked-100-area-series-component';
import { Stacked100AreaSeries } from './Stacked100AreaSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStacked100AreaSeriesModule],
    exports: [IgxStacked100AreaSeriesModule],
    entryComponents: [IgxStacked100AreaSeriesComponent]
})
export class IgxStacked100AreaSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStacked100AreaSeriesComponent", IgxStacked100AreaSeriesComponent);
        TypeRegistrar.register("Stacked100AreaSeries", (<any>Stacked100AreaSeries).$type);
    }
}
