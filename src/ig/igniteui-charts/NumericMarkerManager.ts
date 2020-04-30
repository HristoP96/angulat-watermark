/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MarkerManagerBase } from "./MarkerManagerBase";
import { Base, Point, IList$1, IList$1_$type, IComparable, IComparable_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point_$type, Number_$type, fromEnum, Type, markType, PointUtil } from "igniteui-core/type";
import { CollisionAvoidanceType } from "./CollisionAvoidanceType";
import { Marker } from "./Marker";
import { Size } from "igniteui-core/Size";
import { MarkerSeries } from "./MarkerSeries";
import { IDictionary$2 } from "igniteui-core/IDictionary$2";
import { OwnedPoint } from "./OwnedPoint";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { MarkerManagerBucket } from "./MarkerManagerBucket";
import { ContentControl } from "igniteui-core/ContentControl";
import { DataContext } from "igniteui-core/DataContext";
import { SmartPlacer } from "igniteui-core/SmartPlacer";
import { SmartPlaceableWrapper$1 } from "igniteui-core/SmartPlaceableWrapper$1";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { boxArray$1 } from "igniteui-core/array";
import { Visibility } from "igniteui-core/Visibility";
import { CompareUtil } from "igniteui-core/compareUtil";

/**
 * @hidden 
 */
