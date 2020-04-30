import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { GridFilterDialogViewModelGrouping as GridFilterDialogViewModelGrouping_internal } from './GridFilterDialogViewModelGrouping';
import { IgxGridFilterDialogViewModelGrouping as IgxGridFilterDialogViewModelGrouping } from './igx-grid-filter-dialog-view-model-grouping';

export class IgxGridFilterDialogViewModelGroupingLevel extends IgCollection<IgxGridFilterDialogViewModelGrouping, GridFilterDialogViewModelGrouping_internal> {
    constructor(list?: IgxGridFilterDialogViewModelGrouping[]) {
        super();
        if (!(IgxGridFilterDialogViewModelGrouping as any).$type) {
            (IgxGridFilterDialogViewModelGrouping as any).$type = markType(IgxGridFilterDialogViewModelGrouping, "IgxGridFilterDialogViewModelGrouping");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxGridFilterDialogViewModelGrouping, GridFilterDialogViewModelGrouping_internal> {
        if (!(IgxGridFilterDialogViewModelGrouping as any).$type) {
            (IgxGridFilterDialogViewModelGrouping as any).$type = markType(IgxGridFilterDialogViewModelGrouping, "IgxGridFilterDialogViewModelGrouping");
        }
        let coll = new SyncableObservableCollection$2<IgxGridFilterDialogViewModelGrouping, GridFilterDialogViewModelGrouping_internal>((IgxGridFilterDialogViewModelGrouping as any).$type, (GridFilterDialogViewModelGrouping_internal as any).$type, 0);
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
                ext = new IgxGridFilterDialogViewModelGrouping();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
