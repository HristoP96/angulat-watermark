/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { DoubleCollection } from "igniteui-core/DoubleCollection";

/**
 * @hidden 
 */
export class PathRenderingInfo extends Base {
	static $t: Type = markType(PathRenderingInfo, 'PathRenderingInfo');
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		if (value < 0) {
			this._strokeThickness = value * -1;
		} else {
			this._strokeThickness = value;
		}
	}
	private _stroke: Brush = null;
	get stroke(): Brush {
		return this._stroke;
	}
	set stroke(value: Brush) {
		this._stroke = value;
	}
	private _fill: Brush = null;
	get fill(): Brush {
		return this._fill;
	}
	set fill(value: Brush) {
		this._fill = value;
	}
	private _dashArray: DoubleCollection = null;
	get dashArray(): DoubleCollection {
		return this._dashArray;
	}
	set dashArray(value: DoubleCollection) {
		this._dashArray = value;
	}
	private _alignToPixels: boolean = false;
	get alignToPixels(): boolean {
		return this._alignToPixels;
	}
	set alignToPixels(value: boolean) {
		this._alignToPixels = value;
	}
}


