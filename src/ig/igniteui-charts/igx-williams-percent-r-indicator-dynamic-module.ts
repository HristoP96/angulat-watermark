/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxWilliamsPercentRIndicatorModule } from './igx-williams-percent-r-indicator-module';
import { IgxWilliamsPercentRIndicatorComponent } from './igx-williams-percent-r-indicator-component';
import { WilliamsPercentRIndicator } from './WilliamsPercentRIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxWilliamsPercentRIndicatorModule],
    exports: [IgxWilliamsPercentRIndicatorModule],
    entryComponents: [IgxWilliamsPercentRIndicatorComponent]
})
export class IgxWilliamsPercentRIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxWilliamsPercentRIndicatorComponent", IgxWilliamsPercentRIndicatorComponent);
        TypeRegistrar.register("WilliamsPercentRIndicator", (<any>WilliamsPercentRIndicator).$type);
    }
}
