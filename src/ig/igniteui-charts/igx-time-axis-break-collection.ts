import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { TimeAxisBreak as TimeAxisBreak_internal } from './TimeAxisBreak';
import { IgxTimeAxisBreakComponent as IgxTimeAxisBreakComponent } from './igx-time-axis-break-component';

export class IgxTimeAxisBreakCollection extends IgCollection<IgxTimeAxisBreakComponent, TimeAxisBreak_internal> {
    constructor(list?: IgxTimeAxisBreakComponent[]) {
        super();
        if (!(IgxTimeAxisBreakComponent as any).$type) {
            (IgxTimeAxisBreakComponent as any).$type = markType(IgxTimeAxisBreakComponent, "IgxTimeAxisBreakComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxTimeAxisBreakComponent, TimeAxisBreak_internal> {
        if (!(IgxTimeAxisBreakComponent as any).$type) {
            (IgxTimeAxisBreakComponent as any).$type = markType(IgxTimeAxisBreakComponent, "IgxTimeAxisBreakComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxTimeAxisBreakComponent, TimeAxisBreak_internal>((IgxTimeAxisBreakComponent as any).$type, (TimeAxisBreak_internal as any).$type, 0);
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
                ext = new IgxTimeAxisBreakComponent();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
