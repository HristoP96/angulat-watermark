/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxValueOverlayModule } from './igx-value-overlay-module';
import { IgxValueOverlayComponent } from './igx-value-overlay-component';
import { ValueOverlay } from './ValueOverlay';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxValueOverlayModule],
    exports: [IgxValueOverlayModule],
    entryComponents: [IgxValueOverlayComponent]
})
export class IgxValueOverlayDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxValueOverlayComponent", IgxValueOverlayComponent);
        TypeRegistrar.register("ValueOverlay", (<any>ValueOverlay).$type);
    }
}
