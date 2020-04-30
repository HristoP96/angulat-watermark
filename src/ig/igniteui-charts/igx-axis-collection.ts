import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { Axis as Axis_internal } from './Axis';
import { IgxAxisComponent as IgxAxisComponent } from './igx-axis-component';

export class IgxAxisCollection extends IgCollection<IgxAxisComponent, Axis_internal> {
    constructor(list?: IgxAxisComponent[]) {
        super();
        if (!(IgxAxisComponent as any).$type) {
            (IgxAxisComponent as any).$type = markType(IgxAxisComponent, "IgxAxisComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxAxisComponent, Axis_internal> {
        if (!(IgxAxisComponent as any).$type) {
            (IgxAxisComponent as any).$type = markType(IgxAxisComponent, "IgxAxisComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxAxisComponent, Axis_internal>((IgxAxisComponent as any).$type, (Axis_internal as any).$type, 0);
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
                ext = IgxAxisComponent._createFromInternal(int);

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
