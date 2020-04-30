/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, Type, markType } from "igniteui-core/type";
import { IAnchoredCategorySeriesInteractionManager, IAnchoredCategorySeriesInteractionManager_$type } from "./IAnchoredCategorySeriesInteractionManager";
import { Series } from "./Series";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Axis } from "./Axis";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { SeriesViewer } from "./SeriesViewer";
import { SeriesView } from "./SeriesView";
import { SyncLink } from "./SyncLink";
import { IDateTimeAxis } from "./IDateTimeAxis";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericAxisBase } from "./NumericAxisBase";
import { CategoryFrame } from "./CategoryFrame";
import { List$1 } from "igniteui-core/List$1";
import { truncate, intDivide, isNaN_ } from "igniteui-core/number";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class AnchoredCategorySeriesInteractionManager extends Base implements IAnchoredCategorySeriesInteractionManager {
	static $t: Type = markType(AnchoredCategorySeriesInteractionManager, 'AnchoredCategorySeriesInteractionManager', (<any>Base).$type, [IAnchoredCategorySeriesInteractionManager_$type]);
	getItem(target: Series, world: Point, bucketSize: number, valueColumn: IFastItemColumn$1<number>, xAxis: Axis, yAxis: Axis, isNearestY: boolean, getItemBase: (arg1: Point) => any): any {
		if (!isNearestY) {
			return getItemBase(world);
		}
		if (xAxis == null || xAxis.isSorting || yAxis == null || valueColumn == null || isNaN_(world.x) || isNaN_(world.y)) {
			return getItemBase(world);
		}
		if (bucketSize <= 1) {
			return getItemBase(world);
		}
		let exactIndex: number = <number>truncate(Math.round(target.getExactItemIndex(world)));
		if (exactIndex < 0 || exactIndex >= target.fastItemsSource.count) {
			return getItemBase(world);
		}
		let bucketIndex: number = intDivide(exactIndex, bucketSize);
		let realIndexMin: number = bucketSize * bucketIndex;
		let realIndexMax: number = Math.min(realIndexMin + bucketSize, valueColumn.count - 1);
		let contentViewport: Rect = target.getContentViewport(target.view);
		let scalerParams: ScalerParams = new ScalerParams(0, target.seriesViewer.windowRect, target.seriesViewer.viewportRect, yAxis.isInverted, target.seriesViewer.effectiveViewport);
		let top: number = contentViewport.top;
		let bottom: number = contentViewport.bottom;
		let pixelY: number = top + (bottom - top) * world.y;
		let unscaledY: number = yAxis.getUnscaledValue(pixelY, scalerParams);
		let smallestDifference: number = 1.7976931348623157E+308;
		let closestItemIndex: number = realIndexMin;
		for (let ii: number = realIndexMin; ii <= realIndexMax; ii++) {
			let difference: number = Math.abs(valueColumn.item(ii) - unscaledY);
			if (difference < smallestDifference) {
				smallestDifference = difference;
				closestItemIndex = ii;
			}
		}
		return target.fastItemsSource.item(closestItemIndex);
	}
	scrollIntoView(target: Series, valueColumn: IFastItemColumn$1<number>, xAxis: Axis, yAxis: Axis, offset: number, item: any): boolean {
		let windowRect: Rect = target.view.windowRect;
		windowRect = windowRect.copy();
		let viewportRect: Rect = target.view.viewport;
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let index: number = !windowRect.isEmpty && !viewportRect.isEmpty && target.fastItemsSource != null ? target.fastItemsSource.indexOf(item) : -1;
		let effectiveViewportRect = target.getEffectiveViewportForUnitViewport(target.view);
		let xParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, xAxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, yAxis.isInverted, effectiveViewportRect);
		yParams.referenceValue = target.getReferenceValue();
		let cx = xAxis != null ? xAxis.getScaledValue(index, xParams) : NaN;
		cx += offset;
		let cy: number = yAxis != null && valueColumn != null && index < valueColumn.count ? yAxis.getScaledValue(valueColumn.item(index), yParams) : NaN;
		if (!isNaN_(cx)) {
			if (cx < windowRect.left + 0.1 * windowRect.width) {
				cx = cx + 0.4 * windowRect.width;
				windowRect.x = cx - 0.5 * windowRect.width;
			}
			if (cx > windowRect.right - 0.1 * windowRect.width) {
				cx = cx - 0.4 * windowRect.width;
				windowRect.x = cx - 0.5 * windowRect.width;
			}
		}
		if (!isNaN_(cy)) {
			if (cy < windowRect.top + 0.1 * windowRect.height) {
				cy = cy + 0.4 * windowRect.height;
				windowRect.y = cy - 0.5 * windowRect.height;
			}
			if (cy > windowRect.bottom - 0.1 * windowRect.height) {
				cy = cy - 0.4 * windowRect.height;
				windowRect.y = cy - 0.5 * windowRect.height;
			}
		}
		if (target.syncLink != null) {
			target.syncLink.windowNotify1(target.seriesViewer, windowRect, true);
		}
		return index >= 0;
	}
	getDefaultTooltipTemplate(target: Series, valueMemberPath: string): string {
		let tooltipTemplate = "<div class='ui-chart-default-tooltip-content'>";
		let axis: Axis = null;
		axis = target.getCategoryAxisIfPresent();
		if (axis.isDateTime) {
			let dateTimeAxis = <IDateTimeAxis><any>axis;
			tooltipTemplate += "<span>${item." + dateTimeAxis.dateTimeMemberPath + "}</span><br/>";
		} else if (axis != null && axis.label != null) {
			tooltipTemplate += "<span>${item." + axis.label + "}</span><br/>";
		}
		tooltipTemplate += "<span";
		let labelColorString: string = target.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(target);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipTemplate += " style='color:" + labelColorString + "'";
		}
		tooltipTemplate += ">${series.title}: </span><span class='ui-priority-primary'>" + "${item." + valueMemberPath + "}</span></div>";
		return tooltipTemplate;
	}
	getColumnShapeBoundingBox(target: Series, world: Point, xAxis: CategoryAxisBase, yAxis: NumericAxisBase, currentFrame: CategoryFrame, bucketSize: number, firstBucket: number, getBucketValue: (arg1: number[]) => number): Rect {
		if (xAxis == null || yAxis == null) {
			return Rect.empty;
		}
		let pos = target.fromWorldPosition(world);
		let windowRect: Rect = target.view.windowRect;
		let viewportRect: Rect = target.view.viewport;
		let effectiveViewportRect: Rect = target.getEffectiveViewport1(target.view);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, yAxis.isInverted, effectiveViewportRect);
		yParams.referenceValue = target.getReferenceValue();
		let matching = target.getMatchingBuckets(target.getCategoryAxisIfPresent(), currentFrame.buckets, bucketSize, firstBucket, world, true);
		if (matching == null) {
			return Rect.empty;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let prevDist = Math.abs(pos.x - prevBucketValue[0]);
		let nextDist = Math.abs(pos.x - nextBucketValue[0]);
		let zero: number = yAxis.getScaledValue(yAxis.referenceValue, yParams);
		let groupWidth: number = xAxis.getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		if (prevDist < nextDist) {
			let left: number = prevBucketValue[0] - 0.5 * groupWidth;
			let top: number = getBucketValue(prevBucketValue);
			let bottom: number = zero;
			return new Rect(0, left, Math.min(top, bottom), groupWidth, Math.max(top, bottom) - Math.min(top, bottom));
		} else {
			let left1: number = nextBucketValue[0] - 0.5 * groupWidth;
			let top1: number = getBucketValue(nextBucketValue);
			let bottom1: number = zero;
			return new Rect(0, left1, Math.min(top1, bottom1), groupWidth, Math.max(top1, bottom1) - Math.min(top1, bottom1));
		}
	}
}


