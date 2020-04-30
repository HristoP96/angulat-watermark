/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { XYChartDescription } from "./XYChartDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class FinancialChartDescription extends XYChartDescription {
	static $t: Type = markType(FinancialChartDescription, 'FinancialChartDescription', (<any>XYChartDescription).$type);
	private _tooltipTemplateRef: string = null;
	get tooltipTemplateRef(): string {
		return this._tooltipTemplateRef;
	}
	set tooltipTemplateRef(value: string) {
		this._tooltipTemplateRef = value;
		this.markDirty("TooltipTemplateRef");
	}
	private _width: string = null;
	get width(): string {
		return this._width;
	}
	set width(value: string) {
		this._width = value;
		this.markDirty("Width");
	}
	private _height: string = null;
	get height(): string {
		return this._height;
	}
	set height(value: string) {
		this._height = value;
		this.markDirty("Height");
	}
	private _background: string = null;
	get background(): string {
		return this._background;
	}
	set background(value: string) {
		this._background = value;
		this.markDirty("Background");
	}
	protected get_type(): string {
		return "FinancialChart";
	}
	constructor() {
		super();
	}
	private _leftMargin1: number = 0;
	get leftMargin(): number {
		return this._leftMargin1;
	}
	set leftMargin(value: number) {
		this._leftMargin1 = value;
		this.markDirty("LeftMargin");
	}
	private _isHorizontalZoomEnabled1: boolean = false;
	get isHorizontalZoomEnabled(): boolean {
		return this._isHorizontalZoomEnabled1;
	}
	set isHorizontalZoomEnabled(value: boolean) {
		this._isHorizontalZoomEnabled1 = value;
		this.markDirty("IsHorizontalZoomEnabled");
	}
	private _toolbarHeight: number = 0;
	get toolbarHeight(): number {
		return this._toolbarHeight;
	}
	set toolbarHeight(value: number) {
		this._toolbarHeight = value;
		this.markDirty("ToolbarHeight");
	}
	private _yAxisIsLogarithmic: boolean = false;
	get yAxisIsLogarithmic(): boolean {
		return this._yAxisIsLogarithmic;
	}
	set yAxisIsLogarithmic(value: boolean) {
		this._yAxisIsLogarithmic = value;
		this.markDirty("YAxisIsLogarithmic");
	}
	private _yAxisLogarithmBase: number = 0;
	get yAxisLogarithmBase(): number {
		return this._yAxisLogarithmBase;
	}
	set yAxisLogarithmBase(value: number) {
		this._yAxisLogarithmBase = value;
		this.markDirty("YAxisLogarithmBase");
	}
	private _yAxisInterval: number = 0;
	get yAxisInterval(): number {
		return this._yAxisInterval;
	}
	set yAxisInterval(value: number) {
		this._yAxisInterval = value;
		this.markDirty("YAxisInterval");
	}
	private _yAxisMinimumValue: number = 0;
	get yAxisMinimumValue(): number {
		return this._yAxisMinimumValue;
	}
	set yAxisMinimumValue(value: number) {
		this._yAxisMinimumValue = value;
		this.markDirty("YAxisMinimumValue");
	}
	private _yAxisMaximumValue: number = 0;
	get yAxisMaximumValue(): number {
		return this._yAxisMaximumValue;
	}
	set yAxisMaximumValue(value: number) {
		this._yAxisMaximumValue = value;
		this.markDirty("YAxisMaximumValue");
	}
	private _yAxisMinorInterval: number = 0;
	get yAxisMinorInterval(): number {
		return this._yAxisMinorInterval;
	}
	set yAxisMinorInterval(value: number) {
		this._yAxisMinorInterval = value;
		this.markDirty("YAxisMinorInterval");
	}
	private _volumeType: string = null;
	get volumeType(): string {
		return this._volumeType;
	}
	set volumeType(value: string) {
		this._volumeType = value;
		this.markDirty("VolumeType");
	}
	private _xAxisMode: string = null;
	get xAxisMode(): string {
		return this._xAxisMode;
	}
	set xAxisMode(value: string) {
		this._xAxisMode = value;
		this.markDirty("XAxisMode");
	}
	private _yAxisMode: string = null;
	get yAxisMode(): string {
		return this._yAxisMode;
	}
	set yAxisMode(value: string) {
		this._yAxisMode = value;
		this.markDirty("YAxisMode");
	}
	private _isToolbarVisible: boolean = false;
	get isToolbarVisible(): boolean {
		return this._isToolbarVisible;
	}
	set isToolbarVisible(value: boolean) {
		this._isToolbarVisible = value;
		this.markDirty("IsToolbarVisible");
	}
	private _chartType: string = null;
	get chartType(): string {
		return this._chartType;
	}
	set chartType(value: string) {
		this._chartType = value;
		this.markDirty("ChartType");
	}
	private _yAxisLabelHorizontalAlignment1: string = null;
	get yAxisLabelHorizontalAlignment(): string {
		return this._yAxisLabelHorizontalAlignment1;
	}
	set yAxisLabelHorizontalAlignment(value: string) {
		this._yAxisLabelHorizontalAlignment1 = value;
		this.markDirty("YAxisLabelHorizontalAlignment");
	}
	private _isWindowSyncedToVisibleRange: boolean = false;
	get isWindowSyncedToVisibleRange(): boolean {
		return this._isWindowSyncedToVisibleRange;
	}
	set isWindowSyncedToVisibleRange(value: boolean) {
		this._isWindowSyncedToVisibleRange = value;
		this.markDirty("IsWindowSyncedToVisibleRange");
	}
	private _indicatorTypes: string[] = null;
	get indicatorTypes(): string[] {
		return this._indicatorTypes;
	}
	set indicatorTypes(value: string[]) {
		this._indicatorTypes = value;
		this.markDirty("IndicatorTypes");
	}
	private _overlayTypes: string[] = null;
	get overlayTypes(): string[] {
		return this._overlayTypes;
	}
	set overlayTypes(value: string[]) {
		this._overlayTypes = value;
		this.markDirty("OverlayTypes");
	}
	private _yAxisAbbreviateLargeNumbers: boolean = false;
	get yAxisAbbreviateLargeNumbers(): boolean {
		return this._yAxisAbbreviateLargeNumbers;
	}
	set yAxisAbbreviateLargeNumbers(value: boolean) {
		this._yAxisAbbreviateLargeNumbers = value;
		this.markDirty("YAxisAbbreviateLargeNumbers");
	}
	private _resolution1: number = 0;
	get resolution(): number {
		return this._resolution1;
	}
	set resolution(value: number) {
		this._resolution1 = value;
		this.markDirty("Resolution");
	}
	private _yAxisLabelLocation1: string = null;
	get yAxisLabelLocation(): string {
		return this._yAxisLabelLocation1;
	}
	set yAxisLabelLocation(value: string) {
		this._yAxisLabelLocation1 = value;
		this.markDirty("YAxisLabelLocation");
	}
	private _zoomSliderType: string = null;
	get zoomSliderType(): string {
		return this._zoomSliderType;
	}
	set zoomSliderType(value: string) {
		this._zoomSliderType = value;
		this.markDirty("ZoomSliderType");
	}
	private _negativeBrushes: string[] = null;
	get negativeBrushes(): string[] {
		return this._negativeBrushes;
	}
	set negativeBrushes(value: string[]) {
		this._negativeBrushes = value;
		this.markDirty("NegativeBrushes");
	}
	private _negativeOutlines: string[] = null;
	get negativeOutlines(): string[] {
		return this._negativeOutlines;
	}
	set negativeOutlines(value: string[]) {
		this._negativeOutlines = value;
		this.markDirty("NegativeOutlines");
	}
	private _overlayBrushes: string[] = null;
	get overlayBrushes(): string[] {
		return this._overlayBrushes;
	}
	set overlayBrushes(value: string[]) {
		this._overlayBrushes = value;
		this.markDirty("OverlayBrushes");
	}
	private _overlayOutlines: string[] = null;
	get overlayOutlines(): string[] {
		return this._overlayOutlines;
	}
	set overlayOutlines(value: string[]) {
		this._overlayOutlines = value;
		this.markDirty("OverlayOutlines");
	}
	private _volumeOutlines: string[] = null;
	get volumeOutlines(): string[] {
		return this._volumeOutlines;
	}
	set volumeOutlines(value: string[]) {
		this._volumeOutlines = value;
		this.markDirty("VolumeOutlines");
	}
	private _volumeBrushes: string[] = null;
	get volumeBrushes(): string[] {
		return this._volumeBrushes;
	}
	set volumeBrushes(value: string[]) {
		this._volumeBrushes = value;
		this.markDirty("VolumeBrushes");
	}
	private _indicatorNegativeBrushes: string[] = null;
	get indicatorNegativeBrushes(): string[] {
		return this._indicatorNegativeBrushes;
	}
	set indicatorNegativeBrushes(value: string[]) {
		this._indicatorNegativeBrushes = value;
		this.markDirty("IndicatorNegativeBrushes");
	}
	private _indicatorBrushes: string[] = null;
	get indicatorBrushes(): string[] {
		return this._indicatorBrushes;
	}
	set indicatorBrushes(value: string[]) {
		this._indicatorBrushes = value;
		this.markDirty("IndicatorBrushes");
	}
	private _volumeThickness: number = 0;
	get volumeThickness(): number {
		return this._volumeThickness;
	}
	set volumeThickness(value: number) {
		this._volumeThickness = value;
		this.markDirty("VolumeThickness");
	}
	private _overlayThickness: number = 0;
	get overlayThickness(): number {
		return this._overlayThickness;
	}
	set overlayThickness(value: number) {
		this._overlayThickness = value;
		this.markDirty("OverlayThickness");
	}
	private _indicatorThickness: number = 0;
	get indicatorThickness(): number {
		return this._indicatorThickness;
	}
	set indicatorThickness(value: number) {
		this._indicatorThickness = value;
		this.markDirty("IndicatorThickness");
	}
	private _indicatorDisplayTypes: string[] = null;
	get indicatorDisplayTypes(): string[] {
		return this._indicatorDisplayTypes;
	}
	set indicatorDisplayTypes(value: string[]) {
		this._indicatorDisplayTypes = value;
		this.markDirty("IndicatorDisplayTypes");
	}
	private _indicatorPeriod: number = 0;
	get indicatorPeriod(): number {
		return this._indicatorPeriod;
	}
	set indicatorPeriod(value: number) {
		this._indicatorPeriod = value;
		this.markDirty("IndicatorPeriod");
	}
	private _indicatorMultiplier: number = 0;
	get indicatorMultiplier(): number {
		return this._indicatorMultiplier;
	}
	set indicatorMultiplier(value: number) {
		this._indicatorMultiplier = value;
		this.markDirty("IndicatorMultiplier");
	}
	private _indicatorSmoothingPeriod: number = 0;
	get indicatorSmoothingPeriod(): number {
		return this._indicatorSmoothingPeriod;
	}
	set indicatorSmoothingPeriod(value: number) {
		this._indicatorSmoothingPeriod = value;
		this.markDirty("IndicatorSmoothingPeriod");
	}
	private _indicatorShortPeriod: number = 0;
	get indicatorShortPeriod(): number {
		return this._indicatorShortPeriod;
	}
	set indicatorShortPeriod(value: number) {
		this._indicatorShortPeriod = value;
		this.markDirty("IndicatorShortPeriod");
	}
	private _indicatorLongPeriod: number = 0;
	get indicatorLongPeriod(): number {
		return this._indicatorLongPeriod;
	}
	set indicatorLongPeriod(value: number) {
		this._indicatorLongPeriod = value;
		this.markDirty("IndicatorLongPeriod");
	}
	private _indicatorSignalPeriod: number = 0;
	get indicatorSignalPeriod(): number {
		return this._indicatorSignalPeriod;
	}
	set indicatorSignalPeriod(value: number) {
		this._indicatorSignalPeriod = value;
		this.markDirty("IndicatorSignalPeriod");
	}
	private _rangeSelectorOptions: string[] = null;
	get rangeSelectorOptions(): string[] {
		return this._rangeSelectorOptions;
	}
	set rangeSelectorOptions(value: string[]) {
		this._rangeSelectorOptions = value;
		this.markDirty("RangeSelectorOptions");
	}
	private _customIndicatorNames: string[] = null;
	get customIndicatorNames(): string[] {
		return this._customIndicatorNames;
	}
	set customIndicatorNames(value: string[]) {
		this._customIndicatorNames = value;
		this.markDirty("CustomIndicatorNames");
	}
	private _isVerticalZoomEnabled1: boolean = false;
	get isVerticalZoomEnabled(): boolean {
		return this._isVerticalZoomEnabled1;
	}
	set isVerticalZoomEnabled(value: boolean) {
		this._isVerticalZoomEnabled1 = value;
		this.markDirty("IsVerticalZoomEnabled");
	}
	private _zoomSliderXAxisMajorStroke: string = null;
	get zoomSliderXAxisMajorStroke(): string {
		return this._zoomSliderXAxisMajorStroke;
	}
	set zoomSliderXAxisMajorStroke(value: string) {
		this._zoomSliderXAxisMajorStroke = value;
		this.markDirty("ZoomSliderXAxisMajorStroke");
	}
	private _zoomSliderXAxisMajorStrokeThickness: number = 0;
	get zoomSliderXAxisMajorStrokeThickness(): number {
		return this._zoomSliderXAxisMajorStrokeThickness;
	}
	set zoomSliderXAxisMajorStrokeThickness(value: number) {
		this._zoomSliderXAxisMajorStrokeThickness = value;
		this.markDirty("ZoomSliderXAxisMajorStrokeThickness");
	}
	private _isLegendVisible: boolean = false;
	get isLegendVisible(): boolean {
		return this._isLegendVisible;
	}
	set isLegendVisible(value: boolean) {
		this._isLegendVisible = value;
		this.markDirty("IsLegendVisible");
	}
	private _xAxisMinimumValue: Date = new Date();
	get xAxisMinimumValue(): Date {
		return this._xAxisMinimumValue;
	}
	set xAxisMinimumValue(value: Date) {
		this._xAxisMinimumValue = value;
		this.markDirty("XAxisMinimumValue");
	}
	private _xAxisMaximumValue: Date = new Date();
	get xAxisMaximumValue(): Date {
		return this._xAxisMaximumValue;
	}
	set xAxisMaximumValue(value: Date) {
		this._xAxisMaximumValue = value;
		this.markDirty("XAxisMaximumValue");
	}
	private _applyCustomIndicators: string = null;
	get applyCustomIndicatorsRef(): string {
		return this._applyCustomIndicators;
	}
	set applyCustomIndicatorsRef(value: string) {
		this._applyCustomIndicators = value;
		this.markDirty("ApplyCustomIndicatorsRef");
	}
}


