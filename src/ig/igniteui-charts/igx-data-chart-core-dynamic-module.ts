/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxDataChartComponent } from './igx-data-chart-component';
import { XamDataChart } from './XamDataChart';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxDataChartCoreModule } from './igx-data-chart-core-module'



@NgModule({
    declarations: [],
    exports: [IgxDataChartCoreModule
    ],
    imports: [CommonModule, IgxDataChartCoreModule
    ],
    entryComponents: [IgxDataChartComponent]
})
export class IgxDataChartCoreDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxDataChartComponent', IgxDataChartComponent);        TypeRegistrar.registerCons('XamDataChart', XamDataChart);
                TypeRegistrar.register('XamDataChart', (XamDataChart as any).$type);

    }

}