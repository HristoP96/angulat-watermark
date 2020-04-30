/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCrosshairLayerModule } from './igx-crosshair-layer-module';
import { IgxCrosshairLayerComponent } from './igx-crosshair-layer-component';
import { CrosshairLayer } from './CrosshairLayer';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxCrosshairLayerModule],
    exports: [IgxCrosshairLayerModule],
    entryComponents: [IgxCrosshairLayerComponent]
})
export class IgxCrosshairLayerDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxCrosshairLayerComponent", IgxCrosshairLayerComponent);
        TypeRegistrar.register("CrosshairLayer", (<any>CrosshairLayer).$type);
    }
}
