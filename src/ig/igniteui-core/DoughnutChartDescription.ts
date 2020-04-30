/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { RingSeriesBaseDescription } from "./RingSeriesBaseDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DoughnutChartDescription extends Description {
	static $t: Type = markType(DoughnutChartDescription, 'DoughnutChartDescription', (<any>Description).$type);
	private _series: RingSeriesBaseDescription[] = null;
	get series(): RingSeriesBaseDescription[] {
		return this._series;
	}
	set series(value: RingSeriesBaseDescription[]) {
		this._series = value;
		this.markDirty("Series");
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
		return "DoughnutChart";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _allowSliceSelection: boolean = false;
	get allowSliceSelection(): boolean {
		return this._allowSliceSelection;
	}
	set allowSliceSelection(value: boolean) {
		this._allowSliceSelection = value;
		this.markDirty("AllowSliceSelection");
	}
	private _isSurfaceInteractionDisabled: boolean = false;
	get isSurfaceInteractionDisabled(): boolean {
		return this._isSurfaceInteractionDisabled;
	}
	set isSurfaceInteractionDisabled(value: boolean) {
		this._isSurfaceInteractionDisabled = value;
		this.markDirty("IsSurfaceInteractionDisabled");
	}
	private _allowSliceExplosion: boolean = false;
	get allowSliceExplosion(): boolean {
		return this._allowSliceExplosion;
	}
	set allowSliceExplosion(value: boolean) {
		this._allowSliceExplosion = value;
		this.markDirty("AllowSliceExplosion");
	}
	private _innerExtent: number = 0;
	get innerExtent(): number {
		return this._innerExtent;
	}
	set innerExtent(value: number) {
		this._innerExtent = value;
		this.markDirty("InnerExtent");
	}
	private _selectedSliceFill: string = null;
	get selectedSliceFill(): string {
		return this._selectedSliceFill;
	}
	set selectedSliceFill(value: string) {
		this._selectedSliceFill = value;
		this.markDirty("SelectedSliceFill");
	}
	private _selectedSliceStroke: string = null;
	get selectedSliceStroke(): string {
		return this._selectedSliceStroke;
	}
	set selectedSliceStroke(value: string) {
		this._selectedSliceStroke = value;
		this.markDirty("SelectedSliceStroke");
	}
	private _selectedSliceStrokeThickness: number = 0;
	get selectedSliceStrokeThickness(): number {
		return this._selectedSliceStrokeThickness;
	}
	set selectedSliceStrokeThickness(value: number) {
		this._selectedSliceStrokeThickness = value;
		this.markDirty("SelectedSliceStrokeThickness");
	}
	private _selectedSliceOpacity: number = 0;
	get selectedSliceOpacity(): number {
		return this._selectedSliceOpacity;
	}
	set selectedSliceOpacity(value: number) {
		this._selectedSliceOpacity = value;
		this.markDirty("SelectedSliceOpacity");
	}
	private _pixelScalingRatio: number = 0;
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		this._pixelScalingRatio = value;
		this.markDirty("PixelScalingRatio");
	}
	private _actualPixelScalingRatio: number = 0;
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		this._actualPixelScalingRatio = value;
		this.markDirty("ActualPixelScalingRatio");
	}
	private _sliceClick: string = null;
	get sliceClickRef(): string {
		return this._sliceClick;
	}
	set sliceClickRef(value: string) {
		this._sliceClick = value;
		this.markDirty("SliceClickRef");
	}
	private _holeDimensionsChanged: string = null;
	get holeDimensionsChangedRef(): string {
		return this._holeDimensionsChanged;
	}
	set holeDimensionsChangedRef(value: string) {
		this._holeDimensionsChanged = value;
		this.markDirty("HoleDimensionsChangedRef");
	}
}


