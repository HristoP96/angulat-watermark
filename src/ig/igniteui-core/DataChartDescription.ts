/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SeriesViewerDescription } from "./SeriesViewerDescription";
import { Description } from "./Description";
import { AxisDescription } from "./AxisDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DataChartDescription extends SeriesViewerDescription {
	static $t: Type = markType(DataChartDescription, 'DataChartDescription', (<any>SeriesViewerDescription).$type);
	protected get_type(): string {
		return "DataChart";
	}
	constructor() {
		super();
	}
	private _isSquare: boolean = false;
	get isSquare(): boolean {
		return this._isSquare;
	}
	set isSquare(value: boolean) {
		this._isSquare = value;
		this.markDirty("IsSquare");
	}
	private _windowScaleHorizontal: number = 0;
	get windowScaleHorizontal(): number {
		return this._windowScaleHorizontal;
	}
	set windowScaleHorizontal(value: number) {
		this._windowScaleHorizontal = value;
		this.markDirty("WindowScaleHorizontal");
	}
	private _windowScaleVertical: number = 0;
	get windowScaleVertical(): number {
		return this._windowScaleVertical;
	}
	set windowScaleVertical(value: number) {
		this._windowScaleVertical = value;
		this.markDirty("WindowScaleVertical");
	}
	private _actualWindowScaleHorizontal: number = 0;
	get actualWindowScaleHorizontal(): number {
		return this._actualWindowScaleHorizontal;
	}
	set actualWindowScaleHorizontal(value: number) {
		this._actualWindowScaleHorizontal = value;
		this.markDirty("ActualWindowScaleHorizontal");
	}
	private _actualWindowScaleVertical: number = 0;
	get actualWindowScaleVertical(): number {
		return this._actualWindowScaleVertical;
	}
	set actualWindowScaleVertical(value: number) {
		this._actualWindowScaleVertical = value;
		this.markDirty("ActualWindowScaleVertical");
	}
	private _isHorizontalZoomEnabled: boolean = false;
	get isHorizontalZoomEnabled(): boolean {
		return this._isHorizontalZoomEnabled;
	}
	set isHorizontalZoomEnabled(value: boolean) {
		this._isHorizontalZoomEnabled = value;
		this.markDirty("IsHorizontalZoomEnabled");
	}
	private _isVerticalZoomEnabled: boolean = false;
	get isVerticalZoomEnabled(): boolean {
		return this._isVerticalZoomEnabled;
	}
	set isVerticalZoomEnabled(value: boolean) {
		this._isVerticalZoomEnabled = value;
		this.markDirty("IsVerticalZoomEnabled");
	}
	private _gridMode: string = null;
	get gridMode(): string {
		return this._gridMode;
	}
	set gridMode(value: string) {
		this._gridMode = value;
		this.markDirty("GridMode");
	}
	private _alignsGridLinesToPixels: boolean = false;
	get alignsGridLinesToPixels(): boolean {
		return this._alignsGridLinesToPixels;
	}
	set alignsGridLinesToPixels(value: boolean) {
		this._alignsGridLinesToPixels = value;
		this.markDirty("AlignsGridLinesToPixels");
	}
	private _brushes: string[] = null;
	get brushes(): string[] {
		return this._brushes;
	}
	set brushes(value: string[]) {
		this._brushes = value;
		this.markDirty("Brushes");
	}
	private _markerBrushes: string[] = null;
	get markerBrushes(): string[] {
		return this._markerBrushes;
	}
	set markerBrushes(value: string[]) {
		this._markerBrushes = value;
		this.markDirty("MarkerBrushes");
	}
	private _outlines: string[] = null;
	get outlines(): string[] {
		return this._outlines;
	}
	set outlines(value: string[]) {
		this._outlines = value;
		this.markDirty("Outlines");
	}
	private _markerOutlines: string[] = null;
	get markerOutlines(): string[] {
		return this._markerOutlines;
	}
	set markerOutlines(value: string[]) {
		this._markerOutlines = value;
		this.markDirty("MarkerOutlines");
	}
	private _defaultAxisStroke: string = null;
	get defaultAxisStroke(): string {
		return this._defaultAxisStroke;
	}
	set defaultAxisStroke(value: string) {
		this._defaultAxisStroke = value;
		this.markDirty("DefaultAxisStroke");
	}
	private _defaultAxisMajorStroke: string = null;
	get defaultAxisMajorStroke(): string {
		return this._defaultAxisMajorStroke;
	}
	set defaultAxisMajorStroke(value: string) {
		this._defaultAxisMajorStroke = value;
		this.markDirty("DefaultAxisMajorStroke");
	}
	private _defaultAxisMinorStroke: string = null;
	get defaultAxisMinorStroke(): string {
		return this._defaultAxisMinorStroke;
	}
	set defaultAxisMinorStroke(value: string) {
		this._defaultAxisMinorStroke = value;
		this.markDirty("DefaultAxisMinorStroke");
	}
	private _plotAreaMarginLeft: number = 0;
	get plotAreaMarginLeft(): number {
		return this._plotAreaMarginLeft;
	}
	set plotAreaMarginLeft(value: number) {
		this._plotAreaMarginLeft = value;
		this.markDirty("PlotAreaMarginLeft");
	}
	private _plotAreaMarginTop: number = 0;
	get plotAreaMarginTop(): number {
		return this._plotAreaMarginTop;
	}
	set plotAreaMarginTop(value: number) {
		this._plotAreaMarginTop = value;
		this.markDirty("PlotAreaMarginTop");
	}
	private _plotAreaMarginRight: number = 0;
	get plotAreaMarginRight(): number {
		return this._plotAreaMarginRight;
	}
	set plotAreaMarginRight(value: number) {
		this._plotAreaMarginRight = value;
		this.markDirty("PlotAreaMarginRight");
	}
	private _plotAreaMarginBottom: number = 0;
	get plotAreaMarginBottom(): number {
		return this._plotAreaMarginBottom;
	}
	set plotAreaMarginBottom(value: number) {
		this._plotAreaMarginBottom = value;
		this.markDirty("PlotAreaMarginBottom");
	}
	private _axes: AxisDescription[] = null;
	get axes(): AxisDescription[] {
		return this._axes;
	}
	set axes(value: AxisDescription[]) {
		this._axes = value;
		this.markDirty("Axes");
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
}


