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
export abstract class DefinitionBaseDescription extends Description {
	static $t: Type = markType(DefinitionBaseDescription, 'DefinitionBaseDescription', (<any>Description).$type);
	protected get_type(): string {
		return "DefinitionBase";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _background: string = null;
	get background(): string {
		return this._background;
	}
	set background(value: string) {
		this._background = value;
		this.markDirty("Background");
	}
	private _border: string = null;
	get border(): string {
		return this._border;
	}
	set border(value: string) {
		this._border = value;
		this.markDirty("Border");
	}
	private _activationBorder: string = null;
	get activationBorder(): string {
		return this._activationBorder;
	}
	set activationBorder(value: string) {
		this._activationBorder = value;
		this.markDirty("ActivationBorder");
	}
	private _actualBorder: string = null;
	get actualBorder(): string {
		return this._actualBorder;
	}
	set actualBorder(value: string) {
		this._actualBorder = value;
		this.markDirty("ActualBorder");
	}
	private _borderLeftWidth: number = 0;
	get borderLeftWidth(): number {
		return this._borderLeftWidth;
	}
	set borderLeftWidth(value: number) {
		this._borderLeftWidth = value;
		this.markDirty("BorderLeftWidth");
	}
	private _borderTopWidth: number = 0;
	get borderTopWidth(): number {
		return this._borderTopWidth;
	}
	set borderTopWidth(value: number) {
		this._borderTopWidth = value;
		this.markDirty("BorderTopWidth");
	}
	private _borderRightWidth: number = 0;
	get borderRightWidth(): number {
		return this._borderRightWidth;
	}
	set borderRightWidth(value: number) {
		this._borderRightWidth = value;
		this.markDirty("BorderRightWidth");
	}
	private _borderBottomWidth: number = 0;
	get borderBottomWidth(): number {
		return this._borderBottomWidth;
	}
	set borderBottomWidth(value: number) {
		this._borderBottomWidth = value;
		this.markDirty("BorderBottomWidth");
	}
	private _activationBorderLeftWidth: number = 0;
	get activationBorderLeftWidth(): number {
		return this._activationBorderLeftWidth;
	}
	set activationBorderLeftWidth(value: number) {
		this._activationBorderLeftWidth = value;
		this.markDirty("ActivationBorderLeftWidth");
	}
	private _activationBorderTopWidth: number = 0;
	get activationBorderTopWidth(): number {
		return this._activationBorderTopWidth;
	}
	set activationBorderTopWidth(value: number) {
		this._activationBorderTopWidth = value;
		this.markDirty("ActivationBorderTopWidth");
	}
	private _activationBorderRightWidth: number = 0;
	get activationBorderRightWidth(): number {
		return this._activationBorderRightWidth;
	}
	set activationBorderRightWidth(value: number) {
		this._activationBorderRightWidth = value;
		this.markDirty("ActivationBorderRightWidth");
	}
	private _activationBorderBottomWidth: number = 0;
	get activationBorderBottomWidth(): number {
		return this._activationBorderBottomWidth;
	}
	set activationBorderBottomWidth(value: number) {
		this._activationBorderBottomWidth = value;
		this.markDirty("ActivationBorderBottomWidth");
	}
	private _actualBackground: string = null;
	get actualBackground(): string {
		return this._actualBackground;
	}
	set actualBackground(value: string) {
		this._actualBackground = value;
		this.markDirty("ActualBackground");
	}
	private _actualActivationBorder: string = null;
	get actualActivationBorder(): string {
		return this._actualActivationBorder;
	}
	set actualActivationBorder(value: string) {
		this._actualActivationBorder = value;
		this.markDirty("ActualActivationBorder");
	}
	private _stickyRowBackground: string = null;
	get stickyRowBackground(): string {
		return this._stickyRowBackground;
	}
	set stickyRowBackground(value: string) {
		this._stickyRowBackground = value;
		this.markDirty("StickyRowBackground");
	}
	private _actualStickyRowBackground: string = null;
	get actualStickyRowBackground(): string {
		return this._actualStickyRowBackground;
	}
	set actualStickyRowBackground(value: string) {
		this._actualStickyRowBackground = value;
		this.markDirty("ActualStickyRowBackground");
	}
	private _pinnedRowBackground: string = null;
	get pinnedRowBackground(): string {
		return this._pinnedRowBackground;
	}
	set pinnedRowBackground(value: string) {
		this._pinnedRowBackground = value;
		this.markDirty("PinnedRowBackground");
	}
	private _actualPinnedRowBackground: string = null;
	get actualPinnedRowBackground(): string {
		return this._actualPinnedRowBackground;
	}
	set actualPinnedRowBackground(value: string) {
		this._actualPinnedRowBackground = value;
		this.markDirty("ActualPinnedRowBackground");
	}
	private _lastStickyRowBackground: string = null;
	get lastStickyRowBackground(): string {
		return this._lastStickyRowBackground;
	}
	set lastStickyRowBackground(value: string) {
		this._lastStickyRowBackground = value;
		this.markDirty("LastStickyRowBackground");
	}
	private _actualLastStickyRowBackground: string = null;
	get actualLastStickyRowBackground(): string {
		return this._actualLastStickyRowBackground;
	}
	set actualLastStickyRowBackground(value: string) {
		this._actualLastStickyRowBackground = value;
		this.markDirty("ActualLastStickyRowBackground");
	}
	private _contentOpacity: number = 0;
	get contentOpacity(): number {
		return this._contentOpacity;
	}
	set contentOpacity(value: number) {
		this._contentOpacity = value;
		this.markDirty("ContentOpacity");
	}
	private _horizontalAlignment: string = null;
	get horizontalAlignment(): string {
		return this._horizontalAlignment;
	}
	set horizontalAlignment(value: string) {
		this._horizontalAlignment = value;
		this.markDirty("HorizontalAlignment");
	}
	private _verticalAlignment: string = null;
	get verticalAlignment(): string {
		return this._verticalAlignment;
	}
	set verticalAlignment(value: string) {
		this._verticalAlignment = value;
		this.markDirty("VerticalAlignment");
	}
	private _lineBreakMode: string = null;
	get lineBreakMode(): string {
		return this._lineBreakMode;
	}
	set lineBreakMode(value: string) {
		this._lineBreakMode = value;
		this.markDirty("LineBreakMode");
	}
	private _actualLineBreakMode: string = null;
	get actualLineBreakMode(): string {
		return this._actualLineBreakMode;
	}
	set actualLineBreakMode(value: string) {
		this._actualLineBreakMode = value;
		this.markDirty("ActualLineBreakMode");
	}
	private _textColor: string = null;
	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		this.markDirty("TextColor");
	}
	private _actualTextColor: string = null;
	get actualTextColor(): string {
		return this._actualTextColor;
	}
	set actualTextColor(value: string) {
		this._actualTextColor = value;
		this.markDirty("ActualTextColor");
	}
	private _pinnedRowOpacity: number = 0;
	get pinnedRowOpacity(): number {
		return this._pinnedRowOpacity;
	}
	set pinnedRowOpacity(value: number) {
		this._pinnedRowOpacity = value;
		this.markDirty("PinnedRowOpacity");
	}
	private _actualPinnedRowOpacity: number = 0;
	get actualPinnedRowOpacity(): number {
		return this._actualPinnedRowOpacity;
	}
	set actualPinnedRowOpacity(value: number) {
		this._actualPinnedRowOpacity = value;
		this.markDirty("ActualPinnedRowOpacity");
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
	private _fontStyle: string = null;
	get fontStyle(): string {
		return this._fontStyle;
	}
	set fontStyle(value: string) {
		this._fontStyle = value;
	}
	private _fontWeight: string = null;
	get fontWeight(): string {
		return this._fontWeight;
	}
	set fontWeight(value: string) {
		this._fontWeight = value;
	}
	private _dataBinding: string = null;
	get dataBindingRef(): string {
		return this._dataBinding;
	}
	set dataBindingRef(value: string) {
		this._dataBinding = value;
		this.markDirty("DataBindingRef");
	}
	private _dataBound: string = null;
	get dataBoundRef(): string {
		return this._dataBound;
	}
	set dataBoundRef(value: string) {
		this._dataBound = value;
		this.markDirty("DataBoundRef");
	}
	private _cellStyleKeyRequested: string = null;
	get cellStyleKeyRequestedRef(): string {
		return this._cellStyleKeyRequested;
	}
	set cellStyleKeyRequestedRef(value: string) {
		this._cellStyleKeyRequested = value;
		this.markDirty("CellStyleKeyRequestedRef");
	}
}


