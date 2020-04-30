/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { IHorizontalAnchoredCategorySeriesInteractionManager, IHorizontalAnchoredCategorySeriesInteractionManager_$type } from "./IHorizontalAnchoredCategorySeriesInteractionManager";
import { Series } from "./Series";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Axis } from "./Axis";
import { SeriesView } from "./SeriesView";
import { ArrayExtension } from "igniteui-core/ArrayExtension";
import { NumericAxisBase } from "./NumericAxisBase";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class HorizontalAnchoredCategorySeriesInteractionManager extends Base implements IHorizontalAnchoredCategorySeriesInteractionManager {
	static $t: Type = markType(HorizontalAnchoredCategorySeriesInteractionManager, 'HorizontalAnchoredCategorySeriesInteractionManager', (<any>Base).$type, [IHorizontalAnchoredCategorySeriesInteractionManager_$type]);
	getHighStrokeSegments(target: Series, buckets: List$1<number[]>, bucketSize: number, firstBucket: number, position: Point): Point[][] {
		let matching = target.getMatchingBuckets(target.getCategoryAxisIfPresent(), buckets, bucketSize, firstBucket, target.toWorldPosition(position), true);
		if (matching == null) {
			return null;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let ret: Point[][] = <Point[][]>new Array(1);
		let seg: Point[] = <Point[]>new Array(2);
		seg[0] = <Point>{ $type: Point_$type, x: prevBucketValue[0], y: prevBucketValue[2] };
		seg[1] = <Point>{ $type: Point_$type, x: nextBucketValue[0], y: nextBucketValue[2] };
		ret[0] = seg;
		return ret;
	}
	getLowStrokeSegments(target: Series, buckets: List$1<number[]>, bucketSize: number, firstBucket: number, position: Point): Point[][] {
		let matching = target.getMatchingBuckets(target.getCategoryAxisIfPresent(), buckets, bucketSize, firstBucket, target.toWorldPosition(position), true);
		if (matching == null) {
			return null;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let ret: Point[][] = <Point[][]>new Array(1);
		let seg: Point[] = <Point[]>new Array(2);
		seg[0] = <Point>{ $type: Point_$type, x: prevBucketValue[0], y: prevBucketValue[1] };
		seg[1] = <Point>{ $type: Point_$type, x: nextBucketValue[0], y: nextBucketValue[1] };
		ret[0] = seg;
		return ret;
	}
	getSeriesValueMarkerBoundingBox(target: Series, markers: List$1<Point>, world: Point, getMarkerBoundingBox: (arg1: number) => Rect): Rect {
		let pos = target.fromWorldPosition(world);
		let index: number = -1;
		let categoryAxis = target.getCategoryAxisIfPresent();
		let isInverted: boolean = categoryAxis.isInverted;
		let maxPosition = target.view.viewport.right * 2;
		if (isInverted) {
			index = ArrayExtension.binarySearch$11<Point>(Point_$type, markers, (item: Point) => (maxPosition - pos.x) < (maxPosition - item.x) ? -1 : ((maxPosition - pos.x) > (maxPosition - item.x) ? 1 : 0));
		} else {
			index = ArrayExtension.binarySearch$11<Point>(Point_$type, markers, (item: Point) => pos.x < item.x ? -1 : (pos.x > item.x ? 1 : 0));
		}
		if (index < 0) {
			index = ~index;
		}
		if (index < 0) {
			index = 0;
		}
		if (index > markers.count - 1) {
			index = markers.count - 1;
		}
		let prevIndex: number = index;
		let nextIndex: number = index;
		if (prevIndex > 0) {
			prevIndex--;
		}
		if (nextIndex < markers.count - 1) {
			nextIndex++;
		}
		let prevX = markers._inner[prevIndex].x;
		let currX = markers._inner[index].x;
		let nextX = markers._inner[nextIndex].x;
		let distPrev = Math.abs(prevX - pos.x);
		let distCurr = Math.abs(currX - pos.x);
		let distNext = Math.abs(nextX - pos.x);
		let prevBox = getMarkerBoundingBox(prevIndex);
		let currBox = getMarkerBoundingBox(index);
		let nextBox = getMarkerBoundingBox(nextIndex);
		let prevContains = prevBox.containsPoint(pos);
		let currContains = currBox.containsPoint(pos);
		let nextContains = nextBox.containsPoint(pos);
		if (distCurr <= distPrev && distCurr <= distNext) {
			if (!isInverted && nextContains) {
				return nextBox;
			}
			if (isInverted && prevContains) {
				return prevBox;
			}
			return currBox;
		}
		if (distPrev <= distCurr && distPrev <= distNext) {
			if (!isInverted && currContains) {
				return currBox;
			}
			return getMarkerBoundingBox(prevIndex);
		}
		if (distNext <= distCurr && distNext <= distPrev) {
			if (isInverted && currContains) {
				return currBox;
			}
			return getMarkerBoundingBox(nextIndex);
		}
		return Rect.empty;
	}
	testAreaOver(target: Series, valueAxis: NumericAxisBase, position: Point, snapPosition: Point, isFinger: boolean): boolean {
		if (isNaN_(snapPosition.x) || isNaN_(snapPosition.y)) {
			return false;
		}
		let referencePosition = 0;
		if (valueAxis != null) {
			referencePosition = valueAxis.scaleValue(valueAxis.referenceValue);
		}
		if ((position.y >= referencePosition && position.y <= snapPosition.y) || (position.y <= referencePosition && position.y >= snapPosition.y)) {
			return true;
		}
		return false;
	}
}


