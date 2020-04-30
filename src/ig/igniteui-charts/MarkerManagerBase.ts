/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, Number_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { Marker } from "./Marker";
import { IDictionary$2 } from "igniteui-core/IDictionary$2";
import { OwnedPoint } from "./OwnedPoint";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { MarkerManagerBucket } from "./MarkerManagerBucket";
import { ArrayExtension } from "igniteui-core/ArrayExtension";
import { truncate, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export abstract class MarkerManagerBase extends Base {
	static $t: Type = markType(MarkerManagerBase, 'MarkerManagerBase');
	private _getItemLocationsStrategy: () => Point[] = null;
	get getItemLocationsStrategy(): () => Point[] {
		return this._getItemLocationsStrategy;
	}
	set getItemLocationsStrategy(value: () => Point[]) {
		this._getItemLocationsStrategy = value;
	}
	private _provideMarkerStrategy: (arg1: any) => Marker = null;
	get provideMarkerStrategy(): (arg1: any) => Marker {
		return this._provideMarkerStrategy;
	}
	set provideMarkerStrategy(value: (arg1: any) => Marker) {
		this._provideMarkerStrategy = value;
	}
	private _removeUnusedMarkers: (arg1: IDictionary$2<any, OwnedPoint>) => void = null;
	get removeUnusedMarkers(): (arg1: IDictionary$2<any, OwnedPoint>) => void {
		return this._removeUnusedMarkers;
	}
	set removeUnusedMarkers(value: (arg1: IDictionary$2<any, OwnedPoint>) => void) {
		this._removeUnusedMarkers = value;
	}
	private _provideItemStrategy: (arg1: number) => any = null;
	get provideItemStrategy(): (arg1: number) => any {
		return this._provideItemStrategy;
	}
	set provideItemStrategy(value: (arg1: number) => any) {
		this._provideItemStrategy = value;
	}
	private _activeMarkerIndexesStrategy: () => IList$1<number> = null;
	get activeMarkerIndexesStrategy(): () => IList$1<number> {
		return this._activeMarkerIndexesStrategy;
	}
	set activeMarkerIndexesStrategy(value: () => IList$1<number>) {
		this._activeMarkerIndexesStrategy = value;
	}
	private static _useDeterministicSelection: boolean = false;
	static get useDeterministicSelection(): boolean {
		return MarkerManagerBase._useDeterministicSelection;
	}
	static set useDeterministicSelection(value: boolean) {
		MarkerManagerBase._useDeterministicSelection = value;
	}
	constructor(provideMarkerStrategy: (arg1: any) => Marker, provideItemStrategy: (arg1: number) => any, removeUnusedMarkers: (arg1: IDictionary$2<any, OwnedPoint>) => void, getItemLocationsStrategy: () => Point[], activeMarkerIndexesStrategy: () => IList$1<number>) {
		super();
		this.provideMarkerStrategy = provideMarkerStrategy;
		this.provideItemStrategy = provideItemStrategy;
		this.removeUnusedMarkers = removeUnusedMarkers;
		this.getItemLocationsStrategy = getItemLocationsStrategy;
		this.activeMarkerIndexesStrategy = activeMarkerIndexesStrategy;
	}
	abstract winnowMarkers(markers: IDictionary$2<any, OwnedPoint>, maximumMarkers: number, windowRect: Rect, viewportRect: Rect, currentResolution: number): void;
	abstract render(markers: IDictionary$2<any, OwnedPoint>, lightweight: boolean): void;
	protected activeFirstKeys(buckets: Dictionary$2<number, MarkerManagerBucket>, keys: List$1<number>): List$1<number> {
		let first: List$1<number> = new List$1<number>(Number_$type, 0);
		let second: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let key of fromEnum<number>(keys)) {
			if (buckets.item(key).priorityItems.count > 0) {
				first.add(key);
			} else {
				second.add(key);
			}
		}
		let ret: List$1<number> = new List$1<number>(Number_$type, 0);
		ret.addRange(first);
		ret.addRange(second);
		return ret;
	}
	protected selectMarkerItems(numToSelect: number, buckets: Dictionary$2<number, MarkerManagerBucket>, keys: List$1<number>, markerItems: List$1<number>): void {
		while (numToSelect > 0) {
			if (numToSelect < keys.count) {
				if (!MarkerManagerBase.useDeterministicSelection) {
					let ikeys: IList$1<number> = keys;
					ArrayExtension.shuffle$1<number>(Number_$type, ikeys);
				}
				keys = this.activeFirstKeys(buckets, keys);
				let count: number = numToSelect;
				for (let i: number = 0; i < count; i++) {
					let keyIndex: number = i;
					let bucket: MarkerManagerBucket = buckets.item(keys._inner[keyIndex]);
					let wasPriority: boolean;
					let index: number = ((() => { let $ret = bucket.getItem(wasPriority); wasPriority = $ret.p0; return $ret.ret; })());
					markerItems.add(index);
					numToSelect--;
					if (bucket.isEmpty) {
						buckets.removeItem(keys._inner[keyIndex]);
					}
				}
			} else {
				for (let key of fromEnum<number>(keys)) {
					let bucket1: MarkerManagerBucket = buckets.item(key);
					let wasPriority1: boolean;
					let index1: number = ((() => { let $ret = bucket1.getItem(wasPriority1); wasPriority1 = $ret.p0; return $ret.ret; })());
					markerItems.add(index1);
					numToSelect--;
					if (bucket1.isEmpty) {
						buckets.removeItem(key);
					}
				}
				keys = new List$1<number>(Number_$type, 1, buckets.keys);
			}
		}
	}
	protected getVisibleItems(windowRect: Rect, viewportRect: Rect, itemLocations: IList$1<Point>, visibleItems: List$1<number>): void {
		let left: number = viewportRect.left;
		let right: number = viewportRect.right;
		let top: number = viewportRect.top;
		let bottom: number = viewportRect.bottom;
		if (!windowRect.isEmpty && !viewportRect.isEmpty) {
			for (let i: number = 0; i < itemLocations.count; ++i) {
				let x: number = itemLocations.item(i).x;
				if (isNaN_(x)) {
					continue;
				}
				let y: number = itemLocations.item(i).y;
				if (isNaN_(y)) {
					continue;
				}
				if (x < left || x > right) {
					continue;
				}
				if (y < top || y > bottom) {
					continue;
				}
				visibleItems.add(i);
			}
		}
	}
	protected getBuckets(viewportRect: Rect, visibleItems: List$1<number>, resolution: number, itemLocations: IList$1<Point>): Dictionary$2<number, MarkerManagerBucket> {
		let wasActive: boolean[] = <boolean[]>new Array(itemLocations.count);
		for (let index of fromEnum<number>(this.activeMarkerIndexesStrategy())) {
			if (index != -1) {
				wasActive[index] = true;
			}
		}
		let rowSize: number = <number>truncate(Math.floor(viewportRect.width / resolution));
		let buckets: Dictionary$2<number, MarkerManagerBucket> = new Dictionary$2<number, MarkerManagerBucket>(Number_$type, (<any>MarkerManagerBucket).$type, 0);
		for (let index1 of fromEnum<number>(visibleItems)) {
			let xVal: number = itemLocations.item(index1).x;
			let yVal: number = itemLocations.item(index1).y;
			let rowNumber: number = <number>truncate(Math.floor(yVal / resolution));
			let colNumber: number = <number>truncate(Math.floor(xVal / resolution));
			let offset: number = (rowNumber * rowSize) + colNumber;
			let bucket: MarkerManagerBucket;
			if (!((() => { let $ret = buckets.tryGetValue(offset, bucket); bucket = $ret.p1; return $ret.ret; })())) {
				bucket = new MarkerManagerBucket();
				buckets.addItem(offset, bucket);
			}
			if (wasActive[index1]) {
				bucket.priorityItems.add(index1);
			} else {
				bucket.items.add(index1);
			}
		}
		return buckets;
	}
}


