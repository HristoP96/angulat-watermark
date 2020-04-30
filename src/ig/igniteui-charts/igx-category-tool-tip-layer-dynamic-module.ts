/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCategoryToolTipLayerModule } from './igx-category-tool-tip-layer-module';
import { IgxCategoryToolTipLayerComponent } from './igx-category-tool-tip-layer-component';
import { CategoryToolTipLayer } from './CategoryToolTipLayer';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxCategoryToolTipLayerModule],
    exports: [IgxCategoryToolTipLayerModule],
    entryComponents: [IgxCategoryToolTipLayerComponent]
})
export class IgxCategoryToolTipLayerDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxCategoryToolTipLayerComponent", IgxCategoryToolTipLayerComponent);
        TypeRegistrar.register("CategoryToolTipLayer", (<any>CategoryToolTipLayer).$type);
    }
}
