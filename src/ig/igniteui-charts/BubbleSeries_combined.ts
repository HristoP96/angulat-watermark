/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterBase } from "./ScatterBase";
import { IScaleLegendSeries, IScaleLegendSeries_$type } from "igniteui-core/IScaleLegendSeries";
import { ILegendSeries } from "igniteui-core/ILegendSeries";
import { Rect } from "igniteui-core/Rect";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { List$1 } from "igniteui-core/List$1";
import { UIElement } from "igniteui-core/UIElement";
import { ICollection$1, ICollection$1_$type, Base, Type, IList$1, IList$1_$type, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, typeCast, String_$type, Point_$type, fromEnum, markType, PointUtil, enumGetBox, EnumUtil, runOn } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Series } from "./Series";
import { SizeScale } from "./SizeScale";
import { BrushScale } from "./BrushScale";
import { SeriesView } from "./SeriesView";
import { Control } from "igniteui-core/Control";
import { ScatterFrame } from "./ScatterFrame";
import { IChartLegend, IChartLegend_$type } from "igniteui-core/IChartLegend";
import { Brush } from "igniteui-core/Brush";
import { ValueBrushScale } from "./ValueBrushScale";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { MarkerSeries } from "./MarkerSeries";
import { ScatterBaseView } from "./ScatterBaseView";
import { ScalerParams } from "./ScalerParams";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { OwnedPoint } from "./OwnedPoint";
import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { ScatterAxisInfoCache } from "./ScatterAxisInfoCache";
import { Axis } from "./Axis";
import { BubbleMarkerManager } from "./BubbleMarkerManager";
import { IChartItemLegend } from "igniteui-core/IChartItemLegend";
import { IChartScaleLegend } from "igniteui-core/IChartScaleLegend";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { ContentControl } from "igniteui-core/ContentControl";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { DataContext } from "igniteui-core/DataContext";
import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { SeriesViewer } from "./SeriesViewer";
import { Marker } from "./Marker";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_, isInfinity, logBase } from "igniteui-core/number";
import { stringIsNullOrEmpty } from "igniteui-core/string";
import { FastItemObjectColumn } from "igniteui-core/FastItemObjectColumn";
import { BrushSelectionMode, BrushSelectionMode_$type } from "./BrushSelectionMode";
import { ScatterTrendLineManager } from "./ScatterTrendLineManager";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { MarkerManagerBase } from "./MarkerManagerBase";
import { IDictionary$2 } from "igniteui-core/IDictionary$2";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { HashPool$2 } from "igniteui-core/HashPool$2";
import { MarkerType } from "./MarkerType";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class BubbleSeries extends ScatterBase implements IScaleLegendSeries {
	static $t: Type = markType(BubbleSeries, 'BubbleSeries', (<any>ScatterBase).$type, [IScaleLegendSeries_$type]);
	protected createView(): SeriesView {
		return new BubbleSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.bubbleView = <BubbleSeriesView>view;
	}
	private _bubbleView: BubbleSeriesView;
	get bubbleView(): BubbleSeriesView {
		return this._bubbleView;
	}
	set bubbleView(value: BubbleSeriesView) {
		this._bubbleView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>BubbleSeries).$type;
		this.previousFrame = new ScatterFrame();
		this.transitionFrame = new ScatterFrame();
		this.currentFrame = new ScatterFrame();
	}
	private _operatingWindowRect: Rect = null;
	private get operatingWindowRect(): Rect {
		return this._operatingWindowRect;
	}
	private set operatingWindowRect(value: Rect) {
		this._operatingWindowRect = value;
	}
	private _operatingViewportRect: Rect = null;
	private get operatingViewportRect(): Rect {
		return this._operatingViewportRect;
	}
	private set operatingViewportRect(value: Rect) {
		this._operatingViewportRect = value;
	}
	isAttachedTo(legend: IChartLegend): boolean {
		return this.actualLegend == legend;
	}
	protected hasLegendSubItemsOverride(): boolean {
		return true;
	}
	protected forLegendSubItemsOverride(action: (arg1: any) => void): void {
		super.forLegendSubItemsOverride(action);
		if (this.labelColumn != null && this.legendItems != null && this.legendItems.count > 0) {
			for (let i = 0; i < this.legendItems.count; i++) {
				action(this.legendItems._inner[i]);
			}
		}
	}
	get internalRadiusColumn(): IFastItemColumn$1<number> {
		return this.radiusColumn;
	}
	private _legendItems: List$1<UIElement> = null;
	get legendItems(): List$1<UIElement> {
		return this._legendItems;
	}
	set legendItems(value: List$1<UIElement>) {
		this._legendItems = value;
	}
	private getSubItemBrush(index: number): Brush {
		let customPaletteBrushScale: CustomPaletteBrushScale = typeCast<CustomPaletteBrushScale>((<any>CustomPaletteBrushScale).$type, this.fillScale);
		let valueBrushScale: ValueBrushScale = typeCast<ValueBrushScale>((<any>ValueBrushScale).$type, this.fillScale);
		let brushScale: BrushScale = this.fillScale;
		if (customPaletteBrushScale != null && this.fastItemsSource != null) {
			return customPaletteBrushScale.getBrush1(index, this.fastItemsSource.count);
		} else if (valueBrushScale != null) {
			return valueBrushScale.getBrushByIndex(index, this.fillColumn);
		} else if (brushScale != null) {
			return brushScale.getBrush(index);
		}
		return null;
	}
	get legendReady(): boolean {
		return this.radiusColumn != null && this.radiusColumn.count != 0;
	}
	get minScaleText(): string {
		return (Math.round(this.radiusColumn.minimum * 1000) / 1000).toString();
	}
	get maxScaleText(): string {
		return (Math.round(this.radiusColumn.maximum * 1000) / 1000).toString();
	}
	forScaleColors(action: (arg1: Brush, arg2: number) => void): boolean {
		for (let i: number = 0; i < this.radiusColumn.count; i++) {
			if (this.fillScale == null || !this.fillScale.isReady) {
				return false;
			}
			let scaledColorIndex: number = NaN;
			if (this.fillColumn != null) {
				scaledColorIndex = (this.fillColumn.item(i) - this.fillColumn.minimum) / (this.fillColumn.maximum - this.fillColumn.minimum);
			}
			let colorOffset: number = (this.radiusColumn.item(i) - this.radiusColumn.minimum) / (this.radiusColumn.maximum - this.radiusColumn.minimum);
			if (isNaN_(scaledColorIndex)) {
				scaledColorIndex = 0;
			}
			if (isNaN_(colorOffset)) {
				colorOffset = scaledColorIndex;
			}
			let defaultColor: Brush = this.actualMarkerBrush;
			let brush: Brush = this.getSubItemBrush(i);
			let color: Brush = brush != null ? brush : defaultColor;
			action(color, colorOffset);
		}
		return true;
	}
	get radiusMemberPath(): string {
		return <string>this.getValue(BubbleSeries.radiusMemberPathProperty);
	}
	set radiusMemberPath(value: string) {
		this.setValue(BubbleSeries.radiusMemberPathProperty, value);
	}
	static readonly radiusMemberPathPropertyName: string = "RadiusMemberPath";
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == BubbleSeries.labelMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.labelMemberPath);
		}
		if (resolved == BubbleSeries.radiusMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.radiusMemberPath);
		}
		if (resolved == ScatterBase.xMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.xMemberPath);
		}
		if (resolved == ScatterBase.yMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.yMemberPath);
		}
		if (resolved == BubbleSeries.fillMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.fillMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	static readonly radiusMemberPathProperty: DependencyProperty = DependencyProperty.register(BubbleSeries.radiusMemberPathPropertyName, String_$type, (<any>BubbleSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<BubbleSeries>sender).raisePropertyChanged(BubbleSeries.radiusMemberPathPropertyName, e.oldValue, e.newValue)));
	get radiusColumn(): IFastItemColumn$1<number> {
		return this._radiusColumn;
	}
	set radiusColumn(value: IFastItemColumn$1<number>) {
		if (this._radiusColumn != value) {
			let oldZColumn: IFastItemColumn$1<number> = this.radiusColumn;
			this._radiusColumn = value;
			this.raisePropertyChanged(BubbleSeries.radiusColumnPropertyName, oldZColumn, this.radiusColumn);
		}
	}
	private _radiusColumn: IFastItemColumn$1<number> = null;
	static readonly radiusColumnPropertyName: string = "RadiusColumn";
	static readonly radiusScalePropertyName: string = "RadiusScale";
	static readonly radiusScaleProperty: DependencyProperty = DependencyProperty.register(BubbleSeries.radiusScalePropertyName, (<any>SizeScale).$type, (<any>BubbleSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<BubbleSeries>sender).raisePropertyChanged(BubbleSeries.radiusScalePropertyName, e.oldValue, e.newValue)));
	get radiusScale(): SizeScale {
		return <SizeScale>this.getValue(BubbleSeries.radiusScaleProperty);
	}
	set radiusScale(value: SizeScale) {
		this.setValue(BubbleSeries.radiusScaleProperty, value);
	}
	static readonly labelMemberPathPropertyName: string = "LabelMemberPath";
	static readonly labelMemberPathProperty: DependencyProperty = DependencyProperty.register(BubbleSeries.labelMemberPathPropertyName, String_$type, (<any>BubbleSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<BubbleSeries>sender).raisePropertyChanged(BubbleSeries.labelMemberPathPropertyName, e.oldValue, e.newValue)));
	get labelMemberPath(): string {
		return <string>this.getValue(BubbleSeries.labelMemberPathProperty);
	}
	set labelMemberPath(value: string) {
		this.setValue(BubbleSeries.labelMemberPathProperty, value);
	}
	static readonly labelColumnPropertyName: string = "LabelColumn";
	private _labelColumn: IFastItemColumn$1<any> = null;
	get labelColumn(): IFastItemColumn$1<any> {
		return this._labelColumn;
	}
	set labelColumn(value: IFastItemColumn$1<any>) {
		if (this._labelColumn != value) {
			let oldColumn: IFastItemColumn$1<any> = this.labelColumn;
			this._labelColumn = value;
			this.raisePropertyChanged(BubbleSeries.labelColumnPropertyName, oldColumn, this.labelColumn);
		}
	}
	static readonly fillMemberPathPropertyName: string = "FillMemberPath";
	static readonly fillMemberPathProperty: DependencyProperty = DependencyProperty.register(BubbleSeries.fillMemberPathPropertyName, String_$type, (<any>BubbleSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<BubbleSeries>sender).raisePropertyChanged(BubbleSeries.fillMemberPathPropertyName, e.oldValue, e.newValue)));
	get fillMemberPath(): string {
		return <string>this.getValue(BubbleSeries.fillMemberPathProperty);
	}
	set fillMemberPath(value: string) {
		this.setValue(BubbleSeries.fillMemberPathProperty, value);
	}
	static readonly fillScalePropertyName: string = "FillScale";
	static readonly fillScaleProperty: DependencyProperty = DependencyProperty.register(BubbleSeries.fillScalePropertyName, (<any>BrushScale).$type, (<any>BubbleSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<BubbleSeries>sender).raisePropertyChanged(BubbleSeries.fillScalePropertyName, e.oldValue, e.newValue)));
	get fillScale(): BrushScale {
		return <BrushScale>this.getValue(BubbleSeries.fillScaleProperty);
	}
	set fillScale(value: BrushScale) {
		this.setValue(BubbleSeries.fillScaleProperty, value);
	}
	static readonly fillColumnPropertyName: string = "FillColumn";
	private _fillColumn: IFastItemColumn$1<number> = null;
	get fillColumn(): IFastItemColumn$1<number> {
		return this._fillColumn;
	}
	set fillColumn(value: IFastItemColumn$1<number>) {
		if (this._fillColumn != value) {
			let oldZColumn: IFastItemColumn$1<number> = this.fillColumn;
			this._fillColumn = value;
			this.raisePropertyChanged(BubbleSeries.fillColumnPropertyName, oldZColumn, this.fillColumn);
		}
	}
	calculateCachedPoints(view: ScatterBaseView, frame: ScatterFrame, count: number, windowRect: Rect, viewportRect: Rect): void {
		if (count <= this.maximumMarkers) {
			frame.cachedPoints = new Dictionary$2<any, OwnedPoint>((<any>Base).$type, (<any>OwnedPoint).$type, 1, count);
		}
		let maximumMarkers = this.maximumMarkers;
		let itemsSource: IFastItemsSource = this.fastItemsSource;
		let x: number;
		let y: number;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let px: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.axisInfoCache.xAxisIsInverted, effectiveViewportRect);
		let py: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.axisInfoCache.yAxisIsInverted, effectiveViewportRect);
		for (let i: number = 0; i < count; i++) {
			x = this.xColumn.item(i);
			y = this.yColumn.item(i);
			let point: Point = <Point>{ $type: Point_$type, x: this.axisInfoCache.xAxis.getScaledValue(x, px), y: this.axisInfoCache.yAxis.getScaledValue(y, py) };
			if (!isInfinity(point.x) && !isInfinity(point.y)) {
				let item: any = itemsSource.item(i);
				if (count <= maximumMarkers) {
					if (!frame.cachedPoints.containsKey(item)) {
						let columnValues = <Point>{ $type: Point_$type, x: x, y: y };
						frame.cachedPoints.addItem(item, ((() => {
							let $ret = new OwnedPoint();
							$ret.ownerItem = item;
							$ret.columnValues = columnValues;
							$ret.point = point;
							return $ret;
						})()));
					}
				}
			}
		}
	}
	prepareFrame(frame: ScatterFrame, view: ScatterBaseView): void {
		let bubbleView: BubbleSeriesView = typeCast<BubbleSeriesView>((<any>BubbleSeriesView).$type, view);
		let bubbleManager = <BubbleMarkerManager>bubbleView.markerManager;
		bubbleManager.radiusColumn = this.radiusColumn;
		super.prepareFrame(frame, view);
		let count: number = Math.min(this.xColumn != null ? this.xColumn.count : 0, this.yColumn != null ? this.yColumn.count : 0);
		if (count < 1) {
			return;
		}
		bubbleView.createMarkerSizes();
		bubbleView.setMarkerColors();
	}
	private drawLegend(): void {
		if (this.seriesViewer == null) {
			return;
		}
		if (this.actualLegend == null) {
			return;
		}
		if ((<IChartLegend><any><any>this.actualLegend).isItemwise) {
			let item = <IChartItemLegend><any>this.actualLegend;
			(<IChartLegend><any><any>this.actualLegend).clearLegendItemsForSeries(this);
			this.createLegendItems();
			item.renderItemwiseContent(this);
		}
		if ((<IChartLegend><any><any>this.actualLegend).isScale) {
			let scale = <IChartScaleLegend><any>this.actualLegend;
			scale.restoreOriginalState();
			scale.initializeLegend(this);
		}
	}
	static getLinearSize(min: number, max: number, smallSize: number, largeSize: number, value: number): number {
		if (value <= min || isNaN_(value) || isInfinity(value)) {
			return smallSize;
		}
		if (value >= max) {
			return largeSize;
		}
		let result: number = smallSize + ((largeSize - smallSize) / (max - min)) * (value - min);
		return result;
	}
	static getLogarithmicSize(min: number, max: number, smallSize: number, largeSize: number, logBase_: number, value: number): number {
		let newValue: number = logBase(value, logBase_);
		let newMin: number = logBase(min, logBase_);
		let newMax: number = logBase(max, logBase_);
		return BubbleSeries.getLinearSize(newMin, newMax, smallSize, largeSize, newValue);
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		if (this.radiusColumn == null || this.fastItemsSource == null || this.radiusColumn.count == 0 || this.fastItemsSource.count != this.radiusColumn.count) {
			isValid = false;
		}
		return isValid;
	}
	protected mustReact(propertyName: string, action: FastItemsSourceEventAction): boolean {
		if (action != FastItemsSourceEventAction.Change) {
			return true;
		}
		if (propertyName == null) {
			return true;
		}
		if (this.xMemberPath == propertyName || this.yMemberPath == propertyName || this.radiusMemberPath == propertyName) {
			return true;
		}
		return false;
	}
	private createLegendItems(): void {
		let itemLegend: IChartLegend = typeCast<IChartLegend>(IChartLegend_$type, this.actualLegend);
		if (itemLegend == null || this.fastItemsSource == null) {
			return;
		}
		this.legendItems = new List$1<UIElement>((<any>UIElement).$type, 0);
		let fastItemsSource = this.fastItemsSource;
		for (let i: number = 0; i < fastItemsSource.count; i++) {
			let brush: Brush = null;
			if (typeCast<ValueBrushScale>((<any>ValueBrushScale).$type, this.fillScale) !== null && this.fillColumn != null) {
				brush = (<ValueBrushScale>this.fillScale).getBrushByIndex(i, this.fillColumn);
			} else if (typeCast<CustomPaletteBrushScale>((<any>CustomPaletteBrushScale).$type, this.fillScale) !== null) {
				brush = (<CustomPaletteBrushScale>this.fillScale).getBrush1(i, fastItemsSource.count);
			} else if (this.fillScale != null) {
				brush = this.fillScale.getBrush(i);
			}
			let item: ContentControl = new ContentControl();
			let itemLabel: string = this.labelColumn != null && this.labelColumn.item(i) != null ? this.labelColumn.item(i).toString() : "";
			item.content = ((() => {
				let $ret = new DataContext();
				$ret.series = this;
				$ret.item = fastItemsSource.item(i);
				$ret.itemBrush = brush;
				$ret.itemLabel = itemLabel;
				return $ret;
			})());
			let discreteTemplate = this.discreteLegendItemTemplate;
			if (discreteTemplate == null) {
				discreteTemplate = this.view.resolveLegendItemTemplate(this.defaultDiscreteLegendItemTemplateType);
			}
			item.contentTemplate = discreteTemplate;
			this.legendItems.add(item);
		}
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		super.dataUpdatedOverride(action, position, count, propertyName);
		this.drawLegend();
	}
	notifyBrushScalesDirty(): void {
		super.notifyBrushScalesDirty();
		this.drawLegend();
	}
	notifySizeScalesDirty(): void {
		super.notifySizeScalesDirty();
		this.drawLegend();
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue) != null) {
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.radiusColumn);
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.fillColumn);
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.labelColumn);
				this.radiusColumn = null;
				this.fillColumn = null;
				this.labelColumn = null;
			}
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue) != null) {
				this.radiusColumn = this.registerDoubleColumn(this.radiusMemberPath);
				if (!stringIsNullOrEmpty(this.fillMemberPath)) {
					this.fillColumn = this.registerDoubleColumn(this.fillMemberPath);
				}
				this.labelColumn = this.registerObjectColumn(this.labelMemberPath);
			}
			this.renderSeries(false);
			this.drawLegend();
			break;

			case BubbleSeries.radiusMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.radiusColumn);
				this.radiusColumn = this.registerDoubleColumn(this.radiusMemberPath);
				this.drawLegend();
			}
			break;

			case BubbleSeries.radiusColumnPropertyName:
			this.scatterView.trendLineManager.reset();
			this.renderSeries(false);
			this.notifyThumbnailDataChanged();
			break;

			case BubbleSeries.radiusScalePropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.discreteLegendItemTemplatePropertyName:
			this.drawLegend();
			break;

			case BubbleSeries.fillScalePropertyName:
			this.renderSeries(false);
			this.drawLegend();
			this.notifyThumbnailAppearanceChanged();
			break;

			case BubbleSeries.fillColumnPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case BubbleSeries.fillMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.fillColumn);
				this.fillColumn = this.registerDoubleColumn(this.fillMemberPath);
				this.drawLegend();
			}
			break;

			case BubbleSeries.labelMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.labelColumn);
				this.labelColumn = this.registerObjectColumn(this.labelMemberPath);
				this.drawLegend();
			}
			break;

			case Series.actualLegendPropertyName:
			let legend: IChartLegend = typeCast<IChartLegend>(IChartLegend_$type, oldValue);
			if (legend != null) {
				(<IChartLegend><any><any>legend).clearLegendItemsForSeries(this);
			}
			if (legend != null && (<IChartLegend><any><any>legend).isScale) {
				let scaleLegend = <IChartScaleLegend><any>legend;
				let restoreLegend: boolean = true;
				let series: Series = null;
				if (this.seriesViewer != null) {
					for (let currentSeries of fromEnum<Series>(this.seriesViewer.series)) {
						if (currentSeries.legend == scaleLegend) {
							series = currentSeries;
							restoreLegend = false;
						}
					}
				}
				if (restoreLegend) {
					scaleLegend.restoreOriginalState();
				} else {
					scaleLegend.initializeLegend(typeCast<IScaleLegendSeries>(IScaleLegendSeries_$type, series));
				}
			}
			this.drawLegend();
			break;

			case Series.seriesViewerPropertyName:
			this.drawLegend();
			break;

		}

	}
	sizeBubbles(actualMarkers: List$1<Marker>, actualRadiusColumn: List$1<number>, viewportRect: Rect, isThumbnail: boolean): void {
		let min: number = this.radiusColumn.minimum;
		let max: number = this.radiusColumn.maximum;
		let fullWidth = viewportRect.width;
		if (!this.view.viewport.isEmpty) {
			fullWidth = this.view.viewport.width;
		} else if (this.seriesViewer != null && !this.seriesViewer.viewportRect.isEmpty) {
			fullWidth = this.seriesViewer.viewportRect.width;
		}
		let dipFullWidth = DeviceUtils.fromPixelUnits(fullWidth);
		let actualRadiusScale: SizeScale = this.radiusScale || ((() => {
			let $ret = new SizeScale();
			$ret.minimumValue = dipFullWidth / 10;
			$ret.maximumValue = dipFullWidth / 5;
			return $ret;
		})());
		if (actualRadiusScale != null) {
			let smallSize: number = actualRadiusScale.minimumValue;
			let largeSize: number = actualRadiusScale.maximumValue;
			let logBase: number = actualRadiusScale.logarithmBase;
			if (!actualRadiusScale.series.contains(this)) {
				actualRadiusScale.series.add(this);
			}
			if (actualRadiusScale.isLogarithmic) {
				for (let i: number = 0; i < actualRadiusColumn.count; i++) {
					actualRadiusColumn._inner[i] = BubbleSeries.getLogarithmicSize(min, max, smallSize, largeSize, logBase, actualRadiusColumn._inner[i]);
				}
			} else {
				for (let i1: number = 0; i1 < actualRadiusColumn.count; i1++) {
					actualRadiusColumn._inner[i1] = BubbleSeries.getLinearSize(min, max, smallSize, largeSize, actualRadiusColumn._inner[i1]);
				}
			}
		}
		let dipScale: number = 1;
		dipScale = DeviceUtils.getDIPScalingRatio();
		let noScale = this.radiusScale == null;
		if (isThumbnail) {
			let scale: number = viewportRect.width / fullWidth;
			for (let ii: number = 0; ii < actualRadiusColumn.count; ii++) {
				if (noScale) {
					actualRadiusColumn._inner[ii] = actualRadiusColumn._inner[ii] / dipScale;
				}
				actualRadiusColumn._inner[ii] = actualRadiusColumn._inner[ii] * scale;
			}
		}
		for (let i2: number = 0; i2 < actualMarkers.count; i2++) {
			let marker: Marker = actualMarkers._inner[i2];
			if (noScale && !isThumbnail) {
				marker.width = Math.max(0, actualRadiusColumn._inner[i2] / dipScale);
				marker.height = Math.max(0, actualRadiusColumn._inner[i2] / dipScale);
			} else {
				marker.width = Math.max(0, actualRadiusColumn._inner[i2]);
				marker.height = Math.max(0, actualRadiusColumn._inner[i2]);
			}
		}
	}
	setMarkerColors(actualMarkers: List$1<Marker>): void {
		if (this.fillScale != null && !this.fillScale.series.contains(this)) {
			this.fillScale.series.add(this);
		}
		let customPaletteColorAxis: CustomPaletteBrushScale = typeCast<CustomPaletteBrushScale>((<any>CustomPaletteBrushScale).$type, this.fillScale);
		let valueBrushScale: ValueBrushScale = typeCast<ValueBrushScale>((<any>ValueBrushScale).$type, this.fillScale);
		let brushScale: BrushScale = this.fillScale;
		let clearMarkerBrushes: boolean = this.fillScale == null || !this.fillScale.isReady || (valueBrushScale != null && this.fillMemberPath == null);
		if (clearMarkerBrushes) {
			this.bubbleView.clearMarkerBrushes();
			let bubbleThumbnailView: BubbleSeriesView = typeCast<BubbleSeriesView>((<any>BubbleSeriesView).$type, this.thumbnailView);
			if (bubbleThumbnailView != null) {
				bubbleThumbnailView.clearMarkerBrushes();
			}
			return;
		}
		let markerCount: number = actualMarkers.count;
		let fastItemsSource: IFastItemsSource = this.fastItemsSource;
		for (let i: number = 0; i < markerCount; i++) {
			let marker: Marker = actualMarkers._inner[i];
			let markerContext: DataContext = typeCast<DataContext>((<any>DataContext).$type, marker.content);
			if (markerContext != null) {
				let brush: Brush = null;
				let markerIndex: number = fastItemsSource.indexOf(markerContext.item);
				if (customPaletteColorAxis != null) {
					brush = customPaletteColorAxis.getBrush1(markerIndex, fastItemsSource.count);
				} else if (valueBrushScale != null) {
					brush = valueBrushScale.getBrushByIndex(markerIndex, this.fillColumn);
				} else if (brushScale != null) {
					brush = brushScale.getBrush(markerIndex);
				}
				markerContext.itemBrush = brush;
			}
		}
	}
	protected get_isMarkerlessDisplayPreferred(): boolean {
		return false;
	}
}

