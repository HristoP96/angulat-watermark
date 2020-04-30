import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { RingSeriesBase as RingSeriesBase_internal } from './RingSeriesBase';
import { IgxRingSeriesBaseComponent as IgxRingSeriesBaseComponent } from './igx-ring-series-base-component';

export class IgxRingSeriesCollection extends IgCollection<IgxRingSeriesBaseComponent, RingSeriesBase_internal> {
    constructor(list?: IgxRingSeriesBaseComponent[]) {
        super();
        if (!(IgxRingSeriesBaseComponent as any).$type) {
            (IgxRingSeriesBaseComponent as any).$type = markType(IgxRingSeriesBaseComponent, "IgxRingSeriesBaseComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxRingSeriesBaseComponent, RingSeriesBase_internal> {
        if (!(IgxRingSeriesBaseComponent as any).$type) {
            (IgxRingSeriesBaseComponent as any).$type = markType(IgxRingSeriesBaseComponent, "IgxRingSeriesBaseComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxRingSeriesBaseComponent, RingSeriesBase_internal>((IgxRingSeriesBaseComponent as any).$type, (RingSeriesBase_internal as any).$type, 0);
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
                ext = IgxRingSeriesBaseComponent._createFromInternal(int);

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
