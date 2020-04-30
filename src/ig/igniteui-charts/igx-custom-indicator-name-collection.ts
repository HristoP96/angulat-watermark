import { IgCollection } from 'igniteui-core/IgCollection';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';
import { markType } from 'igniteui-core/type';


import { String_$type } from 'igniteui-core/type';


export class IgxCustomIndicatorNameCollection extends IgCollection<string, string> {
    constructor(list?: string[]) {
        super();
        
   
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }

    
    
    protected _createInnerColl(): SyncableObservableCollection$2<string, string> {
        
 
        let coll = new SyncableObservableCollection$2<string, string>(String_$type, String_$type, 0);
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
