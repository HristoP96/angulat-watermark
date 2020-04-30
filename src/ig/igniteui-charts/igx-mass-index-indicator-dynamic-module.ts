/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxMassIndexIndicatorModule } from './igx-mass-index-indicator-module';
import { IgxMassIndexIndicatorComponent } from './igx-mass-index-indicator-component';
import { MassIndexIndicator } from './MassIndexIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxMassIndexIndicatorModule],
    exports: [IgxMassIndexIndicatorModule],
    entryComponents: [IgxMassIndexIndicatorComponent]
})
export class IgxMassIndexIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxMassIndexIndicatorComponent", IgxMassIndexIndicatorComponent);
        TypeRegistrar.register("MassIndexIndicator", (<any>MassIndexIndicator).$type);
    }
}
