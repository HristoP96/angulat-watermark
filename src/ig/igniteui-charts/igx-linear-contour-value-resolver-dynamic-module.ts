/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxLinearContourValueResolverModule } from './igx-linear-contour-value-resolver-module';
import { IgxLinearContourValueResolverComponent } from './igx-linear-contour-value-resolver-component';
import { LinearContourValueResolver } from './LinearContourValueResolver';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxLinearContourValueResolverModule],
    exports: [IgxLinearContourValueResolverModule],
    entryComponents: [IgxLinearContourValueResolverComponent]
})
export class IgxLinearContourValueResolverDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxLinearContourValueResolverComponent", IgxLinearContourValueResolverComponent);
        TypeRegistrar.register("LinearContourValueResolver", (<any>LinearContourValueResolver).$type);
    }
}
