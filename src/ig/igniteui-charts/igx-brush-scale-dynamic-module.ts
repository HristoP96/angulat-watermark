/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxBrushScaleModule } from './igx-brush-scale-module';
import { IgxBrushScaleComponent } from './igx-brush-scale-component';
import { BrushScale } from './BrushScale';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxBrushScaleModule],
    exports: [IgxBrushScaleModule],
    entryComponents: [IgxBrushScaleComponent]
})
export class IgxBrushScaleDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxBrushScaleComponent", IgxBrushScaleComponent);
        TypeRegistrar.register("BrushScale", (<any>BrushScale).$type);
    }
}
