import { IgCollection } from './IgCollection';
import { SyncableObservableCollection$2 } from './SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from './SyncableObservableCollection$1';
import { markType } from './type';


import { DataSeries } from './DataSeries';


export class IgxDataSeriesCollection extends IgCollection<DataSeries, DataSeries> {
    constructor(list?: DataSeries[]) {
        super();
        if (!(DataSeries as any).$type) {
            (DataSeries as any).$type = markType(DataSeries, "DataSeries");
        }  
   
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }

    
    
    protected _createInnerColl(): SyncableObservableCollection$2<DataSeries, DataSeries> {
        if (!(DataSeries as any).$type) {
            (DataSeries as any).$type = markType(DataSeries, "DataSeries");
        }  
 
        let coll = new SyncableObservableCollection$2<DataSeries, DataSeries>((DataSeries as any).$type, (DataSeries as any).$type, 0);
        coll.compare = (ext, int) => { 
            let comp: any = ext;
            if (comp.equals) {
                return comp.equals(int);
            }
            return comp === int;
        };
        coll.createTo = (ext) => {
            return ext;
        }
        coll.createFrom = (int) => {
            return int;
        }
        return coll;
    } 
}
