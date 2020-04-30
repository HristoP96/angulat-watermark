/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxSlowStochasticOscillatorIndicatorModule } from './igx-slow-stochastic-oscillator-indicator-module';
import { IgxSlowStochasticOscillatorIndicatorComponent } from './igx-slow-stochastic-oscillator-indicator-component';
import { SlowStochasticOscillatorIndicator } from './SlowStochasticOscillatorIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxSlowStochasticOscillatorIndicatorModule],
    exports: [IgxSlowStochasticOscillatorIndicatorModule],
    entryComponents: [IgxSlowStochasticOscillatorIndicatorComponent]
})
export class IgxSlowStochasticOscillatorIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxSlowStochasticOscillatorIndicatorComponent", IgxSlowStochasticOscillatorIndicatorComponent);
        TypeRegistrar.register("SlowStochasticOscillatorIndicator", (<any>SlowStochasticOscillatorIndicator).$type);
    }
}
