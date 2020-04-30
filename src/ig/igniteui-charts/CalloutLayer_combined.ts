/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnnotationLayer } from "./AnnotationLayer";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Base, Type, EventArgs, IList$1, IList$1_$type, PropertyChangedEventArgs, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point, IEnumerable$1, IEnumerable$1_$type, ICollection$1, ICollection$1_$type, String_$type, Boolean_$type, typeGetValue, Number_$type, typeCast, enumGetBox, EnumUtil, fromEnum, runOn, delegateCombine, delegateRemove, Date_$type, Point_$type, markType, PointUtil } from "igniteui-core/type";
import { Series } from "./Series";
import { Brush } from "igniteui-core/Brush";
import { Thickness } from "igniteui-core/Thickness";
import { CalloutCollisionMode, CalloutCollisionMode_$type } from "./CalloutCollisionMode";
import { FontInfo } from "igniteui-core/FontInfo";
import { FontUtil } from "igniteui-core/FontUtil";
import { Rect } from "igniteui-core/Rect";
import { CalloutLayerFrame } from "./CalloutLayerFrame";
import { HashSet$1 } from "igniteui-core/HashSet$1";
import { CalloutAnnotationWrapper } from "./CalloutAnnotationWrapper";
import { List$1 } from "igniteui-core/List$1";
import { LinkedList$1 } from "igniteui-core/LinkedList$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { LinkedListNode$1 } from "igniteui-core/LinkedListNode$1";
import { LabelCollisionManager } from "igniteui-core/LabelCollisionManager";
import { SeriesPointOfInterest } from "./SeriesPointOfInterest";
import { Control } from "igniteui-core/Control";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { CalloutAnnotation } from "./CalloutAnnotation";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { SeriesViewer } from "./SeriesViewer";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { CalloutSeriesSelectingEventArgs } from "./CalloutSeriesSelectingEventArgs";
import { CalloutStyleUpdatingEventArgs } from "./CalloutStyleUpdatingEventArgs";
import { SeriesView } from "./SeriesView";
import { ContentInfo } from "./ContentInfo";
import { Frame } from "./Frame";
import { LabelCollisionPlacementPositions } from "igniteui-core/LabelCollisionPlacementPositions";
import { QuadTreeBoundingBox } from "igniteui-core/QuadTreeBoundingBox";
import { LabelCollisionInfo } from "igniteui-core/LabelCollisionInfo";
import { LabelCollisionManagerCollisionMode } from "igniteui-core/LabelCollisionManagerCollisionMode";
import { Axis } from "./Axis";
import { ScalerParams } from "./ScalerParams";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { IHasCategoryAxis } from "./IHasCategoryAxis";
import { Size } from "igniteui-core/Size";
import { CalloutContentUpdatingEventArgs } from "./CalloutContentUpdatingEventArgs";
import { CalloutLabelUpdatingEventArgs } from "./CalloutLabelUpdatingEventArgs";
import { CalloutKey } from "./CalloutKey";
import { DataContext } from "igniteui-core/DataContext";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { HashPool$2 } from "igniteui-core/HashPool$2";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { CategoryMode } from "./CategoryMode";
import { isNaN_ } from "igniteui-core/number";
import { stringIsNullOrEmpty } from "igniteui-core/string";
import { FastItemObjectColumn } from "igniteui-core/FastItemObjectColumn";
import { AnnotationLayerView } from "./AnnotationLayerView";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { TextBlock } from "igniteui-core/TextBlock";
import { SeriesViewerView } from "./SeriesViewerView";
import { IExecutionContext } from "igniteui-core/IExecutionContext";
import { SeriesViewerViewManager } from "./SeriesViewerViewManager";
import { DOMExecutionContext } from "igniteui-core/DOMExecutionContext";
import { Color } from "igniteui-core/Color";
import { Visibility } from "igniteui-core/Visibility";
import { Line } from "igniteui-core/Line";
import { CalloutViewHelper } from "./CalloutViewHelper";
import { Rectangle } from "igniteui-core/Rectangle";
import { Shape } from "igniteui-core/Shape";
import { TranslateTransform } from "igniteui-core/TranslateTransform";
import { UIElement } from "igniteui-core/UIElement";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";

/**
 * @hidden 
 */
