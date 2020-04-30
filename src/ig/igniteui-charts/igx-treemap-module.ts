/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxTreemapComponent } from './igx-treemap-component';
import { IgxTreemapNodeStyleModule } from './igx-treemap-node-style-module';
import { IgxTreemapNodeStyleMappingModule } from './igx-treemap-node-style-mapping-module';
import { Treemap } from './Treemap';
import { FastItemObjectColumn } from 'igniteui-core/FastItemObjectColumn';
import { TypeRegistrar } from 'igniteui-core/type';


@NgModule({
    declarations: [IgxTreemapComponent],
    exports: [IgxTreemapComponent,
IgxTreemapNodeStyleModule,
IgxTreemapNodeStyleMappingModule
    ],
    imports: [CommonModule, IgxTreemapNodeStyleModule,
IgxTreemapNodeStyleMappingModule
    ],
    entryComponents: []
})
export class IgxTreemapModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxTreemapComponent', IgxTreemapComponent);
        TypeRegistrar.register('Treemap', (Treemap as any).$type);
        TypeRegistrar.register('FastItemObjectColumn', (FastItemObjectColumn as any).$type);

    }

}