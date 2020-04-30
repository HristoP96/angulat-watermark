/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxTileSeriesModule } from './igx-tile-series-module';
import { IgxTileSeriesComponent } from './igx-tile-series-component';
import { TileSeries } from './TileSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxTileSeriesModule],
    exports: [IgxTileSeriesModule],
    entryComponents: [IgxTileSeriesComponent]
})
export class IgxTileSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxTileSeriesComponent", IgxTileSeriesComponent);
        TypeRegistrar.register("TileSeries", (<any>TileSeries).$type);
    }
}
