/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnnotationLayer } from "./AnnotationLayer";
import { Axis } from "./Axis";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { CategoryTooltipLayerPosition, CategoryTooltipLayerPosition_$type } from "./CategoryTooltipLayerPosition";
import { CategoryToolTipLayerFrame } from "./CategoryToolTipLayerFrame";
import { Type, Base, IEnumerator$1, IEnumerator$1_$type, Point, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Boolean_$type, enumGetBox, EnumUtil, typeCast, fromEnum, Point_$type, markType, PointUtil, String_$type } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "./SeriesView";
import { Series } from "./Series";
import { ContentInfo } from "./ContentInfo";
import { Frame } from "./Frame";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { CategoryTooltipSeriesInfo } from "./CategoryTooltipSeriesInfo";
import { XamDataChart } from "./XamDataChart";
import { List$1 } from "igniteui-core/List$1";
import { DataContext } from "igniteui-core/DataContext";
import { IHasCategoryAxis } from "./IHasCategoryAxis";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { Rect } from "igniteui-core/Rect";
import { Size } from "igniteui-core/Size";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_ } from "igniteui-core/number";
import { AnnotationLayerView } from "./AnnotationLayerView";
import { PointerTooltip } from "./PointerTooltip";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { SeriesViewer } from "./SeriesViewer";
import { SeriesViewerView } from "./SeriesViewerView";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { ContentControl } from "igniteui-core/ContentControl";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { PointerTooltipStyle } from "./PointerTooltipStyle";
import { SeriesViewerViewManager } from "./SeriesViewerViewManager";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class CategoryToolTipLayer extends AnnotationLayer {
	static $t: Type = markType(CategoryToolTipLayer, 'CategoryToolTipLayer', (<any>AnnotationLayer).$type);
	constructor() {
		super();
		let previousFrame = new CategoryToolTipLayerFrame();
		let currentFrame = new CategoryToolTipLayerFrame();
		let transitionFrame = new CategoryToolTipLayerFrame();
		this.previousFrame = previousFrame;
		this.currentFrame = currentFrame;
		this.transitionFrame = transitionFrame;
		this.defaultStyleKey = (<any>CategoryToolTipLayer).$type;
	}
	protected createView(): SeriesView {
		return new CategoryToolTipLayerView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.categoryToolTipView = <CategoryToolTipLayerView>view;
	}
	private _categoryToolTipView: CategoryToolTipLayerView;
	protected get categoryToolTipView(): CategoryToolTipLayerView {
		return this._categoryToolTipView;
	}
	protected set categoryToolTipView(value: CategoryToolTipLayerView) {
		this._categoryToolTipView = value;
	}
	protected get_isDefaultTooltipBehaviorDisabled(): boolean {
		return true;
	}
	get targetAxis(): Axis {
		return <Axis>this.getValue(CategoryToolTipLayer.targetAxisProperty);
	}
	set targetAxis(value: Axis) {
		this.setValue(CategoryToolTipLayer.targetAxisProperty, value);
	}
	static readonly targetAxisPropertyName: string = "TargetAxis";
	static readonly targetAxisProperty: DependencyProperty = DependencyProperty.register(CategoryToolTipLayer.targetAxisPropertyName, (<any>Axis).$type, (<any>CategoryToolTipLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryToolTipLayer>sender).raisePropertyChanged(CategoryToolTipLayer.targetAxisPropertyName, e.oldValue, e.newValue)));
	get useInterpolation(): boolean {
		return <boolean>this.getValue(CategoryToolTipLayer.useInterpolationProperty);
	}
	set useInterpolation(value: boolean) {
		this.setValue(CategoryToolTipLayer.useInterpolationProperty, value);
	}
	static readonly useInterpolationPropertyName: string = "UseInterpolation";
	static readonly useInterpolationProperty: DependencyProperty = DependencyProperty.register(CategoryToolTipLayer.useInterpolationPropertyName, Boolean_$type, (<any>CategoryToolTipLayer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryToolTipLayer>sender).raisePropertyChanged(CategoryToolTipLayer.useInterpolationPropertyName, e.oldValue, e.newValue)));
	get toolTipPosition(): CategoryTooltipLayerPosition {
		return EnumUtil.getEnumValue<CategoryTooltipLayerPosition>(CategoryTooltipLayerPosition_$type, this.getValue(CategoryToolTipLayer.toolTipPositionProperty));
	}
	set toolTipPosition(value: CategoryTooltipLayerPosition) {
		this.setValue(CategoryToolTipLayer.toolTipPositionProperty, enumGetBox<CategoryTooltipLayerPosition>(CategoryTooltipLayerPosition_$type, value));
	}
	static readonly toolTipPositionPropertyName: string = "ToolTipPosition";
	static readonly toolTipPositionProperty: DependencyProperty = DependencyProperty.register(CategoryToolTipLayer.toolTipPositionPropertyName, CategoryTooltipLayerPosition_$type, (<any>CategoryToolTipLayer).$type, new PropertyMetadata(2, enumGetBox<CategoryTooltipLayerPosition>(CategoryTooltipLayerPosition_$type, CategoryTooltipLayerPosition.Auto), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CategoryToolTipLayer>((<any>CategoryToolTipLayer).$type, sender)).raisePropertyChanged(CategoryToolTipLayer.toolTipPositionPropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CategoryToolTipLayer.targetAxisPropertyName:
			this.renderSeries(true);
			break;

			case CategoryToolTipLayer.useInterpolationPropertyName:
			this.renderSeries(true);
			break;

			case CategoryToolTipLayer.toolTipPositionPropertyName:
			this.renderSeries(true);
			break;

			case Series.seriesViewerPropertyName:
			this.categoryToolTipView.onSeriesViewerChanged();
			break;

		}

	}
	protected onDependentAxisRender(axis: Axis, animate: boolean): void {
		if (this.targetAxis == axis) {
			if (!this.contentInfo.isDirty) {
				this.renderSeries(animate);
			}
		}
	}
	protected onDependentSeriesRender(series: Series, animate: boolean): void {
		if (!this.contentInfo.isDirty) {
			this.renderSeries(animate);
		}
	}
	protected prepareFrame(frame: Frame, view: SeriesView): void {
		super.prepareFrame(frame, view);
		let f = <CategoryToolTipLayerFrame>frame;
		let useInterpolation = this.useInterpolation;
		f.tooltipYCoord = NaN;
		f.tooltipXCoord = NaN;
		f.pointerPositionXCoord = NaN;
		f.pointerPositionYCoord = NaN;
		f.tooltipXCoord = NaN;
		f.tooltipYCoord = NaN;
		if (isNaN_(this.currentPosition.x) && isNaN_(this.currentPosition.y)) {
			this.categoryToolTipView.hideContainer(this.categoryToolTipView.getContainer());
			return;
		}
		if (this.targetAxis != null) {
			let axis = this.targetAxis;
			if (axis == null || !axis.isCategory || axis.isAngular) {
				return;
			}
			if (!axis.isValid()) {
				return;
			}
			let catAxis = <CategoryAxisBase>axis;
			let seriesInfo = this.getSeriesInfo(catAxis.series, useInterpolation);
			this.prepareSeries(seriesInfo, f, useInterpolation);
		} else {
			if (typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer) !== null) {
				let chart = <XamDataChart>this.seriesViewer;
				let first: boolean = true;
				let processVertical: boolean = false;
				let processSeries = new List$1<Series>((<any>Series).$type, 0);
				for (let axis1 of fromEnum<Axis>(chart.axes)) {
					if (axis1.isCategory && !axis1.isAngular) {
						if (!axis1.isValid()) {
							continue;
						}
						if (first) {
							first = false;
							processVertical = axis1.isVertical;
						} else {
							if (axis1.isVertical != processVertical) {
								continue;
							}
						}
						for (let series of fromEnum<Series>(axis1.series)) {
							processSeries.add(series);
						}
					}
				}
				let seriesInfo1 = this.getSeriesInfo(processSeries, useInterpolation);
				this.prepareSeries(seriesInfo1, f, useInterpolation);
			}
		}
	}
	private getSeriesInfo(series: IList$1<Series>, useInterpolation: boolean): CategoryTooltipSeriesInfo {
		let minPos = 1.7976931348623157E+308;
		let maxPos = -1.7976931348623157E+308;
		let contexts: List$1<DataContext> = new List$1<DataContext>((<any>DataContext).$type, 0);
		let tooltipObjects: List$1<any> = new List$1<any>((<any>Base).$type, 0);
		let isVertical = false;
		let first: boolean = true;
		for (let i = 0; i < series.count; i++) {
			let currSeries = series.item(i);
			if (!currSeries.isFinancial && !currSeries.isCategory) {
				continue;
			}
			if (currSeries.isStacked) {
				continue;
			}
			let catSeries = <IHasCategoryAxis><any>currSeries;
			if (!catSeries.categoryAxis.isValid()) {
				continue;
			}
			if (first) {
				isVertical = currSeries.isVertical;
			} else {
				if (isVertical != currSeries.isVertical) {
					continue;
				}
			}
			let res = this.getCategoryPosition(currSeries);
			if (!res.item1) {
				continue;
			}
			let pos = currSeries.getSeriesValuePosition(res.item2, useInterpolation, false);
			if (isVertical) {
				if (!isNaN_(pos.y)) {
					minPos = Math.min(minPos, pos.y);
					maxPos = Math.max(maxPos, pos.y);
				}
			} else {
				if (!isNaN_(pos.x)) {
					minPos = Math.min(minPos, pos.x);
					maxPos = Math.max(maxPos, pos.x);
				}
			}
			let obj = this.getTooltipObject(currSeries);
			if (obj == null) {
				continue;
			}
			let context: DataContext = null;
			let item = currSeries.getItem(this.currentPosition);
			if (currSeries.isDefaultToolTipSelected && item != null) {
				context = currSeries.getTooltipContext(item);
			} else {
				context = new DataContext();
				context.item = item;
				context.series = currSeries;
			}
			contexts.add(context);
			tooltipObjects.add1(obj);
		}
		let posX: number = 0;
		let posY: number = 0;
		if (isVertical) {
			posY = (minPos + maxPos) / 2;
			posX = this.viewport.right;
			if (this.toolTipPosition == CategoryTooltipLayerPosition.InsideStart || this.toolTipPosition == CategoryTooltipLayerPosition.OutsideStart) {
				posX = this.viewport.left;
			}
			if (posY < 0 || posY > this.viewport.bottom) {
				posY = NaN;
			}
		} else {
			posX = (minPos + maxPos) / 2;
			posY = this.viewport.top;
			if (this.toolTipPosition == CategoryTooltipLayerPosition.InsideStart || this.toolTipPosition == CategoryTooltipLayerPosition.OutsideStart) {
				posY = this.viewport.bottom;
			}
			if (posX < 0 || posX > this.viewport.right) {
				posX = NaN;
			}
		}
		let ret = new CategoryTooltipSeriesInfo();
		ret.position = <Point>{ $type: Point_$type, x: posX, y: posY };
		ret.dataContexts = contexts;
		ret.tooltipObjects = tooltipObjects;
		return ret;
	}
	hideToolTips(): void {
		this.currentPosition = <Point>{ $type: Point_$type, x: NaN, y: NaN };
		this.view.hideTooltip();
	}
	private prepareSeries(seriesInfo: CategoryTooltipSeriesInfo, f: CategoryToolTipLayerFrame, useInterpolation: boolean): void {
		let startPosition = seriesInfo.position;
		let contexts = seriesInfo.dataContexts;
		let tooltipObjects = seriesInfo.tooltipObjects;
		startPosition = this.categoryToolTipView.relativeToAbsolute(startPosition);
		let tooltipCount = 0;
		let viewport = this.view.viewport;
		let container = this.categoryToolTipView.getContainer();
		this.categoryToolTipView.clearTooltipContent();
		let isVertical: boolean = false;
		if (contexts.count == 0) {
			this.view.hideTooltip();
			return;
		}
		let anyTips: boolean = false;
		for (let i = 0; i < contexts.count; i++) {
			let series = <Series>contexts._inner[i].series;
			isVertical = series.isVertical;
			let context = contexts._inner[i];
			let obj = tooltipObjects._inner[i];
			if (this.categoryToolTipView.configureTooltip(series, obj, context)) {
				anyTips = true;
			}
			tooltipCount++;
		}
		if (!anyTips) {
			this.categoryToolTipView.hideContainer(container);
			return;
		}
		let size = this.categoryToolTipView.getTooltipSize(container);
		let pointerY: number = 0;
		let pointerX: number = 0;
		let posX = 0;
		let posY = 0;
		let atStart: boolean = false;
		let inside: boolean = false;
		let toolTipPosition = this.toolTipPosition;
		if (toolTipPosition == CategoryTooltipLayerPosition.InsideStart || toolTipPosition == CategoryTooltipLayerPosition.InsideEnd) {
			inside = true;
		}
		if (toolTipPosition == CategoryTooltipLayerPosition.InsideStart || toolTipPosition == CategoryTooltipLayerPosition.OutsideStart) {
			atStart = true;
		}
		let totalSize = this.categoryToolTipView.getValidAreaSize();
		if (isVertical) {
			if (!atStart && !inside && startPosition.x + (size.width + DeviceUtils.toPixelUnits(10)) > totalSize.width) {
				inside = true;
			}
			if (atStart && !inside && startPosition.x - (size.width + DeviceUtils.toPixelUnits(10)) < 0) {
				inside = true;
			}
		} else {
			if (!atStart && !inside && startPosition.y - (size.height + 10) < 0) {
				inside = true;
			}
			if (atStart && !inside && startPosition.y + (size.height + 10) > totalSize.height) {
				inside = true;
			}
		}
		let extraPointerOffset = DeviceUtils.toPixelUnits(10);
		let startOffset = DeviceUtils.toPixelUnits(5);
		if (!atStart) {
			if (!isVertical) {
				startOffset = size.height + extraPointerOffset;
			}
			if (inside) {
				if (isVertical) {
					startOffset = startOffset + size.width + extraPointerOffset;
				} else {
					startOffset = 0;
				}
			}
		} else {
			if (isVertical) {
				startOffset = size.width + extraPointerOffset;
				if (inside) {
					startOffset = 0;
				}
			} else {
				startOffset = DeviceUtils.toPixelUnits(5);
				if (inside) {
					startOffset = startOffset + size.height + extraPointerOffset;
				}
			}
		}
		if (isVertical) {
			pointerX = 0 - (extraPointerOffset + DeviceUtils.toPixelUnits(5));
			if (atStart) {
				pointerX = (pointerX * -1) + size.width;
			}
			pointerY = size.height / 2;
			posY = startPosition.y - size.height / 2;
			posX = startPosition.x - startOffset;
		} else {
			pointerY = size.height + DeviceUtils.toPixelUnits(10) + DeviceUtils.toPixelUnits(5);
			if (atStart) {
				pointerY = 0 - (extraPointerOffset + DeviceUtils.toPixelUnits(5));
			}
			pointerX = size.width / 2;
			posX = startPosition.x - size.width / 2;
			posY = startPosition.y - startOffset;
		}
		if (isVertical) {
			if (posY < 0) {
				pointerY -= 0 - posY;
				posY = 0;
			}
			if (posY + size.height > totalSize.height) {
				pointerY += (posY + size.height) - totalSize.height;
				posY = totalSize.height - size.height;
			}
		} else {
			if (posX < 0) {
				pointerX -= 0 - posX;
				posX = 0;
			}
			if (posX + size.width > totalSize.width) {
				pointerX += (posX + size.width) - totalSize.width;
				posX = totalSize.width - size.width;
			}
		}
		f.tooltipXCoord = posX;
		f.tooltipYCoord = posY;
		f.pointerPositionXCoord = pointerX;
		f.pointerPositionYCoord = pointerY;
		f.tooltipWidth = size.width;
		f.tooltipHeight = size.height;
	}
	private getTooltipObject(series: Series): any {
		return series.toolTip;
	}
	protected renderFrame(frame: Frame, view: SeriesView): void {
		super.renderFrame(frame, view);
		let f = <CategoryToolTipLayerFrame>frame;
		let left = view.viewport.left;
		let right = view.viewport.right;
		let top = view.viewport.top;
		let bottom = view.viewport.bottom;
		let container = this.categoryToolTipView.getContainer();
		if (isNaN_(f.tooltipXCoord) || isNaN_(f.tooltipYCoord) || isNaN_(f.pointerPositionXCoord) || isNaN_(f.pointerPositionYCoord)) {
			this.categoryToolTipView.hideContainer(container);
			return;
		}
		let displayX = f.tooltipXCoord;
		let displayY = f.tooltipYCoord;
		let pointerPosX = f.pointerPositionXCoord;
		let pointerPosY = f.pointerPositionYCoord;
		this.categoryToolTipView.moveTooltip(container, displayX, displayY, pointerPosX, pointerPosY);
	}
	protected requiresPrepare(): boolean {
		return true;
	}
}

