/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxMovingAverageConvergenceDivergenceIndicatorModule } from './igx-moving-average-convergence-divergence-indicator-module';
import { IgxMovingAverageConvergenceDivergenceIndicatorComponent } from './igx-moving-average-convergence-divergence-indicator-component';
import { MovingAverageConvergenceDivergenceIndicator } from './MovingAverageConvergenceDivergenceIndicator';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxMovingAverageConvergenceDivergenceIndicatorModule],
    exports: [IgxMovingAverageConvergenceDivergenceIndicatorModule],
    entryComponents: [IgxMovingAverageConvergenceDivergenceIndicatorComponent]
})
export class IgxMovingAverageConvergenceDivergenceIndicatorDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxMovingAverageConvergenceDivergenceIndicatorComponent", IgxMovingAverageConvergenceDivergenceIndicatorComponent);
        TypeRegistrar.register("MovingAverageConvergenceDivergenceIndicator", (<any>MovingAverageConvergenceDivergenceIndicator).$type);
    }
}
