/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCategoryYAxisModule } from './igx-category-y-axis-module';
import { IgxCategoryYAxisComponent } from './igx-category-y-axis-component';
import { CategoryYAxis } from './CategoryYAxis';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxCategoryYAxisModule],
    exports: [IgxCategoryYAxisModule],
    entryComponents: [IgxCategoryYAxisComponent]
})
export class IgxCategoryYAxisDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxCategoryYAxisComponent", IgxCategoryYAxisComponent);
        TypeRegistrar.register("CategoryYAxis", (<any>CategoryYAxis).$type);
    }
}
