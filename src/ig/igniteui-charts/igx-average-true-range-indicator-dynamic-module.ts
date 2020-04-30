/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxAverageTrueRangeIndicatorModule } from './igx-average-true-range-indicator-module';
import { IgxAverageTrueRangeIndicatorComponent } from './igx-average-true-range-indicator-component';
import { AverageTrueRangeIndicator } from './AverageTrueRangeIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxAverageTrueRangeIndicatorModule],
    exports: [IgxAverageTrueRangeIndicatorModule],
    entryComponents: [IgxAverageTrueRangeIndicatorComponent]
})
export class IgxAverageTrueRangeIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxAverageTrueRangeIndicatorComponent", IgxAverageTrueRangeIndicatorComponent);
        TypeRegistrar.register("AverageTrueRangeIndicator", (<any>AverageTrueRangeIndicator).$type);
    }
}
