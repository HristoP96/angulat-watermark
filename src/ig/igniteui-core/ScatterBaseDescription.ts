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
export abstract class ScatterBaseDescription extends MarkerSeriesDescription {
	static $t: Type = markType(ScatterBaseDescription, 'ScatterBaseDescription', (<any>MarkerSeriesDescription).$type);
	protected get_type(): string {
		return "ScatterBase";
	}
	constructor() {
		super();
	}
	private _xAxisRef: string = null;
	get xAxisRef(): string {
		return this._xAxisRef;
	}
	set xAxisRef(value: string) {
		this._xAxisRef = value;
		this.markDirty("XAxisRef");
	}
	private _yAxisRef: string = null;
	get yAxisRef(): string {
		return this._yAxisRef;
	}
	set yAxisRef(value: string) {
		this._yAxisRef = value;
		this.markDirty("YAxisRef");
	}
	private _xMemberPath: string = null;
	get xMemberPath(): string {
		return this._xMemberPath;
	}
	set xMemberPath(value: string) {
		this._xMemberPath = value;
		this.markDirty("XMemberPath");
	}
	private _yMemberPath: string = null;
	get yMemberPath(): string {
		return this._yMemberPath;
	}
	set yMemberPath(value: string) {
		this._yMemberPath = value;
		this.markDirty("YMemberPath");
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
	private _markerCollisionAvoidance: string = null;
	get markerCollisionAvoidance(): string {
		return this._markerCollisionAvoidance;
	}
	set markerCollisionAvoidance(value: string) {
		this._markerCollisionAvoidance = value;
		this.markDirty("MarkerCollisionAvoidance");
	}
	private _trendLineZIndex: number = 0;
	get trendLineZIndex(): number {
		return this._trendLineZIndex;
	}
	set trendLineZIndex(value: number) {
		this._trendLineZIndex = value;
		this.markDirty("TrendLineZIndex");
	}
	private _maximumMarkers: number = 0;
	get maximumMarkers(): number {
		return this._maximumMarkers;
	}
	set maximumMarkers(value: number) {
		this._maximumMarkers = value;
		this.markDirty("MaximumMarkers");
	}
}


