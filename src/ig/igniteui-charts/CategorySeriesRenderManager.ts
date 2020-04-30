/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { AssigningCategoryMarkerStyleEventArgs } from "./AssigningCategoryMarkerStyleEventArgs";
import { MarkerSeries } from "./MarkerSeries";
import { Brush } from "igniteui-core/Brush";
import { AssigningCategoryStyleEventArgsBase } from "./AssigningCategoryStyleEventArgsBase";
import { Series } from "./Series";
import { SeriesViewer } from "./SeriesViewer";
import { IHighlightingManager } from "./IHighlightingManager";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { PenLineCap } from "igniteui-core/PenLineCap";
import { Shape } from "igniteui-core/Shape";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Marker } from "./Marker";
import { DataContext } from "igniteui-core/DataContext";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { HighlightingInfo } from "./HighlightingInfo";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { List$1 } from "igniteui-core/List$1";
import { ScalerParams } from "./ScalerParams";
import { Axis } from "./Axis";
import { truncate } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CategorySeriesRenderManager extends Base {
	static $t: Type = markType(CategorySeriesRenderManager, 'CategorySeriesRenderManager');
	actualRenderFill: Brush = null;
	actualRenderOutline: Brush = null;
	actualRenderThickness: number = 0;
	actualRenderDashArray: DoubleCollection = null;
	actualRenderDashCap: PenLineCap = <PenLineCap>0;
	actualRenderRadiusX: number = 0;
	actualRenderRadiusY: number = 0;
	actualRenderOpacity: number = 0;
	actualRenderMiterLimit: number = 0;
	actualRenderStartCap: PenLineCap = <PenLineCap>0;
	actualRenderEndCap: PenLineCap = <PenLineCap>0;
	initialRenderFill: Brush = null;
	initialRenderOutline: Brush = null;
	initialRenderThickness: number = 0;
	initialRenderDashArray: DoubleCollection = null;
	initialRenderDashCap: PenLineCap = <PenLineCap>0;
	initialRenderRadiusX: number = 0;
	initialRenderRadiusY: number = 0;
	initialRenderOpacity: number = 0;
	initialRenderMiterLimit: number = 0;
	initialRenderStartCap: PenLineCap = <PenLineCap>0;
	initialRenderEndCap: PenLineCap = <PenLineCap>0;
	initialMarkerRenderFill: Brush = null;
	initialMarkerRenderOutline: Brush = null;
	initialMarkerRenderOpacity: number = 0;
	actualNegativeShape: boolean = false;
	actualNegativeMarkerShape: boolean = false;
	actualMarkerRenderFill: Brush = null;
	actualMarkerRenderOutline: Brush = null;
	actualMarkerRenderOpacity: number = 0;
	private _categoryOverrideArgs: AssigningCategoryStyleEventArgs = null;
	get categoryOverrideArgs(): AssigningCategoryStyleEventArgs {
		return this._categoryOverrideArgs;
	}
	set categoryOverrideArgs(value: AssigningCategoryStyleEventArgs) {
		this._categoryOverrideArgs = value;
	}
	private _categoryMarkerOverrideArgs: AssigningCategoryMarkerStyleEventArgs = null;
	get categoryMarkerOverrideArgs(): AssigningCategoryMarkerStyleEventArgs {
		return this._categoryMarkerOverrideArgs;
	}
	set categoryMarkerOverrideArgs(value: AssigningCategoryMarkerStyleEventArgs) {
		this._categoryMarkerOverrideArgs = value;
	}
	actualRenderCategoryAxis: CategoryAxisBase = null;
	bucketSize: number = 0;
	firstBucket: number = 0;
	initCategoryMarkerRenderSettings(source: MarkerSeries, shouldOverrideMarkerStyle: boolean, getItems: (orderedStartIndex: number, orderedEndIndex: number) => any[], size: number, first: number): void {
		this.bucketSize = size;
		this.firstBucket = first;
		this.actualNegativeMarkerShape = false;
		this.initialMarkerRenderFill = source.actualMarkerBrush;
		this.initialMarkerRenderOutline = source.actualMarkerOutline;
		this.initialMarkerRenderOpacity = 1;
		this.actualMarkerRenderFill = this.initialMarkerRenderFill;
		this.actualMarkerRenderOutline = this.initialMarkerRenderOutline;
		this.actualMarkerRenderOpacity = this.initialMarkerRenderOpacity;
		let areMarkerStylesOverriden: boolean = shouldOverrideMarkerStyle;
		this.categoryMarkerOverrideArgs = null;
		if (areMarkerStylesOverriden) {
			this.categoryMarkerOverrideArgs = new AssigningCategoryMarkerStyleEventArgs();
			this.categoryMarkerOverrideArgs.maxAllSeriesHighlightingProgress = 0;
			this.categoryMarkerOverrideArgs.sumAllSeriesHighlightingProgress = 0;
			if (source.seriesViewer != null && source.actualIsHighlightingEnabled) {
				this.categoryMarkerOverrideArgs.maxAllSeriesHighlightingProgress = source.seriesViewer.highlightingManager.maxMarkerHighlightingProgress;
				this.categoryMarkerOverrideArgs.sumAllSeriesHighlightingProgress = source.seriesViewer.highlightingManager.sumMarkerHighlightingProgress;
			}
			this.categoryMarkerOverrideArgs.getItems = getItems;
		}
	}
	initCategoryRenderSettings(source: Series, shouldOverrideCategoryStyle: boolean, categoryAxis: CategoryAxisBase, getItems: (orderedStartIndex: number, orderedEndIndex: number) => any[], size: number, first: number): void {
		this.bucketSize = size;
		this.firstBucket = first;
		this.actualNegativeShape = false;
		this.initialRenderFill = source.actualBrush;
		this.initialRenderOutline = source.actualOutline;
		this.initialRenderThickness = source.thickness;
		this.initialRenderDashArray = source.dashArray;
		this.initialRenderDashCap = source.dashCap;
		this.initialRenderRadiusX = 0;
		this.initialRenderRadiusY = 0;
		this.initialRenderOpacity = 1;
		this.initialRenderMiterLimit = source.miterLimit;
		this.initialRenderStartCap = source.startCap;
		this.initialRenderEndCap = source.endCap;
		this.actualRenderFill = this.initialRenderFill;
		this.actualRenderOutline = this.initialRenderOutline;
		this.actualRenderThickness = this.initialRenderThickness;
		this.actualRenderDashArray = this.initialRenderDashArray;
		this.actualRenderDashCap = this.initialRenderDashCap;
		this.actualRenderRadiusX = this.initialRenderRadiusX;
		this.actualRenderRadiusY = this.initialRenderRadiusY;
		this.actualRenderOpacity = this.initialRenderOpacity;
		this.actualRenderMiterLimit = this.initialRenderMiterLimit;
		this.actualRenderStartCap = this.initialRenderStartCap;
		this.actualRenderEndCap = this.initialRenderEndCap;
		this.actualRenderCategoryAxis = categoryAxis;
		let areStylesOverriden: boolean = shouldOverrideCategoryStyle;
		this.categoryOverrideArgs = null;
		if (areStylesOverriden) {
			this.categoryOverrideArgs = new AssigningCategoryStyleEventArgs();
			this.categoryOverrideArgs.maxAllSeriesHighlightingProgress = 0;
			this.categoryOverrideArgs.sumAllSeriesHighlightingProgress = 0;
			if (source.seriesViewer != null && source.actualIsHighlightingEnabled) {
				this.categoryOverrideArgs.maxAllSeriesHighlightingProgress = source.seriesViewer.highlightingManager.maxHighlightingProgress;
				this.categoryOverrideArgs.sumAllSeriesHighlightingProgress = source.seriesViewer.highlightingManager.sumHighlightingProgress;
			}
			this.categoryOverrideArgs.getItems = getItems;
		}
	}
	setCategoryShapeAppearance(shape: Shape, strokeOnly: boolean, fillOnly: boolean, extended: boolean, useOutline: boolean): void {
		let main = this.actualRenderFill;
		if (useOutline) {
			main = this.actualRenderOutline;
		}
		if (fillOnly) {
			shape._fill = main;
		} else {
			if (strokeOnly) {
				shape._stroke = main;
			} else {
				shape._fill = main;
				shape._stroke = this.actualRenderOutline;
			}
			shape.strokeThickness = this.actualRenderThickness;
			shape.strokeDashArray = this.actualRenderDashArray;
			shape.strokeDashCap = <number>this.actualRenderDashCap;
			if (extended) {
			}
		}
		shape._opacity = this.actualRenderOpacity;
	}
	setCategoryMarkerAppearance(marker: Marker, context: DataContext): void {
		marker._opacity = this.actualMarkerRenderOpacity;
		context.itemBrush = this.actualMarkerRenderFill;
		context.actualItemBrush = context.itemBrush;
		context.outline = this.actualMarkerRenderOutline;
		context.thickness = DeviceUtils.toPixelUnits(MarkerSeries.markerThicknessDefault);
	}
	getBucketBounds(count: number, bucket: number): number[] {
		let size: number = this.bucketSize;
		let i0: number = Math.min(bucket * size, count - 1);
		let i1: number = Math.min(i0 + size - 1, count - 1);
		let ret: number[] = <number[]>new Array(2);
		ret[0] = Math.min(i0 + this.firstBucket * size, count - 1);
		ret[1] = Math.min(i1 + this.firstBucket * size, count - 1);
		return ret;
	}
	protected applyHighlightingStyle(info: HighlightingInfo): void {
		if (info == null) {
			return;
		}
		if (info.series == null) {
			return;
		}
		this.actualRenderFill = info.series.seriesInteractionManager.applyHighlightingColor(info.series, info, this.actualRenderFill);
		this.actualRenderOutline = info.series.seriesInteractionManager.applyHighlightingColor(info.series, info, this.actualRenderOutline);
	}
	protected applyMarkerHighlightingStyle(info: HighlightingInfo): void {
		if (info == null) {
			return;
		}
		if (info.series == null) {
			return;
		}
		this.actualMarkerRenderFill = info.series.seriesInteractionManager.applyHighlightingColor(info.series, info, this.actualMarkerRenderFill);
		this.actualMarkerRenderOutline = info.series.seriesInteractionManager.applyHighlightingColor(info.series, info, this.actualMarkerRenderOutline);
	}
	protected populateArgsBounds(args: AssigningCategoryStyleEventArgsBase, isSorting: boolean, buckets: List$1<number[]>, currentIndex: number, valueCount: number, categoryAxis: CategoryAxisBase, axisParams: ScalerParams, isThumbnail: boolean, isMarker: boolean): void {
		if (currentIndex == -1) {
			if (isSorting) {
				args.hasDateRange = true;
				args.startDate = <Date>categoryAxis.resolveActualMinimumValue();
				args.endDate = <Date>categoryAxis.resolveActualMaximumValue();
			} else {
				args.hasDateRange = false;
				args.startIndex = 0;
				args.endIndex = valueCount - 1;
			}
		} else {
			if (isSorting) {
				let longStart_ = <number>truncate(categoryAxis.getUnscaledValue(<number>buckets._inner[currentIndex][0], axisParams));
				let longEnd_ = longStart_;
				if (currentIndex + 1 < buckets.count) {
					longEnd_ = <number>truncate(categoryAxis.getUnscaledValue(<number>buckets._inner[currentIndex + 1][0], axisParams));
				}
				args.hasDateRange = true;
				args.startDate = <Date>(new Date(longStart_));
				args.endDate = <Date>(new Date(longEnd_));
				if (categoryAxis.isInverted) {
					let swap = args.endDate;
					args.endDate = args.startDate;
					args.startDate = swap;
				}
				if (isMarker) {
					args.startIndex = currentIndex;
					args.endIndex = currentIndex;
				} else {
					let bounds = this.getBucketBounds(valueCount, currentIndex);
					args.startIndex = bounds[0];
					args.endIndex = bounds[1];
				}
			} else {
				if (isMarker) {
					args.startIndex = currentIndex;
					args.endIndex = currentIndex;
				} else {
					let bounds1 = this.getBucketBounds(valueCount, currentIndex);
					args.hasDateRange = false;
					args.startIndex = bounds1[0];
					args.endIndex = bounds1[1];
				}
			}
		}
	}
	prePerformCategoryStyleOverride(buckets: List$1<number[]>, currentIndex: number, valueCount: number, categoryAxis: CategoryAxisBase, axisParams: ScalerParams, isThumbnail: boolean, isHighlightingEnabled: boolean): void {
		this.actualRenderFill = this.initialRenderFill;
		this.actualRenderOutline = this.initialRenderOutline;
		this.actualRenderThickness = this.initialRenderThickness;
		this.actualRenderDashArray = this.initialRenderDashArray;
		this.actualRenderDashCap = this.initialRenderDashCap;
		this.actualRenderRadiusX = this.initialRenderRadiusX;
		this.actualRenderRadiusY = this.initialRenderRadiusY;
		this.actualRenderOpacity = this.initialRenderOpacity;
		let args = this.categoryOverrideArgs;
		let isSorting: boolean = categoryAxis.isSorting;
		this.populateArgsBounds(args, isSorting, buckets, currentIndex, valueCount, categoryAxis, axisParams, isThumbnail, false);
		args.fill = this.actualRenderFill;
		args.stroke = this.actualRenderOutline;
		args.strokeThickness = this.actualRenderThickness;
		args.strokeDashArray = this.actualRenderDashArray;
		args.strokeDashCap = this.actualRenderDashCap;
		args.radiusX = this.actualRenderRadiusX;
		args.radiusY = this.actualRenderRadiusY;
		args.opacity = this.actualRenderOpacity;
		args.isNegativeShape = this.actualNegativeShape;
		args.highlightingHandled = false;
	}
	postPerformCategoryStyleOverride(info: HighlightingInfo, isThumbnail: boolean, isHighlightingEnabled: boolean): void {
		let args = this.categoryOverrideArgs;
		this.actualRenderFill = args.fill;
		this.actualRenderOutline = args.stroke;
		this.actualRenderThickness = args.strokeThickness;
		this.actualRenderDashArray = args.strokeDashArray;
		this.actualRenderDashCap = args.strokeDashCap;
		this.actualRenderRadiusX = args.radiusX;
		this.actualRenderRadiusY = args.radiusY;
		this.actualRenderOpacity = args.opacity;
		if (isHighlightingEnabled && !args.highlightingHandled && !isThumbnail) {
			this.applyHighlightingStyle(info);
		}
	}
	prePerformCategoryMarkerStyleOverride(buckets: List$1<number[]>, currentIndex: number, valueCount: number, categoryAxis: CategoryAxisBase, axisParams: ScalerParams, isThumbnail: boolean, isHighlightingEnabled: boolean): void {
		this.actualMarkerRenderFill = this.initialMarkerRenderFill;
		this.actualMarkerRenderOutline = this.initialMarkerRenderOutline;
		this.actualMarkerRenderOpacity = this.initialMarkerRenderOpacity;
		let args = this.categoryMarkerOverrideArgs;
		let isSorting: boolean = categoryAxis.isSorting;
		this.populateArgsBounds(args, isSorting, buckets, currentIndex, valueCount, categoryAxis, axisParams, isThumbnail, true);
		args.fill = this.actualMarkerRenderFill;
		args.stroke = this.actualMarkerRenderOutline;
		args.opacity = this.actualMarkerRenderOpacity;
		args.isNegativeShape = this.actualNegativeMarkerShape;
		args.highlightingHandled = false;
	}
	postPerformCategoryMarkerStyleOverride(info: HighlightingInfo, isThumbnail: boolean, isHighlightingEnabled: boolean): void {
		let args = this.categoryMarkerOverrideArgs;
		this.actualMarkerRenderFill = args.fill;
		this.actualMarkerRenderOutline = args.stroke;
		this.actualMarkerRenderOpacity = args.opacity;
		if (isHighlightingEnabled && !args.highlightingHandled && !isThumbnail) {
			this.applyMarkerHighlightingStyle(info);
		}
	}
}


