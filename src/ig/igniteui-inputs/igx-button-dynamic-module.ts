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
import { IgxButtonComponent } from './igx-button-component';
import { Button } from './Button';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxButtonModule } from './igx-button-module'



@NgModule({
    declarations: [],
    exports: [IgxRippleDynamicModule,
IgxChildContentDynamicModule,
IgxButtonModule
    ],
    imports: [CommonModule, IgxRippleDynamicModule,
IgxChildContentDynamicModule,
IgxButtonModule
    ],
    entryComponents: [IgxButtonComponent]
})
export class IgxButtonDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('Button', Button);
                TypeRegistrar.registerCons('IgxButtonComponent', IgxButtonComponent);
        TypeRegistrar.register('Button', (Button as any).$type);

    }

}