import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { Column as Column_internal } from './Column';
import { IgxColumnComponent as IgxColumnComponent } from './igx-column-component';

export class IgxGridColumnCollection extends IgCollection<IgxColumnComponent, Column_internal> {
    constructor(list?: IgxColumnComponent[]) {
        super();
        if (!(IgxColumnComponent as any).$type) {
            (IgxColumnComponent as any).$type = markType(IgxColumnComponent, "IgxColumnComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxColumnComponent, Column_internal> {
        if (!(IgxColumnComponent as any).$type) {
            (IgxColumnComponent as any).$type = markType(IgxColumnComponent, "IgxColumnComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxColumnComponent, Column_internal>((IgxColumnComponent as any).$type, (Column_internal as any).$type, 0);
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
                ext = IgxColumnComponent._createFromInternal(int);

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
