/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxWaterfallSeriesModule } from './igx-waterfall-series-module';
import { IgxWaterfallSeriesComponent } from './igx-waterfall-series-component';
import { WaterfallSeries } from './WaterfallSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxWaterfallSeriesModule],
    exports: [IgxWaterfallSeriesModule],
    entryComponents: [IgxWaterfallSeriesComponent]
})
export class IgxWaterfallSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxWaterfallSeriesComponent", IgxWaterfallSeriesComponent);
        TypeRegistrar.register("WaterfallSeries", (<any>WaterfallSeries).$type);
    }
}
