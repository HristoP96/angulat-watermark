/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxTextHeaderDynamicModule } from './igx-text-header-dynamic-module';
import { IgxSectionHeaderDynamicModule } from './igx-section-header-dynamic-module';
import { IgxRowSeparatorDynamicModule } from './igx-row-separator-dynamic-module';
import { IgxHeaderSeparatorDynamicModule } from './igx-header-separator-dynamic-module';
import { IgxColumnResizingSeparatorDynamicModule } from './igx-column-resizing-separator-dynamic-module';
import { IgxColumnMovingSeparatorDynamicModule } from './igx-column-moving-separator-dynamic-module';
import { IgxLiveGridComponent } from './igx-live-grid-component';
import { TypeRegistrar } from 'igniteui-core/type';


@NgModule({
    declarations: [IgxLiveGridComponent],
    exports: [IgxTextHeaderDynamicModule,
IgxSectionHeaderDynamicModule,
IgxRowSeparatorDynamicModule,
IgxHeaderSeparatorDynamicModule,
IgxColumnResizingSeparatorDynamicModule,
IgxColumnMovingSeparatorDynamicModule,
IgxLiveGridComponent
    ],
    imports: [CommonModule, IgxTextHeaderDynamicModule,
IgxSectionHeaderDynamicModule,
IgxRowSeparatorDynamicModule,
IgxHeaderSeparatorDynamicModule,
IgxColumnResizingSeparatorDynamicModule,
IgxColumnMovingSeparatorDynamicModule
    ],
    entryComponents: []
})
export class IgxLiveGridCoreModule {
    
    constructor() {
        
    }

}