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
export class CategoryChartDescription extends XYChartDescription {
	static $t: Type = markType(CategoryChartDescription, 'CategoryChartDescription', (<any>XYChartDescription).$type);
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
		return "CategoryChart";
	}
	constructor() {
		super();
	}
	private _transitionInDuration: number = 0;
	get transitionInDuration(): number {
		return this._transitionInDuration;
	}
	set transitionInDuration(value: number) {
		this._transitionInDuration = value;
		this.markDirty("TransitionInDuration");
	}
	private _transitionInEasingFunctionRef: string = null;
	get transitionInEasingFunctionRef(): string {
		return this._transitionInEasingFunctionRef;
	}
	set transitionInEasingFunctionRef(value: string) {
		this._transitionInEasingFunctionRef = value;
		this.markDirty("TransitionInEasingFunctionRef");
	}
	private _chartType: string = null;
	get chartType(): string {
		return this._chartType;
	}
	set chartType(value: string) {
		this._chartType = value;
		this.markDirty("ChartType");
	}
	private _markerCollisionAvoidance: string = null;
	get markerCollisionAvoidance(): string {
		return this._markerCollisionAvoidance;
	}
	set markerCollisionAvoidance(value: string) {
		this._markerCollisionAvoidance = value;
		this.markDirty("MarkerCollisionAvoidance");
	}
	private _isTransitionInEnabled: boolean = false;
	get isTransitionInEnabled(): boolean {
		return this._isTransitionInEnabled;
	}
	set isTransitionInEnabled(value: boolean) {
		this._isTransitionInEnabled = value;
		this.markDirty("IsTransitionInEnabled");
	}
	private _transitionInMode: string = null;
	get transitionInMode(): string {
		return this._transitionInMode;
	}
	set transitionInMode(value: string) {
		this._transitionInMode = value;
		this.markDirty("TransitionInMode");
	}
	private _transitionInSpeedType: string = null;
	get transitionInSpeedType(): string {
		return this._transitionInSpeedType;
	}
	set transitionInSpeedType(value: string) {
		this._transitionInSpeedType = value;
		this.markDirty("TransitionInSpeedType");
	}
	private _xAxisInterval: number = 0;
	get xAxisInterval(): number {
		return this._xAxisInterval;
	}
	set xAxisInterval(value: number) {
		this._xAxisInterval = value;
		this.markDirty("XAxisInterval");
	}
	private _xAxisMinorInterval: number = 0;
	get xAxisMinorInterval(): number {
		return this._xAxisMinorInterval;
	}
	set xAxisMinorInterval(value: number) {
		this._xAxisMinorInterval = value;
		this.markDirty("XAxisMinorInterval");
	}
	private _xAxisGap: number = 0;
	get xAxisGap(): number {
		return this._xAxisGap;
	}
	set xAxisGap(value: number) {
		this._xAxisGap = value;
		this.markDirty("XAxisGap");
	}
	private _xAxisOverlap: number = 0;
	get xAxisOverlap(): number {
		return this._xAxisOverlap;
	}
	set xAxisOverlap(value: number) {
		this._xAxisOverlap = value;
		this.markDirty("XAxisOverlap");
	}
	private _yAxisInterval: number = 0;
	get yAxisInterval(): number {
		return this._yAxisInterval;
	}
	set yAxisInterval(value: number) {
		this._yAxisInterval = value;
		this.markDirty("YAxisInterval");
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
	private _yAxisAbbreviateLargeNumbers: boolean = false;
	get yAxisAbbreviateLargeNumbers(): boolean {
		return this._yAxisAbbreviateLargeNumbers;
	}
	set yAxisAbbreviateLargeNumbers(value: boolean) {
		this._yAxisAbbreviateLargeNumbers = value;
		this.markDirty("YAxisAbbreviateLargeNumbers");
	}
	private _isCategoryHighlightingEnabled: boolean = false;
	get isCategoryHighlightingEnabled(): boolean {
		return this._isCategoryHighlightingEnabled;
	}
	set isCategoryHighlightingEnabled(value: boolean) {
		this._isCategoryHighlightingEnabled = value;
		this.markDirty("IsCategoryHighlightingEnabled");
	}
	private _isItemHighlightingEnabled: boolean = false;
	get isItemHighlightingEnabled(): boolean {
		return this._isItemHighlightingEnabled;
	}
	set isItemHighlightingEnabled(value: boolean) {
		this._isItemHighlightingEnabled = value;
		this.markDirty("IsItemHighlightingEnabled");
	}
}


