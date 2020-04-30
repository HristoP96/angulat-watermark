/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxFastStochasticOscillatorIndicatorModule } from './igx-fast-stochastic-oscillator-indicator-module';
import { IgxFastStochasticOscillatorIndicatorComponent } from './igx-fast-stochastic-oscillator-indicator-component';
import { FastStochasticOscillatorIndicator } from './FastStochasticOscillatorIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxFastStochasticOscillatorIndicatorModule],
    exports: [IgxFastStochasticOscillatorIndicatorModule],
    entryComponents: [IgxFastStochasticOscillatorIndicatorComponent]
})
export class IgxFastStochasticOscillatorIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxFastStochasticOscillatorIndicatorComponent", IgxFastStochasticOscillatorIndicatorComponent);
        TypeRegistrar.register("FastStochasticOscillatorIndicator", (<any>FastStochasticOscillatorIndicator).$type);
    }
}
