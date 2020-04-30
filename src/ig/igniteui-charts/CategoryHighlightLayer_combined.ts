/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnnotationLayer } from "./AnnotationLayer";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { CategoryHighlightLayerFrame } from "./CategoryHighlightLayerFrame";
import { Series } from "./Series";
import { Type, IEnumerator$1, IEnumerator$1_$type, Point, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Base, IEnumerable$1, IEnumerable$1_$type, Boolean_$type, Number_$type, typeCast, fromEnum, Point_$type, markType, PointUtil, runOn } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "./SeriesView";
import { Axis } from "./Axis";
import { ContentInfo } from "./ContentInfo";
import { Frame } from "./Frame";
import { XamDataChart } from "./XamDataChart";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { CategoryHighlightFrameRect } from "./CategoryHighlightFrameRect";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Rectangle } from "igniteui-core/Rectangle";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Shape } from "igniteui-core/Shape";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { Visibility } from "igniteui-core/Visibility";
import { isNaN_, truncate } from "igniteui-core/number";
import { AnnotationLayerView } from "./AnnotationLayerView";
import { Brush } from "igniteui-core/Brush";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { LinearGradientBrush } from "igniteui-core/LinearGradientBrush";
import { GradientStop } from "igniteui-core/GradientStop";
import { Color } from "igniteui-core/Color";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";

/**
 * @hidden 
 */
