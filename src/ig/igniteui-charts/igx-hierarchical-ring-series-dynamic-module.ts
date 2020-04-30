/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxHierarchicalRingSeriesModule } from './igx-hierarchical-ring-series-module';
import { IgxHierarchicalRingSeriesComponent } from './igx-hierarchical-ring-series-component';
import { HierarchicalRingSeries } from './HierarchicalRingSeries';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxHierarchicalRingSeriesModule],
    exports: [IgxHierarchicalRingSeriesModule],
    entryComponents: [IgxHierarchicalRingSeriesComponent]
})
export class IgxHierarchicalRingSeriesDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxHierarchicalRingSeriesComponent", IgxHierarchicalRingSeriesComponent);
        TypeRegistrar.register("HierarchicalRingSeries", (<any>HierarchicalRingSeries).$type);
    }
}
