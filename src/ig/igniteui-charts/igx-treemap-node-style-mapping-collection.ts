import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { TreemapNodeStyleMapping as TreemapNodeStyleMapping_internal } from './TreemapNodeStyleMapping';
import { IgxTreemapNodeStyleMappingComponent as IgxTreemapNodeStyleMappingComponent } from './igx-treemap-node-style-mapping-component';

export class IgxTreemapNodeStyleMappingCollection extends IgCollection<IgxTreemapNodeStyleMappingComponent, TreemapNodeStyleMapping_internal> {
    constructor(list?: IgxTreemapNodeStyleMappingComponent[]) {
        super();
        if (!(IgxTreemapNodeStyleMappingComponent as any).$type) {
            (IgxTreemapNodeStyleMappingComponent as any).$type = markType(IgxTreemapNodeStyleMappingComponent, "IgxTreemapNodeStyleMappingComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxTreemapNodeStyleMappingComponent, TreemapNodeStyleMapping_internal> {
        if (!(IgxTreemapNodeStyleMappingComponent as any).$type) {
            (IgxTreemapNodeStyleMappingComponent as any).$type = markType(IgxTreemapNodeStyleMappingComponent, "IgxTreemapNodeStyleMappingComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxTreemapNodeStyleMappingComponent, TreemapNodeStyleMapping_internal>((IgxTreemapNodeStyleMappingComponent as any).$type, (TreemapNodeStyleMapping_internal as any).$type, 0);
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
                ext = new IgxTreemapNodeStyleMappingComponent();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
