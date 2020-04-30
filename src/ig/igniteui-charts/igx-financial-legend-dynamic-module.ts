/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxFinancialLegendComponent } from './igx-financial-legend-component';
import { LegendTemplates } from './LegendTemplates';
import { FinancialLegend } from './FinancialLegend';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxFinancialLegendModule } from './igx-financial-legend-module'



@NgModule({
    declarations: [],
    exports: [IgxFinancialLegendModule
    ],
    imports: [CommonModule, IgxFinancialLegendModule
    ],
    entryComponents: [IgxFinancialLegendComponent]
})
export class IgxFinancialLegendDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxFinancialLegendComponent', IgxFinancialLegendComponent);        TypeRegistrar.registerCons('LegendTemplates', LegendTemplates);        TypeRegistrar.registerCons('FinancialLegend', FinancialLegend);
                TypeRegistrar.register('LegendTemplates', (LegendTemplates as any).$type);
        TypeRegistrar.register('FinancialLegend', (FinancialLegend as any).$type);

    }

}