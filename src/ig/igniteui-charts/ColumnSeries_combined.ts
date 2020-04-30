/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { ConsolidatedItemsPosition, ConsolidatedItemsPosition_$type } from "./ConsolidatedItemsPosition";
import { Series } from "./Series";
import { SeriesView } from "./SeriesView";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { CategoryTransitionInMode } from "./CategoryTransitionInMode";
import { Base, Type, Point, ICollection$1, ICollection$1_$type, Number_$type, runOn, enumGetBox, markType, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Rect } from "igniteui-core/Rect";
import { NumericAxisBase } from "./NumericAxisBase";
import { CategoryFrame } from "./CategoryFrame";
import { CategorySeries } from "./CategorySeries";
import { IAnchoredCategorySeriesInteractionManager } from "./IAnchoredCategorySeriesInteractionManager";
import { MarkerSeries } from "./MarkerSeries";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Rectangle } from "igniteui-core/Rectangle";
import { CategorySeriesView } from "./CategorySeriesView";
import { List$1 } from "igniteui-core/List$1";
import { ScalerParams } from "./ScalerParams";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { ISortingAxis } from "./ISortingAxis";
import { DataContext } from "igniteui-core/DataContext";
import { Axis } from "./Axis";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { SeriesViewer } from "./SeriesViewer";
import { Debug } from "igniteui-core/Debug";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_, isInfinity } from "igniteui-core/number";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
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
export class ColumnSeries extends HorizontalAnchoredCategorySeries {
	static $t: Type = markType(ColumnSeries, 'ColumnSeries', (<any>HorizontalAnchoredCategorySeries).$type);
	protected createView(): SeriesView {
		return new ColumnSeriesView(this);
	}
	private _columnView: ColumnSeriesView;
	get columnView(): ColumnSeriesView {
		return this._columnView;
	}
	set columnView(value: ColumnSeriesView) {
		this._columnView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.columnView = <ColumnSeriesView>view;
	}
	protected getDefaultTransitionInMode(): CategoryTransitionInMode {
		return CategoryTransitionInMode.FromZero;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>ColumnSeries).$type;
		this.categoryMode = CategoryMode.Mode2;
	}
	get radiusX(): number {
		return <number>this.getValue(ColumnSeries.radiusXProperty);
	}
	set radiusX(value: number) {
		this.setValue(ColumnSeries.radiusXProperty, value);
	}
	static readonly radiusXPropertyName: string = "RadiusX";
	static readonly radiusXProperty: DependencyProperty = DependencyProperty.register(ColumnSeries.radiusXPropertyName, Number_$type, (<any>ColumnSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ColumnSeries>sender).raisePropertyChanged(ColumnSeries.radiusXPropertyName, e.oldValue, e.newValue)));
	get radiusY(): number {
		return <number>this.getValue(ColumnSeries.radiusYProperty);
	}
	set radiusY(value: number) {
		this.setValue(ColumnSeries.radiusYProperty, value);
	}
	static readonly radiusYPropertyName: string = "RadiusY";
	static readonly radiusYProperty: DependencyProperty = DependencyProperty.register(ColumnSeries.radiusYPropertyName, Number_$type, (<any>ColumnSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ColumnSeries>sender).raisePropertyChanged(ColumnSeries.radiusYPropertyName, e.oldValue, e.newValue)));
	protected get_hasIndividualElements(): boolean {
		return true;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return this.categoryMode;
	}
	private _getBucketValue: (arg1: number[]) => number = null;
	getSeriesValueBoundingBox(world: Point): Rect {
		if (this._getBucketValue == null) {
			this._getBucketValue = runOn(this, this.getBucketValue);
		}
		let yAxis = this.cachedYAxis != null ? this.cachedYAxis : this.yAxis;
		let xAxis = this.cachedXAxis;
		return this.anchoredCategorySeriesInteractionManager.getColumnShapeBoundingBox(this, world, xAxis, yAxis, this.currentFrame, this.getBucketSize(this.view), this.getFirstBucket(this.view), this._getBucketValue);
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
		let columnView = <ColumnSeriesView>view;
		if (wipeClean && columnView.columns != null) {
			columnView.columns.count = 0;
		}
	}
	getItemSpan(): number {
		return this.cachedXAxis.getGroupSize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let buckets: List$1<number[]> = frame.buckets;
		if (!view.ready()) {
			return;
		}
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.cachedYAxis.isInverted, effectiveViewportRect);
		yParams.referenceValue = this.getReferenceValue();
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.cachedXAxis.isInverted, effectiveViewportRect);
		let yscale: NumericAxisBase = this.cachedYAxis;
		let zero: number = yscale.getScaledValue(yscale.referenceValue, yParams);
		let groupWidth: number = this.cachedXAxis.getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		let xAxis = this.cachedXAxis;
		let columnView: ColumnSeriesView = <ColumnSeriesView>view;
		if (isNaN_(groupWidth) || isInfinity(groupWidth)) {
			columnView.columns.count = 0;
			return;
		}
		this.renderManager.initCategoryRenderSettings(this, this.shouldOverrideCategoryStyle(), this.cachedXAxis, runOn(this, this.getCategoryItems), this.getBucketSize(view), this.getFirstBucket(view));
		this.renderManager.initialRenderRadiusX = this.radiusX;
		this.renderManager.initialRenderRadiusY = this.radiusY;
		this.renderManager.actualRenderRadiusX = this.radiusX;
		this.renderManager.actualRenderRadiusY = this.radiusY;
		let areStylesOverriden: boolean = false;
		let args = this.renderManager.categoryOverrideArgs;
		if (args != null) {
			areStylesOverriden = true;
		}
		let isSorting: boolean = this.cachedXAxis.isSorting;
		let sortingXAxis: ISortingAxis = isSorting ? <ISortingAxis><any>this.cachedXAxis : null;
		let valueCount: number = this.valueColumn.count;
		let bucketSize: number = this.getBucketSize(view);
		let bucketCount: number = 0;
		for (let i: number = 0; i < buckets.count; ++i) {
			let left: number = buckets._inner[i][0] - 0.5 * groupWidth;
			let top: number = this.getBucketValue(buckets._inner[i]);
			let bottom: number = zero;
			top = Math.max(top, -100);
			bottom = Math.min(bottom, viewportRect.bottom + 100);
			let height = Math.abs(bottom - top);
			if (isInfinity(height)) {
				continue;
			}
			let column: Rectangle = columnView.columns.item(bucketCount);
			bucketCount++;
			column.width = groupWidth;
			column.height = height;
			if (areStylesOverriden) {
				this.performCategoryStyleOverride(buckets, i, valueCount, xAxis, xParams, view.isThumbnailView);
			}
			if (column.dataContext != null) {
				let dc: DataContext = <DataContext>column.dataContext;
				if (bucketSize == 1) {
					let columnIndex: number = this.renderManager.getBucketBounds(valueCount, i)[0];
					if (columnIndex >= 0 && columnIndex < this.fastItemsSource.count) {
						if (sortingXAxis != null && sortingXAxis.sortedIndices != null && sortingXAxis.sortedIndices.count > columnIndex) {
							columnIndex = sortingXAxis.sortedIndices._inner[columnIndex];
						}
						dc.item = this.fastItemsSource.item(columnIndex);
					}
				} else {
					dc.item = null;
				}
			}
			this.renderManager.setCategoryShapeAppearance(column, false, false, false, false);
			column.radiusX = this.renderManager.actualRenderRadiusX;
			column.radiusY = this.renderManager.actualRenderRadiusY;
			columnView.positionRectangle(column, left, Math.min(bottom, top));
		}
		columnView.columns.count = bucketCount;
		view.updateFrameVersion(frame);
	}
	private static readonly consolidatedColumnVerticalPositionPropertyName: string = "ConsolidatedColumnVerticalPosition";
	private _consolidatedColumnVerticalPosition: ConsolidatedItemsPosition = ConsolidatedItemsPosition.Minimum;
	get consolidatedColumnVerticalPosition(): ConsolidatedItemsPosition {
		return this._consolidatedColumnVerticalPosition;
	}
	set consolidatedColumnVerticalPosition(value: ConsolidatedItemsPosition) {
		if (this.consolidatedColumnVerticalPosition != value) {
			let oldValue: ConsolidatedItemsPosition = this.consolidatedColumnVerticalPosition;
			this._consolidatedColumnVerticalPosition = value;
			this.raisePropertyChanged(ColumnSeries.consolidatedColumnVerticalPositionPropertyName, enumGetBox<ConsolidatedItemsPosition>(ConsolidatedItemsPosition_$type, oldValue), enumGetBox<ConsolidatedItemsPosition>(ConsolidatedItemsPosition_$type, this.consolidatedColumnVerticalPosition));
		}
	}
	private getBucketValue(bucket: number[]): number {
		if (bucket == null || bucket.length < 3) {
			return NaN;
		}
		switch (this.consolidatedColumnVerticalPosition) {
			case ConsolidatedItemsPosition.Minimum: return bucket[1];
			case ConsolidatedItemsPosition.Maximum: return bucket[2];
			case ConsolidatedItemsPosition.Median: return (bucket[1] + bucket[2]) / 2;
			case ConsolidatedItemsPosition.RelativeMinimum:
			let median: number = (bucket[1] + bucket[2]) / 2;
			if (this.yAxis == null) {
				return median;
			}
			let dataMedian: number = this.yAxis.getUnscaledValue(median, new ScalerParams(1, this.seriesViewer.windowRect, this.seriesViewer.viewportRect, this.yAxis.isInverted));
			if (dataMedian < this.yAxis.referenceValue) {
				return bucket[2];
			} else {
				return bucket[1];
			}

			case ConsolidatedItemsPosition.RelativeMaximum:
			let alsoTheMedian: number = (bucket[1] + bucket[2]) / 2;
			let alsoDataMedian: number = this.yAxis.getUnscaledValue(alsoTheMedian, new ScalerParams(1, this.seriesViewer.windowRect, this.seriesViewer.viewportRect, this.yAxis.isInverted));
			if (this.yAxis == null) {
				return alsoTheMedian;
			}
			if (alsoDataMedian < this.yAxis.referenceValue) {
				return bucket[1];
			} else {
				return bucket[2];
			}

			default:
			Debug.assert1(false, "unexpected ConsolidatedItemsPosition.");
			return (bucket[1] + bucket[2]) / 2;

		}

	}
}

