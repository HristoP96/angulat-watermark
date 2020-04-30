import { IgCollection } from 'igniteui-core/IgCollection';
import { markType } from 'igniteui-core/type';
import { SyncableObservableCollection$2 } from 'igniteui-core/SyncableObservableCollection$2';
import { SyncableObservableCollection$1 } from 'igniteui-core/SyncableObservableCollection$1';

import { XamRadialGaugeRange as XamRadialGaugeRange_internal } from './XamRadialGaugeRange';
import { IgxRadialGaugeRangeComponent as IgxRadialGaugeRangeComponent } from './igx-radial-gauge-range-component';

export class IgxRadialGaugeRangeCollection extends IgCollection<IgxRadialGaugeRangeComponent, XamRadialGaugeRange_internal> {
    constructor(list?: IgxRadialGaugeRangeComponent[]) {
        super();
        if (!(IgxRadialGaugeRangeComponent as any).$type) {
            (IgxRadialGaugeRangeComponent as any).$type = markType(IgxRadialGaugeRangeComponent, "IgxRadialGaugeRangeComponent");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    
    protected _createInnerColl(): SyncableObservableCollection$2<IgxRadialGaugeRangeComponent, XamRadialGaugeRange_internal> {
        if (!(IgxRadialGaugeRangeComponent as any).$type) {
            (IgxRadialGaugeRangeComponent as any).$type = markType(IgxRadialGaugeRangeComponent, "IgxRadialGaugeRangeComponent");
        }
        let coll = new SyncableObservableCollection$2<IgxRadialGaugeRangeComponent, XamRadialGaugeRange_internal>((IgxRadialGaugeRangeComponent as any).$type, (XamRadialGaugeRange_internal as any).$type, 0);
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
                ext = new IgxRadialGaugeRangeComponent();

                if (ext) {
                    (ext as any)._implementation = int;
                }
            }
            return ext;
        }
        return coll;
    } 
}
