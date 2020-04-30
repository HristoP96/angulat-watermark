/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRadialGaugeComponent } from './igx-radial-gauge-component';
import { IgxRadialGaugeRangeDynamicModule } from './igx-radial-gauge-range-dynamic-module';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxRadialGaugeCoreModule } from './igx-radial-gauge-core-module'



@NgModule({
    declarations: [],
    exports: [IgxRadialGaugeRangeDynamicModule,
IgxRadialGaugeCoreModule
    ],
    imports: [CommonModule, IgxRadialGaugeRangeDynamicModule,
IgxRadialGaugeCoreModule
    ],
    entryComponents: [IgxRadialGaugeComponent]
})
export class IgxRadialGaugeCoreDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxRadialGaugeComponent', IgxRadialGaugeComponent);
        
    }

}