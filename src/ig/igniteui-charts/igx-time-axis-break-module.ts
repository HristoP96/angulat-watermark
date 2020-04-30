import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRegistrar } from 'igniteui-core/type';
import { IgxTimeAxisBreakComponent } from './igx-time-axis-break-component';
import { TimeAxisBreak } from './TimeAxisBreak';
import { TimeAxisBreakCollection as TimeAxisBreakCollection_internal } from './TimeAxisBreakCollection';
import { IgxTimeAxisBreakCollection } from './igx-time-axis-break-collection';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        IgxTimeAxisBreakComponent
    ],
    exports: [
        IgxTimeAxisBreakComponent
    ],
    entryComponents: [
        IgxTimeAxisBreakComponent
    ]

})
export class IgxTimeAxisBreakModule {
    constructor() {
        TypeRegistrar.registerCons("IgxTimeAxisBreakComponent", IgxTimeAxisBreakComponent);
        TypeRegistrar.registerCons("IgxTimeAxisBreakCollection", IgxTimeAxisBreakCollection);
        TypeRegistrar.register("TimeAxisBreak", (TimeAxisBreak as any).$type);
        TypeRegistrar.register("TimeAxisBreakCollection", (TimeAxisBreakCollection_internal as any).$type);
    }
    
}
