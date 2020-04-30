/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxChildContentDynamicModule } from 'igniteui-core/igx-child-content-dynamic-module';
import { IgxIconComponent } from './igx-icon-component';
import { Icon } from './Icon';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxIconModule } from './igx-icon-module'



@NgModule({
    declarations: [],
    exports: [IgxChildContentDynamicModule,
IgxIconModule
    ],
    imports: [CommonModule, IgxChildContentDynamicModule,
IgxIconModule
    ],
    entryComponents: [IgxIconComponent]
})
export class IgxIconDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('Icon', Icon);
                TypeRegistrar.registerCons('IgxIconComponent', IgxIconComponent);
        TypeRegistrar.register('Icon', (Icon as any).$type);

    }

}