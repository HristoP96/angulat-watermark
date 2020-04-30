/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRadialPieSeriesModule } from './igx-radial-pie-series-module';
import { IgxRadialPieSeriesComponent } from './igx-radial-pie-series-component';
import { RadialPieSeries } from './RadialPieSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxRadialPieSeriesModule],
    exports: [IgxRadialPieSeriesModule],
    entryComponents: [IgxRadialPieSeriesComponent]
})
export class IgxRadialPieSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxRadialPieSeriesComponent", IgxRadialPieSeriesComponent);
        TypeRegistrar.register("RadialPieSeries", (<any>RadialPieSeries).$type);
    }
}
