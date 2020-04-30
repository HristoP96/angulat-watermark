import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { ColumnExchanger as ColumnExchanger_internal } from './ColumnExchanger';
import { IgxColumnExchanger as IgxColumnExchanger } from './igx-column-exchanger';

export class IgxColumnExchangersCollection extends IgCollection<IgxColumnExchanger, ColumnExchanger_internal> {
    constructor(list?: IgxColumnExchanger[]) {
        super();
        if (!(IgxColumnExchanger as any).$type) {
            (IgxColumnExchanger as any).$type = markType(IgxColumnExchanger, "IgxColumnExchanger");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxColumnExchanger, ColumnExchanger_internal> {
        if (!(IgxColumnExchanger as any).$type) {
            (IgxColumnExchanger as any).$type = markType(IgxColumnExchanger, "IgxColumnExchanger");
        }
        let coll = new SyncableObservableCollection$2<IgxColumnExchanger, ColumnExchanger_internal>((IgxColumnExchanger as any).$type, (ColumnExchanger_internal as any).$type, 0);
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
                ext = new IgxColumnExchanger();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
