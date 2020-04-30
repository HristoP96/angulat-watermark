/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxValueBrushScaleModule } from './igx-value-brush-scale-module';
import { IgxValueBrushScaleComponent } from './igx-value-brush-scale-component';
import { ValueBrushScale } from './ValueBrushScale';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxValueBrushScaleModule],
    exports: [IgxValueBrushScaleModule],
    entryComponents: [IgxValueBrushScaleComponent]
})
export class IgxValueBrushScaleDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxValueBrushScaleComponent", IgxValueBrushScaleComponent);
        TypeRegistrar.register("ValueBrushScale", (<any>ValueBrushScale).$type);
    }
}
