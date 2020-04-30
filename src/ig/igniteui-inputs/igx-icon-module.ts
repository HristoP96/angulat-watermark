/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxChildContentModule } from 'igniteui-core/igx-child-content-module';
import { IgxIconComponent } from './igx-icon-component';
import { Icon } from './Icon';
import { TypeRegistrar } from 'igniteui-core/type';


@NgModule({
    declarations: [IgxIconComponent],
    exports: [IgxChildContentModule,
IgxIconComponent
    ],
    imports: [CommonModule, IgxChildContentModule
    ],
    entryComponents: []
})
export class IgxIconModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxIconComponent', IgxIconComponent);
        TypeRegistrar.register('Icon', (Icon as any).$type);

    }

}