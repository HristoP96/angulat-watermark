import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { PrimaryKeyValue as PrimaryKeyValue_internal } from './PrimaryKeyValue';
import { IgxPrimaryKeyValue as IgxPrimaryKeyValue } from './igx-primary-key-value';

export class IgxGridSelectedKeysCollection extends IgCollection<IgxPrimaryKeyValue, PrimaryKeyValue_internal> {
    constructor(list?: IgxPrimaryKeyValue[]) {
        super();
        if (!(IgxPrimaryKeyValue as any).$type) {
            (IgxPrimaryKeyValue as any).$type = markType(IgxPrimaryKeyValue, "IgxPrimaryKeyValue");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxPrimaryKeyValue, PrimaryKeyValue_internal> {
        if (!(IgxPrimaryKeyValue as any).$type) {
            (IgxPrimaryKeyValue as any).$type = markType(IgxPrimaryKeyValue, "IgxPrimaryKeyValue");
        }
        let coll = new SyncableObservableCollection$2<IgxPrimaryKeyValue, PrimaryKeyValue_internal>((IgxPrimaryKeyValue as any).$type, (PrimaryKeyValue_internal as any).$type, 0);
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
                ext = new IgxPrimaryKeyValue();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
