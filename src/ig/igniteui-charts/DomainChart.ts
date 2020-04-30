/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, BaseError, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, PropertyChangedEventArgs, ICollection, ICollection_$type, IEnumerable$1, Delegate_$type, fromEnum, String_$type, runOn, delegateCombine, EnumUtil, typeCast, delegateRemove, enumGetBox, markType, TypeRegistrar, getInstanceType } from "igniteui-core/type";
import { ArrayExtension } from "igniteui-core/ArrayExtension";
import { List$1 } from "igniteui-core/List$1";
import { Brush } from "igniteui-core/Brush";
import { IDomainChartWidget } from "./IDomainChartWidget";
import { XamDataChart } from "./XamDataChart";
import { DataSeriesAdapterImplementation } from "igniteui-core/DataSeriesAdapterImplementation";
import { DataSeriesType, DataSeriesType_$type } from "igniteui-core/DataSeriesType";
import { IDataSeriesAdapterRule } from "igniteui-core/IDataSeriesAdapterRule";
import { MarkerType, MarkerType_$type } from "./MarkerType";
import { IAnnotationLayerProxy } from "./IAnnotationLayerProxy";
import { Color } from "igniteui-core/Color";
import { ColorUtil } from "igniteui-core/ColorUtil";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { IChartLegend } from "igniteui-core/IChartLegend";
import { Rect } from "igniteui-core/Rect";
import { SeriesViewer } from "./SeriesViewer";
import { HorizontalAlignment, HorizontalAlignment_$type } from "igniteui-core/HorizontalAlignment";
import { UnknownValuePlotting, UnknownValuePlotting_$type } from "igniteui-core/UnknownValuePlotting";
import { MarkerTypeCollection } from "./MarkerTypeCollection";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { ToolTipType, ToolTipType_$type } from "./ToolTipType";
import { CrosshairsDisplayMode, CrosshairsDisplayMode_$type } from "./CrosshairsDisplayMode";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { DefaultPaletteInfo } from "./DefaultPaletteInfo";
import { SeriesViewerView } from "./SeriesViewerView";
import { SeriesViewerViewManager } from "./SeriesViewerViewManager";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { Series } from "./Series";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Tooltip } from "./Tooltip";
import { DataSeriesAdapter } from "igniteui-core/DataSeriesAdapter";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { DataSeries } from "igniteui-core/DataSeries";
import { ObservableColorCollection } from "igniteui-core/ObservableColorCollection";
import { BrushCollectionUtil } from "igniteui-core/BrushCollectionUtil";
import { DataSeriesMarker } from "igniteui-core/DataSeriesMarker";
import { ChartSeriesEventArgs } from "./ChartSeriesEventArgs";
import { DomainChartSeriesPointerEventArgs } from "./DomainChartSeriesPointerEventArgs";
import { CalloutStyleUpdatingEventArgs } from "./CalloutStyleUpdatingEventArgs";
import { ChartMouseEventArgs } from "./ChartMouseEventArgs";
import { DataChartMouseButtonEventArgs } from "./DataChartMouseButtonEventArgs";
import { IUnknownValuePlotting, IUnknownValuePlotting_$type } from "igniteui-core/IUnknownValuePlotting";
import { ITrendLineSeries, ITrendLineSeries_$type } from "./ITrendLineSeries";
import { Random } from "igniteui-core/Random";
import { Visibility } from "igniteui-core/Visibility";
import { isNaN_ } from "igniteui-core/number";
import { stringIsNullOrEmpty, stringEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export abstract class DomainChart extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(DomainChart, 'DomainChart', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _container: any = null;
	protected get container(): any {
		return this._container;
	}
	protected set container(value: any) {
		this._container = value;
	}
	provideContainer(container: any): void {
		if (container == null) {
			this.onDataChart((dc: XamDataChart) => dc.provideContainer(null));
			return;
		}
		let oldContainer = this.container;
		this.container = container;
		if (this._pendingAction != null && this.container != null && oldContainer == null) {
			(<DomRenderer><any>this.container).setTimeout(<() => void>this._pendingAction, 0);
			this._pendingAction = null;
		}
		let dataChart: XamDataChart = ((() => {
			let $ret = new XamDataChart();
			$ret.isHosted = true;
			return $ret;
		})());
		dataChart.provideContainer(container);
		this.dataChart = dataChart;
		this.initializeDefaults();
	}
	destroy(): void {
		this.provideContainer(null);
	}
	private initializeDefaults(): void {
		if (this.dataChart == null) {
			return;
		}
		let palette = this.dataChart.view.viewManager.getDefaultPalette();
		this.brushes = palette.brushes;
		this.outlines = palette.outlines;
		this.markerBrushes = palette.markerBrushes;
		this.markerOutlines = palette.markerOutlines;
		this.trendLineBrushes = palette.trendLineBrushes;
		this.thickness = DeviceUtils.toPixelUnits(1);
		this.initializeDefaultsOverride();
	}
	protected initializeDefaultsOverride(): void {
	}
	protected initializeChartOverride(dataChart: XamDataChart): void {
		if (dataChart == null) {
			return;
		}
		dataChart.titleTopMargin = this.titleTopMargin;
		dataChart.titleLeftMargin = this.titleLeftMargin;
		dataChart.titleRightMargin = this.titleRightMargin;
		dataChart.titleBottomMargin = this.titleBottomMargin;
		dataChart.titleTextColor = this.titleTextColor;
		dataChart.subtitleLeftMargin = this.subtitleLeftMargin;
		dataChart.subtitleTopMargin = this.subtitleTopMargin;
		dataChart.subtitleRightMargin = this.subtitleRightMargin;
		dataChart.subtitleBottomMargin = this.subtitleBottomMargin;
		dataChart.subtitleTextColor = this.subtitleTextColor;
		if (!isNaN_(this.pixelScalingRatio)) {
			dataChart.pixelScalingRatio = this.pixelScalingRatio;
		}
	}
	protected initializeAxesOverride(): void {
	}
	protected initializeSeriesOverride(series: Series, index: number): void {
		series.transitionDuration = this.transitionDuration;
		series.transitionEasingFunction = this.transitionEasingFunction;
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case DomainChart.titleTopMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.titleTopMargin = this.titleTopMargin;
			}
			break;

			case DomainChart.titleLeftMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.titleLeftMargin = this.titleLeftMargin;
			}
			break;

			case DomainChart.pixelScalingRatioPropertyName:
			if (this.dataChart != null) {
				this.onDataChart((datachart: XamDataChart) => datachart.pixelScalingRatio = this.pixelScalingRatio);
			}
			break;

			case DomainChart.titleRightMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.titleRightMargin = this.titleRightMargin;
			}
			break;

			case DomainChart.titleBottomMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.titleBottomMargin = this.titleBottomMargin;
			}
			break;

			case DomainChart.titleTextColorPropertyName:
			if (this.dataChart != null) {
				this.dataChart.titleTextColor = this.titleTextColor;
			}
			break;

			case DomainChart.subtitleLeftMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.subtitleLeftMargin = this.subtitleLeftMargin;
			}
			break;

			case DomainChart.subtitleTopMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.subtitleTopMargin = this.subtitleTopMargin;
			}
			break;

			case DomainChart.subtitleRightMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.subtitleRightMargin = this.subtitleRightMargin;
			}
			break;

			case DomainChart.subtitleBottomMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.subtitleBottomMargin = this.subtitleBottomMargin;
			}
			break;

			case DomainChart.subtitleTextColorPropertyName:
			if (this.dataChart != null) {
				this.dataChart.subtitleTextColor = this.subtitleTextColor;
			}
			break;

			case DomainChart.leftMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.leftMargin = this.leftMargin;
			}
			break;

			case DomainChart.topMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.topMargin = this.topMargin;
			}
			break;

			case DomainChart.rightMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.rightMargin = this.rightMargin;
			}
			break;

			case DomainChart.bottomMarginPropertyName:
			if (this.dataChart != null) {
				this.dataChart.bottomMargin = this.bottomMargin;
			}
			break;

			case DomainChart.transitionDurationPropertyName:
			this.forEachSeries((series: Series) => series.transitionDuration = this.transitionDuration);
			break;

			case DomainChart.transitionEasingFunctionPropertyName:
			this.forEachSeries((series: Series) => series.transitionEasingFunction = this.transitionEasingFunction);
			break;

		}

	}
	private static readonly tooltipTemplatePropertyName: string = "TooltipTemplate";
	private _tooltipTemplate: any = null;
	get tooltipTemplate(): any {
		return ArrayExtension.getModulus$1<any>((<any>Base).$type, this.tooltipTemplates, 0);
	}
	set tooltipTemplate(value: any) {
		this.tooltipTemplates = value == null ? null : new List$1<any>((<any>Base).$type, 1, <IEnumerable$1<any>><any><any[]>[ value ]);
	}
	private static readonly tooltipTemplatesPropertyName: string = "TooltipTemplates";
	private _tooltipTemplates: List$1<any> = null;
	get tooltipTemplates(): List$1<any> {
		return this._tooltipTemplates;
	}
	set tooltipTemplates(value: List$1<any>) {
		let oldValue = this.tooltipTemplates;
		if (value != oldValue) {
			this._tooltipTemplates = value;
			this.onPropertyUpdated(DomainChart.tooltipTemplatesPropertyName, oldValue, this.tooltipTemplates);
		}
	}
	private static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	private _pixelScalingRatio: number = NaN;
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue: number = this._pixelScalingRatio;
		if (value != oldValue) {
			this._pixelScalingRatio = value;
			this.onPropertyUpdated(DomainChart.pixelScalingRatioPropertyName, oldValue, this.pixelScalingRatio);
		}
	}
	private static readonly toolTipPropertyName: string = "ToolTip";
	private _toolTip: any = null;
	private get toolTip(): any {
		return this._toolTip;
	}
	private set toolTip(value: any) {
		let oldValue: any = this.toolTip;
		if (oldValue != value) {
			this._toolTip = value;
			this.onPropertyUpdated(DomainChart.toolTipPropertyName, oldValue, this.toolTip);
		}
	}
	private static readonly titleLeftMarginPropertyName: string = "TitleLeftMargin";
	private _titleLeftMargin: number = 0;
	get titleLeftMargin(): number {
		return this._titleLeftMargin;
	}
	set titleLeftMargin(value: number) {
		let oldValue: number = this.titleLeftMargin;
		if (value != oldValue) {
			this._titleLeftMargin = value;
			this.onPropertyUpdated(DomainChart.titleLeftMarginPropertyName, oldValue, this.titleLeftMargin);
		}
	}
	private static readonly titleRightMarginPropertyName: string = "TitleRightMargin";
	private _titleRightMargin: number = 0;
	get titleRightMargin(): number {
		return this._titleRightMargin;
	}
	set titleRightMargin(value: number) {
		let oldValue: number = this.titleRightMargin;
		if (value != oldValue) {
			this._titleRightMargin = value;
			this.onPropertyUpdated(DomainChart.titleRightMarginPropertyName, oldValue, this.titleRightMargin);
		}
	}
	private static readonly titleTopMarginPropertyName: string = "TitleTopMargin";
	private _titleTopMargin: number = 0;
	get titleTopMargin(): number {
		return this._titleTopMargin;
	}
	set titleTopMargin(value: number) {
		let oldValue: number = this.titleTopMargin;
		if (value != oldValue) {
			this._titleTopMargin = value;
			this.onPropertyUpdated(DomainChart.titleTopMarginPropertyName, oldValue, this.titleTopMargin);
		}
	}
	private static readonly titleBottomMarginPropertyName: string = "TitleBottomMargin";
	private _titleBottomMargin: number = 0;
	get titleBottomMargin(): number {
		return this._titleBottomMargin;
	}
	set titleBottomMargin(value: number) {
		let oldValue: number = this.titleBottomMargin;
		if (value != oldValue) {
			this._titleBottomMargin = value;
			this.onPropertyUpdated(DomainChart.titleBottomMarginPropertyName, oldValue, this.titleBottomMargin);
		}
	}
	private static readonly subtitleLeftMarginPropertyName: string = "SubtitleLeftMargin";
	private _subtitleLeftMargin: number = 0;
	get subtitleLeftMargin(): number {
		return this._subtitleLeftMargin;
	}
	set subtitleLeftMargin(value: number) {
		let oldValue: number = this.subtitleLeftMargin;
		if (value != oldValue) {
			this._subtitleLeftMargin = value;
			this.onPropertyUpdated(DomainChart.subtitleLeftMarginPropertyName, oldValue, this.subtitleLeftMargin);
		}
	}
	private static readonly subtitleTopMarginPropertyName: string = "SubtitleTopMargin";
	private _subtitleTopMargin: number = 0;
	get subtitleTopMargin(): number {
		return this._subtitleTopMargin;
	}
	set subtitleTopMargin(value: number) {
		let oldValue: number = this.subtitleTopMargin;
		if (value != oldValue) {
			this._subtitleTopMargin = value;
			this.onPropertyUpdated(DomainChart.subtitleTopMarginPropertyName, oldValue, this.subtitleTopMargin);
		}
	}
	private static readonly subtitleRightMarginPropertyName: string = "SubtitleRightMargin";
	private _subtitleRightMargin: number = 0;
	get subtitleRightMargin(): number {
		return this._subtitleRightMargin;
	}
	set subtitleRightMargin(value: number) {
		let oldValue: number = this.subtitleRightMargin;
		if (value != oldValue) {
			this._subtitleRightMargin = value;
			this.onPropertyUpdated(DomainChart.subtitleRightMarginPropertyName, oldValue, this.subtitleRightMargin);
		}
	}
	private static readonly subtitleBottomMarginPropertyName: string = "SubtitleBottomMargin";
	private _subtitleBottomMargin: number = 0;
	get subtitleBottomMargin(): number {
		return this._subtitleBottomMargin;
	}
	set subtitleBottomMargin(value: number) {
		let oldValue: number = this.subtitleBottomMargin;
		if (value != oldValue) {
			this._subtitleBottomMargin = value;
			this.onPropertyUpdated(DomainChart.subtitleBottomMarginPropertyName, oldValue, this.subtitleBottomMargin);
		}
	}
	private static readonly subtitleTextColorPropertyName: string = "SubtitleTextColor";
	private _subtitleTextColor: Brush = null;
	get subtitleTextColor(): Brush {
		return this._subtitleTextColor;
	}
	set subtitleTextColor(value: Brush) {
		let oldValue: Brush = this.subtitleTextColor;
		if (value != oldValue) {
			this._subtitleTextColor = value;
			this.onPropertyUpdated(DomainChart.subtitleTextColorPropertyName, oldValue, this.subtitleTextColor);
		}
	}
	private static readonly titleTextColorPropertyName: string = "TitleTextColor";
	private _titleTextColor: Brush = null;
	get titleTextColor(): Brush {
		return this._titleTextColor;
	}
	set titleTextColor(value: Brush) {
		let oldValue: Brush = this.titleTextColor;
		if (value != oldValue) {
			this._titleTextColor = value;
			this.onPropertyUpdated(DomainChart.titleTextColorPropertyName, oldValue, this.titleTextColor);
		}
	}
	private static readonly leftMarginPropertyName: string = "LeftMargin";
	private _leftMargin: number = NaN;
	protected get_leftMargin(): number {
		return this._leftMargin;
	}
	protected set_leftMargin(value: number): void {
		let oldValue: number = this.leftMargin;
		if (value != oldValue) {
			this._leftMargin = value;
			this.onPropertyUpdated(DomainChart.leftMarginPropertyName, oldValue, this.leftMargin);
		}
	}
	get leftMargin(): number {
		return this.get_leftMargin();
	}
	set leftMargin(value: number) {
		this.set_leftMargin(value);
	}
	private static readonly topMarginPropertyName: string = "TopMargin";
	private _topMargin: number = NaN;
	get topMargin(): number {
		return this._topMargin;
	}
	set topMargin(value: number) {
		let oldValue: number = this.topMargin;
		if (value != oldValue) {
			this._topMargin = value;
			this.onPropertyUpdated(DomainChart.topMarginPropertyName, oldValue, this.topMargin);
		}
	}
	private static readonly rightMarginPropertyName: string = "RightMargin";
	private _rightMargin: number = NaN;
	get rightMargin(): number {
		return this._rightMargin;
	}
	set rightMargin(value: number) {
		let oldValue: number = this.rightMargin;
		if (value != oldValue) {
			this._rightMargin = value;
			this.onPropertyUpdated(DomainChart.rightMarginPropertyName, oldValue, this.rightMargin);
		}
	}
	private static readonly bottomMarginPropertyName: string = "BottomMargin";
	private _bottomMargin: number = NaN;
	get bottomMargin(): number {
		return this._bottomMargin;
	}
	set bottomMargin(value: number) {
		let oldValue: number = this.bottomMargin;
		if (value != oldValue) {
			this._bottomMargin = value;
			this.onPropertyUpdated(DomainChart.bottomMarginPropertyName, oldValue, this.bottomMargin);
		}
	}
	private static readonly transitionDurationPropertyName: string = "TransitionDuration";
	private _transitionDuration: number = 0;
	get transitionDuration(): number {
		return this._transitionDuration;
	}
	set transitionDuration(value: number) {
		let oldValue: number = this.transitionDuration;
		if (value != oldValue) {
			this._transitionDuration = value;
			this.onPropertyUpdated(DomainChart.transitionDurationPropertyName, oldValue, this.transitionDuration);
		}
	}
	private static readonly transitionEasingFunctionPropertyName: string = "TransitionEasingFunction";
	private _transitionEasingFunction: (time: number) => number = null;
	get transitionEasingFunction(): (time: number) => number {
		return this._transitionEasingFunction;
	}
	set transitionEasingFunction(value: (time: number) => number) {
		let oldValue: (time: number) => number = this.transitionEasingFunction;
		if (value != oldValue) {
			this._transitionEasingFunction = value;
			this.onPropertyUpdated(DomainChart.transitionEasingFunctionPropertyName, oldValue, this.transitionEasingFunction);
		}
	}
	protected initializeChartOverridePlatform(dataChart: XamDataChart): void {
		if (this.dataChart == null) {
			return;
		}
		dataChart.titleTextStyle = this.titleTextStyle;
		dataChart.subtitleTextStyle = this.subtitleTextStyle;
	}
	protected initializeSeriesOverridePlatform(series: Series, index: number): void {
		this.initializeTooltip(series, index);
	}
	protected initializeAxesOverridePlatform(): void {
	}
	private initializeTooltip(series: Series, index: number): void {
		if (series == null) {
			return;
		}
		let toolTipTemplate_ = ArrayExtension.getModulus$1<any>((<any>Base).$type, this.tooltipTemplates, index);
		if (toolTipTemplate_ == null) {
			series.showDefaultTooltip = true;
		} else {
			let series_ = series;
			series.showDefaultTooltip = false;
			(<any>series_).externalObject.tooltipTemplate = toolTipTemplate_;
		}
	}
	private _createWrappedTooltip: (arg1: HTMLElement) => any[] = null;
	get createWrappedTooltip(): (arg1: HTMLElement) => any[] {
		return this._createWrappedTooltip;
	}
	set createWrappedTooltip(value: (arg1: HTMLElement) => any[]) {
		this._createWrappedTooltip = value;
	}
	private setTooltip(series: Series, tooltipTemplate: any, tooltip: any): void {
	}
	private getTooltipTemplate(tooltipTemplate: any): any {
		return tooltipTemplate;
		return null;
	}
	private _processingTooltipTemplate: boolean = false;
	private get processingTooltipTemplate(): boolean {
		return this._processingTooltipTemplate;
	}
	private set processingTooltipTemplate(value: boolean) {
		this._processingTooltipTemplate = value;
	}
	private toElement(html: string): HTMLElement {
		return null;
	}
	protected propertyUpdatedOverridePlatform(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case DomainChart.subtitleTextStylePropertyName:
			if (this.dataChart != null) {
				this.dataChart.subtitleTextStyle = this.subtitleTextStyle;
			}
			break;

			case DomainChart.titleTextStylePropertyName:
			if (this.dataChart != null) {
				this.dataChart.titleTextStyle = this.titleTextStyle;
			}
			break;

			case DomainChart.tooltipTemplatePropertyName:
			if (this.processingTooltipTemplate) {
				return;
			}
			this.processingTooltipTemplate = true;
			this.tooltipTemplate = this.getTooltipTemplate(this.tooltipTemplate);
			this.processingTooltipTemplate = false;
			if (this.dataChart != null) {
				this.dataChart.tooltipTemplate = this.tooltipTemplate;
			}
			this.toolTip = this.tooltipTemplate;
			break;

			case DomainChart.toolTipPropertyName:
			this.forEachSeries1((series: Series, index: number) => this.initializeTooltip(series, index));
			break;

			case DomainChart.tooltipTemplatesPropertyName:
			if (this.tooltipTemplates == null) {
				break;
			}
			this.processingTooltipTemplate = true;
			this.forEachSeries1((series: Series, index: number) => {
				let templ = this.getTooltipTemplate(ArrayExtension.getModulus$1<any>((<any>Base).$type, this.tooltipTemplates, index));
				let series_ = series;
				let templ_ = templ;
				(<any>series_).externalObject.tooltipTemplate = templ_;
			});
			this.processingTooltipTemplate = false;
			break;

		}

	}
	private static readonly widgetPropertyName: string = "Widget";
	private _widget: IDomainChartWidget = null;
	get widget(): IDomainChartWidget {
		return this._widget;
	}
	set widget(value: IDomainChartWidget) {
		let oldValue: IDomainChartWidget = this.widget;
		if (value != oldValue) {
			this._widget = value;
			this.onPropertyUpdated(DomainChart.widgetPropertyName, oldValue, this.widget);
		}
	}
	private static readonly subtitleTextStylePropertyName: string = "SubtitleTextStyle";
	private _subtitleTextStyle: string = null;
	get subtitleTextStyle(): string {
		return this._subtitleTextStyle;
	}
	set subtitleTextStyle(value: string) {
		let oldValue: string = this.subtitleTextStyle;
		if (value != oldValue) {
			this._subtitleTextStyle = value;
			this.onPropertyUpdated(DomainChart.subtitleTextStylePropertyName, oldValue, this.subtitleTextStyle);
		}
	}
	private static readonly titleTextStylePropertyName: string = "TitleTextStyle";
	private _titleTextStyle: string = null;
	get titleTextStyle(): string {
		return this._titleTextStyle;
	}
	set titleTextStyle(value: string) {
		let oldValue: string = this.titleTextStyle;
		if (value != oldValue) {
			this._titleTextStyle = value;
			this.onPropertyUpdated(DomainChart.titleTextStylePropertyName, oldValue, this.titleTextStyle);
		}
	}
	protected static readonly dataChartPropertyName: string = "DataChart";
	private _dataChart: XamDataChart = null;
	get dataChart(): XamDataChart {
		return this._dataChart;
	}
	set dataChart(value: XamDataChart) {
		let oldValue: any = this.dataChart;
		if (oldValue != value) {
			this._dataChart = value;
			this.onPropertyUpdated(DomainChart.dataChartPropertyName, oldValue, this.dataChart);
		}
	}
	private _dataAdapter: DataSeriesAdapterImplementation;
	get dataAdapter(): DataSeriesAdapterImplementation {
		return this._dataAdapter;
	}
	set dataAdapter(value: DataSeriesAdapterImplementation) {
		this._dataAdapter = value;
	}
	onDetachedFromUI(): void {
		this.onDataChart((dc: XamDataChart) => dc.onDetachedFromUI());
	}
	onAttachedToUI(): void {
		this.onDataChart((dc: XamDataChart) => dc.onAttachedToUI());
	}
	constructor() {
		super();
		this.queuedActions = new List$1<() => void>(Delegate_$type, 0);
		this.initializeDataAdapter();
		this.createAxes();
	}
	protected initializeDataAdapter(): void {
		this.suggestedMarkerTypes = new List$1<MarkerType>(MarkerType_$type, 0);
		this.dataAdapter = new DataSeriesAdapter().implementation;
		if (this.includedProperties != null) {
			this.dataAdapter.includedProperties = this.includedProperties;
		}
		if (this.excludedProperties != null) {
			this.dataAdapter.excludedProperties = this.excludedProperties;
		}
		this.dataAdapter.supportedSeriesTypes = this.supportedDataSeries.toArray();
		this.dataAdapter.rules.clear();
		for (let rule of fromEnum<IDataSeriesAdapterRule>(this.supportedDataRules)) {
			this.dataAdapter.rules.add(rule);
		}
		let ruleNames = new List$1<string>(String_$type, 0);
		for (let item of fromEnum<IDataSeriesAdapterRule>(this.dataAdapter.rules)) {
			ruleNames.add(getInstanceType(item).typeName);
		}
		let $t = this.dataAdapter.dataSeries;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.onDataSeriesChanged));
	}
	protected abstract get supportedDataSeries(): List$1<DataSeriesType>;
	protected abstract get supportedDataRules(): List$1<IDataSeriesAdapterRule>;
	private _suggestedMarkerTypes: List$1<MarkerType> = null;
	protected get suggestedMarkerTypes(): List$1<MarkerType> {
		return this._suggestedMarkerTypes;
	}
	protected set suggestedMarkerTypes(value: List$1<MarkerType>) {
		this._suggestedMarkerTypes = value;
	}
	protected isSupported(seriesType: DataSeriesType): boolean {
		return seriesType != DataSeriesType.Unknown && this.supportedDataSeries.contains(seriesType);
	}
	notifyResized(): void {
		this.onDataChart((d: XamDataChart) => d.notifyContainerResized());
	}
	notifyVisualPropertiesChanged(): void {
		this.onDataChart((d: XamDataChart) => {
			for (let i = 0; i < d.series.count; i++) {
				d.series._inner[i].notifyVisualPropertiesChanged();
			}
		});
	}
	flush(): void {
		if (this.dataChart == null) {
			return;
		}
		if (this.isRepopulatingSeries) {
			this.repopulateSeriesFromDataAdapter();
		}
		this.dataChart.flush();
	}
	hideToolTip(): void {
		if (this.dataChart == null) {
			return;
		}
		this.dataChart.hideToolTip();
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	protected raisePropertyChanged(propertyName: string): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	protected forEachSeries(action: (arg1: Series) => void): void {
		this.forEachSeries1((series: Series, index: number) => action(series));
	}
	protected forEachSeries1(action: (arg1: Series, arg2: number) => void): void {
		if (this.dataChart == null) {
			return;
		}
		for (let i = 0; i < this.dataChart.series.count; i++) {
			action(this.dataChart.series._inner[i], i);
		}
	}
	protected onDataChart(action: (arg1: XamDataChart) => void): void {
		this.onDataChart1(action, true);
	}
	protected onDataChart1(action: (arg1: XamDataChart) => void, subCharts: boolean): void {
		this.onDataChart2(action, subCharts, null);
	}
	protected onDataChart2(action: (arg1: XamDataChart) => void, subCharts: boolean, propertyName: string): void {
		if (this.dataChart == null) {
			return;
		}
		action(this.dataChart);
	}
	protected isValid(ds: DataSeries): boolean {
		if (!this.isSupported(ds.suggestedSeries)) {
			return false;
		}
		let dataSource = <IEnumerable><any>ds.data;
		if (dataSource == null) {
			return false;
		}
		return true;
	}
	protected isChartReady(): boolean {
		if (this.dataChart == null) {
			return false;
		}
		return true;
	}
	private static readonly randomizer: Random = new Random(0);
	private _seriesID: number = 0;
	protected getSeriesName(ds: DataSeries): string {
		let uniqueName = "series_" + (this.dataChart.series.count + 1) + "_" + EnumUtil.getName<DataSeriesType>(DataSeriesType_$type, ds.suggestedSeries);
		return uniqueName;
	}
	protected getSeriesTitle(ds: DataSeries, resolvedSeries: DataSeriesType): string {
		if (stringIsNullOrEmpty(ds.title)) {
			let seriesType = EnumUtil.getName<DataSeriesType>(DataSeriesType_$type, resolvedSeries);
			return seriesType + (this.dataChart.series.count + 1);
		} else {
			return ds.title;
		}
	}
	protected abstract getSeriesType(ds: DataSeries): DataSeriesType;
	protected abstract createSeries(ds: DataSeries, resolvedSeries: DataSeriesType): Series;
	getChartTypeName(): string {
		return stringEmpty();
	}
	private isRepopulatingSeries: boolean = false;
	protected repopulateSeriesFromDataAdapter(): void {
		if (this.dataChart == null) {
			return;
		}
		this.isRepopulatingSeries = false;
		this.resetChart();
		if (this.itemsSource == null) {
			return;
		}
		let markers = new List$1<MarkerType>(MarkerType_$type, 0);
		for (let ds of fromEnum<DataSeries>(this.dataAdapter.dataSeries)) {
			markers.add(this.getMarkerType(ds.suggestedMarker));
		}
		this.suggestedMarkerTypes = markers;
		let index = 0;
		for (let ds1 of fromEnum<DataSeries>(this.dataAdapter.dataSeries)) {
			if (!this.isValid(ds1)) {
				continue;
			}
			if (ds1.index < 0) {
				ds1.index = index;
			}
			this.repopulateAxisBasedOn(ds1);
			this.repopulateSeriesBasedOn(ds1);
			index++;
		}
		this.updateAnnotationLayers();
		this.forEachSeries1(runOn(this, this.initializeSeries));
	}
	protected getSeriesFromExternalChart(seriesType_: DataSeriesType): Series {
		return <Series>((<any>this).externalObject.createSeries(seriesType_).i);
	}
	private createCalloutLayer(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.CalloutLayer);
	}
	private createCrosshairLayer(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.CrosshairLayer);
	}
	private createFinalValueLayer(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.FinalValueLayer);
	}
	private createItemToolTipLayer(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.ItemToolTipLayer);
	}
	private createCategoryToolTipLayer(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.CategoryToolTipLayer);
	}
	private _annotationLayerProxy: IAnnotationLayerProxy = null;
	protected get annotationLayerProxy(): IAnnotationLayerProxy {
		if (TypeRegistrar.isRegistered("AnnotationLayerProxy")) {
			return <IAnnotationLayerProxy><any>TypeRegistrar.create("AnnotationLayerProxy");
		} else {
			throw new BaseError(1, "annoation layer module is not loaded, but is required.");
		}
	}
	private get hasAnnotationLayerProxy(): boolean {
		return (TypeRegistrar.isRegistered("AnnotationLayerProxy"));
	}
	private isAnnotationLayer(series: Series): boolean {
		if (!this.hasAnnotationLayerProxy) {
			return false;
		}
		return this.annotationLayerProxy.matchesType(series);
	}
	private updateAnnotationLayers(): void {
		let annotationLayersToAdd = this.getAnnotationLayers("", true);
		if (annotationLayersToAdd != null) {
			for (let i = 0; i < annotationLayersToAdd.count; i++) {
				this.dataChart.series.add(annotationLayersToAdd._inner[i]);
			}
		}
	}
	protected getAnnotationLayers(namePrefix: string, includeSecondaryLayers: boolean): List$1<Series> {
		if (!this.hasAnnotationLayerProxy) {
			return null;
		}
		let annotationLayersToAdd = new List$1<Series>((<any>Series).$type, 0);
		if (includeSecondaryLayers) {
			if (this._calloutsVisible) {
				let calloutCount = 1;
				if (this._calloutsItemsSource == null) {
					for (let series of fromEnum<Series>(this.dataChart.series)) {
						let callout = this.createCalloutLayer();
						this.annotationLayerProxy.setTargetSeries(callout, series);
						this.annotationLayerProxy.setCollisionChannel(callout, "MainChartCollisionChannel");
						this.setCalloutMemberPaths(callout, series, this.dataAdapter.dataSeries._inner[calloutCount - 1]);
						callout.name = namePrefix + getInstanceType(callout).typeName + calloutCount.toString();
						annotationLayersToAdd.add(callout);
						calloutCount++;
					}
					;
				} else {
					let callout1 = this.createCalloutLayer();
					this.setCalloutMemberPaths(callout1, null, this.dataAdapter.dataSeries._inner[calloutCount - 1]);
					callout1.name = namePrefix + getInstanceType(callout1).typeName + calloutCount.toString();
					annotationLayersToAdd.add(callout1);
				}
			}
		}
		switch (this._crosshairsDisplayMode) {
			case CrosshairsDisplayMode.Both:

			case CrosshairsDisplayMode.Vertical:

			case CrosshairsDisplayMode.Horizontal:
			{
				let crosshairLayer = this.createCrosshairLayer();
				this.annotationLayerProxy.setUseInterpolation(crosshairLayer, !this._crosshairsSnapToData);
				this.annotationLayerProxy.setHorizontalLineVisibility(crosshairLayer, (this._crosshairsDisplayMode == CrosshairsDisplayMode.Horizontal || this._crosshairsDisplayMode == CrosshairsDisplayMode.Both) ? Visibility.Visible : Visibility.Collapsed);
				this.annotationLayerProxy.setVerticalLineVisibility(crosshairLayer, (this._crosshairsDisplayMode == CrosshairsDisplayMode.Vertical || this._crosshairsDisplayMode == CrosshairsDisplayMode.Both) ? Visibility.Visible : Visibility.Collapsed);
				this.annotationLayerProxy.setIsAxisAnnotationEnabled(crosshairLayer, this._crosshairsAnnotationEnabled);
				annotationLayersToAdd.add(crosshairLayer);
				break;
			}

			case CrosshairsDisplayMode.None:

			case CrosshairsDisplayMode.Default:
			{
				break;
			}

		}

		if (this._finalValueAnnotationsVisible) {
			let finalValueLayer = this.createFinalValueLayer();
			annotationLayersToAdd.add(finalValueLayer);
		}
		if (includeSecondaryLayers) {
			switch (this._toolTipType) {
				case ToolTipType.Item:
				{
					let tooltipSeries = this.createItemToolTipLayer();
					annotationLayersToAdd.add(tooltipSeries);
					break;
				}

				case ToolTipType.Category:
				{
					let tooltipSeries1 = this.createCategoryToolTipLayer();
					annotationLayersToAdd.add(tooltipSeries1);
					break;
				}

				case ToolTipType.None:
				{
					this.forEachSeries((series: Series) => series.showDefaultTooltip = false);
					break;
				}

				case ToolTipType.Default:
				{
					this.forEachSeries((series: Series) => series.showDefaultTooltip = true);
					break;
				}

			}

		}
		for (let annotationLayer of fromEnum<Series>(annotationLayersToAdd)) {
			if (stringIsNullOrEmpty(annotationLayer.name) == false) {
				continue;
			}
			annotationLayer.name = namePrefix + getInstanceType(annotationLayer).typeName;
		}
		return annotationLayersToAdd;
	}
	protected setCalloutMemberPaths(callout: Series, targetSeries: Series, dataSeries: DataSeries): void {
		callout.itemsSource = this._calloutsItemsSource != null ? this._calloutsItemsSource : targetSeries.itemsSource;
		this.annotationLayerProxy.setXMemberPath(callout, this._calloutsXMemberPath);
		this.annotationLayerProxy.setYMemberPath(callout, this._calloutsYMemberPath);
		this.annotationLayerProxy.setLabelMemberPath(callout, this._calloutsLabelMemberPath);
		this.annotationLayerProxy.setContentMemberPath(callout, this._calloutsContentMemberPath);
	}
	protected abstract repopulateSeriesBasedOn(ds: DataSeries): void;
	protected abstract repopulateAxisBasedOn(ds: DataSeries): void;
	protected resetChart(): void {
		this.resetChart1(this.dataChart);
	}
	private resetChart1(chart: XamDataChart): void {
		if (chart != null && chart == this.dataChart) {
			this.resetAxes();
		}
		if (chart == null || chart.series.count == 0) {
			return;
		}
		this.forEachSeries((series: Series) => {
			if (this.isAnnotationLayer(series) && this.annotationLayerProxy.isCalloutLayer(series)) {
				this.annotationLayerProxy.removeCalloutStyleUpdating(series, runOn(this, this.raiseCalloutStyleUpdating));
			}
			this.raiseSeriesRemoved(series);
		});
		for (let series of fromEnum<Series>(chart.series)) {
			this.resetSeries(series);
		}
		chart.series.clear();
	}
	protected resetSeries(series: Series): void {
		series.itemsSource = null;
		series.legend = null;
		series.clearAxes();
	}
	protected abstract resetAxes(): void;
	private onDataSeriesChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (this.dataChart == null) {
			return;
		}
		let oldCount = e.oldItems == null ? "null" : e.oldItems.count.toString();
		let newCount = e.newItems == null ? "null" : e.newItems.count.toString();
		if (this.isRepopulatingSeries) {
			return;
		}
		let $ret = this.queueWork(runOn(this, this.doRepopulateSeriesFromDataAdapter), this.isRepopulatingSeries);
		this.isRepopulatingSeries = $ret.p1;
	}
	protected doRepopulateSeriesFromDataAdapter(): void {
		this.repopulateSeriesFromDataAdapter();
	}
	protected getBrushByIndex(index: number): Brush {
		return ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.brushes, index);
	}
	protected getOutlineByIndex(index: number): Brush {
		return ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.outlines, index);
	}
	protected getMarkerBrushByIndex(index: number): Brush {
		return ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.markerBrushes, index);
	}
	protected getMarkerOutlineByIndex(index: number): Brush {
		return ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.markerOutlines, index);
	}
	protected getPaletteColor(index: number): Color {
		let color: Color = new Color();
		if (this.brushes == null || this.brushes.count == 0) {
			color = ArrayExtension.getModulus$1<Color>((<any>Color).$type, this.defaultPaletteColors, index);
		} else {
			let brush = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.brushes, index);
			if (brush == null) {
				color = ArrayExtension.getModulus$1<Color>((<any>Color).$type, this.defaultPaletteColors, index);
			} else {
				color = ColorUtil.fromBrush(brush);
			}
		}
		return color;
	}
	protected getPaletteColors(lastColor: Color): ObservableColorCollection {
		let colors = new ObservableColorCollection();
		colors.add(ColorUtil.getLightened(lastColor, 0.5));
		colors.add(lastColor);
		return colors;
	}
	protected getPaletteBrushes(lastColor: Color): BrushCollection {
		let colors = this.getPaletteColors(lastColor);
		let brushes = BrushCollectionUtil.from(colors);
		return brushes;
	}
	protected _defaultPaletteColors: List$1<Color> = null;
	protected get defaultPaletteColors(): List$1<Color> {
		if (this._defaultPaletteColors != null) {
			return this._defaultPaletteColors;
		}
		this._defaultPaletteColors = new List$1<Color>((<any>Color).$type, 0);
		this._defaultPaletteColors.add(ColorUtil.fromString("#FF7446B9"));
		this._defaultPaletteColors.add(ColorUtil.fromString("#FF9FB328"));
		this._defaultPaletteColors.add(ColorUtil.fromString("#FFF96232"));
		this._defaultPaletteColors.add(ColorUtil.fromString("#FF2E9CA6"));
		this._defaultPaletteColors.add(ColorUtil.fromString("#FFDC3F76"));
		this._defaultPaletteColors.add(ColorUtil.fromString("#FFFF9800"));
		this._defaultPaletteColors.add(ColorUtil.fromString("#FF3F51B5"));
		this._defaultPaletteColors.add(ColorUtil.fromString("#FF439C47"));
		this._defaultPaletteColors.add(ColorUtil.fromString("#FF795548"));
		this._defaultPaletteColors.add(ColorUtil.fromString("#FF494747"));
		return this._defaultPaletteColors;
	}
	exportVisualData(): any {
		if (this.dataChart == null) {
			return null;
		}
		return this.dataChart.exportVisualData();
	}
	log(source: string, messsage: string): void {
	}
	log1(source: string, messsage: string, series: Series): void {
		this.log(source, messsage + " " + series.index + " " + getInstanceType(series).typeName);
	}
	getMarkerType(markerType: DataSeriesMarker): MarkerType {
		if (markerType == DataSeriesMarker.Circle) {
			return MarkerType.Circle;
		} else if (markerType == DataSeriesMarker.Hidden) {
			return MarkerType.Hidden;
		} else if (markerType == DataSeriesMarker.Diamond) {
			return MarkerType.Diamond;
		} else if (markerType == DataSeriesMarker.Hexagon) {
			return MarkerType.Hexagon;
		} else if (markerType == DataSeriesMarker.Hexagram) {
			return MarkerType.Hexagram;
		} else if (markerType == DataSeriesMarker.None) {
			return MarkerType.None;
		} else if (markerType == DataSeriesMarker.Pentagon) {
			return MarkerType.Pentagon;
		} else if (markerType == DataSeriesMarker.Pentagram) {
			return MarkerType.Pentagram;
		} else if (markerType == DataSeriesMarker.Pyramid) {
			return MarkerType.Pyramid;
		} else if (markerType == DataSeriesMarker.Square) {
			return MarkerType.Square;
		} else if (markerType == DataSeriesMarker.Tetragram) {
			return MarkerType.Tetragram;
		} else if (markerType == DataSeriesMarker.Triangle) {
			return MarkerType.Triangle;
		}
		return MarkerType.Automatic;
	}
	notifySetItem(source_: any, index: number, oldItem: any, newItem: any): void {
		if (this.dataAdapter != null) {
			this.dataAdapter.notifySetItem(source_, index, oldItem, newItem);
		}
		if (this.dataChart != null) {
			this.dataChart.notifySetItem(source_, index, oldItem, newItem);
		}
	}
	notifyClearItems(source_: any): void {
		if (this.dataAdapter != null) {
			this.dataAdapter.notifyClearItems(source_);
		}
		if (this.dataChart != null) {
			this.dataChart.notifyClearItems(source_);
		}
	}
	notifyInsertItem(source_: any, index: number, newItem: any): void {
		if (this.dataAdapter != null) {
			this.dataAdapter.notifyInsertItem(source_, index, newItem);
		}
		if (this.dataChart != null) {
			this.dataChart.notifyInsertItem(source_, index, newItem);
		}
	}
	notifyRemoveItem(source_: any, index: number, oldItem: any): void {
		if (this.dataAdapter != null) {
			this.dataAdapter.notifyRemoveItem(source_, index, oldItem);
		}
		if (this.dataChart != null) {
			this.dataChart.notifyRemoveItem(source_, index, oldItem);
		}
	}
	seriesAdded: (sender: any, args: ChartSeriesEventArgs) => void = null;
	raiseSeriesAdded(series: Series): void {
		if (this.seriesAdded != null && series != null) {
			this.seriesAdded(this, new ChartSeriesEventArgs(series));
		}
	}
	seriesRemoved: (sender: any, args: ChartSeriesEventArgs) => void = null;
	raiseSeriesRemoved(series: Series): void {
		if (this.seriesRemoved != null && series != null) {
			this.seriesRemoved(this, new ChartSeriesEventArgs(series));
		}
	}
	seriesPointerEnter: (sender: any, args: DomainChartSeriesPointerEventArgs) => void = null;
	raiseSeriesPointerEnter(series: Series, item: any): void {
		if (this.seriesPointerEnter != null && series != null) {
			this.seriesPointerEnter(this, new DomainChartSeriesPointerEventArgs(series, item));
		}
	}
	seriesPointerLeave: (sender: any, args: DomainChartSeriesPointerEventArgs) => void = null;
	raiseSeriesPointerLeave(series: Series, item: any): void {
		if (this.seriesPointerLeave != null && series != null) {
			this.seriesPointerLeave(this, new DomainChartSeriesPointerEventArgs(series, item));
		}
	}
	seriesPointerMove: (sender: any, args: DomainChartSeriesPointerEventArgs) => void = null;
	raiseSeriesPointerMove(series: Series, item: any): void {
		if (this.seriesPointerMove != null && series != null) {
			this.seriesPointerMove(this, new DomainChartSeriesPointerEventArgs(series, item));
		}
	}
	seriesPointerDown: (sender: any, args: DomainChartSeriesPointerEventArgs) => void = null;
	raiseSeriesPointerDown(series: Series, item: any): void {
		if (this.seriesPointerDown != null && series != null) {
			this.seriesPointerDown(this, new DomainChartSeriesPointerEventArgs(series, item));
		}
	}
	seriesPointerUp: (sender: any, args: DomainChartSeriesPointerEventArgs) => void = null;
	raiseSeriesPointerUp(series: Series, item: any): void {
		if (this.seriesPointerUp != null && series != null) {
			this.seriesPointerUp(this, new DomainChartSeriesPointerEventArgs(series, item));
		}
	}
	calloutStyleUpdating: (sender: any, args: CalloutStyleUpdatingEventArgs) => void = null;
	raiseCalloutStyleUpdating(series: any, args: CalloutStyleUpdatingEventArgs): void {
		if (this.calloutStyleUpdating != null && series != null) {
			this.calloutStyleUpdating(this, args);
		}
	}
	private _queuedActions: List$1<() => void> = null;
	private get queuedActions(): List$1<() => void> {
		return this._queuedActions;
	}
	private set queuedActions(value: List$1<() => void>) {
		this._queuedActions = value;
	}
	queueSingleInvoke(action: () => void): void {
		if (!this.queuedActions.contains(action)) {
			this.queuedActions.add(action);
			let unused: boolean = false;
			let $ret = this.queueWork(() => {
				action();
				this.queuedActions.remove(action);
			}, unused);
			unused = $ret.p1;
		}
	}
	private _pendingAction: () => void = null;
	queueWork(action: () => void, pending: boolean): { p1?: boolean; } {
		if (!pending) {
			pending = true;
			if (this.container != null) {
				(<DomRenderer><any>this.container).setTimeout(<() => void>action, 0);
			} else {
				this._pendingAction = action;
			}
		}
		return {
			p1: pending

		};
	}
	protected get_isVerticalZoomAllowed(): boolean {
		return true;
	}
	protected get isVerticalZoomAllowed(): boolean {
		return this.get_isVerticalZoomAllowed();
	}
	protected initializeChart(dataChart: XamDataChart): void {
		let main: boolean = dataChart == this.dataChart;
		if (main) {
			dataChart.brushes = this.brushes;
		}
		if (main) {
			dataChart.outlines = this.outlines;
		}
		dataChart.markerBrushes = this.markerBrushes;
		dataChart.markerOutlines = this.markerOutlines;
		dataChart.legend = this.legend;
		dataChart.isHorizontalZoomEnabled = this.isHorizontalZoomEnabled;
		dataChart.isVerticalZoomEnabled = this.isVerticalZoomEnabled && this.isVerticalZoomAllowed;
		dataChart.seriesMouseEnter = delegateCombine(dataChart.seriesMouseEnter, (o: any, e: ChartMouseEventArgs) => this.raiseSeriesPointerEnter(e.series, e.item));
		dataChart.seriesMouseLeave = delegateCombine(dataChart.seriesMouseLeave, (o: any, e: ChartMouseEventArgs) => this.raiseSeriesPointerLeave(e.series, e.item));
		dataChart.seriesMouseMove = delegateCombine(dataChart.seriesMouseMove, (o: any, e: ChartMouseEventArgs) => this.raiseSeriesPointerMove(e.series, e.item));
		dataChart.seriesMouseLeftButtonDown = delegateCombine(dataChart.seriesMouseLeftButtonDown, (o: any, e: DataChartMouseButtonEventArgs) => this.raiseSeriesPointerDown(e.series, e.item));
		dataChart.seriesMouseLeftButtonUp = delegateCombine(dataChart.seriesMouseLeftButtonUp, (o: any, e: DataChartMouseButtonEventArgs) => this.raiseSeriesPointerUp(e.series, e.item));
		if (main) {
			dataChart.windowRect = this.windowRect;
		}
		if (main) {
			dataChart.title = this.title;
		}
		dataChart.titleHorizontalAlignment = this.titleAlignment;
		if (main) {
			dataChart.subtitle = this.subtitle;
		}
		dataChart.subtitleHorizontalAlignment = this.subtitleAlignment;
		dataChart.alignsGridLinesToPixels = this.alignsGridLinesToPixels;
		dataChart.animateSeriesWhenAxisRangeChanges = this.animateSeriesWhenAxisRangeChanges;
		dataChart.leftMargin = this.leftMargin;
		dataChart.rightMargin = this.rightMargin;
		dataChart.topMargin = this.topMargin;
		dataChart.bottomMargin = this.bottomMargin;
		if (dataChart == this.dataChart) {
			this.repopulateSeriesFromDataAdapter();
		}
		this.initializeChartOverride(dataChart);
		this.initializeChartOverridePlatform(dataChart);
	}
	protected initializeSeries(series: Series, index: number): void {
		if (!isNaN_(this.resolution)) {
			series.resolution = this.resolution;
		}
		series.thickness = this.thickness;
		if (series.isUsableInLegend) {
			series.legend = this.legend;
		}
		if (typeCast<IUnknownValuePlotting>(IUnknownValuePlotting_$type, series) !== null) {
			(<IUnknownValuePlotting><any>series).unknownValuePlotting = this.unknownValuePlotting;
		}
		series.isHighlightingEnabled = this.isSeriesHighlightingEnabled;
		if (this.isAnnotationLayer(series) && this.annotationLayerProxy.isCalloutLayer(series)) {
			this.annotationLayerProxy.setCalloutStyleUpdatingEventEnabled(series, this.calloutStyleUpdatingEventEnabled);
			this.annotationLayerProxy.addCalloutStyleUpdating(series, runOn(this, this.raiseCalloutStyleUpdating));
		}
		this.applyMarkers(series, index);
		this.applyTrendLines(series, index);
		this.initializeSeriesOverride(series, index);
		this.initializeSeriesOverridePlatform(series, index);
		this.raiseSeriesAdded(series);
	}
	protected abstract createAxes(): void;
	protected get areAxesInitialized(): boolean {
		return this._areAxesInitialized;
	}
	private _areAxesInitialized: boolean = false;
	protected ensureAxesInitialized(): void {
		if (!this._areAxesInitialized) {
			this._areAxesInitialized = true;
			this.initializeAxes();
		}
	}
	protected initializeAxes(): void {
		this.initializeAxesOverride();
		this.initializeAxesOverridePlatform();
	}
	protected releaseChart(dataChart: XamDataChart): void {
		this.resetChart1(dataChart);
	}
	private applyTrendLines(series: Series, index: number): void {
		let trendliney = typeCast<ITrendLineSeries>(ITrendLineSeries_$type, series);
		if (trendliney != null) {
			trendliney.trendLineBrush = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.trendLineBrushes, index);
			trendliney.trendLineThickness = this.trendLineThickness;
			trendliney.trendLineType = this.trendLineType;
			trendliney.trendLinePeriod = this.trendLinePeriod;
		}
	}
	protected abstract applyMarkers(series: Series, index: number): void;
	protected resolveMarkerType(series: Series, index: number): MarkerType {
		if (this.markerTypes == null || this.markerTypes.count == 0) {
			if (this.suggestedMarkerTypes == null || this.suggestedMarkerTypes.count == 0) {
				return series != null && series.isMarkerlessDisplayPreferred ? MarkerType.None : MarkerType.Automatic;
			}
			let result: MarkerType = ArrayExtension.getModulus$1<MarkerType>(MarkerType_$type, this.suggestedMarkerTypes, index);
			return result == MarkerType.Automatic && series != null && series.isMarkerlessDisplayPreferred ? MarkerType.None : result;
		}
		return ArrayExtension.getModulus$1<MarkerType>(MarkerType_$type, this.markerTypes, index);
	}
	protected onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		switch (propertyName) {
			case DomainChart.dataChartPropertyName:
			this.releaseChart(typeCast<XamDataChart>((<any>XamDataChart).$type, oldValue));
			this.initializeChart(typeCast<XamDataChart>((<any>XamDataChart).$type, newValue));
			break;

			case DomainChart.itemsSourcePropertyName:
			this.dataAdapter.itemsSource = this.itemsSource;
			break;

			case DomainChart.includedPropertiesPropertyName:
			this.dataAdapter.includedProperties = this.includedProperties;
			break;

			case DomainChart.excludedPropertiesPropertyName:
			this.dataAdapter.excludedProperties = this.excludedProperties;
			break;

			case DomainChart.brushesPropertyName:
			this.onDataChart2((chart: XamDataChart) => chart.brushes = this.brushes, true, propertyName);
			break;

			case DomainChart.outlinesPropertyName:
			this.onDataChart2((chart: XamDataChart) => chart.outlines = this.outlines, true, propertyName);
			break;

			case DomainChart.legendPropertyName:
			this.onDataChart((chart: XamDataChart) => chart.legend = this.legend);
			break;

			case DomainChart.isHorizontalZoomEnabledPropertyName:
			this.onDataChart((chart: XamDataChart) => chart.isHorizontalZoomEnabled = this.isHorizontalZoomEnabled);
			break;

			case DomainChart.isVerticalZoomEnabledPropertyName:
			this.onDataChart((chart: XamDataChart) => chart.isVerticalZoomEnabled = this.isVerticalZoomEnabled);
			break;

			case DomainChart.windowRectPropertyName:
			this.onDataChart1((chart: XamDataChart) => chart.windowRect = this.windowRect, false);
			break;

			case DomainChart.titlePropertyName:
			this.onDataChart1((chart: XamDataChart) => chart.title = this.title, false);
			break;

			case DomainChart.subtitlePropertyName:
			this.onDataChart1((chart: XamDataChart) => chart.subtitle = this.subtitle, false);
			break;

			case DomainChart.titleAlignmentPropertyName:
			this.onDataChart((chart: XamDataChart) => chart.titleHorizontalAlignment = this.titleAlignment);
			break;

			case DomainChart.subtitleAlignmentPropertyName:
			this.onDataChart((chart: XamDataChart) => chart.subtitleHorizontalAlignment = this.subtitleAlignment);
			break;

			case DomainChart.unknownValuePlottingPropertyName:
			this.forEachSeries((series: Series) => {
				if (typeCast<IUnknownValuePlotting>(IUnknownValuePlotting_$type, series) !== null) {
					(<IUnknownValuePlotting><any>series).unknownValuePlotting = this.unknownValuePlotting;
				}
			});
			break;

			case DomainChart.isSeriesHighlightingEnabledPropertyName:
			this.forEachSeries((series: Series) => series.isHighlightingEnabled = this.isSeriesHighlightingEnabled);
			break;

			case DomainChart.thicknessPropertyName:
			this.forEachSeries((series: Series) => series.thickness = this.thickness);
			break;

			case DomainChart.resolutionPropertyName:
			if (!isNaN_(this.resolution)) {
				this.forEachSeries((series: Series) => series.resolution = this.resolution);
			}
			break;

			case DomainChart.trendLineBrushesPropertyName:

			case DomainChart.trendLineTypePropertyName:

			case DomainChart.trendLineThicknessPropertyName:

			case DomainChart.trendLinePeriodPropertyName:
			this.forEachSeries1((series: Series, i: number) => this.applyTrendLines(series, i));
			break;

			case DomainChart.markerMaxCountPropertyName:
			this.forEachSeries1((series: Series, i: number) => this.applyMarkers(series, i));
			break;

			case DomainChart.markerTypesPropertyName:
			let oldMarkerTypes = typeCast<ObservableCollection$1<MarkerType>>((<any>ObservableCollection$1).$type.specialize(MarkerType_$type), oldValue);
			if (oldMarkerTypes != null) {
				oldMarkerTypes.collectionChanged = delegateRemove(oldMarkerTypes.collectionChanged, runOn(this, this.onMarkerTypesCollectionChanged));
			}
			let newMarkerTypes = typeCast<ObservableCollection$1<MarkerType>>((<any>ObservableCollection$1).$type.specialize(MarkerType_$type), newValue);
			if (newMarkerTypes != null) {
				newMarkerTypes.collectionChanged = delegateCombine(newMarkerTypes.collectionChanged, runOn(this, this.onMarkerTypesCollectionChanged));
			}
			this.forEachSeries1((series: Series, i: number) => this.applyMarkers(series, i));
			break;

			case DomainChart.markerBrushesPropertyName:
			this.onDataChart((chart: XamDataChart) => chart.markerBrushes = this.markerBrushes);
			break;

			case DomainChart.markerOutlinesPropertyName:
			this.onDataChart((chart: XamDataChart) => chart.markerOutlines = this.markerOutlines);
			break;

			case DomainChart.alignsGridLinesToPixelsPropertyName:
			this.onDataChart((chart: XamDataChart) => chart.alignsGridLinesToPixels = this.alignsGridLinesToPixels);
			break;

			case DomainChart.animateSeriesWhenAxisRangeChangesPropertyName:
			this.onDataChart((chart: XamDataChart) => chart.animateSeriesWhenAxisRangeChanges = this.animateSeriesWhenAxisRangeChanges);
			break;

			case DomainChart.toolTipTypePropertyName:

			case DomainChart.crosshairsDisplayModePropertyName:

			case DomainChart.crosshairsSnapToDataPropertyName:

			case DomainChart.crosshairsAnnotationEnabledPropertyName:

			case DomainChart.finalValueAnnotationsVisiblePropertyName:

			case DomainChart.calloutsVisiblePropertyName:

			case DomainChart.calloutsItemsSourcePropertyName:

			case DomainChart.calloutsXMemberPathPropertyName:

			case DomainChart.calloutsYMemberPathPropertyName:

			case DomainChart.calloutsLabelMemberPathPropertyName:

			case DomainChart.calloutsContentMemberPathPropertyName:
			let $ret = this.queueWork(runOn(this, this.doRepopulateSeriesFromDataAdapter), this.isRepopulatingSeries);
			this.isRepopulatingSeries = $ret.p1;
			break;

		}

		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
		this.propertyUpdatedOverridePlatform(propertyName, oldValue, newValue);
	}
	private onMarkerTypesCollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.forEachSeries1((series: Series, i: number) => this.applyMarkers(series, i));
	}
	protected static readonly itemsSourcePropertyName: string = "ItemsSource";
	private _itemsSource: IEnumerable = null;
	get itemsSource(): IEnumerable {
		return this._itemsSource;
	}
	set itemsSource(value: IEnumerable) {
		let oldValue: IEnumerable = this.itemsSource;
		if (oldValue != value) {
			this._itemsSource = value;
			this.onPropertyUpdated(DomainChart.itemsSourcePropertyName, oldValue, this.itemsSource);
		}
	}
	private _includedProperties: string[] = null;
	protected static readonly includedPropertiesPropertyName: string = "IncludedProperties";
	get includedProperties(): string[] {
		return this._includedProperties;
	}
	set includedProperties(value: string[]) {
		let oldValue = this._includedProperties;
		this._includedProperties = value;
		if (oldValue != this._includedProperties) {
			this.onPropertyUpdated(DomainChart.includedPropertiesPropertyName, oldValue, this._includedProperties);
		}
	}
	private _excludedProperties: string[] = null;
	protected static readonly excludedPropertiesPropertyName: string = "ExcludedProperties";
	get excludedProperties(): string[] {
		return this._excludedProperties;
	}
	set excludedProperties(value: string[]) {
		let oldValue = this._excludedProperties;
		this._excludedProperties = value;
		if (oldValue != this._excludedProperties) {
			this.onPropertyUpdated(DomainChart.excludedPropertiesPropertyName, oldValue, this._excludedProperties);
		}
	}
	protected static readonly brushesPropertyName: string = "Brushes";
	private _brushes: BrushCollection = null;
	get brushes(): BrushCollection {
		return this._brushes;
	}
	set brushes(value: BrushCollection) {
		let oldValue: BrushCollection = this.brushes;
		if (value != oldValue) {
			this._brushes = value;
			this.onPropertyUpdated(DomainChart.brushesPropertyName, oldValue, this.brushes);
		}
	}
	protected static readonly outlinesPropertyName: string = "Outlines";
	private _outlines: BrushCollection = null;
	get outlines(): BrushCollection {
		return this._outlines;
	}
	set outlines(value: BrushCollection) {
		let oldValue: BrushCollection = this.outlines;
		if (value != oldValue) {
			this._outlines = value;
			this.onPropertyUpdated(DomainChart.outlinesPropertyName, oldValue, this.outlines);
		}
	}
	protected static readonly legendPropertyName: string = "Legend";
	private _legend: IChartLegend = null;
	get legend(): IChartLegend {
		return this._legend;
	}
	set legend(value: IChartLegend) {
		let oldValue = this.legend;
		if (value != oldValue) {
			this._legend = value;
			this.onPropertyUpdated(DomainChart.legendPropertyName, oldValue, this.legend);
		}
	}
	protected static readonly isHorizontalZoomEnabledPropertyName: string = "IsHorizontalZoomEnabled";
	private _isHorizontalZoomEnabled: boolean = true;
	protected get_isHorizontalZoomEnabled(): boolean {
		return this._isHorizontalZoomEnabled;
	}
	protected set_isHorizontalZoomEnabled(value: boolean): void {
		let oldValue: boolean = this.isHorizontalZoomEnabled;
		if (value != oldValue) {
			this._isHorizontalZoomEnabled = value;
			this.onPropertyUpdated(DomainChart.isHorizontalZoomEnabledPropertyName, oldValue, this.isHorizontalZoomEnabled);
		}
	}
	get isHorizontalZoomEnabled(): boolean {
		return this.get_isHorizontalZoomEnabled();
	}
	set isHorizontalZoomEnabled(value: boolean) {
		this.set_isHorizontalZoomEnabled(value);
	}
	protected static readonly isVerticalZoomEnabledPropertyName: string = "IsVerticalZoomEnabled";
	private _isVerticalZoomEnabled: boolean = true;
	protected get_isVerticalZoomEnabled(): boolean {
		return this._isVerticalZoomEnabled;
	}
	protected set_isVerticalZoomEnabled(value: boolean): void {
		let oldValue: boolean = this.isVerticalZoomEnabled;
		if (value != oldValue) {
			this._isVerticalZoomEnabled = value;
			this.onPropertyUpdated(DomainChart.isVerticalZoomEnabledPropertyName, oldValue, this.isVerticalZoomEnabled);
		}
	}
	get isVerticalZoomEnabled(): boolean {
		return this.get_isVerticalZoomEnabled();
	}
	set isVerticalZoomEnabled(value: boolean) {
		this.set_isVerticalZoomEnabled(value);
	}
	protected static readonly isSeriesHighlightingEnabledPropertyName: string = "IsSeriesHighlightingEnabled";
	private _isSeriesHighlightingEnabled: boolean = false;
	protected get_isSeriesHighlightingEnabled(): boolean {
		return this._isSeriesHighlightingEnabled;
	}
	protected set_isSeriesHighlightingEnabled(value: boolean): void {
		let oldValue: boolean = this.isSeriesHighlightingEnabled;
		if (value != oldValue) {
			this._isSeriesHighlightingEnabled = value;
			this.onPropertyUpdated(DomainChart.isSeriesHighlightingEnabledPropertyName, oldValue, this.isSeriesHighlightingEnabled);
		}
	}
	get isSeriesHighlightingEnabled(): boolean {
		return this.get_isSeriesHighlightingEnabled();
	}
	set isSeriesHighlightingEnabled(value: boolean) {
		this.set_isSeriesHighlightingEnabled(value);
	}
	protected static readonly windowRectPropertyName: string = "WindowRect";
	private _windowRect: Rect = new Rect(0, 0, 0, 1, 1);
	get windowRect(): Rect {
		return this._windowRect;
	}
	set windowRect(value: Rect) {
		let oldValue: Rect = this.windowRect;
		if (Rect.l_op_Inequality(value, oldValue)) {
			this._windowRect = value;
			this.onPropertyUpdated(DomainChart.windowRectPropertyName, oldValue, this.windowRect);
		}
	}
	get viewport(): Rect {
		return this.dataChart != null ? this.dataChart.viewportRect : Rect.empty;
	}
	protected static readonly titlePropertyName: string = "Title";
	private _title: string = null;
	get title(): string {
		return this._title;
	}
	set title(value: string) {
		let oldValue: string = this.title;
		if (value != oldValue) {
			this._title = value;
			this.onPropertyUpdated(DomainChart.titlePropertyName, oldValue, this.title);
		}
	}
	protected static readonly subtitlePropertyName: string = "Subtitle";
	private _subtitle: string = null;
	get subtitle(): string {
		return this._subtitle;
	}
	set subtitle(value: string) {
		let oldValue: string = this.subtitle;
		if (value != oldValue) {
			this._subtitle = value;
			this.onPropertyUpdated(DomainChart.subtitlePropertyName, oldValue, this.subtitle);
		}
	}
	protected static readonly titleAlignmentPropertyName: string = "TitleAlignment";
	private _titleAlignment: HorizontalAlignment = HorizontalAlignment.Center;
	get titleAlignment(): HorizontalAlignment {
		return this._titleAlignment;
	}
	set titleAlignment(value: HorizontalAlignment) {
		let oldValue = this.titleAlignment;
		if (oldValue != value) {
			this._titleAlignment = value;
			this.onPropertyUpdated(DomainChart.titleAlignmentPropertyName, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, oldValue), enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, this.titleAlignment));
		}
	}
	protected static readonly subtitleAlignmentPropertyName: string = "SubtitleAlignment";
	private _subtitleAlignment: HorizontalAlignment = HorizontalAlignment.Center;
	get subtitleAlignment(): HorizontalAlignment {
		return this._subtitleAlignment;
	}
	set subtitleAlignment(value: HorizontalAlignment) {
		let oldValue = this.subtitleAlignment;
		if (oldValue != value) {
			this._subtitleAlignment = value;
			this.onPropertyUpdated(DomainChart.subtitleAlignmentPropertyName, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, oldValue), enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, this.subtitleAlignment));
		}
	}
	protected static readonly unknownValuePlottingPropertyName: string = "UnknownValuePlotting";
	private _unknownValuePlotting: UnknownValuePlotting = <UnknownValuePlotting>0;
	get unknownValuePlotting(): UnknownValuePlotting {
		return this._unknownValuePlotting;
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		let oldValue = this.unknownValuePlotting;
		if (value != oldValue) {
			this._unknownValuePlotting = value;
			this.onPropertyUpdated(DomainChart.unknownValuePlottingPropertyName, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, oldValue), enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, this.unknownValuePlotting));
		}
	}
	protected static readonly resolutionPropertyName: string = "Resolution";
	private _resolution: number = 1;
	protected get_resolution(): number {
		return this._resolution;
	}
	protected set_resolution(value: number): void {
		let oldValue = this.resolution;
		if (value != oldValue) {
			this._resolution = value;
			this.onPropertyUpdated(DomainChart.resolutionPropertyName, oldValue, this.resolution);
		}
	}
	get resolution(): number {
		return this.get_resolution();
	}
	set resolution(value: number) {
		this.set_resolution(value);
	}
	protected static readonly thicknessPropertyName: string = "Thickness";
	private _thickness: number = 1;
	get thickness(): number {
		return this._thickness;
	}
	set thickness(value: number) {
		let oldValue = this.thickness;
		if (value != oldValue) {
			this._thickness = value;
			this.onPropertyUpdated(DomainChart.thicknessPropertyName, oldValue, this.thickness);
		}
	}
	protected static readonly markerTypesPropertyName: string = "MarkerTypes";
	private _markerTypes: MarkerTypeCollection = null;
	get markerTypes(): MarkerTypeCollection {
		return this._markerTypes;
	}
	set markerTypes(value: MarkerTypeCollection) {
		let oldValue = this.markerTypes;
		if (value != oldValue) {
			this._markerTypes = value;
			this.onPropertyUpdated(DomainChart.markerTypesPropertyName, oldValue, this.markerTypes);
		}
	}
	protected static readonly markerBrushesPropertyName: string = "MarkerBrushes";
	private _markerBrushes: BrushCollection = null;
	get markerBrushes(): BrushCollection {
		return this._markerBrushes;
	}
	set markerBrushes(value: BrushCollection) {
		let oldValue = this.markerBrushes;
		if (value != oldValue) {
			this._markerBrushes = value;
			this.onPropertyUpdated(DomainChart.markerBrushesPropertyName, oldValue, this.markerBrushes);
		}
	}
	protected static readonly markerOutlinesPropertyName: string = "MarkerOutlines";
	private _markerOutlines: BrushCollection = null;
	get markerOutlines(): BrushCollection {
		return this._markerOutlines;
	}
	set markerOutlines(value: BrushCollection) {
		let oldValue = this.markerOutlines;
		if (!Base.equalsStatic(value, oldValue)) {
			this._markerOutlines = value;
			this.onPropertyUpdated(DomainChart.markerOutlinesPropertyName, oldValue, this.markerOutlines);
		}
	}
	protected static readonly markerMaxCountPropertyName: string = "MarkerMaxCount";
	private _markerMaxCount: number = 400;
	get markerMaxCount(): number {
		return this._markerMaxCount;
	}
	set markerMaxCount(value: number) {
		let oldValue = this._markerMaxCount;
		if (value != oldValue) {
			this._markerMaxCount = value;
			this.onPropertyUpdated(DomainChart.markerMaxCountPropertyName, oldValue, this._markerMaxCount);
		}
	}
	protected static readonly animateSeriesWhenAxisRangeChangesPropertyName: string = "AnimateSeriesWhenAxisRangeChanges";
	private _animateSeriesWhenAxisRangeChanges: boolean = false;
	get animateSeriesWhenAxisRangeChanges(): boolean {
		return this._animateSeriesWhenAxisRangeChanges;
	}
	set animateSeriesWhenAxisRangeChanges(value: boolean) {
		let oldValue = this._animateSeriesWhenAxisRangeChanges;
		if (value != oldValue) {
			this._animateSeriesWhenAxisRangeChanges = value;
			this.onPropertyUpdated(DomainChart.animateSeriesWhenAxisRangeChangesPropertyName, oldValue, this._animateSeriesWhenAxisRangeChanges);
		}
	}
	protected static readonly trendLineBrushesPropertyName: string = "TrendLineBrushes";
	private _trendLineBrushes: BrushCollection = null;
	get trendLineBrushes(): BrushCollection {
		return this._trendLineBrushes;
	}
	set trendLineBrushes(value: BrushCollection) {
		let oldValue: BrushCollection = this.trendLineBrushes;
		if (value != oldValue) {
			this._trendLineBrushes = value;
			this.onPropertyUpdated(DomainChart.trendLineBrushesPropertyName, oldValue, this.trendLineBrushes);
		}
	}
	protected static readonly trendLineTypePropertyName: string = "TrendLineType";
	private _trendLineType: TrendLineType = TrendLineType.None;
	get trendLineType(): TrendLineType {
		return this._trendLineType;
	}
	set trendLineType(value: TrendLineType) {
		let oldValue: TrendLineType = this.trendLineType;
		if (value != oldValue) {
			this._trendLineType = value;
			this.onPropertyUpdated(DomainChart.trendLineTypePropertyName, enumGetBox<TrendLineType>(TrendLineType_$type, oldValue), enumGetBox<TrendLineType>(TrendLineType_$type, this.trendLineType));
		}
	}
	protected static readonly trendLineThicknessPropertyName: string = "TrendLineThickness";
	private _trendLineThickness: number = 1.5;
	get trendLineThickness(): number {
		return this._trendLineThickness;
	}
	set trendLineThickness(value: number) {
		let oldValue: number = this.trendLineThickness;
		if (value != oldValue) {
			this._trendLineThickness = value;
			this.onPropertyUpdated(DomainChart.trendLineThicknessPropertyName, oldValue, this.trendLineThickness);
		}
	}
	protected static readonly alignsGridLinesToPixelsPropertyName: string = "AlignsGridLinesToPixels";
	private _alignsGridLinesToPixels: boolean = XamDataChart.alignsGridLinesToPixelsPropertyDefault;
	get alignsGridLinesToPixels(): boolean {
		return this._alignsGridLinesToPixels;
	}
	set alignsGridLinesToPixels(value: boolean) {
		let oldValue: boolean = this.alignsGridLinesToPixels;
		if (value != oldValue) {
			this._alignsGridLinesToPixels = value;
			this.onPropertyUpdated(DomainChart.alignsGridLinesToPixelsPropertyName, oldValue, this.alignsGridLinesToPixels);
		}
	}
	private static readonly trendLinePeriodPropertyName: string = "TrendLinePeriod";
	private _trendLinePeriod: number = 7;
	get trendLinePeriod(): number {
		return this._trendLinePeriod;
	}
	set trendLinePeriod(value: number) {
		let oldValue: number = this.trendLinePeriod;
		if (value != oldValue) {
			this._trendLinePeriod = value;
			this.onPropertyUpdated(DomainChart.trendLinePeriodPropertyName, oldValue, this.trendLinePeriod);
		}
	}
	protected static readonly toolTipTypePropertyName: string = "ToolTipType";
	private _toolTipType: ToolTipType = ToolTipType.Default;
	get toolTipType(): ToolTipType {
		return this._toolTipType;
	}
	set toolTipType(value: ToolTipType) {
		let oldValue = this.toolTipType;
		if (value != oldValue) {
			this._toolTipType = value;
			this.onPropertyUpdated(DomainChart.toolTipTypePropertyName, enumGetBox<ToolTipType>(ToolTipType_$type, oldValue), enumGetBox<ToolTipType>(ToolTipType_$type, this.toolTipType));
		}
	}
	protected static readonly crosshairsDisplayModePropertyName: string = "CrosshairsDisplayMode";
	private _crosshairsDisplayMode: CrosshairsDisplayMode = CrosshairsDisplayMode.Default;
	get crosshairsDisplayMode(): CrosshairsDisplayMode {
		return this._crosshairsDisplayMode;
	}
	set crosshairsDisplayMode(value: CrosshairsDisplayMode) {
		let oldValue = this.crosshairsDisplayMode;
		if (value != oldValue) {
			this._crosshairsDisplayMode = value;
			this.onPropertyUpdated(DomainChart.crosshairsDisplayModePropertyName, enumGetBox<CrosshairsDisplayMode>(CrosshairsDisplayMode_$type, oldValue), enumGetBox<CrosshairsDisplayMode>(CrosshairsDisplayMode_$type, this.crosshairsDisplayMode));
		}
	}
	protected static readonly crosshairsSnapToDataPropertyName: string = "CrosshairsSnapToData";
	private _crosshairsSnapToData: boolean = true;
	get crosshairsSnapToData(): boolean {
		return this._crosshairsSnapToData;
	}
	set crosshairsSnapToData(value: boolean) {
		let oldValue = this.crosshairsSnapToData;
		if (value != oldValue) {
			this._crosshairsSnapToData = value;
			this.onPropertyUpdated(DomainChart.crosshairsSnapToDataPropertyName, oldValue, this.crosshairsSnapToData);
		}
	}
	protected static readonly crosshairsAnnotationEnabledPropertyName: string = "CrosshairsAnnotationEnabled";
	private _crosshairsAnnotationEnabled: boolean = false;
	get crosshairsAnnotationEnabled(): boolean {
		return this._crosshairsAnnotationEnabled;
	}
	set crosshairsAnnotationEnabled(value: boolean) {
		let oldValue = this.crosshairsAnnotationEnabled;
		if (value != oldValue) {
			this._crosshairsAnnotationEnabled = value;
			this.onPropertyUpdated(DomainChart.crosshairsAnnotationEnabledPropertyName, oldValue, this.crosshairsAnnotationEnabled);
		}
	}
	protected static readonly finalValueAnnotationsVisiblePropertyName: string = "FinalValueAnnotationsVisible";
	private _finalValueAnnotationsVisible: boolean = false;
	get finalValueAnnotationsVisible(): boolean {
		return this._finalValueAnnotationsVisible;
	}
	set finalValueAnnotationsVisible(value: boolean) {
		let oldValue = this.finalValueAnnotationsVisible;
		if (value != oldValue) {
			this._finalValueAnnotationsVisible = value;
			this.onPropertyUpdated(DomainChart.finalValueAnnotationsVisiblePropertyName, oldValue, this.finalValueAnnotationsVisible);
		}
	}
	protected static readonly calloutsVisiblePropertyName: string = "CalloutsVisible";
	private _calloutsVisible: boolean = false;
	get calloutsVisible(): boolean {
		return this._calloutsVisible;
	}
	set calloutsVisible(value: boolean) {
		let oldValue = this.calloutsVisible;
		if (value != oldValue) {
			this._calloutsVisible = value;
			this.onPropertyUpdated(DomainChart.calloutsVisiblePropertyName, oldValue, this.calloutsVisible);
		}
	}
	protected static readonly calloutStyleUpdatingEventEnabledPropertyName: string = "CalloutStyleUpdatingEventEnabled";
	private _calloutStyleUpdatingEventEnabled: boolean = false;
	get calloutStyleUpdatingEventEnabled(): boolean {
		return this._calloutStyleUpdatingEventEnabled;
	}
	set calloutStyleUpdatingEventEnabled(value: boolean) {
		let oldValue = this.calloutStyleUpdatingEventEnabled;
		if (value != oldValue) {
			this._calloutStyleUpdatingEventEnabled = value;
			this.onPropertyUpdated(DomainChart.calloutStyleUpdatingEventEnabledPropertyName, oldValue, this.calloutStyleUpdatingEventEnabled);
		}
	}
	protected static readonly calloutsItemsSourcePropertyName: string = "CalloutsItemsSource";
	private _calloutsItemsSource: IEnumerable = null;
	get calloutsItemsSource(): IEnumerable {
		return this._calloutsItemsSource;
	}
	set calloutsItemsSource(value: IEnumerable) {
		let oldValue = this.calloutsItemsSource;
		if (value != oldValue) {
			this._calloutsItemsSource = value;
			this.onPropertyUpdated(DomainChart.calloutsItemsSourcePropertyName, oldValue, this.calloutsItemsSource);
		}
	}
	protected static readonly calloutsXMemberPathPropertyName: string = "CalloutsXMemberPath";
	private _calloutsXMemberPath: string = null;
	get calloutsXMemberPath(): string {
		return this._calloutsXMemberPath;
	}
	set calloutsXMemberPath(value: string) {
		let oldValue = this.calloutsXMemberPath;
		if (value != oldValue) {
			this._calloutsXMemberPath = value;
			this.onPropertyUpdated(DomainChart.calloutsXMemberPathPropertyName, oldValue, this.calloutsXMemberPath);
		}
	}
	protected static readonly calloutsYMemberPathPropertyName: string = "CalloutsYMemberPath";
	private _calloutsYMemberPath: string = null;
	get calloutsYMemberPath(): string {
		return this._calloutsYMemberPath;
	}
	set calloutsYMemberPath(value: string) {
		let oldValue = this.calloutsYMemberPath;
		if (value != oldValue) {
			this._calloutsYMemberPath = value;
			this.onPropertyUpdated(DomainChart.calloutsYMemberPathPropertyName, oldValue, this.calloutsYMemberPath);
		}
	}
	protected static readonly calloutsLabelMemberPathPropertyName: string = "CalloutsLabelMemberPath";
	private _calloutsLabelMemberPath: string = "CalloutLabel";
	get calloutsLabelMemberPath(): string {
		return this._calloutsLabelMemberPath;
	}
	set calloutsLabelMemberPath(value: string) {
		let oldValue = this.calloutsLabelMemberPath;
		if (value != oldValue) {
			this._calloutsLabelMemberPath = value;
			this.onPropertyUpdated(DomainChart.calloutsLabelMemberPathPropertyName, oldValue, this.calloutsLabelMemberPath);
		}
	}
	protected static readonly calloutsContentMemberPathPropertyName: string = "CalloutsContentMemberPath";
	private _calloutsContentMemberPath: string = "CalloutContent";
	get calloutsContentMemberPath(): string {
		return this._calloutsContentMemberPath;
	}
	set calloutsContentMemberPath(value: string) {
		let oldValue = this.calloutsContentMemberPath;
		if (value != oldValue) {
			this._calloutsContentMemberPath = value;
			this.onPropertyUpdated(DomainChart.calloutsContentMemberPathPropertyName, oldValue, this.calloutsContentMemberPath);
		}
	}
}


