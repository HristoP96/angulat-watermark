/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCustomContourValueResolverModule } from './igx-custom-contour-value-resolver-module';
import { IgxCustomContourValueResolverComponent } from './igx-custom-contour-value-resolver-component';
import { CustomContourValueResolver } from './CustomContourValueResolver';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxCustomContourValueResolverModule],
    exports: [IgxCustomContourValueResolverModule],
    entryComponents: [IgxCustomContourValueResolverComponent]
})
export class IgxCustomContourValueResolverDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxCustomContourValueResolverComponent", IgxCustomContourValueResolverComponent);
        TypeRegistrar.register("CustomContourValueResolver", (<any>CustomContourValueResolver).$type);
    }
}
