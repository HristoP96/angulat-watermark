/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxMedianPriceIndicatorModule } from './igx-median-price-indicator-module';
import { IgxMedianPriceIndicatorComponent } from './igx-median-price-indicator-component';
import { MedianPriceIndicator } from './MedianPriceIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxMedianPriceIndicatorModule],
    exports: [IgxMedianPriceIndicatorModule],
    entryComponents: [IgxMedianPriceIndicatorComponent]
})
export class IgxMedianPriceIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxMedianPriceIndicatorComponent", IgxMedianPriceIndicatorComponent);
        TypeRegistrar.register("MedianPriceIndicator", (<any>MedianPriceIndicator).$type);
    }
}
