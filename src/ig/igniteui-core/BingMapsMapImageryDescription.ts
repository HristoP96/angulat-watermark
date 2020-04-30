/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapImageryDescription } from "./GeographicMapImageryDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class BingMapsMapImageryDescription extends GeographicMapImageryDescription {
	static $t: Type = markType(BingMapsMapImageryDescription, 'BingMapsMapImageryDescription', (<any>GeographicMapImageryDescription).$type);
	protected get_type(): string {
		return "BingMapsMapImagery";
	}
	constructor() {
		super();
	}
	private _isInitialized: boolean = false;
	get isInitialized(): boolean {
		return this._isInitialized;
	}
	set isInitialized(value: boolean) {
		this._isInitialized = value;
		this.markDirty("IsInitialized");
	}
	private _isDeferredLoad: boolean = false;
	get isDeferredLoad(): boolean {
		return this._isDeferredLoad;
	}
	set isDeferredLoad(value: boolean) {
		this._isDeferredLoad = value;
		this.markDirty("IsDeferredLoad");
	}
	private _tilePath: string = null;
	get tilePath(): string {
		return this._tilePath;
	}
	set tilePath(value: string) {
		this._tilePath = value;
		this.markDirty("TilePath");
	}
	private _actualTilePath: string = null;
	get actualTilePath(): string {
		return this._actualTilePath;
	}
	set actualTilePath(value: string) {
		this._actualTilePath = value;
		this.markDirty("ActualTilePath");
	}
	private _subDomains: string[] = null;
	get subDomains(): string[] {
		return this._subDomains;
	}
	set subDomains(value: string[]) {
		this._subDomains = value;
		this.markDirty("SubDomains");
	}
	private _actualSubDomains: string[] = null;
	get actualSubDomains(): string[] {
		return this._actualSubDomains;
	}
	set actualSubDomains(value: string[]) {
		this._actualSubDomains = value;
		this.markDirty("ActualSubDomains");
	}
	private _bingImageryRestUri: string = null;
	get bingImageryRestUri(): string {
		return this._bingImageryRestUri;
	}
	set bingImageryRestUri(value: string) {
		this._bingImageryRestUri = value;
		this.markDirty("BingImageryRestUri");
	}
	private _actualBingImageryRestUri: string = null;
	get actualBingImageryRestUri(): string {
		return this._actualBingImageryRestUri;
	}
	set actualBingImageryRestUri(value: string) {
		this._actualBingImageryRestUri = value;
		this.markDirty("ActualBingImageryRestUri");
	}
	private _cultureName: string = null;
	get cultureName(): string {
		return this._cultureName;
	}
	set cultureName(value: string) {
		this._cultureName = value;
		this.markDirty("CultureName");
	}
	private _apiKey: string = null;
	get apiKey(): string {
		return this._apiKey;
	}
	set apiKey(value: string) {
		this._apiKey = value;
		this.markDirty("ApiKey");
	}
	private _imageryStyle: string = null;
	get imageryStyle(): string {
		return this._imageryStyle;
	}
	set imageryStyle(value: string) {
		this._imageryStyle = value;
		this.markDirty("ImageryStyle");
	}
}


