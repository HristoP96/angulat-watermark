/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxDetrendedPriceOscillatorIndicatorModule } from './igx-detrended-price-oscillator-indicator-module';
import { IgxDetrendedPriceOscillatorIndicatorComponent } from './igx-detrended-price-oscillator-indicator-component';
import { DetrendedPriceOscillatorIndicator } from './DetrendedPriceOscillatorIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxDetrendedPriceOscillatorIndicatorModule],
    exports: [IgxDetrendedPriceOscillatorIndicatorModule],
    entryComponents: [IgxDetrendedPriceOscillatorIndicatorComponent]
})
export class IgxDetrendedPriceOscillatorIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxDetrendedPriceOscillatorIndicatorComponent", IgxDetrendedPriceOscillatorIndicatorComponent);
        TypeRegistrar.register("DetrendedPriceOscillatorIndicator", (<any>DetrendedPriceOscillatorIndicator).$type);
    }
}
