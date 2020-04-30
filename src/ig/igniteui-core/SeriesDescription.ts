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
export abstract class SeriesDescription extends Description {
	static $t: Type = markType(SeriesDescription, 'SeriesDescription', (<any>Description).$type);
	protected get_type(): string {
		return "Series";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _dataSourceRef: string = null;
	get dataSourceRef(): string {
		return this._dataSourceRef;
	}
	set dataSourceRef(value: string) {
		this._dataSourceRef = value;
		this.markDirty("DataSourceRef");
	}
	private _legendItemVisibility: string = null;
	get legendItemVisibility(): string {
		return this._legendItemVisibility;
	}
	set legendItemVisibility(value: string) {
		this._legendItemVisibility = value;
		this.markDirty("LegendItemVisibility");
	}
	private _legendItemBadgeTemplateRef: string = null;
	get legendItemBadgeTemplateRef(): string {
		return this._legendItemBadgeTemplateRef;
	}
	set legendItemBadgeTemplateRef(value: string) {
		this._legendItemBadgeTemplateRef = value;
		this.markDirty("LegendItemBadgeTemplateRef");
	}
	private _legendItemTemplateRef: string = null;
	get legendItemTemplateRef(): string {
		return this._legendItemTemplateRef;
	}
	set legendItemTemplateRef(value: string) {
		this._legendItemTemplateRef = value;
		this.markDirty("LegendItemTemplateRef");
	}
	private _discreteLegendItemTemplateRef: string = null;
	get discreteLegendItemTemplateRef(): string {
		return this._discreteLegendItemTemplateRef;
	}
	set discreteLegendItemTemplateRef(value: string) {
		this._discreteLegendItemTemplateRef = value;
		this.markDirty("DiscreteLegendItemTemplateRef");
	}
	private _transitionEasingFunctionRef: string = null;
	get transitionEasingFunctionRef(): string {
		return this._transitionEasingFunctionRef;
	}
	set transitionEasingFunctionRef(value: string) {
		this._transitionEasingFunctionRef = value;
		this.markDirty("TransitionEasingFunctionRef");
	}
	private _transitionInEasingFunctionRef: string = null;
	get transitionInEasingFunctionRef(): string {
		return this._transitionInEasingFunctionRef;
	}
	set transitionInEasingFunctionRef(value: string) {
		this._transitionInEasingFunctionRef = value;
		this.markDirty("TransitionInEasingFunctionRef");
	}
	private _transitionDuration: number = 0;
	get transitionDuration(): number {
		return this._transitionDuration;
	}
	set transitionDuration(value: number) {
		this._transitionDuration = value;
		this.markDirty("TransitionDuration");
	}
	private _resolution: number = 0;
	get resolution(): number {
		return this._resolution;
	}
	set resolution(value: number) {
		this._resolution = value;
		this.markDirty("Resolution");
	}
	private _brush: string = null;
	get brush(): string {
		return this._brush;
	}
	set brush(value: string) {
		this._brush = value;
		this.markDirty("Brush");
	}
	private _actualBrush: string = null;
	get actualBrush(): string {
		return this._actualBrush;
	}
	set actualBrush(value: string) {
		this._actualBrush = value;
		this.markDirty("ActualBrush");
	}
	private _outline: string = null;
	get outline(): string {
		return this._outline;
	}
	set outline(value: string) {
		this._outline = value;
		this.markDirty("Outline");
	}
	private _actualOutline: string = null;
	get actualOutline(): string {
		return this._actualOutline;
	}
	set actualOutline(value: string) {
		this._actualOutline = value;
		this.markDirty("ActualOutline");
	}
	private _thickness: number = 0;
	get thickness(): number {
		return this._thickness;
	}
	set thickness(value: number) {
		this._thickness = value;
		this.markDirty("Thickness");
	}
	private _isHighlightingEnabled: boolean = false;
	get isHighlightingEnabled(): boolean {
		return this._isHighlightingEnabled;
	}
	set isHighlightingEnabled(value: boolean) {
		this._isHighlightingEnabled = value;
		this.markDirty("IsHighlightingEnabled");
	}
	private _isDropShadowEnabled: boolean = false;
	get isDropShadowEnabled(): boolean {
		return this._isDropShadowEnabled;
	}
	set isDropShadowEnabled(value: boolean) {
		this._isDropShadowEnabled = value;
		this.markDirty("IsDropShadowEnabled");
	}
	private _shadowBlur: number = 0;
	get shadowBlur(): number {
		return this._shadowBlur;
	}
	set shadowBlur(value: number) {
		this._shadowBlur = value;
		this.markDirty("ShadowBlur");
	}
	private _shadowColor: string = null;
	get shadowColor(): string {
		return this._shadowColor;
	}
	set shadowColor(value: string) {
		this._shadowColor = value;
		this.markDirty("ShadowColor");
	}
	private _useSingleShadow: boolean = false;
	get useSingleShadow(): boolean {
		return this._useSingleShadow;
	}
	set useSingleShadow(value: boolean) {
		this._useSingleShadow = value;
		this.markDirty("UseSingleShadow");
	}
	private _shadowOffsetX: number = 0;
	get shadowOffsetX(): number {
		return this._shadowOffsetX;
	}
	set shadowOffsetX(value: number) {
		this._shadowOffsetX = value;
		this.markDirty("ShadowOffsetX");
	}
	private _shadowOffsetY: number = 0;
	get shadowOffsetY(): number {
		return this._shadowOffsetY;
	}
	set shadowOffsetY(value: number) {
		this._shadowOffsetY = value;
		this.markDirty("ShadowOffsetY");
	}
	private _areaFillOpacity: number = 0;
	get areaFillOpacity(): number {
		return this._areaFillOpacity;
	}
	set areaFillOpacity(value: number) {
		this._areaFillOpacity = value;
		this.markDirty("AreaFillOpacity");
	}
	private _actualAreaFillOpacity: number = 0;
	get actualAreaFillOpacity(): number {
		return this._actualAreaFillOpacity;
	}
	set actualAreaFillOpacity(value: number) {
		this._actualAreaFillOpacity = value;
		this.markDirty("ActualAreaFillOpacity");
	}
	private _isDefaultToolTipSelected: boolean = false;
	get isDefaultToolTipSelected(): boolean {
		return this._isDefaultToolTipSelected;
	}
	set isDefaultToolTipSelected(value: boolean) {
		this._isDefaultToolTipSelected = value;
		this.markDirty("IsDefaultToolTipSelected");
	}
	private _showDefaultTooltip: boolean = false;
	get showDefaultTooltip(): boolean {
		return this._showDefaultTooltip;
	}
	set showDefaultTooltip(value: boolean) {
		this._showDefaultTooltip = value;
		this.markDirty("ShowDefaultTooltip");
	}
	private _transitionInDuration: number = 0;
	get transitionInDuration(): number {
		return this._transitionInDuration;
	}
	set transitionInDuration(value: number) {
		this._transitionInDuration = value;
		this.markDirty("TransitionInDuration");
	}
	private _transitionInSpeedType: string = null;
	get transitionInSpeedType(): string {
		return this._transitionInSpeedType;
	}
	set transitionInSpeedType(value: string) {
		this._transitionInSpeedType = value;
		this.markDirty("TransitionInSpeedType");
	}
	private _mouseOverEnabled: boolean = false;
	get mouseOverEnabled(): boolean {
		return this._mouseOverEnabled;
	}
	set mouseOverEnabled(value: boolean) {
		this._mouseOverEnabled = value;
		this.markDirty("MouseOverEnabled");
	}
	private _coercionMethodsRef: string = null;
	get coercionMethodsRef(): string {
		return this._coercionMethodsRef;
	}
	set coercionMethodsRef(value: string) {
		this._coercionMethodsRef = value;
		this.markDirty("CoercionMethodsRef");
	}
	private _expectFunctions: boolean = false;
	get expectFunctions(): boolean {
		return this._expectFunctions;
	}
	set expectFunctions(value: boolean) {
		this._expectFunctions = value;
		this.markDirty("ExpectFunctions");
	}
	private _hitTestMode: string = null;
	get hitTestMode(): string {
		return this._hitTestMode;
	}
	set hitTestMode(value: string) {
		this._hitTestMode = value;
		this.markDirty("HitTestMode");
	}
	private _actualHitTestMode: string = null;
	get actualHitTestMode(): string {
		return this._actualHitTestMode;
	}
	set actualHitTestMode(value: string) {
		this._actualHitTestMode = value;
		this.markDirty("ActualHitTestMode");
	}
	private _finalValue: number = 0;
	get finalValue(): number {
		return this._finalValue;
	}
	set finalValue(value: number) {
		this._finalValue = value;
		this.markDirty("FinalValue");
	}
	private _percentChange: number = 0;
	get percentChange(): number {
		return this._percentChange;
	}
	set percentChange(value: number) {
		this._percentChange = value;
		this.markDirty("PercentChange");
	}
	private _renderRequested: string = null;
	get renderRequestedRef(): string {
		return this._renderRequested;
	}
	set renderRequestedRef(value: string) {
		this._renderRequested = value;
		this.markDirty("RenderRequestedRef");
	}
	private _tooltipTemplateRef: string = null;
	get tooltipTemplateRef(): string {
		return this._tooltipTemplateRef;
	}
	set tooltipTemplateRef(value: string) {
		this._tooltipTemplateRef = value;
		this.markDirty("TooltipTemplateRef");
	}
	private _title: string = null;
	get title(): string {
		return this._title;
	}
	set title(value: string) {
		this._title = value;
		this.markDirty("Title");
	}
}


