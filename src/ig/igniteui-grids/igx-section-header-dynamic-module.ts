/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxSectionHeaderModule } from './igx-section-header-module';
import { IgxSectionHeaderComponent } from './igx-section-header-component';
import { SectionHeader } from './SectionHeader';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxSectionHeaderModule],
    exports: [IgxSectionHeaderModule],
    entryComponents: [IgxSectionHeaderComponent]
})
export class IgxSectionHeaderDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxSectionHeaderComponent", IgxSectionHeaderComponent);
        TypeRegistrar.register("SectionHeader", (<any>SectionHeader).$type);
    }
}