/**
 * @hidden 
 */
export class CustomPaletteBrushScale extends BrushScale {
	static $t: Type = markType(CustomPaletteBrushScale, 'CustomPaletteBrushScale', (<any>BrushScale).$type);
	constructor() {
		super();
	}
	static readonly brushSelectionModePropertyName: string = "BrushSelectionMode";
	static readonly brushSelectionModeProperty: DependencyProperty = DependencyProperty.register(CustomPaletteBrushScale.brushSelectionModePropertyName, BrushSelectionMode_$type, (<any>CustomPaletteBrushScale).$type, new PropertyMetadata(2, enumGetBox<BrushSelectionMode>(BrushSelectionMode_$type, BrushSelectionMode.Select), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CustomPaletteBrushScale>o).raisePropertyChanged(CustomPaletteBrushScale.brushSelectionModePropertyName, e.oldValue, e.newValue)));
	get brushSelectionMode(): BrushSelectionMode {
		return EnumUtil.getEnumValue<BrushSelectionMode>(BrushSelectionMode_$type, this.getValue(CustomPaletteBrushScale.brushSelectionModeProperty));
	}
	set brushSelectionMode(value: BrushSelectionMode) {
		this.setValue(CustomPaletteBrushScale.brushSelectionModeProperty, enumGetBox<BrushSelectionMode>(BrushSelectionMode_$type, value));
	}
	getBrush1(index: number, total: number): Brush {
		if (this.brushes == null || this.brushes.count == 0) {
			return null;
		}
		if (this.brushSelectionMode == BrushSelectionMode.Select) {
			return super.getBrush(index % this.brushes.count);
		}
		let scaledIndex: number = BubbleSeries.getLinearSize(0, total - 1, 0, this.brushes.count - 1, index);
		return this.getInterpolatedBrush(scaledIndex);
	}
	protected get_isReady(): boolean {
		return this.brushes != null && this.brushes.count > 0;
	}
}

