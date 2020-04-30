/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxLineSeriesModule } from './igx-line-series-module';
import { IgxAreaSeriesModule } from './igx-area-series-module';
import { IgxColumnSeriesModule } from './igx-column-series-module';
import { IgxSplineSeriesModule } from './igx-spline-series-module';
import { IgxSplineAreaSeriesModule } from './igx-spline-area-series-module';
import { IgxStepLineSeriesModule } from './igx-step-line-series-module';
import { IgxStepAreaSeriesModule } from './igx-step-area-series-module';
import { IgxPointSeriesModule } from './igx-point-series-module';
import { IgxWaterfallSeriesModule } from './igx-waterfall-series-module';
import { IgxRangeAreaSeriesModule } from './igx-range-area-series-module';
import { IgxRangeColumnSeriesModule } from './igx-range-column-series-module';
import { IgxDataChartCategoryCoreModule } from './igx-data-chart-category-core-module';


@NgModule({
    declarations: [],
    exports: [IgxLineSeriesModule,
IgxAreaSeriesModule,
IgxColumnSeriesModule,
IgxSplineSeriesModule,
IgxSplineAreaSeriesModule,
IgxStepLineSeriesModule,
IgxStepAreaSeriesModule,
IgxPointSeriesModule,
IgxWaterfallSeriesModule,
IgxRangeAreaSeriesModule,
IgxRangeColumnSeriesModule,
IgxDataChartCategoryCoreModule
    ],
    imports: [CommonModule, IgxLineSeriesModule,
IgxAreaSeriesModule,
IgxColumnSeriesModule,
IgxSplineSeriesModule,
IgxSplineAreaSeriesModule,
IgxStepLineSeriesModule,
IgxStepAreaSeriesModule,
IgxPointSeriesModule,
IgxWaterfallSeriesModule,
IgxRangeAreaSeriesModule,
IgxRangeColumnSeriesModule,
IgxDataChartCategoryCoreModule
    ],
    entryComponents: []
})
export class IgxDataChartCategoryModule {
    
}