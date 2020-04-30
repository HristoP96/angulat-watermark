import { IgCollection } from 'igniteui-core/IgCollection';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';
import { markType } from 'igniteui-core/type';


import { FinancialIndicatorType, FinancialIndicatorType_$type } from './FinancialIndicatorType';
import { ensureEnum } from 'igniteui-core/componentUtil';


export class IgxFinancialIndicatorTypeCollection extends IgCollection<FinancialIndicatorType, FinancialIndicatorType> {
    constructor(list?: FinancialIndicatorType[]) {
        super();
        
   
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }

    protected _ensureOuter(item: any) {
                        return ensureEnum<FinancialIndicatorType>(FinancialIndicatorType_$type, item);
                    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<FinancialIndicatorType, FinancialIndicatorType> {
        
 
        let coll = new SyncableObservableCollection$2<FinancialIndicatorType, FinancialIndicatorType>(FinancialIndicatorType_$type, FinancialIndicatorType_$type, 0);
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
