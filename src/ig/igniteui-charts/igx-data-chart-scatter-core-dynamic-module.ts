/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxNumericXAxisDynamicModule } from './igx-numeric-x-axis-dynamic-module';
import { IgxNumericYAxisDynamicModule } from './igx-numeric-y-axis-dynamic-module';
import { IgxDataChartCoreDynamicModule } from './igx-data-chart-core-dynamic-module';
import { IgxDataChartScatterCoreModule } from './igx-data-chart-scatter-core-module'



@NgModule({
    declarations: [],
    exports: [IgxNumericXAxisDynamicModule,
IgxNumericYAxisDynamicModule,
IgxDataChartCoreDynamicModule,
IgxDataChartScatterCoreModule
    ],
    imports: [CommonModule, IgxNumericXAxisDynamicModule,
IgxNumericYAxisDynamicModule,
IgxDataChartCoreDynamicModule,
IgxDataChartScatterCoreModule
    ],
    entryComponents: []
})
export class IgxDataChartScatterCoreDynamicModule {
    
}