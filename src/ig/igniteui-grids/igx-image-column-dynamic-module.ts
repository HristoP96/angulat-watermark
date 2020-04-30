/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxImageColumnModule } from './igx-image-column-module';
import { IgxImageColumnComponent } from './igx-image-column-component';
import { ImageColumn } from './ImageColumn';
import { TypeRegistrar } from 'igniteui-core/type';

@NgModule({
    declarations: [],
    imports: [CommonModule, IgxImageColumnModule],
    exports: [IgxImageColumnModule],
    entryComponents: [IgxImageColumnComponent]
})
export class IgxImageColumnDynamicModule {
    constructor() {
        TypeRegistrar.registerCons("IgxImageColumnComponent", IgxImageColumnComponent);
        TypeRegistrar.register("ImageColumn", (<any>ImageColumn).$type);
    }
}
