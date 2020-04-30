/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxPercentageVolumeOscillatorIndicatorModule } from './igx-percentage-volume-oscillator-indicator-module';
import { IgxPercentageVolumeOscillatorIndicatorComponent } from './igx-percentage-volume-oscillator-indicator-component';
import { PercentageVolumeOscillatorIndicator } from './PercentageVolumeOscillatorIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxPercentageVolumeOscillatorIndicatorModule],
    exports: [IgxPercentageVolumeOscillatorIndicatorModule],
    entryComponents: [IgxPercentageVolumeOscillatorIndicatorComponent]
})
export class IgxPercentageVolumeOscillatorIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxPercentageVolumeOscillatorIndicatorComponent", IgxPercentageVolumeOscillatorIndicatorComponent);
        TypeRegistrar.register("PercentageVolumeOscillatorIndicator", (<any>PercentageVolumeOscillatorIndicator).$type);
    }
}
