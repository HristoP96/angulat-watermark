/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxOnBalanceVolumeIndicatorModule } from './igx-on-balance-volume-indicator-module';
import { IgxOnBalanceVolumeIndicatorComponent } from './igx-on-balance-volume-indicator-component';
import { OnBalanceVolumeIndicator } from './OnBalanceVolumeIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxOnBalanceVolumeIndicatorModule],
    exports: [IgxOnBalanceVolumeIndicatorModule],
    entryComponents: [IgxOnBalanceVolumeIndicatorComponent]
})
export class IgxOnBalanceVolumeIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxOnBalanceVolumeIndicatorComponent", IgxOnBalanceVolumeIndicatorComponent);
        TypeRegistrar.register("OnBalanceVolumeIndicator", (<any>OnBalanceVolumeIndicator).$type);
    }
}
