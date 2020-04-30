/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class AxisAnnotationDescription extends Description {
	static $t: Type = markType(AxisAnnotationDescription, 'AxisAnnotationDescription', (<any>Description).$type);
	protected get_type(): string {
		return "AxisAnnotation";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _valueRef: string = null;
	get valueRef(): string {
		return this._valueRef;
	}
	set valueRef(value: string) {
		this._valueRef = value;
		this.markDirty("ValueRef");
	}
	private _text: string = null;
	get text(): string {
		return this._text;
	}
	set text(value: string) {
		this._text = value;
		this.markDirty("Text");
	}
	private _formatLabelRef: string = null;
	get formatLabelRef(): string {
		return this._formatLabelRef;
	}
	set formatLabelRef(value: string) {
		this._formatLabelRef = value;
		this.markDirty("FormatLabelRef");
	}
	private _textColor: string = null;
	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		this.markDirty("TextColor");
	}
	private _background: string = null;
	get background(): string {
		return this._background;
	}
	set background(value: string) {
		this._background = value;
		this.markDirty("Background");
	}
	private _outline: string = null;
	get outline(): string {
		return this._outline;
	}
	set outline(value: string) {
		this._outline = value;
		this.markDirty("Outline");
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
		this.markDirty("StrokeThickness");
	}
	private _backgroundPaddingLeft: number = 0;
	get backgroundPaddingLeft(): number {
		return this._backgroundPaddingLeft;
	}
	set backgroundPaddingLeft(value: number) {
		this._backgroundPaddingLeft = value;
		this.markDirty("BackgroundPaddingLeft");
	}
	private _backgroundPaddingTop: number = 0;
	get backgroundPaddingTop(): number {
		return this._backgroundPaddingTop;
	}
	set backgroundPaddingTop(value: number) {
		this._backgroundPaddingTop = value;
		this.markDirty("BackgroundPaddingTop");
	}
	private _backgroundPaddingRight: number = 0;
	get backgroundPaddingRight(): number {
		return this._backgroundPaddingRight;
	}
	set backgroundPaddingRight(value: number) {
		this._backgroundPaddingRight = value;
		this.markDirty("BackgroundPaddingRight");
	}
	private _backgroundPaddingBottom: number = 0;
	get backgroundPaddingBottom(): number {
		return this._backgroundPaddingBottom;
	}
	set backgroundPaddingBottom(value: number) {
		this._backgroundPaddingBottom = value;
		this.markDirty("BackgroundPaddingBottom");
	}
}


