/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCategoryAngleAxisDynamicModule } from './igx-category-angle-axis-dynamic-module';
import { IgxNumericRadiusAxisDynamicModule } from './igx-numeric-radius-axis-dynamic-module';
import { IgxDataChartCoreDynamicModule } from './igx-data-chart-core-dynamic-module';
import { IgxDataChartRadialCoreModule } from './igx-data-chart-radial-core-module'



@NgModule({
    declarations: [],
    exports: [IgxCategoryAngleAxisDynamicModule,
IgxNumericRadiusAxisDynamicModule,
IgxDataChartCoreDynamicModule,
IgxDataChartRadialCoreModule
    ],
    imports: [CommonModule, IgxCategoryAngleAxisDynamicModule,
IgxNumericRadiusAxisDynamicModule,
IgxDataChartCoreDynamicModule,
IgxDataChartRadialCoreModule
    ],
    entryComponents: []
})
export class IgxDataChartRadialCoreDynamicModule {
    
}