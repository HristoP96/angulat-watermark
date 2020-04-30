/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { RectangleVisualData } from "igniteui-core/RectangleVisualData";
import { LabelAppearanceData } from "igniteui-core/LabelAppearanceData";
import { LineVisualData } from "igniteui-core/LineVisualData";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { RectData } from "igniteui-core/RectData";

/**
 * @hidden 
 */
export class CalloutVisualData extends Base {
	static $t: Type = markType(CalloutVisualData, 'CalloutVisualData');
	private _background: RectangleVisualData = null;
	get background(): RectangleVisualData {
		return this._background;
	}
	set background(value: RectangleVisualData) {
		this._background = value;
	}
	private _text: LabelAppearanceData = null;
	get text(): LabelAppearanceData {
		return this._text;
	}
	set text(value: LabelAppearanceData) {
		this._text = value;
	}
	private _line: LineVisualData = null;
	get line(): LineVisualData {
		return this._line;
	}
	set line(value: LineVisualData) {
		this._line = value;
	}
	private _left: number = 0;
	get left(): number {
		return this._left;
	}
	set left(value: number) {
		this._left = value;
	}
	private _top: number = 0;
	get top(): number {
		return this._top;
	}
	set top(value: number) {
		this._top = value;
	}
	private _marginLeft: number = 0;
	get marginLeft(): number {
		return this._marginLeft;
	}
	set marginLeft(value: number) {
		this._marginLeft = value;
	}
	private _marginTop: number = 0;
	get marginTop(): number {
		return this._marginTop;
	}
	set marginTop(value: number) {
		this._marginTop = value;
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("left: " + this.left.toString() + ",");
		sb.appendLine1("top: " + this.top.toString() + ",");
		sb.appendLine1("marginLeft: " + this.marginLeft.toString() + ",");
		sb.appendLine1("marginTop: " + this.marginTop.toString() + ",");
		sb.appendLine1("background: " + this.background.serialize() + ",");
		sb.appendLine1("text: " + this.text.serialize() + ",");
		sb.appendLine1("line: " + this.line.serialize());
		sb.appendLine1("}");
		return sb.toString();
	}
	scaleByViewport(viewport: RectData): void {
		this.left = (this.left - viewport.left) / viewport.width;
		this.top = (this.top - viewport.top) / viewport.height;
		this.marginLeft = this.marginLeft / viewport.width;
		this.marginTop = this.marginTop / viewport.height;
		this.background.scaleByViewport(viewport);
		this.line.scaleByViewport(viewport);
	}
}


