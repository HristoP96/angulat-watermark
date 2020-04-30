/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGeographicShapeSeriesModule } from './igx-geographic-shape-series-module';
import { IgxGeographicPolylineSeriesModule } from './igx-geographic-polyline-series-module';
import { IgxGeographicTileSeriesModule } from './igx-geographic-tile-series-module';
import { IgxGeographicProportionalSymbolSeriesModule } from './igx-geographic-proportional-symbol-series-module';
import { IgxGeographicSymbolSeriesModule } from './igx-geographic-symbol-series-module';
import { IgxGeographicScatterAreaSeriesModule } from './igx-geographic-scatter-area-series-module';
import { IgxGeographicHighDensityScatterSeriesModule } from './igx-geographic-high-density-scatter-series-module';
import { IgxGeographicContourLineSeriesModule } from './igx-geographic-contour-line-series-module';
import { IgxGeographicMapCoreModule } from './igx-geographic-map-core-module';
import { IgxShapeDataSourceModule } from 'igniteui-core/igx-shape-data-source-module';


@NgModule({
    declarations: [],
    exports: [IgxGeographicShapeSeriesModule,
IgxGeographicPolylineSeriesModule,
IgxGeographicTileSeriesModule,
IgxGeographicProportionalSymbolSeriesModule,
IgxGeographicSymbolSeriesModule,
IgxGeographicScatterAreaSeriesModule,
IgxGeographicHighDensityScatterSeriesModule,
IgxGeographicContourLineSeriesModule,
IgxGeographicMapCoreModule,
IgxShapeDataSourceModule
    ],
    imports: [CommonModule, IgxGeographicShapeSeriesModule,
IgxGeographicPolylineSeriesModule,
IgxGeographicTileSeriesModule,
IgxGeographicProportionalSymbolSeriesModule,
IgxGeographicSymbolSeriesModule,
IgxGeographicScatterAreaSeriesModule,
IgxGeographicHighDensityScatterSeriesModule,
IgxGeographicContourLineSeriesModule,
IgxGeographicMapCoreModule,
IgxShapeDataSourceModule
    ],
    entryComponents: []
})
export class IgxGeographicMapModule {
    
}