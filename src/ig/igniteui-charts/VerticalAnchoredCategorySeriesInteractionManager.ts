/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType } from "igniteui-core/type";
import { IVerticalAnchoredCategorySeriesInteractionManager, IVerticalAnchoredCategorySeriesInteractionManager_$type } from "./IVerticalAnchoredCategorySeriesInteractionManager";
import { Series } from "./Series";
import { Rect } from "igniteui-core/Rect";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { ScalerParams } from "./ScalerParams";
import { SeriesViewer } from "./SeriesViewer";
import { SeriesView } from "./SeriesView";
import { Axis } from "./Axis";
import { List$1 } from "igniteui-core/List$1";
import { ArrayExtension } from "igniteui-core/ArrayExtension";
import { CategoryMode } from "./CategoryMode";

/**
 * @hidden 
 */
export class VerticalAnchoredCategorySeriesInteractionManager extends Base implements IVerticalAnchoredCategorySeriesInteractionManager {
	static $t: Type = markType(VerticalAnchoredCategorySeriesInteractionManager, 'VerticalAnchoredCategorySeriesInteractionManager', (<any>Base).$type, [IVerticalAnchoredCategorySeriesInteractionManager_$type]);
	getExactItemIndex(target: Series, world: Point): number {
		let windowRect: Rect = target.seriesViewer != null ? target.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = target.view.viewport;
		let contentViewport: Rect = target.getContentViewport(target.view);
		let effectiveViewportRect = target.getEffectiveViewport1(target.view);
		let categoryAxis = target.getCategoryAxisIfPresent();
		let rowIndex: number = -1;
		if (categoryAxis != null && !windowRect.isEmpty && !viewportRect.isEmpty) {
			let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, categoryAxis.isInverted, effectiveViewportRect);
			let top: number = categoryAxis.getUnscaledValue(contentViewport.top, p);
			let bottom: number = categoryAxis.getUnscaledValue(contentViewport.bottom, p);
			let windowY: number = (world.y - windowRect.top) / windowRect.height;
			let bucket: number = top + (windowY * (bottom - top));
			if (categoryAxis.categoryMode != CategoryMode.Mode0) {
				bucket -= 0.5;
			}
			rowIndex = bucket;
		}
		return rowIndex;
	}
	getSeriesValueMarkerBoundingBox(target: Series, markers: List$1<Point>, world: Point, getMarkerBoundingBox: (arg1: number) => Rect): Rect {
		let pos = target.fromWorldPosition(world);
		let index: number = -1;
		let isInverted: boolean = target.getCategoryAxisIfPresent().isInverted;
		let maxPosition = target.view.viewport.bottom * 2;
		if (isInverted) {
			index = ArrayExtension.binarySearch$11<Point>(Point_$type, markers, (item: Point) => (maxPosition - pos.y) < (maxPosition - item.y) ? -1 : ((maxPosition - pos.y) > (maxPosition - item.y) ? 1 : 0));
		} else {
			index = ArrayExtension.binarySearch$11<Point>(Point_$type, markers, (item: Point) => pos.y < item.y ? -1 : (pos.y > item.y ? 1 : 0));
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
		let prevY = markers._inner[prevIndex].y;
		let currY = markers._inner[index].y;
		let nextY = markers._inner[nextIndex].y;
		let distPrev = Math.abs(prevY - pos.y);
		let distCurr = Math.abs(currY - pos.y);
		let distNext = Math.abs(nextY - pos.y);
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
}


