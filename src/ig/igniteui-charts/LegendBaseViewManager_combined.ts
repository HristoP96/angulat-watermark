/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable$1, IEnumerable$1_$type, Point, typeCast, runOn, fromEnum, Type, markType, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, NormalizedEvent, DomWrapperPosition } from "igniteui-core/dom";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { LegendItemHelper } from "igniteui-core/LegendItemHelper";
import { ContentControl } from "igniteui-core/ContentControl";
import { ILegendContext, ILegendContext_$type } from "igniteui-core/ILegendContext";
import { DataTemplatePassInfo } from "igniteui-core/DataTemplatePassInfo";
import { DataTemplateMeasureInfo } from "igniteui-core/DataTemplateMeasureInfo";
import { DataTemplateRenderInfo } from "igniteui-core/DataTemplateRenderInfo";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { KeyValuePair$2 } from "igniteui-core/KeyValuePair$2";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { Size } from "igniteui-core/Size";
import { Polygon } from "igniteui-core/Polygon";
import { GradientData } from "./GradientData";
import { Rect } from "igniteui-core/Rect";
import { GradientStopData } from "./GradientStopData";
import { List$1 } from "igniteui-core/List$1";
import { Brush } from "igniteui-core/Brush";
import { FontInfo } from "igniteui-core/FontInfo";
import { FontUtil } from "igniteui-core/FontUtil";
import { isNaN_ } from "igniteui-core/number";
import { IChartLegend, IChartLegend_$type } from "igniteui-core/IChartLegend";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { UIElement } from "igniteui-core/UIElement";
import { ILegendOwner } from "igniteui-core/ILegendOwner";
import { ILegendSeries, ILegendSeries_$type } from "igniteui-core/ILegendSeries";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { LegendMouseButtonEventArgs } from "./LegendMouseButtonEventArgs";
import { LegendMouseEventArgs } from "./LegendMouseEventArgs";
import { LegendVisualData } from "./LegendVisualData";
import { MouseButtonEventArgs } from "igniteui-core/MouseButtonEventArgs";
import { MouseEventArgs } from "igniteui-core/MouseEventArgs";
import { RectData } from "igniteui-core/RectData";
import { ColorData } from "igniteui-core/ColorData";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { LegendItemVisualData } from "./LegendItemVisualData";
import { PrimitiveAppearanceData } from "igniteui-core/PrimitiveAppearanceData";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class LegendBaseViewManager extends Base {
	static $t: Type = markType(LegendBaseViewManager, 'LegendBaseViewManager');
	private _owner: LegendBaseView = null;
	constructor(owner: LegendBaseView) {
		super();
		this._owner = owner;
		this.items = new Dictionary$2<any, DomWrapper>((<any>Base).$type, DomWrapper_$type, 0);
		this.initializeScalingRatio();
	}
	initializeScalingRatio(): void {
		let ratio = LegendItemHelper.pixelRatio;
		if (<any>window.devicePixelRatio != undefined && (isNaN_(ratio) || window.devicePixelRatio != ratio)) {
			LegendItemHelper.pixelRatio = window.devicePixelRatio;
			this._owner.onSizeChanged();
		}
	}
	onDetachedFromUI(): void {
	}
	onAttachedToUI(): void {
		this.initializeScalingRatio();
	}
	onContainerProvided(container: any): void {
		if (container == null) {
			this.list = null;
			this.container = null;
			return;
		}
		this.container = <DomRenderer><any>container;
		this.list = this.createList();
		this.list.addClass(this._owner.legendItemsListStyle);
		this.container.append(this.list);
	}
	protected createList(): DomWrapper {
		return this.container.createElement("table");
	}
	private _list: DomWrapper = null;
	get list(): DomWrapper {
		return this._list;
	}
	set list(value: DomWrapper) {
		this._list = value;
	}
	private _container: DomRenderer = null;
	get container(): DomRenderer {
		return this._container;
	}
	set container(value: DomRenderer) {
		this._container = value;
	}
	protected _gradientsEnabled: boolean = false;
	protected createItemContainer(): DomWrapper {
		let row = this.container.createElement("tr");
		row.addClass(this._owner.legendItemStyle);
		let isHorizontal: boolean = this._owner.isHorizontal;
		if (isHorizontal) {
			row.setStyleProperty("display", "block");
			row.setStyleProperty("float", "left");
			row.setStyleProperty("margin", "0px");
			row.setStyleProperty("margin-right", "8px");
		}
		return row;
	}
	getVisual(item: any): DomWrapper {
		return this.getVisual1(item, this.list);
	}
	protected getVisual1(item: any, container: DomWrapper): DomWrapper {
		let legendItem: ContentControl = typeCast<ContentControl>((<any>ContentControl).$type, item);
		let row = this.createItemContainer();
		if (legendItem != null) {
			let dc: ILegendContext = typeCast<ILegendContext>(ILegendContext_$type, legendItem.content);
			if (dc != null && legendItem.contentTemplate != null) {
				let passInfo: DataTemplatePassInfo = new DataTemplatePassInfo();
				passInfo.context = row;
				passInfo.passID = "LegendItem";
				let measureInfo: DataTemplateMeasureInfo = new DataTemplateMeasureInfo();
				measureInfo.passInfo = passInfo;
				measureInfo.width = NaN;
				measureInfo.height = NaN;
				measureInfo.data = dc;
				measureInfo.context = row;
				let renderInfo: DataTemplateRenderInfo = new DataTemplateRenderInfo();
				renderInfo.passInfo = passInfo;
				if (legendItem.contentTemplate.measure != null) {
					legendItem.contentTemplate.measure(measureInfo);
				}
				renderInfo.context = this.container.getSubRenderer(row);
				renderInfo.availableWidth = measureInfo.width;
				renderInfo.availableHeight = measureInfo.height;
				renderInfo.data = dc;
				renderInfo.xPosition = 0;
				renderInfo.yPosition = 0;
				legendItem.contentTemplate.render(renderInfo);
				let found = row.findByClass(".ui-legend-item-badge");
				for (let i = 0; i < found.length; i++) {
					found[i].removeClass("ui-legend-item-badge").addClass(this._owner.legendItemBadgeStyle);
				}
				found = row.findByClass(".ui-legend-item-text");
				for (let i1 = 0; i1 < found.length; i1++) {
					if (this._owner.isHorizontal) {
						found[i1].setStyleProperty("white-space", "nowrap");
					}
					found[i1].removeClass("ui-legend-item-text").addClass(this._owner.legendItemTextStyle);
				}
			}
		}
		return row;
	}
	private _items: Dictionary$2<any, DomWrapper> = null;
	protected get items(): Dictionary$2<any, DomWrapper> {
		return this._items;
	}
	protected set items(value: Dictionary$2<any, DomWrapper>) {
		this._items = value;
	}
	addItemVisual(item: any, index: number): void {
		let visual: DomWrapper = this.getVisual1(item, this.list);
		visual.listen("mouseup", runOn(this._owner, this._owner.legendMouseUp));
		visual.listen("mousedown", runOn(this._owner, this._owner.legendMouseDown));
		visual.listen("mouseleave", runOn(this._owner, this._owner.legendMouseLeave));
		visual.listen("mousemove", runOn(this._owner, this._owner.legendMouseOver));
		this.items.addItem(item, visual);
		if ((this.list.getChildCount() == 0) || (index >= this.list.getChildCount())) {
			this.list.append(visual);
		} else {
			let insBefore = this.list.getChildAt(index);
			insBefore.before(visual);
		}
	}
	refreshLegendItem(index: number): void {
	}
	removeItemVisual(item: any): void {
		let toRemove: DomWrapper;
		if (((() => { let $ret = this.items.tryGetValue(item, toRemove); toRemove = $ret.p1; return $ret.ret; })())) {
			toRemove.unlistenAll();
			toRemove.remove();
			this.items.removeItem(item);
		}
	}
	getItem(visual_: any): any {
		for (let pair_ of fromEnum<KeyValuePair$2<any, DomWrapper>>(this.items)) {
			if(pair_.value.getNativeElement() === visual_){
                                    return pair_.key;
                                };
		}
		return null;
	}
	containsContext(dataContext: ILegendContext): boolean {
		for (let element of fromEnum<any>(this.items.keys)) {
			let contentControl: ContentControl = typeCast<ContentControl>((<any>ContentControl).$type, element);
			if (contentControl != null && contentControl.content != null) {
				let context = typeCast<ILegendContext>(ILegendContext_$type, contentControl.content);
				if (context != null && context.itemLabel == dataContext.itemLabel && context.legendLabel == dataContext.legendLabel && context.series == dataContext.series && context.itemBrush == dataContext.itemBrush) {
					return true;
				}
			}
		}
		return false;
	}
	private _scaleCanvas: DomWrapper = null;
	protected get scaleCanvas(): DomWrapper {
		return this._scaleCanvas;
	}
	protected set scaleCanvas(value: DomWrapper) {
		this._scaleCanvas = value;
	}
	private _scaleContext: RenderingContext = null;
	protected get scaleContext(): RenderingContext {
		return this._scaleContext;
	}
	protected set scaleContext(value: RenderingContext) {
		this._scaleContext = value;
	}
	getScaleContext(container: any): RenderingContext {
		let width: number = this.container.rootWrapper.width();
		let height: number = this.container.rootWrapper.height();
		this.list.remove();
		let div = this.container.createElement("div");
		div.setStyleProperty("position", "relative");
		this.scaleCanvas = this.container.createElement("<canvas style=\"position : absolute; top : 0; left : 0\" />");
		this.scaleCanvas.setStyleProperty("position", "absolute");
		this.scaleCanvas.setStyleProperty("top", "0px");
		this.scaleCanvas.setStyleProperty("left", "0px");
		this.container.append(div);
		div.append(this.scaleCanvas);
		this.scaleContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.scaleCanvas));
		this.scaleCanvas.setAttribute("width", width.toString());
		this.scaleCanvas.setAttribute("height", height.toString());
		return this.scaleContext;
	}
	getScaleContainerSize(): Size {
		return new Size(1, this.container.rootWrapper.width(), Math.max(10, this.container.rootWrapper.height() - 15));
	}
	renderGradientShape(ScaleContext: RenderingContext, polygon: Polygon, currGradient: GradientData, rect: Rect): void {
		let cont = <CanvasRenderingContext2D>ScaleContext.getUnderlyingContext();
		cont.beginPath();
		cont.moveTo(<number>polygon.points._inner[0].x, <number>polygon.points._inner[0].y);
		for (let i: number = 1; i < polygon.points.count; i++) {
			cont.lineTo(<number>polygon.points._inner[i].x, <number>polygon.points._inner[i].y);
		}
		cont.lineTo(<number>polygon.points._inner[0].x, <number>polygon.points._inner[0].y);
		let grad = cont.createLinearGradient(rect.left, rect.top, rect.left, rect.top + rect.height);
		for (let stop of fromEnum<GradientStopData>(currGradient.gradientStops)) {
			grad.addColorStop(stop.offset, stop.brush._fill);
		}
		cont.fillStyle = grad;
		cont.fill();
	}
	notifyBeginUpdate(): void {
	}
	notifyEndUpdate(): void {
	}
	orientationChanged(horizontal: boolean): void {
		let rowCount = this.list == null ? 0 : this.list.getChildCount();
		for (let i = 0; i < rowCount; i++) {
			let row = this.list.getChildAt(i);
			row.setStyleProperty("display", horizontal ? "block" : "");
			row.setStyleProperty("float", horizontal ? "left" : "");
			row.setStyleProperty("margin", horizontal ? "0px" : "");
			row.setStyleProperty("margin-right", horizontal ? "8px" : "");
			row.getChildAt(1).setStyleProperty("white-space", horizontal ? "nowrap" : "");
		}
	}
	textColorUpdated(color: string): void {
		this.list.setStyleProperty("color", color);
	}
	textStyleUpdated(style: string): void {
		let fontInfo = FontUtil.getFontInfoFromString(this.container, style);
		this.list.setStyleProperty("font-family", fontInfo.fontFamily);
		this.list.setStyleProperty("font-size", fontInfo.fontSize + "px");
		this.list.setStyleProperty("font-style", fontInfo.fontStyle);
	}
}

