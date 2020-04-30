/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapSeriesHostDescription } from "./GeographicMapSeriesHostDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GeographicHighDensityScatterSeriesDescription extends GeographicMapSeriesHostDescription {
	static $t: Type = markType(GeographicHighDensityScatterSeriesDescription, 'GeographicHighDensityScatterSeriesDescription', (<any>GeographicMapSeriesHostDescription).$type);
	protected get_type(): string {
		return "GeographicHighDensityScatterSeries";
	}
	constructor() {
		super();
	}
	private _latitudeMemberPath: string = null;
	get latitudeMemberPath(): string {
		return this._latitudeMemberPath;
	}
	set latitudeMemberPath(value: string) {
		this._latitudeMemberPath = value;
		this.markDirty("LatitudeMemberPath");
	}
	private _longitudeMemberPath: string = null;
	get longitudeMemberPath(): string {
		return this._longitudeMemberPath;
	}
	set longitudeMemberPath(value: string) {
		this._longitudeMemberPath = value;
		this.markDirty("LongitudeMemberPath");
	}
	private _useBruteForce: boolean = false;
	get useBruteForce(): boolean {
		return this._useBruteForce;
	}
	set useBruteForce(value: boolean) {
		this._useBruteForce = value;
		this.markDirty("UseBruteForce");
	}
	private _progressiveLoad: boolean = false;
	get progressiveLoad(): boolean {
		return this._progressiveLoad;
	}
	set progressiveLoad(value: boolean) {
		this._progressiveLoad = value;
		this.markDirty("ProgressiveLoad");
	}
	private _heatMinimum: number = 0;
	get heatMinimum(): number {
		return this._heatMinimum;
	}
	set heatMinimum(value: number) {
		this._heatMinimum = value;
		this.markDirty("HeatMinimum");
	}
	private _heatMaximum: number = 0;
	get heatMaximum(): number {
		return this._heatMaximum;
	}
	set heatMaximum(value: number) {
		this._heatMaximum = value;
		this.markDirty("HeatMaximum");
	}
	private _heatMinimumColor: string = null;
	get heatMinimumColor(): string {
		return this._heatMinimumColor;
	}
	set heatMinimumColor(value: string) {
		this._heatMinimumColor = value;
		this.markDirty("HeatMinimumColor");
	}
	private _heatMaximumColor: string = null;
	get heatMaximumColor(): string {
		return this._heatMaximumColor;
	}
	set heatMaximumColor(value: string) {
		this._heatMaximumColor = value;
		this.markDirty("HeatMaximumColor");
	}
	private _pointExtent: number = 0;
	get pointExtent(): number {
		return this._pointExtent;
	}
	set pointExtent(value: number) {
		this._pointExtent = value;
		this.markDirty("PointExtent");
	}
	private _progressiveStatus: number = 0;
	get progressiveStatus(): number {
		return this._progressiveStatus;
	}
	set progressiveStatus(value: number) {
		this._progressiveStatus = value;
		this.markDirty("ProgressiveStatus");
	}
	private _progressiveLoadStatusChanged: string = null;
	get progressiveLoadStatusChangedRef(): string {
		return this._progressiveLoadStatusChanged;
	}
	set progressiveLoadStatusChangedRef(value: string) {
		this._progressiveLoadStatusChanged = value;
		this.markDirty("ProgressiveLoadStatusChangedRef");
	}
}


