/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxUltimateOscillatorIndicatorModule } from './igx-ultimate-oscillator-indicator-module';
import { IgxUltimateOscillatorIndicatorComponent } from './igx-ultimate-oscillator-indicator-component';
import { UltimateOscillatorIndicator } from './UltimateOscillatorIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxUltimateOscillatorIndicatorModule],
    exports: [IgxUltimateOscillatorIndicatorModule],
    entryComponents: [IgxUltimateOscillatorIndicatorComponent]
})
export class IgxUltimateOscillatorIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxUltimateOscillatorIndicatorComponent", IgxUltimateOscillatorIndicatorComponent);
        TypeRegistrar.register("UltimateOscillatorIndicator", (<any>UltimateOscillatorIndicator).$type);
    }
}
