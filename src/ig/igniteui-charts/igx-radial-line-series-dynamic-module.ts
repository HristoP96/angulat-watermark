/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRadialLineSeriesModule } from './igx-radial-line-series-module';
import { IgxRadialLineSeriesComponent } from './igx-radial-line-series-component';
import { RadialLineSeries } from './RadialLineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxRadialLineSeriesModule],
    exports: [IgxRadialLineSeriesModule],
    entryComponents: [IgxRadialLineSeriesComponent]
})
export class IgxRadialLineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxRadialLineSeriesComponent", IgxRadialLineSeriesComponent);
        TypeRegistrar.register("RadialLineSeries", (<any>RadialLineSeries).$type);
    }
}