export class CalloutLayer extends AnnotationLayer {
	static $t: Type = markType(CalloutLayer, 'CalloutLayer', (<any>AnnotationLayer).$type);
	constructor() {
		super();
		FastItemObjectColumn.register();
		this.useIndex = true;
		let previousFrame = new CalloutLayerFrame();
		let currentFrame = new CalloutLayerFrame();
		let transitionFrame = new CalloutLayerFrame();
		let animationRate: number = this.transitionDuration / 1000;
		this.previousFrame = previousFrame;
		this.currentFrame = currentFrame;
		this.transitionFrame = transitionFrame;
		this.defaultStyleKey = (<any>CalloutLayer).$type;
	}
	private _callouts_CollectionResetting(sender: any, e: EventArgs): void {
		this._userCallouts.clear();
		this.renderSeries(false);
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		super.dataUpdatedOverride(action, position, count, propertyName);
		let seriesMap = this.getSeriesMap();
		switch (action) {
			case FastItemsSourceEventAction.Change:
			this.updateCallout(position, seriesMap);
			break;

			case FastItemsSourceEventAction.Insert:
			for (let b: number = position; b < position + count; b++) {
				let callout = new CalloutAnnotation();
				let wrapper = new CalloutAnnotationWrapper();
				wrapper.callout = callout;
				wrapper.callout.series = this.targetSeries;
				this._userCallouts.insert(b, wrapper);
				this.updateCallout(b, seriesMap);
			}
			break;

			case FastItemsSourceEventAction.Remove:
			this._userCallouts.removeRange(position, count);
			break;

			case FastItemsSourceEventAction.Replace:
			for (let c: number = position; c < position + count; c++) {
				this.updateCallout(c, seriesMap);
			}
			break;

			case FastItemsSourceEventAction.Reset:
			this._userCallouts.clear();
			for (let i: number = 0; i < this.fastItemsSource.count; i++) {
				let callout1 = new CalloutAnnotation();
				let wrapper1 = new CalloutAnnotationWrapper();
				wrapper1.callout = callout1;
				wrapper1.callout.series = this.targetSeries;
				this._userCallouts.add(wrapper1);
				this.updateCallout(i, seriesMap);
			}
			break;

		}

		this.renderSeries(true);
	}
	shouldAnimate(animate: boolean): boolean {
		return false;
	}
	private getSeriesMap(): Dictionary$2<string, Series> {
		let map: Dictionary$2<string, Series> = new Dictionary$2<string, Series>(String_$type, (<any>Series).$type, 0);
		if (this.seriesViewer != null) {
			for (let i = 0; i < this.seriesViewer.series.count; i++) {
				let s = this.seriesViewer.series._inner[i];
				if (s.name != null && !map.containsKey(s.name)) {
					map.addItem(s.name, s);
				}
			}
		}
		return map;
	}
	private updateCallout(position: number, seriesMap: Dictionary$2<string, Series>): void {
		if (this.yColumn == null || this.labelColumn == null) {
			return;
		}
		let x: any = position;
		if (this.xColumn != null) {
			x = this.xColumn.item(position);
		}
		let y = this.yColumn.item(position);
		let label = this.labelColumn.item(position);
		let callout = this._userCallouts._inner[position];
		callout.callout.xValue = x;
		callout.callout.yValue = y;
		callout.callout.text = label != null ? label.toString() : "";
		if (this.keyColumn != null) {
			callout.callout.key = this.keyColumn.item(position);
		}
		if (this.contentColumn != null) {
			callout.callout.content = this.contentColumn.item(position);
		} else {
			callout.callout.content = this.fastItemsSource.item(position);
		}
		if (this.calloutSeriesSelecting != null) {
			let args = ((() => {
				let $ret = new CalloutSeriesSelectingEventArgs();
				$ret.xValue = x;
				$ret.yValue = y;
				$ret.item = this.fastItemsSource.item(position);
				return $ret;
			})());
			this.calloutSeriesSelecting(this, args);
			if (args.series != null) {
				callout.callout.series = args.series;
			} else if (args.seriesName != null) {
				if (seriesMap.containsKey(args.seriesName)) {
					callout.callout.series = seriesMap.item(args.seriesName);
				}
			}
		}
		this.updateCalloutVisuals(callout);
	}
	private updateCalloutVisuals(callout: CalloutAnnotationWrapper): void {
		let backgroundPadding: Thickness = new Thickness(0, 3);
		if (isNaN_(this.calloutPadding.left) || isNaN_(this.calloutPadding.top) || isNaN_(this.calloutPadding.right) || isNaN_(this.calloutPadding.bottom)) {
			backgroundPadding = new Thickness(0, 3);
		} else {
			backgroundPadding = this.calloutPadding;
		}
		let background = this.calloutBackground != null ? this.calloutBackground : this.calloutView.getDefaultCalloutBackground(callout.callout.series);
		let textColor = this.calloutTextColor != null ? this.calloutTextColor : this.calloutView.getDefaultCalloutTextColor();
		let outline = this.calloutOutline != null ? this.calloutOutline : this.calloutView.getDefaultCalloutOutline();
		let leaderBrush = this.calloutLeaderBrush != null ? this.calloutLeaderBrush : this.calloutView.getDefaultCalloutLeaderBrush(callout.callout.series);
		let strokeThickness = isNaN_(this.calloutStrokeThickness) ? 0 : this.calloutStrokeThickness;
		if (this.isCustomCalloutStyleEnabled && this.calloutStyleUpdating != null) {
			let args = new CalloutStyleUpdatingEventArgs();
			args.item = callout.callout.content;
			args.xValue = callout.callout.xValue;
			args.yValue = callout.callout.yValue;
			args.series = callout.callout.series;
			args.background = background;
			args.textColor = textColor;
			args.outline = outline;
			args.leaderBrush = leaderBrush;
			args.strokeThickness = strokeThickness;
			this.calloutStyleUpdating(this, args);
			background = args.background;
			textColor = args.textColor;
			outline = args.outline;
			leaderBrush = args.leaderBrush;
			strokeThickness = args.strokeThickness;
		}
		callout.callout.backgroundPadding = backgroundPadding;
		callout.callout.background = background;
		callout.callout.textColor = textColor;
		callout.callout.outline = outline;
		callout.callout.leaderBrush = leaderBrush;
		callout.callout.strokeThickness = strokeThickness;
	}
	calloutStyleUpdating: (sender: any, args: CalloutStyleUpdatingEventArgs) => void = null;
	get labelMemberPath(): string {
		return <string>this.getValue(CalloutLayer.labelMemberPathProperty);
	}
	set labelMemberPath(value: string) {
		this.setValue(CalloutLayer.labelMemberPathProperty, value);
	}
	static readonly labelMemberPathPropertyName: string = "LabelMemberPath";
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == CalloutLayer.labelMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.labelMemberPath);
		}
		if (resolved == CalloutLayer.xMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.xMemberPath);
		}
		if (resolved == CalloutLayer.yMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.yMemberPath);
		}
		if (resolved == CalloutLayer.keyMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.keyMemberPath);
		}
		if (resolved == CalloutLayer.contentMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.contentMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	static readonly labelMemberPathProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.labelMemberPathPropertyName, String_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.labelMemberPathPropertyName, e.oldValue, e.newValue)));
	get labelColumn(): IFastItemColumn$1<any> {
		return this._labelColumn;
	}
	set labelColumn(value: IFastItemColumn$1<any>) {
		if (this._labelColumn != value) {
			let oldLabelColumn: IFastItemColumn$1<any> = this._labelColumn;
			this._labelColumn = value;
			this.raisePropertyChanged(CalloutLayer.labelColumnPropertyName, oldLabelColumn, this._labelColumn);
		}
	}
	private _labelColumn: IFastItemColumn$1<any> = null;
	static readonly labelColumnPropertyName: string = "LabelColumn";
	get xMemberPath(): string {
		return <string>this.getValue(CalloutLayer.xMemberPathProperty);
	}
	set xMemberPath(value: string) {
		this.setValue(CalloutLayer.xMemberPathProperty, value);
	}
	static readonly xMemberPathPropertyName: string = "XMemberPath";
	static readonly xMemberPathProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.xMemberPathPropertyName, String_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.xMemberPathPropertyName, e.oldValue, e.newValue)));
	get xColumn(): IFastItemColumn$1<any> {
		return this._xColumn;
	}
	set xColumn(value: IFastItemColumn$1<any>) {
		if (this._xColumn != value) {
			let oldXColumn: IFastItemColumn$1<any> = this._xColumn;
			this._xColumn = value;
			this.raisePropertyChanged(CalloutLayer.xColumnPropertyName, oldXColumn, this._xColumn);
		}
	}
	private _xColumn: IFastItemColumn$1<any> = null;
	static readonly xColumnPropertyName: string = "XColumn";
	get yMemberPath(): string {
		return <string>this.getValue(CalloutLayer.yMemberPathProperty);
	}
	set yMemberPath(value: string) {
		this.setValue(CalloutLayer.yMemberPathProperty, value);
	}
	static readonly yMemberPathPropertyName: string = "YMemberPath";
	static readonly yMemberPathProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.yMemberPathPropertyName, String_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.yMemberPathPropertyName, e.oldValue, e.newValue)));
	get yColumn(): IFastItemColumn$1<any> {
		return this._yColumn;
	}
	set yColumn(value: IFastItemColumn$1<any>) {
		if (this._yColumn != value) {
			let oldYColumn: IFastItemColumn$1<any> = this._yColumn;
			this._yColumn = value;
			this.raisePropertyChanged(CalloutLayer.yColumnPropertyName, oldYColumn, this._yColumn);
		}
	}
	private _yColumn: IFastItemColumn$1<any> = null;
	static readonly yColumnPropertyName: string = "YColumn";
	get keyMemberPath(): string {
		return <string>this.getValue(CalloutLayer.keyMemberPathProperty);
	}
	set keyMemberPath(value: string) {
		this.setValue(CalloutLayer.keyMemberPathProperty, value);
	}
	static readonly keyMemberPathPropertyName: string = "KeyMemberPath";
	static readonly keyMemberPathProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.keyMemberPathPropertyName, String_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.keyMemberPathPropertyName, e.oldValue, e.newValue)));
	get keyColumn(): IFastItemColumn$1<any> {
		return this._keyColumn;
	}
	set keyColumn(value: IFastItemColumn$1<any>) {
		if (this._keyColumn != value) {
			let oldKeyColumn: IFastItemColumn$1<any> = this._keyColumn;
			this._keyColumn = value;
			this.raisePropertyChanged(CalloutLayer.keyColumnPropertyName, oldKeyColumn, this._keyColumn);
		}
	}
	private _keyColumn: IFastItemColumn$1<any> = null;
	static readonly keyColumnPropertyName: string = "KeyColumn";
	get isCalloutOffsettingEnabled(): boolean {
		return <boolean>this.getValue(CalloutLayer.isCalloutOffsettingEnabledProperty);
	}
	set isCalloutOffsettingEnabled(value: boolean) {
		this.setValue(CalloutLayer.isCalloutOffsettingEnabledProperty, value);
	}
	static readonly isCalloutOffsettingEnabledPropertyName: string = "IsCalloutOffsettingEnabled";
	static readonly isCalloutOffsettingEnabledProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.isCalloutOffsettingEnabledPropertyName, Boolean_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.isCalloutOffsettingEnabledPropertyName, e.oldValue, e.newValue)));
	get contentMemberPath(): string {
		return <string>this.getValue(CalloutLayer.contentMemberPathProperty);
	}
	set contentMemberPath(value: string) {
		this.setValue(CalloutLayer.contentMemberPathProperty, value);
	}
	static readonly contentMemberPathPropertyName: string = "ContentMemberPath";
	static readonly contentMemberPathProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.contentMemberPathPropertyName, String_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.contentMemberPathPropertyName, e.oldValue, e.newValue)));
	get contentColumn(): IFastItemColumn$1<any> {
		return this._contentColumn;
	}
	set contentColumn(value: IFastItemColumn$1<any>) {
		if (this._contentColumn != value) {
			let oldContentColumn: IFastItemColumn$1<any> = this._contentColumn;
			this._contentColumn = value;
			this.raisePropertyChanged(CalloutLayer.contentColumnPropertyName, oldContentColumn, this._contentColumn);
		}
	}
	private _contentColumn: IFastItemColumn$1<any> = null;
	static readonly contentColumnPropertyName: string = "ContentColumn";
	private _repositionedCalloutsSet: HashSet$1<CalloutAnnotationWrapper> = new HashSet$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
	private _repositionedCallouts: List$1<CalloutAnnotationWrapper> = new List$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
	private callout_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		if (e.propertyName == CalloutAnnotation.xValuePropertyName || e.propertyName == CalloutAnnotation.yValuePropertyName) {
			let wrapper = (<CalloutAnnotation>sender).wrapper;
			if (!this._repositionedCalloutsSet.contains(wrapper)) {
				this._repositionedCallouts.add(wrapper);
				this.renderSeries(false);
			}
		}
	}
	protected createView(): SeriesView {
		return new CalloutLayerView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.calloutView = <CalloutLayerView>view;
	}
	private _calloutView: CalloutLayerView;
	protected get calloutView(): CalloutLayerView {
		return this._calloutView;
	}
	protected set calloutView(value: CalloutLayerView) {
		this._calloutView = value;
	}
	private _userCallouts: List$1<CalloutAnnotationWrapper> = new List$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
	get targetSeries(): Series {
		return <Series>this.getValue(CalloutLayer.targetSeriesProperty);
	}
	set targetSeries(value: Series) {
		this.setValue(CalloutLayer.targetSeriesProperty, value);
	}
	static readonly targetSeriesPropertyName: string = "TargetSeries";
	static readonly targetSeriesProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.targetSeriesPropertyName, (<any>Series).$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.targetSeriesPropertyName, e.oldValue, e.newValue)));
	get collisionChannel(): string {
		return <string>this.getValue(CalloutLayer.collisionChannelProperty);
	}
	set collisionChannel(value: string) {
		this.setValue(CalloutLayer.collisionChannelProperty, value);
	}
	static readonly collisionChannelPropertyName: string = "CollisionChannel";
	static readonly collisionChannelProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.collisionChannelPropertyName, String_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.collisionChannelPropertyName, e.oldValue, e.newValue)));
	get isAutoCalloutBehaviorEnabled(): boolean {
		return <boolean>this.getValue(CalloutLayer.isAutoCalloutBehaviorEnabledProperty);
	}
	set isAutoCalloutBehaviorEnabled(value: boolean) {
		this.setValue(CalloutLayer.isAutoCalloutBehaviorEnabledProperty, value);
	}
	static readonly isAutoCalloutBehaviorEnabledPropertyName: string = "IsAutoCalloutBehaviorEnabled";
	static readonly isAutoCalloutBehaviorEnabledProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.isAutoCalloutBehaviorEnabledPropertyName, Boolean_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.isAutoCalloutBehaviorEnabledPropertyName, e.oldValue, e.newValue)));
	get useValueForAutoCalloutLabels(): boolean {
		return <boolean>this.getValue(CalloutLayer.useValueForAutoCalloutLabelsProperty);
	}
	set useValueForAutoCalloutLabels(value: boolean) {
		this.setValue(CalloutLayer.useValueForAutoCalloutLabelsProperty, value);
	}
	static readonly useValueForAutoCalloutLabelsPropertyName: string = "UseValueForAutoCalloutLabels";
	static readonly useValueForAutoCalloutLabelsProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.useValueForAutoCalloutLabelsPropertyName, Boolean_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.useValueForAutoCalloutLabelsPropertyName, e.oldValue, e.newValue)));
	get isCustomCalloutStyleEnabled(): boolean {
		return <boolean>this.getValue(CalloutLayer.isCustomCalloutStyleEnabledProperty);
	}
	set isCustomCalloutStyleEnabled(value: boolean) {
		this.setValue(CalloutLayer.isCustomCalloutStyleEnabledProperty, value);
	}
	static readonly isCustomCalloutStyleEnabledPropertyName: string = "IsCustomCalloutStyleEnabled";
	static readonly isCustomCalloutStyleEnabledProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.isCustomCalloutStyleEnabledPropertyName, Boolean_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.isCustomCalloutStyleEnabledPropertyName, e.oldValue, e.newValue)));
	get autoCalloutLabelPrecision(): number {
		return typeGetValue(this.getValue(CalloutLayer.autoCalloutLabelPrecisionProperty));
	}
	set autoCalloutLabelPrecision(value: number) {
		this.setValue(CalloutLayer.autoCalloutLabelPrecisionProperty, value);
	}
	static readonly autoCalloutLabelPrecisionPropertyName: string = "AutoCalloutLabelPrecision";
	static readonly autoCalloutLabelPrecisionProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.autoCalloutLabelPrecisionPropertyName, Number_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, 5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.autoCalloutLabelPrecisionPropertyName, e.oldValue, e.newValue)));
	get calloutTextColor(): Brush {
		return <Brush>this.getValue(CalloutLayer.calloutTextColorProperty);
	}
	set calloutTextColor(value: Brush) {
		this.setValue(CalloutLayer.calloutTextColorProperty, value);
	}
	static readonly calloutTextColorPropertyName: string = "CalloutTextColor";
	static readonly calloutTextColorProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutTextColorPropertyName, (<any>Brush).$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.calloutTextColorPropertyName, e.oldValue, e.newValue)));
	get calloutBackground(): Brush {
		return <Brush>this.getValue(CalloutLayer.calloutBackgroundProperty);
	}
	set calloutBackground(value: Brush) {
		this.setValue(CalloutLayer.calloutBackgroundProperty, value);
	}
	static readonly calloutBackgroundPropertyName: string = "CalloutBackground";
	static readonly calloutBackgroundProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutBackgroundPropertyName, (<any>Brush).$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.calloutBackgroundPropertyName, e.oldValue, e.newValue)));
	get calloutInterpolatedValuePrecision(): number {
		return typeGetValue(this.getValue(CalloutLayer.calloutInterpolatedValuePrecisionProperty));
	}
	set calloutInterpolatedValuePrecision(value: number) {
		this.setValue(CalloutLayer.calloutInterpolatedValuePrecisionProperty, value);
	}
	static readonly calloutInterpolatedValuePrecisionPropertyName: string = "CalloutInterpolatedValuePrecision";
	static readonly calloutInterpolatedValuePrecisionProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutInterpolatedValuePrecisionPropertyName, Number_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, -1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.calloutInterpolatedValuePrecisionPropertyName, e.oldValue, e.newValue)));
	get calloutOutline(): Brush {
		return <Brush>this.getValue(CalloutLayer.calloutOutlineProperty);
	}
	set calloutOutline(value: Brush) {
		this.setValue(CalloutLayer.calloutOutlineProperty, value);
	}
	static readonly calloutOutlinePropertyName: string = "CalloutOutline";
	static readonly calloutOutlineProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutOutlinePropertyName, (<any>Brush).$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.calloutOutlinePropertyName, e.oldValue, e.newValue)));
	get calloutLeaderBrush(): Brush {
		return <Brush>this.getValue(CalloutLayer.calloutLeaderBrushProperty);
	}
	set calloutLeaderBrush(value: Brush) {
		this.setValue(CalloutLayer.calloutLeaderBrushProperty, value);
	}
	static readonly calloutLeaderBrushPropertyName: string = "CalloutLeaderBrush";
	static readonly calloutLeaderBrushProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutLeaderBrushPropertyName, (<any>Brush).$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.calloutLeaderBrushPropertyName, e.oldValue, e.newValue)));
	get calloutPadding(): Thickness {
		return new Thickness(1, this.calloutPaddingLeft, this.calloutPaddingTop, this.calloutPaddingRight, this.calloutPaddingBottom);
	}
	static readonly calloutPaddingLeftPropertyName: string = "CalloutPaddingLeft";
	static readonly calloutPaddingLeftProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutPaddingLeftPropertyName, Number_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutLayer>((<any>CalloutLayer).$type, sender)).raisePropertyChanged(CalloutLayer.calloutPaddingLeftPropertyName, e.oldValue, e.newValue)));
	get calloutPaddingLeft(): number {
		return <number>this.getValue(CalloutLayer.calloutPaddingLeftProperty);
	}
	set calloutPaddingLeft(value: number) {
		this.setValue(CalloutLayer.calloutPaddingLeftProperty, value);
	}
	static readonly calloutPaddingTopPropertyName: string = "CalloutPaddingTop";
	static readonly calloutPaddingTopProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutPaddingTopPropertyName, Number_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutLayer>((<any>CalloutLayer).$type, sender)).raisePropertyChanged(CalloutLayer.calloutPaddingTopPropertyName, e.oldValue, e.newValue)));
	get calloutPaddingTop(): number {
		return <number>this.getValue(CalloutLayer.calloutPaddingTopProperty);
	}
	set calloutPaddingTop(value: number) {
		this.setValue(CalloutLayer.calloutPaddingTopProperty, value);
	}
	static readonly calloutPaddingRightPropertyName: string = "CalloutPaddingRight";
	static readonly calloutPaddingRightProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutPaddingRightPropertyName, Number_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutLayer>((<any>CalloutLayer).$type, sender)).raisePropertyChanged(CalloutLayer.calloutPaddingRightPropertyName, e.oldValue, e.newValue)));
	get calloutPaddingRight(): number {
		return <number>this.getValue(CalloutLayer.calloutPaddingRightProperty);
	}
	set calloutPaddingRight(value: number) {
		this.setValue(CalloutLayer.calloutPaddingRightProperty, value);
	}
	static readonly calloutPaddingBottomPropertyName: string = "CalloutPaddingBottom";
	static readonly calloutPaddingBottomProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutPaddingBottomPropertyName, Number_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<CalloutLayer>((<any>CalloutLayer).$type, sender)).raisePropertyChanged(CalloutLayer.calloutPaddingBottomPropertyName, e.oldValue, e.newValue)));
	get calloutPaddingBottom(): number {
		return <number>this.getValue(CalloutLayer.calloutPaddingBottomProperty);
	}
	set calloutPaddingBottom(value: number) {
		this.setValue(CalloutLayer.calloutPaddingBottomProperty, value);
	}
	get calloutCollisionMode(): CalloutCollisionMode {
		return EnumUtil.getEnumValue<CalloutCollisionMode>(CalloutCollisionMode_$type, this.getValue(CalloutLayer.calloutCollisionModeProperty));
	}
	set calloutCollisionMode(value: CalloutCollisionMode) {
		this.setValue(CalloutLayer.calloutCollisionModeProperty, enumGetBox<CalloutCollisionMode>(CalloutCollisionMode_$type, value));
	}
	static readonly calloutCollisionModePropertyName: string = "CalloutCollisionMode";
	static readonly calloutCollisionModeProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutCollisionModePropertyName, CalloutCollisionMode_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, enumGetBox<CalloutCollisionMode>(CalloutCollisionMode_$type, CalloutCollisionMode.GreedyCenterOfMass), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.calloutCollisionModePropertyName, e.oldValue, e.newValue)));
	get calloutPositionPadding(): number {
		return <number>this.getValue(CalloutLayer.calloutPositionPaddingProperty);
	}
	set calloutPositionPadding(value: number) {
		this.setValue(CalloutLayer.calloutPositionPaddingProperty, value);
	}
	static readonly calloutPositionPaddingPropertyName: string = "CalloutPositionPadding";
	static readonly calloutPositionPaddingProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutPositionPaddingPropertyName, Number_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, 10, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.calloutPositionPaddingPropertyName, e.oldValue, e.newValue)));
	get calloutStrokeThickness(): number {
		return <number>this.getValue(CalloutLayer.calloutStrokeThicknessProperty);
	}
	set calloutStrokeThickness(value: number) {
		this.setValue(CalloutLayer.calloutStrokeThicknessProperty, value);
	}
	static readonly calloutStrokeThicknessPropertyName: string = "CalloutStrokeThickness";
	static readonly calloutStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.calloutStrokeThicknessPropertyName, Number_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.calloutStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	get textStyle(): string {
		return <string>this.getValue(CalloutLayer.textStyleProperty);
	}
	set textStyle(value: string) {
		this.setValue(CalloutLayer.textStyleProperty, value);
	}
	static readonly textStylePropertyName: string = "TextStyle";
	static readonly textStyleProperty: DependencyProperty = DependencyProperty.register(CalloutLayer.textStylePropertyName, String_$type, (<any>CalloutLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CalloutLayer>sender).raisePropertyChanged(CalloutLayer.textStylePropertyName, e.oldValue, e.newValue)));
	private _fontInfo: FontInfo = null;
	get fontInfo(): FontInfo {
		if (this._fontInfo == null) {
			this._fontInfo = FontUtil.toFontInfo(this.renderer, this.textStyle);
		}
		return this._fontInfo;
	}
	protected onDependentSeriesRender(series: Series, animate: boolean): void {
		if (this.targetSeries == null || this.targetSeries == series) {
			if (!this.contentInfo.isDirty) {
				this.renderSeries(animate);
			}
		}
	}
	protected prepareFrame(frame: Frame, view: SeriesView): void {
		super.prepareFrame(frame, view);
		let f = <CalloutLayerFrame>frame;
		f.contents.clear();
		f.contexts.clear();
		f.callouts.clear();
		f.calloutBackgrounds.clear();
		f.calloutOutlines.clear();
		f.calloutLeaderBrushes.clear();
		f.calloutPaddingsLeft.clear();
		f.calloutPaddingsTop.clear();
		f.calloutPaddingsRight.clear();
		f.calloutPaddingsBottom.clear();
		f.calloutStrokeThicknesses.clear();
		f.calloutTextColors.clear();
		f.targetXPositions.clear();
		f.targetYPositions.clear();
		f.labelXPositions.clear();
		f.labelYPositions.clear();
		let activeUserCallouts = this.getActiveUserCallouts();
		let activeSeriesCallouts: List$1<CalloutAnnotationWrapper> = new List$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
		if (this.isAutoCalloutBehaviorEnabled) {
			if (this.isSeriesValid(this.targetSeries)) {
				this.prepareSeries(this.targetSeries, f, activeSeriesCallouts);
			} else {
				for (let series of fromEnum<Series>(this.seriesViewer.series)) {
					if (this.isSeriesValid(series)) {
						this.prepareSeries(series, f, activeSeriesCallouts);
					}
				}
			}
		}
		this.prepareCallouts(f, activeUserCallouts, activeSeriesCallouts);
	}
	private _currentCallouts: LinkedList$1<CalloutAnnotationWrapper> = new LinkedList$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type);
	private _currentCalloutsMap: Dictionary$2<CalloutAnnotationWrapper, LinkedListNode$1<CalloutAnnotationWrapper>> = new Dictionary$2<CalloutAnnotationWrapper, LinkedListNode$1<CalloutAnnotationWrapper>>((<any>CalloutAnnotationWrapper).$type, (<any>LinkedListNode$1).$type.specialize((<any>CalloutAnnotationWrapper).$type), 0);
	private _collisionManager: LabelCollisionManager = null;
	private _lastPrepareWindow: Rect = new Rect(0, 0, 0, 1, 1);
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		super.windowRectChangedOverride(oldWindowRect, newWindowRect);
		let deltaWidth = newWindowRect.width - this._lastPrepareWindow.width;
		let deltaHeight = newWindowRect.height - this._lastPrepareWindow.height;
		let mainDelta: number = 0;
		if (Math.abs(deltaWidth) > Math.abs(deltaHeight)) {
			mainDelta = deltaWidth;
			this._zoomPixelChange = deltaWidth * this.viewport.width;
		} else {
			mainDelta = deltaHeight;
			this._zoomPixelChange = deltaHeight * this.viewport.height;
		}
		if (mainDelta > 0 && this._zoomPixelChange > 5) {
			this._zoomedOut = true;
		}
		if (mainDelta < 0 && this._zoomPixelChange > 5) {
			this._zoomedIn = true;
		}
	}
	protected viewportRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		super.viewportRectChangedOverride(oldWindowRect, newWindowRect);
		if (!oldWindowRect.equals1(newWindowRect)) {
			this._viewportChanged = true;
		}
	}
	private _needsCollision: boolean = false;
	private _currentColliding: number = 0;
	private _calloutsViewport: Rect = Rect.empty;
	get calloutsViewport(): Rect {
		return this._calloutsViewport;
	}
	set calloutsViewport(value: Rect) {
		this._calloutsViewport = value;
	}
	private prepareCallouts(f: CalloutLayerFrame, activeUserCallouts: List$1<CalloutAnnotationWrapper>, activeSeriesCallouts: List$1<CalloutAnnotationWrapper>): void {
		if (this.seriesViewer != null) {
			this._lastPrepareWindow = this.seriesViewer.actualWindowRect;
		}
		if (this.viewport.isEmpty) {
			return;
		}
		this.calloutsViewport = new Rect(0, this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height);
		if (this._collisionManager != null && this.collisionChannel != null && this.collisionChannel != this._collisionManager.collisionChannel) {
			this.detachCollisionManager();
		}
		if (this._collisionManager == null) {
			let channelManager = this.getChannelManager();
			if (channelManager != null) {
				this._collisionManager = channelManager;
				let $t = this._collisionManager;
				$t.labelsMoved = delegateCombine($t.labelsMoved, runOn(this, this._collisionManager_LabelsMoved));
			} else {
				let contentViewport = this.getContentViewport(this.view);
				let topPriority: LabelCollisionPlacementPositions = LabelCollisionPlacementPositions.Top;
				if (this.targetSeries != null) {
					if (this.targetSeries.isVertical) {
						topPriority = LabelCollisionPlacementPositions.Right;
					}
				} else {
					let allVertical: boolean = false;
					if (this.seriesViewer != null && this.seriesViewer.series.count > 0) {
						allVertical = true;
						for (let series of fromEnum<Series>(this.seriesViewer.series)) {
							if (!series.isAnnotationLayer) {
								if (!series.isVertical) {
									allVertical = false;
								}
							}
						}
					}
					if (allVertical) {
						topPriority = LabelCollisionPlacementPositions.Right;
					}
				}
				this._collisionManager = new LabelCollisionManager(this.viewport.right, this.viewport.bottom, this.viewport, this.calloutView.getExecutionContext(), this.calloutPositionPadding, this.resolveCollisionMode(), topPriority, this.resolveAnnealingStepCount(), this.resolveAnnealingMilliseconds(), this.isCalloutOffsettingEnabled);
				if (this.collisionChannel != null) {
					this._collisionManager.collisionChannel = this.collisionChannel;
					this._collisionManager.owner = this;
				}
				let $t1 = this._collisionManager;
				$t1.labelsMoved = delegateCombine($t1.labelsMoved, runOn(this, this._collisionManager_LabelsMoved));
			}
		}
		if (this._zoomedIn) {
			this._zoomedIn = false;
			if (this._collisionManager.collisionsCount > 2) {
				this._needsCollision = true;
			}
		}
		if (this._zoomedOut) {
			this._zoomedOut = false;
			if (this._zoomPixelChange > 5) {
				this._needsCollision = true;
			}
		}
		if (this._viewportChanged) {
			this._viewportChanged = false;
			this._collisionManager.resize(this.viewport.right, this.viewport.bottom, this.viewport);
			this._needsCollision = true;
		}
		let addedCalloutsSet: HashSet$1<CalloutAnnotationWrapper> = new HashSet$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
		let removedCalloutsSet: HashSet$1<CalloutAnnotationWrapper> = new HashSet$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
		let addedCalloutsList: List$1<CalloutAnnotationWrapper> = new List$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
		let removedCalloutsList: List$1<CalloutAnnotationWrapper> = new List$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
		let newActiveCallouts: HashSet$1<CalloutAnnotationWrapper> = new HashSet$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
		for (let i = 0; i < activeUserCallouts.count; i++) {
			newActiveCallouts.add_1(activeUserCallouts._inner[i]);
		}
		for (let i1 = 0; i1 < activeSeriesCallouts.count; i1++) {
			newActiveCallouts.add_1(activeSeriesCallouts._inner[i1]);
		}
		let currentCallout = this._currentCallouts.first;
		while (currentCallout != null) {
			let nextCallout = currentCallout.next;
			if (!newActiveCallouts.contains(currentCallout.value)) {
				removedCalloutsList.add(currentCallout.value);
				removedCalloutsSet.add_1(currentCallout.value);
				let $t2 = currentCallout.value.callout;
				$t2.propertyChanged = delegateRemove($t2.propertyChanged, runOn(this, this.callout_PropertyChanged));
				this._currentCallouts.remove(currentCallout);
				this._currentCalloutsMap.removeItem(currentCallout.value);
				this._collisionManager.removeLabel(currentCallout.value.label);
			}
			currentCallout = nextCallout;
		}
		for (let i2 = 0; i2 < activeUserCallouts.count; i2++) {
			if (!this._currentCalloutsMap.containsKey(activeUserCallouts._inner[i2])) {
				this._currentCallouts.addLast(activeUserCallouts._inner[i2]);
				let $t3 = activeUserCallouts._inner[i2].callout;
				$t3.propertyChanged = delegateCombine($t3.propertyChanged, runOn(this, this.callout_PropertyChanged));
				this._currentCalloutsMap.addItem(activeUserCallouts._inner[i2], this._currentCallouts.last);
				addedCalloutsList.add(activeUserCallouts._inner[i2]);
				addedCalloutsSet.add_1(activeUserCallouts._inner[i2]);
				this._needsCollision = true;
			}
		}
		for (let i3 = 0; i3 < activeSeriesCallouts.count; i3++) {
			if (!this._currentCalloutsMap.containsKey(activeSeriesCallouts._inner[i3])) {
				this._currentCallouts.addLast(activeSeriesCallouts._inner[i3]);
				this._currentCalloutsMap.addItem(activeSeriesCallouts._inner[i3], this._currentCallouts.last);
				let $t4 = activeSeriesCallouts._inner[i3].callout;
				$t4.propertyChanged = delegateCombine($t4.propertyChanged, runOn(this, this.callout_PropertyChanged));
				addedCalloutsList.add(activeSeriesCallouts._inner[i3]);
				addedCalloutsSet.add_1(activeSeriesCallouts._inner[i3]);
				this._needsCollision = true;
			}
		}
		if (this._repositionedCallouts.count > 0) {
			this._needsCollision = true;
			this._repositionedCallouts.clear();
			this._repositionedCalloutsSet.clear();
		}
		currentCallout = this._currentCallouts.first;
		while (currentCallout != null) {
			let box = this.getTargetBox(currentCallout.value);
			if (box == null) {
				return;
			}
			if (!Base.equalsStatic(box, currentCallout.value.label.targetBox)) {
				let isNew: boolean = false;
				if (currentCallout.value.label.targetBox == null) {
					isNew = true;
				}
				let l = currentCallout.value.label;
				l.targetX = box.centerX;
				l.targetY = box.centerY;
				if (!isNaN_(l.targetX) && !isNaN_(l.targetY)) {
					l.targetHalfWidth = box.halfWidth;
					l.targetHalfHeight = box.halfHeight;
					if (l.actualLabelBox == null) {
						this._collisionManager.findOptimisticPosition(l);
					}
					if (isNew) {
						this._collisionManager.addLabel(l);
					} else {
						this._collisionManager.moveTarget(l);
					}
				}
			}
			currentCallout = currentCallout.next;
		}
		let count = this._collisionManager.getCurrentCollisionCount();
		let boundaryCollisions = this._collisionManager.hasBoundaryCollisions();
		if (this._needsCollision && (count != 0 || boundaryCollisions)) {
			this._needsCollision = false;
			this._currentColliding = 0x7FFFFFFF;
			if (this.collisionChannel != null) {
				let allMatch: boolean = true;
				for (let i4 = 0; i4 < this.seriesViewer.series.count; i4++) {
					let s = this.seriesViewer.series._inner[i4];
					if (s.isAnnotationLayer && typeCast<CalloutLayer>((<any>CalloutLayer).$type, s) !== null) {
						let c = <CalloutLayer>s;
						if (c.collisionChannel == this.collisionChannel) {
							if (!c.calloutsViewport.equals1(this._collisionManager.viewport)) {
								allMatch = false;
								break;
							}
						}
					}
				}
				if (allMatch) {
					this._collisionManager.startCollision();
				} else {
					this._collisionManager.cancel();
				}
			} else {
				this._collisionManager.startCollision();
			}
		}
		let current = this._currentCallouts.first;
		while (current != null) {
			let callout = current.value;
			f.callouts.add1(callout);
			f.calloutBackgrounds.add(callout.callout.background);
			f.calloutOutlines.add(callout.callout.outline);
			f.calloutLeaderBrushes.add(callout.callout.leaderBrush);
			f.calloutPaddingsLeft.add(callout.callout.backgroundPadding.left);
			f.calloutPaddingsTop.add(callout.callout.backgroundPadding.top);
			f.calloutPaddingsRight.add(callout.callout.backgroundPadding.right);
			f.calloutPaddingsBottom.add(callout.callout.backgroundPadding.bottom);
			f.calloutStrokeThicknesses.add(callout.callout.strokeThickness);
			f.calloutTextColors.add(callout.callout.textColor);
			f.contents.add1(callout.callout.text);
			f.contexts.add1(callout.callout.content);
			let label = callout.label;
			f.targetXPositions.add(callout.label.targetX - (callout.label.actualCenterX - callout.label.labelHalfWidth));
			f.targetYPositions.add(callout.label.targetY - (callout.label.actualCenterY - callout.label.labelHalfHeight));
			f.labelXPositions.add(callout.label.actualCenterX - callout.label.labelHalfWidth);
			f.labelYPositions.add(callout.label.actualCenterY - callout.label.labelHalfHeight);
			current = current.next;
		}
	}
	private detachCollisionManager(): void {
		if (this._collisionManager != null) {
			let cc = this._currentCallouts.first;
			while (cc != null) {
				let l = cc.value.label;
				if (l != null) {
					this._collisionManager.removeLabel(l);
				}
				cc = cc.next;
			}
			let $t = this._collisionManager;
			$t.labelsMoved = delegateRemove($t.labelsMoved, runOn(this, this._collisionManager_LabelsMoved));
			this._collisionManager = null;
		}
		this.clearCallouts();
	}
	private getChannelManager(): LabelCollisionManager {
		if (this.seriesViewer == null) {
			return null;
		}
		for (let i = 0; i < this.seriesViewer.series.count; i++) {
			let s = this.seriesViewer.series._inner[i];
			if (s.isAnnotationLayer && typeCast<CalloutLayer>((<any>CalloutLayer).$type, s) !== null) {
				let c = <CalloutLayer>s;
				if (c != this) {
					if (c.collisionChannel != null && c.collisionChannel == this.collisionChannel) {
						if (c._collisionManager != null) {
							return c._collisionManager;
						}
					}
				}
			}
		}
		return null;
	}
	private resolveAnnealingMilliseconds(): number {
		return 20000;
	}
	private resolveAnnealingStepCount(): number {
		return 300;
	}
	private resolveCollisionMode(): LabelCollisionManagerCollisionMode {
		switch (this.calloutCollisionMode) {
			case CalloutCollisionMode.Auto: return LabelCollisionManagerCollisionMode.GreedyCenterOfMass;
			case CalloutCollisionMode.Greedy: return LabelCollisionManagerCollisionMode.Greedy;
			case CalloutCollisionMode.GreedyCenterOfMass: return LabelCollisionManagerCollisionMode.GreedyCenterOfMass;
			case CalloutCollisionMode.SimulatedAnnealing: return LabelCollisionManagerCollisionMode.SimulatedAnnealing;
		}

		return LabelCollisionManagerCollisionMode.GreedyCenterOfMass;
	}
	private _collisionManager_LabelsMoved(obj: List$1<LabelCollisionInfo>): void {
		let count = this._collisionManager.getCurrentCollisionCount();
		if (count < this._currentColliding) {
			this._currentColliding = count;
			this.renderSeries(false);
		}
	}
	private getTargetBox(value: CalloutAnnotationWrapper): QuadTreeBoundingBox {
		let series = this.targetSeries;
		if (value.callout.series != null) {
			series = value.callout.series;
		}
		if (series == null) {
			for (let i = 0; i < this.seriesViewer.series.count; i++) {
				let s = this.seriesViewer.series._inner[i];
				if (!s.isAnnotationLayer) {
					series = s;
					break;
				}
			}
		}
		if (series == null) {
			return null;
		}
		let axes = series.getAxes();
		let referenceValue = series.getReferenceValue();
		let xAxis: Axis = null;
		let yAxis: Axis = null;
		for (let i1 = 0; i1 < axes.length; i1++) {
			if (axes[i1].isVertical) {
				yAxis = axes[i1];
			} else {
				xAxis = axes[i1];
			}
		}
		if (xAxis == null || yAxis == null) {
			return null;
		}
		if (!xAxis.isValid() || !yAxis.isValid()) {
			return null;
		}
		let offset: number = 0;
		let yOffset: number = 0;
		if (xAxis.isCategory && (<CategoryAxisBase>xAxis).categoryMode != CategoryMode.Mode0) {
			if (series.isFinancial) {
				offset = (<IHasCategoryAxis><any>series).getOffsetValue();
			} else if (series.isCategory) {
				offset = (<IHasCategoryAxis><any>series).getOffsetValue();
			}
		}
		if (yAxis.isCategory && (<CategoryAxisBase>yAxis).categoryMode != CategoryMode.Mode0) {
			if (series.isCategory) {
				yOffset = (<IHasCategoryAxis><any>series).getOffsetValue();
			}
		}
		let xParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, xAxis.viewportRect, xAxis.isInverted, xAxis.getCurrentEffectiveViewport());
		xParams.referenceValue = referenceValue;
		let yParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, yAxis.viewportRect, yAxis.isInverted, yAxis.getCurrentEffectiveViewport());
		yParams.referenceValue = referenceValue;
		let scaledX = xAxis.getScaledValue(this.convertToDouble(value.callout.xValue), xParams) + offset;
		let scaledY = yAxis.getScaledValue(this.convertToDouble(value.callout.yValue), yParams) + yOffset;
		let bb: QuadTreeBoundingBox = new QuadTreeBoundingBox();
		bb.centerX = scaledX;
		bb.centerY = scaledY;
		bb.halfWidth = 3;
		bb.halfHeight = 3;
		bb.data = value.callout;
		return bb;
	}
	private convertToDouble(x: any): number {
		if (typeCast<Date>(Date_$type, x) !== null) {
			return (<Date>x).getTime();
		}
		if (x == null) {
			return 0;
		}
		return <number>x;
	}
	private getActiveUserCallouts(): List$1<CalloutAnnotationWrapper> {
		let ret = new List$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
		for (let i = 0; i < this._userCallouts.count; i++) {
			if (stringIsNullOrEmpty(this._userCallouts._inner[i].callout.text)) {
				continue;
			}
			if (this._userCallouts._inner[i].label == null) {
				let l = new LabelCollisionInfo();
				this._userCallouts._inner[i].label = l;
				let size = this.calloutView.getSizeForContent(this.resolveContent(this._userCallouts._inner[i]), this._userCallouts._inner[i].callout.backgroundPadding);
				l.labelHalfHeight = size.height / 2;
				l.labelHalfWidth = size.width / 2;
			}
			let box = this.getTargetBox(this._userCallouts._inner[i]);
			if (box == null || box.centerX < this.viewport.left || box.centerX > this.viewport.right || box.centerY < this.viewport.top || box.centerY > this.viewport.bottom) {
				continue;
			}
			ret.add(this._userCallouts._inner[i]);
		}
		return ret;
	}
	private resolveContent(calloutAnnotationWrapper: CalloutAnnotationWrapper): any {
		return calloutAnnotationWrapper.callout.text;
	}
	protected isSeriesValid(series: Series): boolean {
		if (!super.isSeriesValid(series)) {
			return false;
		}
		return true;
	}
	onBeforeContentRefresh(): void {
		super.onBeforeContentRefresh();
		if (!this.contentInfo.isDirty && !this.animationActive()) {
			return;
		}
		if (this._calloutsDirty) {
			this._calloutsDirty = false;
			this.ensureCallouts();
		}
		if (this.animationActive()) {
			this.updateAnnotations(<CalloutLayerFrame>this.transitionFrame, false);
		} else {
			this.updateAnnotations(<CalloutLayerFrame>this.currentFrame, false);
		}
	}
	private _mustInvalidateContent: boolean = false;
	invalidateCalloutContent(): void {
		if (!this._mustInvalidateContent) {
			this._mustInvalidateContent = true;
			this.renderSeries(true);
		}
	}
	calloutContentUpdating: (sender: any, args: CalloutContentUpdatingEventArgs) => void = null;
	calloutLabelUpdating: (sender: any, args: CalloutLabelUpdatingEventArgs) => void = null;
	calloutSeriesSelecting: (sender: any, args: CalloutSeriesSelectingEventArgs) => void = null;
	private _points: List$1<SeriesPointOfInterest> = new List$1<SeriesPointOfInterest>((<any>SeriesPointOfInterest).$type, 0);
	private prepareSeries(series: Series, f: CalloutLayerFrame, activeSeriesCallouts: List$1<CalloutAnnotationWrapper>): void {
		if (series.getVisiblePointsOfInterest(this._points, this.useValueForAutoCalloutLabels, this.autoCalloutLabelPrecision)) {
			let points = this._points;
			for (let i = 0; i < this._points.count; i++) {
				let p = points._inner[i];
				let item = p.dataContext.item != null ? p.dataContext.item : p.dataContext;
				let s = series;
				let key = new CalloutKey(item, s);
				let w: CalloutAnnotationWrapper = new CalloutAnnotationWrapper();
				let c: CalloutAnnotation = new CalloutAnnotation();
				w.callout = c;
				c.key = key;
				let calloutNew: boolean = false;
				let mustInvalidate: boolean = false;
				if (this._mustInvalidateContent) {
					this._mustInvalidateContent = false;
					mustInvalidate = true;
				}
				if (this._currentCalloutsMap.containsKey(w)) {
					w = this._currentCalloutsMap.item(w).value;
					c = w.callout;
				} else {
					if (!mustInvalidate) {
						calloutNew = true;
					}
				}
				let currX = c.xValue;
				let currY = c.yValue;
				if (this.convertToDouble(currX) != this.convertToDouble(p.xValue)) {
					c.xValue = p.xValue;
				}
				if (this.convertToDouble(currY) != this.convertToDouble(p.yValue)) {
					c.yValue = p.yValue;
				}
				c.series = series;
				if (calloutNew && this.calloutLabelUpdating != null) {
					let args = ((() => {
						let $ret = new CalloutLabelUpdatingEventArgs();
						$ret.xValue = c.xValue;
						$ret.yValue = c.yValue;
						$ret.item = item;
						return $ret;
					})());
					this.calloutLabelUpdating(this, args);
					if (args.label != null && !Base.equalsStatic(args.label, w.callout.text)) {
						let label = args.label;
						w.callout.text = label != null ? label.toString() : "";
					}
				} else {
					if (p.label != null) {
						c.text = p.label;
					}
				}
				if (c.text == null) {
					continue;
				}
				if (calloutNew) {
					if (this.calloutContentUpdating != null) {
						let args1 = ((() => {
							let $ret = new CalloutContentUpdatingEventArgs();
							$ret.xValue = c.xValue;
							$ret.yValue = c.yValue;
							$ret.item = item;
							$ret.content = item;
							return $ret;
						})());
						this.calloutContentUpdating(this, args1);
						if (args1.content != null && args1.content != w.callout.content) {
							w.callout.content = args1.content;
						}
					} else {
						if (item != null && item != w.callout.content) {
							w.callout.content = item;
						}
					}
				}
				if (calloutNew) {
					this.updateCalloutVisuals(w);
				}
				if (w.label == null) {
					let l = new LabelCollisionInfo();
					w.label = l;
					let size = this.calloutView.getSizeForContent(this.resolveContent(w), w.callout.backgroundPadding);
					l.labelHalfHeight = size.height / 2;
					l.labelHalfWidth = size.width / 2;
				}
				let box = this.getTargetBox(w);
				if (box == null || box.centerX < this.viewport.left || box.centerX > this.viewport.right || box.centerY < this.viewport.top || box.centerY > this.viewport.bottom) {
					continue;
				}
				activeSeriesCallouts.add(w);
			}
		}
	}
	private _zoomedIn: boolean = false;
	private _zoomedOut: boolean = false;
	private _zoomPixelChange: number = 0;
	private _viewportChanged: boolean = false;
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		return SeriesHitTestMode.Computational;
	}
	getHitDataContext(position: Point, isFinger: boolean): DataContext {
		let l = this._collisionManager.testHit(position, isFinger);
		if (l == null) {
			return null;
		}
		return <DataContext>l.data;
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this._collisionManager == null) {
			return false;
		}
		return this._collisionManager.testHit(position, isFinger) != null;
	}
	protected updateAnnotations(frame: CalloutLayerFrame, forceAxisUpdate: boolean): void {
		let i: number = 0;
		let usedViews: HashSet$1<CalloutAnnotationWrapper> = new HashSet$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
		for (i = 0; i < frame.contents.count; i++) {
			let calloutWrapper = <CalloutAnnotationWrapper>frame.callouts._inner[i];
			if (isNaN_(frame.targetXPositions._inner[i]) || isNaN_(frame.targetYPositions._inner[i])) {
				continue;
			}
			let callout = this.calloutView.calloutPool.item(calloutWrapper);
			usedViews.add_1(calloutWrapper);
			if (callout.content != frame.contents._inner[i]) {
				callout.content = frame.contents._inner[i];
				let size = callout.getSize();
			}
			callout.calloutStrokeThickness = frame.calloutStrokeThicknesses._inner[i];
			callout.calloutBackground = frame.calloutBackgrounds._inner[i];
			callout.calloutTextColor = frame.calloutTextColors._inner[i];
			callout.calloutOutline = callout.calloutStrokeThickness > 0 ? frame.calloutOutlines._inner[i] : this.view.getTransparentBrush();
			callout.calloutLeaderBrush = frame.calloutLeaderBrushes._inner[i];
			callout.calloutPadding = new Thickness(1, frame.calloutPaddingsLeft._inner[i], frame.calloutPaddingsTop._inner[i], frame.calloutPaddingsRight._inner[i], frame.calloutPaddingsBottom._inner[i]);
			this.calloutView.setCalloutPosition(callout, Math.min(frame.labelXPositions._inner[i], frame.labelXPositions._inner[i] + frame.targetXPositions._inner[i]), Math.min(frame.labelYPositions._inner[i], frame.labelYPositions._inner[i] + frame.targetYPositions._inner[i]));
			this.calloutView.updateContext(callout, calloutWrapper, frame.contexts._inner[i]);
			callout.targetPoint = <Point>{ $type: Point_$type, x: frame.targetXPositions._inner[i], y: frame.targetYPositions._inner[i] };
		}
		let toRemove: List$1<CalloutAnnotationWrapper> = new List$1<CalloutAnnotationWrapper>((<any>CalloutAnnotationWrapper).$type, 0);
		for (let active of fromEnum<CalloutAnnotationWrapper>(this.calloutView.calloutPool.activeKeys)) {
			if (!usedViews.contains(active)) {
				toRemove.add(active);
			}
		}
		for (let j = 0; j < toRemove.count; j++) {
			this.calloutView.calloutPool.remove(toRemove._inner[j]);
		}
	}
	protected renderFrame(frame: Frame, view: SeriesView): void {
		super.renderFrame(frame, view);
		if (this.animationActive()) {
			this.updateAnnotations(<CalloutLayerFrame>this.transitionFrame, true);
		} else {
			this.updateAnnotations(<CalloutLayerFrame>this.currentFrame, false);
		}
	}
	protected requiresPrepare(): boolean {
		return true;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CalloutLayer.textStylePropertyName:
			this._fontInfo = null;
			this.renderSeries(true);
			break;

			case CalloutLayer.targetSeriesPropertyName:
			this.renderSeries(true);
			break;

			case CalloutLayer.collisionChannelPropertyName:
			this.renderSeries(true);
			break;

			case Series.seriesViewerPropertyName:
			if (oldValue != null) {
				let oldViewer = <SeriesViewer>oldValue;
				oldViewer.seriesAnimating = delegateRemove(oldViewer.seriesAnimating, runOn(this, this.seriesAnimating));
			}
			if (newValue != null) {
				let newViewer = <SeriesViewer>newValue;
				newViewer.seriesAnimating = delegateCombine(newViewer.seriesAnimating, runOn(this, this.seriesAnimating));
			}
			if (newValue == null) {
				this.detachCollisionManager();
			}
			break;

			case CalloutLayer.isAutoCalloutBehaviorEnabledPropertyName:

			case CalloutLayer.isCalloutOffsettingEnabledPropertyName:

			case CalloutLayer.calloutBackgroundPropertyName:

			case CalloutLayer.calloutOutlinePropertyName:

			case CalloutLayer.calloutLeaderBrushPropertyName:

			case CalloutLayer.calloutPaddingLeftPropertyName:

			case CalloutLayer.calloutPaddingTopPropertyName:

			case CalloutLayer.calloutPaddingRightPropertyName:

			case CalloutLayer.calloutPaddingBottomPropertyName:

			case CalloutLayer.calloutStrokeThicknessPropertyName:

			case CalloutLayer.calloutTextColorPropertyName:
			this.dirtyCallouts();
			break;

			case CalloutLayer.labelMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.labelColumn);
				this.labelColumn = this.registerObjectColumn(this.labelMemberPath);
			}
			break;

			case CalloutLayer.labelColumnPropertyName:
			this.dirtyCallouts();
			break;

			case CalloutLayer.contentMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.contentColumn);
				this.contentColumn = this.registerObjectColumn(this.contentMemberPath);
			}
			break;

			case CalloutLayer.contentColumnPropertyName:
			this.dirtyCallouts();
			break;

			case CalloutLayer.xMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.xColumn);
				this.xColumn = stringIsNullOrEmpty(this.xMemberPath) == false ? this.registerObjectColumn(this.xMemberPath) : null;
			}
			break;

			case CalloutLayer.xColumnPropertyName:
			this.dirtyCallouts();
			break;

			case CalloutLayer.yMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.yColumn);
				this.yColumn = this.registerObjectColumn(this.yMemberPath);
			}
			break;

			case CalloutLayer.yColumnPropertyName:
			this.dirtyCallouts();
			break;

			case CalloutLayer.keyMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.keyColumn);
				this.keyColumn = this.registerObjectColumn(this.keyMemberPath);
			}
			break;

			case CalloutLayer.keyColumnPropertyName:
			this.dirtyCallouts();
			break;

			case Series.fastItemsSourcePropertyName:
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue) != null) {
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.labelColumn);
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.contentColumn);
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.xColumn);
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.yColumn);
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.keyColumn);
				this.labelColumn = null;
				this.contentColumn = null;
				this.xColumn = null;
				this.yColumn = null;
				this.keyColumn = null;
				this._userCallouts.clear();
			}
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue) != null) {
				this.labelColumn = this.registerObjectColumn(this.labelMemberPath);
				this.contentColumn = this.registerObjectColumn(this.contentMemberPath);
				if (stringIsNullOrEmpty(this.xMemberPath) == false) {
					this.xColumn = this.registerObjectColumn(this.xMemberPath);
				}
				this.yColumn = this.registerObjectColumn(this.yMemberPath);
				this.keyColumn = this.registerObjectColumn(this.keyMemberPath);
			}
			this.dirtyCallouts();
			break;

		}

	}
	private seriesAnimating(s: Series): void {
		if (s.isAnnotationLayer) {
			return;
		}
		if ((s == this.targetSeries || this.targetSeries == null) && this.isAutoCalloutBehaviorEnabled) {
			this.renderSeries(false);
		}
	}
	private _calloutsDirty: boolean = true;
	private dirtyCallouts(): void {
		if (this._calloutsDirty == false) {
			this._calloutsDirty = true;
			this.renderSeries(false);
		}
	}
	private clearCallouts(): void {
		this.calloutView.calloutPool.clear();
		this._currentCallouts.clear();
		this._currentCalloutsMap.clear();
	}
	private ensureCallouts(): void {
		if (this.yColumn == null || this.labelColumn == null) {
			let currCallout = this._currentCallouts.first;
			while (currCallout != null) {
				this.updateCalloutVisuals(currCallout.value);
				currCallout = currCallout.next;
			}
			return;
		}
		let map = this.getSeriesMap();
		for (let i = 0; i < this.yColumn.count; i++) {
			let callout: CalloutAnnotationWrapper;
			if (this._userCallouts.count <= i) {
				let c = new CalloutAnnotation();
				callout = new CalloutAnnotationWrapper();
				callout.callout = c;
				callout.callout.series = this.targetSeries;
				this._userCallouts.add(callout);
			} else {
				callout = this._userCallouts._inner[i];
			}
			this.updateCallout(i, map);
		}
	}
}

