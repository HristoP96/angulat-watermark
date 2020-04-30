/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, typeCast, Delegate_$type, runOn, markType, getInstanceType, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, delegateRemove, delegateCombine, Point_$type, fromEnum, IEnumerable$1, IEnumerable$1_$type, Number_$type, PointUtil, IEnumerable, IEnumerable_$type, EnumUtil, Array_$type, enumGetBox, Boolean_$type, String_$type, typeGetValue } from "igniteui-core/type";
import { ServiceProvider_Spark } from "./ServiceProvider_Spark";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { Message_Spark } from "./Message_Spark";
import { MessageChannel_Spark } from "./MessageChannel_Spark";
import { AxisRenderMessage_Spark } from "./AxisRenderMessage_Spark";
import { ContainerResizedMessage_Spark } from "./ContainerResizedMessage_Spark";
import { ViewportChangedMessage_Spark } from "./ViewportChangedMessage_Spark";
import { PixelRatioMessage_Spark } from "./PixelRatioMessage_Spark";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { FontInfo } from "igniteui-core/FontInfo";
import { FontUtil } from "igniteui-core/FontUtil";
import { Brush } from "igniteui-core/Brush";
import { Color } from "igniteui-core/Color";
import { Line } from "igniteui-core/Line";
import { TextBlock } from "igniteui-core/TextBlock";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Shape } from "igniteui-core/Shape";
import { SparklineAxisVisualData } from "./SparklineAxisVisualData";
import { LineVisualData } from "igniteui-core/LineVisualData";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { PrimitiveAppearanceData } from "igniteui-core/PrimitiveAppearanceData";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { ClearMessage_Spark } from "./ClearMessage_Spark";
import { ISchedulableRender, ISchedulableRender_$type } from "igniteui-core/ISchedulableRender";
import { CanvasRenderScheduler } from "igniteui-core/CanvasRenderScheduler";
import { Path } from "igniteui-core/Path";
import { PolygonMessage_Spark } from "./PolygonMessage_Spark";
import { ColumnMessage_Spark } from "./ColumnMessage_Spark";
import { WinLossColumnMessage_Spark } from "./WinLossColumnMessage_Spark";
import { MarkerMessage_Spark } from "./MarkerMessage_Spark";
import { NormalRangeMessage_Spark } from "./NormalRangeMessage_Spark";
import { TrendLineMessage_Spark } from "./TrendLineMessage_Spark";
import { TooltipMessage_Spark } from "./TooltipMessage_Spark";
import { ToooltipTemplateMessage_Spark } from "./ToooltipTemplateMessage_Spark";
import { ContainerMessage_Spark } from "./ContainerMessage_Spark";
import { BrushChangedMessage_Spark } from "./BrushChangedMessage_Spark";
import { VisibilityMessage_Spark } from "./VisibilityMessage_Spark";
import { NumberChangedMessage_Spark } from "./NumberChangedMessage_Spark";
import { ContainerSizeChangedMessage_Spark } from "./ContainerSizeChangedMessage_Spark";
import { MouseMoveMessage_Spark } from "./MouseMoveMessage_Spark";
import { MouseLeaveMessage_Spark } from "./MouseLeaveMessage_Spark";
import { EventProxy } from "igniteui-core/EventProxy";
import { CanvasGestureDOMEventProxy } from "igniteui-core/CanvasGestureDOMEventProxy";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { Rect } from "igniteui-core/Rect";
import { SparkLayerType } from "./SparkLayerType";
import { RenderingMessage_Spark } from "./RenderingMessage_Spark";
import { List$1 } from "igniteui-core/List$1";
import { TranslateTransform } from "igniteui-core/TranslateTransform";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { UIElement } from "igniteui-core/UIElement";
import { GeometryGroup } from "igniteui-core/GeometryGroup";
import { EllipseGeometry } from "igniteui-core/EllipseGeometry";
import { Geometry } from "igniteui-core/Geometry";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { RectangleGeometry } from "igniteui-core/RectangleGeometry";
import { DataContext } from "igniteui-core/DataContext";
import { SparklineToolTipContext } from "./SparklineToolTipContext";
import { SparklineVisualData } from "./SparklineVisualData";
import { RectData } from "igniteui-core/RectData";
import { PathVisualData } from "igniteui-core/PathVisualData";
import { SparklineDisplayType, SparklineDisplayType_$type } from "./SparklineDisplayType";
import { FillRule } from "igniteui-core/FillRule";
import { truncate, isNaN_, isInfinity } from "igniteui-core/number";
import { SparkFrame } from "./SparkFrame";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { TrendCalculators } from "igniteui-core/TrendCalculators";
import { LeastSquaresFit } from "igniteui-core/LeastSquaresFit";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IFastItemsSourceProvider, IFastItemsSourceProvider_$type } from "igniteui-core/IFastItemsSourceProvider";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { FastItemsSourceEventArgs } from "igniteui-core/FastItemsSourceEventArgs";
import { PropertyChangedMessage_Spark } from "./PropertyChangedMessage_Spark";
import { FastItemsSource } from "igniteui-core/FastItemsSource";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { DataChangedMessage_Spark } from "./DataChangedMessage_Spark";
import { NotifyCollectionChangedAction } from "igniteui-core/NotifyCollectionChangedAction";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { InteractionMessage_Spark } from "./InteractionMessage_Spark";
import { FastItemsSourceReference } from "igniteui-core/FastItemsSourceReference";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { UnknownValuePlotting, UnknownValuePlotting_$type } from "igniteui-core/UnknownValuePlotting";
import { Control } from "igniteui-core/Control";

/**
 * @hidden 
 */
export class HorizontalAxisView extends Base {
	static $t: Type = markType(HorizontalAxisView, 'HorizontalAxisView');
	private sparkline: XamSparkline = null;
	canvas: DomWrapper = null;
	renderingContext: RenderingContext = null;
	private font: FontInfo = null;
	private fontHeight: number = 0;
	viewportWidth: number = 0;
	viewportHeight: number = 0;
	private view: XamSparklineView = null;
	private _thickness: number = -1;
	private minLabel: TextBlock = null;
	private maxLabel: TextBlock = null;
	private _axisLine: Line = null;
	private css: string[] = [ "border-top-width", "border-top-color", "color" ];
	private cssSet: boolean = false;
	constructor(sparkline: XamSparkline) {
		super();
		this.messageHandlers.item((<any>AxisRenderMessage_Spark).$type, (m: Message_Spark) => this.renderAxisMessageReceived(typeCast<AxisRenderMessage_Spark>((<any>AxisRenderMessage_Spark).$type, m)));
		this.messageHandlers.item((<any>ContainerResizedMessage_Spark).$type, (m: Message_Spark) => this.containerResizedMessageReceived(typeCast<ContainerResizedMessage_Spark>((<any>ContainerResizedMessage_Spark).$type, m)));
		this.messageHandlers.item((<any>ViewportChangedMessage_Spark).$type, (m: Message_Spark) => this.viewportChangedMessageReceived(typeCast<ViewportChangedMessage_Spark>((<any>ViewportChangedMessage_Spark).$type, m)));
		this.messageHandlers.item((<any>PixelRatioMessage_Spark).$type, (m: Message_Spark) => this.pixelRatioChanged(typeCast<PixelRatioMessage_Spark>((<any>PixelRatioMessage_Spark).$type, m)));
		this.sparkline = sparkline;
	}
	private getCss(): string[] {
		if (!this.cssSet) {
			this.cssSet = true;
			this.view.cssValue("ui-sparkline-axis-x", this.css);
		}
		return this.css;
	}
	private thickness(): number {
		let v: number = this._thickness;
		if (v >= 0) {
			return v;
		}
		let width: string = this.getCss()[0];
		if (width != null) {
			v = parseInt(width);
		}
		this._thickness = v = (v < 1) ? 1 : v;
		return v;
	}
	private _currentPixelRatio: number = 1;
	private _serviceProvider: ServiceProvider_Spark = null;
	get serviceProvider(): ServiceProvider_Spark {
		return this._serviceProvider;
	}
	set serviceProvider(value: ServiceProvider_Spark) {
		let oldValue: ServiceProvider_Spark = this._serviceProvider;
		this._serviceProvider = value;
		this.view = <XamSparklineView>value.getService("View");
		this.onServiceProviderChanged(oldValue, this._serviceProvider);
	}
	private _messageHandlers: Dictionary$2<Type, (message: Message_Spark) => void> = new Dictionary$2<Type, (message: Message_Spark) => void>((<any>Type).$type, Delegate_$type, 0);
	get messageHandlers(): Dictionary$2<Type, (message: Message_Spark) => void> {
		return this._messageHandlers;
	}
	set messageHandlers(value: Dictionary$2<Type, (message: Message_Spark) => void>) {
		this._messageHandlers = value;
	}
	private _renderingMessages: MessageChannel_Spark = null;
	get renderingMessages(): MessageChannel_Spark {
		return this._renderingMessages;
	}
	set renderingMessages(value: MessageChannel_Spark) {
		this._renderingMessages = value;
	}
	private _interactionMessages: MessageChannel_Spark = null;
	get interactionMessages(): MessageChannel_Spark {
		return this._interactionMessages;
	}
	set interactionMessages(value: MessageChannel_Spark) {
		this._interactionMessages = value;
	}
	private messageReceived(m: Message_Spark): void {
		let h: (message: Message_Spark) => void;
		if (((() => { let $ret = this.messageHandlers.tryGetValue(getInstanceType(m), h); h = $ret.p1; return $ret.ret; })())) {
			h(m);
		}
	}
	private onServiceProviderChanged(oldValue: ServiceProvider_Spark, newValue: ServiceProvider_Spark): void {
		if (oldValue != null) {
			this.renderingMessages.detachTarget(runOn(this, this.messageReceived));
		}
		if (newValue != null) {
			this.renderingMessages = <MessageChannel_Spark>newValue.getService("RenderingMessages");
			this.interactionMessages = <MessageChannel_Spark>newValue.getService("InteractionMessages");
			this.renderingMessages.attachTarget(runOn(this, this.messageReceived));
		}
	}
	private containerResizedMessageReceived(message: ContainerResizedMessage_Spark): void {
		this.canvas = message.horizontalAxisCanvas;
		this.renderingContext = message.horizontalAxisContext;
		this.font = this.view.getFont("ui-sparkline-axis-x");
		if (this.font == null) {
			this.font = FontUtil.getFont(message.container);
		}
		if (this.renderingContext != null) {
			this.renderingContext.setFontInfo(this.font);
		}
		this.fontHeight = FontUtil.getCurrentFontHeight(message.container, this.font);
		if (this.sparkline != null && this.sparkline.horizontalAxisVisibility != Visibility.Collapsed) {
			message.height = message.height - this.fontHeight;
			message.horizontalAxisHeight = this.thickness();
		}
	}
	private viewportChangedMessageReceived(message: ViewportChangedMessage_Spark): void {
		this.viewportWidth = this.canvas.width();
		this.viewportHeight = this.fontHeight + this.thickness();
	}
	private renderAxisMessageReceived(message: AxisRenderMessage_Spark): void {
		this.renderLabels(message.renderInCanvas);
	}
	private renderLabels(render: boolean): void {
		this._axisLine = null;
		let rc: RenderingContext = (!render || this.sparkline == null) ? null : this.renderingContext;
		if (rc == null || !rc.shouldRender) {
			return;
		}
		rc.clearRectangle(0, 0, this.viewportWidth, this.viewportHeight);
		if (this.font != null) {
			rc.setFontInfo(this.font);
		}
		if (this._currentPixelRatio != 1) {
			rc.save();
			rc.scale(this._currentPixelRatio, this._currentPixelRatio);
		}
		let thickness: number = this.thickness(), shift: number = thickness / 2;
		let emptyLabelColumn: boolean = this.sparkline.labelColumn == null || this.sparkline.labelColumn.count == 0;
		if (emptyLabelColumn) {
			this.viewportHeight = 0;
		}
		let minLabelValue: any = emptyLabelColumn ? null : this.getLabelValue(this.sparkline.labelColumn.item(0));
		let text: string = minLabelValue == null ? "" : minLabelValue.toString();
		this.minLabel = new TextBlock();
		this.minLabel.text = text;
		this.minLabel.canvasLeft = 2;
		this.maxLabel = new TextBlock();
		let maxLabelValue: any = emptyLabelColumn ? null : this.getLabelValue(this.sparkline.labelColumn.item(this.sparkline.labelColumn.count - 1));
		this.maxLabel.text = text = maxLabelValue == null ? "" : maxLabelValue.toString();
		this.maxLabel.canvasTop = this.minLabel.canvasTop = thickness;
		this.maxLabel.canvasLeft = this.viewportWidth - rc.measureTextWidth(text) - 4;
		let brush: Brush = this.sparkline.horizontalAxisBrush;
		let fill: string = brush == null ? null : brush._fill;
		let color: Color = new Color();
		let wasNull: boolean = true;
		if (brush != null) {
			wasNull = false;
			color = brush.color;
		}
		brush = new Brush();
		if (wasNull) {
			brush._fill = (this.css[2] == null) ? "#000000" : this.css[2];
		} else {
			brush.color = color;
		}
		this.minLabel.fill = this.maxLabel.fill = brush;
		rc.renderTextBlock(this.minLabel);
		rc.renderTextBlock(this.maxLabel);
		if (thickness < 0.5) {
			return;
		}
		brush = new Brush();
		if (fill == null) {
			fill = this.css[1];
		}
		brush._fill = (fill == null) ? "#000000" : fill;
		this._axisLine = new Line();
		this._axisLine.x1 = 0;
		this._axisLine.x2 = this.canvas.width();
		this._axisLine.y1 = shift;
		this._axisLine.y2 = shift;
		this._axisLine._stroke = brush;
		this._axisLine.strokeThickness = thickness;
		rc.renderLine(this._axisLine);
		if (this._currentPixelRatio != 1) {
			rc.restore();
		}
	}
	getLabelValue(dataItem_: any): any {
		if (this.sparkline.hasFormatLabel()) {
			return this.sparkline.raiseFormatLabel(dataItem_);
		}
		let label_ = this.sparkline.horizontalAxisLabel;
		return (typeof dataItem_ != 'undefined') ? dataItem_ : '';;
	}
	exportViewShapes(): SparklineAxisVisualData {
		let axis: SparklineAxisVisualData = new SparklineAxisVisualData();
		if (this._axisLine != null) {
			axis.axisLine = new LineVisualData(1, "HorizontalAxisLine", this._axisLine);
			axis.axisLine.appearance.isVisible = this.canvas.height() > 0;
		}
		let f = this.font;
		if (this.minLabel != null) {
			axis.minLabel = AppearanceHelper.fromTextElement(this.minLabel, this.font);
		}
		if (this.maxLabel != null) {
			axis.maxLabel = AppearanceHelper.fromTextElement(this.maxLabel, this.font);
		}
		return axis;
	}
	private pixelRatioChanged(pixelRatioMessage: PixelRatioMessage_Spark): void {
		this._currentPixelRatio = pixelRatioMessage.pixelRatio;
	}
}

/**
 * @hidden 
 */
