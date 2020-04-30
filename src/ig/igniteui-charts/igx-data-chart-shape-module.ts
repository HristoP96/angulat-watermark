/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxScatterAreaSeriesModule } from './igx-scatter-area-series-module';
import { IgxScatterContourSeriesModule } from './igx-scatter-contour-series-module';
import { IgxScatterPolygonSeriesModule } from './igx-scatter-polygon-series-module';
import { IgxScatterPolylineSeriesModule } from './igx-scatter-polyline-series-module';
import { IgxDataChartShapeCoreModule } from './igx-data-chart-shape-core-module';


@NgModule({
    declarations: [],
    exports: [IgxScatterAreaSeriesModule,
IgxScatterContourSeriesModule,
IgxScatterPolygonSeriesModule,
IgxScatterPolylineSeriesModule,
IgxDataChartShapeCoreModule
    ],
    imports: [CommonModule, IgxScatterAreaSeriesModule,
IgxScatterContourSeriesModule,
IgxScatterPolygonSeriesModule,
IgxScatterPolylineSeriesModule,
IgxDataChartShapeCoreModule
    ],
    entryComponents: []
})
export class IgxDataChartShapeModule {
    
}