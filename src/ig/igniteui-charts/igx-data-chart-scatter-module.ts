/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxBubbleSeriesModule } from './igx-bubble-series-module';
import { IgxScatterSeriesModule } from './igx-scatter-series-module';
import { IgxScatterLineSeriesModule } from './igx-scatter-line-series-module';
import { IgxScatterSplineSeriesModule } from './igx-scatter-spline-series-module';
import { IgxHighDensityScatterSeriesModule } from './igx-high-density-scatter-series-module';
import { IgxDataChartScatterCoreModule } from './igx-data-chart-scatter-core-module';


@NgModule({
    declarations: [],
    exports: [IgxBubbleSeriesModule,
IgxScatterSeriesModule,
IgxScatterLineSeriesModule,
IgxScatterSplineSeriesModule,
IgxHighDensityScatterSeriesModule,
IgxDataChartScatterCoreModule
    ],
    imports: [CommonModule, IgxBubbleSeriesModule,
IgxScatterSeriesModule,
IgxScatterLineSeriesModule,
IgxScatterSplineSeriesModule,
IgxHighDensityScatterSeriesModule,
IgxDataChartScatterCoreModule
    ],
    entryComponents: []
})
export class IgxDataChartScatterModule {
    
}