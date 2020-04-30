/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxBubbleSeriesModule } from './igx-bubble-series-module';
import { IgxBubbleSeriesComponent } from './igx-bubble-series-component';
import { BubbleSeries } from './BubbleSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxBubbleSeriesModule],
    exports: [IgxBubbleSeriesModule],
    entryComponents: [IgxBubbleSeriesComponent]
})
export class IgxBubbleSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxBubbleSeriesComponent", IgxBubbleSeriesComponent);
        TypeRegistrar.register("BubbleSeries", (<any>BubbleSeries).$type);
    }
}
