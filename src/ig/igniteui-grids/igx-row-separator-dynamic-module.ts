/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRowSeparatorModule } from './igx-row-separator-module';
import { IgxRowSeparatorComponent } from './igx-row-separator-component';
import { RowSeparator } from './RowSeparator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxRowSeparatorModule],
    exports: [IgxRowSeparatorModule],
    entryComponents: [IgxRowSeparatorComponent]
})
export class IgxRowSeparatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxRowSeparatorComponent", IgxRowSeparatorComponent);
        TypeRegistrar.register("RowSeparator", (<any>RowSeparator).$type);
    }
}
