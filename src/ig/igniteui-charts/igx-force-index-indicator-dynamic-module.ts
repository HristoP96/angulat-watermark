/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxForceIndexIndicatorModule } from './igx-force-index-indicator-module';
import { IgxForceIndexIndicatorComponent } from './igx-force-index-indicator-component';
import { ForceIndexIndicator } from './ForceIndexIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxForceIndexIndicatorModule],
    exports: [IgxForceIndexIndicatorModule],
    entryComponents: [IgxForceIndexIndicatorComponent]
})
export class IgxForceIndexIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxForceIndexIndicatorComponent", IgxForceIndexIndicatorComponent);
        TypeRegistrar.register("ForceIndexIndicator", (<any>ForceIndexIndicator).$type);
    }
}
