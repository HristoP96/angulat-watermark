import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { Series as Series_internal } from './Series';
import { IgxSeriesComponent as IgxSeriesComponent } from './igx-series-component';

export class IgxSeriesCollection extends IgCollection<IgxSeriesComponent, Series_internal> {
    constructor(list?: IgxSeriesComponent[]) {
        super();
        if (!(IgxSeriesComponent as any).$type) {
            (IgxSeriesComponent as any).$type = markType(IgxSeriesComponent, "IgxSeriesComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxSeriesComponent, Series_internal> {
        if (!(IgxSeriesComponent as any).$type) {
            (IgxSeriesComponent as any).$type = markType(IgxSeriesComponent, "IgxSeriesComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxSeriesComponent, Series_internal>((IgxSeriesComponent as any).$type, (Series_internal as any).$type, 0);
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
                ext = IgxSeriesComponent._createFromInternal(int);

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
