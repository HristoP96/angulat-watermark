import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { XamLinearGraphRange as XamLinearGraphRange_internal } from './XamLinearGraphRange';
import { IgxLinearGraphRangeComponent as IgxLinearGraphRangeComponent } from './igx-linear-graph-range-component';

export class IgxLinearGraphRangeCollection extends IgCollection<IgxLinearGraphRangeComponent, XamLinearGraphRange_internal> {
    constructor(list?: IgxLinearGraphRangeComponent[]) {
        super();
        if (!(IgxLinearGraphRangeComponent as any).$type) {
            (IgxLinearGraphRangeComponent as any).$type = markType(IgxLinearGraphRangeComponent, "IgxLinearGraphRangeComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxLinearGraphRangeComponent, XamLinearGraphRange_internal> {
        if (!(IgxLinearGraphRangeComponent as any).$type) {
            (IgxLinearGraphRangeComponent as any).$type = markType(IgxLinearGraphRangeComponent, "IgxLinearGraphRangeComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxLinearGraphRangeComponent, XamLinearGraphRange_internal>((IgxLinearGraphRangeComponent as any).$type, (XamLinearGraphRange_internal as any).$type, 0);
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
                ext = new IgxLinearGraphRangeComponent();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
