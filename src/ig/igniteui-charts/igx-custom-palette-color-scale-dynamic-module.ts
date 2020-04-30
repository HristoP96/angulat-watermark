/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCustomPaletteColorScaleModule } from './igx-custom-palette-color-scale-module';
import { IgxCustomPaletteColorScaleComponent } from './igx-custom-palette-color-scale-component';
import { CustomPaletteColorScale } from './CustomPaletteColorScale';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxCustomPaletteColorScaleModule],
    exports: [IgxCustomPaletteColorScaleModule],
    entryComponents: [IgxCustomPaletteColorScaleComponent]
})
export class IgxCustomPaletteColorScaleDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxCustomPaletteColorScaleComponent", IgxCustomPaletteColorScaleComponent);
        TypeRegistrar.register("CustomPaletteColorScale", (<any>CustomPaletteColorScale).$type);
    }
}
