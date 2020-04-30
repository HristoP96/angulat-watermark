import { IgCollection } from './IgCollection';
import { SyncableObservableCollection$2 } from './SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from './SyncableObservableCollection$1';
import { markType } from './type';


import { Base } from 'igniteui-core/type';


export class IgxObjectCollection extends IgCollection<any, any> {
    constructor(list?: any[]) {
        super();
        
   
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }

    
    
    protected _createInnerColl(): SyncableObservableCollection$2<any, any> {
        
 
        let coll = new SyncableObservableCollection$2<any, any>((Base as any).$type, (Base as any).$type, 0);
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
