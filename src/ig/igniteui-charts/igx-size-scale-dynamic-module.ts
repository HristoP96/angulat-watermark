/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxSizeScaleModule } from './igx-size-scale-module';
import { IgxSizeScaleComponent } from './igx-size-scale-component';
import { SizeScale } from './SizeScale';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxSizeScaleModule],
    exports: [IgxSizeScaleModule],
    entryComponents: [IgxSizeScaleComponent]
})
export class IgxSizeScaleDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxSizeScaleComponent", IgxSizeScaleComponent);
        TypeRegistrar.register("SizeScale", (<any>SizeScale).$type);
    }
}
