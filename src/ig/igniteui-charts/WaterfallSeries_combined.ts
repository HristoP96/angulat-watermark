/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { Brush } from "igniteui-core/Brush";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { SeriesView } from "./SeriesView";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { Type, Base, Point, ICollection$1, ICollection$1_$type, Number_$type, runOn, markType, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Series } from "./Series";
import { MarkerSeries } from "./MarkerSeries";
import { Rect } from "igniteui-core/Rect";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Rectangle } from "igniteui-core/Rectangle";
import { Axis } from "./Axis";
import { ArrayExtension } from "igniteui-core/ArrayExtension";
import { CategoryTransitionInMode } from "./CategoryTransitionInMode";
import { CategoryFrame } from "./CategoryFrame";
import { CategorySeriesView } from "./CategorySeriesView";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { List$1 } from "igniteui-core/List$1";
import { ScalerParams } from "./ScalerParams";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { CategorySeries } from "./CategorySeries";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_ } from "igniteui-core/number";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class WaterfallSeries extends HorizontalAnchoredCategorySeries {
	static $t: Type = markType(WaterfallSeries, 'WaterfallSeries', (<any>HorizontalAnchoredCategorySeries).$type);
	protected createView(): SeriesView {
		return new WaterfallSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.waterfallView = <WaterfallSeriesView>view;
	}
	private _waterfallView: WaterfallSeriesView;
	get waterfallView(): WaterfallSeriesView {
		return this._waterfallView;
	}
	set waterfallView(value: WaterfallSeriesView) {
		this._waterfallView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>WaterfallSeries).$type;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode2;
	}
	protected get_isNegativeColorSupported(): boolean {
		return true;
	}
	setNegativeColors(negativeBrush: Brush, negativeOutline: Brush): void {
		super.setNegativeColors(negativeBrush, negativeOutline);
		this.negativeBrush = negativeBrush;
		this.negativeOutline = negativeOutline;
	}
	get negativeBrush(): Brush {
		return <Brush>this.getValue(WaterfallSeries.negativeBrushProperty);
	}
	set negativeBrush(value: Brush) {
		this.setValue(WaterfallSeries.negativeBrushProperty, value);
	}
	static readonly negativeBrushPropertyName: string = "NegativeBrush";
	resolveNegativeBrush(): Brush {
		return this.negativeBrush;
	}
	static readonly negativeBrushProperty: DependencyProperty = DependencyProperty.register(WaterfallSeries.negativeBrushPropertyName, (<any>Brush).$type, (<any>WaterfallSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<WaterfallSeries>sender).raisePropertyChanged(WaterfallSeries.negativeBrushPropertyName, e.oldValue, e.newValue)));
	get radiusX(): number {
		return <number>this.getValue(WaterfallSeries.radiusXProperty);
	}
	set radiusX(value: number) {
		this.setValue(WaterfallSeries.radiusXProperty, value);
	}
	static readonly radiusXPropertyName: string = "RadiusX";
	static readonly radiusXProperty: DependencyProperty = DependencyProperty.register(WaterfallSeries.radiusXPropertyName, Number_$type, (<any>WaterfallSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<WaterfallSeries>sender).raisePropertyChanged(WaterfallSeries.radiusXPropertyName, e.oldValue, e.newValue)));
	get radiusY(): number {
		return <number>this.getValue(WaterfallSeries.radiusYProperty);
	}
	set radiusY(value: number) {
		this.setValue(WaterfallSeries.radiusYProperty, value);
	}
	static readonly radiusYPropertyName: string = "RadiusY";
	static readonly radiusYProperty: DependencyProperty = DependencyProperty.register(WaterfallSeries.radiusYPropertyName, Number_$type, (<any>WaterfallSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<WaterfallSeries>sender).raisePropertyChanged(WaterfallSeries.radiusYPropertyName, e.oldValue, e.newValue)));
	protected get_hasIndividualElements(): boolean {
		return true;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case WaterfallSeries.radiusYPropertyName:

			case WaterfallSeries.radiusXPropertyName:

			case WaterfallSeries.negativeBrushPropertyName:

			case WaterfallSeries.negativeOutlinePropertyName:
			this.renderSeries(false);
			break;

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
	getSeriesValueBoundingBox(world: Point): Rect {
		if (this.waterfallView == null || this.waterfallView.columns == null || this.waterfallView.columns.count == 0 || this.xAxis == null) {
			return Rect.empty;
		}
		let columns = this.waterfallView.columns;
		let pos = this.fromWorldPosition(world);
		let index: number = -1;
		let isInverted: boolean = this.xAxis.isInverted;
		let maxPosition = this.viewport.right * 2;
		if (isInverted) {
			index = ArrayExtension.binarySearch$1<Rectangle>((<any>Rectangle).$type, columns, (item: Rectangle) => {
				let box = this.waterfallView.getColumnBoundingBoxFromColumn(item);
				return (maxPosition - pos.x) < (maxPosition - (box.left + box.width / 2)) ? -1 : ((maxPosition - pos.x) > (maxPosition - (box.left + box.width / 2)) ? 1 : 0);
			});
		} else {
			index = ArrayExtension.binarySearch$1<Rectangle>((<any>Rectangle).$type, columns, (item: Rectangle) => {
				let box = this.waterfallView.getColumnBoundingBoxFromColumn(item);
				return pos.x < (box.left + box.width / 2) ? -1 : (pos.x > (box.left + box.width / 2) ? 1 : 0);
			});
		}
		if (index < 0) {
			index = ~index;
			index--;
		}
		if (index < 0) {
			index = 0;
		}
		if (index > columns.count - 1) {
			index = columns.count - 1;
		}
		let prevIndex: number = index;
		let nextIndex: number = index;
		if (prevIndex < 0) {
			prevIndex--;
		}
		if (nextIndex < columns.count - 1) {
			nextIndex++;
		}
		let prevBox = this.getColumnBoundingBox(prevIndex);
		let currBox = this.getColumnBoundingBox(index);
		let nextBox = this.getColumnBoundingBox(nextIndex);
		let prevX = prevBox.left + prevBox.width / 2;
		let currX = currBox.left + currBox.width / 2;
		let nextX = nextBox.left + nextBox.width / 2;
		let distPrev = Math.abs(prevX - pos.x);
		let distCurr = Math.abs(currX - pos.x);
		let distNext = Math.abs(nextX - pos.x);
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
			return prevBox;
		}
		if (distNext <= distCurr && distNext <= distPrev) {
			if (isInverted && currContains) {
				return currBox;
			}
			return nextBox;
		}
		return Rect.empty;
	}
	private getColumnBoundingBox(index: number): Rect {
		return this.waterfallView.getColumnBoundingBox(index);
	}
	protected getDefaultTransitionInMode(): CategoryTransitionInMode {
		return CategoryTransitionInMode.FromZero;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		this.waterfallView.columns.count = 0;
	}
	getItemSpan(): number {
		return this.cachedXAxis.getGroupSize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		let waterfallView: WaterfallSeriesView = <WaterfallSeriesView>view;
		super.renderFrame(frame, view);
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let groupWidth: number = this.cachedXAxis.getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		let radiusX: number = this.radiusX;
		let radiusY: number = this.radiusY;
		let left: number;
		let zeroVal: number = this.getWorldZeroValue(view);
		let lastKnownValue: number = NaN;
		let columns = waterfallView.columns;
		let currentRectangle: Rectangle;
		let columnCount: number = 0;
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
		let valueCount: number = this.valueColumn.count;
		let buckets = frame.buckets;
		let xAxis = this.cachedXAxis;
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.cachedXAxis.isInverted, effectiveViewportRect);
		let positiveBrush = this.actualBrush;
		let negativeBrush = this.negativeBrush;
		let actualOutline = this.actualOutline;
		let negativeOutline = this.negativeOutline || actualOutline;
		if (frame.buckets.count > 0) {
			left = frame.buckets._inner[0][0] - 0.5 * groupWidth;
			let currentValue: number = frame.buckets._inner[0][1];
			if (!isNaN_(currentValue)) {
				if (currentValue > zeroVal) {
					currentRectangle = columns.item(columnCount);
					columnCount++;
					waterfallView.positionRectangle(currentRectangle, left, zeroVal);
					currentRectangle.width = groupWidth;
					currentRectangle.height = Math.abs(zeroVal - currentValue);
					this.renderManager.initialRenderFill = negativeBrush;
					this.renderManager.actualRenderFill = negativeBrush;
					this.renderManager.initialRenderOutline = negativeOutline;
					this.renderManager.actualRenderOutline = negativeOutline;
					this.renderManager.actualNegativeShape = true;
					if (areStylesOverriden) {
						this.performCategoryStyleOverride(buckets, 0, valueCount, xAxis, xParams, view.isThumbnailView);
					}
					this.renderManager.setCategoryShapeAppearance(currentRectangle, false, false, false, false);
					currentRectangle.radiusX = this.renderManager.actualRenderRadiusX;
					currentRectangle.radiusY = this.renderManager.actualRenderRadiusY;
				} else {
					currentRectangle = columns.item(columnCount);
					columnCount++;
					waterfallView.positionRectangle(currentRectangle, left, currentValue);
					currentRectangle.width = groupWidth;
					currentRectangle.height = Math.abs(currentValue - zeroVal);
					this.renderManager.initialRenderFill = positiveBrush;
					this.renderManager.actualRenderFill = positiveBrush;
					this.renderManager.initialRenderOutline = actualOutline;
					this.renderManager.actualRenderOutline = actualOutline;
					this.renderManager.actualNegativeShape = false;
					if (areStylesOverriden) {
						this.performCategoryStyleOverride(buckets, 0, valueCount, xAxis, xParams, view.isThumbnailView);
					}
					this.renderManager.setCategoryShapeAppearance(currentRectangle, false, false, false, false);
					currentRectangle.radiusX = this.renderManager.actualRenderRadiusX;
					currentRectangle.radiusY = this.renderManager.actualRenderRadiusY;
				}
				lastKnownValue = currentValue;
			} else {
				lastKnownValue = zeroVal;
			}
		}
		for (let i: number = 1; i < frame.buckets.count; ++i) {
			let bucket1: number[] = frame.buckets._inner[i];
			left = frame.buckets._inner[i][0] - 0.5 * groupWidth;
			let currentValue1: number = bucket1[1];
			if (!isNaN_(currentValue1)) {
				currentRectangle = columns.item(columnCount);
				columnCount++;
				waterfallView.positionRectangle(currentRectangle, left, Math.min(lastKnownValue, currentValue1));
				currentRectangle.width = groupWidth;
				currentRectangle.height = Math.abs(lastKnownValue - currentValue1);
				this.renderManager.initialRenderFill = positiveBrush;
				this.renderManager.actualRenderFill = positiveBrush;
				this.renderManager.initialRenderOutline = actualOutline;
				this.renderManager.actualRenderOutline = actualOutline;
				this.renderManager.actualNegativeShape = false;
				if (lastKnownValue > currentValue1) {
					if (areStylesOverriden) {
						this.performCategoryStyleOverride(buckets, i, valueCount, xAxis, xParams, view.isThumbnailView);
					}
				} else {
					this.renderManager.initialRenderFill = negativeBrush;
					this.renderManager.actualRenderFill = negativeBrush;
					this.renderManager.initialRenderOutline = negativeOutline;
					this.renderManager.actualRenderOutline = negativeOutline;
					this.renderManager.actualNegativeShape = true;
					if (areStylesOverriden) {
						this.performCategoryStyleOverride(buckets, i, valueCount, xAxis, xParams, view.isThumbnailView);
					}
				}
				this.renderManager.setCategoryShapeAppearance(currentRectangle, false, false, false, false);
				currentRectangle.radiusX = this.renderManager.actualRenderRadiusX;
				currentRectangle.radiusY = this.renderManager.actualRenderRadiusY;
				lastKnownValue = currentValue1;
			}
		}
		columns.count = columnCount;
		view.updateFrameVersion(frame);
	}
	private static readonly negativeOutlinePropertyName: string = "NegativeOutline";
	static readonly negativeOutlineProperty: DependencyProperty = DependencyProperty.register(WaterfallSeries.negativeOutlinePropertyName, (<any>Brush).$type, (<any>WaterfallSeries).$type, new PropertyMetadata(2, null, (oo: DependencyObject, ee: DependencyPropertyChangedEventArgs) => (<WaterfallSeries>oo).raisePropertyChanged(WaterfallSeries.negativeOutlinePropertyName, ee.oldValue, ee.newValue)));
	get negativeOutline(): Brush {
		return <Brush>this.getValue(WaterfallSeries.negativeOutlineProperty);
	}
	set negativeOutline(value: Brush) {
		this.setValue(WaterfallSeries.negativeOutlineProperty, value);
	}
}

