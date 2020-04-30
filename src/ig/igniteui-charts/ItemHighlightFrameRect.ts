/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { DataTemplate } from "igniteui-core/DataTemplate";

/**
 * @hidden 
 */
export class ItemHighlightFrameRect extends Base {
	static $t: Type = markType(ItemHighlightFrameRect, 'ItemHighlightFrameRect');
	private _timeStamp: number = 0;
	get timeStamp(): number {
		return this._timeStamp;
	}
	set timeStamp(value: number) {
		this._timeStamp = value;
	}
	private _top: number = 0;
	get top(): number {
		return this._top;
	}
	set top(value: number) {
		this._top = value;
	}
	private _left: number = 0;
	get left(): number {
		return this._left;
	}
	set left(value: number) {
		this._left = value;
	}
	private _right: number = 0;
	get right(): number {
		return this._right;
	}
	set right(value: number) {
		this._right = value;
	}
	private _bottom: number = 0;
	get bottom(): number {
		return this._bottom;
	}
	set bottom(value: number) {
		this._bottom = value;
	}
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
	private _markerTemplate: DataTemplate = null;
	get markerTemplate(): DataTemplate {
		return this._markerTemplate;
	}
	set markerTemplate(value: DataTemplate) {
		this._markerTemplate = value;
	}
	private _dataItem: any = null;
	get dataItem(): any {
		return this._dataItem;
	}
	set dataItem(value: any) {
		this._dataItem = value;
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
	}
	constructor() {
		super();
		this.timeStamp = 0;
		this.top = NaN;
		this.left = NaN;
		this.right = NaN;
		this.left = NaN;
		this.bottom = NaN;
		this.strokeThickness = NaN;
	}
}


