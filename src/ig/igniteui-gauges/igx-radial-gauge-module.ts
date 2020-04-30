/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRadialGaugeCoreModule } from './igx-radial-gauge-core-module';
import { IgxDVInteractivityModule } from 'igniteui-core/igx-dv-interactivity-module';


@NgModule({
    declarations: [],
    exports: [IgxRadialGaugeCoreModule,
IgxDVInteractivityModule
    ],
    imports: [CommonModule, IgxRadialGaugeCoreModule,
IgxDVInteractivityModule
    ],
    entryComponents: []
})
export class IgxRadialGaugeModule {
    
}