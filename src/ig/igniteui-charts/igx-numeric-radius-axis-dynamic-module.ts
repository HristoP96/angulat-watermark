/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxNumericRadiusAxisModule } from './igx-numeric-radius-axis-module';
import { IgxNumericRadiusAxisComponent } from './igx-numeric-radius-axis-component';
import { NumericRadiusAxis } from './NumericRadiusAxis';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxNumericRadiusAxisModule],
    exports: [IgxNumericRadiusAxisModule],
    entryComponents: [IgxNumericRadiusAxisComponent]
})
export class IgxNumericRadiusAxisDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxNumericRadiusAxisComponent", IgxNumericRadiusAxisComponent);
        TypeRegistrar.register("NumericRadiusAxis", (<any>NumericRadiusAxis).$type);
    }
}
