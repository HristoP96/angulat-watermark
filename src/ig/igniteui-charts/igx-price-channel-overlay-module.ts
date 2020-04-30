/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IgxOverlayProxyModule } from './igx-overlay-proxy-module';

import { IgxPriceChannelOverlayComponent } from './igx-price-channel-overlay-component';

@NgModule({
    declarations: [IgxPriceChannelOverlayComponent],
    imports: [CommonModule, IgxOverlayProxyModule],
    exports: [IgxPriceChannelOverlayComponent, IgxOverlayProxyModule],
    entryComponents: []
})
export class IgxPriceChannelOverlayModule {

}
