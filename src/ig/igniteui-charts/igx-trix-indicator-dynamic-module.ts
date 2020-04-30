/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxTRIXIndicatorModule } from './igx-trix-indicator-module';
import { IgxTRIXIndicatorComponent } from './igx-trix-indicator-component';
import { TRIXIndicator } from './TRIXIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxTRIXIndicatorModule],
    exports: [IgxTRIXIndicatorModule],
    entryComponents: [IgxTRIXIndicatorComponent]
})
export class IgxTRIXIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxTRIXIndicatorComponent", IgxTRIXIndicatorComponent);
        TypeRegistrar.register("TRIXIndicator", (<any>TRIXIndicator).$type);
    }
}
