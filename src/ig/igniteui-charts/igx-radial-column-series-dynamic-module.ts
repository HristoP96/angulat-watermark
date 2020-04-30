/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRadialColumnSeriesModule } from './igx-radial-column-series-module';
import { IgxRadialColumnSeriesComponent } from './igx-radial-column-series-component';
import { RadialColumnSeries } from './RadialColumnSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxRadialColumnSeriesModule],
    exports: [IgxRadialColumnSeriesModule],
    entryComponents: [IgxRadialColumnSeriesComponent]
})
export class IgxRadialColumnSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxRadialColumnSeriesComponent", IgxRadialColumnSeriesComponent);
        TypeRegistrar.register("RadialColumnSeries", (<any>RadialColumnSeries).$type);
    }
}
