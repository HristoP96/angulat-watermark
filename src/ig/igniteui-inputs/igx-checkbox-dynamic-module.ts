/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRippleDynamicModule } from './igx-ripple-dynamic-module';
import { IgxChildContentDynamicModule } from 'igniteui-core/igx-child-content-dynamic-module';
import { IgxCheckboxComponent } from './igx-checkbox-component';
import { Checkbox } from './Checkbox';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxCheckboxModule } from './igx-checkbox-module'



@NgModule({
    declarations: [],
    exports: [IgxRippleDynamicModule,
IgxChildContentDynamicModule,
IgxCheckboxModule
    ],
    imports: [CommonModule, IgxRippleDynamicModule,
IgxChildContentDynamicModule,
IgxCheckboxModule
    ],
    entryComponents: [IgxCheckboxComponent]
})
export class IgxCheckboxDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('Checkbox', Checkbox);
                TypeRegistrar.registerCons('IgxCheckboxComponent', IgxCheckboxComponent);
        TypeRegistrar.register('Checkbox', (Checkbox as any).$type);

    }

}