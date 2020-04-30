import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { ColumnPropertySetter as ColumnPropertySetter_internal } from './ColumnPropertySetter';
import { IgxColumnPropertySetter as IgxColumnPropertySetter } from './igx-column-property-setter';

export class IgxColumnPropertySettersCollection extends IgCollection<IgxColumnPropertySetter, ColumnPropertySetter_internal> {
    constructor(list?: IgxColumnPropertySetter[]) {
        super();
        if (!(IgxColumnPropertySetter as any).$type) {
            (IgxColumnPropertySetter as any).$type = markType(IgxColumnPropertySetter, "IgxColumnPropertySetter");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxColumnPropertySetter, ColumnPropertySetter_internal> {
        if (!(IgxColumnPropertySetter as any).$type) {
            (IgxColumnPropertySetter as any).$type = markType(IgxColumnPropertySetter, "IgxColumnPropertySetter");
        }
        let coll = new SyncableObservableCollection$2<IgxColumnPropertySetter, ColumnPropertySetter_internal>((IgxColumnPropertySetter as any).$type, (ColumnPropertySetter_internal as any).$type, 0);
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
                ext = new IgxColumnPropertySetter();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
