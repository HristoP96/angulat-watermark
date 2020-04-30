/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxTemplateHeaderModule } from './igx-template-header-module';
import { IgxTemplateHeaderComponent } from './igx-template-header-component';
import { TemplateHeader } from './TemplateHeader';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxTemplateHeaderModule],
    exports: [IgxTemplateHeaderModule],
    entryComponents: [IgxTemplateHeaderComponent]
})
export class IgxTemplateHeaderDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxTemplateHeaderComponent", IgxTemplateHeaderComponent);
        TypeRegistrar.register("TemplateHeader", (<any>TemplateHeader).$type);
    }
}
