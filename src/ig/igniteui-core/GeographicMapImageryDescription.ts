/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { RectDescription } from "./RectDescription";
import { GeographicMapDescription } from "./GeographicMapDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class GeographicMapImageryDescription extends Description {
	static $t: Type = markType(GeographicMapImageryDescription, 'GeographicMapImageryDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GeographicMapImagery";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _windowRect: RectDescription = null;
	get windowRect(): RectDescription {
		return this._windowRect;
	}
	set windowRect(value: RectDescription) {
		this._windowRect = value;
		this.markDirty("WindowRect");
	}
	private _geographicMap: GeographicMapDescription = null;
	get geographicMap(): GeographicMapDescription {
		return this._geographicMap;
	}
	set geographicMap(value: GeographicMapDescription) {
		this._geographicMap = value;
		this.markDirty("GeographicMap");
	}
	private _referer: string = null;
	get referer(): string {
		return this._referer;
	}
	set referer(value: string) {
		this._referer = value;
		this.markDirty("Referer");
	}
	private _userAgent: string = null;
	get userAgent(): string {
		return this._userAgent;
	}
	set userAgent(value: string) {
		this._userAgent = value;
		this.markDirty("UserAgent");
	}
	private _imageTilesReady: string = null;
	get imageTilesReadyRef(): string {
		return this._imageTilesReady;
	}
	set imageTilesReadyRef(value: string) {
		this._imageTilesReady = value;
		this.markDirty("ImageTilesReadyRef");
	}
	private _imagesChanged: string = null;
	get imagesChangedRef(): string {
		return this._imagesChanged;
	}
	set imagesChangedRef(value: string) {
		this._imagesChanged = value;
		this.markDirty("ImagesChangedRef");
	}
	private _cancellingImage: string = null;
	get cancellingImageRef(): string {
		return this._cancellingImage;
	}
	set cancellingImageRef(value: string) {
		this._cancellingImage = value;
		this.markDirty("CancellingImageRef");
	}
	private _downloadingImage: string = null;
	get downloadingImageRef(): string {
		return this._downloadingImage;
	}
	set downloadingImageRef(value: string) {
		this._downloadingImage = value;
		this.markDirty("DownloadingImageRef");
	}
}


