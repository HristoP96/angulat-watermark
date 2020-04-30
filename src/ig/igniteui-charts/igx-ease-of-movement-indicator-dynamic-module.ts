/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxEaseOfMovementIndicatorModule } from './igx-ease-of-movement-indicator-module';
import { IgxEaseOfMovementIndicatorComponent } from './igx-ease-of-movement-indicator-component';
import { EaseOfMovementIndicator } from './EaseOfMovementIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxEaseOfMovementIndicatorModule],
    exports: [IgxEaseOfMovementIndicatorModule],
    entryComponents: [IgxEaseOfMovementIndicatorComponent]
})
export class IgxEaseOfMovementIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxEaseOfMovementIndicatorComponent", IgxEaseOfMovementIndicatorComponent);
        TypeRegistrar.register("EaseOfMovementIndicator", (<any>EaseOfMovementIndicator).$type);
    }
}
