/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRadialAreaSeriesModule } from './igx-radial-area-series-module';
import { IgxRadialColumnSeriesModule } from './igx-radial-column-series-module';
import { IgxRadialLineSeriesModule } from './igx-radial-line-series-module';
import { IgxRadialPieSeriesModule } from './igx-radial-pie-series-module';
import { IgxDataChartRadialCoreModule } from './igx-data-chart-radial-core-module';


@NgModule({
    declarations: [],
    exports: [IgxRadialAreaSeriesModule,
IgxRadialColumnSeriesModule,
IgxRadialLineSeriesModule,
IgxRadialPieSeriesModule,
IgxDataChartRadialCoreModule
    ],
    imports: [CommonModule, IgxRadialAreaSeriesModule,
IgxRadialColumnSeriesModule,
IgxRadialLineSeriesModule,
IgxRadialPieSeriesModule,
IgxDataChartRadialCoreModule
    ],
    entryComponents: []
})
export class IgxDataChartRadialModule {
    
}