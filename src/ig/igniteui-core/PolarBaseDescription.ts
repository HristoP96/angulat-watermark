/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class PolarBaseDescription extends MarkerSeriesDescription {
	static $t: Type = markType(PolarBaseDescription, 'PolarBaseDescription', (<any>MarkerSeriesDescription).$type);
	protected get_type(): string {
		return "PolarBase";
	}
	constructor() {
		super();
	}
	private _angleMemberPath: string = null;
	get angleMemberPath(): string {
		return this._angleMemberPath;
	}
	set angleMemberPath(value: string) {
		this._angleMemberPath = value;
		this.markDirty("AngleMemberPath");
	}
	private _radiusMemberPath: string = null;
	get radiusMemberPath(): string {
		return this._radiusMemberPath;
	}
	set radiusMemberPath(value: string) {
		this._radiusMemberPath = value;
		this.markDirty("RadiusMemberPath");
	}
	private _angleAxisRef: string = null;
	get angleAxisRef(): string {
		return this._angleAxisRef;
	}
	set angleAxisRef(value: string) {
		this._angleAxisRef = value;
		this.markDirty("AngleAxisRef");
	}
	private _radiusAxisRef: string = null;
	get radiusAxisRef(): string {
		return this._radiusAxisRef;
	}
	set radiusAxisRef(value: string) {
		this._radiusAxisRef = value;
		this.markDirty("RadiusAxisRef");
	}
	private _useCartesianInterpolation: boolean = false;
	get useCartesianInterpolation(): boolean {
		return this._useCartesianInterpolation;
	}
	set useCartesianInterpolation(value: boolean) {
		this._useCartesianInterpolation = value;
		this.markDirty("UseCartesianInterpolation");
	}
	private _maximumMarkers: number = 0;
	get maximumMarkers(): number {
		return this._maximumMarkers;
	}
	set maximumMarkers(value: number) {
		this._maximumMarkers = value;
		this.markDirty("MaximumMarkers");
	}
	private _trendLineType: string = null;
	get trendLineType(): string {
		return this._trendLineType;
	}
	set trendLineType(value: string) {
		this._trendLineType = value;
		this.markDirty("TrendLineType");
	}
	private _trendLineBrush: string = null;
	get trendLineBrush(): string {
		return this._trendLineBrush;
	}
	set trendLineBrush(value: string) {
		this._trendLineBrush = value;
		this.markDirty("TrendLineBrush");
	}
	private _actualTrendLineBrush: string = null;
	get actualTrendLineBrush(): string {
		return this._actualTrendLineBrush;
	}
	set actualTrendLineBrush(value: string) {
		this._actualTrendLineBrush = value;
		this.markDirty("ActualTrendLineBrush");
	}
	private _trendLineThickness: number = 0;
	get trendLineThickness(): number {
		return this._trendLineThickness;
	}
	set trendLineThickness(value: number) {
		this._trendLineThickness = value;
		this.markDirty("TrendLineThickness");
	}
	private _trendLinePeriod: number = 0;
	get trendLinePeriod(): number {
		return this._trendLinePeriod;
	}
	set trendLinePeriod(value: number) {
		this._trendLinePeriod = value;
		this.markDirty("TrendLinePeriod");
	}
	private _trendLineZIndex: number = 0;
	get trendLineZIndex(): number {
		return this._trendLineZIndex;
	}
	set trendLineZIndex(value: number) {
		this._trendLineZIndex = value;
		this.markDirty("TrendLineZIndex");
	}
	private _clipSeriesToBounds: boolean = false;
	get clipSeriesToBounds(): boolean {
		return this._clipSeriesToBounds;
	}
	set clipSeriesToBounds(value: boolean) {
		this._clipSeriesToBounds = value;
		this.markDirty("ClipSeriesToBounds");
	}
}


