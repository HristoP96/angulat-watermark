/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxLinearGraphRangeComponent } from './igx-linear-graph-range-component';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxLinearGraphRangeModule } from './igx-linear-graph-range-module'



@NgModule({
    declarations: [],
    exports: [IgxLinearGraphRangeModule
    ],
    imports: [CommonModule, IgxLinearGraphRangeModule
    ],
    entryComponents: [IgxLinearGraphRangeComponent]
})
export class IgxLinearGraphRangeDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxLinearGraphRangeComponent', IgxLinearGraphRangeComponent);
        
    }

}