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
export class TrendResolutionParams extends Base {
	static $t: Type = markType(TrendResolutionParams, 'TrendResolutionParams');
	private _firstBucket: number = 0;
	get firstBucket(): number {
		return this._firstBucket;
	}
	set firstBucket(value: number) {
		this._firstBucket = value;
	}
	private _lastBucket: number = 0;
	get lastBucket(): number {
		return this._lastBucket;
	}
	set lastBucket(value: number) {
		this._lastBucket = value;
	}
	private _bucketSize: number = 0;
	get bucketSize(): number {
		return this._bucketSize;
	}
	set bucketSize(value: number) {
		this._bucketSize = value;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	private _window: Rect = null;
	get window(): Rect {
		return this._window;
	}
	set window(value: Rect) {
		this._window = value;
	}
	private _resolution: number = 0;
	get resolution(): number {
		return this._resolution;
	}
	set resolution(value: number) {
		this._resolution = value;
	}
	private _offset: number = 0;
	get offset(): number {
		return this._offset;
	}
	set offset(value: number) {
		this._offset = value;
	}
}


