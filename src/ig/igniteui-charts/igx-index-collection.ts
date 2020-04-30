import { IgCollection } from 'igniteui-core/IgCollection';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';
import { markType } from 'igniteui-core/type';


import { Number_$type } from 'igniteui-core/type';


export class IgxIndexCollection extends IgCollection<number, number> {
    constructor(list?: number[]) {
        super();
        
   
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }

    protected _ensureOuter(item: any) {
                        return +item;
                    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<number, number> {
        
 
        let coll = new SyncableObservableCollection$2<number, number>(Number_$type, Number_$type, 0);
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
