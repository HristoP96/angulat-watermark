/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxScatterAreaSeriesDynamicModule } from './igx-scatter-area-series-dynamic-module';
import { IgxScatterContourSeriesDynamicModule } from './igx-scatter-contour-series-dynamic-module';
import { IgxScatterPolygonSeriesDynamicModule } from './igx-scatter-polygon-series-dynamic-module';
import { IgxScatterPolylineSeriesDynamicModule } from './igx-scatter-polyline-series-dynamic-module';
import { IgxDataChartShapeCoreDynamicModule } from './igx-data-chart-shape-core-dynamic-module';
import { IgxDataChartShapeModule } from './igx-data-chart-shape-module'



@NgModule({
    declarations: [],
    exports: [IgxScatterAreaSeriesDynamicModule,
IgxScatterContourSeriesDynamicModule,
IgxScatterPolygonSeriesDynamicModule,
IgxScatterPolylineSeriesDynamicModule,
IgxDataChartShapeCoreDynamicModule,
IgxDataChartShapeModule
    ],
    imports: [CommonModule, IgxScatterAreaSeriesDynamicModule,
IgxScatterContourSeriesDynamicModule,
IgxScatterPolygonSeriesDynamicModule,
IgxScatterPolylineSeriesDynamicModule,
IgxDataChartShapeCoreDynamicModule,
IgxDataChartShapeModule
    ],
    entryComponents: []
})
export class IgxDataChartShapeDynamicModule {
    
}