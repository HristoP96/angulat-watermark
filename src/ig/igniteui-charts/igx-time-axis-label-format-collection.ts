import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { TimeAxisLabelFormat as TimeAxisLabelFormat_internal } from './TimeAxisLabelFormat';
import { IgxTimeAxisLabelFormatComponent as IgxTimeAxisLabelFormatComponent } from './igx-time-axis-label-format-component';

export class IgxTimeAxisLabelFormatCollection extends IgCollection<IgxTimeAxisLabelFormatComponent, TimeAxisLabelFormat_internal> {
    constructor(list?: IgxTimeAxisLabelFormatComponent[]) {
        super();
        if (!(IgxTimeAxisLabelFormatComponent as any).$type) {
            (IgxTimeAxisLabelFormatComponent as any).$type = markType(IgxTimeAxisLabelFormatComponent, "IgxTimeAxisLabelFormatComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxTimeAxisLabelFormatComponent, TimeAxisLabelFormat_internal> {
        if (!(IgxTimeAxisLabelFormatComponent as any).$type) {
            (IgxTimeAxisLabelFormatComponent as any).$type = markType(IgxTimeAxisLabelFormatComponent, "IgxTimeAxisLabelFormatComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxTimeAxisLabelFormatComponent, TimeAxisLabelFormat_internal>((IgxTimeAxisLabelFormatComponent as any).$type, (TimeAxisLabelFormat_internal as any).$type, 0);
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
                ext = new IgxTimeAxisLabelFormatComponent();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
