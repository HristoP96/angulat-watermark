/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IgxSizeScaleModule } from './igx-size-scale-module';
import { IgxBrushScaleModule } from './igx-brush-scale-module';
import { IgxValueBrushScaleModule } from './igx-value-brush-scale-module';
import { IgxCustomPaletteBrushScaleModule } from './igx-custom-palette-brush-scale-module';

import { IgxBubbleSeriesComponent } from './igx-bubble-series-component';

@NgModule({
    declarations: [IgxBubbleSeriesComponent],
    imports: [CommonModule, IgxSizeScaleModule, IgxBrushScaleModule, IgxValueBrushScaleModule, IgxCustomPaletteBrushScaleModule],
    exports: [IgxBubbleSeriesComponent, IgxSizeScaleModule, IgxBrushScaleModule, IgxValueBrushScaleModule, IgxCustomPaletteBrushScaleModule],
    entryComponents: []
})
export class IgxBubbleSeriesModule {

}
