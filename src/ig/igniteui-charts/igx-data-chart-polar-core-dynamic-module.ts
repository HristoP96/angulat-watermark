/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxNumericAngleAxisDynamicModule } from './igx-numeric-angle-axis-dynamic-module';
import { IgxNumericRadiusAxisDynamicModule } from './igx-numeric-radius-axis-dynamic-module';
import { IgxDataChartCoreDynamicModule } from './igx-data-chart-core-dynamic-module';
import { IgxDataChartPolarCoreModule } from './igx-data-chart-polar-core-module'



@NgModule({
    declarations: [],
    exports: [IgxNumericAngleAxisDynamicModule,
IgxNumericRadiusAxisDynamicModule,
IgxDataChartCoreDynamicModule,
IgxDataChartPolarCoreModule
    ],
    imports: [CommonModule, IgxNumericAngleAxisDynamicModule,
IgxNumericRadiusAxisDynamicModule,
IgxDataChartCoreDynamicModule,
IgxDataChartPolarCoreModule
    ],
    entryComponents: []
})
export class IgxDataChartPolarCoreDynamicModule {
    
}