export class VerticalAxisView extends Base {
	static $t: Type = markType(VerticalAxisView, 'VerticalAxisView');
	private _minLabelString: string = null;
	private _maxLabelString: string = null;
	private minLabel: TextBlock = null;
	private maxLabel: TextBlock = null;
	private _axisLine: Line = null;
	private minLabelWidth: number = -1;
	private maxLabelWidth: number = -1;
	private sparkline: XamSparkline = null;
	private canvas: DomWrapper = null;
	private renderingContext: RenderingContext = null;
	private font: FontInfo = null;
	private fontHeight: number = 0;
	private maxWidth: number = 0;
	viewportWidth: number = 0;
	viewportHeight: number = 0;
	private view: XamSparklineView = null;
	private _thickness: number = -1;
	private css: string[] = [ "border-top-width", "border-top-color", "color", "text-align" ];
	private cssSet: boolean = false;
	constructor(sparkline: XamSparkline) {
		super();
		this.messageHandlers.item((<any>AxisRenderMessage_Spark).$type, (m: Message_Spark) => this.renderAxisMessageReceived(typeCast<AxisRenderMessage_Spark>((<any>AxisRenderMessage_Spark).$type, m)));
		this.messageHandlers.item((<any>ContainerResizedMessage_Spark).$type, (m: Message_Spark) => this.containerResizedMessageReceived(typeCast<ContainerResizedMessage_Spark>((<any>ContainerResizedMessage_Spark).$type, m)));
		this.messageHandlers.item((<any>ViewportChangedMessage_Spark).$type, (m: Message_Spark) => this.viewportChangedMessageReceived(typeCast<ViewportChangedMessage_Spark>((<any>ViewportChangedMessage_Spark).$type, m)));
		this.messageHandlers.item((<any>PixelRatioMessage_Spark).$type, (m: Message_Spark) => this.pixelRatioChanged(typeCast<PixelRatioMessage_Spark>((<any>PixelRatioMessage_Spark).$type, m)));
		this.sparkline = sparkline;
	}
	private getCss(): string[] {
		if (!this.cssSet) {
			this.cssSet = true;
			this.view.cssValue("ui-sparkline-axis-y", this.css);
		}
		return this.css;
	}
	private thickness(): number {
		let v: number = this._thickness;
		if (v >= 0) {
			return v;
		}
		let width: string = this.getCss()[0];
		if (width != null) {
			v = parseInt(width);
		}
		this._thickness = v = (v < 1) ? 1 : v;
		return v;
	}
	private _serviceProvider: ServiceProvider_Spark = null;
	get serviceProvider(): ServiceProvider_Spark {
		return this._serviceProvider;
	}
	set serviceProvider(value: ServiceProvider_Spark) {
		let oldValue: ServiceProvider_Spark = this._serviceProvider;
		this._serviceProvider = value;
		this.view = <XamSparklineView>value.getService("View");
		this.onServiceProviderChanged(oldValue, this._serviceProvider);
	}
	private _messageHandlers: Dictionary$2<Type, (message: Message_Spark) => void> = new Dictionary$2<Type, (message: Message_Spark) => void>((<any>Type).$type, Delegate_$type, 0);
	get messageHandlers(): Dictionary$2<Type, (message: Message_Spark) => void> {
		return this._messageHandlers;
	}
	set messageHandlers(value: Dictionary$2<Type, (message: Message_Spark) => void>) {
		this._messageHandlers = value;
	}
	private _renderingMessages: MessageChannel_Spark = null;
	get renderingMessages(): MessageChannel_Spark {
		return this._renderingMessages;
	}
	set renderingMessages(value: MessageChannel_Spark) {
		this._renderingMessages = value;
	}
	private _interactionMessages: MessageChannel_Spark = null;
	private _currentPixelRatio: number = 1;
	get interactionMessages(): MessageChannel_Spark {
		return this._interactionMessages;
	}
	set interactionMessages(value: MessageChannel_Spark) {
		this._interactionMessages = value;
	}
	private messageReceived(m: Message_Spark): void {
		let h: (message: Message_Spark) => void;
		if (((() => { let $ret = this.messageHandlers.tryGetValue(getInstanceType(m), h); h = $ret.p1; return $ret.ret; })())) {
			h(m);
		}
	}
	private onServiceProviderChanged(oldValue: ServiceProvider_Spark, newValue: ServiceProvider_Spark): void {
		if (oldValue != null) {
			this.renderingMessages.detachTarget(runOn(this, this.messageReceived));
		}
		if (newValue != null) {
			this.renderingMessages = <MessageChannel_Spark>newValue.getService("RenderingMessages");
			this.interactionMessages = <MessageChannel_Spark>newValue.getService("InteractionMessages");
			this.renderingMessages.attachTarget(runOn(this, this.messageReceived));
		}
	}
	private containerResizedMessageReceived(message: ContainerResizedMessage_Spark): void {
		this.canvas = message.verticalAxisCanvas;
		this.renderingContext = message.verticalAxisContext;
		this.font = this.view.getFont("ui-sparkline-axis-y");
		if (this.font == null) {
			this.font = FontUtil.getFont(message.container);
		}
		if (this.renderingContext != null) {
			this.renderingContext.setFontInfo(this.font);
		}
		this.fontHeight = FontUtil.getCurrentFontHeight(message.container, this.font);
		if (this.sparkline != null && this.sparkline.verticalAxisVisibility != Visibility.Collapsed) {
			this.renderLabels(false);
			message.width = message.width - this.maxWidth;
			message.verticalAxisWidth = this.thickness();
		}
	}
	private viewportChangedMessageReceived(message: ViewportChangedMessage_Spark): void {
		this.viewportWidth = this.maxWidth + this.thickness();
		this.viewportHeight = this.canvas.height();
	}
	private renderAxisMessageReceived(message: AxisRenderMessage_Spark): void {
		if (this.renderLabels(message.renderInCanvas)) {
			let m: ClearMessage_Spark = new ClearMessage_Spark();
			m.axisVisibilityChanged = true;
			this.renderingMessages.sendMessage(m);
		}
	}
	private renderLabels(render: boolean): boolean {
		this._axisLine = null;
		if (this.sparkline == null || this.renderingContext == null || !this.renderingContext.shouldRender || (render && this.maxLabel == null)) {
			return false;
		}
		let rc: RenderingContext = this.renderingContext;
		if (render) {
			rc.clearRectangle(0, 0, this.viewportWidth, this.viewportHeight);
		}
		let changed: boolean = false;
		if (rc != null && this.font != null) {
			rc.setFontInfo(this.font);
		}
		if (!render) {
			this.minLabel = new TextBlock();
			this.maxLabel = new TextBlock();
			let minLabelValue: any = this.getLabelValue(this.sparkline.actualMinimum);
			this.minLabel.text = this._minLabelString = minLabelValue == null ? "" : minLabelValue.toString();
			let maxLabelValue: any = this.getLabelValue(this.sparkline.actualMaximum);
			this.maxLabel.text = this._maxLabelString = maxLabelValue == null ? "" : maxLabelValue.toString();
			if (rc != null) {
				this.minLabelWidth = rc.measureTextWidth(this._minLabelString) + 3;
				if (this.minLabelWidth > this.maxWidth) {
					changed = true;
					this.maxWidth = this.minLabelWidth;
				}
				this.maxLabelWidth = rc.measureTextWidth(this._maxLabelString) + 3;
				if (this.maxLabelWidth > this.maxWidth) {
					changed = true;
					this.maxWidth = this.maxLabelWidth;
				}
			}
			if (!changed) {
				let width: number = Math.max(this.minLabelWidth, this.maxLabelWidth);
				if (width < this.maxWidth) {
					this.maxWidth = width;
					changed = true;
				}
			}
			if (changed) {
				this.viewportWidth = this.maxWidth;
			}
		} else if (rc != null) {
			if (this._currentPixelRatio != 1) {
				rc.save();
				rc.scale(this._currentPixelRatio, this._currentPixelRatio);
			}
			let brush: Brush = this.sparkline.verticalAxisBrush;
			let align: number = 1;
			let fill: string = brush == null ? null : brush._fill;
			let p: string = this.getCss()[3];
			if (p == "left") {
				align = 0;
			} else if (p == "center") {
				align = 0.5;
			}
			this.maxLabel.canvasTop = 2;
			this.maxLabel.canvasLeft = (this.maxWidth - this.maxLabelWidth) * align + 1;
			this.minLabel.canvasLeft = (this.maxWidth - this.minLabelWidth) * align + 1;
			this.minLabel.canvasTop = this.viewportHeight - this.fontHeight - 2;
			let color: Color = new Color();
			let wasNull: boolean = true;
			if (brush != null) {
				color = brush.color;
				wasNull = false;
			}
			brush = new Brush();
			if (wasNull) {
				brush._fill = (this.css[2] == null) ? "#000000" : this.css[2];
			} else {
				brush.color = color;
			}
			this.minLabel.fill = this.maxLabel.fill = brush;
			rc.renderTextBlock(this.minLabel);
			rc.renderTextBlock(this.maxLabel);
			let thickness: number = this.thickness(), shift: number = thickness / 2;
			if (thickness >= 0.5) {
				brush = new Brush();
				if (fill == null) {
					fill = this.css[1];
				}
				brush._fill = (fill == null) ? "#000000" : fill;
				this._axisLine = new Line();
				this._axisLine.x1 = this.viewportWidth - shift;
				this._axisLine.x2 = this.viewportWidth - shift;
				this._axisLine.y1 = 0;
				this._axisLine.y2 = this.viewportHeight;
				this._axisLine._stroke = brush;
				this._axisLine.strokeThickness = thickness;
				rc.renderLine(this._axisLine);
			}
			if (this._currentPixelRatio != 1) {
				rc.restore();
			}
		}
		return changed;
	}
	getLabelValue(dataItem_: any): any {
		if (this.sparkline.hasFormatLabel()) {
			return this.sparkline.raiseFormatLabel(dataItem_);
		}
		let label_ = this.sparkline.verticalAxisLabel;
		return (typeof dataItem_ != 'undefined') ? dataItem_ : '';;
	}
	exportViewShapes(): SparklineAxisVisualData {
		let axis: SparklineAxisVisualData = new SparklineAxisVisualData();
		if (this._axisLine != null) {
			axis.axisLine = new LineVisualData(1, "VerticalAxisLine", this._axisLine);
			axis.axisLine.appearance.isVisible = this.canvas.width() > 0;
		}
		if (this.minLabel != null) {
			axis.minLabel = AppearanceHelper.fromTextElement(this.minLabel, this.font);
		}
		if (this.maxLabel != null) {
			axis.maxLabel = AppearanceHelper.fromTextElement(this.maxLabel, this.font);
		}
		return axis;
	}
	private pixelRatioChanged(pixelRatioMessage: PixelRatioMessage_Spark): void {
		this._currentPixelRatio = pixelRatioMessage.pixelRatio;
	}
}

/**
 * @hidden 
 */
