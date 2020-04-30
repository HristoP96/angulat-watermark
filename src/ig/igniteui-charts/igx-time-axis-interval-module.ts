import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRegistrar } from 'igniteui-core/type';
import { IgxTimeAxisIntervalComponent } from './igx-time-axis-interval-component';
import { TimeAxisInterval } from './TimeAxisInterval';
import { TimeAxisIntervalCollection as TimeAxisIntervalCollection_internal } from './TimeAxisIntervalCollection';
import { IgxTimeAxisIntervalCollection } from './igx-time-axis-interval-collection';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        IgxTimeAxisIntervalComponent
    ],
    exports: [
        IgxTimeAxisIntervalComponent
    ],
    entryComponents: [
        IgxTimeAxisIntervalComponent
    ]

})
export class IgxTimeAxisIntervalModule {
    constructor() {
        TypeRegistrar.registerCons("IgxTimeAxisIntervalComponent", IgxTimeAxisIntervalComponent);
        TypeRegistrar.registerCons("IgxTimeAxisIntervalCollection", IgxTimeAxisIntervalCollection);
        TypeRegistrar.register("TimeAxisInterval", (TimeAxisInterval as any).$type);
        TypeRegistrar.register("TimeAxisIntervalCollection", (TimeAxisIntervalCollection_internal as any).$type);
    }
    
}
