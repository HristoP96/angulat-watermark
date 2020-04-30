/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxColumnResizingSeparatorModule } from './igx-column-resizing-separator-module';
import { IgxColumnResizingSeparatorComponent } from './igx-column-resizing-separator-component';
import { ColumnResizingSeparator } from './ColumnResizingSeparator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxColumnResizingSeparatorModule],
    exports: [IgxColumnResizingSeparatorModule],
    entryComponents: [IgxColumnResizingSeparatorComponent]
})
export class IgxColumnResizingSeparatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxColumnResizingSeparatorComponent", IgxColumnResizingSeparatorComponent);
        TypeRegistrar.register("ColumnResizingSeparator", (<any>ColumnResizingSeparator).$type);
    }
}
