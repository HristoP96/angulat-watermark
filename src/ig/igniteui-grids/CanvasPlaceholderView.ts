/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Color } from "igniteui-core/Color";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { truncate } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CanvasPlaceholderView extends Base {
	static $t: Type = markType(CanvasPlaceholderView, 'CanvasPlaceholderView');
	private _renderer: DomRenderer = null;
	constructor() {
		super();
	}
	private _color: Color = new Color();
	private _opacity: number = 1;
	private _alphaDirty: boolean = true;
	get color(): Color {
		return this._color;
	}
	set color(value: Color) {
		this._color = value;
		this.refresh();
	}
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		this._alphaDirty = true;
		this._opacity = value;
		this.refresh();
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
		this.refresh();
	}
	private _height: number = 0;
	private _renderColor: Color = new Color();
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
		this.refresh();
	}
	protected refresh(): void {
		let width: number = this.width;
		let height: number = this.height;
		this._renderColor = Color.fromArgb(<number>truncate((this._color.a * this._opacity)), this._color.r, this._color.g, this._color.b);
	}
}


