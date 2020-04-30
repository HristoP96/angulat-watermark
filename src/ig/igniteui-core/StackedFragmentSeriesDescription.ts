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
export class StackedFragmentSeriesDescription extends Description {
	static $t: Type = markType(StackedFragmentSeriesDescription, 'StackedFragmentSeriesDescription', (<any>Description).$type);
	protected get_type(): string {
		return "StackedFragmentSeries";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
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
	private _isDropShadowEnabled: boolean = false;
	get isDropShadowEnabled(): boolean {
		return this._isDropShadowEnabled;
	}
	set isDropShadowEnabled(value: boolean) {
		this._isDropShadowEnabled = value;
		this.markDirty("IsDropShadowEnabled");
	}
	private _actualIsDropShadowEnabled: boolean = false;
	get actualIsDropShadowEnabled(): boolean {
		return this._actualIsDropShadowEnabled;
	}
	set actualIsDropShadowEnabled(value: boolean) {
		this._actualIsDropShadowEnabled = value;
		this.markDirty("ActualIsDropShadowEnabled");
	}
	private _shadowBlur: number = 0;
	get shadowBlur(): number {
		return this._shadowBlur;
	}
	set shadowBlur(value: number) {
		this._shadowBlur = value;
		this.markDirty("ShadowBlur");
	}
	private _actualShadowBlur: number = 0;
	get actualShadowBlur(): number {
		return this._actualShadowBlur;
	}
	set actualShadowBlur(value: number) {
		this._actualShadowBlur = value;
		this.markDirty("ActualShadowBlur");
	}
	private _shadowColor: string = null;
	get shadowColor(): string {
		return this._shadowColor;
	}
	set shadowColor(value: string) {
		this._shadowColor = value;
		this.markDirty("ShadowColor");
	}
	private _actualShadowColor: string = null;
	get actualShadowColor(): string {
		return this._actualShadowColor;
	}
	set actualShadowColor(value: string) {
		this._actualShadowColor = value;
		this.markDirty("ActualShadowColor");
	}
	private _useSingleShadow: boolean = false;
	get useSingleShadow(): boolean {
		return this._useSingleShadow;
	}
	set useSingleShadow(value: boolean) {
		this._useSingleShadow = value;
		this.markDirty("UseSingleShadow");
	}
	private _actualUseSingleShadow: boolean = false;
	get actualUseSingleShadow(): boolean {
		return this._actualUseSingleShadow;
	}
	set actualUseSingleShadow(value: boolean) {
		this._actualUseSingleShadow = value;
		this.markDirty("ActualUseSingleShadow");
	}
	private _shadowOffsetX: number = 0;
	get shadowOffsetX(): number {
		return this._shadowOffsetX;
	}
	set shadowOffsetX(value: number) {
		this._shadowOffsetX = value;
		this.markDirty("ShadowOffsetX");
	}
	private _actualShadowOffsetX: number = 0;
	get actualShadowOffsetX(): number {
		return this._actualShadowOffsetX;
	}
	set actualShadowOffsetX(value: number) {
		this._actualShadowOffsetX = value;
		this.markDirty("ActualShadowOffsetX");
	}
	private _shadowOffsetY: number = 0;
	get shadowOffsetY(): number {
		return this._shadowOffsetY;
	}
	set shadowOffsetY(value: number) {
		this._shadowOffsetY = value;
		this.markDirty("ShadowOffsetY");
	}
	private _actualShadowOffsetY: number = 0;
	get actualShadowOffsetY(): number {
		return this._actualShadowOffsetY;
	}
	set actualShadowOffsetY(value: number) {
		this._actualShadowOffsetY = value;
		this.markDirty("ActualShadowOffsetY");
	}
	private _legendItemBadgeTemplateRef: string = null;
	get legendItemBadgeTemplateRef(): string {
		return this._legendItemBadgeTemplateRef;
	}
	set legendItemBadgeTemplateRef(value: string) {
		this._legendItemBadgeTemplateRef = value;
		this.markDirty("LegendItemBadgeTemplateRef");
	}
	private _actualLegendItemBadgeTemplateRef: string = null;
	get actualLegendItemBadgeTemplateRef(): string {
		return this._actualLegendItemBadgeTemplateRef;
	}
	set actualLegendItemBadgeTemplateRef(value: string) {
		this._actualLegendItemBadgeTemplateRef = value;
		this.markDirty("ActualLegendItemBadgeTemplateRef");
	}
	private _legendItemTemplateRef: string = null;
	get legendItemTemplateRef(): string {
		return this._legendItemTemplateRef;
	}
	set legendItemTemplateRef(value: string) {
		this._legendItemTemplateRef = value;
		this.markDirty("LegendItemTemplateRef");
	}
	private _actualLegendItemTemplateRef: string = null;
	get actualLegendItemTemplateRef(): string {
		return this._actualLegendItemTemplateRef;
	}
	set actualLegendItemTemplateRef(value: string) {
		this._actualLegendItemTemplateRef = value;
		this.markDirty("ActualLegendItemTemplateRef");
	}
	private _legendItemVisibility: string = null;
	get legendItemVisibility(): string {
		return this._legendItemVisibility;
	}
	set legendItemVisibility(value: string) {
		this._legendItemVisibility = value;
		this.markDirty("LegendItemVisibility");
	}
	private _actualLegendItemVisibility: string = null;
	get actualLegendItemVisibility(): string {
		return this._actualLegendItemVisibility;
	}
	set actualLegendItemVisibility(value: string) {
		this._actualLegendItemVisibility = value;
		this.markDirty("ActualLegendItemVisibility");
	}
	private _markerBrush: string = null;
	get markerBrush(): string {
		return this._markerBrush;
	}
	set markerBrush(value: string) {
		this._markerBrush = value;
		this.markDirty("MarkerBrush");
	}
	private _actualMarkerBrush: string = null;
	get actualMarkerBrush(): string {
		return this._actualMarkerBrush;
	}
	set actualMarkerBrush(value: string) {
		this._actualMarkerBrush = value;
		this.markDirty("ActualMarkerBrush");
	}
	private _markerOutline: string = null;
	get markerOutline(): string {
		return this._markerOutline;
	}
	set markerOutline(value: string) {
		this._markerOutline = value;
		this.markDirty("MarkerOutline");
	}
	private _actualMarkerOutline: string = null;
	get actualMarkerOutline(): string {
		return this._actualMarkerOutline;
	}
	set actualMarkerOutline(value: string) {
		this._actualMarkerOutline = value;
		this.markDirty("ActualMarkerOutline");
	}
	private _markerTemplateRef: string = null;
	get markerTemplateRef(): string {
		return this._markerTemplateRef;
	}
	set markerTemplateRef(value: string) {
		this._markerTemplateRef = value;
		this.markDirty("MarkerTemplateRef");
	}
	private _actualMarkerTemplateRef: string = null;
	get actualMarkerTemplateRef(): string {
		return this._actualMarkerTemplateRef;
	}
	set actualMarkerTemplateRef(value: string) {
		this._actualMarkerTemplateRef = value;
		this.markDirty("ActualMarkerTemplateRef");
	}
	private _markerType: string = null;
	get markerType(): string {
		return this._markerType;
	}
	set markerType(value: string) {
		this._markerType = value;
		this.markDirty("MarkerType");
	}
	private _actualMarkerType: string = null;
	get actualMarkerType(): string {
		return this._actualMarkerType;
	}
	set actualMarkerType(value: string) {
		this._actualMarkerType = value;
		this.markDirty("ActualMarkerType");
	}
	private _name1: string = null;
	get name(): string {
		return this._name1;
	}
	set name(value: string) {
		this._name1 = value;
		this.markDirty("Name");
	}
	private _opacity: number = 0;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		this._opacity = value;
		this.markDirty("Opacity");
	}
	private _actualOpacity: number = 0;
	get actualOpacity(): number {
		return this._actualOpacity;
	}
	set actualOpacity(value: number) {
		this._actualOpacity = value;
		this.markDirty("ActualOpacity");
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
	private _radiusX: number = 0;
	get radiusX(): number {
		return this._radiusX;
	}
	set radiusX(value: number) {
		this._radiusX = value;
		this.markDirty("RadiusX");
	}
	private _actualRadiusX: number = 0;
	get actualRadiusX(): number {
		return this._actualRadiusX;
	}
	set actualRadiusX(value: number) {
		this._actualRadiusX = value;
		this.markDirty("ActualRadiusX");
	}
	private _radiusY: number = 0;
	get radiusY(): number {
		return this._radiusY;
	}
	set radiusY(value: number) {
		this._radiusY = value;
		this.markDirty("RadiusY");
	}
	private _actualRadiusY: number = 0;
	get actualRadiusY(): number {
		return this._actualRadiusY;
	}
	set actualRadiusY(value: number) {
		this._actualRadiusY = value;
		this.markDirty("ActualRadiusY");
	}
	private _thickness: number = 0;
	get thickness(): number {
		return this._thickness;
	}
	set thickness(value: number) {
		this._thickness = value;
		this.markDirty("Thickness");
	}
	private _actualThickness: number = 0;
	get actualThickness(): number {
		return this._actualThickness;
	}
	set actualThickness(value: number) {
		this._actualThickness = value;
		this.markDirty("ActualThickness");
	}
	private _titleRef: string = null;
	get titleRef(): string {
		return this._titleRef;
	}
	set titleRef(value: string) {
		this._titleRef = value;
		this.markDirty("TitleRef");
	}
	private _valueMemberPath: string = null;
	get valueMemberPath(): string {
		return this._valueMemberPath;
	}
	set valueMemberPath(value: string) {
		this._valueMemberPath = value;
		this.markDirty("ValueMemberPath");
	}
	private _visibility: string = null;
	get visibility(): string {
		return this._visibility;
	}
	set visibility(value: string) {
		this._visibility = value;
		this.markDirty("Visibility");
	}
	private _actualVisibility: string = null;
	get actualVisibility(): string {
		return this._actualVisibility;
	}
	set actualVisibility(value: string) {
		this._actualVisibility = value;
		this.markDirty("ActualVisibility");
	}
	private _parentOrLocalBrush: string = null;
	get parentOrLocalBrush(): string {
		return this._parentOrLocalBrush;
	}
	set parentOrLocalBrush(value: string) {
		this._parentOrLocalBrush = value;
		this.markDirty("ParentOrLocalBrush");
	}
	private _propertyUpdated: string = null;
	get propertyUpdatedRef(): string {
		return this._propertyUpdated;
	}
	set propertyUpdatedRef(value: string) {
		this._propertyUpdated = value;
		this.markDirty("PropertyUpdatedRef");
	}
}