/**
 * @hidden 
 */
export class CalloutLayerView extends AnnotationLayerView {
	static $t: Type = markType(CalloutLayerView, 'CalloutLayerView', (<any>AnnotationLayerView).$type);
	constructor(model: CalloutLayer) {
		super(model);
		this.calloutModel = model;
		this.visibleCallouts = new List$1<CalloutView>((<any>CalloutView).$type, 0);
	}
	private _calloutModel: CalloutLayer = null;
	protected get calloutModel(): CalloutLayer {
		return this._calloutModel;
	}
	protected set calloutModel(value: CalloutLayer) {
		this._calloutModel = value;
	}
	private _visibleCallouts: List$1<CalloutView> = null;
	private get visibleCallouts(): List$1<CalloutView> {
		return this._visibleCallouts;
	}
	private set visibleCallouts(value: List$1<CalloutView>) {
		this._visibleCallouts = value;
	}
	onInit(): void {
		super.onInit();
		this.calloutPool = ((() => {
			let $ret = new HashPool$2<CalloutAnnotationWrapper, CalloutView>((<any>CalloutAnnotationWrapper).$type, (<any>CalloutView).$type);
			$ret.create = runOn(this, this.calloutCreate);
			$ret.activate = runOn(this, this.calloutActivate);
			$ret.disactivate = runOn(this, this.calloutDisactivate);
			$ret.destroy = runOn(this, this.calloutDestroy);
			return $ret;
		})());
	}
	private calloutCreate(): CalloutView {
		let Callout: CalloutView = new CalloutView(this);
		this.visibleCallouts.add(Callout);
		return Callout;
	}
	private calloutActivate(Callout: CalloutView): void {
		Callout.visibility = Visibility.Visible;
	}
	private calloutDisactivate(Callout: CalloutView): void {
		Callout.visibility = Visibility.Collapsed;
	}
	private calloutDestroy(Callout: CalloutView): void {
		this.visibleCallouts.remove(Callout);
	}
	private _calloutPool: HashPool$2<CalloutAnnotationWrapper, CalloutView> = null;
	get calloutPool(): HashPool$2<CalloutAnnotationWrapper, CalloutView> {
		return this._calloutPool;
	}
	set calloutPool(value: HashPool$2<CalloutAnnotationWrapper, CalloutView>) {
		this._calloutPool = value;
	}
	getLightenedBrush(brush: Brush): Brush {
		if (brush == null) {
			return brush;
		}
		return BrushUtil.getLightened(brush, 0.1);
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		context.setFontInfo(this.getFont());
		if (context.shouldRender && !isHitContext) {
			for (let i = 0; i < this.visibleCallouts.count; i++) {
				let callout = this.visibleCallouts._inner[i];
				if (callout.visibility == Visibility.Visible) {
					callout.render(context);
				}
			}
		}
	}
	protected getFont(): FontInfo {
		if (this.calloutModel.fontInfo != null) {
			return this.calloutModel.fontInfo;
		}
		return this.model.seriesViewer.getFontInfo();
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		for (let i = 0; i < this.visibleCallouts.count; i++) {
			let callout = this.visibleCallouts._inner[i];
			if (callout.visibility != Visibility.Visible) {
				continue;
			}
			callout.$export(this.calloutModel, this.getFont(), svd);
		}
	}
	private _currentFontHeight: number = NaN;
	measureText(text: TextBlock): Size {
		if (isNaN_(this._currentFontHeight)) {
			this._currentFontHeight = this.model.seriesViewer.view.fontHeight;
		}
		return new Size(1, this.context.measureTextWidth(text.text), this._currentFontHeight);
	}
	private _testView: CalloutView = null;
	getSizeForContent(content: any, calloutPadding: Thickness): Size {
		if (this._testView == null) {
			this._testView = new CalloutView(this);
		}
		this._testView.content = content;
		this._testView.calloutPadding = calloutPadding;
		let size = this._testView.getSize();
		this._testView.content = null;
		return size;
	}
	getExecutionContext(): IExecutionContext {
		return new DOMExecutionContext(this.model.seriesViewer.view.viewManager.container);
	}
	setCalloutPosition(callout: CalloutView, x: number, y: number): void {
		callout.canvasLeft = x;
		callout.canvasTop = y;
	}
	updateContext(callout: CalloutView, wrapper: CalloutAnnotationWrapper, v: any): void {
		callout.setContext(this.model, wrapper, v);
	}
	getDefaultCalloutBackground(s: Series): Brush {
		if (s != null) {
			return this.getLightenedBrush(s.actualBrush);
		}
		return this.model.actualBrush;
	}
	getDefaultCalloutTextColor(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(255, 255, 255, 255);
			return $ret;
		})());
	}
	getDefaultCalloutOutline(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(255, 255, 255, 255);
			return $ret;
		})());
	}
	getDefaultCalloutLeaderBrush(s: Series): Brush {
		if (s != null) {
			return this.getLightenedBrush(s.actualBrush);
		}
		return this.model.actualBrush;
	}
}

