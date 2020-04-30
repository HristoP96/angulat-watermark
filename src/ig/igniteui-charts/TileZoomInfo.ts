/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class TileZoomInfo extends Base {
	static $t: Type = markType(TileZoomInfo, 'TileZoomInfo');
	private _actualRect: Rect = null;
	get actualRect(): Rect {
		return this._actualRect;
	}
	set actualRect(value: Rect) {
		this._actualRect = value;
	}
	private _zoomRect: Rect = null;
	get zoomRect(): Rect {
		return this._zoomRect;
	}
	set zoomRect(value: Rect) {
		this._zoomRect = value;
	}
	private _currentZoomLevel: number = 0;
	get currentZoomLevel(): number {
		return this._currentZoomLevel;
	}
	set currentZoomLevel(value: number) {
		this._currentZoomLevel = value;
	}
	private _zoomWidth: number = 0;
	get zoomWidth(): number {
		return this._zoomWidth;
	}
	set zoomWidth(value: number) {
		this._zoomWidth = value;
	}
	private _zoomHeight: number = 0;
	get zoomHeight(): number {
		return this._zoomHeight;
	}
	set zoomHeight(value: number) {
		this._zoomHeight = value;
	}
	private _actualWidth: number = 0;
	get actualWidth(): number {
		return this._actualWidth;
	}
	set actualWidth(value: number) {
		this._actualWidth = value;
	}
	private _actualHeight: number = 0;
	get actualHeight(): number {
		return this._actualHeight;
	}
	set actualHeight(value: number) {
		this._actualHeight = value;
	}
}


