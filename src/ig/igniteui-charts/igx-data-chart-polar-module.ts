/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxPolarAreaSeriesModule } from './igx-polar-area-series-module';
import { IgxPolarLineSeriesModule } from './igx-polar-line-series-module';
import { IgxPolarScatterSeriesModule } from './igx-polar-scatter-series-module';
import { IgxPolarSplineSeriesModule } from './igx-polar-spline-series-module';
import { IgxPolarSplineAreaSeriesModule } from './igx-polar-spline-area-series-module';
import { IgxDataChartPolarCoreModule } from './igx-data-chart-polar-core-module';


@NgModule({
    declarations: [],
    exports: [IgxPolarAreaSeriesModule,
IgxPolarLineSeriesModule,
IgxPolarScatterSeriesModule,
IgxPolarSplineSeriesModule,
IgxPolarSplineAreaSeriesModule,
IgxDataChartPolarCoreModule
    ],
    imports: [CommonModule, IgxPolarAreaSeriesModule,
IgxPolarLineSeriesModule,
IgxPolarScatterSeriesModule,
IgxPolarSplineSeriesModule,
IgxPolarSplineAreaSeriesModule,
IgxDataChartPolarCoreModule
    ],
    entryComponents: []
})
export class IgxDataChartPolarModule {
    
}