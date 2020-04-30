/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxItemToolTipLayerModule } from './igx-item-tool-tip-layer-module';
import { IgxItemToolTipLayerComponent } from './igx-item-tool-tip-layer-component';
import { ItemToolTipLayer } from './ItemToolTipLayer';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxItemToolTipLayerModule],
    exports: [IgxItemToolTipLayerModule],
    entryComponents: [IgxItemToolTipLayerComponent]
})
export class IgxItemToolTipLayerDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxItemToolTipLayerComponent", IgxItemToolTipLayerComponent);
        TypeRegistrar.register("ItemToolTipLayer", (<any>ItemToolTipLayer).$type);
    }
}
