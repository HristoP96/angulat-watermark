/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxNumericColumnModule } from './igx-numeric-column-module';
import { IgxNumericColumnComponent } from './igx-numeric-column-component';
import { NumericColumn } from './NumericColumn';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxNumericColumnModule],
    exports: [IgxNumericColumnModule],
    entryComponents: [IgxNumericColumnComponent]
})
export class IgxNumericColumnDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxNumericColumnComponent", IgxNumericColumnComponent);
        TypeRegistrar.register("NumericColumn", (<any>NumericColumn).$type);
    }
}
