/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCategoryHighlightLayerModule } from './igx-category-highlight-layer-module';
import { IgxCategoryHighlightLayerComponent } from './igx-category-highlight-layer-component';
import { CategoryHighlightLayer } from './CategoryHighlightLayer';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxCategoryHighlightLayerModule],
    exports: [IgxCategoryHighlightLayerModule],
    entryComponents: [IgxCategoryHighlightLayerComponent]
})
export class IgxCategoryHighlightLayerDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxCategoryHighlightLayerComponent", IgxCategoryHighlightLayerComponent);
        TypeRegistrar.register("CategoryHighlightLayer", (<any>CategoryHighlightLayer).$type);
    }
}
