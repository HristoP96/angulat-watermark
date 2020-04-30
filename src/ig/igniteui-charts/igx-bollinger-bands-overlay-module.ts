/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IgxOverlayProxyModule } from './igx-overlay-proxy-module';

import { IgxBollingerBandsOverlayComponent } from './igx-bollinger-bands-overlay-component';

@NgModule({
    declarations: [IgxBollingerBandsOverlayComponent],
    imports: [CommonModule, IgxOverlayProxyModule],
    exports: [IgxBollingerBandsOverlayComponent, IgxOverlayProxyModule],
    entryComponents: []
})
export class IgxBollingerBandsOverlayModule {

}
