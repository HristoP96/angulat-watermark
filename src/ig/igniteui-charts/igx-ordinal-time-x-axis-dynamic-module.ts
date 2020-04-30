/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxOrdinalTimeXAxisModule } from './igx-ordinal-time-x-axis-module';
import { IgxOrdinalTimeXAxisComponent } from './igx-ordinal-time-x-axis-component';
import { OrdinalTimeXAxis } from './OrdinalTimeXAxis';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxOrdinalTimeXAxisModule],
    exports: [IgxOrdinalTimeXAxisModule],
    entryComponents: [IgxOrdinalTimeXAxisComponent]
})
export class IgxOrdinalTimeXAxisDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxOrdinalTimeXAxisComponent", IgxOrdinalTimeXAxisComponent);
        TypeRegistrar.register("OrdinalTimeXAxis", (<any>OrdinalTimeXAxis).$type);
    }
}
