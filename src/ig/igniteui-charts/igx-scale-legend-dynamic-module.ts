/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxScaleLegendComponent } from './igx-scale-legend-component';
import { LegendTemplates } from './LegendTemplates';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxScaleLegendModule } from './igx-scale-legend-module'



@NgModule({
    declarations: [],
    exports: [IgxScaleLegendModule
    ],
    imports: [CommonModule, IgxScaleLegendModule
    ],
    entryComponents: [IgxScaleLegendComponent]
})
export class IgxScaleLegendDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxScaleLegendComponent', IgxScaleLegendComponent);        TypeRegistrar.registerCons('LegendTemplates', LegendTemplates);
                TypeRegistrar.register('LegendTemplates', (LegendTemplates as any).$type);

    }

}