/**
 * @hidden 
 */
export abstract class LegendBase extends ContentControl implements INotifyPropertyChanged, IChartLegend {
	static $t: Type = markType(LegendBase, 'LegendBase', (<any>ContentControl).$type, [INotifyPropertyChanged_$type, IChartLegend_$type]);
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
	}
	createView(): LegendBaseView {
		return new LegendBaseView(this);
	}
	onViewCreated(view: LegendBaseView): void {
		this.view = view;
	}
	private _view: LegendBaseView = null;
	get view(): LegendBaseView {
		return this._view;
	}
	set view(value: LegendBaseView) {
		this._view = value;
	}
	constructor() {
		super();
		let view: LegendBaseView = this.createView();
		this.onViewCreated(view);
		view.onInit();
		this.children = new ObservableCollection$1<UIElement>((<any>UIElement).$type, 0);
		this.legendItemsListStyle = "ig-chart-legend-items-list";
		this.legendItemStyle = "ig-chart-legend-item";
		this.legendItemBadgeStyle = "ig-chart-legend-item-badge";
		this.legendItemTextStyle = "ig-chart-legend-item-text";
	}
	addChildInOrder(legendItem: UIElement, series: ILegendSeries): void {
	}
	createItemwiseLegendItemsInternal(legendItems: List$1<UIElement>, itemsHost: ILegendSeries): void {
	}
	private _children: ObservableCollection$1<UIElement> = null;
	get children(): ObservableCollection$1<UIElement> {
		return this._children;
	}
	set children(value: ObservableCollection$1<UIElement>) {
		this._children = value;
	}
	private _seriesOwner: ILegendOwner = null;
	get seriesOwner(): ILegendOwner {
		return this._seriesOwner;
	}
	set seriesOwner(value: ILegendOwner) {
		this._seriesOwner = value;
	}
	private _chartOwner: ILegendOwner = null;
	get chartOwner(): ILegendOwner {
		return this._chartOwner;
	}
	set chartOwner(value: ILegendOwner) {
		this._chartOwner = value;
	}
	protected get_isItemwise(): boolean {
		return false;
	}
	get isItemwise(): boolean {
		return this.get_isItemwise();
	}
	protected get_isScale(): boolean {
		return false;
	}
	get isScale(): boolean {
		return this.get_isScale();
	}
	clearLegendItemsForSeries(itemsHost: ILegendSeries): void {
		if (itemsHost == null || this.children == null || this.children.count == 0) {
			return;
		}
		let legendItems: ObservableCollection$1<UIElement> = new ObservableCollection$1<UIElement>((<any>UIElement).$type, 0);
		for (let existingLegendItem of fromEnum<UIElement>(this.children)) {
			let contentControl: ContentControl = typeCast<ContentControl>((<any>ContentControl).$type, existingLegendItem);
			if (contentControl != null && contentControl.content != null) {
				let context: ILegendContext = typeCast<ILegendContext>(ILegendContext_$type, contentControl.content);
				if (context != null && context.series == itemsHost) {
					legendItems.add(existingLegendItem);
				}
			}
		}
		for (let legendItem of fromEnum<UIElement>(legendItems)) {
			this.children.remove(legendItem);
		}
	}
	containsChild(child: UIElement): boolean {
		return this.children.contains(child);
	}
	removeChild(child: UIElement): void {
		this.children.remove(child);
	}
	get owner(): ILegendOwner {
		if (this.seriesOwner != null) {
			return this.seriesOwner;
		} else {
			return this.chartOwner;
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	protected raisePropertyChanged(name: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(name));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(name, oldValue, newValue));
		}
	}
	legendItemMouseLeftButtonDown: (sender: any, e: LegendMouseButtonEventArgs) => void = null;
	onLegendItemMouseLeftButtonDown(args: LegendMouseButtonEventArgs): void {
		if (this.legendItemMouseLeftButtonDown != null) {
			this.legendItemMouseLeftButtonDown(this, args);
		}
	}
	legendItemMouseLeftButtonUp: (sender: any, e: LegendMouseButtonEventArgs) => void = null;
	onLegendItemMouseLeftButtonUp(args: LegendMouseButtonEventArgs): void {
		if (this.legendItemMouseLeftButtonUp != null) {
			this.legendItemMouseLeftButtonUp(this, args);
		}
	}
	legendItemMouseEnter: (sender: any, e: LegendMouseEventArgs) => void = null;
	onLegendItemMouseEnter(args: LegendMouseEventArgs): void {
		if (this.legendItemMouseEnter != null) {
			this.legendItemMouseEnter(this, args);
		}
	}
	legendItemMouseLeave: (sender: any, e: LegendMouseEventArgs) => void = null;
	onLegendItemMouseLeave(args: LegendMouseEventArgs): void {
		if (this.legendItemMouseLeave != null) {
			this.legendItemMouseLeave(this, args);
		}
	}
	legendItemMouseMove: (sender: any, e: LegendMouseEventArgs) => void = null;
	onLegendItemMouseMove(args: LegendMouseEventArgs): void {
		if (this.legendItemMouseMove != null) {
			this.legendItemMouseMove(this, args);
		}
	}
	provideContainer(container: any): void {
		this.view.onContainerProvided(container);
	}
	get legendItemsListStyle(): string {
		return this.view.legendItemsListStyle;
	}
	set legendItemsListStyle(value: string) {
		this.view.legendItemsListStyle = value;
	}
	get legendItemStyle(): string {
		return this.view.legendItemStyle;
	}
	set legendItemStyle(value: string) {
		this.view.legendItemStyle = value;
	}
	get legendItemBadgeStyle(): string {
		return this.view.legendItemBadgeStyle;
	}
	set legendItemBadgeStyle(value: string) {
		this.view.legendItemBadgeStyle = value;
	}
	get legendItemTextStyle(): string {
		return this.view.legendItemTextStyle;
	}
	set legendItemTextStyle(value: string) {
		this.view.legendItemTextStyle = value;
	}
	exportVisualData(): LegendVisualData {
		return this.view.exportVisualData();
	}
	exportSerializedVisualData(): string {
		return this.exportVisualData().serialize();
	}
	protected get_isFinancial(): boolean {
		return false;
	}
	get isFinancial(): boolean {
		return this.get_isFinancial();
	}
}

