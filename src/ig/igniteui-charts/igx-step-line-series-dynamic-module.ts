/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStepLineSeriesModule } from './igx-step-line-series-module';
import { IgxStepLineSeriesComponent } from './igx-step-line-series-component';
import { StepLineSeries } from './StepLineSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStepLineSeriesModule],
    exports: [IgxStepLineSeriesModule],
    entryComponents: [IgxStepLineSeriesComponent]
})
export class IgxStepLineSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStepLineSeriesComponent", IgxStepLineSeriesComponent);
        TypeRegistrar.register("StepLineSeries", (<any>StepLineSeries).$type);
    }
}
