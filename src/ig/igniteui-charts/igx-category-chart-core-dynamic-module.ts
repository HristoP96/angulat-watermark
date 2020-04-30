/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCategoryChartComponent } from './igx-category-chart-component';
import { IgxCategoryXAxisDynamicModule } from './igx-category-x-axis-dynamic-module';
import { IgxNumericYAxisDynamicModule } from './igx-numeric-y-axis-dynamic-module';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxCategoryChartCoreModule } from './igx-category-chart-core-module'



@NgModule({
    declarations: [],
    exports: [IgxCategoryXAxisDynamicModule,
IgxNumericYAxisDynamicModule,
IgxCategoryChartCoreModule
    ],
    imports: [CommonModule, IgxCategoryXAxisDynamicModule,
IgxNumericYAxisDynamicModule,
IgxCategoryChartCoreModule
    ],
    entryComponents: [IgxCategoryChartComponent]
})
export class IgxCategoryChartCoreDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxCategoryChartComponent', IgxCategoryChartComponent);
        
    }

}