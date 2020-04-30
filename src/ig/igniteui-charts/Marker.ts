/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ContentControl } from "igniteui-core/ContentControl";
import { Brush } from "igniteui-core/Brush";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class Marker extends ContentControl {
	static $t: Type = markType(Marker, 'Marker', (<any>ContentControl).$type);
	private _brush: Brush = null;
	get brush(): Brush {
		return this._brush;
	}
	set brush(value: Brush) {
		this._brush = value;
	}
	private _outline: Brush = null;
	get outline(): Brush {
		return this._outline;
	}
	set outline(value: Brush) {
		this._outline = value;
	}
	private _currentIndex: number = 0;
	get currentIndex(): number {
		return this._currentIndex;
	}
	set currentIndex(value: number) {
		this._currentIndex = value;
	}
	private _markerBucket: number = 0;
	get markerBucket(): number {
		return this._markerBucket;
	}
	set markerBucket(value: number) {
		this._markerBucket = value;
	}
	renderOffsetX: number = 0;
	renderOffsetY: number = 0;
}


