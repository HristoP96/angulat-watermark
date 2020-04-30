import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { ResponsiveState as ResponsiveState_internal } from './ResponsiveState';
import { IgxResponsiveState as IgxResponsiveState } from './igx-responsive-state';

export class IgxResponsiveStatesCollection extends IgCollection<IgxResponsiveState, ResponsiveState_internal> {
    constructor(list?: IgxResponsiveState[]) {
        super();
        if (!(IgxResponsiveState as any).$type) {
            (IgxResponsiveState as any).$type = markType(IgxResponsiveState, "IgxResponsiveState");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxResponsiveState, ResponsiveState_internal> {
        if (!(IgxResponsiveState as any).$type) {
            (IgxResponsiveState as any).$type = markType(IgxResponsiveState, "IgxResponsiveState");
        }
        let coll = new SyncableObservableCollection$2<IgxResponsiveState, ResponsiveState_internal>((IgxResponsiveState as any).$type, (ResponsiveState_internal as any).$type, 0);
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
                ext = new IgxResponsiveState();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
