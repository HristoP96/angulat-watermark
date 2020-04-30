/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IgxIndicatorProxyModule } from './igx-indicator-proxy-module';

import { IgxFullStochasticOscillatorIndicatorComponent } from './igx-full-stochastic-oscillator-indicator-component';

@NgModule({
    declarations: [IgxFullStochasticOscillatorIndicatorComponent],
    imports: [CommonModule, IgxIndicatorProxyModule],
    exports: [IgxFullStochasticOscillatorIndicatorComponent, IgxIndicatorProxyModule],
    entryComponents: []
})
export class IgxFullStochasticOscillatorIndicatorModule {

}
