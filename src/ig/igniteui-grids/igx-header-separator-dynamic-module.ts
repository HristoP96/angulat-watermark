/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxHeaderSeparatorModule } from './igx-header-separator-module';
import { IgxHeaderSeparatorComponent } from './igx-header-separator-component';
import { HeaderSeparator } from './HeaderSeparator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxHeaderSeparatorModule],
    exports: [IgxHeaderSeparatorModule],
    entryComponents: [IgxHeaderSeparatorComponent]
})
export class IgxHeaderSeparatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxHeaderSeparatorComponent", IgxHeaderSeparatorComponent);
        TypeRegistrar.register("HeaderSeparator", (<any>HeaderSeparator).$type);
    }
}
