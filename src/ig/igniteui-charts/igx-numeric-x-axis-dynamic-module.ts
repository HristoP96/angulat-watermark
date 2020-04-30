/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxNumericXAxisModule } from './igx-numeric-x-axis-module';
import { IgxNumericXAxisComponent } from './igx-numeric-x-axis-component';
import { NumericXAxis } from './NumericXAxis';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxNumericXAxisModule],
    exports: [IgxNumericXAxisModule],
    entryComponents: [IgxNumericXAxisComponent]
})
export class IgxNumericXAxisDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxNumericXAxisComponent", IgxNumericXAxisComponent);
        TypeRegistrar.register("NumericXAxis", (<any>NumericXAxis).$type);
    }
}
