/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxBubbleSeriesDynamicModule } from './igx-bubble-series-dynamic-module';
import { IgxScatterSeriesDynamicModule } from './igx-scatter-series-dynamic-module';
import { IgxScatterLineSeriesDynamicModule } from './igx-scatter-line-series-dynamic-module';
import { IgxScatterSplineSeriesDynamicModule } from './igx-scatter-spline-series-dynamic-module';
import { IgxHighDensityScatterSeriesDynamicModule } from './igx-high-density-scatter-series-dynamic-module';
import { IgxDataChartScatterCoreDynamicModule } from './igx-data-chart-scatter-core-dynamic-module';
import { IgxDataChartScatterModule } from './igx-data-chart-scatter-module'



@NgModule({
    declarations: [],
    exports: [IgxBubbleSeriesDynamicModule,
IgxScatterSeriesDynamicModule,
IgxScatterLineSeriesDynamicModule,
IgxScatterSplineSeriesDynamicModule,
IgxHighDensityScatterSeriesDynamicModule,
IgxDataChartScatterCoreDynamicModule,
IgxDataChartScatterModule
    ],
    imports: [CommonModule, IgxBubbleSeriesDynamicModule,
IgxScatterSeriesDynamicModule,
IgxScatterLineSeriesDynamicModule,
IgxScatterSplineSeriesDynamicModule,
IgxHighDensityScatterSeriesDynamicModule,
IgxDataChartScatterCoreDynamicModule,
IgxDataChartScatterModule
    ],
    entryComponents: []
})
export class IgxDataChartScatterDynamicModule {
    
}