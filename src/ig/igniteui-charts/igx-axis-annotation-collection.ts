import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { IAxisAnnotation, IAxisAnnotation_$type } from './IAxisAnnotation';
import { IgxAxisAnnotation } from './igx-axis-annotation';

export class IgxAxisAnnotationCollection extends IgCollection<IgxAxisAnnotation, IAxisAnnotation> {
    constructor(list?: IgxAxisAnnotation[]) {
        super();
        if (!(<any>IgxAxisAnnotation).$type) {
            (<any>IgxAxisAnnotation).$type = markType(IgxAxisAnnotation, "AxisAnnotation");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }

    protected _createInnerColl(): SyncableObservableCollection$2<IgxAxisAnnotation, IAxisAnnotation> {
        if (!(<any>IgxAxisAnnotation).$type) {
            (<any>IgxAxisAnnotation).$type = markType(IgxAxisAnnotation, "AxisAnnotation");
        }
        let coll = new SyncableObservableCollection$2<IgxAxisAnnotation, IAxisAnnotation>((<any>IgxAxisAnnotation).$type, IAxisAnnotation_$type, 0);
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
            return (<any>ext)._implementation;
        }
        coll.createFrom = (int) => {
            let ext = (<any>int).externalObject;
            if (!ext) {
                ext = new IgxAxisAnnotation();
                (<any>ext)._implementation = int;
            }
            return ext;
        }
        return coll;
    }
}