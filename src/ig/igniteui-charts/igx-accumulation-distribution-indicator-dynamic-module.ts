/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxAccumulationDistributionIndicatorModule } from './igx-accumulation-distribution-indicator-module';
import { IgxAccumulationDistributionIndicatorComponent } from './igx-accumulation-distribution-indicator-component';
import { AccumulationDistributionIndicator } from './AccumulationDistributionIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxAccumulationDistributionIndicatorModule],
    exports: [IgxAccumulationDistributionIndicatorModule],
    entryComponents: [IgxAccumulationDistributionIndicatorComponent]
})
export class IgxAccumulationDistributionIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxAccumulationDistributionIndicatorComponent", IgxAccumulationDistributionIndicatorComponent);
        TypeRegistrar.register("AccumulationDistributionIndicator", (<any>AccumulationDistributionIndicator).$type);
    }
}
