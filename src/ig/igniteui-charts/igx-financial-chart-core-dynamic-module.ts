/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxFinancialChartComponent } from './igx-financial-chart-component';
import { IgxFinancialChartDefaultTemplatesComponent } from './igx-financial-chart-default-templates-component';
import { IgxTemplateContentDynamicModule } from 'igniteui-core/igx-template-content-dynamic-module';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxFinancialChartCoreModule } from './igx-financial-chart-core-module'



@NgModule({
    declarations: [],
    exports: [IgxTemplateContentDynamicModule,
IgxFinancialChartCoreModule
    ],
    imports: [CommonModule, IgxTemplateContentDynamicModule,
IgxFinancialChartCoreModule
    ],
    entryComponents: [IgxFinancialChartComponent,
IgxFinancialChartDefaultTemplatesComponent]
})
export class IgxFinancialChartCoreDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxFinancialChartComponent', IgxFinancialChartComponent);        TypeRegistrar.registerCons('IgxFinancialChartDefaultTemplatesComponent', IgxFinancialChartDefaultTemplatesComponent);
        
    }

}