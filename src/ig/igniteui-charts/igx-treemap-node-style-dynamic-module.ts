/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxTreemapNodeStyleModule } from './igx-treemap-node-style-module';
import { IgxTreemapNodeStyleComponent } from './igx-treemap-node-style-component';
import { TreemapNodeStyle } from './TreemapNodeStyle';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxTreemapNodeStyleModule],
    exports: [IgxTreemapNodeStyleModule],
    entryComponents: [IgxTreemapNodeStyleComponent]
})
export class IgxTreemapNodeStyleDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxTreemapNodeStyleComponent", IgxTreemapNodeStyleComponent);
        TypeRegistrar.register("TreemapNodeStyle", (<any>TreemapNodeStyle).$type);
    }
}
