/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";
import { ColorData } from "./ColorData";
import { BrushAppearanceData } from "./BrushAppearanceData";
import { StringBuilder } from "./StringBuilder";
import { stringReplace } from "./string";

/**
 * @hidden 
 */
export class LabelAppearanceData extends Base implements IVisualData {
	static $t: Type = markType(LabelAppearanceData, 'LabelAppearanceData', (<any>Base).$type, [IVisualData_$type]);
	private _text: string = null;
	get text(): string {
		return this._text;
	}
	set text(value: string) {
		this._text = value;
	}
	private _horizontalAlignment: string = null;
	get horizontalAlignment(): string {
		return this._horizontalAlignment;
	}
	set horizontalAlignment(value: string) {
		this._horizontalAlignment = value;
	}
	private _verticalAlignment: string = null;
	get verticalAlignment(): string {
		return this._verticalAlignment;
	}
	set verticalAlignment(value: string) {
		this._verticalAlignment = value;
	}
	private _textAlignment: string = null;
	get textAlignment(): string {
		return this._textAlignment;
	}
	set textAlignment(value: string) {
		this._textAlignment = value;
	}
	private _textWrapping: string = null;
	get textWrapping(): string {
		return this._textWrapping;
	}
	set textWrapping(value: string) {
		this._textWrapping = value;
	}
	private _textPosition: string = null;
	get textPosition(): string {
		return this._textPosition;
	}
	set textPosition(value: string) {
		this._textPosition = value;
	}
	private _labelBrush: ColorData = null;
	get labelBrush(): ColorData {
		return this._labelBrush;
	}
	set labelBrush(value: ColorData) {
		this._labelBrush = value;
	}
	private _labelBrushExtended: BrushAppearanceData = null;
	get labelBrushExtended(): BrushAppearanceData {
		return this._labelBrushExtended;
	}
	set labelBrushExtended(value: BrushAppearanceData) {
		this._labelBrushExtended = value;
	}
	private _angle: number = 0;
	get angle(): number {
		return this._angle;
	}
	set angle(value: number) {
		this._angle = value;
	}
	private _opacity: number = 0;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		this._opacity = value;
	}
	private _visibility: boolean = false;
	get visibility(): boolean {
		return this._visibility;
	}
	set visibility(value: boolean) {
		this._visibility = value;
	}
	private _font: string = null;
	get font(): string {
		return this._font;
	}
	set font(value: string) {
		this._font = value;
	}
	private _fontFamily: string = null;
	get fontFamily(): string {
		return this._fontFamily;
	}
	set fontFamily(value: string) {
		this._fontFamily = value;
	}
	private _fontSize: number = 0;
	get fontSize(): number {
		return this._fontSize;
	}
	set fontSize(value: number) {
		this._fontSize = value;
	}
	private _fontWeight: string = null;
	get fontWeight(): string {
		return this._fontWeight;
	}
	set fontWeight(value: string) {
		this._fontWeight = value;
	}
	private _fontStyle: string = null;
	get fontStyle(): string {
		return this._fontStyle;
	}
	set fontStyle(value: string) {
		this._fontStyle = value;
	}
	private _fontStretch: string = null;
	get fontStretch(): string {
		return this._fontStretch;
	}
	set fontStretch(value: string) {
		this._fontStretch = value;
	}
	private _marginLeft: number = 0;
	get marginLeft(): number {
		return this._marginLeft;
	}
	set marginLeft(value: number) {
		this._marginLeft = value;
	}
	private _marginRight: number = 0;
	get marginRight(): number {
		return this._marginRight;
	}
	set marginRight(value: number) {
		this._marginRight = value;
	}
	private _marginTop: number = 0;
	get marginTop(): number {
		return this._marginTop;
	}
	set marginTop(value: number) {
		this._marginTop = value;
	}
	private _marginBottom: number = 0;
	get marginBottom(): number {
		return this._marginBottom;
	}
	set marginBottom(value: number) {
		this._marginBottom = value;
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("text: \"" + (this.text != null ? this.text : "") + "\", ");
		if (this.textAlignment != null) {
			sb.appendLine1("textAlignment: \"" + this.textAlignment + "\", ");
		}
		if (this.textWrapping != null) {
			sb.appendLine1("textWrapping: \"" + this.textWrapping + "\", ");
		}
		sb.appendLine1("labelBrush: " + (this.labelBrush != null ? this.labelBrush.serialize() : "null") + ", ");
		sb.appendLine1("labelBrushExtended: " + (this.labelBrushExtended != null ? this.labelBrushExtended.serialize() : "null") + ", ");
		sb.appendLine1("angle: " + this.angle + ", ");
		sb.appendLine1("marginLeft: " + this.marginLeft + ", ");
		sb.appendLine1("marginRight: " + this.marginRight + ", ");
		sb.appendLine1("marginTop: " + this.marginTop + ", ");
		sb.appendLine1("marginBottom: " + this.marginBottom + ", ");
		sb.appendLine1("opacity: " + this.opacity + ", ");
		sb.appendLine1("visibility: " + (this.visibility ? "true" : "false") + ", ");
		if (this.horizontalAlignment != null) {
			sb.appendLine1("horizontalAlignment: \"" + this.horizontalAlignment + "\", ");
		}
		if (this.verticalAlignment != null) {
			sb.appendLine1("verticalAlignment: \"" + this.verticalAlignment + "\", ");
		}
		if (this.font != null) {
			sb.appendLine1("font: \"" + this.font + "\",");
		}
		if (this.fontFamily != null) {
			sb.appendLine1("fontFamily: \"" + stringReplace(this.fontFamily, "\"", "'") + "\",");
		}
		if (this.fontWeight != null) {
			sb.appendLine1("fontWeight: \"" + this.fontWeight + "\",");
		}
		if (this.fontStyle != null) {
			sb.appendLine1("fontStyle: \"" + this.fontStyle + "\",");
		}
		if (this.fontStretch != null) {
			sb.appendLine1("fontStretch: \"" + this.fontStretch + "\",");
		}
		sb.appendLine1("fontSize: " + this.fontSize);
		sb.appendLine1("}");
		return sb.toString();
	}
}


