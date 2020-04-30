/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TileGeneratorDescription } from "./TileGeneratorDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class HeatTileGeneratorDescription extends TileGeneratorDescription {
	static $t: Type = markType(HeatTileGeneratorDescription, 'HeatTileGeneratorDescription', (<any>TileGeneratorDescription).$type);
	protected get_type(): string {
		return "HeatTileGenerator";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _yValues: number[] = null;
	get yValues(): number[] {
		return this._yValues;
	}
	set yValues(value: number[]) {
		this._yValues = value;
		this.markDirty("YValues");
	}
	private _xValues: number[] = null;
	get xValues(): number[] {
		return this._xValues;
	}
	set xValues(value: number[]) {
		this._xValues = value;
		this.markDirty("XValues");
	}
	private _values: number[] = null;
	get values(): number[] {
		return this._values;
	}
	set values(value: number[]) {
		this._values = value;
		this.markDirty("Values");
	}
	private _minimumColor: string = null;
	get minimumColor(): string {
		return this._minimumColor;
	}
	set minimumColor(value: string) {
		this._minimumColor = value;
		this.markDirty("MinimumColor");
	}
	private _maximumColor: string = null;
	get maximumColor(): string {
		return this._maximumColor;
	}
	set maximumColor(value: string) {
		this._maximumColor = value;
		this.markDirty("MaximumColor");
	}
	private _scaleColors: string[] = null;
	get scaleColors(): string[] {
		return this._scaleColors;
	}
	set scaleColors(value: string[]) {
		this._scaleColors = value;
		this.markDirty("ScaleColors");
	}
	private _scaleColorOffsets: number[] = null;
	get scaleColorOffsets(): number[] {
		return this._scaleColorOffsets;
	}
	set scaleColorOffsets(value: number[]) {
		this._scaleColorOffsets = value;
		this.markDirty("ScaleColorOffsets");
	}
	private _blurRadius: number = 0;
	get blurRadius(): number {
		return this._blurRadius;
	}
	set blurRadius(value: number) {
		this._blurRadius = value;
		this.markDirty("BlurRadius");
	}
	private _maxBlurRadius: number = 0;
	get maxBlurRadius(): number {
		return this._maxBlurRadius;
	}
	set maxBlurRadius(value: number) {
		this._maxBlurRadius = value;
		this.markDirty("MaxBlurRadius");
	}
	private _useBlurRadiusAdjustedForZoom: boolean = false;
	get useBlurRadiusAdjustedForZoom(): boolean {
		return this._useBlurRadiusAdjustedForZoom;
	}
	set useBlurRadiusAdjustedForZoom(value: boolean) {
		this._useBlurRadiusAdjustedForZoom = value;
		this.markDirty("UseBlurRadiusAdjustedForZoom");
	}
	private _useGlobalMinMax: boolean = false;
	get useGlobalMinMax(): boolean {
		return this._useGlobalMinMax;
	}
	set useGlobalMinMax(value: boolean) {
		this._useGlobalMinMax = value;
		this.markDirty("UseGlobalMinMax");
	}
	private _useGlobalMinMaxAdjustedForZoom: boolean = false;
	get useGlobalMinMaxAdjustedForZoom(): boolean {
		return this._useGlobalMinMaxAdjustedForZoom;
	}
	set useGlobalMinMaxAdjustedForZoom(value: boolean) {
		this._useGlobalMinMaxAdjustedForZoom = value;
		this.markDirty("UseGlobalMinMaxAdjustedForZoom");
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
		this.markDirty("MinimumValue");
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
		this.markDirty("MaximumValue");
	}
	private _logarithmBase: number = 0;
	get logarithmBase(): number {
		return this._logarithmBase;
	}
	set logarithmBase(value: number) {
		this._logarithmBase = value;
		this.markDirty("LogarithmBase");
	}
	private _useLogarithmicScale: boolean = false;
	get useLogarithmicScale(): boolean {
		return this._useLogarithmicScale;
	}
	set useLogarithmicScale(value: boolean) {
		this._useLogarithmicScale = value;
		this.markDirty("UseLogarithmicScale");
	}
	private _useWebWorkers: boolean = false;
	get useWebWorkers(): boolean {
		return this._useWebWorkers;
	}
	set useWebWorkers(value: boolean) {
		this._useWebWorkers = value;
		this.markDirty("UseWebWorkers");
	}
	private _webWorkerScriptPath: string = null;
	get webWorkerScriptPath(): string {
		return this._webWorkerScriptPath;
	}
	set webWorkerScriptPath(value: string) {
		this._webWorkerScriptPath = value;
		this.markDirty("WebWorkerScriptPath");
	}
	private _webWorkerInstanceRef: string = null;
	get webWorkerInstanceRef(): string {
		return this._webWorkerInstanceRef;
	}
	set webWorkerInstanceRef(value: string) {
		this._webWorkerInstanceRef = value;
		this.markDirty("WebWorkerInstanceRef");
	}
}


