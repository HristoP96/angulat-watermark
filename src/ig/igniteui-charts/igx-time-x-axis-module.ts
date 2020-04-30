/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IgxTimeAxisBreakModule } from './igx-time-axis-break-module';
import { IgxTimeAxisIntervalModule } from './igx-time-axis-interval-module';
import { IgxTimeAxisLabelFormatModule } from './igx-time-axis-label-format-module';

import { IgxTimeXAxisComponent } from './igx-time-x-axis-component';

@NgModule({
    declarations: [IgxTimeXAxisComponent],
    imports: [CommonModule, IgxTimeAxisBreakModule, IgxTimeAxisIntervalModule, IgxTimeAxisLabelFormatModule],
    exports: [IgxTimeXAxisComponent, IgxTimeAxisBreakModule, IgxTimeAxisIntervalModule, IgxTimeAxisLabelFormatModule],
    entryComponents: []
})
export class IgxTimeXAxisModule {

}
