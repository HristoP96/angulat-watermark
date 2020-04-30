/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnnotationLayer } from "./AnnotationLayer";
import { Series } from "./Series";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { ItemTooltipLayerFrame } from "./ItemTooltipLayerFrame";
import { Type, Base, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Boolean_$type, fromEnum, Point_$type, markType, PointUtil, runOn, String_$type, typeCast } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "./SeriesView";
import { ContentInfo } from "./ContentInfo";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { Frame } from "./Frame";
import { Pool$1 } from "igniteui-core/Pool$1";
import { List$1 } from "igniteui-core/List$1";
import { Brush } from "igniteui-core/Brush";
import { SeriesViewer } from "./SeriesViewer";
import { ItemTooltipCollisionInfo } from "./ItemTooltipCollisionInfo";
import { Rect } from "igniteui-core/Rect";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { DataContext } from "igniteui-core/DataContext";
import { Size } from "igniteui-core/Size";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_ } from "igniteui-core/number";
import { AnnotationLayerView } from "./AnnotationLayerView";
import { PointerTooltip } from "./PointerTooltip";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { SeriesViewerView } from "./SeriesViewerView";
import { ContentControl } from "igniteui-core/ContentControl";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { SeriesViewerViewManager } from "./SeriesViewerViewManager";
import { PointerTooltipStyle } from "./PointerTooltipStyle";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class ItemToolTipLayer extends AnnotationLayer {
	static $t: Type = markType(ItemToolTipLayer, 'ItemToolTipLayer', (<any>AnnotationLayer).$type);
	constructor() {
		super();
		let previousFrame = new ItemTooltipLayerFrame();
		let currentFrame = new ItemTooltipLayerFrame();
		let transitionFrame = new ItemTooltipLayerFrame();
		let animationRate: number = this.transitionDuration / 1000;
		this.previousFrame = previousFrame;
		this.currentFrame = currentFrame;
		this.transitionFrame = transitionFrame;
		this.defaultStyleKey = (<any>ItemToolTipLayer).$type;
	}
	protected createView(): SeriesView {
		return new ItemToolTipLayerView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.itemTooltipView = <ItemToolTipLayerView>view;
	}
	private _itemTooltipView: ItemToolTipLayerView;
	protected get itemTooltipView(): ItemToolTipLayerView {
		return this._itemTooltipView;
	}
	protected set itemTooltipView(value: ItemToolTipLayerView) {
		this._itemTooltipView = value;
	}
	protected get_isDefaultTooltipBehaviorDisabled(): boolean {
		return true;
	}
	get targetSeries(): Series {
		return <Series>this.getValue(ItemToolTipLayer.targetSeriesProperty);
	}
	set targetSeries(value: Series) {
		this.setValue(ItemToolTipLayer.targetSeriesProperty, value);
	}
	static readonly targetSeriesPropertyName: string = "TargetSeries";
	static readonly targetSeriesProperty: DependencyProperty = DependencyProperty.register(ItemToolTipLayer.targetSeriesPropertyName, (<any>Series).$type, (<any>ItemToolTipLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ItemToolTipLayer>sender).raisePropertyChanged(ItemToolTipLayer.targetSeriesPropertyName, e.oldValue, e.newValue)));
	get useInterpolation(): boolean {
		return <boolean>this.getValue(ItemToolTipLayer.useInterpolationProperty);
	}
	set useInterpolation(value: boolean) {
		this.setValue(ItemToolTipLayer.useInterpolationProperty, value);
	}
	static readonly useInterpolationPropertyName: string = "UseInterpolation";
	static readonly useInterpolationProperty: DependencyProperty = DependencyProperty.register(ItemToolTipLayer.useInterpolationPropertyName, Boolean_$type, (<any>ItemToolTipLayer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ItemToolTipLayer>sender).raisePropertyChanged(ItemToolTipLayer.useInterpolationPropertyName, e.oldValue, e.newValue)));
	get skipUnknownValues(): boolean {
		return <boolean>this.getValue(ItemToolTipLayer.skipUnknownValuesProperty);
	}
	set skipUnknownValues(value: boolean) {
		this.setValue(ItemToolTipLayer.skipUnknownValuesProperty, value);
	}
	static readonly skipUnknownValuesPropertyName: string = "SkipUnknownValues";
	static readonly skipUnknownValuesProperty: DependencyProperty = DependencyProperty.register(ItemToolTipLayer.skipUnknownValuesPropertyName, Boolean_$type, (<any>ItemToolTipLayer).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ItemToolTipLayer>sender).raisePropertyChanged(ItemToolTipLayer.skipUnknownValuesPropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case ItemToolTipLayer.targetSeriesPropertyName:
			this.renderSeries(true);
			break;

			case ItemToolTipLayer.useInterpolationPropertyName:
			this.renderSeries(true);
			break;

			case ItemToolTipLayer.skipUnknownValuesPropertyName:
			this.renderSeries(true);
			break;

		}

	}
	protected onDependentSeriesRender(series: Series, animate: boolean): void {
		if (this.targetSeries == null || this.targetSeries == series) {
			if (!this.contentInfo.isDirty) {
				this.renderSeries(animate);
			}
		}
	}
	protected isSeriesValid(series: Series): boolean {
		if (!super.isSeriesValid(series)) {
			return false;
		}
		let res = this.getCategoryPosition(series);
		if (!res.item1) {
			return false;
		}
		return true;
	}
	protected prepareFrame(frame: Frame, view: SeriesView): void {
		super.prepareFrame(frame, view);
		let f = <ItemTooltipLayerFrame>frame;
		let containerPool = this.itemTooltipView.containerPool;
		let useInterpolation = this.useInterpolation;
		let skipUnknowns = this.skipUnknownValues;
		f.tooltipYCoords.clear();
		f.tooltipContainers.clear();
		f.tooltipXCoords.clear();
		f.actualTooltipYCoords.clear();
		f.actualTooltipXCoords.clear();
		f.tooltipObjects.clear();
		f.tooltipDataContexts.clear();
		f.tooltipWidths.clear();
		f.tooltipHeights.clear();
		f.leaderBrushes.clear();
		if (isNaN_(this.currentPosition.x) && isNaN_(this.currentPosition.y)) {
			containerPool.count = 0;
			return;
		}
		let i: number = 0;
		if (this.isSeriesValid(this.targetSeries)) {
			this.prepareSeries(this.targetSeries, f, useInterpolation, skipUnknowns, 0);
			i++;
		} else {
			for (let series of fromEnum<Series>(this.seriesViewer.series)) {
				if (this.isSeriesValid(series)) {
					this.prepareSeries(series, f, useInterpolation, skipUnknowns, i);
					i++;
				}
			}
			this.antiCollide(f);
		}
		containerPool.count = i;
	}
	private antiCollide(f: ItemTooltipLayerFrame): void {
		let items = new List$1<ItemTooltipCollisionInfo>((<any>ItemTooltipCollisionInfo).$type, 0);
		for (let i = 0; i < f.actualTooltipXCoords.count; i++) {
			let info = new ItemTooltipCollisionInfo();
			info.index = i;
			info.position = <Point>{ $type: Point_$type, x: f.actualTooltipXCoords._inner[i], y: f.actualTooltipYCoords._inner[i] };
			info.width = f.tooltipWidths._inner[i];
			info.height = f.tooltipHeights._inner[i];
			info.order = f.tooltipYCoords._inner[i];
			if (isNaN_(info.position.x) || isNaN_(info.position.y)) {
				continue;
			}
			items.add(info);
		}
		items.sort2((i1: ItemTooltipCollisionInfo, i2: ItemTooltipCollisionInfo) => {
			if (i1.position.y < i2.position.y) {
				return -1;
			}
			if (i1.position.y > i2.position.y) {
				return 1;
			}
			if (i1.order < i2.order) {
				return -1;
			}
			if (i1.order > i2.order) {
				return 1;
			}
			return 0;
		});
		let collisons = this.collisionsExist(items);
		if (!collisons) {
			return;
		}
		for (let i1 = 0; i1 < items.count - 1; i1++) {
			let currItem = items._inner[i1];
			let nextItem = items._inner[i1 + 1];
			let currBounds = new Rect(0, currItem.position.x, currItem.position.y, currItem.width, currItem.height);
			let nextBounds = new Rect(0, nextItem.position.x, nextItem.position.y, nextItem.width, nextItem.height);
			if (currBounds.intersectsWith(nextBounds) || currBounds.top > nextBounds.bottom) {
				nextItem.position = <Point>{ $type: Point_$type, x: nextItem.position.x, y: currBounds.bottom + 1 };
			}
		}
		if (items._inner[items.count - 1].position.y + items._inner[items.count - 1].height > this.view.viewport.height) {
			items._inner[items.count - 1].position = <Point>{ $type: Point_$type, x: items._inner[items.count - 1].position.x, y: items._inner[items.count - 1].position.y - ((items._inner[items.count - 1].position.y + items._inner[items.count - 1].height) - this.view.viewport.height) };
		}
		for (let i2 = items.count - 1; i2 >= 1; i2--) {
			let currItem1 = items._inner[i2];
			let nextItem1 = items._inner[i2 - 1];
			let currBounds1 = new Rect(0, currItem1.position.x, currItem1.position.y, currItem1.width, currItem1.height);
			let nextBounds1 = new Rect(0, nextItem1.position.x, nextItem1.position.y, nextItem1.width, nextItem1.height);
			if (currBounds1.intersectsWith(nextBounds1) || currBounds1.top < nextBounds1.bottom) {
				nextItem1.position = <Point>{ $type: Point_$type, x: nextItem1.position.x, y: currBounds1.top - (nextBounds1.height + 1) };
			}
		}
		for (let i3 = 0; i3 < items.count; i3++) {
			let ind = items._inner[i3].index;
			let item = items._inner[i3];
			f.actualTooltipXCoords._inner[ind] = item.position.x;
			f.actualTooltipYCoords._inner[ind] = item.position.y;
		}
	}
	private collisionsExist(items: List$1<ItemTooltipCollisionInfo>): boolean {
		if (items.count <= 1) {
			return false;
		}
		let viewport = this.view.viewport;
		for (let i = 0; i < items.count - 1; i++) {
			let currItem = items._inner[i];
			let nextItem = items._inner[i + 1];
			let currBounds = new Rect(0, currItem.position.x, currItem.position.y, currItem.width, currItem.height);
			let nextBounds = new Rect(0, nextItem.position.x, nextItem.position.y, nextItem.width, nextItem.height);
			if (currBounds.intersectsWith(nextBounds)) {
				return true;
			}
		}
		return false;
	}
	private prepareSeries(series: Series, f: ItemTooltipLayerFrame, useInterpolation: boolean, skipUnknowns: boolean, i: number): void {
		let res = this.getCategoryPosition(series);
		if (!res.item1) {
			return;
		}
		let pos = series.getSeriesValuePosition(res.item2, useInterpolation, skipUnknowns);
		let containerPool = this.itemTooltipView.containerPool;
		let obj = this.getTooltipObject(series);
		let toolPosition = this.currentPosition;
		if (!useInterpolation) {
			toolPosition = this.toWorldPosition(pos);
		}
		let item = series.getItem(toolPosition);
		let container = containerPool.item(i);
		let viewport = this.view.viewport;
		let context: DataContext = null;
		if (series.isDefaultToolTipSelected && item != null) {
			context = series.getTooltipContext(item);
		} else {
			context = new DataContext();
			context.item = item;
			context.series = series;
		}
		if (!this.itemTooltipView.configureTooltip(series, container, obj, context)) {
			return;
		}
		let size = this.itemTooltipView.getTooltipSize(container, obj, context);
		f.tooltipContainers.add1(container);
		f.tooltipDataContexts.add1(context);
		f.tooltipObjects.add1(obj);
		let beforeX = pos.x;
		let actualX = pos.x;
		actualX = Math.max(actualX, viewport.left);
		actualX = Math.min(actualX, viewport.right);
		f.tooltipXCoords.add(actualX);
		let actualY = pos.y;
		actualY = Math.max(actualY, viewport.top);
		actualY = Math.min(actualY, viewport.bottom);
		f.tooltipYCoords.add(actualY);
		let offset = DeviceUtils.toPixelUnits(10);
		let posX = pos.x + offset;
		if (posX + size.width > viewport.right) {
			posX = (beforeX - size.width) - offset;
		}
		if (posX < viewport.left) {
			posX = viewport.left;
		}
		f.actualTooltipXCoords.add(posX);
		let posY = (pos.y - size.height) - offset;
		if (posY + size.height > viewport.bottom) {
			posY = (viewport.bottom - size.height) - offset;
		}
		if (posY < viewport.top) {
			posY = viewport.top;
		}
		f.actualTooltipYCoords.add(posY);
		f.tooltipWidths.add(size.width);
		f.tooltipHeights.add(size.height);
		let brush = this.actualBrush;
		if (brush == null) {
			brush = this.brush;
		}
		if (brush == null) {
			brush = series.actualBrush;
		}
		f.leaderBrushes.add(brush);
	}
	private getTooltipObject(series: Series): any {
		return series.toolTip;
	}
	hideToolTips(): void {
		this.currentPosition = <Point>{ $type: Point_$type, x: NaN, y: NaN };
		this.itemTooltipView.hideTooltips();
	}
	protected renderFrame(frame: Frame, view: SeriesView): void {
		super.renderFrame(frame, view);
		let f = <ItemTooltipLayerFrame>frame;
		let count: number = f.tooltipYCoords.count;
		let left = view.viewport.left;
		let right = view.viewport.right;
		let top = view.viewport.top;
		let bottom = view.viewport.bottom;
		for (let i = 0; i < count; i++) {
			if (isNaN_(f.tooltipXCoords._inner[i]) || isNaN_(f.tooltipYCoords._inner[i]) || isNaN_(f.actualTooltipXCoords._inner[i]) || isNaN_(f.actualTooltipYCoords._inner[i]) || f.tooltipObjects._inner[i] == null || f.tooltipDataContexts._inner[i] == null) {
				this.itemTooltipView.hideContainer(f.tooltipContainers._inner[i]);
				continue;
			}
			let toolLeft = f.actualTooltipXCoords._inner[i];
			let toolTop = f.actualTooltipYCoords._inner[i];
			let width = f.tooltipWidths._inner[i];
			let height = f.tooltipHeights._inner[i];
			let hide: boolean = false;
			if (toolLeft < left && Math.abs(toolLeft - left) > 1) {
				hide = true;
			}
			if (toolTop < top && Math.abs(toolTop - top) > 1) {
				hide = true;
			}
			if ((toolLeft + width) > right && Math.abs((toolLeft + width) - right) > 1) {
				hide = true;
			}
			if ((toolTop + height) > bottom && Math.abs((toolTop + height) - bottom) > 1) {
				hide = true;
			}
			if (hide) {
				this.itemTooltipView.hideContainer(f.tooltipContainers._inner[i]);
				continue;
			}
			let cont = f.tooltipContainers._inner[i];
			let displayX = Math.min(f.actualTooltipXCoords._inner[i], f.tooltipXCoords._inner[i]);
			let displayY = Math.min(f.actualTooltipYCoords._inner[i], f.tooltipYCoords._inner[i]);
			let pointerPosX = f.tooltipXCoords._inner[i] - f.actualTooltipXCoords._inner[i];
			let pointerPosY = f.tooltipYCoords._inner[i] - f.actualTooltipYCoords._inner[i];
			this.itemTooltipView.moveTooltip(cont, displayX, displayY, pointerPosX, pointerPosY);
		}
	}
	protected requiresPrepare(): boolean {
		return true;
	}
}

