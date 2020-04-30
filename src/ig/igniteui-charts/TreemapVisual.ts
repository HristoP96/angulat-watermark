/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { FontInfo } from "igniteui-core/FontInfo";
import { Brush } from "igniteui-core/Brush";
import { Thickness } from "igniteui-core/Thickness";
import { Rect } from "igniteui-core/Rect";
import { Visibility } from "igniteui-core/Visibility";
import { List$1 } from "igniteui-core/List$1";
import { HorizontalAlignment } from "igniteui-core/HorizontalAlignment";
import { VerticalAlignment } from "igniteui-core/VerticalAlignment";

/**
 * @hidden 
 */
export class TreemapVisual extends Base {
	static $t: Type = markType(TreemapVisual, 'TreemapVisual');
	constructor() {
		super();
		this.concreteElements = new List$1<any>((<any>Base).$type, 0);
	}
	private _fontInfo: FontInfo = null;
	get fontInfo(): FontInfo {
		return this._fontInfo;
	}
	set fontInfo(value: FontInfo) {
		this._fontInfo = value;
	}
	private _fillBrush: Brush = null;
	get fillBrush(): Brush {
		return this._fillBrush;
	}
	set fillBrush(value: Brush) {
		this._fillBrush = value;
	}
	private _outlineBrush: Brush = null;
	get outlineBrush(): Brush {
		return this._outlineBrush;
	}
	set outlineBrush(value: Brush) {
		this._outlineBrush = value;
	}
	private _headerBrush: Brush = null;
	get headerBrush(): Brush {
		return this._headerBrush;
	}
	set headerBrush(value: Brush) {
		this._headerBrush = value;
	}
	private _headerLabelMargin: Thickness = null;
	get headerLabelMargin(): Thickness {
		return this._headerLabelMargin;
	}
	set headerLabelMargin(value: Thickness) {
		this._headerLabelMargin = value;
	}
	private _labelMargin: Thickness = null;
	get labelMargin(): Thickness {
		return this._labelMargin;
	}
	set labelMargin(value: Thickness) {
		this._labelMargin = value;
	}
	private _headerText: string = null;
	get headerText(): string {
		return this._headerText;
	}
	set headerText(value: string) {
		this._headerText = value;
	}
	private _nodeFontBrush: Brush = null;
	get nodeFontBrush(): Brush {
		return this._nodeFontBrush;
	}
	set nodeFontBrush(value: Brush) {
		this._nodeFontBrush = value;
	}
	private _bounds: Rect = null;
	get bounds(): Rect {
		return this._bounds;
	}
	set bounds(value: Rect) {
		this._bounds = value;
	}
	private _visibility: Visibility = <Visibility>0;
	get visibility(): Visibility {
		return this._visibility;
	}
	set visibility(value: Visibility) {
		this._visibility = value;
	}
	private _concreteElements: List$1<any> = null;
	get concreteElements(): List$1<any> {
		return this._concreteElements;
	}
	set concreteElements(value: List$1<any>) {
		this._concreteElements = value;
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
	}
	private _isLeaf: boolean = false;
	get isLeaf(): boolean {
		return this._isLeaf;
	}
	set isLeaf(value: boolean) {
		this._isLeaf = value;
	}
	private _headerWidth: number = 0;
	get headerWidth(): number {
		return this._headerWidth;
	}
	set headerWidth(value: number) {
		this._headerWidth = value;
	}
	private _headerHeight: number = 0;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		this._headerHeight = value;
	}
	private _headerVisibility: Visibility = <Visibility>0;
	get headerVisibility(): Visibility {
		return this._headerVisibility;
	}
	set headerVisibility(value: Visibility) {
		this._headerVisibility = value;
	}
	private _overlayHeaderVisibility: Visibility = <Visibility>0;
	get overlayHeaderVisibility(): Visibility {
		return this._overlayHeaderVisibility;
	}
	set overlayHeaderVisibility(value: Visibility) {
		this._overlayHeaderVisibility = value;
	}
	private _leafVisibility: Visibility = <Visibility>0;
	get leafVisibility(): Visibility {
		return this._leafVisibility;
	}
	set leafVisibility(value: Visibility) {
		this._leafVisibility = value;
	}
	private _labelHorizontalAlignment: HorizontalAlignment = <HorizontalAlignment>0;
	get labelHorizontalAlignment(): HorizontalAlignment {
		return this._labelHorizontalAlignment;
	}
	set labelHorizontalAlignment(value: HorizontalAlignment) {
		this._labelHorizontalAlignment = value;
	}
	private _labelVerticalAlignment: VerticalAlignment = <VerticalAlignment>0;
	get labelVerticalAlignment(): VerticalAlignment {
		return this._labelVerticalAlignment;
	}
	set labelVerticalAlignment(value: VerticalAlignment) {
		this._labelVerticalAlignment = value;
	}
}


