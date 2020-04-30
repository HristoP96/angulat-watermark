/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTrendLineManagerFactory } from './CategoryTrendLineManagerFactory';
import { CategoryTrendLineManager } from './CategoryTrendLineManager';
import { SortingTrendLineManager } from './SortingTrendLineManager';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxDataChartCategoryTrendLineModule } from './igx-data-chart-category-trend-line-module'



@NgModule({
    declarations: [],
    exports: [IgxDataChartCategoryTrendLineModule
    ],
    imports: [CommonModule, IgxDataChartCategoryTrendLineModule
    ],
    entryComponents: []
})
export class IgxDataChartCategoryTrendLineDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('CategoryTrendLineManagerFactory', CategoryTrendLineManagerFactory);        TypeRegistrar.registerCons('CategoryTrendLineManager', CategoryTrendLineManager);        TypeRegistrar.registerCons('SortingTrendLineManager', SortingTrendLineManager);
                TypeRegistrar.register('CategoryTrendLineManagerFactory', (CategoryTrendLineManagerFactory as any).$type);
        TypeRegistrar.register('CategoryTrendLineManager', (CategoryTrendLineManager as any).$type);
        TypeRegistrar.register('SortingTrendLineManager', (SortingTrendLineManager as any).$type);

    }

}