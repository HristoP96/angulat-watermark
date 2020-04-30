/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRateOfChangeAndMomentumIndicatorModule } from './igx-rate-of-change-and-momentum-indicator-module';
import { IgxRateOfChangeAndMomentumIndicatorComponent } from './igx-rate-of-change-and-momentum-indicator-component';
import { RateOfChangeAndMomentumIndicator } from './RateOfChangeAndMomentumIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxRateOfChangeAndMomentumIndicatorModule],
    exports: [IgxRateOfChangeAndMomentumIndicatorModule],
    entryComponents: [IgxRateOfChangeAndMomentumIndicatorComponent]
})
export class IgxRateOfChangeAndMomentumIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxRateOfChangeAndMomentumIndicatorComponent", IgxRateOfChangeAndMomentumIndicatorComponent);
        TypeRegistrar.register("RateOfChangeAndMomentumIndicator", (<any>RateOfChangeAndMomentumIndicator).$type);
    }
}
