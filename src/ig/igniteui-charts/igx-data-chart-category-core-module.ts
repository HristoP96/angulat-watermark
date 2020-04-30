/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCategoryXAxisModule } from './igx-category-x-axis-module';
import { IgxNumericYAxisModule } from './igx-numeric-y-axis-module';
import { IgxDataChartCoreModule } from './igx-data-chart-core-module';


@NgModule({
    declarations: [],
    exports: [IgxCategoryXAxisModule,
IgxNumericYAxisModule,
IgxDataChartCoreModule
    ],
    imports: [CommonModule, IgxCategoryXAxisModule,
IgxNumericYAxisModule,
IgxDataChartCoreModule
    ],
    entryComponents: []
})
export class IgxDataChartCategoryCoreModule {
    
}