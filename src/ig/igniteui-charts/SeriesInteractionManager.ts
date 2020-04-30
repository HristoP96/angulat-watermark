/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point_$type, toNullable, String_$type, fromEnum, Type, markType, PointUtil } from "igniteui-core/type";
import { ISeriesInteractionManager, ISeriesInteractionManager_$type } from "./ISeriesInteractionManager";
import { HighlightingInfo } from "./HighlightingInfo";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { SeriesView } from "./SeriesView";
import { Series } from "./Series";
import { Axis } from "./Axis";
import { ScalerParams } from "./ScalerParams";
import { ISortingAxis } from "./ISortingAxis";
import { List$1 } from "igniteui-core/List$1";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Rect } from "igniteui-core/Rect";
import { GeometryUtil } from "igniteui-core/GeometryUtil";
import { PolygonUtil } from "igniteui-core/PolygonUtil";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { RectUtil } from "igniteui-core/RectUtil";
import { SeriesViewer } from "./SeriesViewer";
import { IHighlightingManager } from "./IHighlightingManager";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { Brush } from "igniteui-core/Brush";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { ContentInfo } from "./ContentInfo";
import { DataContext } from "igniteui-core/DataContext";
import { SeriesViewerView } from "./SeriesViewerView";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { Color } from "igniteui-core/Color";
import { SeriesViewerViewManager } from "./SeriesViewerViewManager";
import { CanvasRenderScheduler } from "igniteui-core/CanvasRenderScheduler";
import { truncate, isNaN_ } from "igniteui-core/number";
import { boxArray$1 } from "igniteui-core/array";
import { CategoryMode } from "./CategoryMode";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class SeriesInteractionManager extends Base implements ISeriesInteractionManager {
	static $t: Type = markType(SeriesInteractionManager, 'SeriesInteractionManager', (<any>Base).$type, [ISeriesInteractionManager_$type]);
	getDistanceToIndexHelper(target: Series, world: Point, index: number, axis: Axis, scalerParams: ScalerParams, offset: number, count: number, getExactUnsortedIndex: (arg1: Point) => number): number {
		if (axis == null) {
			return Number.POSITIVE_INFINITY;
		}
		if (index < 0 || index > count - 1) {
			return Number.POSITIVE_INFINITY;
		}
		let exactItemIndex: number;
		let prevVal: number = NaN;
		let nextVal: number = NaN;
		let indVal: number = NaN;
		let inter: number = NaN;
		if (axis.isSorting) {
			let sorting = <ISortingAxis><any>axis;
			exactItemIndex = getExactUnsortedIndex(world);
			let prevItem = <number>truncate(Math.floor(exactItemIndex));
			let nextItem = <number>truncate(Math.ceil(exactItemIndex));
			inter = exactItemIndex - <number>prevItem;
			if (prevItem >= 0 && prevItem < count) {
				let unscaled = sorting.getUnscaledValueAt(sorting.sortedIndices._inner[prevItem]);
				prevVal = axis.getScaledValue(unscaled, scalerParams) + offset;
			} else {
				prevVal = NaN;
			}
			if (nextItem >= 0 && nextItem < count) {
				let unscaled1 = sorting.getUnscaledValueAt(sorting.sortedIndices._inner[nextItem]);
				nextVal = axis.getScaledValue(unscaled1, scalerParams) + offset;
			} else {
				nextVal = NaN;
			}
			if (isNaN_(prevVal) && !isNaN_(nextVal)) {
				prevVal = nextVal;
			}
			if (isNaN_(nextVal) && !isNaN_(prevVal)) {
				nextVal = prevVal;
			}
			if (index >= 0 && index < count) {
				let unscaled2 = sorting.getUnscaledValueAt(sorting.sortedIndices._inner[index]);
				indVal = axis.getScaledValue(unscaled2, scalerParams) + offset;
			}
		} else {
			exactItemIndex = target.getExactItemIndex(world);
			let prevItem1 = <number>truncate(Math.floor(exactItemIndex));
			let nextItem1 = <number>truncate(Math.ceil(exactItemIndex));
			inter = exactItemIndex - <number>prevItem1;
			if (prevItem1 >= 0 && prevItem1 < count) {
				prevVal = axis.getScaledValue(prevItem1, scalerParams) + offset;
			} else {
				prevVal = NaN;
			}
			if (nextItem1 >= 0 && nextItem1 < count) {
				nextVal = axis.getScaledValue(nextItem1, scalerParams) + offset;
			} else {
				nextVal = NaN;
			}
			if (isNaN_(prevVal) && !isNaN_(nextVal)) {
				prevVal = nextVal;
			}
			if (isNaN_(nextVal) && !isNaN_(prevVal)) {
				nextVal = prevVal;
			}
			if (index >= 0 && index < count) {
				indVal = axis.getScaledValue(index, scalerParams) + offset;
			}
		}
		let worldVal = prevVal + inter * (nextVal - prevVal);
		return Math.abs(indVal - worldVal);
	}
	getInterpolatedSeriesValue(target: Series, p: number, column: IList$1<number>, prevItem: number, nextItem: number, unsortedPrevItem: number, unsortedNextItem: number, offset: number, isSorting: boolean): number {
		let prevValue: number = NaN;
		if (prevItem >= 0 && prevItem < column.count) {
			prevValue = column.item(prevItem);
		}
		let nextValue: number = NaN;
		if (nextItem >= 0 && nextItem < column.count) {
			nextValue = column.item(nextItem);
		}
		if (unsortedNextItem == 0) {
			return nextValue;
		}
		if (unsortedPrevItem == column.count - 1) {
			return prevValue;
		}
		if (isNaN_(nextValue) && offset != 0 && p <= 0.5 && !isSorting) {
			return prevValue;
		}
		if (isNaN_(prevValue) && offset != 0 && p >= 0.5 && !isSorting) {
			return nextValue;
		}
		return prevValue * (1 - p) + nextValue * p;
	}
	getMatchingBuckets(target: Series, categoryAxis: CategoryAxisBase, buckets: List$1<number[]>, bucketSize: number, firstBucket: number, world: Point, skipUnknowns: boolean): number[][] {
		if (categoryAxis == null) {
			return null;
		}
		let prevBucketIndex: number = -1;
		let nextBucketIndex: number = -1;
		if (categoryAxis.isSorting) {
			let pos = target.fromWorldPosition(world);
			let index: number = -1;
			let isInverted: boolean = categoryAxis.isInverted;
			let maxPosition = target.view.viewport.right * 2;
			index = SeriesInteractionManager.bucketBinarySearch(buckets, pos, isInverted, maxPosition);
			if (index < 0) {
				index = ~index;
				index--;
			}
			if (index < 0) {
				index = 0;
			}
			if (index > buckets.count - 1) {
				index = buckets.count - 1;
			}
			let prevIndex: number = index;
			let nextIndex: number = index + 1;
			if (nextIndex > buckets.count - 1) {
				nextIndex = buckets.count - 1;
			}
			prevBucketIndex = prevIndex;
			nextBucketIndex = nextIndex;
		} else {
			let previousIndex = target.getPreviousOrExactIndex(world, skipUnknowns);
			let nextIndex1 = target.getNextOrExactIndex(world, skipUnknowns);
			let prevBucket = <number>truncate(Math.floor(previousIndex / <number>bucketSize));
			let nextBucket = <number>truncate(Math.floor(nextIndex1 / <number>bucketSize));
			prevBucketIndex = prevBucket - firstBucket;
			nextBucketIndex = nextBucket - firstBucket;
			if (nextBucketIndex == prevBucketIndex) {
				nextBucketIndex++;
			}
		}
		if (prevBucketIndex < 0) {
			prevBucketIndex = 0;
		}
		if (prevBucketIndex > buckets.count - 1) {
			prevBucketIndex = buckets.count - 1;
		}
		if (nextBucketIndex < 0) {
			nextBucketIndex = 0;
		}
		if (nextBucketIndex > buckets.count - 1) {
			nextBucketIndex = buckets.count - 1;
		}
		if (prevBucketIndex < 0 || nextBucketIndex < 0) {
			return null;
		}
		let prevBucketValue = buckets._inner[prevBucketIndex];
		let nextBucketValue = buckets._inner[nextBucketIndex];
		let ret: number[][] = <number[][]>new Array(2);
		ret[0] = prevBucketValue;
		ret[1] = nextBucketValue;
		return ret;
	}
	private static bucketBinarySearch(list: IList$1<number[]>, pos: Point, isInverted: boolean, maxPosition: number): number {
		let currMin: number = 0;
		let currMax: number = list.count - 1;
		while (currMin <= currMax) {
			let currMid: number = (currMin + ((currMax - currMin) >> 1));
			let compResult: number;
			let item = list.item(currMid);
			if (isInverted) {
				compResult = (maxPosition - pos.x) < (maxPosition - item[0]) ? -1 : ((maxPosition - pos.x) > (maxPosition - item[0]) ? 1 : 0);
			} else {
				compResult = pos.x < (<number>item[0]) ? -1 : (pos.x > (<number>item[0]) ? 1 : 0);
			}
			if (compResult < 0) {
				currMax = currMid - 1;
			} else if (compResult > 0) {
				currMin = currMid + 1;
			} else {
				return currMid;
			}
		}
		return ~currMin;
	}
	getPreviousOrExactIndexHelper(target: Series, world: Point, skipUnknowns: boolean, indexAxis: Axis, getExactUnsortedIndex: (arg1: Point) => number, valueColumn: IList$1<number>): number {
		if (indexAxis == null) {
			return -1;
		}
		let isSorting: boolean = indexAxis.isSorting;
		let preSorted = target.usesPresortedValueColumn;
		let sorting: ISortingAxis = null;
		if (isSorting) {
			sorting = <ISortingAxis><any>indexAxis;
		}
		let itemIndex: number = -1;
		let prevItem: number = -1;
		let nextItem: number = -1;
		if (isSorting) {
			itemIndex = getExactUnsortedIndex(world);
			if (isNaN_(itemIndex)) {
				return -1;
			}
			prevItem = <number>truncate(Math.floor(itemIndex));
			nextItem = <number>truncate(Math.ceil(itemIndex));
		} else {
			itemIndex = target.getExactItemIndex(world);
			if (isNaN_(itemIndex)) {
				return -1;
			}
			prevItem = <number>truncate(Math.floor(itemIndex));
			nextItem = <number>truncate(Math.ceil(itemIndex));
		}
		if (valueColumn == null) {
			return -1;
		}
		if (prevItem < 0 || prevItem > valueColumn.count - 1) {
			return -1;
		}
		if (!skipUnknowns) {
			return prevItem;
		}
		let currVal: number = NaN;
		if (isSorting && !preSorted) {
			if (prevItem < sorting.sortedIndices.count && sorting.sortedIndices._inner[prevItem] < valueColumn.count) {
				currVal = valueColumn.item(sorting.sortedIndices._inner[prevItem]);
			}
		} else {
			currVal = valueColumn.item(prevItem);
		}
		while (isNaN_(currVal)) {
			prevItem--;
			if (prevItem < 0 || prevItem > valueColumn.count - 1) {
				return -1;
			}
			if (isSorting && !preSorted) {
				currVal = valueColumn.item(sorting.sortedIndices._inner[prevItem]);
			} else {
				currVal = valueColumn.item(prevItem);
			}
		}
		return prevItem;
	}
	getSeriesValueHelper(target: Series, column: IList$1<number>, world: Point, axis: Axis, pars: ScalerParams, offset: number, getExactUnsortedIndex: (arg1: Point) => number, useInterpolation: boolean, skipUnknowns: boolean): number {
		if (column == null) {
			return NaN;
		}
		let presorted = target.usesPresortedValueColumn;
		let prevItem = target.getPreviousOrExactIndexHelper(world, skipUnknowns, axis, getExactUnsortedIndex, column);
		let nextItem = target.getNextOrExactIndexHelper(world, skipUnknowns, axis, getExactUnsortedIndex, column);
		let distToPrev = target.getDistanceToIndex(world, prevItem, axis, pars, offset);
		let distToNext = target.getDistanceToIndex(world, nextItem, axis, pars, offset);
		let unsortedPrevItem = prevItem;
		let unsortedNextItem = nextItem;
		let isSorting: boolean = axis.isSorting;
		if (isSorting && !presorted) {
			let sorting = <ISortingAxis><any>axis;
			if (prevItem >= 0 && prevItem < sorting.sortedIndices.count) {
				prevItem = sorting.sortedIndices._inner[prevItem];
			}
			if (nextItem >= 0 && prevItem < sorting.sortedIndices.count) {
				nextItem = sorting.sortedIndices._inner[nextItem];
			}
		}
		let p = distToPrev / (distToNext + distToPrev);
		if (distToPrev == 0) {
			p = 0;
		}
		if (distToNext == 0) {
			p = 1;
		}
		if (!useInterpolation) {
			if (distToNext <= distToPrev) {
				if (nextItem >= 0 && nextItem < column.count) {
					return column.item(nextItem);
				}
			} else {
				if (prevItem >= 0 && prevItem < column.count) {
					return column.item(prevItem);
				}
			}
			return NaN;
		}
		return target.getInterpolatedSeriesValue(p, column, prevItem, nextItem, unsortedPrevItem, unsortedNextItem, offset, isSorting);
	}
	testHighLowStrokeOver(target: Series, position: Point, isFinger: boolean): boolean {
		let segs = target.getLowStrokeSegments(position);
		let highSegs = target.getHighStrokeSegments(position);
		if (segs == null) {
			return false;
		}
		for (let i = 0; i < segs.length; i++) {
			let seg = segs[i];
			if (seg == null || seg.length != 2) {
				continue;
			}
			if (GeometryUtil.isPointNearLineSegment(position, seg[0], seg[1], target.thickness / 2 + target.getHitTestAllowance(isFinger))) {
				return true;
			}
			if (highSegs != null && i < highSegs.length) {
				let highSeg = highSegs[i];
				if (highSeg == null || highSeg.length != 2) {
					continue;
				}
				if (GeometryUtil.isPointNearLineSegment(position, highSeg[0], highSeg[1], target.thickness / 2 + target.getHitTestAllowance(isFinger))) {
					return true;
				}
				if (GeometryUtil.isPointNearLineSegment(position, seg[0], highSeg[0], target.thickness / 2 + target.getHitTestAllowance(isFinger))) {
					return true;
				}
				if (GeometryUtil.isPointNearLineSegment(position, seg[1], highSeg[1], target.thickness / 2 + target.getHitTestAllowance(isFinger))) {
					return true;
				}
				let points = <Point[]>new Array(5);
				points[0] = highSeg[0];
				points[1] = highSeg[1];
				points[2] = seg[1];
				points[3] = seg[0];
				points[4] = highSeg[0];
				if (PolygonUtil.polygonContainsPoint(boxArray$1<Point>(points), position)) {
					return true;
				}
			}
		}
		return false;
	}
	testNearStroke(target: Series, position: Point, isFinger: boolean, pathData1: PathGeometry): boolean {
		if (pathData1 == null) {
			return false;
		}
		for (let i = 0; i < pathData1.figures.count; i++) {
			let figure = pathData1.figures._inner[i];
			for (let j = 0; j < figure._segments.count; j++) {
				let segment = <PolyLineSegment>figure._segments._inner[j];
				if (GeometryUtil.isPointNearPolyline(position, figure._startPoint, segment._points, target.getHitTestAllowance(isFinger))) {
					return true;
				}
			}
		}
		return false;
	}
	testOverPoly(series: Series, position: Point, pathData1: PathGeometry): boolean {
		if (pathData1 == null) {
			return false;
		}
		if (pathData1.figures.count > 0) {
			let pathFigure = pathData1.figures._inner[0];
			if (pathFigure._segments.count > 0) {
				let segment = <PolyLineSegment>pathFigure._segments._inner[0];
				if (PolygonUtil.polygonContainsPoint(segment._points, position)) {
					return true;
				}
			}
		}
		return false;
	}
	getNextOrExactIndexHelper(target: Series, world: Point, skipUnknowns: boolean, indexAxis: Axis, getExactUnsortedIndex: (arg1: Point) => number, valueColumn: IList$1<number>): number {
		let preSorted = target.usesPresortedValueColumn;
		let isSorting: boolean = indexAxis.isSorting;
		let sorting: ISortingAxis = null;
		if (isSorting) {
			sorting = <ISortingAxis><any>indexAxis;
		}
		let itemIndex: number = -1;
		let prevItem: number = -1;
		let nextItem: number = -1;
		if (isSorting) {
			itemIndex = getExactUnsortedIndex(world);
			if (isNaN_(itemIndex)) {
				return -1;
			}
			prevItem = <number>truncate(Math.floor(itemIndex));
			nextItem = <number>truncate(Math.ceil(itemIndex));
		} else {
			itemIndex = target.getExactItemIndex(world);
			if (isNaN_(itemIndex)) {
				return -1;
			}
			prevItem = <number>truncate(Math.floor(itemIndex));
			nextItem = <number>truncate(Math.ceil(itemIndex));
		}
		if (valueColumn == null) {
			return -1;
		}
		if (nextItem < 0 || nextItem > valueColumn.count - 1) {
			return -1;
		}
		if (!skipUnknowns) {
			return nextItem;
		}
		let currVal: number = NaN;
		if (isSorting && !preSorted) {
			if (nextItem < sorting.sortedIndices.count && sorting.sortedIndices._inner[nextItem] < valueColumn.count) {
				currVal = valueColumn.item(sorting.sortedIndices._inner[nextItem]);
			}
		} else {
			currVal = valueColumn.item(nextItem);
		}
		while (isNaN_(currVal)) {
			nextItem++;
			if (nextItem < 0 || nextItem > valueColumn.count - 1) {
				return -1;
			}
			if (isSorting && !preSorted) {
				currVal = valueColumn.item(sorting.sortedIndices._inner[nextItem]);
			} else {
				currVal = valueColumn.item(nextItem);
			}
		}
		return nextItem;
	}
	getExactUnsortedItemIndexHelper(target: Series, world: Point, axis: Axis): number {
		let windowRect: Rect = target.view.windowRect;
		let viewportRect: Rect = target.view.viewport;
		if (windowRect.isEmpty || viewportRect.isEmpty || axis == null) {
			return -1;
		}
		let effectiveViewportRect: Rect = target.getEffectiveViewport1(target.view);
		let sorting: ISortingAxis = null;
		if (axis.isSorting) {
			sorting = <ISortingAxis><any>axis;
		}
		let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, axis.isInverted, effectiveViewportRect);
		if (target.seriesViewer == null) {
			return -1;
		}
		p.effectiveViewportRect = target.getEffectiveViewport1(target.view);
		let contentViewport = target.getContentViewport(target.view);
		let axisValue: number = 0;
		if (axis.isVertical) {
			let top: number = axis.getUnscaledValue(contentViewport.top, p);
			let bottom: number = axis.getUnscaledValue(contentViewport.bottom, p);
			let windowY: number = (world.y - windowRect.top) / windowRect.height;
			axisValue = top + ((bottom - top) * windowY);
		} else {
			if (axis.isCategoryDateTime) {
				let left: number = axis.getUnscaledValue(contentViewport.left, p);
				let right: number = axis.getUnscaledValue(contentViewport.right, p);
				let windowX: number = (world.x - windowRect.left) / windowRect.width;
				axisValue = left + ((right - left) * windowX);
			} else {
				let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
				axisValue = axis.getUnscaledValue(world.x, new ScalerParams(1, unitRect, unitRect, axis.isInverted));
			}
		}
		if (axis.isDateTime) {
		}
		let exactItemIndex: number = sorting.getExactUnsortedIndexClosestToUnscaledValue(axisValue);
		return exactItemIndex;
	}
	testShapesOver(target: Series, position: Point, isFinger: boolean): boolean {
		let box = target.getSeriesValueBoundingBoxFromSeriesPixel(position);
		if (box.isEmpty) {
			return false;
		}
		let inflated = RectUtil.inflate(box, target.getHitTestAllowance(isFinger));
		return inflated.containsPoint(position);
	}
	private static readonly cLOSENESS_FACTOR: number = 1E-07;
	getSeriesValuePositionHelper(target: Series, world: Point, useInterpolation: boolean, skipUnknowns: boolean, offset: number, valueAxis: Axis, indexAxis: Axis, getSeriesValue: (arg1: Point, arg2: boolean, arg3: boolean) => number, getPrevious: (arg1: Point, arg2: boolean) => number, getNext: (arg1: Point, arg2: boolean) => number): Point {
		if (valueAxis == null || indexAxis == null || target.view == null || target.view.windowRect.isEmpty || target.view.viewport.isEmpty) {
			return <Point>{ $type: Point_$type, x: NaN, y: NaN };
		}
		let effectiveViewportRect: Rect = target.getEffectiveViewport1(target.view);
		let valueParams = new ScalerParams(0, target.view.windowRect, target.view.viewport, valueAxis.isInverted, effectiveViewportRect);
		if (valueAxis.isVertical) {
			valueParams.referenceValue = target.getReferenceValue();
		}
		valueParams.effectiveViewportRect = target.getEffectiveViewport1(target.view);
		let view = target.view;
		let indexPos: number;
		if (indexAxis.isVertical) {
			indexPos = world.y;
			indexPos = view.viewport.top + view.viewport.height * (indexPos - view.windowRect.top) / view.windowRect.height;
		} else {
			indexPos = world.x;
			indexPos = view.viewport.left + view.viewport.width * (indexPos - view.windowRect.left) / view.windowRect.width;
		}
		if (!useInterpolation && indexAxis != null) {
			let prevItem: number;
			let nextItem: number;
			if (getPrevious != null) {
				prevItem = getPrevious(world, skipUnknowns);
			} else {
				prevItem = target.getPreviousOrExactIndex(world, skipUnknowns);
			}
			if (getNext != null) {
				nextItem = getNext(world, skipUnknowns);
			} else {
				nextItem = target.getNextOrExactIndex(world, skipUnknowns);
			}
			if (prevItem == -1 && nextItem == -1) {
				return <Point>{ $type: Point_$type, x: NaN, y: NaN };
			}
			let indexParams: ScalerParams = new ScalerParams(0, view.windowRect, view.viewport, indexAxis.isInverted, effectiveViewportRect);
			indexParams.effectiveViewportRect = target.seriesViewer.viewportRect;
			let distToPrev = target.getDistanceToIndex(world, prevItem, indexAxis, indexParams, offset);
			let distToNext = target.getDistanceToIndex(world, nextItem, indexAxis, indexParams, offset);
			let nextVal: number = nextItem;
			let prevVal: number = prevItem;
			if (indexAxis.isSorting) {
				let sorting = <ISortingAxis><any>indexAxis;
				if (nextVal >= 0 && nextVal < sorting.sortedIndices.count) {
					nextVal = sorting.getUnscaledValueAt(sorting.sortedIndices._inner[<number>truncate(nextVal)]);
				}
				if (prevVal >= 0 && prevVal < sorting.sortedIndices.count) {
					prevVal = sorting.getUnscaledValueAt(sorting.sortedIndices._inner[<number>truncate(prevVal)]);
				}
			}
			if ((distToNext + distToPrev) != 0) {
				let rat = distToNext / (distToPrev + distToNext);
				if (Math.abs(rat - 0.5) < SeriesInteractionManager.cLOSENESS_FACTOR) {
					distToNext = distToPrev;
				}
			}
			if (distToNext <= distToPrev) {
				indexPos = indexAxis.getScaledValue(nextVal, indexParams) + offset;
			} else {
				indexPos = indexAxis.getScaledValue(prevVal, indexParams) + offset;
			}
		} else {
			if (indexAxis.isCategory && !indexAxis.isDateTime && (<CategoryAxisBase>indexAxis).categoryMode != CategoryMode.Mode0) {
				let groupWidth: number = 0.5 * (<CategoryAxisBase>indexAxis).getCategorySize(view.windowRect, view.viewport, target.getEffectiveViewport1(view));
				if (target.isVertical) {
					groupWidth = groupWidth * -1;
				}
				if (indexAxis.isInverted) {
					groupWidth = groupWidth * -1;
				}
				indexPos -= groupWidth;
				indexPos += offset;
			}
		}
		let val: number;
		if (getSeriesValue != null) {
			val = getSeriesValue(world, useInterpolation, skipUnknowns);
		} else {
			val = target.getSeriesValue(world, useInterpolation, skipUnknowns);
		}
		let valuePos = valueAxis.getScaledValue(val, valueParams);
		if (indexAxis.isVertical) {
			return <Point>{ $type: Point_$type, x: valuePos, y: indexPos };
		} else {
			return <Point>{ $type: Point_$type, x: indexPos, y: valuePos };
		}
	}
	private _lastHighlightingInfo: HighlightingInfo = null;
	private get lastHighlightingInfo(): HighlightingInfo {
		return this._lastHighlightingInfo;
	}
	private set lastHighlightingInfo(value: HighlightingInfo) {
		this._lastHighlightingInfo = value;
	}
	private _lastMarkerHighlightingInfo: HighlightingInfo = null;
	private get lastMarkerHighlightingInfo(): HighlightingInfo {
		return this._lastMarkerHighlightingInfo;
	}
	private set lastMarkerHighlightingInfo(value: HighlightingInfo) {
		this._lastMarkerHighlightingInfo = value;
	}
	modifyHighlights(target: Series, item: any, world: Point, directlyOver: boolean, leaving: boolean): void {
		if (target.seriesViewer.justZoomed() && !leaving) {
			return;
		}
		if (!target.actualIsHighlightingEnabled) {
			return;
		}
		if (target.seriesViewer == null) {
			return;
		}
		let info: HighlightingInfo = null;
		let markerInfo: HighlightingInfo = null;
		let highlightingManager = target.seriesViewer.highlightingManager;
		let highlightingAnimator = target.seriesViewer.highlightingAnimator;
		if (leaving && this.lastHighlightingInfo != null) {
			info = this.lastHighlightingInfo;
		} else {
			info = target.getHighlightingInfo(item, world);
			if (this.lastHighlightingInfo != null && this.lastHighlightingInfo != info) {
				if (target.seriesViewer != null) {
					highlightingManager.endHighlight(this.lastHighlightingInfo);
				}
			}
			this.lastHighlightingInfo = info;
		}
		if (target.hasMarkers) {
			if (leaving && this.lastMarkerHighlightingInfo != null) {
				markerInfo = this.lastMarkerHighlightingInfo;
			} else {
				markerInfo = target.getMarkerHighlightingInfo(item, world);
				if (this.lastMarkerHighlightingInfo != null && this.lastMarkerHighlightingInfo != markerInfo) {
					highlightingManager.endHighlight(this.lastMarkerHighlightingInfo);
				}
				this.lastMarkerHighlightingInfo = markerInfo;
			}
		}
		let onlyDirect = true;
		if (leaving) {
			highlightingManager.endHighlight(info);
			if (markerInfo != null) {
				highlightingManager.endHighlight(markerInfo);
			}
		} else {
			if (directlyOver || !onlyDirect) {
				highlightingManager.startHighlight(info);
				if (markerInfo != null) {
					highlightingManager.startHighlight(markerInfo);
				}
			}
		}
		if (!highlightingAnimator.animationActive() && highlightingAnimator.intervalMilliseconds > 0) {
			highlightingAnimator.start();
		}
		if (highlightingAnimator.intervalMilliseconds == 0) {
			target.seriesViewer.updateHighlights(1);
		}
	}
	applyHighlightingColor(target: Series, info: HighlightingInfo, brush: Brush): Brush {
		let additionalBrightness = info.progress;
		additionalBrightness = additionalBrightness * 0.5;
		return this.getBrightenedBrush(brush, additionalBrightness);
	}
	protected getBrightenedBrush(brush: Brush, additionalBrightness: number): Brush {
		if (brush == null) {
			return brush;
		}
		return BrushUtil.getLightened(brush, additionalBrightness);
	}
	onMouseEnter(target: Series, pt: Point, source: any, data: any): void {
		let view = target.view;
		view.goToMouseOverState();
		this.mouseIsOver = true;
		let item: any = target.item(source, pt);
		this.lastHoverItem = item;
		if (target.seriesViewer != null && !target.contentInfo.isDirty) {
			this.updateToolTip(target, pt, item, data);
		}
		this._isMouseEnterDeferred = false;
		if (target.shouldDeferEnterAndLeave && item == null) {
			this._isMouseEnterDeferred = true;
		}
		if (target.seriesViewer != null && !this._isMouseEnterDeferred) {
			if (target.shouldDeferEnterAndLeave) {
				this._isMouseLeaveDeferred = true;
			}
			this.modifyHighlights(target, item, target.toWorldPosition(pt), true, false);
			target.seriesViewer.onSeriesMouseEnter(target, item, data);
		}
	}
	simulateHover(target: Series, point: Point): void {
		let source: any = null;
		let data: any = null;
		let cont: DataContext;
		let series = ((() => { let $ret = target.seriesViewer.view.getHitSeries(point, false, cont, false); cont = $ret.p2; return $ret.ret; })());
		if (series != target) {
			if (this.mouseIsOver) {
				this.onMouseLeave(target, point, null, null);
			}
			return;
		}
		source = cont;
		if (!this.mouseIsOver) {
			this.onMouseEnter(target, point, source, data);
		}
		this.onMouseMove(target, point, source, data);
	}
	onMouseMove(target: Series, point: Point, source: any, data: any): void {
		this.mouseIsOver = true;
		let item: any = target.item(source, point);
		this.updateToolTip(target, point, item, data);
		if (item != null) {
			this.lastHoverItem = item;
		}
		if (target.seriesViewer != null && item != null && this._isMouseEnterDeferred) {
			this._isMouseEnterDeferred = false;
			this._isMouseLeaveDeferred = true;
			this.modifyHighlights(target, item, target.toWorldPosition(point), true, false);
			target.seriesViewer.onSeriesMouseEnter(target, item, data);
		}
		if (target.seriesViewer != null && (!target.shouldDeferEnterAndLeave || item != null) && !this._isMouseEnterDeferred) {
			this.modifyHighlights(target, item, target.toWorldPosition(point), true, false);
			target.seriesViewer.onSeriesMouseMove(target, item, data);
		}
		if (item == null && !this._isMouseEnterDeferred && target.shouldDeferEnterAndLeave) {
			this.modifyHighlights(target, item, target.toWorldPosition(point), false, true);
			target.seriesViewer.onSeriesMouseLeave(target, this.lastHoverItem, data);
			this._isMouseLeaveDeferred = false;
			this._isMouseEnterDeferred = true;
		}
	}
	onMouseLeave(target: Series, pt: Point, p: any, data: any): void {
		target.view.goToNormalState();
		this.mouseIsOver = false;
		let item: any = this.lastHoverItem;
		target.view.hideTooltip();
		if (target.seriesViewer != null && (this._isMouseLeaveDeferred || !target.shouldDeferEnterAndLeave)) {
			this._isMouseLeaveDeferred = false;
			this._isMouseEnterDeferred = false;
			this.modifyHighlights(target, item, target.toWorldPosition(pt), false, true);
			target.seriesViewer.onSeriesMouseLeave(target, item, data);
		}
	}
	onLeftButtonDown(target: Series, pt: Point, source: any, data: any): void {
		this.pressed = true;
		if (target.seriesViewer != null) {
			target.seriesViewer.onSeriesMouseLeftButtonDown(target, target.item(source, pt), data);
		}
	}
	onMouseLeftButtonUp(target: Series, pt: Point, source: any, data: any): void {
		this.pressed = false;
		if (target.seriesViewer != null) {
			target.seriesViewer.onSeriesMouseLeftButtonUp(target, target.item(source, pt), data);
		}
	}
	onLostMouseCapture(target: Series, pt: Point, source: any, data: any): void {
		if (target.view.mouseButtonUserReleased) {
			return;
		}
		if (this.pressed) {
			this.onMouseLeftButtonUp(target, pt, source, data);
		}
		if (this.mouseIsOver) {
			this.onMouseLeave(target, pt, source, data);
		}
	}
	onRightButtonDown(target: Series, pt: Point, source: any, data: any): void {
		if (target.seriesViewer != null) {
			target.seriesViewer.onSeriesMouseRightButtonDown(target, target.item(source, pt), data);
		}
	}
	onRightButtonUp(target: Series, pt: Point, source: any, data: any): void {
		if (target.seriesViewer != null) {
			target.seriesViewer.onSeriesMouseRightButtonUp(target, target.item(source, pt), data);
		}
	}
	private _lastHoverItem: any = null;
	get lastHoverItem(): any {
		return this._lastHoverItem;
	}
	set lastHoverItem(value: any) {
		this._lastHoverItem = value;
	}
	private _mouseIsOver: boolean = false;
	get mouseIsOver(): boolean {
		return this._mouseIsOver;
	}
	set mouseIsOver(value: boolean) {
		this._mouseIsOver = value;
	}
	private _pressed: boolean = false;
	private get pressed(): boolean {
		return this._pressed;
	}
	private set pressed(value: boolean) {
		this._pressed = value;
	}
	private _isMouseEnterDeferred: boolean = false;
	get isMouseEnterDeferred(): boolean {
		return this._isMouseEnterDeferred;
	}
	set isMouseEnterDeferred(value: boolean) {
		this._isMouseEnterDeferred = value;
	}
	private _isMouseLeaveDeferred: boolean = false;
	get isMouseLeaveDeferred(): boolean {
		return this._isMouseLeaveDeferred;
	}
	set isMouseLeaveDeferred(value: boolean) {
		this._isMouseLeaveDeferred = value;
	}
	private _tooltipDisconnected: boolean = true;
	private _tooltipInInfoBox: boolean = false;
	updateToolTip(target: Series, pt: Point, item: any, data: any): void {
		let tooltipDisabled: boolean = false;
		if (target.seriesViewer != null) {
			tooltipDisabled = target.seriesViewer.isDefaultTooltipDisabled;
		}
		if (tooltipDisabled) {
			return;
		}
		if (target.seriesViewer == null || target.seriesViewer.dragCrosshairActivated) {
			return;
		}
		this.toolTipVisible = true;
		this.toolTipPosition = pt;
		this.toolTipItem = item;
		target.view.toolTipContext.item = item;
		target.view.toolTipContext.itemLabel = target.getItemLabel(item);
		let offsets = target.seriesViewer.getContainerOffsets();
		let pos_ = <Point>{ $type: Point_$type, x: pt.x + 15 + offsets.x, y: pt.y + 15 + offsets.y };
		let context_ = target.view.toolTipContext;
		let inPointer: boolean = false;
		if (this._toolTipObject != null) {
			inPointer = <boolean>((<any>this._toolTipObject)._inPointer);
			(<any>this._toolTipObject)._inPointer = false;
		}
		if (this._toolTipObject != null) {
			if (this._tooltipInInfoBox || inPointer) {
				this._tooltipInInfoBox = false;
				this._toolTipObject.remove();
				this._toolTipObject.setStyleProperty("position", "absolute");
				this._toolTipObject.addClass(target.seriesViewer.tooltipStyle);
				target.seriesViewer.addTooltipToView(this._toolTipObject);
				this._toolTipObject.hide();
			}
			if (this._tooltipDisconnected) {
				target.seriesViewer.addTooltipToView(this._toolTipObject);
				this._tooltipDisconnected = false;
			}
			(<any>context_).hideOthers = true;
			if (<boolean>((<any>this._toolTipObject).updateToolTip && !(<any>this._toolTipObject).updateToolTip(context_))) {
				this.hideTooltip(target);
			}
			let windowScrollLeft: number = window.pageXOffset;
			let windowScrollTop: number = window.pageYOffset;
			let windowWidth: number = document.documentElement.clientWidth;
			let windowHeight: number = document.documentElement.clientHeight;
			let width: number = this._toolTipObject.outerWidthWithMargin();
			let height: number = this._toolTipObject.outerHeightWithMargin();
			let left: number = pos_.x;
			let top: number = pos_.y;
			let accelerationBuffer: number = 5;
			let margin: number = 30;
			if (width + left - windowScrollLeft + accelerationBuffer > windowWidth) {
				pos_.x -= margin;
				pos_.x -= width;
			}
			if (height + top - windowScrollTop + accelerationBuffer > windowHeight) {
				pos_.y -= margin;
				pos_.y -= height;
			}
			this._toolTipObject.setOffset(pos_.x, pos_.y);
		}
	}
	showToolTip(target: Series, pt: Point, add: (arg1: any) => void): void {
		this.toolTipVisible = true;
		let point = <Point>{ $type: Point_$type, x: pt.x + target.view.viewport.left, y: pt.y + target.view.viewport.top };
		let data = target.item(null, point);
		if (target.view.toolTipContext != null) {
			target.view.toolTipContext.series = target;
			target.view.toolTipContext.item = data;
		}
		let tooltip_ = this._toolTipObject;
		let context_ = target.view.toolTipContext;
		let inPointer: boolean = false;
		if (this._toolTipObject != null) {
			inPointer = <boolean>((<any>this._toolTipObject)._inPointer);
			(<any>this._toolTipObject)._inPointer = false;
		}
		if (context_ != null) {
			(<any>context_).hideOthers = false;
		}
		if ((!this._tooltipInInfoBox || inPointer) && tooltip_ != null) {
			this._tooltipInInfoBox = true;
			tooltip_.remove();
			tooltip_.setStyleProperty("position", "relative");
			tooltip_.setStyleProperty("top", "");
			tooltip_.setStyleProperty("left", "");
			tooltip_.removeClass(target.seriesViewer.tooltipStyle);
		}
		if (this._toolTipObject != null) {
			if ((<any>tooltip_).updateToolTip) { (<any>tooltip_).updateToolTip(context_); };
		}
		if (tooltip_ != null) {
			add(tooltip_);
		}
	}
	getDefaultTooltipTemplate(target: Series): string {
		let tooltipObject = "<div class='ui-chart-default-tooltip-content'><span";
		let labelColorString: string = this.getDefaultTooltipTemplateLabelColorString(target);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipObject += " style='color:" + labelColorString + "'";
		}
		tooltipObject += ">" + target.title + "</span></div>";
		return tooltipObject;
	}
	private isTransparent(target: Brush, againstBackground: Color): boolean {
		let nonTransparent: boolean = target != null && Color.l_op_Inequality_Lifted(toNullable<Color>((<any>Color).$type, target.color), toNullable<Color>((<any>Color).$type, null));
		nonTransparent = nonTransparent && target.color.a > 0;
		nonTransparent = nonTransparent && Color.l_op_Inequality(target.color, againstBackground);
		return !nonTransparent;
	}
	getDefaultTooltipTemplateLabelColorString(target: Series): string {
		let tooltipBackgroundColor: Color = new Color();
		let container: DomRenderer = target != null && target.seriesViewer != null && target.seriesViewer.view != null && target.seriesViewer.view.viewManager != null ? target.seriesViewer.view.viewManager.container : null;
		container.startCSSQuery();
		tooltipBackgroundColor.colorString = container.getCssDefaultPropertyValue("ui-chart-pointer-tooltip", "background-color");
		container.endCSSQuery();
		if (!this.isTransparent(target.actualOutline, tooltipBackgroundColor)) {
			return target.actualOutline._fill;
		}
		if (!this.isTransparent(target.actualBrush, tooltipBackgroundColor)) {
			return target.actualBrush._fill;
		}
		return null;
	}
	hideTooltip(target: Series): void {
		if (this._toolTipObject != null && this.toolTipVisible) {
			this.toolTipVisible = false;
			let context_ = target.view.toolTipContext;
			if ((<any>this._toolTipObject).hideToolTip) { (<any>this._toolTipObject).hideToolTip(context_); };
		}
	}
	private _toolTipObject: DomWrapper = null;
	private _toolTipString: string = null;
	updateToolTipValue(target: Series, p: any): void {
		let oldObject = this._toolTipObject;
		this._toolTipString = null;
		this._toolTipObject = null;
		if (typeof p === 'string') {
			this._toolTipString = <string>p;
		} else {
			this._toolTipObject = <DomWrapper><any>p;
			if (this._toolTipObject != null) {
				this._toolTipObject.setStyleProperty("position", "absolute");
				this._toolTipObject.setStyleProperty("top", "0px");
				this._toolTipObject.setStyleProperty("left", "0px");
				this._toolTipObject.setStyleProperty("z-index", "10000");
				this._toolTipObject.setStyleProperty("pointer-events", "none");
				let nonTransparentOutline: boolean = target.actualOutline != null && Color.l_op_Inequality_Lifted(toNullable<Color>((<any>Color).$type, target.actualOutline.color), toNullable<Color>((<any>Color).$type, null)) && target.actualOutline.color.a > 0;
				if (nonTransparentOutline) {
					this._toolTipObject.setStyleProperty("border-color", target.actualOutline._fill);
				}
			} else {
				if (!this._tooltipDisconnected && oldObject != null) {
					target.seriesViewer.removeTooltipFromView(oldObject);
					this._tooltipDisconnected = true;
				}
			}
		}
	}
	private _toolTipPosition: Point = null;
	protected get toolTipPosition(): Point {
		return this._toolTipPosition;
	}
	protected set toolTipPosition(value: Point) {
		this._toolTipPosition = value;
	}
	private _toolTipItem: any = null;
	protected get toolTipItem(): any {
		return this._toolTipItem;
	}
	protected set toolTipItem(value: any) {
		this._toolTipItem = value;
	}
	private _toolTipVisible: boolean = false;
	protected get toolTipVisible(): boolean {
		return this._toolTipVisible;
	}
	protected set toolTipVisible(value: boolean) {
		this._toolTipVisible = value;
	}
	removeToolTipFromCurrentParent(target: Series): void {
	}
	private _alternateViews: Dictionary$2<string, SeriesView> = new Dictionary$2<string, SeriesView>(String_$type, (<any>SeriesView).$type, 0);
	get alternateViews(): Dictionary$2<string, SeriesView> {
		return this._alternateViews;
	}
	ensureAlternateView(target: Series, viewportRect: Rect, windowRect: Rect, viewIdentifier: string, effectiveScalingRatio: number): void {
		let view: SeriesView;
		if (!((() => { let $ret = this._alternateViews.tryGetValue(viewIdentifier, view); view = $ret.p1; return $ret.ret; })())) {
			view = target.requestView();
			view.isThumbnailView = true;
			view.isAlternateView = true;
			if (target.seriesViewer != null) {
				view.currentScheduler = target.seriesViewer.alternateViewRenderScheduler;
				target.seriesViewer.alternateViewRenderScheduler.register(view);
			}
			view.onInit();
			view.alternateViewIdentifier = viewIdentifier;
			this._alternateViews.item(viewIdentifier, view);
		}
		view.scalingRatioOverride = effectiveScalingRatio;
		view.viewport = viewportRect;
		view.alternateWindow = windowRect;
	}
	removeAlternateView(target: Series, viewIdentifier: string, oldViewer: SeriesViewer): void {
		let view: SeriesView;
		let viewer: SeriesViewer = oldViewer;
		if (viewer == null) {
			viewer = target.seriesViewer;
		}
		if (((() => { let $ret = this._alternateViews.tryGetValue(viewIdentifier, view); view = $ret.p1; return $ret.ret; })())) {
			if (viewer != null) {
				view.currentScheduler = null;
				viewer.alternateViewRenderScheduler.unRegister(view);
			}
			this._alternateViews.removeItem(viewIdentifier);
		}
	}
	removeAllAlternateViews(target: Series, oldViewer: SeriesViewer): void {
		let toRemove: List$1<string> = new List$1<string>(String_$type, 0);
		for (let key of fromEnum<string>(this._alternateViews.keys)) {
			toRemove.add(key);
		}
		for (let i = 0; i < toRemove.count; i++) {
			this.removeAlternateView(target, toRemove._inner[i], oldViewer);
		}
	}
}


