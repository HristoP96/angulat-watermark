/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SeriesViewerDescription } from "./SeriesViewerDescription";
import { Description } from "./Description";
import { RectDescription } from "./RectDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GeographicMapDescription extends SeriesViewerDescription {
	static $t: Type = markType(GeographicMapDescription, 'GeographicMapDescription', (<any>SeriesViewerDescription).$type);
	protected get_type(): string {
		return "GeographicMap";
	}
	constructor() {
		super();
	}
	private _zoomable: boolean = false;
	get zoomable(): boolean {
		return this._zoomable;
	}
	set zoomable(value: boolean) {
		this._zoomable = value;
		this.markDirty("Zoomable");
	}
	private _worldRect: RectDescription = null;
	get worldRect(): RectDescription {
		return this._worldRect;
	}
	set worldRect(value: RectDescription) {
		this._worldRect = value;
		this.markDirty("WorldRect");
	}
	private _actualWorldRect: RectDescription = null;
	get actualWorldRect(): RectDescription {
		return this._actualWorldRect;
	}
	set actualWorldRect(value: RectDescription) {
		this._actualWorldRect = value;
		this.markDirty("ActualWorldRect");
	}
	private _backgroundContentRef: string = null;
	get backgroundContentRef(): string {
		return this._backgroundContentRef;
	}
	set backgroundContentRef(value: string) {
		this._backgroundContentRef = value;
		this.markDirty("BackgroundContentRef");
	}
	private _windowScale: number = 0;
	get windowScale(): number {
		return this._windowScale;
	}
	set windowScale(value: number) {
		this._windowScale = value;
		this.markDirty("WindowScale");
	}
	private _actualWindowScale: number = 0;
	get actualWindowScale(): number {
		return this._actualWindowScale;
	}
	set actualWindowScale(value: number) {
		this._actualWindowScale = value;
		this.markDirty("ActualWindowScale");
	}
	private _imageTilesReady: string = null;
	get imageTilesReadyRef(): string {
		return this._imageTilesReady;
	}
	set imageTilesReadyRef(value: string) {
		this._imageTilesReady = value;
		this.markDirty("ImageTilesReadyRef");
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