/**
 * @hidden 
 */
export class BubbleSeriesView extends ScatterBaseView {
	static $t: Type = markType(BubbleSeriesView, 'BubbleSeriesView', (<any>ScatterBaseView).$type);
	private _bubbleModel: BubbleSeries = null;
	protected get bubbleModel(): BubbleSeries {
		return this._bubbleModel;
	}
	protected set bubbleModel(value: BubbleSeries) {
		this._bubbleModel = value;
	}
	constructor(model: BubbleSeries) {
		super(model);
		this.bubbleModel = model;
		this.trendLineManager = new ScatterTrendLineManager();
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.markerModel.markerType = MarkerType.Automatic;
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Point;
		}
	}
	protected createMarkerManager(): MarkerManagerBase {
		return new BubbleMarkerManager((o: any) => this.markers.item(o), (i: number) => this.scatterModel.axisInfoCache.fastItemsSource.item(i), runOn(this, this.removeUnusedMarkers), runOn(this, this.getMarkerLocations), runOn(this, this.getActiveIndexes));
	}
	createMarkerSizes(): void {
		let bubbleManager = <BubbleMarkerManager>this.markerManager;
		this.bubbleModel.sizeBubbles(bubbleManager.actualMarkers, bubbleManager.actualRadiusColumn, this.viewport, this == this.model.thumbnailView);
		this.makeDirty();
	}
	setMarkerColors(): void {
		let bubbleManager = <BubbleMarkerManager>this.markerManager;
		this.bubbleModel.setMarkerColors(bubbleManager.actualMarkers);
	}
	clearMarkerBrushes(): void {
		let bubbleManager = <BubbleMarkerManager>this.markerManager;
		for (let marker of fromEnum<Marker>(bubbleManager.actualMarkers)) {
			let markerContext: DataContext = typeCast<DataContext>((<any>DataContext).$type, marker.content);
			if (markerContext != null) {
				markerContext.itemBrush = null;
			}
		}
	}
	getDefaultTooltipTemplate(): string {
		let tooltipTemplate: string = "<div class='ui-chart-default-tooltip-content'><span";
		let labelColorString: string = this.model.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this.model);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipTemplate += " style='color:" + labelColorString + "'";
		}
		tooltipTemplate += ">" + this.bubbleModel.title + "</span><br/><span>" + "(${item." + this.bubbleModel.xMemberPath + "}, ${item." + this.bubbleModel.yMemberPath + "})</span>";
		if (!stringIsNullOrEmpty(this.bubbleModel.radiusMemberPath)) {
			tooltipTemplate += "<span>, Radius: ${item." + this.bubbleModel.radiusMemberPath + "}</span>";
		}
		tooltipTemplate += "</div>";
		return tooltipTemplate;
	}
}


