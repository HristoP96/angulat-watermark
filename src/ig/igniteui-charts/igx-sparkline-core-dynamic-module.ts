/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxSparklineComponent } from './igx-sparkline-component';
import { FastItemObjectColumn } from 'igniteui-core/FastItemObjectColumn';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxSparklineCoreModule } from './igx-sparkline-core-module'



@NgModule({
    declarations: [],
    exports: [IgxSparklineCoreModule
    ],
    imports: [CommonModule, IgxSparklineCoreModule
    ],
    entryComponents: [IgxSparklineComponent]
})
export class IgxSparklineCoreDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxSparklineComponent', IgxSparklineComponent);
                TypeRegistrar.register('FastItemObjectColumn', (FastItemObjectColumn as any).$type);

    }

}