export class XamSparklineView extends Base implements ISchedulableRender {
	static $t: Type = markType(XamSparklineView, 'XamSparklineView', (<any>Base).$type, [ISchedulableRender_$type]);
	private viewport: Rect = null;
	private marginViewport: Rect = null;
	private container: DomRenderer = null;
	private backgroundCanvas: DomWrapper = null;
	private horizontalAxisCanvas: DomWrapper = null;
	private verticalAxisCanvas: DomWrapper = null;
	backgroundContext: RenderingContext = null;
	horizontalAxisContext: RenderingContext = null;
	verticalAxisContext: RenderingContext = null;
	private eventProxy: EventProxy = null;
	private toolTipVisible: boolean = false;
	private markerSizes: number[] = <number[]>new Array(6);
	private _margin: number = -1;
	constructor() {
		super();
		this.markersPath._visibility = Visibility.Collapsed;
		this.negativeMarkersPath._visibility = Visibility.Collapsed;
		this.lowMarkersPath._visibility = Visibility.Collapsed;
		this.highMarkersPath._visibility = Visibility.Collapsed;
		this.firstMarkerPath._visibility = Visibility.Collapsed;
		this.lastMarkerPath._visibility = Visibility.Collapsed;
		this.rangePath._visibility = Visibility.Collapsed;
		let mh: Dictionary$2<Type, (message: Message_Spark) => void> = this.messageHandlers;
		mh.item((<any>ClearMessage_Spark).$type, (m: Message_Spark) => this.clearLayer(typeCast<ClearMessage_Spark>((<any>ClearMessage_Spark).$type, m)));
		mh.item((<any>PolygonMessage_Spark).$type, (m: Message_Spark) => this.updatePolygon(typeCast<PolygonMessage_Spark>((<any>PolygonMessage_Spark).$type, m)));
		mh.item((<any>ColumnMessage_Spark).$type, (m: Message_Spark) => this.updateColumns(typeCast<ColumnMessage_Spark>((<any>ColumnMessage_Spark).$type, m)));
		mh.item((<any>WinLossColumnMessage_Spark).$type, (m: Message_Spark) => this.updateWinLossColumns(typeCast<WinLossColumnMessage_Spark>((<any>WinLossColumnMessage_Spark).$type, m)));
		mh.item((<any>MarkerMessage_Spark).$type, (m: Message_Spark) => this.updateMarkers(typeCast<MarkerMessage_Spark>((<any>MarkerMessage_Spark).$type, m)));
		mh.item((<any>NormalRangeMessage_Spark).$type, (m: Message_Spark) => this.updateRange(typeCast<NormalRangeMessage_Spark>((<any>NormalRangeMessage_Spark).$type, m)));
		mh.item((<any>TrendLineMessage_Spark).$type, (m: Message_Spark) => this.updateTrendLine(typeCast<TrendLineMessage_Spark>((<any>TrendLineMessage_Spark).$type, m)));
		mh.item((<any>TooltipMessage_Spark).$type, (m: Message_Spark) => this.updateToolTip(typeCast<TooltipMessage_Spark>((<any>TooltipMessage_Spark).$type, m)));
		mh.item((<any>ToooltipTemplateMessage_Spark).$type, (m: Message_Spark) => this.updateToolTipTemplate(typeCast<ToooltipTemplateMessage_Spark>((<any>ToooltipTemplateMessage_Spark).$type, m)));
		mh.item((<any>ContainerMessage_Spark).$type, (m: Message_Spark) => this.containerProvided(typeCast<ContainerMessage_Spark>((<any>ContainerMessage_Spark).$type, m)));
		mh.item((<any>PixelRatioMessage_Spark).$type, (m: Message_Spark) => this.pixelRatioChanged(typeCast<PixelRatioMessage_Spark>((<any>PixelRatioMessage_Spark).$type, m)));
		mh.item((<any>BrushChangedMessage_Spark).$type, (m: Message_Spark) => this.updateBrush(typeCast<BrushChangedMessage_Spark>((<any>BrushChangedMessage_Spark).$type, m)));
		mh.item((<any>ContainerResizedMessage_Spark).$type, (m: Message_Spark) => this.onContainerResized());
		mh.item((<any>VisibilityMessage_Spark).$type, (m: Message_Spark) => this.updateVisibility(typeCast<VisibilityMessage_Spark>((<any>VisibilityMessage_Spark).$type, m)));
		mh.item((<any>NumberChangedMessage_Spark).$type, (m: Message_Spark) => this.updateNumericProperty(typeCast<NumberChangedMessage_Spark>((<any>NumberChangedMessage_Spark).$type, m)));
		mh.item((<any>ContainerSizeChangedMessage_Spark).$type, (m: Message_Spark) => this.onContainerResized());
		this.renderScheduler = new CanvasRenderScheduler();
		this.renderScheduler.register(this);
	}
	private pixelRatioChanged(pixelRatioMessage: PixelRatioMessage_Spark): void {
		this._currentPixelRatio = pixelRatioMessage.pixelRatio;
	}
	private sparkPath: Path = new Path();
	private negativeSparkPath: Path = new Path();
	private trendLinePath: Path = new Path();
	private rangePath: Path = new Path();
	private markersPath: Path = new Path();
	private negativeMarkersPath: Path = new Path();
	private lowMarkersPath: Path = new Path();
	private highMarkersPath: Path = new Path();
	private firstMarkerPath: Path = new Path();
	private lastMarkerPath: Path = new Path();
	private _serviceProvider: ServiceProvider_Spark = null;
	get serviceProvider(): ServiceProvider_Spark {
		return this._serviceProvider;
	}
	set serviceProvider(value: ServiceProvider_Spark) {
		let oldValue: ServiceProvider_Spark = this._serviceProvider;
		this._serviceProvider = value;
		this.onServiceProviderChanged(oldValue, this._serviceProvider);
		this._controller = null;
	}
	private _interactionMessages: MessageChannel_Spark = null;
	get interactionMessages(): MessageChannel_Spark {
		return this._interactionMessages;
	}
	set interactionMessages(value: MessageChannel_Spark) {
		this._interactionMessages = value;
	}
	private _renderingMessages: MessageChannel_Spark = null;
	get renderingMessages(): MessageChannel_Spark {
		return this._renderingMessages;
	}
	set renderingMessages(value: MessageChannel_Spark) {
		this._renderingMessages = value;
	}
	private _messageHandlers: Dictionary$2<Type, (message: Message_Spark) => void> = new Dictionary$2<Type, (message: Message_Spark) => void>((<any>Type).$type, Delegate_$type, 0);
	get messageHandlers(): Dictionary$2<Type, (message: Message_Spark) => void> {
		return this._messageHandlers;
	}
	set messageHandlers(value: Dictionary$2<Type, (message: Message_Spark) => void>) {
		this._messageHandlers = value;
	}
	private onServiceProviderChanged(oldValue: ServiceProvider_Spark, newValue: ServiceProvider_Spark): void {
		if (oldValue != null) {
			this.renderingMessages.detachTarget(runOn(this, this.messageReceived));
			this.interactionMessages = null;
		}
		if (newValue != null) {
			this.renderingMessages = <MessageChannel_Spark>newValue.getService("RenderingMessages");
			this.interactionMessages = <MessageChannel_Spark>newValue.getService("InteractionMessages");
			this.renderingMessages.attachTarget(runOn(this, this.messageReceived));
			this.startInteractionChannel(this.interactionMessages);
		}
	}
	private startInteractionChannel(messageChannel: MessageChannel_Spark): void {
		this.interactionMessages = messageChannel;
	}
	private messageReceived(m: Message_Spark): void {
		let h: (message: Message_Spark) => void;
		if (((() => { let $ret = this.messageHandlers.tryGetValue(getInstanceType(m), h); h = $ret.p1; return $ret.ret; })())) {
			h(m);
		}
	}
	private _controller: SparklineController = null;
	get controller(): SparklineController {
		if (this._controller == null) {
			this._controller = <SparklineController>this.serviceProvider.getService("Controller");
		}
		return this._controller;
	}
	private static readonly iDEAL_WIDTH: number = 100;
	private static readonly iDEAL_HEIGHT: number = 50;
	private sparklineView_MouseMove(p: Point, onMouseMove: boolean, isFinger: boolean): void {
		let m: MouseMoveMessage_Spark = new MouseMoveMessage_Spark();
		m.position = p;
		this.interactionMessages.sendMessage(m);
	}
	private sparklineView_MouseLeave(p: Point): void {
		let m: MouseLeaveMessage_Spark = new MouseLeaveMessage_Spark();
		this.interactionMessages.sendMessage(m);
	}
	private updateBrush(b: BrushChangedMessage_Spark): void {
		this.updateBrush1(b.brushPropertyName, b.brush, null, -1, -1);
	}
	private updateBrush1(name: string, brush: Brush, clr: string, opacity: number, thickness: number): void {
		let path: Path = null;
		let stroke: boolean = true, fill: boolean = true;
		switch (name) {
			case "sparkpath":

			case XamSparkline.brushPropertyName:
			path = this.sparkPath;
			break;

			case "negativesparkpath":

			case XamSparkline.negativeBrushPropertyName:
			path = this.negativeSparkPath;
			break;

			case "markers":

			case XamSparkline.markerBrushPropertyName:
			path = this.markersPath;
			break;

			case "firstmarker":

			case XamSparkline.firstMarkerBrushPropertyName:
			path = this.firstMarkerPath;
			break;

			case "lastmarker":

			case XamSparkline.lastMarkerBrushPropertyName:
			path = this.lastMarkerPath;
			break;

			case "highmarker":

			case XamSparkline.highMarkerBrushPropertyName:
			path = this.highMarkersPath;
			break;

			case "lowmarker":

			case XamSparkline.lowMarkerBrushPropertyName:
			path = this.lowMarkersPath;
			break;

			case "negativemarkers":

			case XamSparkline.negativeMarkerBrushPropertyName:
			path = this.negativeMarkersPath;
			break;

			case "trendline":

			case XamSparkline.trendLineBrushPropertyName:
			path = this.trendLinePath;
			fill = false;
			break;

			case "range":

			case XamSparkline.normalRangeFillPropertyName:
			path = this.rangePath;
			stroke = false;
			break;

		}

		if (path == null) {
			return;
		}
		if (brush == null && clr != null) {
			brush = new Brush();
			brush._fill = clr;
		}
		if (brush != null) {
			if (fill && (clr == null || path._fill == null)) {
				path._fill = brush;
			}
			if (stroke && (clr == null || path._stroke == null)) {
				path._stroke = brush;
			}
		}
		if (opacity > 0 && opacity < 1) {
			path._opacity = opacity;
		}
		if (thickness > 0 && (clr == null || path.strokeThickness <= 0)) {
			path.strokeThickness = thickness;
		}
		this.makeDirty();
	}
	private updateVisibility(b: VisibilityMessage_Spark): void {
		switch (b.pathPropertyName) {
			case XamSparkline.markerVisibilityPropertyName:
			this.markersPath._visibility = b.visibility;
			break;

			case XamSparkline.firstMarkerVisibilityPropertyName:
			this.firstMarkerPath._visibility = b.visibility;
			break;

			case XamSparkline.lastMarkerVisibilityPropertyName:
			this.lastMarkerPath._visibility = b.visibility;
			break;

			case XamSparkline.highMarkerVisibilityPropertyName:
			this.highMarkersPath._visibility = b.visibility;
			break;

			case XamSparkline.lowMarkerVisibilityPropertyName:
			this.lowMarkersPath._visibility = b.visibility;
			break;

			case XamSparkline.negativeMarkerVisibilityPropertyName:
			this.negativeMarkersPath._visibility = b.visibility;
			break;

			case XamSparkline.normalRangeVisibilityPropertyName:
			this.rangePath._visibility = b.visibility;
			break;

			case XamSparkline.toolTipVisibilityPropertyName:
			this.toolTipVisible = b.visibility == Visibility.Visible;
			break;

		}

		this.makeDirty();
	}
	private updateNumericProperty(b: NumberChangedMessage_Spark): void {
		let v: number = b.value;
		if (v <= 0) {
			return;
		}
		switch (b.propertyName) {
			case XamSparkline.lineThicknessPropertyName:
			this.sparkPath.strokeThickness = this.negativeSparkPath.strokeThickness = v;
			break;

			case XamSparkline.trendLineThicknessPropertyName:
			this.trendLinePath.strokeThickness = v;
			break;

		}

		this.makeDirty();
	}
	private containerProvided(m: ContainerMessage_Spark): void {
		if (m.container == null) {
			if (this.eventProxy != null) {
				this.eventProxy.destroy();
				let $t = (<CanvasGestureDOMEventProxy>this.eventProxy);
				$t.onMouseLeave = delegateRemove($t.onMouseLeave, runOn(this, this.sparklineView_MouseLeave));
				let $t1 = (<CanvasGestureDOMEventProxy>this.eventProxy);
				$t1.onMouseOver = delegateRemove($t1.onMouseOver, runOn(this, this.sparklineView_MouseMove));
				this.eventProxy = null;
			}
			this.container = null;
			this.backgroundCanvas = null;
			this.horizontalAxisCanvas = null;
			this.verticalAxisCanvas = null;
			this.backgroundContext = this.horizontalAxisContext = this.verticalAxisContext = null;
			this.renderScheduler.provideRenderer(null);
			return;
		}
		let container: DomRenderer = <DomRenderer><any>m.container;
		this.renderScheduler.provideRenderer(container);
		this.container = container;
		this.container.rootWrapper.setStyleProperty("position", "relative");
		this.backgroundCanvas = this.container.createElement("canvas");
		this.backgroundCanvas.setStyleProperty("position", "absolute");
		this.horizontalAxisCanvas = this.container.createElement("canvas");
		this.horizontalAxisCanvas.setStyleProperty("position", "absolute");
		this.verticalAxisCanvas = this.container.createElement("canvas");
		this.verticalAxisCanvas.setStyleProperty("position", "absolute");
		this.container.append(this.backgroundCanvas);
		this.container.append(this.horizontalAxisCanvas);
		this.container.append(this.verticalAxisCanvas);
		this.backgroundContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.backgroundCanvas));
		this.horizontalAxisContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.horizontalAxisCanvas));
		this.verticalAxisContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.verticalAxisCanvas));
		this.eventProxy = new CanvasGestureDOMEventProxy(this.backgroundCanvas, this.container, false);
		let $t2 = (<CanvasGestureDOMEventProxy>this.eventProxy);
		$t2.onMouseLeave = delegateCombine($t2.onMouseLeave, runOn(this, this.sparklineView_MouseLeave));
		let $t3 = (<CanvasGestureDOMEventProxy>this.eventProxy);
		$t3.onMouseOver = delegateCombine($t3.onMouseOver, runOn(this, this.sparklineView_MouseMove));
		(<CanvasGestureDOMEventProxy>this.eventProxy).shouldInteractForDirection = (p: Point) => false;
		this.getDefaultColors();
		this.onContainerResized();
	}
	private getDefaultColors(): void {
		let names: string[] = [ "sparkpath", "negativesparkpath", "trendline", "markers", "firstmarker", "lastmarker", "highmarker", "lowmarker", "negativemarkers", "range" ];
		let clrs: string[] = [ "#7446B9", "#C62828", "#565656", "#9FB328", "#2E9CA6", "#DC3F76", "#F96232", "#3F51B5", "#C62828", "#66666666" ];
		for (let i: number = 0; i < 10; i++) {
			let name: string = names[i];
			let css: string[] = [ "background-color", "opacity", "border-top-width" ];
			this.cssValue("ui-sparkline-" + name, css);
			let width: number = XamSparklineView.toDouble(css[2], (i < 3) ? (i < 2 ? 2 : 1.5) : -1);
			if (i > 2 && i < 9) {
				this.markerSizes[i - 3] = width;
			}
			this.updateBrush1(name, null, (css[0] == null) ? clrs[i] : css[0], XamSparklineView.toDouble(css[1], -1), i < 3 ? width : -1);
		}
	}
	static toDouble(v_: string, def: number): number {
		let d_: any = (v_ == null || v_.length < 1) ? null : parseFloat(v_);
		return (d_ == null || d_.toString() == "NaN") ? def : <number>d_;
	}
	cssValue(css: string, prop: string[]): string[] {
		this.container.startCSSQuery();
		for (let i = 0; i < prop.length; i++) {
			prop[i] = this.container.getCssDefaultPropertyValue(css, prop[i]);
		}
		this.container.endCSSQuery();
		return prop;
	}
	private _inContainerResized: boolean = false;
	private onContainerResized(): void {
		if (this.container == null || this._inContainerResized) {
			return;
		}
		this._inContainerResized = true;
		this.initializeScalingRatio(this.controller.model);
		let width: number = this.container.rootWrapper.width(), height: number = this.container.rootWrapper.height();
		let back: DomWrapper, ha: DomWrapper, va: DomWrapper;
		back = this.backgroundCanvas;
		ha = this.horizontalAxisCanvas;
		va = this.verticalAxisCanvas;
		let msg: ContainerResizedMessage_Spark = new ContainerResizedMessage_Spark();
		msg.width = width;
		msg.height = height;
		msg.horizontalAxisContext = this.horizontalAxisContext;
		msg.container = this.container;
		msg.verticalAxisContext = this.verticalAxisContext;
		msg.verticalAxisWidth = 0;
		msg.horizontalAxisHeight = 0;
		msg.horizontalAxisCanvas = ha;
		msg.backgroundCanvas = back;
		msg.verticalAxisCanvas = va;
		this.renderingMessages.sendMessage(msg);
		let xHeight: number = msg.horizontalAxisHeight, yWidth: number = msg.verticalAxisWidth, w: number = msg.width - yWidth, h: number = msg.height - xHeight;
		let width0: number = w, widthA: number = width - w, height0: number = h, heightA: number = height - h;
		back.setStyleProperty("width", width0.toString() + "px");
		back.setStyleProperty("height", height0.toString() + "px");
		back.setAttribute("width", (width0 * this._currentPixelRatio).toString());
		back.setAttribute("height", (height0 * this._currentPixelRatio).toString());
		back.setStyleProperty("marginLeft", widthA + "px");
		width0 = (w + yWidth);
		this.setSize(ha, width0, heightA, width0 * this._currentPixelRatio, heightA * this._currentPixelRatio);
		ha.setStyleProperty("marginTop", height0 + "px");
		ha.setStyleProperty("marginLeft", (width - w - yWidth).toString() + "px");
		this.setSize(va, widthA, height0, widthA * this._currentPixelRatio, height0 * this._currentPixelRatio);
		this.viewport = new Rect(0, 0, 0, w, h);
		if (this.eventProxy != null) {
			this.eventProxy.viewport = this.viewport;
		}
		this.updateViewportMargins();
		let m = new ViewportChangedMessage_Spark();
		m.newLeft = this.viewport.left;
		m.newTop = this.viewport.top;
		m.newHeight = this.viewport.height;
		m.newWidth = this.viewport.width;
		this.renderingMessages.sendMessage(m);
		this._inContainerResized = false;
	}
	doMargin(reset: boolean): void {
		if (reset) {
			this._margin = -1;
		} else if (this._margin < 0) {
			this.updateViewportMargins();
		}
	}
	private updateViewportMargins(): void {
		let l = this.viewport.left;
		let w = this.viewport.width;
		let h = this.viewport.height;
		let margin = this.margin(true);
		let marginViewport = new Rect(0, l + margin, margin, w - margin * 2, h - margin * 2);
		let m: ViewportChangedMessage_Spark = new ViewportChangedMessage_Spark();
		m.newLeft = marginViewport.left;
		m.newTop = marginViewport.top;
		m.newHeight = marginViewport.height;
		m.newWidth = marginViewport.width;
		this.marginViewport = marginViewport;
		this.interactionMessages.sendMessage(m);
	}
	private clearLayer(message: ClearMessage_Spark): void {
		if (Rect.l_op_Equality(this.viewport, null)) {
			return;
		}
		switch (message.layer) {
			case SparkLayerType.MarkerLayer:
			this.markersPath.data = null;
			this.firstMarkerPath.data = null;
			this.lastMarkerPath.data = null;
			this.highMarkersPath.data = null;
			this.lowMarkersPath.data = null;
			this.negativeMarkersPath.data = null;
			break;

			case SparkLayerType.RangeLayer:
			this.rangePath.data = null;
			break;

			case SparkLayerType.SparkLayer:
			this.sparkPath.data = null;
			this.negativeSparkPath.data = null;
			break;

			case SparkLayerType.ToolTipLayer:
			this.doTooltip(null);
			break;

			case SparkLayerType.TrendLayer:
			this.trendLinePath.data = null;
			break;

		}

		if (message.axisVisibilityChanged) {
			this.onContainerResized();
		}
	}
	margin(reset: boolean): number {
		if (reset) {
			this._margin = -1;
		}
		let margin: number = this._margin;
		if (margin >= 0) {
			return margin;
		}
		margin = 0;
		let xam: XamSparkline = this.controller.model;
		if (xam.markerVisibility == Visibility.Visible) {
			margin = this.max(margin, xam.markerSize, 0);
		}
		if (xam.firstMarkerVisibility == Visibility.Visible) {
			margin = this.max(margin, xam.firstMarkerSize, 1);
		}
		if (xam.lastMarkerVisibility == Visibility.Visible) {
			margin = this.max(margin, xam.lastMarkerSize, 2);
		}
		if (xam.highMarkerVisibility == Visibility.Visible) {
			margin = this.max(margin, xam.highMarkerSize, 3);
		}
		if (xam.lowMarkerVisibility == Visibility.Visible) {
			margin = this.max(margin, xam.lowMarkerSize, 4);
		}
		if (xam.negativeMarkerVisibility == Visibility.Visible) {
			margin = this.max(margin, xam.negativeMarkerSize, 5);
		}
		this._margin = margin;
		return margin;
	}
	private max(old: number, val: number, def: number): number {
		if (val >= 0) {
			return val > old ? val : old;
		}
		return this.markerSizes[def] > old ? this.markerSizes[def] : old;
	}
	private updateMarkers(markerMessage: MarkerMessage_Spark): void {
		this.updateMarkers1(this.markersPath, markerMessage.markerPoints, markerMessage.markerSize, 0);
		this.updateMarkers1(this.negativeMarkersPath, markerMessage.negativeMarkerPoints, markerMessage.negativeMarkerSize, 5);
		this.updateMarkers1(this.lowMarkersPath, markerMessage.lowPoints, markerMessage.lowMarkerSize, 4);
		this.updateMarkers1(this.highMarkersPath, markerMessage.highPoints, markerMessage.highMarkerSize, 3);
		this.updateMarkers2(this.firstMarkerPath, markerMessage.firstPoint, markerMessage.firstMarkerSize, 1);
		this.updateMarkers2(this.lastMarkerPath, markerMessage.lastPoint, markerMessage.lastMarkerSize, 2);
		this.makeDirty();
	}
	private updateMarkers2(path: Path, point: Point, size: number, def: number): void {
		let points: List$1<Point> = ((() => {
			let $ret = new List$1<Point>(Point_$type, 0);
			$ret.add(point);
			return $ret;
		})());
		this.updateMarkers1(path, points, size, def);
	}
	private updateMarkers1(path: Path, points: List$1<Point>, size: number, def: number): void {
		if (size < 0) {
			size = this.markerSizes[def];
		}
		path.data = this.createMarkers(points, size < 0.1 ? DeviceUtils.toPixelUnits(3) : size);
		if (this.controller.model.displayType != SparklineDisplayType.WinLoss) {
			let transform: TranslateTransform = new TranslateTransform();
			transform.x = this.controller.framePreparer.offset;
			path.renderTransform = transform;
		} else {
			path.renderTransform = null;
		}
	}
	private createMarkers(markers: List$1<Point>, markerSize: number): GeometryGroup {
		let geometry: GeometryGroup = new GeometryGroup();
		geometry.fillRule = FillRule.Nonzero;
		let viewportRight: number = this.viewport.right;
		let viewportBottom: number = this.viewport.bottom;
		for (let marker of fromEnum<Point>(markers)) {
			if (<boolean>(!marker)) {
				continue;
			}
			if (marker.x < 0 || marker.y < 0 || marker.x > viewportRight || marker.y > viewportBottom) {
				continue;
			}
			let e: EllipseGeometry = new EllipseGeometry();
			e.radiusX = markerSize;
			e.radiusY = markerSize;
			e.center = marker;
			geometry.children.add(e);
		}
		return geometry;
	}
	private updatePolygon(pm: PolygonMessage_Spark): void {
		let geometry: PathGeometry = new PathGeometry();
		let closed: boolean = this.controller.model.displayType == SparklineDisplayType.Area;
		for (let pointList of fromEnum<Point[]>(pm.points)) {
			let numPoints: number = pointList.length;
			if (numPoints == 0) {
				continue;
			}
			let figure: PathFigure = new PathFigure();
			figure._isClosed = figure._isFilled = closed;
			figure._startPoint = pointList[0];
			for (let i: number = 1; i < numPoints; i++) {
				let line: LineSegment = new LineSegment(1);
				line.point = pointList[i];
				figure._segments.add(line);
			}
			geometry.figures.add(figure);
		}
		this.sparkPath.data = geometry;
		this.makeDirty();
	}
	private createColumns(columns: List$1<Point>, message: RenderingMessage_Spark): GeometryGroup {
		let winlossMessage: WinLossColumnMessage_Spark = typeCast<WinLossColumnMessage_Spark>((<any>WinLossColumnMessage_Spark).$type, message);
		let columnMessage: ColumnMessage_Spark = typeCast<ColumnMessage_Spark>((<any>ColumnMessage_Spark).$type, message);
		let geometry: GeometryGroup = new GeometryGroup();
		let offset: number = winlossMessage != null ? winlossMessage.offset : columnMessage.offset;
		let crossing: number = winlossMessage != null ? winlossMessage.crossing : columnMessage.crossing;
		let a: number = offset * 0.1;
		for (let column of fromEnum<Point>(columns)) {
			let width: number = offset * 2 - a * 2;
			let height: number = Math.abs(crossing - column.y);
			let x: number = column.x + a;
			let y: number = (column.y > crossing ? crossing : column.y);
			let r: RectangleGeometry = new RectangleGeometry();
			r.rect = new Rect(0, x, y, width, height);
			geometry.children.add(r);
		}
		return geometry;
	}
	private updateColumns(cm: ColumnMessage_Spark): void {
		this.updateColumns1(this.sparkPath, cm.columns, cm);
		this.updateColumns1(this.negativeSparkPath, cm.negativeColumns, cm);
		this.makeDirty();
	}
	private updateColumns2(path: Path, point: Point, message: RenderingMessage_Spark): void {
		let points: List$1<Point> = ((() => {
			let $ret = new List$1<Point>(Point_$type, 0);
			$ret.add(point);
			return $ret;
		})());
		this.updateColumns1(path, points, message);
	}
	private updateColumns1(path: Path, points: List$1<Point>, message: RenderingMessage_Spark): void {
		path.data = this.createColumns(points, message);
	}
	private updateWinLossColumns(message: WinLossColumnMessage_Spark): void {
		this.updateColumns1(this.sparkPath, message.columns, message);
		this.updateColumns1(this.negativeSparkPath, message.negativeColumns, message);
		this.makeDirty();
	}
	private updateRange(message: NormalRangeMessage_Spark): void {
		let rg: RectangleGeometry = new RectangleGeometry();
		rg.rect = new Rect(0, message.x, message.y, message.width, message.height);
		this.rangePath.data = rg;
		this.makeDirty();
	}
	private updateTrendLine(message: TrendLineMessage_Spark): void {
		if (message.points.length == 0) {
			return;
		}
		let geometry: PathGeometry = new PathGeometry();
		let figure: PathFigure = new PathFigure();
		figure._isClosed = figure._isFilled = false;
		figure._startPoint = message.points[0];
		let numPoints: number = message.points.length;
		for (let i: number = 1; i < numPoints; i++) {
			let line: LineSegment = new LineSegment(1);
			line.point = message.points[i];
			figure._segments.add(line);
		}
		geometry.figures.add(figure);
		this.trendLinePath.data = geometry;
		this.makeDirty();
	}
	private _tooltip: any = null;
	private updateToolTipTemplate(message: ToooltipTemplateMessage_Spark): void {
		this._tooltip = message.template;
	}
	private updateToolTip(tooltipMessage: TooltipMessage_Spark): void {
		if (!this.toolTipVisible) {
			this.doTooltip(null);
			return;
		}
		let mouseX: number = <number>truncate(Math.round(tooltipMessage.xOffset - 10));
		let mouseY: number = <number>truncate(Math.round(tooltipMessage.yOffset - 10));
		mouseX = <number>truncate(Math.round(mouseX * this._currentPixelRatio));
		mouseY = <number>truncate(Math.round(mouseY * this._currentPixelRatio));
		let imageData = this.backgroundContext.getPixelAt(mouseX, mouseY);
		if (imageData[3] > 0) {
			this.doTooltip(tooltipMessage);
		} else {
			this.doTooltip(null);
		}
	}
	private _dc: DataContext = null;
	private doTooltip(m: TooltipMessage_Spark): void {
		let x_: number = 0, y_: number = 0;
		let v_: any = null, t_: any = null, i_: any = this.container;
		{
			if (m != null) {
				t_ = this._tooltip;
				x_ = m.xOffset + 6;
				y_ = m.yOffset + 6;
				let c: SparklineToolTipContext = <SparklineToolTipContext>m.context;
				let f_: number = c.first, l_: number = c.last, o_: number = c.low, h_: number = c.high;
				v_ = {First:f_,Last:l_,Low:o_,High:h_};
			}
			let ren_ = this.container;
			if (this._dc == null) {
				this._dc = new DataContext();
			}
			let dc_: DataContext = this._dc;
			dc_.item = v_;
			dc_.series = this;
			let tt_ = <DomWrapper><any>this._tooltip;
			if (tt_ != null) {
				if (v_ != null) {
					(tt_ as any).updateToolTip(dc_);
					tt_.setRawPosition(x_, y_);
				} else {
					(tt_ as any).hideToolTip();
				}
			}
		}
	}
	private _renderScheduler: CanvasRenderScheduler = null;
	get renderScheduler(): CanvasRenderScheduler {
		return this._renderScheduler;
	}
	set renderScheduler(value: CanvasRenderScheduler) {
		this._renderScheduler = value;
	}
	private _isDirty: boolean = false;
	private _currentPixelRatio: number = 1;
	get isDirty(): boolean {
		return this._isDirty;
	}
	set isDirty(value: boolean) {
		this._isDirty = value;
	}
	private makeDirty(): void {
		if (!this.isDirty) {
			this.isDirty = true;
			this.renderScheduler.schedule1(this.backgroundContext, null);
		}
	}
	undirty(clearRect: boolean): void {
		this._isDirty = false;
		this.render();
	}
	get index(): number {
		return 10;
	}
	private renderPathWithTransform(path: Path, c: RenderingContext): void {
		c.renderPath(path);
	}
	private render(): void {
		let c: RenderingContext = this.backgroundContext;
		if (c != null && c.shouldRender) {
			if (this._currentPixelRatio != 1) {
				c.save();
				c.scale(this._currentPixelRatio, this._currentPixelRatio);
			}
			c.clearRectangle(this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height);
			c.renderPath(this.sparkPath);
			c.renderPath(this.negativeSparkPath);
			this.renderPathWithTransform(this.markersPath, c);
			this.renderPathWithTransform(this.negativeMarkersPath, c);
			this.renderPathWithTransform(this.highMarkersPath, c);
			this.renderPathWithTransform(this.lowMarkersPath, c);
			this.renderPathWithTransform(this.firstMarkerPath, c);
			this.renderPathWithTransform(this.lastMarkerPath, c);
			c.renderPath(this.rangePath);
			c.renderPath(this.trendLinePath);
			if (this._currentPixelRatio != 1) {
				c.restore();
			}
		}
		let m: AxisRenderMessage_Spark = new AxisRenderMessage_Spark();
		m.renderInCanvas = true;
		this.renderingMessages.sendMessage(m);
		this.postRender();
	}
	postRender(): void {
	}
	exportViewShapes(svd: SparklineVisualData): void {
		svd.viewport = new RectData(this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height);
		svd.marginViewport = new RectData(this.marginViewport.left, this.marginViewport.top, this.marginViewport.width, this.marginViewport.height);
		svd.sparkPath = new PathVisualData(1, "SparkPath", this.sparkPath);
		svd.negativeSparkPath = new PathVisualData(1, "NegativeSparkPath", this.negativeSparkPath);
		svd.trendLinePath = new PathVisualData(1, "TrendLinePath", this.trendLinePath);
		svd.rangePath = new PathVisualData(1, "RangePath", this.rangePath);
		svd.markersPath = new PathVisualData(1, "MarkersPath", this.markersPath);
		svd.negativeMarkersPath = new PathVisualData(1, "NegativeMarkersPath", this.negativeMarkersPath);
		svd.lowMarkersPath = new PathVisualData(1, "LowMarkersPath", this.lowMarkersPath);
		svd.highMarkersPath = new PathVisualData(1, "HighMarkersPath", this.highMarkersPath);
		svd.firstMarkerPath = new PathVisualData(1, "FirstMarkerPath", this.firstMarkerPath);
		svd.lastMarkerPath = new PathVisualData(1, "LastMarkerPath", this.lastMarkerPath);
	}
	preRender(): void {
	}
	isValid(): boolean {
		return true;
	}
	getFont(classString: string): FontInfo {
		return FontUtil.getFontForClass(this.container, classString);
	}
	private setSize(target: DomWrapper, width: number, height: number, pixelWidth: number, pixelHeight: number): void {
		target.setStyleProperty("width", width + "px");
		target.setStyleProperty("height", height + "px");
		target.setAttribute("width", pixelWidth.toString());
		target.setAttribute("height", pixelHeight.toString());
	}
	initializeScalingRatio(sparkline: XamSparkline): void {
		let userRatio = sparkline.pixelScalingRatio;
		let actualRatio = sparkline.actualPixelScalingRatio;
		if (!isNaN_(userRatio) && userRatio != 0) {
			return;
		}
		if (<any>window.devicePixelRatio != undefined && window.devicePixelRatio != actualRatio) {
			sparkline.actualPixelScalingRatio = window.devicePixelRatio;
		}
	}
	onDetachedFromUI(): void {
		if (this.eventProxy != null) {
			this.eventProxy.unbindFromSource(this.backgroundCanvas, "");
		}
	}
	onAttachedToUI(): void {
		this.initializeScalingRatio(this._controller.model);
		if (this.eventProxy != null) {
			this.eventProxy.bindToSource(this.backgroundCanvas, "");
		}
	}
}