export class CategoryHighlightLayer extends AnnotationLayer {
	static $t: Type = markType(CategoryHighlightLayer, 'CategoryHighlightLayer', (<any>AnnotationLayer).$type);
	constructor() {
		super();
		let previousFrame = new CategoryHighlightLayerFrame();
		let currentFrame = new CategoryHighlightLayerFrame();
		let transitionFrame = new CategoryHighlightLayerFrame();
		let animationRate: number = this.transitionDuration / 1000;
		this.previousFrame = previousFrame;
		this.currentFrame = currentFrame;
		this.transitionFrame = transitionFrame;
		this.defaultStyleKey = (<any>CategoryHighlightLayer).$type;
	}
	protected createView(): SeriesView {
		return new CategoryHighlightLayerView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.highlightView = <CategoryHighlightLayerView>view;
	}
	private _highlightView: CategoryHighlightLayerView;
	protected get highlightView(): CategoryHighlightLayerView {
		return this._highlightView;
	}
	protected set highlightView(value: CategoryHighlightLayerView) {
		this._highlightView = value;
	}
	get targetAxis(): CategoryAxisBase {
		return <CategoryAxisBase>this.getValue(CategoryHighlightLayer.targetAxisProperty);
	}
	set targetAxis(value: CategoryAxisBase) {
		this.setValue(CategoryHighlightLayer.targetAxisProperty, value);
	}
	static readonly targetAxisPropertyName: string = "TargetAxis";
	static readonly targetAxisProperty: DependencyProperty = DependencyProperty.register(CategoryHighlightLayer.targetAxisPropertyName, (<any>CategoryAxisBase).$type, (<any>CategoryHighlightLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryHighlightLayer>sender).raisePropertyChanged(CategoryHighlightLayer.targetAxisPropertyName, e.oldValue, e.newValue)));
	get useInterpolation(): boolean {
		return <boolean>this.getValue(CategoryHighlightLayer.useInterpolationProperty);
	}
	set useInterpolation(value: boolean) {
		this.setValue(CategoryHighlightLayer.useInterpolationProperty, value);
	}
	static readonly useInterpolationPropertyName: string = "UseInterpolation";
	static readonly useInterpolationProperty: DependencyProperty = DependencyProperty.register(CategoryHighlightLayer.useInterpolationPropertyName, Boolean_$type, (<any>CategoryHighlightLayer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryHighlightLayer>sender).raisePropertyChanged(CategoryHighlightLayer.useInterpolationPropertyName, e.oldValue, e.newValue)));
	get bandHighlightWidth(): number {
		return <number>this.getValue(CategoryHighlightLayer.bandHighlightWidthProperty);
	}
	set bandHighlightWidth(value: number) {
		this.setValue(CategoryHighlightLayer.bandHighlightWidthProperty, value);
	}
	static readonly bandHighlightWidthPropertyName: string = "BAndHighlightWidth";
	static readonly bandHighlightWidthProperty: DependencyProperty = DependencyProperty.register(CategoryHighlightLayer.bandHighlightWidthPropertyName, Number_$type, (<any>CategoryHighlightLayer).$type, new PropertyMetadata(2, 10, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryHighlightLayer>sender).raisePropertyChanged(CategoryHighlightLayer.bandHighlightWidthPropertyName, e.oldValue, e.newValue)));
	protected onDependentAxisRender(axis: Axis, animate: boolean): void {
		if (this.targetAxis == null || this.targetAxis == axis) {
			if (!this.contentInfo.isDirty) {
				this.renderSeries(animate);
			}
		}
	}
	private isAxisValid(axis: CategoryAxisBase): boolean {
		return axis != null && axis.isValid();
	}
	protected prepareFrame(frame: Frame, view: SeriesView): void {
		super.prepareFrame(frame, view);
		let f = <CategoryHighlightLayerFrame>frame;
		f.rects.clear();
		let useInterpolation = this.useInterpolation;
		if (isNaN_(this.currentPosition.x) && isNaN_(this.currentPosition.y)) {
			return;
		}
		if (this.targetAxis != null) {
			if (this.isAxisValid(this.targetAxis)) {
				this.prepareSeries(this.targetAxis, f, useInterpolation);
			}
		} else {
			if (typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer) !== null) {
				let chart = <XamDataChart>this.seriesViewer;
				for (let axis of fromEnum<Axis>(chart.axes)) {
					if (typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, axis) !== null && this.isAxisValid(<CategoryAxisBase>axis)) {
						this.prepareSeries(<CategoryAxisBase>axis, f, useInterpolation);
					}
				}
			}
		}
	}
	private prepareSeries(axis: CategoryAxisBase, f: CategoryHighlightLayerFrame, useInterpolation: boolean): void {
		if (this.view == null || this.view.windowRect.isEmpty || this.view.viewport.isEmpty) {
			return;
		}
		let xPos = this.currentPosition.x;
		if (axis.isVertical && isNaN_(xPos)) {
			xPos = 0;
		}
		xPos = this.view.viewport.left + this.view.viewport.width * (xPos - this.view.windowRect.left) / this.view.windowRect.width;
		let yPos = this.currentPosition.y;
		if (!axis.isVertical && isNaN_(yPos)) {
			yPos = 0;
		}
		yPos = this.view.viewport.top + this.view.viewport.height * (yPos - this.view.windowRect.top) / this.view.windowRect.height;
		let rect = axis.getCategoryBoundingBox(<Point>{ $type: Point_$type, x: xPos, y: yPos }, useInterpolation, this.bandHighlightWidth);
		this.prepareRect(rect, f, axis);
	}
	prepareRect(rect: Rect, frame: CategoryHighlightLayerFrame, target: Axis): void {
		let n: CategoryHighlightFrameRect = new CategoryHighlightFrameRect();
		n.left = rect.left;
		n.top = rect.top;
		n.right = rect.right;
		n.bottom = rect.bottom;
		n.brush = this.getBrush();
		n.outline = this.getOutline();
		if (n.brush == null) {
			n.brush = this.highlightView.getLightenedTranslucentBrush(target.actualStroke);
		}
		if (n.outline == null) {
			n.outline = this.highlightView.getLightenedTranslucentBrush(target.actualStroke);
		}
		n.strokeThickness = this.thickness;
		n.timeStamp = Base.getHashCodeStatic(target);
		if (!rect.isEmpty) {
			frame.rects.addItem(n.timeStamp, n);
		}
	}
	protected renderFrame(frame: Frame, view: SeriesView): void {
		super.renderFrame(frame, view);
		let rectPool = this.highlightView.rectPool;
		let f = <CategoryHighlightLayerFrame>frame;
		let i: number = 0;
		for (let rect of fromEnum<CategoryHighlightFrameRect>(f.rects.values)) {
			let rectVisual = rectPool.item(i);
			this.renderRect(rect, rectVisual);
			i++;
		}
		rectPool.count = i;
	}
	protected requiresPrepare(): boolean {
		return true;
	}
	renderRect(rect: CategoryHighlightFrameRect, rectVisual: Rectangle): void {
		if (isNaN_(rect.left) || isNaN_(rect.top) || isNaN_(rect.bottom) || isNaN_(rect.right) || isNaN_(rect.strokeThickness)) {
			rectVisual._visibility = Visibility.Collapsed;
			return;
		}
		this.highlightView.positionRectangle(rectVisual, rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top);
		rectVisual._fill = rect.brush;
		rectVisual._stroke = rect.outline;
		rectVisual.strokeThickness = rect.strokeThickness;
		if (this.dashArray != null) {
			rectVisual.strokeDashArray = this.dashArray;
		} else {
			rectVisual.strokeDashArray = null;
		}
		rectVisual.strokeDashCap = <number>this.dashCap;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CategoryHighlightLayer.targetAxisPropertyName:
			this.renderSeries(true);
			break;

			case CategoryHighlightLayer.useInterpolationPropertyName:
			this.renderSeries(true);
			break;

		}

	}
}

