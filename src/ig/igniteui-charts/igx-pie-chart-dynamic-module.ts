/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxPieChartCoreDynamicModule } from './igx-pie-chart-core-dynamic-module';
import { IgxDataChartInteractivityDynamicModule } from './igx-data-chart-interactivity-dynamic-module';
import { IgxPieChartModule } from './igx-pie-chart-module'



@NgModule({
    declarations: [],
    exports: [IgxPieChartCoreDynamicModule,
IgxDataChartInteractivityDynamicModule,
IgxPieChartModule
    ],
    imports: [CommonModule, IgxPieChartCoreDynamicModule,
IgxDataChartInteractivityDynamicModule,
IgxPieChartModule
    ],
    entryComponents: []
})
export class IgxPieChartDynamicModule {
    
}