/**
 * @hidden 
 */
export class SparkFramePreparer extends Base {
	static $t: Type = markType(SparkFramePreparer, 'SparkFramePreparer');
	controller: SparklineController = null;
	offset: number = 0;
	crossing: number = 0;
	prepareFrame(frame: SparkFrame): void {
		this.controller.view.doMargin(false);
		frame.buckets.clear();
		frame.trendPoints.clear();
		frame.markers.clear();
		frame.negativeMarkers.clear();
		frame.lowPoints.clear();
		frame.highPoints.clear();
		let valueColumn: IFastItemColumn$1<number> = this.controller.valueColumn;
		if (valueColumn == null) {
			return;
		}
		let itemCount: number = valueColumn.count;
		let top: number = this.controller.viewport.top;
		let left: number = this.controller.viewport.left;
		let width: number = this.controller.viewport.width;
		let height: number = this.controller.viewport.height;
		let bottom: number = this.controller.viewport.bottom;
		let rowsPerBucket: number = Math.floor((itemCount + 1) / width);
		let bucketSize: number = <number>truncate(Math.max(1, rowsPerBucket));
		let firstBucket: number = 0;
		let lastBucket: number = <number>truncate(Math.ceil(1 * itemCount / bucketSize));
		let zero: number = 0;
		let trendValues: List$1<number> = new List$1<number>(Number_$type, 0);
		let trendLineType: TrendLineType = this.controller.model.trendLineType;
		let displayType: SparklineDisplayType = this.controller.model.displayType;
		let trendLinePeriod: number = this.controller.model.trendLinePeriod;
		let showTrendline: boolean = trendLineType != TrendLineType.None && trendLinePeriod >= 1;
		let average: IEnumerable$1<number> = null;
		let trendCoefficients: number[] = null;
		if (displayType == SparklineDisplayType.Area || displayType == SparklineDisplayType.Line) {
			this.offset = 0;
		} else {
			if (lastBucket == 0) {
				this.offset = 0;
			} else {
				this.offset = width / lastBucket / 2;
			}
		}
		if (showTrendline) {
			let GetUnscaledX: (arg1: number) => number = (i: number) => i + 1;
			let GetUnscaledY: (arg1: number) => number = (i: number) => valueColumn.item(i);
			let GetScaledXValue: (arg1: number) => number = (x: number) => this.controller.getScaledXValue(x);
			let GetScaledYValue: (arg1: number) => number = (y: number) => this.controller.getScaledYValue(y);
			switch (this.controller.model.trendLineType) {
				case TrendLineType.SimpleAverage:
				average = TrendCalculators.sMA(valueColumn, trendLinePeriod);
				break;

				case TrendLineType.ExponentialAverage:
				average = TrendCalculators.eMA(valueColumn, trendLinePeriod);
				break;

				case TrendLineType.ModifiedAverage:
				average = TrendCalculators.mMA(valueColumn, trendLinePeriod);
				break;

				case TrendLineType.CumulativeAverage:
				average = TrendCalculators.cMA(valueColumn);
				break;

				case TrendLineType.WeightedAverage:
				average = TrendCalculators.wMA(valueColumn, trendLinePeriod);
				break;

				case TrendLineType.LinearFit:
				trendCoefficients = LeastSquaresFit.linearFit(itemCount, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.QuadraticFit:
				trendCoefficients = LeastSquaresFit.quadraticFit(itemCount, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.CubicFit:
				trendCoefficients = LeastSquaresFit.cubicFit(itemCount, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.QuarticFit:
				trendCoefficients = LeastSquaresFit.quarticFit(itemCount, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.QuinticFit:
				trendCoefficients = LeastSquaresFit.quinticFit(itemCount, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.ExponentialFit:
				trendCoefficients = LeastSquaresFit.exponentialFit(itemCount, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.LogarithmicFit:
				trendCoefficients = LeastSquaresFit.logarithmicFit(itemCount, GetUnscaledX, GetUnscaledY);
				break;

				case TrendLineType.PowerLawFit:
				trendCoefficients = LeastSquaresFit.powerLawFit(itemCount, GetUnscaledX, GetUnscaledY);
				break;

			}

			if (average != null) {
				for (let value of fromEnum<number>(average)) {
					trendValues.add(value);
				}
			}
			if (trendCoefficients != null) {
				let xmin: number = firstBucket * bucketSize;
				let xmax: number = lastBucket * bucketSize;
				if (displayType == SparklineDisplayType.Area || displayType == SparklineDisplayType.Line) {
					xmax = xmax - 1;
				}
				let xStart: number = 0 + this.offset;
				let xEnd: number = width - this.offset;
				let d: number = 0;
				if (this.offset != 0) {
					d = 0.5;
				}
				for (let i: number = xStart; i <= xEnd; i += 2) {
					let p: number = i / (width - 1);
					let xi: number = xmin + p * (xmax - xmin);
					let yi: number = NaN;
					switch (trendLineType) {
						case TrendLineType.LinearFit:
						yi = LeastSquaresFit.linearEvaluate(trendCoefficients, xi - d);
						break;

						case TrendLineType.QuadraticFit:
						yi = LeastSquaresFit.quadraticEvaluate(trendCoefficients, xi - d);
						break;

						case TrendLineType.CubicFit:
						yi = LeastSquaresFit.cubicEvaluate(trendCoefficients, xi - d);
						break;

						case TrendLineType.QuarticFit:
						yi = LeastSquaresFit.quarticEvaluate(trendCoefficients, xi - d);
						break;

						case TrendLineType.QuinticFit:
						yi = LeastSquaresFit.quinticEvaluate(trendCoefficients, xi - d);
						break;

						case TrendLineType.ExponentialFit:
						yi = LeastSquaresFit.exponentialEvaluate(trendCoefficients, xi - d);
						break;

						case TrendLineType.LogarithmicFit:
						yi = LeastSquaresFit.logarithmicEvaluate(trendCoefficients, xi - d);
						break;

						case TrendLineType.PowerLawFit:
						yi = LeastSquaresFit.powerLawEvaluate(trendCoefficients, xi - d);
						break;

					}

					xi = GetScaledXValue(xi);
					yi = GetScaledYValue(yi);
					if (!isNaN_(yi) && !isInfinity(yi)) {
						frame.trendPoints.add(<Point>{ $type: Point_$type, x: xi, y: yi });
					}
				}
			}
		}
		let minValue: number = this.controller.valueColumn.minimum;
		let maxValue: number = this.controller.valueColumn.maximum;
		let axisMinimum: number = this.controller.model.actualMinimum;
		let axisMaximum: number = this.controller.model.actualMaximum;
		this.crossing = bottom - (zero - axisMinimum) / (axisMaximum - axisMinimum) * height;
		if (this.crossing < 0) {
			this.crossing = 0;
		} else if (this.crossing > bottom) {
			this.crossing = bottom;
		}
		let crossingValue = this.crossing;
		let yValue: number;
		for (let i1: number = firstBucket; i1 < lastBucket; i1++) {
			let bucket: number[] = this.getBucket(i1, bucketSize, itemCount);
			let bucketMin = bucket[1];
			let bucketMax = bucket[2];
			this.scaleBucket(bucket, itemCount, this.controller.viewport, axisMinimum, axisMaximum);
			yValue = bucket[1];
			if (bucket[2] < crossingValue) {
				yValue = bucket[2];
			}
			frame.buckets.add(bucket);
			if (!isNaN_(bucket[0]) && !isNaN_(bucket[1])) {
				frame.markers.add(<Point>{ $type: Point_$type, x: bucket[0], y: yValue });
			}
			if (showTrendline && average != null) {
				let index: number = i1 * bucketSize;
				let scaledTrendValue: number = bottom - (((trendValues._inner[index] - minValue) / (maxValue - minValue)) * height);
				frame.trendPoints.add(<Point>{ $type: Point_$type, x: bucket[0] + this.offset, y: scaledTrendValue });
			}
			if (bucketMin < zero) {
				frame.negativeMarkers.add(<Point>{ $type: Point_$type, x: bucket[0], y: bucket[1] });
			}
			if (minValue == bucketMin) {
				frame.lowPoints.add(<Point>{ $type: Point_$type, x: bucket[0], y: bucket[1] });
			}
			if (maxValue == bucketMax) {
				frame.highPoints.add(<Point>{ $type: Point_$type, x: bucket[0], y: bucket[2] });
			}
		}
		if (frame.markers.count == 0) {
			frame.firstPoint = frame.lastPoint = <Point>{ $type: Point_$type, x: NaN, y: NaN };
		} else {
			frame.firstPoint = frame.markers._inner[0];
			frame.lastPoint = frame.markers._inner[frame.markers.count - 1];
		}
	}
	private getBucket(bucket: number, bucketSize: number, itemCount: number): number[] {
		let i0: number = Math.min(bucket * bucketSize, itemCount - 1);
		let i1: number = Math.min(i0 + bucketSize - 1, itemCount - 1);
		let first: boolean = true;
		let min: number = 0;
		let max: number = 0;
		for (let i: number = i0; i <= i1; ++i) {
			let y: number = this.controller.valueColumn.item(i);
			if (first) {
				first = false;
				min = y;
				max = y;
			} else {
				min = Math.min(min, y);
				max = Math.max(max, y);
			}
		}
		let b: number[] = [ 0, 0, 0 ];
		b[0] = (0.5 * (i0 + i1));
		b[1] = min;
		b[2] = max;
		return b;
	}
	private scaleBucket(bucket: number[], itemCount: number, viewport: Rect, minValue: number, maxValue: number): void {
		let left = viewport.left;
		let top = viewport.top;
		let width = viewport.width;
		let height = viewport.height;
		if (this.controller.model.displayType == SparklineDisplayType.Area || this.controller.model.displayType == SparklineDisplayType.Line) {
			itemCount--;
		}
		if (itemCount < 0) {
			itemCount = 0;
		}
		let scaledValue: number = itemCount > 0 ? bucket[0] / itemCount : itemCount == 0 ? 0.5 : NaN;
		bucket[0] = left + scaledValue * width;
		if (this.controller.model.displayType == SparklineDisplayType.WinLoss) {
			if (bucket[1] > 0) {
				bucket[1] = top;
				bucket[2] = top;
			} else if (bucket[1] < 0) {
				bucket[1] = top + height;
				bucket[2] = top + height;
			} else {
				bucket[1] = top + (1 - ((bucket[1] - minValue) / (maxValue - minValue))) * height;
				bucket[2] = top + (1 - ((bucket[2] - minValue) / (maxValue - minValue))) * height;
			}
		} else {
			bucket[1] = top + (1 - ((bucket[1] - minValue) / (maxValue - minValue))) * height;
			bucket[2] = top + (1 - ((bucket[2] - minValue) / (maxValue - minValue))) * height;
		}
	}
}

/**
 * @hidden 
 */
export class SparklineConnector extends Base {
	static $t: Type = markType(SparklineConnector, 'SparklineConnector');
	model: XamSparkline = null;
	controller: SparklineController = null;
	view: XamSparklineView = null;
	horizontalAxis: HorizontalAxisView = null;
	verticalAxis: VerticalAxisView = null;
	constructor(parent: DependencyObject, view: XamSparklineView) {
		super();
		this.view = view;
		if (parent == null) {
			return;
		}
		this.model = typeCast<XamSparkline>((<any>XamSparkline).$type, parent);
		this.horizontalAxis = this.model.horizontalAxis;
		this.verticalAxis = this.model.verticalAxis;
		view.initializeScalingRatio(this.model);
		let sp: ServiceProvider_Spark = new ServiceProvider_Spark();
		sp.addService("ConfigurationMessages", new MessageChannel_Spark());
		sp.addService("RenderingMessages", new MessageChannel_Spark());
		sp.addService("InteractionMessages", new MessageChannel_Spark());
		sp.addService("Model", this.model);
		sp.addService("View", this.view);
		sp.addService("HorizontalAxis", this.horizontalAxis);
		sp.addService("VerticalAxis", this.verticalAxis);
		this.model.serviceProvider = sp;
		this.view.serviceProvider = sp;
		this.horizontalAxis.serviceProvider = sp;
		this.verticalAxis.serviceProvider = sp;
		this.controller = new SparklineController(sp);
		sp.addService("Controller", this.controller);
	}
}

/**
 * @hidden 
 */
export class SparklineController extends DependencyObject implements IFastItemsSourceProvider {
	static $t: Type = markType(SparklineController, 'SparklineController', (<any>DependencyObject).$type, [IFastItemsSourceProvider_$type]);
	constructor(provider: ServiceProvider_Spark) {
		super();
		this.configurationMessages = <MessageChannel_Spark>provider.getService("ConfigurationMessages");
		this.renderingMessages = <MessageChannel_Spark>provider.getService("RenderingMessages");
		this.interactionMessages = <MessageChannel_Spark>provider.getService("InteractionMessages");
		this.fastItemsSource_Event = (o: any, e: FastItemsSourceEventArgs) => this.dataUpdatedOverride(e.action, e.position, e.count, e.propertyName);
		this.model = <XamSparkline>provider.getService("Model");
		this.view = <XamSparklineView>provider.getService("View");
		this.configurationMessages.attachTarget(runOn(this, this.configurationMessageReceived));
		this.interactionMessages.attachTarget(runOn(this, this.interactionMessageReceived));
	}
	configurationMessages: MessageChannel_Spark = null;
	renderingMessages: MessageChannel_Spark = null;
	interactionMessages: MessageChannel_Spark = null;
	private _model: XamSparkline = null;
	get model(): XamSparkline {
		return this._model;
	}
	set model(value: XamSparkline) {
		let changed: boolean = this._model != value;
		if (changed) {
			this._model = value;
			this.queueSingleInvoke(runOn(this, this.updateInternalData));
		}
	}
	view: XamSparklineView = null;
	get itemsSource(): IEnumerable {
		return this.model != null ? this.model.itemsSource : null;
	}
	static readonly fastItemsSourceProperty: DependencyProperty = DependencyProperty.register("FastItemsSource", IFastItemsSource_$type, (<any>SparklineController).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<SparklineController>((<any>SparklineController).$type, sender)).updateFastItemsSource(e.oldValue, e.newValue)));
	get fastItemsSource(): IFastItemsSource {
		return <IFastItemsSource><any>this.getValue(SparklineController.fastItemsSourceProperty);
	}
	set fastItemsSource(value: IFastItemsSource) {
		this.setValue(SparklineController.fastItemsSourceProperty, value);
	}
	valueColumn: IFastItemColumn$1<number> = null;
	labelColumn: IFastItemColumn$1<any> = null;
	framePreparer: SparkFramePreparer = new SparkFramePreparer();
	currentFrame: SparkFrame = new SparkFrame();
	get valueMemberPath(): string {
		return this.model != null ? this.model.valueMemberPath : null;
	}
	get labelMemberPath(): string {
		return this.model != null ? this.model.labelMemberPath : null;
	}
	viewport: Rect = Rect.empty;
	protected get toolTip(): any {
		return this.model != null ? this.model.toolTip : null;
	}
	fastItemsSource_Event: (sender: any, e: FastItemsSourceEventArgs) => void = null;
	getScaledXValue(unscaledValue: number): number {
		let itemCount: number = this.valueColumn.count;
		if (this.model.displayType == SparklineDisplayType.Area || this.model.displayType == SparklineDisplayType.Line) {
			itemCount--;
		}
		if (itemCount < 0) {
			itemCount = 0;
		}
		let scaledValue: number = itemCount > 0 ? unscaledValue / itemCount : itemCount == 0 ? 0.5 : NaN;
		scaledValue = this.viewport.left + (scaledValue) * this.viewport.width;
		return scaledValue;
	}
	getScaledYValue(unscaledValue: number): number {
		let scaledValue: number = ((unscaledValue - this.model.actualMinimum) / (this.model.actualMaximum - this.model.actualMinimum));
		scaledValue = (1 - scaledValue);
		scaledValue = this.viewport.top + (scaledValue) * this.viewport.height;
		return scaledValue;
	}
	protected valid(): boolean {
		return !this.viewport.isEmpty && this.viewport.width > 0 && this.viewport.height > 0 && this.model != null && this.model.actualMinimum != this.model.actualMaximum;
	}
	private requiresRefresh(propertyChangedMessage: PropertyChangedMessage_Spark): boolean {
		if (propertyChangedMessage.oldValue != propertyChangedMessage.newValue) {
			return true;
		}
		return false;
	}
	private updateFastItemsSource(oldValue: any, newValue: any): void {
		if (this.fastItemsSource_Event == null) {
			this.fastItemsSource_Event = (o: any, args: FastItemsSourceEventArgs) => this.dataUpdatedOverride(args.action, args.position, args.count, args.propertyName);
		}
		let oldFastItemsSource: FastItemsSource = typeCast<FastItemsSource>((<any>FastItemsSource).$type, oldValue);
		if (oldFastItemsSource != null) {
			oldFastItemsSource.event = delegateRemove(oldFastItemsSource.event, this.fastItemsSource_Event);
		}
		let newFastItemsSource: FastItemsSource = typeCast<FastItemsSource>((<any>FastItemsSource).$type, newValue);
		if (newFastItemsSource != null) {
			newFastItemsSource.event = delegateCombine(newFastItemsSource.event, this.fastItemsSource_Event);
		}
	}
	private updateMinMax(): void {
		if (this.model != null) {
			if (this.valueColumn == null) {
				this.model.actualMinimum = this.model.actualMaximum = NaN;
			} else {
				if (isNaN_(this.model.minimum)) {
					this.model.actualMinimum = this.valueColumn.minimum;
				} else {
					this.model.actualMinimum = this.model.minimum;
				}
				if (isNaN_(this.model.maximum)) {
					this.model.actualMaximum = this.valueColumn.maximum;
				} else {
					this.model.actualMaximum = this.model.maximum;
				}
				if (this.model.actualMinimum == this.model.actualMaximum) {
					if (!isNaN_(this.model.maximum) && isNaN_(this.model.minimum)) {
						this.model.actualMinimum = this.model.actualMaximum - 1;
					} else if (isNaN_(this.model.maximum) && !isNaN_(this.model.minimum)) {
						this.model.actualMaximum = this.model.actualMinimum + 1;
					} else {
						if (Math.floor(this.model.actualMinimum) < this.model.actualMinimum) {
							this.model.actualMinimum = Math.floor(this.model.actualMinimum);
						} else {
							this.model.actualMinimum = Math.floor(this.model.actualMinimum) - 1;
						}
						if (Math.ceil(this.model.actualMaximum) > this.model.actualMaximum) {
							this.model.actualMaximum = Math.ceil(this.model.actualMaximum);
						} else {
							this.model.actualMaximum = Math.ceil(this.model.actualMaximum) + 1;
						}
					}
				}
			}
		}
	}
	private updateValueColumn(): void {
		if (this.fastItemsSource != null) {
			this.fastItemsSource.deregisterColumn(this.valueColumn);
			this.valueColumn = this.fastItemsSource.registerColumn(this.valueMemberPath, null, false);
		} else {
			this.valueColumn = null;
		}
	}
	private updateLabelColumn(): void {
		if (this.fastItemsSource != null) {
			this.fastItemsSource.deregisterColumn(this.labelColumn);
			this.labelColumn = this.fastItemsSource.registerColumnObject(this.labelMemberPath, null, false);
			this.model.labelColumn = this.labelColumn;
		} else {
			this.model.labelColumn = this.labelColumn = null;
		}
	}
	private updateAxes(): void {
		let message: AxisRenderMessage_Spark = new AxisRenderMessage_Spark();
		this.renderingMessages.sendMessage(message);
	}
	private queueSingleInvoke(action: () => void): void {
		action();
	}
	private updateInternalData(): void {
		this.fastItemsSource = this.getFastItemsSource(this.itemsSource);
		this.updateValueColumn();
		this.updateLabelColumn();
		this.updateMinMax();
		this.updateAxes();
	}
	dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		this.updateValueColumn();
		this.updateLabelColumn();
		this.updateMinMax();
		this.updateAxes();
		this.queueSingleInvoke(runOn(this, this.refresh));
	}
	private updateToolTip(): void {
		let m: ToooltipTemplateMessage_Spark = new ToooltipTemplateMessage_Spark();
		m.template = this.toolTip;
		this.renderingMessages.sendMessage(m);
	}
	configurationMessageReceived(m: Message_Spark): void {
		if (typeCast<PropertyChangedMessage_Spark>((<any>PropertyChangedMessage_Spark).$type, m) !== null) {
			this.propertyChangedMessageReceived(<PropertyChangedMessage_Spark>m);
		} else if (typeCast<ContainerSizeChangedMessage_Spark>((<any>ContainerSizeChangedMessage_Spark).$type, m) !== null) {
			this.renderingMessages.sendMessage(m);
		} else if (typeCast<DataChangedMessage_Spark>((<any>DataChangedMessage_Spark).$type, m) !== null) {
			this.handleDataChanged(<DataChangedMessage_Spark>m);
		}
	}
	private handleDataChanged(m: DataChangedMessage_Spark): void {
		let itemsSource = this.fastItemsSource;
		if (itemsSource == null) {
			return;
		}
		switch (m.change) {
			case NotifyCollectionChangedAction.Replace:
			itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(2, NotifyCollectionChangedAction.Replace, m.newItem, m.oldItem, m.index));
			break;

			case NotifyCollectionChangedAction.Add:
			itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Add, m.newItem, m.index));
			break;

			case NotifyCollectionChangedAction.Remove:
			itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Remove, m.oldItem, m.index));
			break;

