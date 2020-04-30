/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxPolarAreaSeriesDynamicModule } from './igx-polar-area-series-dynamic-module';
import { IgxPolarLineSeriesDynamicModule } from './igx-polar-line-series-dynamic-module';
import { IgxPolarScatterSeriesDynamicModule } from './igx-polar-scatter-series-dynamic-module';
import { IgxPolarSplineSeriesDynamicModule } from './igx-polar-spline-series-dynamic-module';
import { IgxPolarSplineAreaSeriesDynamicModule } from './igx-polar-spline-area-series-dynamic-module';
import { IgxDataChartPolarCoreDynamicModule } from './igx-data-chart-polar-core-dynamic-module';
import { IgxDataChartPolarModule } from './igx-data-chart-polar-module'



@NgModule({
    declarations: [],
    exports: [IgxPolarAreaSeriesDynamicModule,
IgxPolarLineSeriesDynamicModule,
IgxPolarScatterSeriesDynamicModule,
IgxPolarSplineSeriesDynamicModule,
IgxPolarSplineAreaSeriesDynamicModule,
IgxDataChartPolarCoreDynamicModule,
IgxDataChartPolarModule
    ],
    imports: [CommonModule, IgxPolarAreaSeriesDynamicModule,
IgxPolarLineSeriesDynamicModule,
IgxPolarScatterSeriesDynamicModule,
IgxPolarSplineSeriesDynamicModule,
IgxPolarSplineAreaSeriesDynamicModule,
IgxDataChartPolarCoreDynamicModule,
IgxDataChartPolarModule
    ],
    entryComponents: []
})
export class IgxDataChartPolarDynamicModule {
    
}