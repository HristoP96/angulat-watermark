/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialPriceSeriesProxy } from './FinancialPriceSeriesProxy';
import { IgxFinancialEventArgs } from './igx-financial-event-args';
import { FinancialEventArgs as FinancialEventArgs_internal } from './FinancialEventArgs';
import { TypeRegistrar } from 'igniteui-core/type';


@NgModule({
    declarations: [],
    exports: [
    ],
    imports: [CommonModule,
    ],
    entryComponents: []
})
export class IgxFinancialPriceSeriesProxyModule {

    constructor() {
        TypeRegistrar.register('FinancialPriceSeriesProxy', (FinancialPriceSeriesProxy as any).$type);
        TypeRegistrar.register('FinancialEventArgs', (FinancialEventArgs_internal as any).$type);
        TypeRegistrar.registerCons('igx-financial-event-args', IgxFinancialEventArgs);
    }

}