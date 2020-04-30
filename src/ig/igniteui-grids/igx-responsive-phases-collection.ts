import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { ResponsivePhase as ResponsivePhase_internal } from './ResponsivePhase';
import { IgxResponsivePhase as IgxResponsivePhase } from './igx-responsive-phase';

export class IgxResponsivePhasesCollection extends IgCollection<IgxResponsivePhase, ResponsivePhase_internal> {
    constructor(list?: IgxResponsivePhase[]) {
        super();
        if (!(IgxResponsivePhase as any).$type) {
            (IgxResponsivePhase as any).$type = markType(IgxResponsivePhase, "IgxResponsivePhase");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxResponsivePhase, ResponsivePhase_internal> {
        if (!(IgxResponsivePhase as any).$type) {
            (IgxResponsivePhase as any).$type = markType(IgxResponsivePhase, "IgxResponsivePhase");
        }
        let coll = new SyncableObservableCollection$2<IgxResponsivePhase, ResponsivePhase_internal>((IgxResponsivePhase as any).$type, (ResponsivePhase_internal as any).$type, 0);
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
                ext = new IgxResponsivePhase();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
