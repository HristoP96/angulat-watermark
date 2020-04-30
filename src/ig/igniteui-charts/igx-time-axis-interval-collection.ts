import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { TimeAxisInterval as TimeAxisInterval_internal } from './TimeAxisInterval';
import { IgxTimeAxisIntervalComponent as IgxTimeAxisIntervalComponent } from './igx-time-axis-interval-component';

export class IgxTimeAxisIntervalCollection extends IgCollection<IgxTimeAxisIntervalComponent, TimeAxisInterval_internal> {
    constructor(list?: IgxTimeAxisIntervalComponent[]) {
        super();
        if (!(IgxTimeAxisIntervalComponent as any).$type) {
            (IgxTimeAxisIntervalComponent as any).$type = markType(IgxTimeAxisIntervalComponent, "IgxTimeAxisIntervalComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxTimeAxisIntervalComponent, TimeAxisInterval_internal> {
        if (!(IgxTimeAxisIntervalComponent as any).$type) {
            (IgxTimeAxisIntervalComponent as any).$type = markType(IgxTimeAxisIntervalComponent, "IgxTimeAxisIntervalComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxTimeAxisIntervalComponent, TimeAxisInterval_internal>((IgxTimeAxisIntervalComponent as any).$type, (TimeAxisInterval_internal as any).$type, 0);
        coll.compare = (ext, int) => { 
            let comp: any = ext;
            if (comp._implementation) {
                comp = comp._implementation;
            }
            if (comp.equals) {
                return comp.equals(int);
            }
            return comp === int;
        };
        coll.createTo = (ext) => {
            return (ext as any)._implementation;
        }
        coll.createFrom = (int) => {
            let ext = (int as any).externalObject;
            if (!ext) {
                ext = new IgxTimeAxisIntervalComponent();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
