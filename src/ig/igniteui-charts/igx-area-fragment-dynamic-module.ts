/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxAreaFragmentModule } from './igx-area-fragment-module';
import { IgxAreaFragmentComponent } from './igx-area-fragment-component';
import { AreaFragment } from './AreaFragment';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxAreaFragmentModule],
    exports: [IgxAreaFragmentModule],
    entryComponents: [IgxAreaFragmentComponent]
})
export class IgxAreaFragmentDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxAreaFragmentComponent", IgxAreaFragmentComponent);
        TypeRegistrar.register("AreaFragment", (<any>AreaFragment).$type);
    }
}