/**
 * @hidden 
 */
export class ItemToolTipLayerView extends AnnotationLayerView {
	static $t: Type = markType(ItemToolTipLayerView, 'ItemToolTipLayerView', (<any>AnnotationLayerView).$type);
	constructor(model: ItemToolTipLayer) {
		super(model);
		this.itemTooltipModel = model;
		this.visibleTooltips = new List$1<PointerTooltip>((<any>PointerTooltip).$type, 0);
	}
	private _itemTooltipModel: ItemToolTipLayer = null;
	protected get itemTooltipModel(): ItemToolTipLayer {
		return this._itemTooltipModel;
	}
	protected set itemTooltipModel(value: ItemToolTipLayer) {
		this._itemTooltipModel = value;
	}
	private _containerPool: Pool$1<any> = null;
	get containerPool(): Pool$1<any> {
		return this._containerPool;
	}
	set containerPool(value: Pool$1<any>) {
		this._containerPool = value;
	}
	onInit(): void {
		super.onInit();
		this.containerPool = ((() => {
			let $ret = new Pool$1<any>((<any>Base).$type);
			$ret.create = runOn(this, this.containerCreate);
			$ret.activate = runOn(this, this.containerActivate);
			$ret.disactivate = runOn(this, this.containerDisactivate);
			$ret.destroy = runOn(this, this.containerDestroy);
			return $ret;
		})());
		this.htmlTest = /^[^<]*(<[\w\W]+>)[^>]*$/;
	}
	destroy(): void {
		super.destroy();
		for (let i = 0; i < this.containerPool.active.count; i++) {
			(<PointerTooltip>this.containerPool.active._inner[i]).destroy();
		}
		for (let i1 = 0; i1 < this.containerPool.inactive.count; i1++) {
			(<PointerTooltip>this.containerPool.inactive._inner[i1]).destroy();
		}
		this.containerPool.clear();
	}
	private _visibleTooltips: List$1<PointerTooltip> = null;
	protected get visibleTooltips(): List$1<PointerTooltip> {
		return this._visibleTooltips;
	}
	protected set visibleTooltips(value: List$1<PointerTooltip>) {
		this._visibleTooltips = value;
	}
	private containerCreate(): any {
		let container: PointerTooltip = new PointerTooltip();
		container.provideRenderer(this.model.renderer);
		container._visibility = Visibility.Collapsed;
		container.eventSink = this.model.seriesViewer.view.eventProxy;
		this.visibleTooltips.add(container);
		return container;
	}
	private containerActivate(container: any): void {
		let p = <PointerTooltip>container;
	}
	private containerDisactivate(container: any): void {
		let p = <PointerTooltip>container;
		p._visibility = Visibility.Collapsed;
	}
	private containerDestroy(container: any): void {
		let p = (<PointerTooltip>container);
		p.unbind();
		p.content = null;
		this.visibleTooltips.remove1(container);
	}
	private _htmlTest: any = null;
	protected get htmlTest(): any {
		return this._htmlTest;
	}
	protected set htmlTest(value: any) {
		this._htmlTest = value;
	}
	configureTooltip(series: Series, container: any, obj: any, context: DataContext): boolean {
		let p = <PointerTooltip>container;
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
		}
		p.content = series.toolTip;
		return true;
	}
	getTooltipSize(container: any, obj: any, context: DataContext): Size {
		let p: PointerTooltip = <PointerTooltip>container;
		let cc: ContentControl = <ContentControl>p.content;
		let availableSize: Size = new Size(1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
		p.pointerVisibility = Visibility.Collapsed;
		let size = p.measureCore(new Size(1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY));
		p.pointerVisibility = Visibility.Visible;
		return size;
	}
	moveTooltip(container: any, x: number, y: number, pointerPosX: number, pointerPosY: number): void {
		let style: PointerTooltipStyle = null;
		if (this.model.seriesViewer != null) {
			style = this.model.seriesViewer.view.viewManager.getPointerTooltipStyle();
		}
		let p: PointerTooltip = <PointerTooltip>container;
		p.pointerTooltipStyle = style;
		let cc: ContentControl = <ContentControl>p.content;
		p.pointerPosition = <Point>{ $type: Point_$type, x: pointerPosX, y: pointerPosY };
		p._visibility = Visibility.Visible;
		p.canvasLeft = x;
		p.canvasTop = y;
	}
	hideContainer(container: any): void {
		if (container != null) {
			let p: PointerTooltip = <PointerTooltip>container;
			p._visibility = Visibility.Collapsed;
		}
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (isHitContext) {
			return;
		}
		let outerOffsetX = 0;
		let outerOffsetY = 0;
		let seriesViewer = this.model.seriesViewer;
		if (seriesViewer != null) {
			let offsets = seriesViewer.view.viewManager.getContainerOffsets();
			outerOffsetX += offsets.x;
			outerOffsetY += offsets.y;
		}
		for (let i = 0; i < this.visibleTooltips.count; i++) {
			this.visibleTooltips._inner[i].render(this.visibleTooltips._inner[i].canvasLeft + outerOffsetX, this.visibleTooltips._inner[i].canvasTop + outerOffsetY);
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		for (let tooltip_ of fromEnum<any>(this.containerPool.active)) {
			if ((<FrameworkElement>tooltip_)._visibility != Visibility.Visible) {
				continue;
			}
			let t = <PointerTooltip>tooltip_;
			let vd = t.exportVisualData();
			let offsetX = t.canvasLeft;
			let offsetY = t.canvasTop;
			let categoryNames = new List$1<string>(String_$type, 0);
			let wrapper = typeCast<DomWrapper>(DomWrapper_$type, t.content);
			if (wrapper != null) {
				let name: string = wrapper.getText();
				categoryNames.add(name);
			}
			this.model.seriesVisualDataManager.addPointerTooltipData(svd, vd, offsetX, offsetY, categoryNames);
		}
	}
	hideTooltips(): void {
		for (let i = 0; i < this.visibleTooltips.count; i++) {
			this.hideContainer(this.visibleTooltips._inner[i]);
		}
	}
}


