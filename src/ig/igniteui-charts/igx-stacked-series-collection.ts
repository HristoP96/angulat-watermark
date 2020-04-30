import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { StackedFragmentSeries as StackedFragmentSeries_internal } from './StackedFragmentSeries';
import { IgxStackedFragmentSeriesComponent as IgxStackedFragmentSeriesComponent } from './igx-stacked-fragment-series-component';

export class IgxStackedSeriesCollection extends IgCollection<IgxStackedFragmentSeriesComponent, StackedFragmentSeries_internal> {
    constructor(list?: IgxStackedFragmentSeriesComponent[]) {
        super();
        if (!(IgxStackedFragmentSeriesComponent as any).$type) {
            (IgxStackedFragmentSeriesComponent as any).$type = markType(IgxStackedFragmentSeriesComponent, "IgxStackedFragmentSeriesComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxStackedFragmentSeriesComponent, StackedFragmentSeries_internal> {
        if (!(IgxStackedFragmentSeriesComponent as any).$type) {
            (IgxStackedFragmentSeriesComponent as any).$type = markType(IgxStackedFragmentSeriesComponent, "IgxStackedFragmentSeriesComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxStackedFragmentSeriesComponent, StackedFragmentSeries_internal>((IgxStackedFragmentSeriesComponent as any).$type, (StackedFragmentSeries_internal as any).$type, 0);
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
                ext = new IgxStackedFragmentSeriesComponent();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
