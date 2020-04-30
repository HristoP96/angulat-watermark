/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxSparklineCoreDynamicModule } from './igx-sparkline-core-dynamic-module';
import { IgxDataChartInteractivityDynamicModule } from './igx-data-chart-interactivity-dynamic-module';
import { IgxSparklineModule } from './igx-sparkline-module'



@NgModule({
    declarations: [],
    exports: [IgxSparklineCoreDynamicModule,
IgxDataChartInteractivityDynamicModule,
IgxSparklineModule
    ],
    imports: [CommonModule, IgxSparklineCoreDynamicModule,
IgxDataChartInteractivityDynamicModule,
IgxSparklineModule
    ],
    entryComponents: []
})
export class IgxSparklineDynamicModule {
    
}