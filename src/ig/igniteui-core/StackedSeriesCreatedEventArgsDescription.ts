/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { StyleDescription } from "./StyleDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class StackedSeriesCreatedEventArgsDescription extends Description {
	static $t: Type = markType(StackedSeriesCreatedEventArgsDescription, 'StackedSeriesCreatedEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "StackedSeriesCreatedEventArgs";
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
	private _legendItemTemplateRef: string = null;
	get legendItemTemplateRef(): string {
		return this._legendItemTemplateRef;
	}
	set legendItemTemplateRef(value: string) {
		this._legendItemTemplateRef = value;
		this.markDirty("LegendItemTemplateRef");
	}
	private _legendItemBadgeTemplateRef: string = null;
	get legendItemBadgeTemplateRef(): string {
		return this._legendItemBadgeTemplateRef;
	}
	set legendItemBadgeTemplateRef(value: string) {
		this._legendItemBadgeTemplateRef = value;
		this.markDirty("LegendItemBadgeTemplateRef");
	}
	private _legendItemVisibility: string = null;
	get legendItemVisibility(): string {
		return this._legendItemVisibility;
	}
	set legendItemVisibility(value: string) {
		this._legendItemVisibility = value;
		this.markDirty("LegendItemVisibility");
	}
	private _outline: string = null;
	get outline(): string {
		return this._outline;
	}
	set outline(value: string) {
		this._outline = value;
		this.markDirty("Outline");
	}
	private _thickness: number = 0;
	get thickness(): number {
		return this._thickness;
	}
	set thickness(value: number) {
		this._thickness = value;
		this.markDirty("Thickness");
	}
	private _titleRef: string = null;
	get titleRef(): string {
		return this._titleRef;
	}
	set titleRef(value: string) {
		this._titleRef = value;
		this.markDirty("TitleRef");
	}
	private _markerBrush: string = null;
	get markerBrush(): string {
		return this._markerBrush;
	}
	set markerBrush(value: string) {
		this._markerBrush = value;
		this.markDirty("MarkerBrush");
	}
	private _markerOutline: string = null;
	get markerOutline(): string {
		return this._markerOutline;
	}
	set markerOutline(value: string) {
		this._markerOutline = value;
		this.markDirty("MarkerOutline");
	}
	private _markerStyle: StyleDescription = null;
	get markerStyle(): StyleDescription {
		return this._markerStyle;
	}
	set markerStyle(value: StyleDescription) {
		this._markerStyle = value;
		this.markDirty("MarkerStyle");
	}
	private _markerTemplateRef: string = null;
	get markerTemplateRef(): string {
		return this._markerTemplateRef;
	}
	set markerTemplateRef(value: string) {
		this._markerTemplateRef = value;
		this.markDirty("MarkerTemplateRef");
	}
	private _markerType: string = null;
	get markerType(): string {
		return this._markerType;
	}
	set markerType(value: string) {
		this._markerType = value;
		this.markDirty("MarkerType");
	}
}


