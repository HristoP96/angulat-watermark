/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxBollingerBandWidthIndicatorModule } from './igx-bollinger-band-width-indicator-module';
import { IgxBollingerBandWidthIndicatorComponent } from './igx-bollinger-band-width-indicator-component';
import { BollingerBandWidthIndicator } from './BollingerBandWidthIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxBollingerBandWidthIndicatorModule],
    exports: [IgxBollingerBandWidthIndicatorModule],
    entryComponents: [IgxBollingerBandWidthIndicatorComponent]
})
export class IgxBollingerBandWidthIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxBollingerBandWidthIndicatorComponent", IgxBollingerBandWidthIndicatorComponent);
        TypeRegistrar.register("BollingerBandWidthIndicator", (<any>BollingerBandWidthIndicator).$type);
    }
}
