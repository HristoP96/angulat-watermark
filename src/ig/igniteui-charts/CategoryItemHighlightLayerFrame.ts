/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Frame } from "./Frame";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { ItemHighlightFrameRect } from "./ItemHighlightFrameRect";
import { Base, Number_$type, runOn, Type, markType } from "igniteui-core/type";
import { DictInterpolator$3 } from "./DictInterpolator$3";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { InterpolationMode } from "igniteui-core/InterpolationMode";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CategoryItemHighlightLayerFrame extends Frame {
	static $t: Type = markType(CategoryItemHighlightLayerFrame, 'CategoryItemHighlightLayerFrame', (<any>Frame).$type);
	constructor() {
		super();
		this.rects = new Dictionary$2<number, ItemHighlightFrameRect>(Number_$type, (<any>ItemHighlightFrameRect).$type, 0);
		this._interpolator = new DictInterpolator$3<number, ItemHighlightFrameRect, CategoryItemHighlightLayerFrame>(Number_$type, (<any>ItemHighlightFrameRect).$type, (<any>CategoryItemHighlightLayerFrame).$type, runOn(this, this.interpolateRect), (r: ItemHighlightFrameRect) => r.timeStamp, (r: ItemHighlightFrameRect) => true, () => new ItemHighlightFrameRect());
	}
	private _rects: Dictionary$2<number, ItemHighlightFrameRect> = null;
	get rects(): Dictionary$2<number, ItemHighlightFrameRect> {
		return this._rects;
	}
	set rects(value: Dictionary$2<number, ItemHighlightFrameRect>) {
		this._rects = value;
	}
	private _interpolator: DictInterpolator$3<number, ItemHighlightFrameRect, CategoryItemHighlightLayerFrame> = null;
	protected interpolateRect(interpolated: ItemHighlightFrameRect, p: number, min: ItemHighlightFrameRect, max: ItemHighlightFrameRect, minFrame: CategoryItemHighlightLayerFrame, maxFrame: CategoryItemHighlightLayerFrame): void {
		if (max != null) {
			interpolated.timeStamp = max.timeStamp;
		} else if (min != null) {
			interpolated.timeStamp = min.timeStamp;
		} else {
			interpolated.timeStamp = 0;
		}
		if (min == null || isNaN_(min.top)) {
			interpolated.top = max != null ? max.top : NaN;
		} else if (max == null || isNaN_(max.top)) {
			interpolated.top = NaN;
		} else {
			interpolated.top = min.top + p * (max.top - min.top);
		}
		if (min == null || isNaN_(min.left)) {
			interpolated.left = max != null ? max.left : NaN;
		} else if (max == null || isNaN_(max.left)) {
			interpolated.left = NaN;
		} else {
			interpolated.left = min.left + p * (max.left - min.left);
		}
		if (min == null || isNaN_(min.right)) {
			interpolated.right = max != null ? max.right : NaN;
		} else if (max == null || isNaN_(max.right)) {
			interpolated.right = NaN;
		} else {
			interpolated.right = min.right + p * (max.right - min.right);
		}
		if (min == null || isNaN_(min.bottom)) {
			interpolated.bottom = max != null ? max.bottom : NaN;
		} else if (max == null || isNaN_(max.bottom)) {
			interpolated.bottom = NaN;
		} else {
			interpolated.bottom = min.bottom + p * (max.bottom - min.bottom);
		}
		if (min == null || isNaN_(min.strokeThickness)) {
			interpolated.strokeThickness = max != null ? max.strokeThickness : NaN;
		} else if (max == null || isNaN_(max.strokeThickness)) {
			interpolated.strokeThickness = NaN;
		} else {
			interpolated.strokeThickness = min.strokeThickness + p * (max.strokeThickness - min.strokeThickness);
		}
		if (min == null || min.brush == null) {
			interpolated.brush = max != null ? max.brush : null;
		} else if (max == null || max.brush == null) {
			interpolated.brush = null;
		} else {
			interpolated.brush = BrushUtil.getInterpolation(min.brush, p, max.brush, InterpolationMode.RGB);
		}
		if (min == null || min.outline == null) {
			interpolated.outline = max != null ? max.outline : null;
		} else if (max == null || max.outline == null) {
			interpolated.outline = null;
		} else {
			interpolated.outline = BrushUtil.getInterpolation(min.outline, p, max.outline, InterpolationMode.RGB);
		}
		if (min == null || min.markerTemplate == null) {
			interpolated.markerTemplate = max != null ? max.markerTemplate : null;
		} else if (max == null || max.outline == null) {
			interpolated.markerTemplate = null;
		} else {
			interpolated.markerTemplate = max.markerTemplate;
		}
		if (min == null || min.dataItem == null) {
			interpolated.dataItem = max != null ? max.dataItem : null;
		} else if (max == null || max.outline == null) {
			interpolated.dataItem = null;
		} else {
			interpolated.dataItem = max.dataItem;
		}
	}
	interpolate2(p: number, min: Frame, max: Frame): void {
		let mn: CategoryItemHighlightLayerFrame = <CategoryItemHighlightLayerFrame>min;
		let mx: CategoryItemHighlightLayerFrame = <CategoryItemHighlightLayerFrame>max;
		this._interpolator.interpolate(this.rects, p, mn.rects, mx.rects, mn, mx);
	}
}


