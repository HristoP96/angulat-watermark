/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationFactoryManager } from './AnnotationFactoryManager';
import { IgxCrosshairLayerModule } from './igx-crosshair-layer-module';
import { IgxCategoryToolTipLayerModule } from './igx-category-tool-tip-layer-module';
import { IgxItemToolTipLayerModule } from './igx-item-tool-tip-layer-module';
import { IgxCategoryItemHighlightLayerModule } from './igx-category-item-highlight-layer-module';
import { IgxCategoryHighlightLayerModule } from './igx-category-highlight-layer-module';
import { IgxFinalValueLayerModule } from './igx-final-value-layer-module';
import { IgxCalloutLayerModule } from './igx-callout-layer-module';
import { TypeRegistrar } from 'igniteui-core/type';


@NgModule({
    declarations: [],
    exports: [IgxCrosshairLayerModule,
IgxCategoryToolTipLayerModule,
IgxItemToolTipLayerModule,
IgxCategoryItemHighlightLayerModule,
IgxCategoryHighlightLayerModule,
IgxFinalValueLayerModule,
IgxCalloutLayerModule
    ],
    imports: [CommonModule, IgxCrosshairLayerModule,
IgxCategoryToolTipLayerModule,
IgxItemToolTipLayerModule,
IgxCategoryItemHighlightLayerModule,
IgxCategoryHighlightLayerModule,
IgxFinalValueLayerModule,
IgxCalloutLayerModule
    ],
    entryComponents: []
})
export class IgxDataChartAnnotationModule {
    
    constructor() {
                TypeRegistrar.register('AnnotationFactoryManager', (AnnotationFactoryManager as any).$type);

    }

}