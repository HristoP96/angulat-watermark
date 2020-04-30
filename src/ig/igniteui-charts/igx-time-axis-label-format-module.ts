import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRegistrar } from 'igniteui-core/type';
import { IgxTimeAxisLabelFormatComponent } from './igx-time-axis-label-format-component';
import { TimeAxisLabelFormat } from './TimeAxisLabelFormat';
import { TimeAxisLabelFormatCollection as TimeAxisLabelFormatCollection_internal } from './TimeAxisLabelFormatCollection';
import { IgxTimeAxisLabelFormatCollection } from './igx-time-axis-label-format-collection';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        IgxTimeAxisLabelFormatComponent
    ],
    exports: [
        IgxTimeAxisLabelFormatComponent
    ],
    entryComponents: [
        IgxTimeAxisLabelFormatComponent
    ]

})
export class IgxTimeAxisLabelFormatModule {
    constructor() {
        TypeRegistrar.registerCons("IgxTimeAxisLabelFormatComponent", IgxTimeAxisLabelFormatComponent);
        TypeRegistrar.registerCons("IgxTimeAxisLabelFormatCollection", IgxTimeAxisLabelFormatCollection);
        TypeRegistrar.register("TimeAxisLabelFormat", (TimeAxisLabelFormat as any).$type);
        TypeRegistrar.register("TimeAxisLabelFormatCollection", (TimeAxisLabelFormatCollection_internal as any).$type);
    }
    
}
