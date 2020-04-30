/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxCheckboxListDynamicModule } from './igx-checkbox-list-dynamic-module';
import { IgxColumnHidingComponent } from './igx-column-hiding-component';
import { ColumnHiding } from './ColumnHiding';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxColumnHidingModule } from './igx-column-hiding-module'



@NgModule({
    declarations: [],
    exports: [IgxCheckboxListDynamicModule,
IgxColumnHidingModule
    ],
    imports: [CommonModule, IgxCheckboxListDynamicModule,
IgxColumnHidingModule
    ],
    entryComponents: [IgxColumnHidingComponent]
})
export class IgxColumnHidingDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('ColumnHiding', ColumnHiding);
                TypeRegistrar.registerCons('IgxColumnHidingComponent', IgxColumnHidingComponent);
        TypeRegistrar.register('ColumnHiding', (ColumnHiding as any).$type);

    }

}