import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { GridFilterDialogViewModelGroupingLevel as GridFilterDialogViewModelGroupingLevel_internal } from './GridFilterDialogViewModelGroupingLevel';
import { IgxGridFilterDialogViewModelGroupingLevel as IgxGridFilterDialogViewModelGroupingLevel } from './igx-grid-filter-dialog-view-model-grouping-level';

export class IgxGridFilterDialogViewModelGroupingLevelCollection extends IgCollection<IgxGridFilterDialogViewModelGroupingLevel, GridFilterDialogViewModelGroupingLevel_internal> {
    constructor(list?: IgxGridFilterDialogViewModelGroupingLevel[]) {
        super();
        if (!(IgxGridFilterDialogViewModelGroupingLevel as any).$type) {
            (IgxGridFilterDialogViewModelGroupingLevel as any).$type = markType(IgxGridFilterDialogViewModelGroupingLevel, "IgxGridFilterDialogViewModelGroupingLevel");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxGridFilterDialogViewModelGroupingLevel, GridFilterDialogViewModelGroupingLevel_internal> {
        if (!(IgxGridFilterDialogViewModelGroupingLevel as any).$type) {
            (IgxGridFilterDialogViewModelGroupingLevel as any).$type = markType(IgxGridFilterDialogViewModelGroupingLevel, "IgxGridFilterDialogViewModelGroupingLevel");
        }
        let coll = new SyncableObservableCollection$2<IgxGridFilterDialogViewModelGroupingLevel, GridFilterDialogViewModelGroupingLevel_internal>((IgxGridFilterDialogViewModelGroupingLevel as any).$type, (GridFilterDialogViewModelGroupingLevel_internal as any).$type, 0);
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
                ext = new IgxGridFilterDialogViewModelGroupingLevel();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
