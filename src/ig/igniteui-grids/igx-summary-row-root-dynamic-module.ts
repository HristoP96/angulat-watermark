/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxSummaryRowRootModule } from './igx-summary-row-root-module';
import { IgxSummaryRowRootComponent } from './igx-summary-row-root-component';
import { SummaryRowRoot } from './SummaryRowRoot';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxSummaryRowRootModule],
    exports: [IgxSummaryRowRootModule],
    entryComponents: [IgxSummaryRowRootComponent]
})
export class IgxSummaryRowRootDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxSummaryRowRootComponent", IgxSummaryRowRootComponent);
        TypeRegistrar.register("SummaryRowRoot", (<any>SummaryRowRoot).$type);
    }
}
