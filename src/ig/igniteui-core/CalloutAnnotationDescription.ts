/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { SeriesDescription } from "./SeriesDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class CalloutAnnotationDescription extends Description {
	static $t: Type = markType(CalloutAnnotationDescription, 'CalloutAnnotationDescription', (<any>Description).$type);
	protected get_type(): string {
		return "CalloutAnnotation";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _xValueRef: string = null;
	get xValueRef(): string {
		return this._xValueRef;
	}
	set xValueRef(value: string) {
		this._xValueRef = value;
		this.markDirty("XValueRef");
	}
	private _yValueRef: string = null;
	get yValueRef(): string {
		return this._yValueRef;
	}
	set yValueRef(value: string) {
		this._yValueRef = value;
		this.markDirty("YValueRef");
	}
	private _text: string = null;
	get text(): string {
		return this._text;
	}
	set text(value: string) {
		this._text = value;
		this.markDirty("Text");
	}
	private _keyRef: string = null;
	get keyRef(): string {
		return this._keyRef;
	}
	set keyRef(value: string) {
		this._keyRef = value;
		this.markDirty("KeyRef");
	}
	private _contentRef: string = null;
	get contentRef(): string {
		return this._contentRef;
	}
	set contentRef(value: string) {
		this._contentRef = value;
		this.markDirty("ContentRef");
	}
	private _series: SeriesDescription = null;
	get series(): SeriesDescription {
		return this._series;
	}
	set series(value: SeriesDescription) {
		this._series = value;
		this.markDirty("Series");
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
	private _leaderBrush: string = null;
	get leaderBrush(): string {
		return this._leaderBrush;
	}
	set leaderBrush(value: string) {
		this._leaderBrush = value;
		this.markDirty("LeaderBrush");
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


