/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRadialAreaSeriesDynamicModule } from './igx-radial-area-series-dynamic-module';
import { IgxRadialColumnSeriesDynamicModule } from './igx-radial-column-series-dynamic-module';
import { IgxRadialLineSeriesDynamicModule } from './igx-radial-line-series-dynamic-module';
import { IgxRadialPieSeriesDynamicModule } from './igx-radial-pie-series-dynamic-module';
import { IgxDataChartRadialCoreDynamicModule } from './igx-data-chart-radial-core-dynamic-module';
import { IgxDataChartRadialModule } from './igx-data-chart-radial-module'



@NgModule({
    declarations: [],
    exports: [IgxRadialAreaSeriesDynamicModule,
IgxRadialColumnSeriesDynamicModule,
IgxRadialLineSeriesDynamicModule,
IgxRadialPieSeriesDynamicModule,
IgxDataChartRadialCoreDynamicModule,
IgxDataChartRadialModule
    ],
    imports: [CommonModule, IgxRadialAreaSeriesDynamicModule,
IgxRadialColumnSeriesDynamicModule,
IgxRadialLineSeriesDynamicModule,
IgxRadialPieSeriesDynamicModule,
IgxDataChartRadialCoreDynamicModule,
IgxDataChartRadialModule
    ],
    entryComponents: []
})
export class IgxDataChartRadialDynamicModule {
    
}