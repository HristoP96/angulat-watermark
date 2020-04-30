/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxPieChartComponent } from './igx-pie-chart-component';
import { FastItemObjectColumn } from 'igniteui-core/FastItemObjectColumn';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxPieChartCoreModule } from './igx-pie-chart-core-module'



@NgModule({
    declarations: [],
    exports: [IgxPieChartCoreModule
    ],
    imports: [CommonModule, IgxPieChartCoreModule
    ],
    entryComponents: [IgxPieChartComponent]
})
export class IgxPieChartCoreDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxPieChartComponent', IgxPieChartComponent);
                TypeRegistrar.register('FastItemObjectColumn', (FastItemObjectColumn as any).$type);

    }

}