/**
 * @hidden 
 */
export class LegendBaseView extends Base {
	static $t: Type = markType(LegendBaseView, 'LegendBaseView');
	constructor(model: LegendBase) {
		super();
		this.model = model;
		this.viewManager = new LegendBaseViewManager(this);
	}
	onDetachedFromUI(): void {
		this.viewManager.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.viewManager.onAttachedToUI();
	}
	private _viewManager: LegendBaseViewManager = null;
	get viewManager(): LegendBaseViewManager {
		return this._viewManager;
	}
	set viewManager(value: LegendBaseViewManager) {
		this._viewManager = value;
	}
	private _model: LegendBase = null;
	get model(): LegendBase {
		return this._model;
	}
	set model(value: LegendBase) {
		this._model = value;
	}
	onInit(): void {
	}
	protected get_isDiscrete(): boolean {
		return false;
	}
	get isDiscrete(): boolean {
		return this.get_isDiscrete();
	}
	protected createMouseButtonArgs(legendItem: any): LegendMouseButtonEventArgs {
		let chart: ILegendOwner;
		let series: ILegendSeries;
		let item: any;
		let $ret = this.fetchLegendEnvironment(legendItem, chart, series, item);
		chart = $ret.p1;
		series = $ret.p2;
		item = $ret.p3;
		let be: MouseButtonEventArgs = new MouseButtonEventArgs();
		let args: LegendMouseButtonEventArgs = new LegendMouseButtonEventArgs(chart, series, item, be, legendItem);
		return args;
	}
	protected createMouseArgs(legendItem: any): LegendMouseEventArgs {
		let chart: ILegendOwner;
		let series: ILegendSeries;
		let item: any;
		let $ret = this.fetchLegendEnvironment(legendItem, chart, series, item);
		chart = $ret.p1;
		series = $ret.p2;
		item = $ret.p3;
		let be: MouseEventArgs = new MouseEventArgs();
		let args: LegendMouseEventArgs = new LegendMouseEventArgs(chart, series, item, be, legendItem);
		return args;
	}
	fetchLegendEnvironment(legendItem: any, chart: ILegendOwner, series: ILegendSeries, item: any): { p1: ILegendOwner; p2: ILegendSeries; p3: any; } {
		chart = this.model.owner;
		series = null;
		item = null;
		if (legendItem != null) {
			let contentControl: ContentControl = typeCast<ContentControl>((<any>ContentControl).$type, legendItem);
			if (contentControl != null && contentControl.content != null && typeCast<ILegendContext>(ILegendContext_$type, contentControl.content) !== null) {
				let dc: ILegendContext = typeCast<ILegendContext>(ILegendContext_$type, contentControl.content);
				series = typeCast<ILegendSeries>(ILegendSeries_$type, dc.series);
				if (series != null) {
					chart = series.container;
				}
				item = dc.item;
			}
		}
		return {
			p1: chart,
			p2: series,
			p3: item

		};
	}
	detachContent(): void {
	}
	ready(): boolean {
		return true;
	}
	attachItemEvents(uiElement: UIElement): void {
	}
	removeItemEvents(uiElement: UIElement): void {
	}
	onContainerProvided(container: any): void {
		this.viewManager.onContainerProvided(container);
	}
	removeItemVisual(item: any): void {
		this.viewManager.removeItemVisual(item);
	}
	addItemVisual(item: any): void {
		let index: number = this.model.children.indexOf(<UIElement>item);
		this.viewManager.addItemVisual(item, index);
	}
	notifyBeginUpdate(): void {
		this.viewManager.notifyBeginUpdate();
	}
	notifyEndUpate(): void {
		this.viewManager.notifyEndUpdate();
	}
	private _legendItemsListStyle: string = null;
	get legendItemsListStyle(): string {
		return this._legendItemsListStyle;
	}
	set legendItemsListStyle(value: string) {
		this._legendItemsListStyle = value;
	}
	private _legendItemStyle: string = null;
	get legendItemStyle(): string {
		return this._legendItemStyle;
	}
	set legendItemStyle(value: string) {
		this._legendItemStyle = value;
	}
	private _legendItemBadgeStyle: string = null;
	get legendItemBadgeStyle(): string {
		return this._legendItemBadgeStyle;
	}
	set legendItemBadgeStyle(value: string) {
		this._legendItemBadgeStyle = value;
	}
	private _legendItemTextStyle: string = null;
	get legendItemTextStyle(): string {
		return this._legendItemTextStyle;
	}
	set legendItemTextStyle(value: string) {
		this._legendItemTextStyle = value;
	}
	private mouseOver: boolean = false;
	private _isHorizontal: boolean = false;
	get isHorizontal(): boolean {
		return this._isHorizontal;
	}
	set isHorizontal(value: boolean) {
		this._isHorizontal = value;
		this.viewManager.orientationChanged(this._isHorizontal);
	}
	private _textColor: string = null;
	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		this.viewManager.textColorUpdated(this._textColor);
	}
	private _textStyle: string = null;
	get textStyle(): string {
		return this._textStyle;
	}
	set textStyle(value: string) {
		this._textStyle = value;
		this.viewManager.textStyleUpdated(this._textStyle);
	}
	onSizeChanged(): void {
		this.viewManager.initializeScalingRatio();
	}
	private currentTarget(e_: NormalizedEvent): any {
		let ev_ = e_.originalEvent;
		return ev_.currentTarget;
	}
	private item(e_: NormalizedEvent): any {
		return this.viewManager.getItem(this.currentTarget(e_));
	}
	legendMouseOver(e: NormalizedEvent): void {
		if (!this.mouseOver) {
			this.model.onLegendItemMouseEnter(this.createMouseArgs(this.item(e)));
		}
		this.mouseOver = true;
	}
	legendMouseLeave(e: NormalizedEvent): void {
		if (this.mouseOver) {
			this.model.onLegendItemMouseLeave(this.createMouseArgs(this.item(e)));
		}
		this.mouseOver = false;
	}
	legendMouseDown(e: NormalizedEvent): void {
		this.model.onLegendItemMouseLeftButtonDown(this.createMouseButtonArgs(this.item(e)));
	}
	legendMouseUp(e: NormalizedEvent): void {
		this.model.onLegendItemMouseLeftButtonUp(this.createMouseButtonArgs(this.item(e)));
	}
	getTextBounds(element: DomWrapper): RectData {
		let subElements: DomWrapper[] = element.querySelectorAll("span *");
		let result: Rect = Rect.empty;
		for (let i = 0; i < subElements.length; i++) {
			let textElement = subElements[i];
			if (stringIsNullOrEmpty(textElement.getText())) {
				continue;
			}
			let textBounds: Rect = new Rect(0, textElement.getOffset().left, textElement.getOffset().top, textElement.width(), textElement.height());
			textBounds.union(result);
			result = textBounds;
		}
		return RectData.fromRect(result);
	}
	getBadgeBounds(element: DomWrapper): RectData {
		let canvases: DomWrapper[] = element.querySelectorAll("canvas");
		let badge: DomWrapper = canvases.length > 0 ? canvases[0] : null;
		return badge != null ? new RectData(badge.getOffset().left, badge.getOffset().top, badge.width(), badge.height()) : null;
	}
	getItemFill(index: number): ColorData {
		if (this.model == null || this.model.children == null || this.model.children.count <= index) {
			return null;
		}
		let itemContent: ContentControl = <ContentControl>this.model.children._inner[index];
		if (itemContent == null) {
			return null;
		}
		let legendItem: ILegendContext = <ILegendContext><any>itemContent.content;
		if (legendItem == null) {
			return null;
		}
		let fillBrush: Brush = legendItem.actualItemBrush != null ? legendItem.actualItemBrush : legendItem.itemBrush;
		return AppearanceHelper.fromBrush(fillBrush);
	}
	exportVisualData(): LegendVisualData {
		let legend = new LegendVisualData();
		let root: DomWrapper = this.viewManager.list;
		let count: number = root.getChildCount();
		for (let ii: number = 0; ii < count; ii++) {
			let item: LegendItemVisualData = new LegendItemVisualData();
			let child: DomWrapper = root.getChildAt(ii);
			item.label = child.getText();
			item.label = item.label != null ? item.label.trim() : null;
			item.bounds = new RectData(child.getOffset().left, child.getOffset().top, child.width(), child.height());
			item.labelBounds = this.getTextBounds(child);
			item.badgeBounds = this.getBadgeBounds(child);
			legend.items.add(item);
		}
		for (let ii1: number = 0; ii1 < this.model.children.count; ii1++) {
			legend.items._inner[ii1].appearance.fill = this.getItemFill(ii1);
		}
		return legend;
	}
}