/**
 * @hidden 
 */
export class WaterfallSeriesView extends AnchoredCategorySeriesView {
	static $t: Type = markType(WaterfallSeriesView, 'WaterfallSeriesView', (<any>AnchoredCategorySeriesView).$type);
	onInit(): void {
		super.onInit();
		this.visibleColumns = new List$1<Rectangle>((<any>Rectangle).$type, 0);
		if (!this.isThumbnailView) {
			this.model.resolution = 4;
			this.waterfallModel.negativeBrush = ((() => {
				let $ret = new Brush();
				$ret.fill = "#C62828";
				return $ret;
			})());
			this.waterfallModel.negativeOutline = ((() => {
				let $ret = new Brush();
				$ret.fill = "#C62828";
				return $ret;
			})());
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.PositiveNegative;
		}
	}
	private _waterfallModel: WaterfallSeries = null;
	protected get waterfallModel(): WaterfallSeries {
		return this._waterfallModel;
	}
	protected set waterfallModel(value: WaterfallSeries) {
		this._waterfallModel = value;
	}
	constructor(model: WaterfallSeries) {
		super(model);
		this.waterfallModel = model;
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
		let dirty: boolean = false;
		if (column.canvasTop != top) {
			dirty = true;
			column.canvasTop = top;
		}
		if (column.canvasLeft != left) {
			dirty = true;
			column.canvasLeft = left;
		}
		if (dirty) {
			this.makeDirty();
		}
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
			let posNeg = "Negative";
			if (column1._fill == this.model.actualBrush) {
				posNeg = "Positive";
			}
			this.model.seriesVisualDataManager.exportRectangleData(svd, column1, "column" + i, <string[]>[ "Main", posNeg ]);
		}
		i++;
	}
	getColumnBoundingBox(index: number): Rect {
		let rect: Rectangle = this.columns.item(index);
		return new Rect(0, rect.canvasLeft, rect.canvasTop, rect.width, rect.height);
	}
	getColumnBoundingBoxFromColumn(rect: Rectangle): Rect {
		return new Rect(0, rect.canvasLeft, rect.canvasTop, rect.width, rect.height);
	}
}


