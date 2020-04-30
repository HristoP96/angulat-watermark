/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MarkerManagerBase } from "./MarkerManagerBase";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { List$1 } from "igniteui-core/List$1";
import { Marker } from "./Marker";
import { Base, Point, IList$1, IList$1_$type, IComparable, IComparable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Number_$type, Point_$type, fromEnum, Type, markType, PointUtil } from "igniteui-core/type";
import { IDictionary$2 } from "igniteui-core/IDictionary$2";
import { OwnedPoint } from "./OwnedPoint";
import { Rect } from "igniteui-core/Rect";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { MarkerManagerBucket } from "./MarkerManagerBucket";
import { ContentControl } from "igniteui-core/ContentControl";
import { DataContext } from "igniteui-core/DataContext";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { boxArray$1 } from "igniteui-core/array";
import { CompareUtil } from "igniteui-core/compareUtil";

/**
 * @hidden 
 */
export class BubbleMarkerManager extends MarkerManagerBase {
	static $t: Type = markType(BubbleMarkerManager, 'BubbleMarkerManager', (<any>MarkerManagerBase).$type);
	private _radiusColumn: IFastItemColumn$1<number> = null;
	get radiusColumn(): IFastItemColumn$1<number> {
		return this._radiusColumn;
	}
	set radiusColumn(value: IFastItemColumn$1<number>) {
		this._radiusColumn = value;
	}
	private _actualRadiusColumn: List$1<number> = null;
	get actualRadiusColumn(): List$1<number> {
		return this._actualRadiusColumn;
	}
	set actualRadiusColumn(value: List$1<number>) {
		this._actualRadiusColumn = value;
	}
	private _actualMarkers: List$1<Marker> = null;
	get actualMarkers(): List$1<Marker> {
		return this._actualMarkers;
	}
	set actualMarkers(value: List$1<Marker>) {
		this._actualMarkers = value;
	}
	constructor(provideMarkerStrategy: (arg1: any) => Marker, provideItemStrategy: (arg1: number) => any, removeUnusedMarkers: (arg1: IDictionary$2<any, OwnedPoint>) => void, getItemLocationsStrategy: () => Point[], activeMarkerIndexesStrategy: () => IList$1<number>) {
		super(provideMarkerStrategy, provideItemStrategy, removeUnusedMarkers, getItemLocationsStrategy, activeMarkerIndexesStrategy);
		this.actualRadiusColumn = new List$1<number>(Number_$type, 0);
		this.actualMarkers = new List$1<Marker>((<any>Marker).$type, 0);
	}
	winnowMarkers(markers: IDictionary$2<any, OwnedPoint>, maximumMarkers: number, windowRect: Rect, viewportRect: Rect, currentResolution: number): void {
		let itemLocations: Point[] = this.getItemLocationsStrategy();
		markers.clear();
		this.actualRadiusColumn.clear();
		this.actualMarkers.clear();
		let visibleItems: List$1<number> = new List$1<number>(Number_$type, 0);
		maximumMarkers = Math.max(0, maximumMarkers);
		let markerItems: List$1<number> = null;
		this.getVisibleItems(windowRect, viewportRect, boxArray$1<Point>(itemLocations), visibleItems);
		if (maximumMarkers >= visibleItems.count) {
			markerItems = visibleItems;
		} else {
			markerItems = new List$1<number>(Number_$type, 0);
			let resolution: number = Math.max(8, currentResolution);
			let buckets: Dictionary$2<number, MarkerManagerBucket> = this.getBuckets(viewportRect, visibleItems, resolution, boxArray$1<Point>(itemLocations));
			let keys: List$1<number> = new List$1<number>(Number_$type, 1, buckets.keys);
			if (MarkerManagerBase.useDeterministicSelection) {
				keys.sort();
			}
			this.selectMarkerItems(maximumMarkers, buckets, keys, markerItems);
		}
		for (let i: number = 0; i < markerItems.count; ++i) {
			let x: number = itemLocations[markerItems._inner[i]].x;
			let y: number = itemLocations[markerItems._inner[i]].y;
			let radius: number = this.radiusColumn.item(markerItems._inner[i]);
			this.actualRadiusColumn.add(radius);
			let marker: Marker = this.provideMarkerStrategy(this.provideItemStrategy(markerItems._inner[i]));
			(<DataContext>marker.content).item = this.provideItemStrategy(markerItems._inner[i]);
			let mp: OwnedPoint = new OwnedPoint();
			mp.ownerItem = (<DataContext>marker.content).item;
			mp.point = <Point>{ $type: Point_$type, x: x, y: y };
			if (!markers.containsKey(mp.ownerItem)) {
				markers.addItem(mp.ownerItem, mp);
				this.actualMarkers.add(marker);
			}
		}
	}
	render(markers: IDictionary$2<any, OwnedPoint>, lightweight: boolean): void {
		let keys: List$1<any> = new List$1<any>((<any>Base).$type, 1, markers.keys);
		if (MarkerManagerBase.useDeterministicSelection) {
			keys.sort2((o1: any, o2: any) => {
				let point1: OwnedPoint = markers.item(o1);
				let point2: OwnedPoint = markers.item(o2);
				let dist1: number = Math.pow(point1.point.x, 2) + Math.pow(point1.point.y, 2);
				let dist2: number = Math.pow(point2.point.x, 2) + Math.pow(point2.point.y, 2);
				return CompareUtil.compareToObject((<IComparable><any>dist1), dist2);
			});
		}
		for (let key of fromEnum<any>(keys)) {
			let point: OwnedPoint = markers.item(key);
			let marker: Marker = this.provideMarkerStrategy(point.ownerItem);
			marker.canvasZIndex = keys.indexOf1(key);
			marker.canvasLeft = point.point.x;
			marker.canvasTop = point.point.y;
		}
		this.removeUnusedMarkers(markers);
	}
}


