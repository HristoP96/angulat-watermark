/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxAbsoluteVolumeOscillatorIndicatorModule } from './igx-absolute-volume-oscillator-indicator-module';
import { IgxAbsoluteVolumeOscillatorIndicatorComponent } from './igx-absolute-volume-oscillator-indicator-component';
import { AbsoluteVolumeOscillatorIndicator } from './AbsoluteVolumeOscillatorIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxAbsoluteVolumeOscillatorIndicatorModule],
    exports: [IgxAbsoluteVolumeOscillatorIndicatorModule],
    entryComponents: [IgxAbsoluteVolumeOscillatorIndicatorComponent]
})
export class IgxAbsoluteVolumeOscillatorIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxAbsoluteVolumeOscillatorIndicatorComponent", IgxAbsoluteVolumeOscillatorIndicatorComponent);
        TypeRegistrar.register("AbsoluteVolumeOscillatorIndicator", (<any>AbsoluteVolumeOscillatorIndicator).$type);
    }
}
