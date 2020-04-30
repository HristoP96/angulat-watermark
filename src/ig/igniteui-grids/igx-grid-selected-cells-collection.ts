import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { CellKey as CellKey_internal } from './CellKey';
import { IgxCellKey as IgxCellKey } from './igx-cell-key';

export class IgxGridSelectedCellsCollection extends IgCollection<IgxCellKey, CellKey_internal> {
    constructor(list?: IgxCellKey[]) {
        super();
        if (!(IgxCellKey as any).$type) {
            (IgxCellKey as any).$type = markType(IgxCellKey, "IgxCellKey");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxCellKey, CellKey_internal> {
        if (!(IgxCellKey as any).$type) {
            (IgxCellKey as any).$type = markType(IgxCellKey, "IgxCellKey");
        }
        let coll = new SyncableObservableCollection$2<IgxCellKey, CellKey_internal>((IgxCellKey as any).$type, (CellKey_internal as any).$type, 0);
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
                ext = new IgxCellKey();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
