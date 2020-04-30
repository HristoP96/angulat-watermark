/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IgxTooltipContainerComponent } from './igx-tooltip-container-component';
import { IgxTooltipContainerModule } from './igx-tooltip-container-module';
import { TypeRegistrar } from './type';
import { IgxTemplateContentModule } from './igx-template-content-module';

@NgModule({
    declarations: [],
    exports: [IgxTooltipContainerModule, IgxTemplateContentModule],
    imports: [CommonModule, IgxTemplateContentModule, IgxTooltipContainerModule],
    entryComponents: [IgxTooltipContainerComponent]
})
export class IgxTooltipContainerDynamicModule {
    constructor() {
        IgxTooltipContainerComponent.register();
    }
}