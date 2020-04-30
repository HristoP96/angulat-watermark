import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { GridFilterDialogViewModelRow as GridFilterDialogViewModelRow_internal } from './GridFilterDialogViewModelRow';
import { IgxGridFilterDialogViewModelRow as IgxGridFilterDialogViewModelRow } from './igx-grid-filter-dialog-view-model-row';

export class IgxGridFilterDialogViewModelRowCollection extends IgCollection<IgxGridFilterDialogViewModelRow, GridFilterDialogViewModelRow_internal> {
    constructor(list?: IgxGridFilterDialogViewModelRow[]) {
        super();
        if (!(IgxGridFilterDialogViewModelRow as any).$type) {
            (IgxGridFilterDialogViewModelRow as any).$type = markType(IgxGridFilterDialogViewModelRow, "IgxGridFilterDialogViewModelRow");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxGridFilterDialogViewModelRow, GridFilterDialogViewModelRow_internal> {
        if (!(IgxGridFilterDialogViewModelRow as any).$type) {
            (IgxGridFilterDialogViewModelRow as any).$type = markType(IgxGridFilterDialogViewModelRow, "IgxGridFilterDialogViewModelRow");
        }
        let coll = new SyncableObservableCollection$2<IgxGridFilterDialogViewModelRow, GridFilterDialogViewModelRow_internal>((IgxGridFilterDialogViewModelRow as any).$type, (GridFilterDialogViewModelRow_internal as any).$type, 0);
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
                ext = new IgxGridFilterDialogViewModelRow();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
