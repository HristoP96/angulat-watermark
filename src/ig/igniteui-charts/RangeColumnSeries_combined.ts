/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalRangeCategorySeries } from "./HorizontalRangeCategorySeries";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { SeriesView } from "./SeriesView";
import { RangeCategorySeries } from "./RangeCategorySeries";
import { Type, Point, Base, ICollection$1, ICollection$1_$type, Number_$type, typeCast, runOn, markType, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { Series } from "./Series";
import { Axis } from "./Axis";
import { CategorySeries } from "./CategorySeries";
import { CategoryFrame } from "./CategoryFrame";
import { List$1 } from "igniteui-core/List$1";
import { MarkerSeries } from "./MarkerSeries";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Rectangle } from "igniteui-core/Rectangle";
import { CategorySeriesView } from "./CategorySeriesView";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_, isInfinity } from "igniteui-core/number";
import { RangeCategorySeriesView } from "./RangeCategorySeriesView";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class RangeColumnSeries extends HorizontalRangeCategorySeries {
	static $t: Type = markType(RangeColumnSeries, 'RangeColumnSeries', (<any>HorizontalRangeCategorySeries).$type);
	protected createView(): SeriesView {
		return new RangeColumnSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.rangeColumnView = <RangeColumnSeriesView>view;
	}
	private _rangeColumnView: RangeColumnSeriesView;
	get rangeColumnView(): RangeColumnSeriesView {
		return this._rangeColumnView;
	}
	set rangeColumnView(value: RangeColumnSeriesView) {
		this._rangeColumnView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>RangeColumnSeries).$type;
	}
	get radiusX(): number {
		return <number>this.getValue(RangeColumnSeries.radiusXProperty);
	}
	set radiusX(value: number) {
		this.setValue(RangeColumnSeries.radiusXProperty, value);
	}
	static readonly radiusXPropertyName: string = "RadiusX";
	static readonly radiusXProperty: DependencyProperty = DependencyProperty.register(RangeColumnSeries.radiusXPropertyName, Number_$type, (<any>RangeColumnSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RangeColumnSeries>sender).raisePropertyChanged(RangeColumnSeries.radiusXPropertyName, e.oldValue, e.newValue)));
	get radiusY(): number {
		return <number>this.getValue(RangeColumnSeries.radiusYProperty);
	}
	set radiusY(value: number) {
		this.setValue(RangeColumnSeries.radiusYProperty, value);
	}
	static readonly radiusYPropertyName: string = "RadiusY";
	static readonly radiusYProperty: DependencyProperty = DependencyProperty.register(RangeColumnSeries.radiusYPropertyName, Number_$type, (<any>RangeColumnSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RangeColumnSeries>sender).raisePropertyChanged(RangeColumnSeries.radiusYPropertyName, e.oldValue, e.newValue)));
	protected get_hasIndividualElements(): boolean {
		return true;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode2;
	}
	getSeriesValueBoundingBox(world: Point): Rect {
		if (this.xAxis == null || this.yAxis == null) {
			return Rect.empty;
		}
		let pos = this.fromWorldPosition(world);
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.yAxis.isInverted, effectiveViewportRect);
		yParams.referenceValue = this.getReferenceValue();
		let matching = this.getMatchingBuckets(this.getCategoryAxis(), this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), world, true);
		if (matching == null) {
			return Rect.empty;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let prevDist = Math.abs(pos.x - prevBucketValue[0]);
		let nextDist = Math.abs(pos.x - nextBucketValue[0]);
		let groupWidth: number = this.xAxis.getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		if (prevDist < nextDist) {
			let left: number = prevBucketValue[0] - 0.5 * groupWidth;
			let top: number = prevBucketValue[1];
			let bottom: number = prevBucketValue[2];
			return new Rect(0, left, Math.min(top, bottom), groupWidth, Math.max(top, bottom) - Math.min(top, bottom));
		} else {
			let left1: number = nextBucketValue[0] - 0.5 * groupWidth;
			let top1: number = nextBucketValue[1];
			let bottom1: number = nextBucketValue[2];
			return new Rect(0, left1, Math.min(top1, bottom1), groupWidth, Math.max(top1, bottom1) - Math.min(top1, bottom1));
		}
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testShapesOver(position, isFinger)) {
			return true;
		}
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let rangeColumnView = <RangeColumnSeriesView>view;
		if (wipeClean && rangeColumnView.columns != null) {
			rangeColumnView.columns.count = 0;
		}
	}
	getItemSpan(): number {
		return this.xAxis.getGroupSize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let rangeColumnView: RangeColumnSeriesView = typeCast<RangeColumnSeriesView>((<any>RangeColumnSeriesView).$type, view);
		let buckets: List$1<number[]> = frame.buckets;
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let groupWidth: number = this.xAxis.getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		if (isNaN_(groupWidth) || isInfinity(groupWidth)) {
			rangeColumnView.columns.count = 0;
			return;
		}
		this.renderManager.initCategoryRenderSettings(this, this.shouldOverrideCategoryStyle(), this.xAxis, runOn(this, this.getCategoryItems), this.getBucketSize(view), this.getFirstBucket(view));
		this.renderManager.initialRenderRadiusX = this.radiusX;
		this.renderManager.initialRenderRadiusY = this.radiusY;
		this.renderManager.actualRenderRadiusX = this.radiusX;
		this.renderManager.actualRenderRadiusY = this.radiusY;
		let areStylesOverriden: boolean = false;
		let args = this.renderManager.categoryOverrideArgs;
		if (args != null) {
			areStylesOverriden = true;
		}
		let isSorting: boolean = this.xAxis.isSorting;
		let valueCount: number = this.lowColumn.count;
		let xAxis = this.xAxis;
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.xAxis.isInverted, effectiveViewportRect);
		let bucketCount: number = 0;
		for (let i: number = 0; i < buckets.count; ++i) {
			let left: number = buckets._inner[i][0] - 0.5 * groupWidth;
			let top: number = Math.min(buckets._inner[i][1], buckets._inner[i][2]);
			let bottom: number = Math.max(buckets._inner[i][1], buckets._inner[i][2]);
			let height = Math.abs(bottom - top);
			if (isInfinity(height)) {
				continue;
			}
			let rectangle: Rectangle = rangeColumnView.columns.item(bucketCount);
			bucketCount++;
			rectangle.width = groupWidth;
			rectangle.height = height;
			if (areStylesOverriden) {
				this.performCategoryStyleOverride(buckets, i, valueCount, xAxis, xParams, view.isThumbnailView);
			}
			this.renderManager.setCategoryShapeAppearance(rectangle, false, false, false, false);
			rectangle.radiusX = this.renderManager.actualRenderRadiusX;
			rectangle.radiusY = this.renderManager.actualRenderRadiusY;
			rangeColumnView.positionRectangle(rectangle, left, top);
		}
		rangeColumnView.columns.count = bucketCount;
		view.updateFrameVersion(frame);
	}
}

