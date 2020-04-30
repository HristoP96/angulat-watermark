/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCalloutLayerModule } from './igx-callout-layer-module';
import { IgxCalloutLayerComponent } from './igx-callout-layer-component';
import { CalloutLayer } from './CalloutLayer';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxCalloutLayerModule],
    exports: [IgxCalloutLayerModule],
    entryComponents: [IgxCalloutLayerComponent]
})
export class IgxCalloutLayerDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxCalloutLayerComponent", IgxCalloutLayerComponent);
        TypeRegistrar.register("CalloutLayer", (<any>CalloutLayer).$type);
    }
}
