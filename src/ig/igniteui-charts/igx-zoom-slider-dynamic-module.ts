/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxZoomSliderComponent } from './igx-zoom-slider-component';
import { ZoomSlider } from './ZoomSlider';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxZoomSliderModule } from './igx-zoom-slider-module'



@NgModule({
    declarations: [],
    exports: [IgxZoomSliderModule
    ],
    imports: [CommonModule, IgxZoomSliderModule
    ],
    entryComponents: [IgxZoomSliderComponent]
})
export class IgxZoomSliderDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('ZoomSlider', ZoomSlider);
                TypeRegistrar.registerCons('IgxZoomSliderComponent', IgxZoomSliderComponent);
        TypeRegistrar.register('ZoomSlider', (ZoomSlider as any).$type);

    }

}