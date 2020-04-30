import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { CellRange as CellRange_internal } from './CellRange';
import { IgxCellRange as IgxCellRange } from './igx-cell-range';

export class IgxGridSelectedCellRangesCollection extends IgCollection<IgxCellRange, CellRange_internal> {
    constructor(list?: IgxCellRange[]) {
        super();
        if (!(IgxCellRange as any).$type) {
            (IgxCellRange as any).$type = markType(IgxCellRange, "IgxCellRange");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxCellRange, CellRange_internal> {
        if (!(IgxCellRange as any).$type) {
            (IgxCellRange as any).$type = markType(IgxCellRange, "IgxCellRange");
        }
        let coll = new SyncableObservableCollection$2<IgxCellRange, CellRange_internal>((IgxCellRange as any).$type, (CellRange_internal as any).$type, 0);
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
                ext = new IgxCellRange();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
