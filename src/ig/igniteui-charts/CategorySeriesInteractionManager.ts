/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, typeCast, Type, markType } from "igniteui-core/type";
import { ICategorySeriesInteractionManager, ICategorySeriesInteractionManager_$type } from "./ICategorySeriesInteractionManager";
import { Series } from "./Series";
import { Rect } from "igniteui-core/Rect";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { ScalerParams } from "./ScalerParams";
import { SeriesView } from "./SeriesView";
import { Axis } from "./Axis";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { List$1 } from "igniteui-core/List$1";
import { HighlightingInfo } from "./HighlightingInfo";
import { Marker } from "./Marker";
import { CategoryMode } from "./CategoryMode";
import { intDivide, truncate, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CategorySeriesInteractionManager extends Base implements ICategorySeriesInteractionManager {
	static $t: Type = markType(CategorySeriesInteractionManager, 'CategorySeriesInteractionManager', (<any>Base).$type, [ICategorySeriesInteractionManager_$type]);
	getExactItemIndex(target: Series, world: Point): number {
		let windowRect: Rect = target.view.windowRect;
		let viewportRect: Rect = target.view.viewport;
		let xAxis: CategoryAxisBase = <CategoryAxisBase>target.getCategoryAxisIfPresent();
		let effectiveViewportRect: Rect = target.getEffectiveViewport1(target.view);
		let contentViewport: Rect = target.getContentViewport(target.view);
		let rowIndex: number = -1;
		if (xAxis != null && !windowRect.isEmpty && !viewportRect.isEmpty) {
			let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xAxis.isInverted, effectiveViewportRect);
			let left: number = xAxis.getUnscaledValue(contentViewport.left, p);
			let right: number = xAxis.getUnscaledValue(contentViewport.right, p);
			let windowX: number = (world.x - windowRect.left) / windowRect.width;
			let bucket: number = left + (windowX * (right - left));
			if (xAxis.categoryMode != CategoryMode.Mode0) {
				bucket -= 0.5;
			}
			rowIndex = bucket;
		}
		return rowIndex;
	}
	getItem(target: Series, world: Point): any {
		let index: number = 0;
		if (target.isPrimaryAxisSortingAxis) {
			index = target.getItemIndexSorted(world);
			if (index == -1) {
				return null;
			}
		} else if (world.x == 1 && target.fastItemsSource != null) {
			index = target.fastItemsSource.count - 1;
		} else {
			index = target.getItemIndex(world);
		}
		return index >= 0 && target.fastItemsSource != null && index < target.fastItemsSource.count ? target.fastItemsSource.item(index) : null;
	}
	getItemIndexSorted(target: Series, world: Point): number {
		let windowRect: Rect = target.view.windowRect;
		let viewportRect: Rect = target.view.viewport;
		let effectiveViewportRect: Rect = target.getEffectiveViewport1(target.view);
		if (windowRect.isEmpty || viewportRect.isEmpty) {
			return -1;
		}
		if (isNaN_(world.x)) {
			return -1;
		}
		let xAxis: Axis = target.getCategoryAxisIfPresent();
		if (xAxis == null) {
			return -1;
		}
		let sorting: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, xAxis);
		let contentViewport = target.getContentViewport(target.view);
		let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xAxis.isInverted, effectiveViewportRect);
		let axisValue: number = 0;
		if (xAxis.isPiecewise) {
			let windowX: number = (world.x - windowRect.left) / windowRect.width;
			let viewportX: number = windowX * contentViewport.width + contentViewport.left;
			axisValue = xAxis.getUnscaledValue(viewportX, p);
		} else {
			let left: number = xAxis.getUnscaledValue(contentViewport.left, p);
			let right: number = xAxis.getUnscaledValue(contentViewport.right, p);
			let windowX1: number = (world.x - windowRect.left) / windowRect.width;
			axisValue = left + ((right - left) * windowX1);
		}
		let itemIndex: number = sorting.getIndexClosestToUnscaledValue(axisValue);
		return itemIndex;
	}
	getSortingCategoryBucketIndex(target: Series, buckets: List$1<number[]>, world: Point): number {
		let viewportRect = target.view.viewport;
		let windowRect = target.view.windowRect;
		let indexAxis = target.getCategoryAxisIfPresent();
		let screenPos: number = 0;
		if (indexAxis.isVertical) {
			let windowY: number = (world.y - windowRect.top) / windowRect.height;
			screenPos = windowY * viewportRect.height + viewportRect.top;
		} else {
			let windowX: number = (world.x - windowRect.left) / windowRect.width;
			screenPos = windowX * viewportRect.width + viewportRect.left;
		}
		if (indexAxis.isInverted) {
			let count = buckets.count;
			let i: number = 0;
			for (i = count - 1; i >= 0; i--) {
				let bucket = buckets._inner[i];
				let nextBucket: number[] = null;
				if (i > 0) {
					nextBucket = buckets._inner[i - 1];
				}
				if (bucket[0] <= screenPos && nextBucket == null || nextBucket[0] >= screenPos) {
					if (nextBucket != null) {
						if (Math.abs(bucket[0] - screenPos) < Math.abs(nextBucket[0] - screenPos)) {
							return i;
						} else {
							return i - 1;
						}
					} else {
						return i;
					}
				}
			}
			return i;
		} else {
			let count1 = buckets.count;
			let i1: number = 0;
			for (i1 = 0; i1 < count1; i1++) {
				let bucket1 = buckets._inner[i1];
				let nextBucket1: number[] = null;
				if (i1 < count1 - 1) {
					nextBucket1 = buckets._inner[i1 + 1];
				}
				if (bucket1[0] <= screenPos && nextBucket1 == null || nextBucket1[0] >= screenPos) {
					if (nextBucket1 != null) {
						if (Math.abs(bucket1[0] - screenPos) < Math.abs(nextBucket1[0] - screenPos)) {
							return i1;
						} else {
							return i1 + 1;
						}
					} else {
						return i1;
					}
				}
			}
			return i1;
		}
	}
	getSpecificHighlightingInfo(target: Series, buckets: List$1<number[]>, firstBucket: number, lastBucket: number, bucketSize: number, item: any, world: Point, prevValue: HighlightingInfo): HighlightingInfo {
		let count = target.fastItemsSource.count;
		let axis = target.getCategoryAxisIfPresent();
		let bucketStart: number = -1;
		let bucketEnd: number = -1;
		if (axis.isSorting) {
			let bucket = this.getSortingCategoryBucketIndex(target, buckets, world);
			bucketStart = bucket;
			bucketEnd = bucket;
		} else {
			let index = target.getItemIndex(world);
			bucketStart = <number>truncate(Math.floor(<number>(intDivide(index, bucketSize)))) * bucketSize;
			bucketEnd = bucketStart + (bucketSize - 1);
		}
		if (prevValue != null && prevValue.startIndex == bucketStart && prevValue.endIndex == bucketEnd) {
			return prevValue;
		}
		let info = new HighlightingInfo();
		info.series = target;
		info.startIndex = bucketStart;
		info.endIndex = bucketEnd;
		return info;
	}
	getSpecificMarkerHighlightingInfo(target: Series, markers: List$1<Marker>, buckets: List$1<number[]>, item: any, world: Point, prevValue: HighlightingInfo): HighlightingInfo {
		let seriesPos = target.fromWorldPosition(world);
		let activeMarkers = markers;
		if (activeMarkers == null) {
			return null;
		}
		let markerCount = activeMarkers.count;
		if (markerCount == 0) {
			return null;
		}
		let bucket: number = activeMarkers._inner[0].markerBucket;
		if (target.isVertical) {
			let currY: number = buckets._inner[activeMarkers._inner[0].markerBucket][0];
			let minDistance: number = (seriesPos.y - currY) * (seriesPos.y - currY);
			let dist: number;
			for (let i = 0; i < markerCount; i++) {
				currY = buckets._inner[activeMarkers._inner[i].markerBucket][0];
				dist = (seriesPos.y - currY) * (seriesPos.y - currY);
				if (dist <= minDistance) {
					minDistance = dist;
					bucket = activeMarkers._inner[i].markerBucket;
				}
			}
		} else {
			let currX: number = buckets._inner[activeMarkers._inner[0].markerBucket][0];
			let minDistance1: number = (seriesPos.x - currX) * (seriesPos.x - currX);
			let dist1: number;
			for (let i1 = 0; i1 < markerCount; i1++) {
				currX = buckets._inner[activeMarkers._inner[i1].markerBucket][0];
				dist1 = (seriesPos.x - currX) * (seriesPos.x - currX);
				if (dist1 <= minDistance1) {
					minDistance1 = dist1;
					bucket = activeMarkers._inner[i1].markerBucket;
				}
			}
		}
		let info: HighlightingInfo = new HighlightingInfo();
		info.series = target;
		info.isMarker = true;
		info.startIndex = bucket;
		info.endIndex = info.startIndex;
		if (prevValue != null && prevValue.startIndex == info.startIndex && prevValue.endIndex == info.endIndex) {
			return prevValue;
		}
		return info;
	}
}