export class NumericMarkerManager extends MarkerManagerBase {
	static $t: Type = markType(NumericMarkerManager, 'NumericMarkerManager', (<any>MarkerManagerBase).$type);
	constructor(initNumber: number, provideMarkerStrategy: (arg1: any) => Marker, provideItemStrategy: (arg1: number) => any, removeUnusedMarkers: (arg1: IDictionary$2<any, OwnedPoint>) => void, getItemLocationsStrategy: () => Point[], activeMarkerIndexesStrategy: () => IList$1<number>);
	constructor(initNumber: number, provideMarkerStrategy: (arg1: any) => Marker, provideItemStrategy: (arg1: number) => any, removeUnusedMarkers: (arg1: IDictionary$2<any, OwnedPoint>) => void, getItemLocationsStrategy: () => Point[], activeMarkerIndexesStrategy: () => IList$1<number>, getCollisionAvoidanceStrategy: () => CollisionAvoidanceType);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let provideMarkerStrategy: (arg1: any) => Marker = <(arg1: any) => Marker>_rest[0];
				let provideItemStrategy: (arg1: number) => any = <(arg1: number) => any>_rest[1];
				let removeUnusedMarkers: (arg1: IDictionary$2<any, OwnedPoint>) => void = <(arg1: IDictionary$2<any, OwnedPoint>) => void>_rest[2];
				let getItemLocationsStrategy: () => Point[] = <() => Point[]>_rest[3];
				let activeMarkerIndexesStrategy: () => IList$1<number> = <() => IList$1<number>>_rest[4];
				let $outerArgs = <any[]>[ provideMarkerStrategy, provideItemStrategy, removeUnusedMarkers, getItemLocationsStrategy, activeMarkerIndexesStrategy, () => CollisionAvoidanceType.None ];
				{
					let provideMarkerStrategy: (arg1: any) => Marker = <(arg1: any) => Marker>$outerArgs[0];
					let provideItemStrategy: (arg1: number) => any = <(arg1: number) => any>$outerArgs[1];
					let removeUnusedMarkers: (arg1: IDictionary$2<any, OwnedPoint>) => void = <(arg1: IDictionary$2<any, OwnedPoint>) => void>$outerArgs[2];
					let getItemLocationsStrategy: () => Point[] = <() => Point[]>$outerArgs[3];
					let activeMarkerIndexesStrategy: () => IList$1<number> = <() => IList$1<number>>$outerArgs[4];
					let getCollisionAvoidanceStrategy: () => CollisionAvoidanceType = <() => CollisionAvoidanceType>$outerArgs[5];
					super(provideMarkerStrategy, provideItemStrategy, removeUnusedMarkers, getItemLocationsStrategy, activeMarkerIndexesStrategy);
					this._populateColumnValues = false;
					this._getColumnValues = null;
					this._getCollisionAvoidanceStrategy = null;
					this._getMarkerDesiredSize = null;
					this._series = null;
					this.populateColumnValues = false;
					this.getColumnValues = (i: number) => <Point>{ $type: Point_$type, x: 0, y: 0 };
					this.getCollisionAvoidanceStrategy = getCollisionAvoidanceStrategy;
				}
			}
			break;

			case 1:
			{
				let provideMarkerStrategy: (arg1: any) => Marker = <(arg1: any) => Marker>_rest[0];
				let provideItemStrategy: (arg1: number) => any = <(arg1: number) => any>_rest[1];
				let removeUnusedMarkers: (arg1: IDictionary$2<any, OwnedPoint>) => void = <(arg1: IDictionary$2<any, OwnedPoint>) => void>_rest[2];
				let getItemLocationsStrategy: () => Point[] = <() => Point[]>_rest[3];
				let activeMarkerIndexesStrategy: () => IList$1<number> = <() => IList$1<number>>_rest[4];
				let getCollisionAvoidanceStrategy: () => CollisionAvoidanceType = <() => CollisionAvoidanceType>_rest[5];
				super(provideMarkerStrategy, provideItemStrategy, removeUnusedMarkers, getItemLocationsStrategy, activeMarkerIndexesStrategy);
				this._populateColumnValues = false;
				this._getColumnValues = null;
				this._getCollisionAvoidanceStrategy = null;
				this._getMarkerDesiredSize = null;
				this._series = null;
				this.populateColumnValues = false;
				this.getColumnValues = (i: number) => <Point>{ $type: Point_$type, x: 0, y: 0 };
				this.getCollisionAvoidanceStrategy = getCollisionAvoidanceStrategy;
			}
			break;

		}

	}
	private _populateColumnValues: boolean;
	get populateColumnValues(): boolean {
		return this._populateColumnValues;
	}
	set populateColumnValues(value: boolean) {
		this._populateColumnValues = value;
	}
	private _getColumnValues: (arg1: number) => Point;
	get getColumnValues(): (arg1: number) => Point {
		return this._getColumnValues;
	}
	set getColumnValues(value: (arg1: number) => Point) {
		this._getColumnValues = value;
	}
	private _getCollisionAvoidanceStrategy: () => CollisionAvoidanceType;
	private get getCollisionAvoidanceStrategy(): () => CollisionAvoidanceType {
		return this._getCollisionAvoidanceStrategy;
	}
	private set getCollisionAvoidanceStrategy(value: () => CollisionAvoidanceType) {
		this._getCollisionAvoidanceStrategy = value;
	}
	private _getMarkerDesiredSize: (arg1: Marker) => Size;
	get getMarkerDesiredSize(): (arg1: Marker) => Size {
		return this._getMarkerDesiredSize;
	}
	set getMarkerDesiredSize(value: (arg1: Marker) => Size) {
		this._getMarkerDesiredSize = value;
	}
	winnowMarkers(markers: IDictionary$2<any, OwnedPoint>, maximumMarkers: number, windowRect: Rect, viewportRect: Rect, currentResolution: number): void {
		let itemLocations: Point[] = this.getItemLocationsStrategy();
		markers.clear();
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
		this.assignMarkers(markers, itemLocations, markerItems);
	}
	private assignMarkers(markers: IDictionary$2<any, OwnedPoint>, itemLocations: Point[], markerItems: List$1<number>): void {
		for (let i: number = 0; i < markerItems.count; ++i) {
			let index: number = markerItems._inner[i];
			let point: Point = itemLocations[index];
			let item: any = this.provideItemStrategy(index);
			let marker: Marker = this.provideMarkerStrategy(item);
			if (marker.content != null) {
				(<DataContext>marker.content).item = item;
			}
			let mp: OwnedPoint = new OwnedPoint();
			if (this.populateColumnValues) {
				mp.columnValues = this.getColumnValues(index);
			}
			mp.ownerItem = item;
			mp.point = <Point>{ $type: Point_$type, x: point.x, y: point.y };
			if (!markers.containsKey(item)) {
				markers.addItem(item, mp);
			}
		}
	}
	render(markers: IDictionary$2<any, OwnedPoint>, lightweight: boolean): void {
		let keys: IEnumerable$1<any> = markers.keys;
		if (MarkerManagerBase.useDeterministicSelection) {
			let keysList: List$1<any> = new List$1<any>((<any>Base).$type, 1, markers.keys);
			keysList.sort2((o1: any, o2: any) => {
				let point1: OwnedPoint = markers.item(o1);
				let point2: OwnedPoint = markers.item(o2);
				let dist1: number = Math.pow(point1.point.x, 2) + Math.pow(point1.point.y, 2);
				let dist2: number = Math.pow(point2.point.x, 2) + Math.pow(point2.point.y, 2);
				return CompareUtil.compareToObject((<IComparable><any>dist1), dist2);
			});
			keys = keysList;
		}
		let smartPlacer: SmartPlacer = null;
		let wrapper: SmartPlaceableWrapper$1<Marker> = null;
		switch (this.getCollisionAvoidanceStrategy()) {
			case CollisionAvoidanceType.None: break;
			case CollisionAvoidanceType.Omit:
			smartPlacer = ((() => {
				let $ret = new SmartPlacer();
				$ret.overlap = 0.3;
				$ret.fade = 0;
				return $ret;
			})());
			wrapper = new SmartPlaceableWrapper$1<Marker>((<any>Marker).$type);
			wrapper.noWiggle = true;
			break;

			case CollisionAvoidanceType.Fade:
			smartPlacer = ((() => {
				let $ret = new SmartPlacer();
				$ret.overlap = 0.6;
				$ret.fade = 2;
				return $ret;
			})());
			wrapper = new SmartPlaceableWrapper$1<Marker>((<any>Marker).$type);
			wrapper.noWiggle = true;
			break;

			case CollisionAvoidanceType.OmitAndShift:
			smartPlacer = ((() => {
				let $ret = new SmartPlacer();
				$ret.overlap = 0.3;
				$ret.fade = 0;
				return $ret;
			})());
			wrapper = new SmartPlaceableWrapper$1<Marker>((<any>Marker).$type);
			break;

			case CollisionAvoidanceType.FadeAndShift:
			smartPlacer = ((() => {
				let $ret = new SmartPlacer();
				$ret.overlap = 0.6;
				$ret.fade = 2;
				return $ret;
			})());
			wrapper = new SmartPlaceableWrapper$1<Marker>((<any>Marker).$type);
			break;

		}

		for (let key of fromEnum<any>(keys)) {
			let point: OwnedPoint = markers.item(key);
			let marker: Marker = this.provideMarkerStrategy(point.ownerItem);
			if (smartPlacer != null && wrapper != null) {
				wrapper.element = marker;
				wrapper.elementDesiredSize = this.getMarkerDesiredSize(marker);
				wrapper.originalLocation = point.point;
				smartPlacer.place(wrapper);
				if (wrapper.opacity == 0) {
					wrapper.smartPosition = wrapper.smartPosition;
				}
				point.point = wrapper.elementLocationResult;
			} else {
				marker._opacity = 1;
				marker._visibility = Visibility.Visible;
			}
			this.updateMarkerPosition(marker, point, lightweight);
		}
		this.removeUnusedMarkers(markers);
	}
	private updateMarkerPosition(marker: Marker, point: OwnedPoint, lightweight: boolean): void {
		marker.canvasLeft = point.point.x;
		marker.canvasTop = point.point.y;
	}
	private _series: MarkerSeries;
	get series(): MarkerSeries {
		return this._series;
	}
	set series(value: MarkerSeries) {
		this._series = value;
	}
}