			case NotifyCollectionChangedAction.Reset:
			itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(0, NotifyCollectionChangedAction.Reset));
			break;

		}

		this.queueSingleInvoke(runOn(this, this.updateInternalData));
	}
	interactionMessageReceived(m: Message_Spark): void {
		let im: InteractionMessage_Spark = <InteractionMessage_Spark>m;
		if (typeCast<ViewportChangedMessage_Spark>((<any>ViewportChangedMessage_Spark).$type, im) !== null) {
			this.viewportChangedMessageReceived(<ViewportChangedMessage_Spark>im);
		} else if (typeCast<MouseLeaveMessage_Spark>((<any>MouseLeaveMessage_Spark).$type, im) !== null) {
			this.mouseLeaveMessageReceived(<MouseLeaveMessage_Spark>im);
		} else if (typeCast<MouseMoveMessage_Spark>((<any>MouseMoveMessage_Spark).$type, im) !== null) {
			this.mouseMoveMessageReceived(<MouseMoveMessage_Spark>im);
		} else if (typeCast<ContainerSizeChangedMessage_Spark>((<any>ContainerSizeChangedMessage_Spark).$type, im) !== null) {
			this.renderingMessages.sendMessage(m);
		}
	}
	propertyChangedMessageReceived(propertyChangedMessage: PropertyChangedMessage_Spark): void {
		switch (propertyChangedMessage.propertyName) {
			case XamSparkline.itemsSourcePropertyName:
			this.queueSingleInvoke(runOn(this, this.updateInternalData));
			break;

			case XamSparkline.valueMemberPathPropertyName:
			this.queueSingleInvoke(runOn(this, this.updateInternalData));
			break;

			case XamSparkline.labelMemberPathPropertyName:
			this.queueSingleInvoke(runOn(this, this.updateInternalData));
			break;

			case XamSparkline.toolTipPropertyName:
			this.updateToolTip();
			break;

			case XamSparkline.minimumPropertyName:

			case XamSparkline.maximumPropertyName:
			this.updateMinMax();
			this.updateAxes();
			break;

			case XamSparkline.horizontalAxisLabelPropertyName:

			case XamSparkline.verticalAxisLabelPropertyName:
			this.updateAxes();
			break;

			case XamSparkline.brushPropertyName:

			case XamSparkline.negativeBrushPropertyName:

			case XamSparkline.markerBrushPropertyName:

			case XamSparkline.firstMarkerBrushPropertyName:

			case XamSparkline.lastMarkerBrushPropertyName:

			case XamSparkline.highMarkerBrushPropertyName:

			case XamSparkline.lowMarkerBrushPropertyName:

			case XamSparkline.negativeMarkerBrushPropertyName:

			case XamSparkline.trendLineBrushPropertyName:

			case XamSparkline.normalRangeFillPropertyName:
			let b: BrushChangedMessage_Spark = new BrushChangedMessage_Spark();
			b.brush = typeCast<Brush>((<any>Brush).$type, propertyChangedMessage.newValue);
			b.brushPropertyName = propertyChangedMessage.propertyName;
			this.renderingMessages.sendMessage(b);
			break;

			case XamSparkline.markerVisibilityPropertyName:

			case XamSparkline.firstMarkerVisibilityPropertyName:

			case XamSparkline.lastMarkerVisibilityPropertyName:

			case XamSparkline.highMarkerVisibilityPropertyName:

			case XamSparkline.lowMarkerVisibilityPropertyName:

			case XamSparkline.negativeMarkerVisibilityPropertyName:

			case XamSparkline.normalRangeVisibilityPropertyName:

			case XamSparkline.toolTipVisibilityPropertyName:
			let v: VisibilityMessage_Spark = new VisibilityMessage_Spark();
			v.visibility = EnumUtil.getEnumValue<Visibility>(Visibility_$type, propertyChangedMessage.newValue);
			v.pathPropertyName = propertyChangedMessage.propertyName;
			this.renderingMessages.sendMessage(v);
			this.view.doMargin(true);
			break;

			case XamSparkline.markerSizePropertyName:

			case XamSparkline.firstMarkerSizePropertyName:

			case XamSparkline.lastMarkerSizePropertyName:

			case XamSparkline.highMarkerSizePropertyName:

			case XamSparkline.lowMarkerSizePropertyName:

			case XamSparkline.negativeMarkerSizePropertyName:
			this.view.doMargin(true);
			break;

			case XamSparkline.lineThicknessPropertyName:

			case XamSparkline.trendLineThicknessPropertyName:
			let n: NumberChangedMessage_Spark = new NumberChangedMessage_Spark();
			n.value = <number>propertyChangedMessage.newValue;
			n.propertyName = propertyChangedMessage.propertyName;
			this.renderingMessages.sendMessage(n);
			break;

			case XamSparkline.horizontalAxisBrushPropertyName:

			case XamSparkline.verticalAxisBrushPropertyName:

			case XamSparkline.horizontalAxisVisibilityPropertyName:

			case XamSparkline.verticalAxisVisibilityPropertyName:
			this.sendFullClearMessage();
			break;

			case "Container":
			let m: ContainerMessage_Spark = new ContainerMessage_Spark();
			m.container = propertyChangedMessage.newValue;
			this.renderingMessages.sendMessage(m);
			break;

			case XamSparkline.actualPixelScalingRatioPropertyName:
			{
				let pixelRatioMsg = new PixelRatioMessage_Spark();
				pixelRatioMsg.pixelRatio = <number>propertyChangedMessage.newValue;
				this.renderingMessages.sendMessage(pixelRatioMsg);
			}
			break;

		}

		if (this.requiresRefresh(propertyChangedMessage)) {
			this.queueSingleInvoke(runOn(this, this.refresh));
		}
	}
	private sendFullClearMessage(): void {
		let cm: ClearMessage_Spark = new ClearMessage_Spark();
		cm.axisVisibilityChanged = true;
		this.renderingMessages.sendMessage(cm);
	}
	viewportChangedMessageReceived(viewportChangedMessage: ViewportChangedMessage_Spark): void {
		this.viewport = new Rect(0, viewportChangedMessage.newLeft, viewportChangedMessage.newTop, viewportChangedMessage.newWidth, viewportChangedMessage.newHeight);
		this.queueSingleInvoke(runOn(this, this.refresh));
	}
	private mouseMoveMessageReceived(mouseMoveMessage: MouseMoveMessage_Spark): void {
		let cm: ClearMessage_Spark = new ClearMessage_Spark();
		cm.layer = SparkLayerType.ToolTipLayer;
		this.renderingMessages.sendMessage(cm);
		let tm: TooltipMessage_Spark = new TooltipMessage_Spark();
		tm.layer = SparkLayerType.ToolTipLayer;
		tm.xOffset = mouseMoveMessage.position.x + 10;
		tm.yOffset = mouseMoveMessage.position.y + 10;
		if (this.valueColumn != null && this.valueColumn.count > 0) {
			let c: SparklineToolTipContext = new SparklineToolTipContext();
			c.high = this.valueColumn.maximum;
			c.low = this.valueColumn.minimum;
			c.first = this.valueColumn.item(0);
			c.last = this.valueColumn.item(this.valueColumn.count - 1);
			tm.context = c;
		}
		this.renderingMessages.sendMessage(tm);
	}
	private mouseLeaveMessageReceived(mouseLeaveMessage: MouseLeaveMessage_Spark): void {
		let cm: ClearMessage_Spark = new ClearMessage_Spark();
		cm.layer = SparkLayerType.ToolTipLayer;
		this.renderingMessages.sendMessage(cm);
	}
	private clearLayer(layerType: SparkLayerType): void {
		let cm: ClearMessage_Spark = new ClearMessage_Spark();
		cm.layer = layerType;
		this.renderingMessages.sendMessage(cm);
	}
	private clearData(): void {
		this.clearLayer(SparkLayerType.SparkLayer);
		this.clearLayer(SparkLayerType.MarkerLayer);
		this.clearLayer(SparkLayerType.TrendLayer);
		this.clearLayer(SparkLayerType.RangeLayer);
	}
	protected refresh(): void {
		this.clearData();
		if (!this.valid()) {
			return;
		}
		this.framePreparer.controller = this;
		this.framePreparer.prepareFrame(this.currentFrame);
		switch (this.model.displayType) {
			case SparklineDisplayType.Column:
			this.refreshColumns();
			break;

			case SparklineDisplayType.WinLoss:
			this.refreshWinLoss();
			break;

			case SparklineDisplayType.Line:

			case SparklineDisplayType.Area:
			this.refreshPolygon();
			break;

		}

		let rangeMessage: NormalRangeMessage_Spark = new NormalRangeMessage_Spark();
		rangeMessage.x = this.viewport.left;
		rangeMessage.y = Math.max(this.viewport.top, Math.min(this.viewport.bottom, this.getScaledYValue(this.model.normalRangeMaximum)));
		rangeMessage.width = this.viewport.width;
		let bottom: number = Math.max(this.viewport.top, Math.min(this.viewport.bottom, this.getScaledYValue(this.model.normalRangeMinimum)));
		rangeMessage.height = Math.abs(bottom - rangeMessage.y);
		rangeMessage.y = Math.min(rangeMessage.y, bottom);
		rangeMessage.displayInFront = this.model.displayNormalRangeInFront;
		this.renderingMessages.sendMessage(rangeMessage);
		let trendMessage: TrendLineMessage_Spark = new TrendLineMessage_Spark();
		trendMessage.points = this.currentFrame.trendPoints.toArray();
		this.renderingMessages.sendMessage(trendMessage);
	}
	private refreshColumns(): void {
		let columnMessage: ColumnMessage_Spark = new ColumnMessage_Spark();
		columnMessage.columns = this.currentFrame.markers;
		columnMessage.negativeColumns = this.currentFrame.negativeMarkers;
		columnMessage.lowColumns = this.currentFrame.lowPoints;
		columnMessage.highColumns = this.currentFrame.highPoints;
		columnMessage.firstColumn = this.currentFrame.firstPoint;
		columnMessage.lastColumn = this.currentFrame.lastPoint;
		columnMessage.bucketCount = this.currentFrame.buckets.count;
		columnMessage.crossing = this.framePreparer.crossing;
		columnMessage.offset = this.framePreparer.offset;
		columnMessage.displayType = this.model.displayType;
		this.renderingMessages.sendMessage(columnMessage);
		this.refreshMarkers();
	}
	private refreshWinLoss(): void {
		let message: WinLossColumnMessage_Spark = new WinLossColumnMessage_Spark();
		message.columns = this.currentFrame.markers;
		message.negativeColumns = this.currentFrame.negativeMarkers;
		message.lowColumns = this.currentFrame.lowPoints;
		message.highColumns = this.currentFrame.highPoints;
		message.firstColumn = this.currentFrame.firstPoint;
		message.lastColumn = this.currentFrame.lastPoint;
		message.bucketCount = this.currentFrame.buckets.count;
		message.crossing = this.framePreparer.crossing;
		message.offset = this.framePreparer.offset;
		message.displayType = this.model.displayType;
		this.renderingMessages.sendMessage(message);
	}
	private refreshPolygon(): void {
		if (this.currentFrame.buckets.count == 0) {
			return;
		}
		let segments: List$1<List$1<number[]>> = new List$1<List$1<number[]>>((<any>List$1).$type.specialize(Array_$type), 0);
		let segment: List$1<number[]> = new List$1<number[]>(Array_$type, 0);
		let lastBucketIsNull: boolean = true;
		for (let bucket of fromEnum<number[]>(this.currentFrame.buckets)) {
			if (isNaN_(bucket[1]) || isInfinity(bucket[1])) {
				if (!lastBucketIsNull) {
					segments.add(segment);
				}
				lastBucketIsNull = true;
				continue;
			}
			if (lastBucketIsNull) {
				segment = new List$1<number[]>(Array_$type, 0);
				lastBucketIsNull = false;
			}
			segment.add(bucket);
		}
		if (!lastBucketIsNull) {
			segments.add(segment);
		}
		let polygonMessage: PolygonMessage_Spark = new PolygonMessage_Spark();
		polygonMessage.points = new List$1<Point[]>(Array_$type, 0);
		if (this.model.unknownValuePlotting == UnknownValuePlotting.LinearInterpolate) {
			let InterpolatedBuckets: List$1<number[]> = new List$1<number[]>(Array_$type, 0);
			for (let validSegment of fromEnum<List$1<number[]>>(segments)) {
				InterpolatedBuckets.addRange(validSegment);
			}
			let pts: Point[] = this.createPolygonSegment(InterpolatedBuckets);
			polygonMessage.points.add(pts);
		} else {
			for (let validSegment1 of fromEnum<List$1<number[]>>(segments)) {
				let pts1: Point[] = this.createPolygonSegment(validSegment1);
				polygonMessage.points.add(pts1);
			}
		}
		this.renderingMessages.sendMessage(polygonMessage);
		this.refreshMarkers();
	}
	private createPolygonSegment(buckets: List$1<number[]>): Point[] {
		let crossing = this.framePreparer.crossing;
		let points: List$1<Point> = new List$1<Point>(Point_$type, 0);
		let yValue: number;
		let isArea = this.model.displayType == SparklineDisplayType.Area;
		for (let bucket of fromEnum<number[]>(buckets)) {
			yValue = bucket[1];
			if (isArea) {
				if (bucket[2] <= crossing) {
					yValue = bucket[2];
				}
			}
			points.add(<Point>{ $type: Point_$type, x: bucket[0], y: yValue });
		}
		if (this.model.displayType == SparklineDisplayType.Line) {
			let points2: List$1<Point> = new List$1<Point>(Point_$type, 0);
			for (let bucket1 of fromEnum<number[]>(buckets)) {
				points2.add(<Point>{ $type: Point_$type, x: bucket1[0], y: bucket1[2] });
			}
			points2.reverse();
			points.addRange(points2);
		}
		if (this.model.displayType == SparklineDisplayType.Area && points.count > 0) {
			let firstPoint: Point = points._inner[0];
			let lastPoint: Point = points._inner[points.count - 1];
			points.add(<Point>{ $type: Point_$type, x: lastPoint.x, y: this.framePreparer.crossing });
			points.add(<Point>{ $type: Point_$type, x: firstPoint.x, y: this.framePreparer.crossing });
		}
		return points.toArray();
	}
	private refreshMarkers(): void {
		let markerMessage: MarkerMessage_Spark = new MarkerMessage_Spark();
		markerMessage.markerPoints = this.currentFrame.markers;
		markerMessage.negativeMarkerPoints = this.currentFrame.negativeMarkers;
		markerMessage.lowPoints = this.currentFrame.lowPoints;
		markerMessage.highPoints = this.currentFrame.highPoints;
		markerMessage.firstPoint = this.currentFrame.firstPoint;
		markerMessage.lastPoint = this.currentFrame.lastPoint;
		markerMessage.markerSize = this.model.markerSize;
		markerMessage.firstMarkerSize = this.model.firstMarkerSize;
		markerMessage.lastMarkerSize = this.model.lastMarkerSize;
		markerMessage.highMarkerSize = this.model.highMarkerSize;
		markerMessage.lowMarkerSize = this.model.lowMarkerSize;
		markerMessage.negativeMarkerSize = this.model.negativeMarkerSize;
		this.renderingMessages.sendMessage(markerMessage);
	}
	getFastItemsSource(target: IEnumerable): IFastItemsSource {
		let fastItemsSource: FastItemsSource = null;
		if (this.itemsSource != null) {
			let itemsSourceReference: FastItemsSourceReference = null;
			fastItemsSource = new FastItemsSource();
			fastItemsSource.itemsSource = this.itemsSource;
			itemsSourceReference = new FastItemsSourceReference(fastItemsSource);
			itemsSourceReference.references++;
			fastItemsSource = <FastItemsSource>itemsSourceReference.fastItemsSource;
		}
		return fastItemsSource;
	}
	releaseFastItemsSource(itemsSource: IEnumerable): IFastItemsSource {
		if (itemsSource != null) {
			let itemsSourceReference: FastItemsSourceReference = null;
			--itemsSourceReference.references;
		}
		return null;
	}
}

