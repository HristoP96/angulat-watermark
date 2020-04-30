/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRelativeStrengthIndexIndicatorModule } from './igx-relative-strength-index-indicator-module';
import { IgxRelativeStrengthIndexIndicatorComponent } from './igx-relative-strength-index-indicator-component';
import { RelativeStrengthIndexIndicator } from './RelativeStrengthIndexIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxRelativeStrengthIndexIndicatorModule],
    exports: [IgxRelativeStrengthIndexIndicatorModule],
    entryComponents: [IgxRelativeStrengthIndexIndicatorComponent]
})
export class IgxRelativeStrengthIndexIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxRelativeStrengthIndexIndicatorComponent", IgxRelativeStrengthIndexIndicatorComponent);
        TypeRegistrar.register("RelativeStrengthIndexIndicator", (<any>RelativeStrengthIndexIndicator).$type);
    }
}
