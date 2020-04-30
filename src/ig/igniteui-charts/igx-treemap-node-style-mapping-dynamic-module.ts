/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxTreemapNodeStyleMappingModule } from './igx-treemap-node-style-mapping-module';
import { IgxTreemapNodeStyleMappingComponent } from './igx-treemap-node-style-mapping-component';
import { TreemapNodeStyleMapping } from './TreemapNodeStyleMapping';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxTreemapNodeStyleMappingModule],
    exports: [IgxTreemapNodeStyleMappingModule],
    entryComponents: [IgxTreemapNodeStyleMappingComponent]
})
export class IgxTreemapNodeStyleMappingDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxTreemapNodeStyleMappingComponent", IgxTreemapNodeStyleMappingComponent);
        TypeRegistrar.register("TreemapNodeStyleMapping", (<any>TreemapNodeStyleMapping).$type);
    }
}
