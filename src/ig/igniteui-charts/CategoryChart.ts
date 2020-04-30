/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { XYChart } from "./XYChart";
import { DomainChart } from "./DomainChart";
import { Base, PropertyChangedEventArgs, Type, typeCast, runOn, delegateCombine, enumGetBox, markType, TypeRegistrar, getInstanceType } from "igniteui-core/type";
import { CategoryChartType, CategoryChartType_$type } from "./CategoryChartType";
import { CategorySeriesMarkerCollisionAvoidance, CategorySeriesMarkerCollisionAvoidance_$type } from "./CategorySeriesMarkerCollisionAvoidance";
import { CategoryTransitionInMode, CategoryTransitionInMode_$type } from "./CategoryTransitionInMode";
import { TransitionInSpeedType, TransitionInSpeedType_$type } from "./TransitionInSpeedType";
import { CategoryXAxis } from "./CategoryXAxis";
import { NumericAxisBase } from "./NumericAxisBase";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { List$1 } from "igniteui-core/List$1";
import { DataSeriesType, DataSeriesType_$type } from "igniteui-core/DataSeriesType";
import { NumericYAxis } from "./NumericYAxis";
import { IDataSeriesAdapterRule, IDataSeriesAdapterRule_$type } from "igniteui-core/IDataSeriesAdapterRule";
import { SimpleCategorySeriesRule } from "igniteui-core/SimpleCategorySeriesRule";
import { SubCollectionsRule } from "igniteui-core/SubCollectionsRule";
import { DefaultPaletteInfo } from "./DefaultPaletteInfo";
import { SeriesViewer } from "./SeriesViewer";
import { SeriesViewerView } from "./SeriesViewerView";
import { SeriesViewerViewManager } from "./SeriesViewerViewManager";
import { Series } from "./Series";
import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { XamDataChart } from "./XamDataChart";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { CategorySeries } from "./CategorySeries";
import { ArrayExtension } from "igniteui-core/ArrayExtension";
import { Brush } from "igniteui-core/Brush";
import { MarkerSeries } from "./MarkerSeries";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Axis } from "./Axis";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { DataSeriesAdapterImplementation } from "igniteui-core/DataSeriesAdapterImplementation";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Debug } from "igniteui-core/Debug";
import { DataSeries } from "igniteui-core/DataSeries";
import { DataSeriesMemberPathHint } from "igniteui-core/DataSeriesMemberPathHint";
import { IAnnotationLayerProxy } from "./IAnnotationLayerProxy";
import { DataSeriesIntent } from "igniteui-core/DataSeriesIntent";
import { DataSeriesAxisType } from "igniteui-core/DataSeriesAxisType";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class CategoryChart extends XYChart {
	static $t: Type = markType(CategoryChart, 'CategoryChart', (<any>XYChart).$type);
	protected initializeDefaultsOverride(): void {
		super.initializeDefaultsOverride();
		if (this.dataChart == null) {
			return;
		}
		let palette = this.dataChart.view.viewManager.getDefaultPalette();
		this.negativeBrushes = palette.negativeBrushes;
		this.negativeOutlines = palette.negativeOutlines;
		if (this.xAxisLabelTextColor == null) {
			this.xAxisLabelTextColor = palette.fontBrush;
		}
		if (this.yAxisLabelTextColor == null) {
			this.yAxisLabelTextColor = palette.fontBrush;
		}
	}
	protected initializeSeriesOverride(series: Series, index: number): void {
		super.initializeSeriesOverride(series, index);
		series.transitionInDuration = this.transitionInDuration;
		series.transitionInEasingFunction = this.transitionInEasingFunction;
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(propertyName, oldValue, newValue);
		switch (propertyName) {
			case CategoryChart.transitionInDurationPropertyName:
			this.forEachSeries2((series: HorizontalAnchoredCategorySeries) => series.transitionInDuration = this.transitionInDuration);
			break;

			case CategoryChart.transitionInEasingFunctionPropertyName:
			this.forEachSeries2((series: HorizontalAnchoredCategorySeries) => series.transitionInEasingFunction = this.transitionInEasingFunction);
			break;

		}

	}
	private static readonly transitionInDurationPropertyName: string = "TransitionInDuration";
	private _transitionInDuration: number = 1000;
	get transitionInDuration(): number {
		return this._transitionInDuration;
	}
	set transitionInDuration(value: number) {
		let oldValue: number = this.transitionInDuration;
		if (value != oldValue) {
			this._transitionInDuration = value;
			this.onPropertyUpdated(CategoryChart.transitionInDurationPropertyName, oldValue, this.transitionInDuration);
		}
	}
	private static readonly transitionInEasingFunctionPropertyName: string = "TransitionInEasingFunction";
	private _transitionInEasingFunction: (time: number) => number = null;
	get transitionInEasingFunction(): (time: number) => number {
		return this._transitionInEasingFunction;
	}
	set transitionInEasingFunction(value: (time: number) => number) {
		let oldValue: (time: number) => number = this.transitionInEasingFunction;
		if (value != oldValue) {
			this._transitionInEasingFunction = value;
			this.onPropertyUpdated(CategoryChart.transitionInEasingFunctionPropertyName, oldValue, this.transitionInEasingFunction);
		}
	}
	exportSerializedVisualData(): string {
		let cvd_: any = this.exportVisualData();
		cvd_.scaleByViewport();
		return <string>(cvd_.serialize());
	}
	protected initializeChart(dataChart: XamDataChart): void {
		super.initializeChart(dataChart);
		dataChart.animateSeriesWhenAxisRangeChanges = this.animateSeriesWhenAxisRangeChanges;
	}
	protected initializeSeries(series: Series, index: number): void {
		super.initializeSeries(series, index);
		let horace: HorizontalAnchoredCategorySeries = typeCast<HorizontalAnchoredCategorySeries>((<any>HorizontalAnchoredCategorySeries).$type, series);
		if (horace == null) {
			return;
		}
		horace.markerCollisionAvoidance = this.markerCollisionAvoidance;
		horace.isTransitionInEnabled = this.isTransitionInEnabled;
		horace.transitionInMode = this.transitionInMode;
		horace.transitionInSpeedType = this.transitionInSpeedType;
		horace.trendLineBrush = ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.trendLineBrushes, index);
		horace.trendLineType = this.trendLineType;
		horace.trendLineThickness = this.trendLineThickness;
		horace.markerType = this.resolveMarkerType(series, index);
		if (series.isNegativeColorSupported) {
			series.setNegativeColors(ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.negativeBrushes, index), ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.negativeOutlines, index));
		}
	}
	private createXAxis(): CategoryXAxis {
		return new CategoryXAxis();
	}
	private createYAxis(): NumericYAxis {
		return new NumericYAxis();
	}
	protected createAxes(): void {
		this.xAxis = this.createXAxis();
		this.xAxis.name = "xAxis";
		let $t = this.xAxis;
		$t.propertyChanged = delegateCombine($t.propertyChanged, runOn(this, this.handleXAxisPropertyChanged));
		this.yAxis = this.createYAxis();
		this.yAxis.name = "yAxis";
		let $t1 = this.yAxis;
		$t1.propertyChanged = delegateCombine($t1.propertyChanged, runOn(this, this.handleYAxisPropertyChanged));
		if (this.xAxis.labelSettings == null) {
			this.xAxis.labelSettings = new AxisLabelSettings();
		}
		if (this.yAxis.labelSettings == null) {
			this.yAxis.labelSettings = new AxisLabelSettings();
		}
	}
	protected initializeYAxis(yAxis: Axis): void {
		super.initializeYAxis(yAxis);
		(<NumericYAxis>yAxis).abbreviateLargeNumbers = this.yAxisAbbreviateLargeNumbers;
	}
	private static readonly chartTypePropertyName: string = "ChartType";
	private _chartType: CategoryChartType = CategoryChartType.Auto;
	get chartType(): CategoryChartType {
		return this._chartType;
	}
	set chartType(value: CategoryChartType) {
		if (value != this._chartType) {
			let oldValue: CategoryChartType = this.chartType;
			this._chartType = value;
			this.onPropertyUpdated(CategoryChart.chartTypePropertyName, enumGetBox<CategoryChartType>(CategoryChartType_$type, oldValue), enumGetBox<CategoryChartType>(CategoryChartType_$type, this.chartType));
		}
	}
	private static readonly markerCollisionAvoidancePropertyName: string = "MarkerCollisionAvoidance";
	private _markerCollisionAvoidance: CategorySeriesMarkerCollisionAvoidance = CategorySeriesMarkerCollisionAvoidance.Omit;
	get markerCollisionAvoidance(): CategorySeriesMarkerCollisionAvoidance {
		return this._markerCollisionAvoidance;
	}
	set markerCollisionAvoidance(value: CategorySeriesMarkerCollisionAvoidance) {
		let oldValue: CategorySeriesMarkerCollisionAvoidance = this.markerCollisionAvoidance;
		if (value != oldValue) {
			this._markerCollisionAvoidance = value;
			this.onPropertyUpdated(CategoryChart.markerCollisionAvoidancePropertyName, enumGetBox<CategorySeriesMarkerCollisionAvoidance>(CategorySeriesMarkerCollisionAvoidance_$type, oldValue), enumGetBox<CategorySeriesMarkerCollisionAvoidance>(CategorySeriesMarkerCollisionAvoidance_$type, this.markerCollisionAvoidance));
		}
	}
	private static readonly isTransitionInEnabledPropertyName: string = "IsTransitionInEnabled";
	private _isTransitionInEnabled: boolean = false;
	get isTransitionInEnabled(): boolean {
		return this._isTransitionInEnabled;
	}
	set isTransitionInEnabled(value: boolean) {
		let oldValue: boolean = this.isTransitionInEnabled;
		if (value != oldValue) {
			this._isTransitionInEnabled = value;
			this.onPropertyUpdated(CategoryChart.isTransitionInEnabledPropertyName, oldValue, this.isTransitionInEnabled);
		}
	}
	private static readonly transitionInModePropertyName: string = "TransitionInMode";
	private _transitionInMode: CategoryTransitionInMode = <CategoryTransitionInMode>0;
	get transitionInMode(): CategoryTransitionInMode {
		return this._transitionInMode;
	}
	set transitionInMode(value: CategoryTransitionInMode) {
		let oldValue: CategoryTransitionInMode = this.transitionInMode;
		if (value != oldValue) {
			this._transitionInMode = value;
			this.onPropertyUpdated(CategoryChart.transitionInModePropertyName, enumGetBox<CategoryTransitionInMode>(CategoryTransitionInMode_$type, oldValue), enumGetBox<CategoryTransitionInMode>(CategoryTransitionInMode_$type, this.transitionInMode));
		}
	}
	private static readonly transitionInSpeedTypePropertyName: string = "TransitionInSpeedType";
	private _transitionInSpeedType: TransitionInSpeedType = <TransitionInSpeedType>0;
	get transitionInSpeedType(): TransitionInSpeedType {
		return this._transitionInSpeedType;
	}
	set transitionInSpeedType(value: TransitionInSpeedType) {
		let oldValue: TransitionInSpeedType = this.transitionInSpeedType;
		if (value != oldValue) {
			this._transitionInSpeedType = value;
			this.onPropertyUpdated(CategoryChart.transitionInSpeedTypePropertyName, enumGetBox<TransitionInSpeedType>(TransitionInSpeedType_$type, oldValue), enumGetBox<TransitionInSpeedType>(TransitionInSpeedType_$type, this.transitionInSpeedType));
		}
	}
	private static readonly xAxisIntervalPropertyName: string = "XAxisInterval";
	private _xAxisInterval: number = 0;
	get xAxisInterval(): number {
		return this._xAxisInterval;
	}
	set xAxisInterval(value: number) {
		let oldValue: number = this.xAxisInterval;
		if (value != oldValue) {
			this._xAxisInterval = value;
			this.onPropertyUpdated(CategoryChart.xAxisIntervalPropertyName, oldValue, this.xAxisInterval);
		}
	}
	private static readonly xAxisMinorIntervalPropertyName: string = "XAxisMinorInterval";
	private _xAxisMinorInterval: number = 0;
	get xAxisMinorInterval(): number {
		return this._xAxisMinorInterval;
	}
	set xAxisMinorInterval(value: number) {
		let oldValue: number = this.xAxisMinorInterval;
		if (value != oldValue) {
			this._xAxisMinorInterval = value;
			this.onPropertyUpdated(CategoryChart.xAxisMinorIntervalPropertyName, oldValue, this.xAxisMinorInterval);
		}
	}
	private static readonly xAxisGapPropertyName: string = "XAxisGap";
	private _xAxisGap: number = 0;
	get xAxisGap(): number {
		return this._xAxisGap;
	}
	set xAxisGap(value: number) {
		let oldValue: number = this.xAxisGap;
		if (value != oldValue) {
			this._xAxisGap = value;
			this.onPropertyUpdated(CategoryChart.xAxisGapPropertyName, oldValue, this.xAxisGap);
		}
	}
	private static readonly xAxisOverlapPropertyName: string = "XAxisOverlap";
	private _xAxisOverlap: number = 0;
	get xAxisOverlap(): number {
		return this._xAxisOverlap;
	}
	set xAxisOverlap(value: number) {
		let oldValue: number = this.xAxisOverlap;
		if (value != oldValue) {
			this._xAxisOverlap = value;
			this.onPropertyUpdated(CategoryChart.xAxisOverlapPropertyName, oldValue, this.xAxisOverlap);
		}
	}
	private static readonly yAxisIntervalPropertyName: string = "YAxisInterval";
	private _yAxisInterval: number = NaN;
	get yAxisInterval(): number {
		return this._yAxisInterval;
	}
	set yAxisInterval(value: number) {
		let oldValue: number = this.yAxisInterval;
		if (value != oldValue) {
			this._yAxisInterval = value;
			this.onPropertyUpdated(CategoryChart.yAxisIntervalPropertyName, oldValue, this.yAxisInterval);
		}
	}
	private static readonly yAxisIsLogarithmicPropertyName: string = "YAxisIsLogarithmic";
	private _yAxisIsLogarithmic: boolean = false;
	get yAxisIsLogarithmic(): boolean {
		return this._yAxisIsLogarithmic;
	}
	set yAxisIsLogarithmic(value: boolean) {
		let oldValue: boolean = this.yAxisIsLogarithmic;
		if (value != oldValue) {
			this._yAxisIsLogarithmic = value;
			this.onPropertyUpdated(CategoryChart.yAxisIsLogarithmicPropertyName, oldValue, this.yAxisIsLogarithmic);
		}
	}
	private static readonly yAxisLogarithmBasePropertyName: string = "YAxisLogarithmBase";
	private _yAxisLogarithmBase: number = 10;
	get yAxisLogarithmBase(): number {
		return this._yAxisLogarithmBase;
	}
	set yAxisLogarithmBase(value: number) {
		let oldValue: number = this.yAxisLogarithmBase;
		if (value != oldValue) {
			this._yAxisLogarithmBase = value;
			this.onPropertyUpdated(CategoryChart.yAxisLogarithmBasePropertyName, oldValue, this.yAxisLogarithmBase);
		}
	}
	private static readonly yAxisMinimumValuePropertyName: string = "YAxisMinimumValue";
	private _yAxisMinimumValue: number = NaN;
	get yAxisMinimumValue(): number {
		return this._yAxisMinimumValue;
	}
	set yAxisMinimumValue(value: number) {
		let oldValue: number = this.yAxisMinimumValue;
		if (value != oldValue) {
			this._yAxisMinimumValue = value;
			this.onPropertyUpdated(CategoryChart.yAxisMinimumValuePropertyName, oldValue, this.yAxisMinimumValue);
		}
	}
	private static readonly yAxisMaximumValuePropertyName: string = "YAxisMaximumValue";
	private _yAxisMaximumValue: number = NaN;
	get yAxisMaximumValue(): number {
		return this._yAxisMaximumValue;
	}
	set yAxisMaximumValue(value: number) {
		let oldValue: number = this.yAxisMaximumValue;
		if (value != oldValue) {
			this._yAxisMaximumValue = value;
			this.onPropertyUpdated(CategoryChart.yAxisMaximumValuePropertyName, oldValue, this.yAxisMaximumValue);
		}
	}
	private static readonly yAxisMinorIntervalPropertyName: string = "YAxisMinorInterval";
	private _yAxisMinorInterval: number = 0;
	get yAxisMinorInterval(): number {
		return this._yAxisMinorInterval;
	}
	set yAxisMinorInterval(value: number) {
		let oldValue: number = this.yAxisMinorInterval;
		if (value != oldValue) {
			this._yAxisMinorInterval = value;
			this.onPropertyUpdated(CategoryChart.yAxisMinorIntervalPropertyName, oldValue, this.yAxisMinorInterval);
		}
	}
	get xAxisActualMinimum(): number {
		return this.xAxis.actualMinimum;
	}
	get xAxisActualMaximum(): number {
		return this.xAxis.actualMaximum;
	}
	get yAxisActualMinimum(): number {
		return this.yAxis.actualMinimumValue;
	}
	get yAxisActualMaximum(): number {
		return this.yAxis.actualMaximumValue;
	}
	private static readonly negativeBrushesPropertyName: string = "NegativeBrushes";
	private _negativeBrushes: BrushCollection = null;
	get negativeBrushes(): BrushCollection {
		return this._negativeBrushes;
	}
	set negativeBrushes(value: BrushCollection) {
		let oldValue: BrushCollection = this.negativeBrushes;
		if (value != oldValue) {
			this._negativeBrushes = value;
			this.onPropertyUpdated(CategoryChart.negativeBrushesPropertyName, oldValue, this.negativeBrushes);
		}
	}
	private static readonly negativeOutlinesPropertyName: string = "NegativeOutlines";
	private _negativeOutlines: BrushCollection = null;
	get negativeOutlines(): BrushCollection {
		return this._negativeOutlines;
	}
	set negativeOutlines(value: BrushCollection) {
		let oldValue: BrushCollection = this.negativeOutlines;
		if (value != oldValue) {
			this._negativeOutlines = value;
			this.onPropertyUpdated(CategoryChart.negativeOutlinesPropertyName, oldValue, this.negativeOutlines);
		}
	}
	private static readonly yAxisAbbreviateLargeNumbersPropertyName: string = "YAxisAbbreviateLargeNumbers";
	private _yAxisAbbreviateLargeNumbers: boolean = true;
	get yAxisAbbreviateLargeNumbers(): boolean {
		return this._yAxisAbbreviateLargeNumbers;
	}
	set yAxisAbbreviateLargeNumbers(value: boolean) {
		let oldValue: boolean = this.yAxisAbbreviateLargeNumbers;
		if (value != oldValue) {
			this._yAxisAbbreviateLargeNumbers = value;
			this.onPropertyUpdated(CategoryChart.yAxisAbbreviateLargeNumbersPropertyName, oldValue, this.yAxisAbbreviateLargeNumbers);
		}
	}
	protected static readonly isCategoryHighlightingEnabledPropertyName: string = "IsCategoryHighlightingEnabled";
	private _isCategoryHighlightingEnabled: boolean = false;
	get isCategoryHighlightingEnabled(): boolean {
		return this._isCategoryHighlightingEnabled;
	}
	set isCategoryHighlightingEnabled(value: boolean) {
		let oldValue = this.isCategoryHighlightingEnabled;
		if (value != oldValue) {
			this._isCategoryHighlightingEnabled = value;
			this.onPropertyUpdated(CategoryChart.isCategoryHighlightingEnabledPropertyName, oldValue, this.isCategoryHighlightingEnabled);
		}
	}
	protected static readonly isItemHighlightingEnabledPropertyName: string = "IsItemHighlightingEnabled";
	private _isItemHighlightingEnabled: boolean = false;
	get isItemHighlightingEnabled(): boolean {
		return this._isItemHighlightingEnabled;
	}
	set isItemHighlightingEnabled(value: boolean) {
		let oldValue = this.isItemHighlightingEnabled;
		if (value != oldValue) {
			this._isItemHighlightingEnabled = value;
			this.onPropertyUpdated(CategoryChart.isItemHighlightingEnabledPropertyName, oldValue, this.isItemHighlightingEnabled);
		}
	}
	constructor() {
		super();
		this.ensureAxesInitialized();
	}
	protected get_supportedDataSeries(): List$1<DataSeriesType> {
		let ret: List$1<DataSeriesType> = new List$1<DataSeriesType>(DataSeriesType_$type, 0);
		if (TypeRegistrar.isRegistered("AreaSeries")) {
			ret.add(DataSeriesType.Area);
		}
		if (TypeRegistrar.isRegistered("ColumnSeries")) {
			ret.add(DataSeriesType.Column);
		}
		if (TypeRegistrar.isRegistered("LineSeries")) {
			ret.add(DataSeriesType.Line);
		}
		if (TypeRegistrar.isRegistered("PointSeries")) {
			ret.add(DataSeriesType.Point);
		}
		if (TypeRegistrar.isRegistered("SplineSeries")) {
			ret.add(DataSeriesType.Spline);
		}
		if (TypeRegistrar.isRegistered("SplineAreaSeries")) {
			ret.add(DataSeriesType.SplineArea);
		}
		if (TypeRegistrar.isRegistered("StepAreaSeries")) {
			ret.add(DataSeriesType.StepArea);
		}
		if (TypeRegistrar.isRegistered("StepLineSeries")) {
			ret.add(DataSeriesType.StepLine);
		}
		if (TypeRegistrar.isRegistered("WaterfallSeries")) {
			ret.add(DataSeriesType.Waterfall);
		}
		return ret;
	}
	protected get supportedDataSeries(): List$1<DataSeriesType> {
		return this.get_supportedDataSeries();
	}
	private handleXAxisPropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (e.propertyName) {
			case "ActualMinimum":
			this.raisePropertyChanged("XAxisActualMinimum");
			break;

			case "ActualMaximum":
			this.raisePropertyChanged("XAxisActualMaximum");
			break;

		}

	}
	private handleYAxisPropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (e.propertyName) {
			case "ActualMinimumValue":
			this.raisePropertyChanged("YAxisActualMinimum");
			break;

			case "ActualMaximumValue":
			this.raisePropertyChanged("YAxisActualMaximum");
			break;

		}

	}
	protected repopulateSeriesFromDataAdapter(): void {
		super.repopulateSeriesFromDataAdapter();
		this.xAxis.label = this.xAxisLabel == null ? XYChart.getXAxisLabel(this.xAxis, this.dataAdapter.dataSeries) : this.xAxisLabel;
		this.xAxis.itemsSource = this.dataChart != null && this.dataChart.series.count > 0 ? this.dataChart.series._inner[0].itemsSource : null;
	}
	private _xAxis: CategoryXAxis;
	private get xAxis(): CategoryXAxis {
		return this._xAxis;
	}
	private set xAxis(value: CategoryXAxis) {
		this._xAxis = value;
	}
	private _yAxis: NumericYAxis;
	private get yAxis(): NumericYAxis {
		return this._yAxis;
	}
	private set yAxis(value: NumericYAxis) {
		this._yAxis = value;
	}
	private seriesFromChartType(chartType: CategoryChartType, suggestedType: DataSeriesType): HorizontalAnchoredCategorySeries {
		switch (chartType) {
			case CategoryChartType.Column: return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(DataSeriesType.Column);
			case CategoryChartType.Point: return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(DataSeriesType.Point);
			case CategoryChartType.Line: return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(DataSeriesType.Line);
			case CategoryChartType.Area: return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(DataSeriesType.Area);
			case CategoryChartType.Spline: return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(DataSeriesType.Spline);
			case CategoryChartType.SplineArea: return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(DataSeriesType.SplineArea);
			case CategoryChartType.StepLine: return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(DataSeriesType.StepLine);
			case CategoryChartType.StepArea: return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(DataSeriesType.StepArea);
			case CategoryChartType.Waterfall: return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(DataSeriesType.Waterfall);
			case CategoryChartType.Auto: return <HorizontalAnchoredCategorySeries>this.getSeriesFromSuggestedSeriesType(suggestedType);
			default:
			Debug.fail("unrecognized ChartType.");
			return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(DataSeriesType.Column);

		}

	}
	private getSeriesFromSuggestedSeriesType(suggestedType: DataSeriesType): HorizontalAnchoredCategorySeries {
		return <HorizontalAnchoredCategorySeries>this.getSeriesFromExternalChart(suggestedType);
	}
	protected getSeriesType(ds: DataSeries): DataSeriesType {
		switch (this.chartType) {
			case CategoryChartType.Area: return DataSeriesType.Area;
			case CategoryChartType.Line: return DataSeriesType.Line;
			case CategoryChartType.Point: return DataSeriesType.Point;
			case CategoryChartType.Spline: return DataSeriesType.Spline;
			case CategoryChartType.SplineArea: return DataSeriesType.SplineArea;
			case CategoryChartType.StepArea: return DataSeriesType.StepArea;
			case CategoryChartType.StepLine: return DataSeriesType.StepLine;
			case CategoryChartType.Waterfall: return DataSeriesType.Waterfall;
			case CategoryChartType.Auto: return ds.suggestedSeries;
			default:

			case CategoryChartType.Column: return DataSeriesType.Column;
		}

	}
	protected createSeries(ds: DataSeries, resolvedSeries: DataSeriesType): Series {
		let series: HorizontalAnchoredCategorySeries = this.seriesFromChartType(this.chartType, ds.suggestedSeries);
		series.valueMemberPath = ds.findMatchingHint(DataSeriesIntent.PrimarySeriesValue).path;
		series.xAxis = this.xAxis;
		series.yAxis = this.yAxis;
		return series;
	}
	protected repopulateAxisBasedOn(ds: DataSeries): void {
		if (ds.suggestedSecondaryAxis == DataSeriesAxisType.Logarithmic) {
			this.yAxis.isLogarithmic = true;
			this.yAxis.logarithmBase = 10;
		}
	}
	protected resetAxes(): void {
		this.yAxis.isLogarithmic = this.yAxisIsLogarithmic;
		this.yAxis.logarithmBase = this.yAxisLogarithmBase;
	}
	protected get_supportedDataRules(): List$1<IDataSeriesAdapterRule> {
		return ((() => {
			let $ret = new List$1<IDataSeriesAdapterRule>(IDataSeriesAdapterRule_$type, 0);
			$ret.add(new SimpleCategorySeriesRule());
			$ret.add(new SubCollectionsRule());
			return $ret;
		})());
	}
	protected get supportedDataRules(): List$1<IDataSeriesAdapterRule> {
		return this.get_supportedDataRules();
	}
	protected applyMarkers(series: Series, index: number): void {
		let horace: HorizontalAnchoredCategorySeries = typeCast<HorizontalAnchoredCategorySeries>((<any>HorizontalAnchoredCategorySeries).$type, series);
		if (horace != null) {
			horace.markerCollisionAvoidance = this.markerCollisionAvoidance;
			horace.markerType = this.resolveMarkerType(series, index);
		}
	}
	private forEachSeries2(action: (arg1: HorizontalAnchoredCategorySeries) => void): void {
		this.forEachSeries3((series: HorizontalAnchoredCategorySeries, index: number) => action(series));
	}
	private forEachSeries3(action: (arg1: HorizontalAnchoredCategorySeries, arg2: number) => void): void {
		if (this.dataChart == null) {
			return;
		}
		for (let ii: number = 0; ii < this.dataChart.series.count; ii++) {
			let series = typeCast<HorizontalAnchoredCategorySeries>((<any>HorizontalAnchoredCategorySeries).$type, this.dataChart.series._inner[ii]);
			if (series == null) {
				continue;
			}
			action(series, ii);
		}
	}
	protected getXAxis(): Axis {
		return this.xAxis;
	}
	protected getYAxis(): Axis {
		return this.yAxis;
	}
	private createCategoryHighlightLayer(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.CategoryHighlightLayer);
	}
	private createCategoryItemHighlightLayer(): Series {
		return this.getSeriesFromExternalChart(DataSeriesType.CategoryItemHighlightLayer);
	}
	protected getAnnotationLayers(namePrefix: string, includeSecondaryLayers: boolean): List$1<Series> {
		let baseAnnotationLayersToAdd = super.getAnnotationLayers(namePrefix, includeSecondaryLayers);
		if (baseAnnotationLayersToAdd != null) {
			let annotationLayersToAdd = new List$1<Series>((<any>Series).$type, 0);
			if (this._isCategoryHighlightingEnabled) {
				annotationLayersToAdd.add(this.createCategoryHighlightLayer());
			}
			if (this._isItemHighlightingEnabled) {
				annotationLayersToAdd.add(this.createCategoryItemHighlightLayer());
			}
			for (let i = 0; i < annotationLayersToAdd.count; i++) {
				let annotationSeries = annotationLayersToAdd._inner[i];
				annotationSeries.name = namePrefix + getInstanceType(annotationSeries).typeName;
				baseAnnotationLayersToAdd.add(annotationSeries);
			}
		}
		return baseAnnotationLayersToAdd;
	}
	protected setCalloutMemberPaths(callout: Series, targetSeries: Series, dataSeries: DataSeries): void {
		super.setCalloutMemberPaths(callout, targetSeries, dataSeries);
		if (this.dataAdapter.dataSeries.count > 0) {
			if (stringIsNullOrEmpty(this.calloutsXMemberPath)) {
				this.annotationLayerProxy.setXMemberPath(callout, dataSeries.getMemberPathFor(DataSeriesIntent.AxisLabelValue));
			}
			if (stringIsNullOrEmpty(this.calloutsYMemberPath)) {
				this.annotationLayerProxy.setYMemberPath(callout, dataSeries.getMemberPathFor(DataSeriesIntent.PrimarySeriesValue));
			}
			if (stringIsNullOrEmpty(this.calloutsLabelMemberPath)) {
				this.annotationLayerProxy.setLabelMemberPath(callout, dataSeries.getMemberPathFor(DataSeriesIntent.PrimarySeriesValue));
			}
			if (stringIsNullOrEmpty(this.calloutsContentMemberPath)) {
				this.annotationLayerProxy.setContentMemberPath(callout, dataSeries.getMemberPathFor(DataSeriesIntent.PrimarySeriesValue));
			}
		}
	}
	protected onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyUpdated(propertyName, oldValue, newValue);
		switch (propertyName) {
			case CategoryChart.chartTypePropertyName:
			this.repopulateSeriesFromDataAdapter();
			break;

			case CategoryChart.markerCollisionAvoidancePropertyName:
			this.forEachSeries2((series: HorizontalAnchoredCategorySeries) => series.markerCollisionAvoidance = this.markerCollisionAvoidance);
			break;

			case CategoryChart.isTransitionInEnabledPropertyName:
			this.forEachSeries2((series: HorizontalAnchoredCategorySeries) => series.isTransitionInEnabled = this.isTransitionInEnabled);
			break;

			case CategoryChart.transitionInModePropertyName:
			this.forEachSeries2((series: HorizontalAnchoredCategorySeries) => series.transitionInMode = this.transitionInMode);
			break;

			case CategoryChart.transitionInSpeedTypePropertyName:
			this.forEachSeries2((series: HorizontalAnchoredCategorySeries) => series.transitionInSpeedType = this.transitionInSpeedType);
			break;

			case CategoryChart.xAxisIntervalPropertyName:
			this.xAxis.interval = this.xAxisInterval;
			break;

			case CategoryChart.xAxisMinorIntervalPropertyName:
			this.xAxis.minorInterval = this.xAxisMinorInterval;
			break;

			case CategoryChart.xAxisGapPropertyName:
			this.xAxis.gap = this.xAxisGap;
			break;

			case CategoryChart.xAxisOverlapPropertyName:
			this.xAxis.overlap = this.xAxisOverlap;
			break;

			case CategoryChart.yAxisIntervalPropertyName:
			this.yAxis.interval = this.yAxisInterval;
			break;

			case CategoryChart.yAxisIsLogarithmicPropertyName:
			this.yAxis.isLogarithmic = this.yAxisIsLogarithmic;
			break;

			case CategoryChart.yAxisLogarithmBasePropertyName:
			this.yAxis.logarithmBase = this.yAxisLogarithmBase;
			break;

			case CategoryChart.yAxisMinimumValuePropertyName:
			this.yAxis.minimumValue = this.yAxisMinimumValue;
			break;

			case CategoryChart.yAxisMaximumValuePropertyName:
			this.yAxis.maximumValue = this.yAxisMaximumValue;
			break;

			case CategoryChart.yAxisMinorIntervalPropertyName:
			this.yAxis.minorInterval = this.yAxisMinorInterval;
			break;

			case CategoryChart.negativeBrushesPropertyName:

			case CategoryChart.negativeOutlinesPropertyName:
			this.forEachSeries3((series: HorizontalAnchoredCategorySeries, index: number) => {
				if (series.isNegativeColorSupported) {
					series.setNegativeColors(ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.negativeBrushes, index), ArrayExtension.getModulus$1<Brush>((<any>Brush).$type, this.negativeOutlines, index));
				}
			});
			break;

			case CategoryChart.yAxisAbbreviateLargeNumbersPropertyName:
			this.onYAxis((axis: Axis) => (<NumericYAxis>axis).abbreviateLargeNumbers = this.yAxisAbbreviateLargeNumbers);
			break;

			case CategoryChart.isCategoryHighlightingEnabledPropertyName:

			case CategoryChart.isItemHighlightingEnabledPropertyName:
			this.repopulateSeriesFromDataAdapter();
			break;

		}

	}
}


