/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxWeightedCloseIndicatorModule } from './igx-weighted-close-indicator-module';
import { IgxWeightedCloseIndicatorComponent } from './igx-weighted-close-indicator-component';
import { WeightedCloseIndicator } from './WeightedCloseIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxWeightedCloseIndicatorModule],
    exports: [IgxWeightedCloseIndicatorModule],
    entryComponents: [IgxWeightedCloseIndicatorComponent]
})
export class IgxWeightedCloseIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxWeightedCloseIndicatorComponent", IgxWeightedCloseIndicatorComponent);
        TypeRegistrar.register("WeightedCloseIndicator", (<any>WeightedCloseIndicator).$type);
    }
}
