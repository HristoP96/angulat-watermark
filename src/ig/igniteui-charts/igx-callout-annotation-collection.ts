import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { CalloutAnnotation as CalloutAnnotation_internal } from './CalloutAnnotation';
import { IgxCalloutAnnotation as IgxCalloutAnnotation } from './igx-callout-annotation';

export class IgxCalloutAnnotationCollection extends IgCollection<IgxCalloutAnnotation, CalloutAnnotation_internal> {
    constructor(list?: IgxCalloutAnnotation[]) {
        super();
        if (!(IgxCalloutAnnotation as any).$type) {
            (IgxCalloutAnnotation as any).$type = markType(IgxCalloutAnnotation, "IgxCalloutAnnotation");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxCalloutAnnotation, CalloutAnnotation_internal> {
        if (!(IgxCalloutAnnotation as any).$type) {
            (IgxCalloutAnnotation as any).$type = markType(IgxCalloutAnnotation, "IgxCalloutAnnotation");
        }
        let coll = new SyncableObservableCollection$2<IgxCalloutAnnotation, CalloutAnnotation_internal>((IgxCalloutAnnotation as any).$type, (CalloutAnnotation_internal as any).$type, 0);
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
                ext = new IgxCalloutAnnotation();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