/**
 * @hidden 
 */
export class ColumnSeriesView extends AnchoredCategorySeriesView {
	static $t: Type = markType(ColumnSeriesView, 'ColumnSeriesView', (<any>AnchoredCategorySeriesView).$type);
	onInit(): void {
		super.onInit();
		this.visibleColumns = new List$1<Rectangle>((<any>Rectangle).$type, 0);
		if (!this.isThumbnailView) {
			this.model.resolution = 4;
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	private _columnModel: ColumnSeries = null;
	protected get columnModel(): ColumnSeries {
		return this._columnModel;
	}
	protected set columnModel(value: ColumnSeries) {
		this._columnModel = value;
	}
	constructor(model: ColumnSeries) {
		super(model);
		this.columnModel = model;
		this.columns = ((() => {
			let $ret = new Pool$1<Rectangle>((<any>Rectangle).$type);
			$ret.create = runOn(this, this.columnCreate);
			$ret.activate = runOn(this, this.columnActivate);
			$ret.disactivate = runOn(this, this.columnDisactivate);
			$ret.destroy = runOn(this, this.columnDestroy);
			return $ret;
		})());
	}
	columnCreate(): Rectangle {
		let column: Rectangle = new Rectangle();
		this.visibleColumns.add(column);
		column._visibility = Visibility.Collapsed;
		return column;
	}
	private _visibleColumns: List$1<Rectangle> = null;
	protected get visibleColumns(): List$1<Rectangle> {
		return this._visibleColumns;
	}
	protected set visibleColumns(value: List$1<Rectangle>) {
		this._visibleColumns = value;
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
	private _columns: Pool$1<Rectangle> = null;
	get columns(): Pool$1<Rectangle> {
		return this._columns;
	}
	set columns(value: Pool$1<Rectangle>) {
		this._columns = value;
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


