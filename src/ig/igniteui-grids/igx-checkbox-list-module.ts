/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxLiveGridModule } from './igx-live-grid-module';
import { IgxCheckboxListComponent } from './igx-checkbox-list-component';
import { CheckboxList } from './CheckboxList';
import { TypeRegistrar } from 'igniteui-core/type';


@NgModule({
    declarations: [IgxCheckboxListComponent],
    exports: [IgxLiveGridModule,
IgxCheckboxListComponent
    ],
    imports: [CommonModule, IgxLiveGridModule
    ],
    entryComponents: []
})
export class IgxCheckboxListModule {
    
    constructor() {
                TypeRegistrar.registerCons('IgxCheckboxListComponent', IgxCheckboxListComponent);
        TypeRegistrar.register('CheckboxList', (CheckboxList as any).$type);

    }

}