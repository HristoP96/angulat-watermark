import { IgCollection } from 'igniteui-core/IgCollection';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';
import { markType } from 'igniteui-core/type';


import { IndicatorDisplayType, IndicatorDisplayType_$type } from './IndicatorDisplayType';
import { ensureEnum } from 'igniteui-core/componentUtil';


export class IgxIndicatorDisplayTypeCollection extends IgCollection<IndicatorDisplayType, IndicatorDisplayType> {
    constructor(list?: IndicatorDisplayType[]) {
        super();
        
   
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }

    protected _ensureOuter(item: any) {
                        return ensureEnum<IndicatorDisplayType>(IndicatorDisplayType_$type, item);
                    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IndicatorDisplayType, IndicatorDisplayType> {
        
 
        let coll = new SyncableObservableCollection$2<IndicatorDisplayType, IndicatorDisplayType>(IndicatorDisplayType_$type, IndicatorDisplayType_$type, 0);
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
