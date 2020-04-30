/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationFactoryManager } from './AnnotationFactoryManager';
import { IgxCrosshairLayerDynamicModule } from './igx-crosshair-layer-dynamic-module';
import { IgxCategoryToolTipLayerDynamicModule } from './igx-category-tool-tip-layer-dynamic-module';
import { IgxItemToolTipLayerDynamicModule } from './igx-item-tool-tip-layer-dynamic-module';
import { IgxCategoryItemHighlightLayerDynamicModule } from './igx-category-item-highlight-layer-dynamic-module';
import { IgxCategoryHighlightLayerDynamicModule } from './igx-category-highlight-layer-dynamic-module';
import { IgxFinalValueLayerDynamicModule } from './igx-final-value-layer-dynamic-module';
import { IgxCalloutLayerDynamicModule } from './igx-callout-layer-dynamic-module';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxDataChartAnnotationModule } from './igx-data-chart-annotation-module'



@NgModule({
    declarations: [],
    exports: [IgxCrosshairLayerDynamicModule,
IgxCategoryToolTipLayerDynamicModule,
IgxItemToolTipLayerDynamicModule,
IgxCategoryItemHighlightLayerDynamicModule,
IgxCategoryHighlightLayerDynamicModule,
IgxFinalValueLayerDynamicModule,
IgxCalloutLayerDynamicModule,
IgxDataChartAnnotationModule
    ],
    imports: [CommonModule, IgxCrosshairLayerDynamicModule,
IgxCategoryToolTipLayerDynamicModule,
IgxItemToolTipLayerDynamicModule,
IgxCategoryItemHighlightLayerDynamicModule,
IgxCategoryHighlightLayerDynamicModule,
IgxFinalValueLayerDynamicModule,
IgxCalloutLayerDynamicModule,
IgxDataChartAnnotationModule
    ],
    entryComponents: []
})
export class IgxDataChartAnnotationDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('AnnotationFactoryManager', AnnotationFactoryManager);
                TypeRegistrar.register('AnnotationFactoryManager', (AnnotationFactoryManager as any).$type);

    }

}