/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCategoryDateTimeXAxisModule } from './igx-category-date-time-x-axis-module';
import { IgxCategoryDateTimeXAxisComponent } from './igx-category-date-time-x-axis-component';
import { CategoryDateTimeXAxis } from './CategoryDateTimeXAxis';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxCategoryDateTimeXAxisModule],
    exports: [IgxCategoryDateTimeXAxisModule],
    entryComponents: [IgxCategoryDateTimeXAxisComponent]
})
export class IgxCategoryDateTimeXAxisDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxCategoryDateTimeXAxisComponent", IgxCategoryDateTimeXAxisComponent);
        TypeRegistrar.register("CategoryDateTimeXAxis", (<any>CategoryDateTimeXAxis).$type);
    }
}