/**
 * @hidden 
 */
export class RangeColumnSeriesView extends RangeCategorySeriesView {
	static $t: Type = markType(RangeColumnSeriesView, 'RangeColumnSeriesView', (<any>RangeCategorySeriesView).$type);
	private _rangeColumnModel: RangeColumnSeries = null;
	protected get rangeColumnModel(): RangeColumnSeries {
		return this._rangeColumnModel;
	}
	protected set rangeColumnModel(value: RangeColumnSeries) {
		this._rangeColumnModel = value;
	}
	constructor(model: RangeColumnSeries) {
		super(model);
		this.rangeColumnModel = model;
		this.columns = ((() => {
			let $ret = new Pool$1<Rectangle>((<any>Rectangle).$type);
			$ret.create = runOn(this, this.columnCreate);
			$ret.activate = runOn(this, this.columnActivate);
			$ret.disactivate = runOn(this, this.columnDisactivate);
			$ret.destroy = runOn(this, this.columnDestroy);
			return $ret;
		})());
	}
	private _columns: Pool$1<Rectangle> = null;
	get columns(): Pool$1<Rectangle> {
		return this._columns;
	}
	set columns(value: Pool$1<Rectangle>) {
		this._columns = value;
	}
	onInit(): void {
		super.onInit();
		this.visibleColumns = new List$1<Rectangle>((<any>Rectangle).$type, 0);
		if (!this.isThumbnailView) {
			this.model.resolution = 4;
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	private _visibleColumns: List$1<Rectangle> = null;
	protected get visibleColumns(): List$1<Rectangle> {
		return this._visibleColumns;
	}
	protected set visibleColumns(value: List$1<Rectangle>) {
		this._visibleColumns = value;
	}
	columnCreate(): Rectangle {
		let column: Rectangle = new Rectangle();
		this.visibleColumns.add(column);
		column._visibility = Visibility.Collapsed;
		return column;
	}
	columnActivate(column: Rectangle): void {
		column._visibility = Visibility.Visible;
	}
	columnDisactivate(column: Rectangle): void {
		column._visibility = Visibility.Collapsed;
	}
	columnDestroy(column: Rectangle): void {
		this.visibleColumns.remove(column);
	}
	positionRectangle(column: Rectangle, left: number, top: number): void {
		if (!this.isDirty) {
			this.makeDirty();
		}
		column.canvasTop = top;
		column.canvasLeft = left;
	}
	protected getItem(index: number): any {
		return this.visibleColumns._inner[index];
	}
	private _hitItem: Rectangle = new Rectangle();
	protected getHitItem(index: number): any {
		let item = this.visibleColumns._inner[index];
		this._hitItem._visibility = item._visibility;
		this._hitItem.canvasLeft = item.canvasLeft;
		this._hitItem.canvasTop = item.canvasTop;
		this._hitItem.width = item.width;
		this._hitItem.height = item.height;
		let hitBrush = this.getHitBrush1(index);
		this._hitItem._fill = hitBrush;
		this._hitItem._stroke = hitBrush;
		this._hitItem.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		return this._hitItem;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			for (let i: number = 0; i < this.visibleColumns.count; i++) {
				let column = <Rectangle>this.getCurrentItem(i, isHitContext);
				this.setupItemAppearance(column, i, isHitContext);
				context.renderRectangle(column);
			}
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		let i: number = 0;
		let toSort: List$1<Rectangle> = new List$1<Rectangle>((<any>Rectangle).$type, 0);
		for (let column of fromEnum<Rectangle>(this.columns.active)) {
			toSort.add(column);
		}
		toSort.sort2((c1: Rectangle, c2: Rectangle) => {
			if (c1.canvasLeft < c2.canvasLeft) {
				return -1;
			} else if (c1.canvasLeft > c2.canvasLeft) {
				return 1;
			} else {
				return 0;
			}
		});
		for (let column1 of fromEnum<Rectangle>(toSort)) {
			this.model.seriesVisualDataManager.exportRectangleData(svd, column1, "column" + i, <string[]>[ "Main", "Fill" ]);
		}
		i++;
	}
}


