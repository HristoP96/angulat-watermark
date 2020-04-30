/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Series } from "./Series";
import { Brush } from "igniteui-core/Brush";

/**
 * @hidden 
 */
export class CalloutStyleUpdatingEventArgs extends Base {
	static $t: Type = markType(CalloutStyleUpdatingEventArgs, 'CalloutStyleUpdatingEventArgs');
	private _xValue: any = null;
	get xValue(): any {
		return this._xValue;
	}
	set xValue(value: any) {
		this._xValue = value;
	}
	private _yValue: any = null;
	get yValue(): any {
		return this._yValue;
	}
	set yValue(value: any) {
		this._yValue = value;
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
	private _background: Brush = null;
	get background(): Brush {
		return this._background;
	}
	set background(value: Brush) {
		this._background = value;
	}
	private _textColor: Brush = null;
	get textColor(): Brush {
		return this._textColor;
	}
	set textColor(value: Brush) {
		this._textColor = value;
	}
	private _outline: Brush = null;
	get outline(): Brush {
		return this._outline;
	}
	set outline(value: Brush) {
		this._outline = value;
	}
	private _leaderBrush: Brush = null;
	get leaderBrush(): Brush {
		return this._leaderBrush;
	}
	set leaderBrush(value: Brush) {
		this._leaderBrush = value;
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
	}
}


