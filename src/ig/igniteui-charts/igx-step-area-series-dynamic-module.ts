/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxStepAreaSeriesModule } from './igx-step-area-series-module';
import { IgxStepAreaSeriesComponent } from './igx-step-area-series-component';
import { StepAreaSeries } from './StepAreaSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxStepAreaSeriesModule],
    exports: [IgxStepAreaSeriesModule],
    entryComponents: [IgxStepAreaSeriesComponent]
})
export class IgxStepAreaSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxStepAreaSeriesComponent", IgxStepAreaSeriesComponent);
        TypeRegistrar.register("StepAreaSeries", (<any>StepAreaSeries).$type);
    }
}
