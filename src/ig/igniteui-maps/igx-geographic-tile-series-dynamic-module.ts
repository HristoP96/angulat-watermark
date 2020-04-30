/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGeographicTileSeriesModule } from './igx-geographic-tile-series-module';
import { IgxGeographicTileSeriesComponent } from './igx-geographic-tile-series-component';
import { GeographicTileSeries } from './GeographicTileSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxGeographicTileSeriesModule],
    exports: [IgxGeographicTileSeriesModule],
    entryComponents: [IgxGeographicTileSeriesComponent]
})
export class IgxGeographicTileSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxGeographicTileSeriesComponent", IgxGeographicTileSeriesComponent);
        TypeRegistrar.register("GeographicTileSeries", (<any>GeographicTileSeries).$type);
    }
}
