import { IgCollection } from 'igniteui-core/IgCollection';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';
import { markType } from 'igniteui-core/type';


import { FinancialChartRangeSelectorOption, FinancialChartRangeSelectorOption_$type } from './FinancialChartRangeSelectorOption';
import { ensureEnum } from 'igniteui-core/componentUtil';


export class IgxFinancialChartRangeSelectorOptionCollection extends IgCollection<FinancialChartRangeSelectorOption, FinancialChartRangeSelectorOption> {
    constructor(list?: FinancialChartRangeSelectorOption[]) {
        super();
        
   
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }

    protected _ensureOuter(item: any) {
                        return ensureEnum<FinancialChartRangeSelectorOption>(FinancialChartRangeSelectorOption_$type, item);
                    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<FinancialChartRangeSelectorOption, FinancialChartRangeSelectorOption> {
        
 
        let coll = new SyncableObservableCollection$2<FinancialChartRangeSelectorOption, FinancialChartRangeSelectorOption>(FinancialChartRangeSelectorOption_$type, FinancialChartRangeSelectorOption_$type, 0);
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
