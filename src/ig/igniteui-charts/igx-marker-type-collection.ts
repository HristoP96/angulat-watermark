import { IgCollection } from 'igniteui-core/IgCollection';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';
import { markType } from 'igniteui-core/type';


import { MarkerType, MarkerType_$type } from './MarkerType';
import { ensureEnum } from 'igniteui-core/componentUtil';


export class IgxMarkerTypeCollection extends IgCollection<MarkerType, MarkerType> {
    constructor(list?: MarkerType[]) {
        super();
        
   
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }

    protected _ensureOuter(item: any) {
                        return ensureEnum<MarkerType>(MarkerType_$type, item);
                    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<MarkerType, MarkerType> {
        
 
        let coll = new SyncableObservableCollection$2<MarkerType, MarkerType>(MarkerType_$type, MarkerType_$type, 0);
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
