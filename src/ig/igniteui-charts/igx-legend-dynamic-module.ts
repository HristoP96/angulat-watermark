/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxLegendComponent } from './igx-legend-component';
import { LegendTemplates } from './LegendTemplates';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxLegendModule } from './igx-legend-module'



@NgModule({
    declarations: [],
    exports: [IgxLegendModule
    ],
    imports: [CommonModule, IgxLegendModule
    ],
    entryComponents: [IgxLegendComponent]
})
export class IgxLegendDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxLegendComponent', IgxLegendComponent);        TypeRegistrar.registerCons('LegendTemplates', LegendTemplates);
                TypeRegistrar.register('LegendTemplates', (LegendTemplates as any).$type);

    }

}