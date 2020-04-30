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
export class TreemapNodeStyleDescription extends Description {
	static $t: Type = markType(TreemapNodeStyleDescription, 'TreemapNodeStyleDescription', (<any>Description).$type);
	protected get_type(): string {
		return "TreemapNodeStyle";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _headerHoverBackground: string = null;
	get headerHoverBackground(): string {
		return this._headerHoverBackground;
	}
	set headerHoverBackground(value: string) {
		this._headerHoverBackground = value;
		this.markDirty("HeaderHoverBackground");
	}
	private _headerBackground: string = null;
	get headerBackground(): string {
		return this._headerBackground;
	}
	set headerBackground(value: string) {
		this._headerBackground = value;
		this.markDirty("HeaderBackground");
	}
	private _headerTextColor: string = null;
	get headerTextColor(): string {
		return this._headerTextColor;
	}
	set headerTextColor(value: string) {
		this._headerTextColor = value;
		this.markDirty("HeaderTextColor");
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
		this.markDirty("Label");
	}
	private _textColor: string = null;
	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		this.markDirty("TextColor");
	}
	private _headerHoverTextColor: string = null;
	get headerHoverTextColor(): string {
		return this._headerHoverTextColor;
	}
	set headerHoverTextColor(value: string) {
		this._headerHoverTextColor = value;
		this.markDirty("HeaderHoverTextColor");
	}
	private _headerLabelLeftMargin: number = 0;
	get headerLabelLeftMargin(): number {
		return this._headerLabelLeftMargin;
	}
	set headerLabelLeftMargin(value: number) {
		this._headerLabelLeftMargin = value;
		this.markDirty("HeaderLabelLeftMargin");
	}
	private _headerLabelTopMargin: number = 0;
	get headerLabelTopMargin(): number {
		return this._headerLabelTopMargin;
	}
	set headerLabelTopMargin(value: number) {
		this._headerLabelTopMargin = value;
		this.markDirty("HeaderLabelTopMargin");
	}
	private _headerLabelRightMargin: number = 0;
	get headerLabelRightMargin(): number {
		return this._headerLabelRightMargin;
	}
	set headerLabelRightMargin(value: number) {
		this._headerLabelRightMargin = value;
		this.markDirty("HeaderLabelRightMargin");
	}
	private _headerLabelBottomMargin: number = 0;
	get headerLabelBottomMargin(): number {
		return this._headerLabelBottomMargin;
	}
	set headerLabelBottomMargin(value: number) {
		this._headerLabelBottomMargin = value;
		this.markDirty("HeaderLabelBottomMargin");
	}
	private _labelLeftMargin: number = 0;
	get labelLeftMargin(): number {
		return this._labelLeftMargin;
	}
	set labelLeftMargin(value: number) {
		this._labelLeftMargin = value;
		this.markDirty("LabelLeftMargin");
	}
	private _labelTopMargin: number = 0;
	get labelTopMargin(): number {
		return this._labelTopMargin;
	}
	set labelTopMargin(value: number) {
		this._labelTopMargin = value;
		this.markDirty("LabelTopMargin");
	}
	private _labelRightMargin: number = 0;
	get labelRightMargin(): number {
		return this._labelRightMargin;
	}
	set labelRightMargin(value: number) {
		this._labelRightMargin = value;
		this.markDirty("LabelRightMargin");
	}
	private _labelBottomMargin: number = 0;
	get labelBottomMargin(): number {
		return this._labelBottomMargin;
	}
	set labelBottomMargin(value: number) {
		this._labelBottomMargin = value;
		this.markDirty("LabelBottomMargin");
	}
	private _headerHeight: number = 0;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		this._headerHeight = value;
		this.markDirty("HeaderHeight");
	}
	private _labelHorizontalAlignment: string = null;
	get labelHorizontalAlignment(): string {
		return this._labelHorizontalAlignment;
	}
	set labelHorizontalAlignment(value: string) {
		this._labelHorizontalAlignment = value;
		this.markDirty("LabelHorizontalAlignment");
	}
	private _labelVerticalAlignment: string = null;
	get labelVerticalAlignment(): string {
		return this._labelVerticalAlignment;
	}
	set labelVerticalAlignment(value: string) {
		this._labelVerticalAlignment = value;
		this.markDirty("LabelVerticalAlignment");
	}
	private _fill: string = null;
	get fill(): string {
		return this._fill;
	}
	set fill(value: string) {
		this._fill = value;
		this.markDirty("Fill");
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
}