/**
 * @hidden 
 */
export class CategoryToolTipLayerView extends AnnotationLayerView {
	static $t: Type = markType(CategoryToolTipLayerView, 'CategoryToolTipLayerView', (<any>AnnotationLayerView).$type);
	constructor(model: CategoryToolTipLayer) {
		super(model);
		this.categoryToolTipModel = model;
		this.htmlTest = /^[^<]*(<[\w\W]+>)[^>]*$/;
	}
	private _categoryToolTipModel: CategoryToolTipLayer = null;
	protected get categoryToolTipModel(): CategoryToolTipLayer {
		return this._categoryToolTipModel;
	}
	protected set categoryToolTipModel(value: CategoryToolTipLayer) {
		this._categoryToolTipModel = value;
	}
	private _container: PointerTooltip = null;
	private _tooltips: DomWrapper = null;
	private _otherTooltips: DomWrapper = null;
	private _attachToContainer: boolean = false;
	getContainer(): any {
		if (this._container == null) {
			this._container = new PointerTooltip();
			this._container.provideRenderer(this.model.renderer);
			this._container.eventSink = this.model.seriesViewer.view.eventProxy;
			this._tooltips = this.model.renderer.createElement("div");
			this._otherTooltips = this.model.renderer.createElement("div");
			this._container._visibility = Visibility.Visible;
		}
		return this._container;
	}
	onInit(): void {
		super.onInit();
		if (this._container != null) {
			this._container._visibility = Visibility.Collapsed;
		}
	}
	destroy(): void {
		super.destroy();
		if (this._container != null) {
			this._container.destroy();
			this._container = null;
		}
	}
	private _htmlTest: any = null;
	protected get htmlTest(): any {
		return this._htmlTest;
	}
	protected set htmlTest(value: any) {
		this._htmlTest = value;
	}
	configureTooltip(series: Series, obj: any, context: DataContext): boolean {
		if (series.tooltipTemplate == "default") {
			series.tooltipTemplate = series.view.getDefaultTooltipTemplate();
		}
		let template_ = series.tooltipTemplate;
		let context_ = context;
		if (series.toolTip == null) {
			return false;
		}
		let tooltip_ = series.toolTip;
		if (<boolean>(tooltip_.updateToolTip)) {
			tooltip_._inPointer = true;
			tooltip_.updateToolTip(context_, true);
			tooltip_.setStyleProperty('position', 'relative');
			tooltip_.setStyleProperty('left', '');
			tooltip_.setStyleProperty('top', '');
			tooltip_.remove();
		}
		this._tooltips.append(<DomWrapper><any>series.toolTip);
		return true;
	}
	getTooltipSize(container: any): Size {
		let p: PointerTooltip = <PointerTooltip>container;
		p.content = this._tooltips;
		let availableSize: Size = new Size(1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
		p.pointerVisibility = Visibility.Collapsed;
		let size = p.measureCore(new Size(1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY));
		p.pointerVisibility = Visibility.Visible;
		return size;
	}
	relativeToAbsolute(pt: Point): Point {
		let containerOffsetX = 0;
		let containerOffsetY = 0;
		if (this.model.seriesViewer != null) {
			let offsets = this.model.seriesViewer.getContainerOffsets();
			containerOffsetX += offsets.x;
			containerOffsetY += offsets.y;
		}
		return <Point>{ $type: Point_$type, x: containerOffsetX + pt.x, y: containerOffsetY + pt.y };
	}
	moveTooltip(container: any, x: number, y: number, pointerPosX: number, pointerPosY: number): void {
		let p: PointerTooltip = <PointerTooltip>container;
		let cc: ContentControl = <ContentControl>p.content;
		p.pointerPosition = <Point>{ $type: Point_$type, x: pointerPosX, y: pointerPosY };
		p._visibility = Visibility.Visible;
		p.canvasLeft = x;
		p.canvasTop = y;
	}
	getValidAreaSize(): Size {
		let x = <number>(window.innerWidth);
		let y = <number>(window.innerHeight);
		return new Size(1, x, y);
	}
	hideContainer(container: any): void {
		this._tooltips.removeChildren();
		this._otherTooltips.removeChildren();
		this._container._visibility = Visibility.Collapsed;
	}
	clearTooltipContent(): void {
		if (this._tooltips != null) {
			this._tooltips.removeChildren();
		}
	}
	onSeriesViewerChanged(): void {
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (isHitContext) {
			return;
		}
		let style: PointerTooltipStyle = null;
		if (this.model.seriesViewer != null) {
			style = this.model.seriesViewer.view.viewManager.getPointerTooltipStyle();
		}
		let outerOffsetX = 0;
		let outerOffsetY = 0;
		let seriesViewer = this.model.seriesViewer;
		if (seriesViewer != null) {
			let offsets = seriesViewer.view.viewManager.getContainerOffsets();
			outerOffsetX += offsets.x;
			outerOffsetY += offsets.y;
		}
		if (this._container != null) {
			this._container.pointerTooltipStyle = style;
			this._container.render(this._container.canvasLeft, this._container.canvasTop);
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		let t = this._container;
		let containerOffsetX = 0;
		let containerOffsetY = 0;
		if (this.model.seriesViewer != null) {
			let offsets = this.model.seriesViewer.getContainerOffsets();
			containerOffsetX += offsets.x;
			containerOffsetY += offsets.y;
		}
		let vd = t.exportVisualData();
		let offsetX = t.canvasLeft - containerOffsetX;
		let offsetY = t.canvasTop - containerOffsetY;
		let categoryNames = new List$1<string>(String_$type, 0);
		let length: number = this._tooltips.getChildCount();
		for (let index: number = 0; index < length; index++) {
			let indexliteral_: string = index.toString();
			let child = this._tooltips.getChildAt(index).getText();
			let name: string = child.toString();
			categoryNames.add(name);
		}
		this.model.seriesVisualDataManager.addPointerTooltipData(svd, vd, offsetX, offsetY, categoryNames);
	}
}


