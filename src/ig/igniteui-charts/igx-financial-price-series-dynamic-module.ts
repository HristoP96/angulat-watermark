/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxFinancialPriceSeriesModule } from './igx-financial-price-series-module';
import { IgxFinancialPriceSeriesComponent } from './igx-financial-price-series-component';
import { FinancialPriceSeries } from './FinancialPriceSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxFinancialPriceSeriesModule],
    exports: [IgxFinancialPriceSeriesModule],
    entryComponents: [IgxFinancialPriceSeriesComponent]
})
export class IgxFinancialPriceSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxFinancialPriceSeriesComponent", IgxFinancialPriceSeriesComponent);
        TypeRegistrar.register("FinancialPriceSeries", (<any>FinancialPriceSeries).$type);
    }
}
