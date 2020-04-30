/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGeographicShapeSeriesDynamicModule } from './igx-geographic-shape-series-dynamic-module';
import { IgxGeographicPolylineSeriesDynamicModule } from './igx-geographic-polyline-series-dynamic-module';
import { IgxGeographicTileSeriesDynamicModule } from './igx-geographic-tile-series-dynamic-module';
import { IgxGeographicProportionalSymbolSeriesDynamicModule } from './igx-geographic-proportional-symbol-series-dynamic-module';
import { IgxGeographicSymbolSeriesDynamicModule } from './igx-geographic-symbol-series-dynamic-module';
import { IgxGeographicScatterAreaSeriesDynamicModule } from './igx-geographic-scatter-area-series-dynamic-module';
import { IgxGeographicHighDensityScatterSeriesDynamicModule } from './igx-geographic-high-density-scatter-series-dynamic-module';
import { IgxGeographicContourLineSeriesDynamicModule } from './igx-geographic-contour-line-series-dynamic-module';
import { IgxGeographicMapCoreDynamicModule } from './igx-geographic-map-core-dynamic-module';
import { IgxShapeDataSourceDynamicModule } from 'igniteui-core/igx-shape-data-source-dynamic-module';
import { IgxGeographicMapModule } from './igx-geographic-map-module'



@NgModule({
    declarations: [],
    exports: [IgxGeographicShapeSeriesDynamicModule,
IgxGeographicPolylineSeriesDynamicModule,
IgxGeographicTileSeriesDynamicModule,
IgxGeographicProportionalSymbolSeriesDynamicModule,
IgxGeographicSymbolSeriesDynamicModule,
IgxGeographicScatterAreaSeriesDynamicModule,
IgxGeographicHighDensityScatterSeriesDynamicModule,
IgxGeographicContourLineSeriesDynamicModule,
IgxGeographicMapCoreDynamicModule,
IgxShapeDataSourceDynamicModule,
IgxGeographicMapModule
    ],
    imports: [CommonModule, IgxGeographicShapeSeriesDynamicModule,
IgxGeographicPolylineSeriesDynamicModule,
IgxGeographicTileSeriesDynamicModule,
IgxGeographicProportionalSymbolSeriesDynamicModule,
IgxGeographicSymbolSeriesDynamicModule,
IgxGeographicScatterAreaSeriesDynamicModule,
IgxGeographicHighDensityScatterSeriesDynamicModule,
IgxGeographicContourLineSeriesDynamicModule,
IgxGeographicMapCoreDynamicModule,
IgxShapeDataSourceDynamicModule,
IgxGeographicMapModule
    ],
    entryComponents: []
})
export class IgxGeographicMapDynamicModule {
    
}