/**
 * @hidden 
 */
export class CalloutView extends Base {
	static $t: Type = markType(CalloutView, 'CalloutView');
	constructor(owner: CalloutLayerView) {
		super();
		this._line = new Line();
		this._line.isHitTestVisible = false;
		this._line._stroke = ((() => {
			let $ret = new Brush();
			$ret.color = Color.fromArgb(255, 0, 0, 0);
			return $ret;
		})());
		this._line.strokeThickness = 2;
		this._text = new TextBlock();
		this._border = new Rectangle();
		this._border.strokeThickness = 0;
		this._owner = owner;
		this.visibility = Visibility.Visible;
	}
	private _owner: CalloutLayerView = null;
	private _visibility: Visibility = <Visibility>0;
	get visibility(): Visibility {
		return this._visibility;
	}
	set visibility(value: Visibility) {
		this._visibility = value;
	}
	render(context: RenderingContext): void {
		context.save();
		context.translate(this.canvasLeft, this.canvasTop);
		let tt: TranslateTransform = new TranslateTransform();
		tt.x = this._margin.left;
		tt.y = this._margin.top;
		this._border.renderTransform = tt;
		context.renderLine(this._line);
		context.save();
		this._border.width = this._text.actualWidth + this._padding.left + this._padding.right;
		this._border.height = this._text.actualHeight + this._padding.top + this._padding.bottom;
		context.applyTransform(this._border.renderTransform);
		context.renderRectangle(this._border);
		this._text.canvasTop = this._padding.top;
		this._text.canvasLeft = this._padding.left;
		context.renderTextBlock(this._text);
		context.restore();
		context.restore();
	}
	private _text: TextBlock = null;
	private _border: Rectangle = null;
	private _targetPoint: Point = <Point>{ $type: Point_$type, x: 0, y: 0 };
	private _line: Line = null;
	get targetPoint(): Point {
		return this._targetPoint;
	}
	set targetPoint(value: Point) {
		if (this._targetPoint.x != value.x || this._targetPoint.y != value.y) {
			let size = this.getSize();
			let textHeight = size.height;
			let textWidth = size.width;
			this._targetPoint = value;
			let margin = CalloutViewHelper.updateLeader(this.targetPoint, textWidth, textHeight, this._line);
			this._margin = margin;
		}
	}
	get calloutTextColor(): Brush {
		return <Brush>this._text.fill;
	}
	set calloutTextColor(value: Brush) {
		this._text.fill = value;
	}
	get calloutOutline(): Brush {
		return this._border._stroke;
	}
	set calloutOutline(value: Brush) {
		this._border._stroke = value;
	}
	get calloutLeaderBrush(): Brush {
		return this._line._stroke;
	}
	set calloutLeaderBrush(value: Brush) {
		this._line._stroke = value;
	}
	get calloutBackground(): Brush {
		return this._border._fill;
	}
	set calloutBackground(value: Brush) {
		this._border._fill = value;
	}
	get calloutStrokeThickness(): number {
		return this._border.strokeThickness;
	}
	set calloutStrokeThickness(value: number) {
		this._border.strokeThickness = value;
	}
	private _padding: Thickness = new Thickness(0, 0);
	private _margin: Thickness = null;
	get calloutPadding(): Thickness {
		return this._padding;
	}
	set calloutPadding(value: Thickness) {
		this._padding = value;
	}
	get content(): any {
		return this._text.text;
	}
	set content(value: any) {
		if (value == null) {
			this._text.text = "";
		} else {
			this._text.text = value.toString();
		}
		let size = this.getSize();
		let textHeight = size.height;
		let textWidth = size.width;
		let margin = CalloutViewHelper.updateLeader(this.targetPoint, textWidth, textHeight, this._line);
		this._margin = margin;
	}
	private _canvasLeft: number = 0;
	get canvasLeft(): number {
		return this._canvasLeft;
	}
	set canvasLeft(value: number) {
		this._canvasLeft = value;
	}
	private _canvasTop: number = 0;
	get canvasTop(): number {
		return this._canvasTop;
	}
	set canvasTop(value: number) {
		this._canvasTop = value;
	}
	getSize(): Size {
		let size: Size = this._owner.measureText(this._text);
		this._text.actualWidth = size.width;
		this._text.actualHeight = size.height;
		return new Size(1, size.width + this._padding.left + this._padding.right, size.height + this._padding.top + this._padding.bottom);
	}
	private _context: DataContext = null;
	setContext(series: Series, wrapper: CalloutAnnotationWrapper, context: any): void {
		if (this._context == null) {
			this._context = new DataContext();
		}
		this._context.series = series;
		this._context.item = context;
		if (wrapper.label != null) {
			wrapper.label.data = this._context;
		}
	}
	$export(layer: CalloutLayer, font: FontInfo, svd: any): void {
		layer.seriesVisualDataManager.exportCalloutData(this.canvasLeft, this.canvasTop, this._margin.left, this._margin.top, svd, this._border, this._text, font, this._line, "callout", <string[]>[ "Main", "Callout" ]);
	}
}


