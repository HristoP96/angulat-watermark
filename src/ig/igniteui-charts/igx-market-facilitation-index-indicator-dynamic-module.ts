/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxMarketFacilitationIndexIndicatorModule } from './igx-market-facilitation-index-indicator-module';
import { IgxMarketFacilitationIndexIndicatorComponent } from './igx-market-facilitation-index-indicator-component';
import { MarketFacilitationIndexIndicator } from './MarketFacilitationIndexIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxMarketFacilitationIndexIndicatorModule],
    exports: [IgxMarketFacilitationIndexIndicatorModule],
    entryComponents: [IgxMarketFacilitationIndexIndicatorComponent]
})
export class IgxMarketFacilitationIndexIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxMarketFacilitationIndexIndicatorComponent", IgxMarketFacilitationIndexIndicatorComponent);
        TypeRegistrar.register("MarketFacilitationIndexIndicator", (<any>MarketFacilitationIndexIndicator).$type);
    }
}
