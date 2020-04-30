/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxBarFragmentModule } from './igx-bar-fragment-module';
import { IgxBarFragmentComponent } from './igx-bar-fragment-component';
import { BarFragment } from './BarFragment';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxBarFragmentModule],
    exports: [IgxBarFragmentModule],
    entryComponents: [IgxBarFragmentComponent]
})
export class IgxBarFragmentDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxBarFragmentComponent", IgxBarFragmentComponent);
        TypeRegistrar.register("BarFragment", (<any>BarFragment).$type);
    }
}
