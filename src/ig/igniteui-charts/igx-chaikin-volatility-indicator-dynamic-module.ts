/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxChaikinVolatilityIndicatorModule } from './igx-chaikin-volatility-indicator-module';
import { IgxChaikinVolatilityIndicatorComponent } from './igx-chaikin-volatility-indicator-component';
import { ChaikinVolatilityIndicator } from './ChaikinVolatilityIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxChaikinVolatilityIndicatorModule],
    exports: [IgxChaikinVolatilityIndicatorModule],
    entryComponents: [IgxChaikinVolatilityIndicatorComponent]
})
export class IgxChaikinVolatilityIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxChaikinVolatilityIndicatorComponent", IgxChaikinVolatilityIndicatorComponent);
        TypeRegistrar.register("ChaikinVolatilityIndicator", (<any>ChaikinVolatilityIndicator).$type);
    }
}