/**
 * @hidden 
 */
export class CategoryHighlightLayerView extends AnnotationLayerView {
	static $t: Type = markType(CategoryHighlightLayerView, 'CategoryHighlightLayerView', (<any>AnnotationLayerView).$type);
	constructor(model: CategoryHighlightLayer) {
		super(model);
		this.highlightModel = model;
		this.visibleRects = new List$1<Rectangle>((<any>Rectangle).$type, 0);
	}
	private _highlightModel: CategoryHighlightLayer = null;
	protected get highlightModel(): CategoryHighlightLayer {
		return this._highlightModel;
	}
	protected set highlightModel(value: CategoryHighlightLayer) {
		this._highlightModel = value;
	}
	private _rectPool: Pool$1<Rectangle> = null;
	get rectPool(): Pool$1<Rectangle> {
		return this._rectPool;
	}
	set rectPool(value: Pool$1<Rectangle>) {
		this._rectPool = value;
	}
	onInit(): void {
		super.onInit();
		this.rectPool = ((() => {
			let $ret = new Pool$1<Rectangle>((<any>Rectangle).$type);
			$ret.create = runOn(this, this.rectCreate);
			$ret.activate = runOn(this, this.rectActivate);
			$ret.disactivate = runOn(this, this.rectDisactivate);
			$ret.destroy = runOn(this, this.rectDestroy);
			return $ret;
		})());
	}
	private _visibleRects: List$1<Rectangle> = null;
	protected get visibleRects(): List$1<Rectangle> {
		return this._visibleRects;
	}
	protected set visibleRects(value: List$1<Rectangle>) {
		this._visibleRects = value;
	}
	private rectCreate(): Rectangle {
		let line: Rectangle = new Rectangle();
		line.isHitTestVisible = false;
		this.visibleRects.add(line);
		return line;
	}
	private rectActivate(rect: Rectangle): void {
		rect._visibility = Visibility.Visible;
	}
	private rectDisactivate(rect: Rectangle): void {
		rect._visibility = Visibility.Collapsed;
	}
	private rectDestroy(rect: Rectangle): void {
		this.visibleRects.remove(rect);
	}
	getLightenedBrush(brush: Brush): Brush {
		if (brush == null) {
			return brush;
		}
		return BrushUtil.getLightened(brush, 0.1);
	}
	getLightenedTranslucentBrush(brush: Brush): Brush {
		if (brush != null) {
			let b = BrushUtil.getLightened(brush, 0.3);
			if (b.isGradient) {
				let grad = <LinearGradientBrush>b;
				if (grad.gradientStops != null) {
					for (let i = 0; i < grad.gradientStops.length; i++) {
						let stop = grad.gradientStops[i];
						stop.color = Color.fromArgb(<number>truncate(Math.round(<number>(stop.color.a) * 0.2)), stop.color.r, stop.color.g, stop.color.b);
						stop.color = stop.color;
					}
				}
			} else {
				b.color = Color.fromArgb(<number>truncate(Math.round(<number>(b.color.a) * 0.2)), b.color.r, b.color.g, b.color.b);
				b.color = b.color;
			}
			return b;
		} else {
			return null;
		}
	}
	positionRectangle(rectVisual: Rectangle, left: number, top: number, width: number, height: number): void {
		rectVisual._visibility = Visibility.Visible;
		rectVisual.canvasLeft = left;
		rectVisual.canvasTop = top;
		rectVisual.width = width;
		rectVisual.height = height;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender && !isHitContext) {
			for (let i = 0; i < this.visibleRects.count; i++) {
				let rect = this.visibleRects._inner[i];
				if (rect._visibility == Visibility.Visible) {
					context.renderRectangle(rect);
				}
			}
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		for (let i = 0; i < this.visibleRects.count; i++) {
			this.model.seriesVisualDataManager.exportRectangleData(svd, this.visibleRects._inner[i], "cihRect", <string[]>[ "Main", "CategoryItem" ]);
		}
	}
}


