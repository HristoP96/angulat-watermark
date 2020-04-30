/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RingSeriesBase } from "./RingSeriesBase";
import { RingCollection } from "./RingCollection";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Type, Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point, IEnumerable, IEnumerable_$type, String_$type, typeCast, fromEnum, Number_$type, fromEn, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { Ring } from "./Ring";
import { ArcItem } from "./ArcItem";
import { List$1 } from "igniteui-core/List$1";
import { RingSeriesBaseView } from "./RingSeriesBaseView";
import { XamDoughnutChart } from "./XamDoughnutChart";
import { Size } from "igniteui-core/Size";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Arc } from "./Arc";
import { Pool$1 } from "igniteui-core/Pool$1";
import { PieChartBase } from "./PieChartBase";
import { IgQueue$1 } from "./IgQueue$1";
import { SliceItem } from "./SliceItem";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { Brush } from "igniteui-core/Brush";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class HierarchicalRingSeries extends RingSeriesBase {
	static $t: Type = markType(HierarchicalRingSeries, 'HierarchicalRingSeries', (<any>RingSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>HierarchicalRingSeries).$type;
	}
	private _rings: RingCollection = null;
	get rings(): RingCollection {
		return this._rings;
	}
	set rings(value: RingCollection) {
		this._rings = value;
	}
	static readonly childrenMemberPathPropertyName: string = "ChildrenMemberPath";
	static readonly childrenMemberPathProperty: DependencyProperty = DependencyProperty.register(HierarchicalRingSeries.childrenMemberPathPropertyName, String_$type, (<any>HierarchicalRingSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<HierarchicalRingSeries>((<any>HierarchicalRingSeries).$type, o)).raisePropertyChanged(HierarchicalRingSeries.childrenMemberPathPropertyName, e.oldValue, e.newValue)));
	get childrenMemberPath(): string {
		return <string>this.getValue(HierarchicalRingSeries.childrenMemberPathProperty);
	}
	set childrenMemberPath(value: string) {
		this.setValue(HierarchicalRingSeries.childrenMemberPathProperty, value);
	}
	analyzeRings(): RingCollection {
		if (this.itemsSource == null) {
			return new RingCollection();
		}
		this.rings = this.traverseTree(this.itemsSource);
		return this.rings;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case RingSeriesBase.startAnglePropertyName:
			let oldAngle: number = <number>oldValue;
			let newAngle: number = <number>newValue;
			let delta: number = newAngle - oldAngle;
			if (this.rings != null && this.rings.count > 0) {
				for (let index: number = 0; index < this.rings.count; index++) {
					let ring: Ring = this.rings._inner[index];
					for (let arc of fromEnum<ArcItem>(ring.arcItems)) {
						arc.startAngle = arc.startAngle + delta;
					}
				}
			}
			break;

			case RingSeriesBase.brushesPropertyName:
			this.prepareBrushes();
			break;

			case HierarchicalRingSeries.childrenMemberPathPropertyName:
			this.prepareData();
			break;

		}

		if (this.rings != null && this.view.isReady()) {
			let resized: boolean = false;
			for (let ring1 of fromEnum<Ring>(this.rings)) {
				ring1.prepareArcs();
				if (ring1.renderArcs()) {
					resized = true;
				}
			}
			if (resized) {
				for (let ring2 of fromEnum<Ring>(this.rings)) {
					ring2.ringSeries.view.onSizeChanged();
				}
			}
		}
	}
	prepareData(): void {
		if (this.chart != null) {
			this.chart.prepareRingCollection();
			this.chart.renderChart();
		}
	}
	prepareBrushes(): void {
		if (this.rings != null) {
			for (let ring of fromEnum<Ring>(this.rings)) {
				for (let arcItem of fromEnum<ArcItem>(ring.arcItems)) {
					this.setBrush(arcItem);
				}
			}
		}
	}
	renderSeries(): void {
		if (this.rings != null && this.rings.count > 0) {
			let outerRing: Ring = this.rings._inner[this.rings.count - 1];
			this.width = outerRing.controlSize.width;
			this.height = outerRing.controlSize.height;
			this.view.positionSeries(outerRing.center.x, outerRing.center.y);
		}
	}
	renderLegendItems(): void {
		for (let i: number = 0; i < this.rings.count; i++) {
			for (let arc of fromEnum<Arc>(this.rings._inner[i].ringControl.arcs.active)) {
				arc.renderLegendItems();
			}
		}
	}
	private reflectItemSource(obj_: any): IEnumerable {
		let memberPath_ = this.childrenMemberPath;
		if (<boolean>(obj_[memberPath_] !== undefined)) {
			return <IEnumerable><any>(obj_[memberPath_]);
		}
		return null;
	}
	private traverseTree(root: IEnumerable): RingCollection {
		let parents: IgQueue$1<ArcItem> = new IgQueue$1<ArcItem>((<any>ArcItem).$type);
		let nodes: IgQueue$1<ArcItem> = new IgQueue$1<ArcItem>((<any>ArcItem).$type);
		let rootInfo: ArcItem = ((() => {
			let $ret = new ArcItem();
			$ret.levelDepth = 0;
			$ret.itemSource = root;
			$ret.valueMemberPath = this.valueMemberPath;
			$ret.othersCategoryType = this.othersCategoryType;
			$ret.othersCategoryThreshold = this.othersCategoryThreshold;
			return $ret;
		})());
		rootInfo.prepareSliceItems(this.startAngle);
		let parentInfo: ArcItem = ((() => {
			let $ret = new ArcItem();
			$ret.levelDepth = -1;
			$ret.itemSource = null;
			return $ret;
		})());
		nodes.enqueue(rootInfo);
		parents.enqueue(parentInfo);
		let rings: RingCollection = new RingCollection();
		let currentRing: Ring = null;
		let prevLevelDepth: number = -1;
		while (nodes.count > 0) {
			let current: ArcItem;
			let $ret = nodes.dequeue(current);
			current = $ret.p0;
			let parent: ArcItem;
			let $ret1 = parents.dequeue(parent);
			parent = $ret1.p0;
			if (current == null) {
				continue;
			}
			let index: number = 0;
			for (let child of fromEnum<SliceItem>(current.sliceItems)) {
				let childItemSource: IEnumerable = this.reflectItemSource(child.data);
				if ((childItemSource != null && this.isEmpty(childItemSource) == false) || child.isOther) {
					let childInfo: ArcItem = ((() => {
						let $ret = new ArcItem();
						$ret.levelDepth = current.levelDepth + 1;
						$ret.itemSource = child.isOther ? ((() => {
							let $ret = new List$1<number>(Number_$type, 0);
							$ret.add(0);
							return $ret;
						})()) : childItemSource;
						$ret.index = index;
						$ret.parent = current;
						$ret.valueMemberPath = this.valueMemberPath;
						$ret.parentSlice = child;
						return $ret;
					})());
					childInfo.prepareSliceItems(this.startAngle);
					nodes.enqueue(childInfo);
					parents.enqueue(current);
				}
				index++;
			}
			let newRing: Ring = this.doSomething(current, parent, prevLevelDepth, currentRing);
			if (newRing != currentRing) {
				rings.add(newRing);
				currentRing = newRing;
			}
			prevLevelDepth = current.levelDepth;
		}
		return rings;
	}
	private doSomething(current: ArcItem, parent: ArcItem, prevLevelDepth: number, currentRing: Ring): Ring {
		current.startAngle = current.parentSlice == null ? this.startAngle : current.parentSlice.startAngle;
		current.endAngle = current.parentSlice == null ? 360 : current.parentSlice.endAngle;
		this.setBrush(current);
		if (current.levelDepth != prevLevelDepth) {
			let newRing: Ring = ((() => {
				let $ret = new Ring();
				$ret.ringSeries = this;
				return $ret;
			})());
			newRing.arcItems.add(current);
			current.ring = newRing;
			return newRing;
		}
		current.ring = currentRing;
		currentRing.arcItems.add(current);
		return currentRing;
	}
	private isEmpty(en: IEnumerable): boolean {
		for (let c of fromEn<any>(en)) {
			return false;
		}
		return true;
	}
	private setBrush(arcItem: ArcItem): void {
		if (arcItem.parent == null) {
			arcItem.brushes = this.brushes;
		} else if (arcItem.parent.levelDepth == 0) {
			arcItem.brushes = new BrushCollection();
			if (arcItem.parent.brushes != null) {
				arcItem.brushes.add(arcItem.parent.brushes.item(arcItem.index % arcItem.parent.brushes.count));
			}
		} else {
			arcItem.brushes = arcItem.parent.brushes;
		}
	}
}


