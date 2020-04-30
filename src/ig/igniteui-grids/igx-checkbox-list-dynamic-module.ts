/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxLiveGridDynamicModule } from './igx-live-grid-dynamic-module';
import { IgxCheckboxListComponent } from './igx-checkbox-list-component';
import { CheckboxList } from './CheckboxList';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxCheckboxListModule } from './igx-checkbox-list-module'



@NgModule({
    declarations: [],
    exports: [IgxLiveGridDynamicModule,
IgxCheckboxListModule
    ],
    imports: [CommonModule, IgxLiveGridDynamicModule,
IgxCheckboxListModule
    ],
    entryComponents: [IgxCheckboxListComponent]
})
export class IgxCheckboxListDynamicModule {
    
    constructor() {
                TypeRegistrar.registerCons('CheckboxList', CheckboxList);
                TypeRegistrar.registerCons('IgxCheckboxListComponent', IgxCheckboxListComponent);
        TypeRegistrar.register('CheckboxList', (CheckboxList as any).$type);

    }

}