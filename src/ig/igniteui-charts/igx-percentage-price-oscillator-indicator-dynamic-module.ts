/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxPercentagePriceOscillatorIndicatorModule } from './igx-percentage-price-oscillator-indicator-module';
import { IgxPercentagePriceOscillatorIndicatorComponent } from './igx-percentage-price-oscillator-indicator-component';
import { PercentagePriceOscillatorIndicator } from './PercentagePriceOscillatorIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxPercentagePriceOscillatorIndicatorModule],
    exports: [IgxPercentagePriceOscillatorIndicatorModule],
    entryComponents: [IgxPercentagePriceOscillatorIndicatorComponent]
})
export class IgxPercentagePriceOscillatorIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxPercentagePriceOscillatorIndicatorComponent", IgxPercentagePriceOscillatorIndicatorComponent);
        TypeRegistrar.register("PercentagePriceOscillatorIndicator", (<any>PercentagePriceOscillatorIndicator).$type);
    }
}
