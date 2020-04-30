/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RingSeriesBase } from "./RingSeriesBase";
import { Ring } from "./Ring";
import { ArcItem } from "./ArcItem";
import { List$1 } from "igniteui-core/List$1";
import { Type, Base, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Arc } from "./Arc";
import { PieChartBase } from "./PieChartBase";
import { RingSeriesBaseView } from "./RingSeriesBaseView";
import { RingCollection } from "./RingCollection";
import { SliceItem } from "./SliceItem";
import { XamDoughnutChart } from "./XamDoughnutChart";
import { Size } from "igniteui-core/Size";
import { FrameworkElement } from "igniteui-core/FrameworkElement";

/**
 * @hidden 
 */
export class RingSeries extends RingSeriesBase {
	static $t: Type = markType(RingSeries, 'RingSeries', (<any>RingSeriesBase).$type);
	constructor() {
		super();
		this.ring = ((() => {
			let $ret = new Ring();
			$ret.ringSeries = this;
			$ret.clearContent = false;
			return $ret;
		})());
		let arcItem: ArcItem = ((() => {
			let $ret = new ArcItem();
			$ret.startAngle = this.startAngle;
			$ret.ring = this.ring;
			$ret.valueMemberPath = this.valueMemberPath;
			$ret.othersCategoryType = this.othersCategoryType;
			$ret.othersCategoryThreshold = this.othersCategoryThreshold;
			return $ret;
		})());
		this.ring.arcItems.add(arcItem);
		this.defaultStyleKey = (<any>RingSeries).$type;
	}
	private _ring: Ring = null;
	get ring(): Ring {
		return this._ring;
	}
	set ring(value: Ring) {
		this._ring = value;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (propertyName == RingSeriesBase.formatLabelPropertyName) {
			for (let i: number = 0; i < this.ring.ringControl.arcs.count; i++) {
				this.ring.ringControl.arcs.item(i).formatLabel = <(obj: any) => string>newValue;
			}
		}
		if (propertyName == RingSeriesBase.formatLegendLabelPropertyName) {
			for (let i1: number = 0; i1 < this.ring.ringControl.arcs.count; i1++) {
				this.ring.ringControl.arcs.item(i1).formatLegendLabel = <(obj: any) => string>newValue;
			}
		}
		if (propertyName == RingSeriesBase.legendLabelMemberPathPropertyName) {
			for (let i2: number = 0; i2 < this.ring.ringControl.arcs.count; i2++) {
				this.ring.ringControl.arcs.item(i2).legendLabelMemberPath = this.legendLabelMemberPath;
			}
		}
		if (propertyName == RingSeriesBase.brushesPropertyName) {
			this.prepareBrushes();
		}
		if (propertyName == RingSeriesBase.startAnglePropertyName) {
			if (this.ring.arcItems != null && this.ring.arcItems.count > 0) {
				this.ring.arcItems._inner[0].startAngle = this.startAngle;
			}
		}
		if (propertyName == RingSeriesBase.valueMemberPathPropertyName) {
			if (this.ring.arcItems != null && this.ring.arcItems.count > 0) {
				this.ring.arcItems._inner[0].valueMemberPath = this.valueMemberPath;
				this.prepareData();
			}
		}
		if (this.ring != null && this.view.isReady()) {
			this.ring.prepareArcs();
			if (this.ring.renderArcs()) {
				this.ring.ringSeries.view.onSizeChanged();
			}
		}
	}
	analyzeRings(): RingCollection {
		let coll: RingCollection = new RingCollection();
		if (this.ring.arcItems._inner[0].sliceItems.count > 0) {
			coll.add(this.ring);
		}
		return coll;
	}
	prepareData(): void {
		if (this.ring != null) {
			this.ring.arcItems._inner[0].itemSource = this.itemsSource;
			this.ring.arcItems._inner[0].prepareSliceItems(this.startAngle);
			if (this.chart != null) {
				this.chart.prepareRingCollection();
				this.chart.renderChart();
			}
		}
	}
	prepareBrushes(): void {
		if (this.ring != null) {
			this.ring.arcItems._inner[0].brushes = this.brushes;
		}
	}
	renderSeries(): void {
		if (this.ring != null) {
			this.width = this.ring.controlSize.width;
			this.height = this.ring.controlSize.height;
			this.view.positionSeries(this.ring.center.x, this.ring.center.y);
		}
	}
	renderLegendItems(): void {
		if (this.ring != null) {
			for (let arc of fromEnum<Arc>(this.ring.ringControl.arcs.active)) {
				arc.renderLegendItems();
			}
		}
	}
	notifyInsertItem(index: number, newItem: any): void {
		super.notifyInsertItem(index, newItem);
		if (this.ring != null) {
			this.ring.notifyInsertItem(this.itemsSource, index, newItem);
		}
	}
	notifyClearItems(): void {
		super.notifyClearItems();
		if (this.ring != null) {
			this.ring.notifyClearItems(this.itemsSource);
		}
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		super.notifyRemoveItem(index, oldItem);
		if (this.ring != null) {
			this.ring.notifyRemoveItem(this.itemsSource, index, oldItem);
		}
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		super.notifySetItem(index, oldItem, newItem);
		if (this.ring != null) {
			this.ring.notifySetItem(this.itemsSource, index, oldItem, newItem);
		}
	}
}


