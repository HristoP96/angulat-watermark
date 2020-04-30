/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayProxy } from './OverlayProxy';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxOverlayProxyModule } from './igx-overlay-proxy-module'



@NgModule({
    declarations: [],
    exports: [IgxOverlayProxyModule
    ],
    imports: [CommonModule, IgxOverlayProxyModule
    ],
    entryComponents: []
})
export class IgxOverlayProxyDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('OverlayProxy', OverlayProxy);
                TypeRegistrar.register('OverlayProxy', (OverlayProxy as any).$type);

    }

}