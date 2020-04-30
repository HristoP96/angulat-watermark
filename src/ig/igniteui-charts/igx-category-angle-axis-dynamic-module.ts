/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCategoryAngleAxisModule } from './igx-category-angle-axis-module';
import { IgxCategoryAngleAxisComponent } from './igx-category-angle-axis-component';
import { CategoryAngleAxis } from './CategoryAngleAxis';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxCategoryAngleAxisModule],
    exports: [IgxCategoryAngleAxisModule],
    entryComponents: [IgxCategoryAngleAxisComponent]
})
export class IgxCategoryAngleAxisDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxCategoryAngleAxisComponent", IgxCategoryAngleAxisComponent);
        TypeRegistrar.register("CategoryAngleAxis", (<any>CategoryAngleAxis).$type);
    }
}
