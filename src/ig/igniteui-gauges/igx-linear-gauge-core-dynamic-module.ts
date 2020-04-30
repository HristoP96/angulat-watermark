/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxLinearGaugeComponent } from './igx-linear-gauge-component';
import { IgxLinearGraphRangeDynamicModule } from './igx-linear-graph-range-dynamic-module';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxLinearGaugeCoreModule } from './igx-linear-gauge-core-module'



@NgModule({
    declarations: [],
    exports: [IgxLinearGraphRangeDynamicModule,
IgxLinearGaugeCoreModule
    ],
    imports: [CommonModule, IgxLinearGraphRangeDynamicModule,
IgxLinearGaugeCoreModule
    ],
    entryComponents: [IgxLinearGaugeComponent]
})
export class IgxLinearGaugeCoreDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxLinearGaugeComponent', IgxLinearGaugeComponent);
        
    }

}