/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorProxy } from './IndicatorProxy';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxIndicatorProxyModule } from './igx-indicator-proxy-module'



@NgModule({
    declarations: [],
    exports: [IgxIndicatorProxyModule
    ],
    imports: [CommonModule, IgxIndicatorProxyModule
    ],
    entryComponents: []
})
export class IgxIndicatorProxyDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IndicatorProxy', IndicatorProxy);
                TypeRegistrar.register('IndicatorProxy', (IndicatorProxy as any).$type);

    }

}