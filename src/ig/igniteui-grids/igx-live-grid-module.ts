/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxNumericColumnDynamicModule } from './igx-numeric-column-dynamic-module';
import { IgxDateTimeColumnDynamicModule } from './igx-date-time-column-dynamic-module';
import { IgxImageColumnDynamicModule } from './igx-image-column-dynamic-module';
import { IgxTemplateColumnDynamicModule } from './igx-template-column-dynamic-module';
import { IgxTextColumnDynamicModule } from './igx-text-column-dynamic-module';
import { IgxTemplateHeaderDynamicModule } from './igx-template-header-dynamic-module';
import { IgxLiveGridCoreModule } from './igx-live-grid-core-module';


@NgModule({
    declarations: [],
    exports: [IgxNumericColumnDynamicModule,
IgxDateTimeColumnDynamicModule,
IgxImageColumnDynamicModule,
IgxTemplateColumnDynamicModule,
IgxTextColumnDynamicModule,
IgxTemplateHeaderDynamicModule,
IgxLiveGridCoreModule
    ],
    imports: [CommonModule, IgxNumericColumnDynamicModule,
IgxDateTimeColumnDynamicModule,
IgxImageColumnDynamicModule,
IgxTemplateColumnDynamicModule,
IgxTextColumnDynamicModule,
IgxTemplateHeaderDynamicModule,
IgxLiveGridCoreModule
    ],
    entryComponents: []
})
export class IgxLiveGridModule {
    
}