/**
 * @hidden 
 */
export class XamSparkline extends Control {
	static $t: Type = markType(XamSparkline, 'XamSparkline', (<any>Control).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>XamSparkline).$type;
		this.verticalAxis = new VerticalAxisView(this);
		this.horizontalAxis = new HorizontalAxisView(this);
		this._connector = new SparklineConnector(this, new XamSparklineView());
	}
	private _connector: SparklineConnector = null;
	static readonly brushPropertyName: string = "Brush";
	static readonly brushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.brushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.brushPropertyName, e.oldValue, e.newValue)));
	get brush(): Brush {
		return <Brush>this.getValue(XamSparkline.brushProperty);
	}
	set brush(value: Brush) {
		this.setValue(XamSparkline.brushProperty, value);
	}
	static readonly negativeBrushPropertyName: string = "NegativeBrush";
	static readonly negativeBrushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.negativeBrushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.negativeBrushPropertyName, e.oldValue, e.newValue)));
	get negativeBrush(): Brush {
		return <Brush>this.getValue(XamSparkline.negativeBrushProperty);
	}
	set negativeBrush(value: Brush) {
		this.setValue(XamSparkline.negativeBrushProperty, value);
	}
	static readonly markerBrushPropertyName: string = "MarkerBrush";
	static readonly markerBrushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.markerBrushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.markerBrushPropertyName, e.oldValue, e.newValue)));
	get markerBrush(): Brush {
		return <Brush>this.getValue(XamSparkline.markerBrushProperty);
	}
	set markerBrush(value: Brush) {
		this.setValue(XamSparkline.markerBrushProperty, value);
	}
	static readonly negativeMarkerBrushPropertyName: string = "NegativeMarkerBrush";
	static readonly negativeMarkerBrushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.negativeMarkerBrushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.negativeMarkerBrushPropertyName, e.oldValue, e.newValue)));
	get negativeMarkerBrush(): Brush {
		return <Brush>this.getValue(XamSparkline.negativeMarkerBrushProperty);
	}
	set negativeMarkerBrush(value: Brush) {
		this.setValue(XamSparkline.negativeMarkerBrushProperty, value);
	}
	static readonly firstMarkerBrushPropertyName: string = "FirstMarkerBrush";
	static readonly firstMarkerBrushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.firstMarkerBrushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.firstMarkerBrushPropertyName, e.oldValue, e.newValue)));
	get firstMarkerBrush(): Brush {
		return <Brush>this.getValue(XamSparkline.firstMarkerBrushProperty);
	}
	set firstMarkerBrush(value: Brush) {
		this.setValue(XamSparkline.firstMarkerBrushProperty, value);
	}
	static readonly lastMarkerBrushPropertyName: string = "LastMarkerBrush";
	static readonly lastMarkerBrushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.lastMarkerBrushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.lastMarkerBrushPropertyName, e.oldValue, e.newValue)));
	get lastMarkerBrush(): Brush {
		return <Brush>this.getValue(XamSparkline.lastMarkerBrushProperty);
	}
	set lastMarkerBrush(value: Brush) {
		this.setValue(XamSparkline.lastMarkerBrushProperty, value);
	}
	static readonly highMarkerBrushPropertyName: string = "HighMarkerBrush";
	static readonly highMarkerBrushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.highMarkerBrushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.highMarkerBrushPropertyName, e.oldValue, e.newValue)));
	get highMarkerBrush(): Brush {
		return <Brush>this.getValue(XamSparkline.highMarkerBrushProperty);
	}
	set highMarkerBrush(value: Brush) {
		this.setValue(XamSparkline.highMarkerBrushProperty, value);
	}
	static readonly lowMarkerBrushPropertyName: string = "LowMarkerBrush";
	static readonly lowMarkerBrushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.lowMarkerBrushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.lowMarkerBrushPropertyName, e.oldValue, e.newValue)));
	get lowMarkerBrush(): Brush {
		return <Brush>this.getValue(XamSparkline.lowMarkerBrushProperty);
	}
	set lowMarkerBrush(value: Brush) {
		this.setValue(XamSparkline.lowMarkerBrushProperty, value);
	}
	static readonly trendLineBrushPropertyName: string = "TrendLineBrush";
	static readonly trendLineBrushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.trendLineBrushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.trendLineBrushPropertyName, e.oldValue, e.newValue)));
	get trendLineBrush(): Brush {
		return <Brush>this.getValue(XamSparkline.trendLineBrushProperty);
	}
	set trendLineBrush(value: Brush) {
		this.setValue(XamSparkline.trendLineBrushProperty, value);
	}
	static readonly horizontalAxisBrushPropertyName: string = "HorizontalAxisBrush";
	static readonly horizontalAxisBrushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.horizontalAxisBrushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.horizontalAxisBrushPropertyName, e.oldValue, e.newValue)));
	get horizontalAxisBrush(): Brush {
		return <Brush>this.getValue(XamSparkline.horizontalAxisBrushProperty);
	}
	set horizontalAxisBrush(value: Brush) {
		this.setValue(XamSparkline.horizontalAxisBrushProperty, value);
	}
	static readonly verticalAxisBrushPropertyName: string = "VerticalAxisBrush";
	static readonly verticalAxisBrushProperty: DependencyProperty = DependencyProperty.register(XamSparkline.verticalAxisBrushPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.verticalAxisBrushPropertyName, e.oldValue, e.newValue)));
	get verticalAxisBrush(): Brush {
		return <Brush>this.getValue(XamSparkline.verticalAxisBrushProperty);
	}
	set verticalAxisBrush(value: Brush) {
		this.setValue(XamSparkline.verticalAxisBrushProperty, value);
	}
	static readonly normalRangeFillPropertyName: string = "NormalRangeFill";
	static readonly normalRangeFillProperty: DependencyProperty = DependencyProperty.register(XamSparkline.normalRangeFillPropertyName, (<any>Brush).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.normalRangeFillPropertyName, e.oldValue, e.newValue)));
	get normalRangeFill(): Brush {
		return <Brush>this.getValue(XamSparkline.normalRangeFillProperty);
	}
	set normalRangeFill(value: Brush) {
		this.setValue(XamSparkline.normalRangeFillProperty, value);
	}
	static readonly horizontalAxisVisibilityPropertyName: string = "HorizontalAxisVisibility";
	static readonly horizontalAxisVisibilityProperty: DependencyProperty = DependencyProperty.register(XamSparkline.horizontalAxisVisibilityPropertyName, Visibility_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.horizontalAxisVisibilityPropertyName, e.oldValue, e.newValue)));
	get horizontalAxisVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(XamSparkline.horizontalAxisVisibilityProperty));
	}
	set horizontalAxisVisibility(value: Visibility) {
		this.setValue(XamSparkline.horizontalAxisVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly verticalAxisVisibilityPropertyName: string = "VerticalAxisVisibility";
	static readonly verticalAxisVisibilityProperty: DependencyProperty = DependencyProperty.register(XamSparkline.verticalAxisVisibilityPropertyName, Visibility_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.verticalAxisVisibilityPropertyName, e.oldValue, e.newValue)));
	get verticalAxisVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(XamSparkline.verticalAxisVisibilityProperty));
	}
	set verticalAxisVisibility(value: Visibility) {
		this.setValue(XamSparkline.verticalAxisVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly markerVisibilityPropertyName: string = "MarkerVisibility";
	static readonly markerVisibilityProperty: DependencyProperty = DependencyProperty.register(XamSparkline.markerVisibilityPropertyName, Visibility_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.markerVisibilityPropertyName, e.oldValue, e.newValue)));
	get markerVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(XamSparkline.markerVisibilityProperty));
	}
	set markerVisibility(value: Visibility) {
		this.setValue(XamSparkline.markerVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly negativeMarkerVisibilityPropertyName: string = "NegativeMarkerVisibility";
	static readonly negativeMarkerVisibilityProperty: DependencyProperty = DependencyProperty.register(XamSparkline.negativeMarkerVisibilityPropertyName, Visibility_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.negativeMarkerVisibilityPropertyName, e.oldValue, e.newValue)));
	get negativeMarkerVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(XamSparkline.negativeMarkerVisibilityProperty));
	}
	set negativeMarkerVisibility(value: Visibility) {
		this.setValue(XamSparkline.negativeMarkerVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly firstMarkerVisibilityPropertyName: string = "FirstMarkerVisibility";
	static readonly firstMarkerVisibilityProperty: DependencyProperty = DependencyProperty.register(XamSparkline.firstMarkerVisibilityPropertyName, Visibility_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.firstMarkerVisibilityPropertyName, e.oldValue, e.newValue)));
	get firstMarkerVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(XamSparkline.firstMarkerVisibilityProperty));
	}
	set firstMarkerVisibility(value: Visibility) {
		this.setValue(XamSparkline.firstMarkerVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly lastMarkerVisibilityPropertyName: string = "LastMarkerVisibility";
	static readonly lastMarkerVisibilityProperty: DependencyProperty = DependencyProperty.register(XamSparkline.lastMarkerVisibilityPropertyName, Visibility_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.lastMarkerVisibilityPropertyName, e.oldValue, e.newValue)));
	get lastMarkerVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(XamSparkline.lastMarkerVisibilityProperty));
	}
	set lastMarkerVisibility(value: Visibility) {
		this.setValue(XamSparkline.lastMarkerVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly lowMarkerVisibilityPropertyName: string = "LowMarkerVisibility";
	static readonly lowMarkerVisibilityProperty: DependencyProperty = DependencyProperty.register(XamSparkline.lowMarkerVisibilityPropertyName, Visibility_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.lowMarkerVisibilityPropertyName, e.oldValue, e.newValue)));
	get lowMarkerVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(XamSparkline.lowMarkerVisibilityProperty));
	}
	set lowMarkerVisibility(value: Visibility) {
		this.setValue(XamSparkline.lowMarkerVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly highMarkerVisibilityPropertyName: string = "HighMarkerVisibility";
	static readonly highMarkerVisibilityProperty: DependencyProperty = DependencyProperty.register(XamSparkline.highMarkerVisibilityPropertyName, Visibility_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.highMarkerVisibilityPropertyName, e.oldValue, e.newValue)));
	get highMarkerVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(XamSparkline.highMarkerVisibilityProperty));
	}
	set highMarkerVisibility(value: Visibility) {
		this.setValue(XamSparkline.highMarkerVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly normalRangeVisibilityPropertyName: string = "NormalRangeVisibility";
	static readonly normalRangeVisibilityProperty: DependencyProperty = DependencyProperty.register(XamSparkline.normalRangeVisibilityPropertyName, Visibility_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.normalRangeVisibilityPropertyName, e.oldValue, e.newValue)));
	get normalRangeVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(XamSparkline.normalRangeVisibilityProperty));
	}
	set normalRangeVisibility(value: Visibility) {
		this.setValue(XamSparkline.normalRangeVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly displayNormalRangeInFrontPropertyName: string = "DisplayNormalRangeInFront";
	static readonly displayNormalRangeInFrontProperty: DependencyProperty = DependencyProperty.register(XamSparkline.displayNormalRangeInFrontPropertyName, Boolean_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, true, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.displayNormalRangeInFrontPropertyName, e.oldValue, e.newValue)));
	get displayNormalRangeInFront(): boolean {
		return <boolean>this.getValue(XamSparkline.displayNormalRangeInFrontProperty);
	}
	set displayNormalRangeInFront(value: boolean) {
		this.setValue(XamSparkline.displayNormalRangeInFrontProperty, value);
	}
	static readonly markerSizePropertyName: string = "MarkerSize";
	static readonly markerSizeDef: number = -1;
	static readonly markerSizeScaledDef: number = -1;
	static readonly markerSizeProperty: DependencyProperty = DependencyProperty.register(XamSparkline.markerSizePropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, XamSparkline.markerSizeScaledDef, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.markerSizePropertyName, e.oldValue, e.newValue)));
	get markerSize(): number {
		return <number>this.getValue(XamSparkline.markerSizeProperty);
	}
	set markerSize(value: number) {
		this.setValue(XamSparkline.markerSizeProperty, value);
	}
	static readonly firstMarkerSizePropertyName: string = "FirstMarkerSize";
	static readonly firstMarkerSizeProperty: DependencyProperty = DependencyProperty.register(XamSparkline.firstMarkerSizePropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, XamSparkline.markerSizeScaledDef, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.firstMarkerSizePropertyName, e.oldValue, e.newValue)));
	get firstMarkerSize(): number {
		return <number>this.getValue(XamSparkline.firstMarkerSizeProperty);
	}
	set firstMarkerSize(value: number) {
		this.setValue(XamSparkline.firstMarkerSizeProperty, value);
	}
	static readonly lastMarkerSizePropertyName: string = "LastMarkerSize";
	static readonly lastMarkerSizeProperty: DependencyProperty = DependencyProperty.register(XamSparkline.lastMarkerSizePropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, XamSparkline.markerSizeScaledDef, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.lastMarkerSizePropertyName, e.oldValue, e.newValue)));
	get lastMarkerSize(): number {
		return <number>this.getValue(XamSparkline.lastMarkerSizeProperty);
	}
	set lastMarkerSize(value: number) {
		this.setValue(XamSparkline.lastMarkerSizeProperty, value);
	}
	static readonly highMarkerSizePropertyName: string = "HighMarkerSize";
	static readonly highMarkerSizeProperty: DependencyProperty = DependencyProperty.register(XamSparkline.highMarkerSizePropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, XamSparkline.markerSizeScaledDef, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.highMarkerSizePropertyName, e.oldValue, e.newValue)));
	get highMarkerSize(): number {
		return <number>this.getValue(XamSparkline.highMarkerSizeProperty);
	}
	set highMarkerSize(value: number) {
		this.setValue(XamSparkline.highMarkerSizeProperty, value);
	}
	static readonly lowMarkerSizePropertyName: string = "LowMarkerSize";
	static readonly lowMarkerSizeProperty: DependencyProperty = DependencyProperty.register(XamSparkline.lowMarkerSizePropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, XamSparkline.markerSizeScaledDef, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.lowMarkerSizePropertyName, e.oldValue, e.newValue)));
	get lowMarkerSize(): number {
		return <number>this.getValue(XamSparkline.lowMarkerSizeProperty);
	}
	set lowMarkerSize(value: number) {
		this.setValue(XamSparkline.lowMarkerSizeProperty, value);
	}
	static readonly negativeMarkerSizePropertyName: string = "NegativeMarkerSize";
	static readonly negativeMarkerSizeProperty: DependencyProperty = DependencyProperty.register(XamSparkline.negativeMarkerSizePropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, XamSparkline.markerSizeScaledDef, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.negativeMarkerSizePropertyName, e.oldValue, e.newValue)));
	get negativeMarkerSize(): number {
		return <number>this.getValue(XamSparkline.negativeMarkerSizeProperty);
	}
	set negativeMarkerSize(value: number) {
		this.setValue(XamSparkline.negativeMarkerSizeProperty, value);
	}
	static readonly lineThicknessPropertyName: string = "LineThickness";
	static readonly lineThicknessDef: number = -1;
	static readonly lineThicknessScaledDef: number = -1;
	static readonly lineThicknessProperty: DependencyProperty = DependencyProperty.register(XamSparkline.lineThicknessPropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, XamSparkline.lineThicknessScaledDef, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.lineThicknessPropertyName, e.oldValue, e.newValue)));
	get lineThickness(): number {
		return <number>this.getValue(XamSparkline.lineThicknessProperty);
	}
	set lineThickness(value: number) {
		this.setValue(XamSparkline.lineThicknessProperty, value);
	}
	static readonly minimumPropertyName: string = "Minimum";
	static readonly minimumProperty: DependencyProperty = DependencyProperty.register(XamSparkline.minimumPropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.minimumPropertyName, e.oldValue, e.newValue)));
	get minimum(): number {
		return <number>this.getValue(XamSparkline.minimumProperty);
	}
	set minimum(value: number) {
		this.setValue(XamSparkline.minimumProperty, value);
	}
	static readonly maximumPropertyName: string = "Maximum";
	static readonly maximumProperty: DependencyProperty = DependencyProperty.register(XamSparkline.maximumPropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.maximumPropertyName, e.oldValue, e.newValue)));
	get maximum(): number {
		return <number>this.getValue(XamSparkline.maximumProperty);
	}
	set maximum(value: number) {
		this.setValue(XamSparkline.maximumProperty, value);
	}
	static readonly itemsSourcePropertyName: string = "ItemsSource";
	static readonly itemsSourceProperty: DependencyProperty = DependencyProperty.register(XamSparkline.itemsSourcePropertyName, IEnumerable_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.itemsSourcePropertyName, e.oldValue, e.newValue)));
	get itemsSource(): IEnumerable {
		return <IEnumerable><any>this.getValue(XamSparkline.itemsSourceProperty);
	}
	set itemsSource(value: IEnumerable) {
		this.setValue(XamSparkline.itemsSourceProperty, value);
	}
	static readonly valueMemberPathPropertyName: string = "ValueMemberPath";
	static readonly valueMemberPathProperty: DependencyProperty = DependencyProperty.register(XamSparkline.valueMemberPathPropertyName, String_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.valueMemberPathPropertyName, e.oldValue, e.newValue)));
	get valueMemberPath(): string {
		return <string>this.getValue(XamSparkline.valueMemberPathProperty);
	}
	set valueMemberPath(value: string) {
		this.setValue(XamSparkline.valueMemberPathProperty, value);
	}
	static readonly labelMemberPathPropertyName: string = "LabelMemberPath";
	static readonly labelMemberPathProperty: DependencyProperty = DependencyProperty.register(XamSparkline.labelMemberPathPropertyName, String_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.labelMemberPathPropertyName, e.oldValue, e.newValue)));
	get labelMemberPath(): string {
		return <string>this.getValue(XamSparkline.labelMemberPathProperty);
	}
	set labelMemberPath(value: string) {
		this.setValue(XamSparkline.labelMemberPathProperty, value);
	}
	static readonly toolTipPropertyName: string = "ToolTip";
	static readonly toolTipProperty: DependencyProperty = DependencyProperty.register(XamSparkline.toolTipPropertyName, (<any>Base).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.toolTipPropertyName, e.oldValue, e.newValue)));
	get toolTip(): any {
		return this.getValue(XamSparkline.toolTipProperty);
	}
	set toolTip(value: any) {
		this.setValue(XamSparkline.toolTipProperty, value);
		this.toolTipVisibility = value == null || value.toString().length == 0 ? Visibility.Collapsed : Visibility.Visible;
	}
	static readonly toolTipVisibilityPropertyName: string = "ToolTipVisibility";
	static readonly toolTipVisibilityProperty: DependencyProperty = DependencyProperty.register(XamSparkline.toolTipVisibilityPropertyName, Visibility_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.toolTipVisibilityPropertyName, e.oldValue, e.newValue)));
	get toolTipVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(XamSparkline.toolTipVisibilityProperty));
	}
	set toolTipVisibility(value: Visibility) {
		this.setValue(XamSparkline.toolTipVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly trendLineTypePropertyName: string = "TrendLineType";
	static readonly trendLineTypeProperty: DependencyProperty = DependencyProperty.register(XamSparkline.trendLineTypePropertyName, TrendLineType_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<TrendLineType>(TrendLineType_$type, TrendLineType.None), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.trendLineTypePropertyName, e.oldValue, e.newValue)));
	get trendLineType(): TrendLineType {
		return EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, this.getValue(XamSparkline.trendLineTypeProperty));
	}
	set trendLineType(value: TrendLineType) {
		this.setValue(XamSparkline.trendLineTypeProperty, enumGetBox<TrendLineType>(TrendLineType_$type, value));
	}
	static readonly trendLinePeriodPropertyName: string = "TrendLinePeriod";
	static readonly trendLinePeriodProperty: DependencyProperty = DependencyProperty.register(XamSparkline.trendLinePeriodPropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, 7, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.trendLinePeriodPropertyName, e.oldValue, e.newValue)));
	get trendLinePeriod(): number {
		return typeGetValue(this.getValue(XamSparkline.trendLinePeriodProperty));
	}
	set trendLinePeriod(value: number) {
		this.setValue(XamSparkline.trendLinePeriodProperty, value);
	}
	static readonly trendLineThicknessPropertyName: string = "TrendLineThickness";
	static readonly trendLineThicknessDef: number = -1;
	static readonly trendLineThicknessScaledDef: number = -1;
	static readonly trendLineThicknessProperty: DependencyProperty = DependencyProperty.register(XamSparkline.trendLineThicknessPropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, XamSparkline.trendLineThicknessScaledDef, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.trendLineThicknessPropertyName, e.oldValue, e.newValue)));
	get trendLineThickness(): number {
		return <number>this.getValue(XamSparkline.trendLineThicknessProperty);
	}
	set trendLineThickness(value: number) {
		this.setValue(XamSparkline.trendLineThicknessProperty, value);
	}
	static readonly normalRangeMinimumPropertyName: string = "NormalRangeMinimum";
	static readonly normalRangeMinimumProperty: DependencyProperty = DependencyProperty.register(XamSparkline.normalRangeMinimumPropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.normalRangeMinimumPropertyName, e.oldValue, e.newValue)));
	get normalRangeMinimum(): number {
		return <number>this.getValue(XamSparkline.normalRangeMinimumProperty);
	}
	set normalRangeMinimum(value: number) {
		this.setValue(XamSparkline.normalRangeMinimumProperty, value);
	}
	static readonly normalRangeMaximumPropertyName: string = "NormalRangeMaximum";
	static readonly normalRangeMaximumProperty: DependencyProperty = DependencyProperty.register(XamSparkline.normalRangeMaximumPropertyName, Number_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.normalRangeMaximumPropertyName, e.oldValue, e.newValue)));
	get normalRangeMaximum(): number {
		return <number>this.getValue(XamSparkline.normalRangeMaximumProperty);
	}
	set normalRangeMaximum(value: number) {
		this.setValue(XamSparkline.normalRangeMaximumProperty, value);
	}
	static readonly displayTypePropertyName: string = "DisplayType";
	static readonly displayTypeProperty: DependencyProperty = DependencyProperty.register(XamSparkline.displayTypePropertyName, SparklineDisplayType_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<SparklineDisplayType>(SparklineDisplayType_$type, SparklineDisplayType.Line), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.displayTypePropertyName, e.oldValue, e.newValue)));
	get displayType(): SparklineDisplayType {
		return EnumUtil.getEnumValue<SparklineDisplayType>(SparklineDisplayType_$type, this.getValue(XamSparkline.displayTypeProperty));
	}
	set displayType(value: SparklineDisplayType) {
		this.setValue(XamSparkline.displayTypeProperty, enumGetBox<SparklineDisplayType>(SparklineDisplayType_$type, value));
	}
	static readonly unknownValuePlottingPropertyName: string = "UnknownValuePlotting";
	static readonly unknownValuePlottingProperty: DependencyProperty = DependencyProperty.register(XamSparkline.unknownValuePlottingPropertyName, UnknownValuePlotting_$type, (<any>XamSparkline).$type, new PropertyMetadata(2, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, UnknownValuePlotting.DontPlot), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.unknownValuePlottingPropertyName, e.oldValue, e.newValue)));
	get unknownValuePlotting(): UnknownValuePlotting {
		return EnumUtil.getEnumValue<UnknownValuePlotting>(UnknownValuePlotting_$type, this.getValue(XamSparkline.unknownValuePlottingProperty));
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this.setValue(XamSparkline.unknownValuePlottingProperty, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, value));
	}
	static readonly verticalAxisLabelPropertyName: string = "VerticalAxisLabel";
	private static readonly verticalAxisLabelDefault: string = "{0:n}";
	static readonly verticalAxisLabelProperty: DependencyProperty = DependencyProperty.register(XamSparkline.verticalAxisLabelPropertyName, (<any>Base).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, XamSparkline.verticalAxisLabelDefault, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.verticalAxisLabelPropertyName, e.oldValue, e.newValue)));
	get verticalAxisLabel(): any {
		return this.getValue(XamSparkline.verticalAxisLabelProperty);
	}
	set verticalAxisLabel(value: any) {
		this.setValue(XamSparkline.verticalAxisLabelProperty, value);
	}
	static readonly horizontalAxisLabelPropertyName: string = "HorizontalAxisLabel";
	private static readonly horizontalAxisLabelPropertyDefault: string = "{0}";
	static readonly horizontalAxisLabelProperty: DependencyProperty = DependencyProperty.register(XamSparkline.horizontalAxisLabelPropertyName, (<any>Base).$type, (<any>XamSparkline).$type, new PropertyMetadata(2, XamSparkline.horizontalAxisLabelPropertyDefault, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, o)).onPropertyChanged(XamSparkline.horizontalAxisLabelPropertyName, e.oldValue, e.newValue)));
	get horizontalAxisLabel(): any {
		return this.getValue(XamSparkline.horizontalAxisLabelProperty);
	}
	set horizontalAxisLabel(value: any) {
		this.setValue(XamSparkline.horizontalAxisLabelProperty, value);
	}
	hasFormatLabel(): boolean {
		return this.formatLabel != null;
	}
	raiseFormatLabel(value: any): string {
		return this.formatLabel(value);
	}
	get formatLabel(): (arg1: any) => string {
		return <(arg1: any) => string>this.getValue(XamSparkline.formatLabelProperty);
	}
	set formatLabel(value: (arg1: any) => string) {
		this.setValue(XamSparkline.formatLabelProperty, value);
	}
	static readonly formatLabelPropertyName: string = "FormatLabel";
	static readonly formatLabelProperty: DependencyProperty = DependencyProperty.register(XamSparkline.formatLabelPropertyName, Delegate_$type, (<any>XamSparkline).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamSparkline>((<any>XamSparkline).$type, sender)).onPropertyChanged(XamSparkline.formatLabelPropertyName, e.oldValue, e.newValue)));
	private _serviceProvider: ServiceProvider_Spark = null;
	get serviceProvider(): ServiceProvider_Spark {
		return this._serviceProvider;
	}
	set serviceProvider(value: ServiceProvider_Spark) {
		let oldValue: ServiceProvider_Spark = this._serviceProvider;
		this._serviceProvider = value;
		this.onServiceProviderChanged(oldValue, this._serviceProvider);
	}
	private _configurationMessages: MessageChannel_Spark = new MessageChannel_Spark();
	get configurationMessages(): MessageChannel_Spark {
		return this._configurationMessages;
	}
	set configurationMessages(value: MessageChannel_Spark) {
		this._configurationMessages = value;
	}
	private _actualMinimum: number = NaN;
	get actualMinimum(): number {
		return this._actualMinimum;
	}
	set actualMinimum(value: number) {
		this._actualMinimum = value;
	}
	private _actualMaximum: number = NaN;
	get actualMaximum(): number {
		return this._actualMaximum;
	}
	set actualMaximum(value: number) {
		this._actualMaximum = value;
	}
	private _labelColumn: IFastItemColumn$1<any> = null;
	get labelColumn(): IFastItemColumn$1<any> {
		return this._labelColumn;
	}
	set labelColumn(value: IFastItemColumn$1<any>) {
		this._labelColumn = value;
	}
	private _horizontalAxis: HorizontalAxisView = null;
	get horizontalAxis(): HorizontalAxisView {
		return this._horizontalAxis;
	}
	set horizontalAxis(value: HorizontalAxisView) {
		this._horizontalAxis = value;
	}
	private _verticalAxis: VerticalAxisView = null;
	get verticalAxis(): VerticalAxisView {
		return this._verticalAxis;
	}
	set verticalAxis(value: VerticalAxisView) {
		this._verticalAxis = value;
	}
	onServiceProviderChanged(oldValue: ServiceProvider_Spark, newValue: ServiceProvider_Spark): void {
		if (oldValue != null) {
			this.configurationMessages.detachFromNext();
		}
		if (newValue != null) {
			this.configurationMessages.connectTo(<MessageChannel_Spark>newValue.getService("ConfigurationMessages"));
		}
	}
	onDetachedFromUI(): void {
		this._connector.view.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this._connector.view.onAttachedToUI();
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (propertyName == XamSparkline.pixelScalingRatioPropertyName) {
			if (!isNaN_(DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio))) {
				this.actualPixelScalingRatio = DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio);
			}
		}
		this.configurationMessages.sendMessage(((() => {
			let $ret = new PropertyChangedMessage_Spark();
			$ret.propertyName = propertyName;
			$ret.oldValue = oldValue;
			$ret.newValue = newValue;
			return $ret;
		})()));
	}
	destroy(): void {
		this.configurationMessages.sendMessage(((() => {
			let $ret = new PropertyChangedMessage_Spark();
			$ret.propertyName = "Container";
			$ret.newValue = null;
			return $ret;
		})()));
	}
	provideContainer(container: any): void {
		this.configurationMessages.sendMessage(((() => {
			let $ret = new PropertyChangedMessage_Spark();
			$ret.propertyName = "Container";
			$ret.newValue = container;
			return $ret;
		})()));
	}
	notifyResized(): void {
		this.configurationMessages.sendMessage(new ContainerSizeChangedMessage_Spark());
	}
	notifySetItem(source_: any, index: number, oldItem: any, newItem: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (source_ != this.itemsSource) {
			return;
		}
		this.configurationMessages.sendMessage(((() => {
			let $ret = new DataChangedMessage_Spark();
			$ret.change = NotifyCollectionChangedAction.Replace;
			$ret.oldItem = oldItem;
			$ret.newItem = newItem;
			$ret.index = index;
			return $ret;
		})()));
	}
	notifyClearItems(source_: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (source_ != this.itemsSource) {
			return;
		}
		this.configurationMessages.sendMessage(((() => {
			let $ret = new DataChangedMessage_Spark();
			$ret.change = NotifyCollectionChangedAction.Reset;
			return $ret;
		})()));
	}
	notifyInsertItem(source_: any, index: number, newItem: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (source_ != this.itemsSource) {
			return;
		}
		this.configurationMessages.sendMessage(((() => {
			let $ret = new DataChangedMessage_Spark();
			$ret.change = NotifyCollectionChangedAction.Add;
			$ret.newItem = newItem;
			$ret.index = index;
			return $ret;
		})()));
	}
	notifyRemoveItem(source_: any, index: number, oldItem: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (source_ != this.itemsSource) {
			return;
		}
		this.configurationMessages.sendMessage(((() => {
			let $ret = new DataChangedMessage_Spark();
			$ret.change = NotifyCollectionChangedAction.Remove;
			$ret.oldItem = oldItem;
			$ret.index = index;
			return $ret;
		})()));
	}
	exportVisualData(): SparklineVisualData {
		let svd: SparklineVisualData = new SparklineVisualData();
		svd.name = "SparklineVisualData";
		svd.horizontalAxis = this.horizontalAxis.exportViewShapes();
		svd.verticalAxis = this.verticalAxis.exportViewShapes();
		this._connector.view.exportViewShapes(svd);
		return svd;
	}
	exportSerializedVisualData(): string {
		let vd: SparklineVisualData = this.exportVisualData();
		vd.scaleByViewport();
		return vd.serialize();
	}
	private _pixelScalingRatio: number = NaN;
	static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		this.onPropertyChanged(XamSparkline.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
		if (this._pixelScalingRatio != oldValue) {
			this.onPropertyChanged(XamSparkline.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
		}
	}
	private _actualPixelScalingRatio: number = 1;
	static readonly actualPixelScalingRatioPropertyName: string = "ActualPixelScalingRatio";
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		let oldValue = this._actualPixelScalingRatio;
		this._actualPixelScalingRatio = value;
		if (this._actualPixelScalingRatio != oldValue) {
			this.onPropertyChanged(XamSparkline.actualPixelScalingRatioPropertyName, oldValue, this._actualPixelScalingRatio);
		}
	}
}


