import { Type, Component, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgxRing } from "./igx-ring";
import { IgxRingSeriesBaseComponent } from "./igx-ring-series-base-component";
import { RingSeries } from "./RingSeries";
import { IgxIndexCollection } from "igniteui-charts/igx-index-collection";
import { IndexCollection as IndexCollection_internal } from "igniteui-charts/IndexCollection";
import { Number_$type, Base } from "igniteui-core/type";
import { SyncableObservableCollection$1 } from "igniteui-core/SyncableObservableCollection$1";

export const IgxRingSeriesComponent_PROVIDERS = [{ provide: IgxRingSeriesBaseComponent, useExisting: forwardRef(() => IgxRingSeriesComponent) }];

/**
 * Represents one ring in IgxDoughnutChartComponent series.
*/
@Component({
    selector: 'igx-ring-series',
    template: ``,
    providers: [{ provide: IgxRingSeriesBaseComponent, useExisting: forwardRef(() => IgxRingSeriesComponent) }],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxRingSeriesComponent extends IgxRingSeriesBaseComponent {

    protected createImplementation(): RingSeries {
        return new RingSeries();
    }
    public get i(): RingSeries {
        return this._implementation;
    }
    constructor() {
        super();
    }
    
    private _explodedSlices: IgxIndexCollection = null;

	/**
	 * Gets or sets the collection of exploded slice indices.
	*/
    get explodedSlices(): IgxIndexCollection {
        if (this._explodedSlices === null) {
            let coll = new IgxIndexCollection();
            let innerColl: IndexCollection_internal;
            if (this.ring.i.ringControl.arcs.count == 0) {
                innerColl = new IndexCollection_internal();
            } else {
                innerColl = this.ring.i.ringControl.arcs.item(0).explodedSlices;
            }
            this._explodedSlices = (<any>coll)._fromInner(innerColl);
        }
        return this._explodedSlices;
    }
    @Input()
    set explodedSlices(v: IgxIndexCollection) {
        if (this._explodedSlices !== null) {
            (<any>this._explodedSlices)._setSyncTarget(null);
            this._explodedSlices = null;
        }
        let coll = new IgxIndexCollection();
        this._explodedSlices = (<any>coll)._fromOuter(v);
        let syncColl = new SyncableObservableCollection$1<Number>(Number_$type);
        let innerColl: IndexCollection_internal;
        if (this.ring.i.ringControl.arcs.count == 0) {
            innerColl = new IndexCollection_internal();
        } else {
            innerColl = this.ring.i.ringControl.arcs.item(0).explodedSlices;
        }
        (<any>syncColl)._inner = innerColl;
        syncColl.clear();
        (<any>this._explodedSlices)._setSyncTarget(syncColl);
    }
    private _selectedSlices: IgxIndexCollection = null;

	/**
	 * Gets or sets the collection of selected slice indices.
	*/
    get selectedSlices(): IgxIndexCollection {
        if (this._selectedSlices === null) {
            let coll = new IgxIndexCollection();
            let innerColl: IndexCollection_internal;
            if (this.ring.i.ringControl.arcs.count == 0) {
                innerColl = new IndexCollection_internal();
            } else {
                innerColl = this.ring.i.ringControl.arcs.item(0).selectedSlices;
            }
            this._selectedSlices = (<any>coll)._fromInner(innerColl);
        }
        return this._selectedSlices;
    }
    @Input()
    set selectedSlices(v: IgxIndexCollection) {
        if (this._selectedSlices !== null) {
            (<any>this._selectedSlices)._setSyncTarget(null);
            this._selectedSlices = null;
        }
        let coll = new IgxIndexCollection();
        this._selectedSlices = (<any>coll)._fromOuter(v);
        let syncColl = new SyncableObservableCollection$1<Number>(Number_$type);
        let innerColl: IndexCollection_internal;
        if (this.ring.i.ringControl.arcs.count == 0) {
            innerColl = new IndexCollection_internal();
        } else {
            innerColl = this.ring.i.ringControl.arcs.item(0).selectedSlices;
        }
        (<any>syncColl)._inner = innerColl;
        syncColl.clear();
        (<any>this._selectedSlices)._setSyncTarget(syncColl);
    }

    sychronizeCollections() {
        if (this._explodedSlices) {
            let inner: IndexCollection_internal = (<any>this._explodedSlices)._inner;
            if (inner && inner !== this.ring.i.ringControl.arcs.item(0).explodedSlices) {
                (<any>this._explodedSlices)._inner = this.ring.i.ringControl.arcs.item(0).explodedSlices;
                for (var i = 0; i < inner.count; i++) {
                    this._explodedSlices.add(inner.item(i));
                }
            }
        }
        if (this._selectedSlices) {
            let inner: IndexCollection_internal = (<any>this._selectedSlices)._inner;
            if (inner && inner !== this.ring.i.ringControl.arcs.item(0).selectedSlices) {
                (<any>this._selectedSlices)._inner = this.ring.i.ringControl.arcs.item(0).selectedSlices;
                for (var i = 0; i < inner.count; i++) {
                    this._selectedSlices.add(inner.item(i));
                }
            }
        }
    }

  		/**
	 * Gets reference to the ring data.
	*/
	get ring() : IgxRing {
	                                        if (this.i.ring == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.ring as any).externalObject) {
	                                            let e = new IgxRing();
	                                            (e as any)._implementation = this.i.ring;
	                                            (this.i.ring as any).externalObject = e;
	                                        }
		return (this.i.ring as any).externalObject;
	}
	@Input()
	set ring(v: IgxRing) {
		v == null ? this.i.ring = null : this.i.ring = v.i;
	}

    

	

    

    //@@ZoneRunner
}
