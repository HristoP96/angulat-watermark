/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { BrushAppearanceData } from "igniteui-core/BrushAppearanceData";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";
import { ColumnSortDirection } from "./ColumnSortDirection";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { stringIsNullOrEmpty, stringEndsWith } from "igniteui-core/string";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CellModelExport extends Base {
	static $t: Type = markType(CellModelExport, 'CellModelExport');
	private _x: number = 0;
	get x(): number {
		return this._x;
	}
	set x(value: number) {
		this._x = value;
	}
	private _y: number = 0;
	get y(): number {
		return this._y;
	}
	set y(value: number) {
		this._y = value;
	}
	private _snappedX: number = 0;
	get snappedX(): number {
		return this._snappedX;
	}
	set snappedX(value: number) {
		this._snappedX = value;
	}
	private _snappedY: number = 0;
	get snappedY(): number {
		return this._snappedY;
	}
	set snappedY(value: number) {
		this._snappedY = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _selectedStatus: number = 0;
	get selectedStatus(): number {
		return this._selectedStatus;
	}
	set selectedStatus(value: number) {
		this._selectedStatus = value;
	}
	private _activationStatus: number = 0;
	get activationStatus(): number {
		return this._activationStatus;
	}
	set activationStatus(value: number) {
		this._activationStatus = value;
	}
	private _opacity: number = 0;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		this._opacity = value;
	}
	private _backgroundBrushData: BrushAppearanceData = null;
	get backgroundBrushData(): BrushAppearanceData {
		return this._backgroundBrushData;
	}
	set backgroundBrushData(value: BrushAppearanceData) {
		this._backgroundBrushData = value;
	}
	private _horizontalAlignment: CellContentHorizontalAlignment = <CellContentHorizontalAlignment>0;
	get horizontalAlignment(): CellContentHorizontalAlignment {
		return this._horizontalAlignment;
	}
	set horizontalAlignment(value: CellContentHorizontalAlignment) {
		this._horizontalAlignment = value;
	}
	private _verticalAlignment: CellContentVerticalAlignment = <CellContentVerticalAlignment>0;
	get verticalAlignment(): CellContentVerticalAlignment {
		return this._verticalAlignment;
	}
	set verticalAlignment(value: CellContentVerticalAlignment) {
		this._verticalAlignment = value;
	}
	private _renderValue: string = null;
	get renderValue(): string {
		return this._renderValue;
	}
	set renderValue(value: string) {
		this._renderValue = value;
	}
	private _textColor: BrushAppearanceData = null;
	get textColor(): BrushAppearanceData {
		return this._textColor;
	}
	set textColor(value: BrushAppearanceData) {
		this._textColor = value;
	}
	private _fontStyle: string = null;
	get fontStyle(): string {
		return this._fontStyle;
	}
	set fontStyle(value: string) {
		this._fontStyle = value;
	}
	private _fontVariant: string = null;
	get fontVariant(): string {
		return this._fontVariant;
	}
	set fontVariant(value: string) {
		this._fontVariant = value;
	}
	private _fontWeight: string = null;
	get fontWeight(): string {
		return this._fontWeight;
	}
	set fontWeight(value: string) {
		this._fontWeight = value;
	}
	private _fontSize: number = 0;
	get fontSize(): number {
		return this._fontSize;
	}
	set fontSize(value: number) {
		this._fontSize = value;
	}
	private _fontFamily: string = null;
	get fontFamily(): string {
		return this._fontFamily;
	}
	set fontFamily(value: string) {
		this._fontFamily = value;
	}
	private _fontStretch: string = null;
	get fontStretch(): string {
		return this._fontStretch;
	}
	set fontStretch(value: string) {
		this._fontStretch = value;
	}
	private _virtualizationPercentage: number = 0;
	get virtualizationPercentage(): number {
		return this._virtualizationPercentage;
	}
	set virtualizationPercentage(value: number) {
		this._virtualizationPercentage = value;
	}
	private _sortDirection: ColumnSortDirection = <ColumnSortDirection>0;
	get sortDirection(): ColumnSortDirection {
		return this._sortDirection;
	}
	set sortDirection(value: ColumnSortDirection) {
		this._sortDirection = value;
	}
	private _indent: number = 0;
	get indent(): number {
		return this._indent;
	}
	set indent(value: number) {
		this._indent = value;
	}
	private _isCollapsable: boolean = false;
	get isCollapsable(): boolean {
		return this._isCollapsable;
	}
	set isCollapsable(value: boolean) {
		this._isCollapsable = value;
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.append5("{ ");
		sb.append5("type : \"" + this.type + "\", ");
		sb.append5("x : " + this.x + ", ");
		sb.append5("y : " + this.y + ", ");
		sb.append5("snappedX : " + this.snappedX + ", ");
		sb.append5("snappedY : " + this.snappedY + ", ");
		sb.append5("height : " + this.height + ", ");
		sb.append5("width : " + this.width + ", ");
		sb.append5("lineBreakMode: \"" + this.lineBreakMode + "\", ");
		sb.append5("selectedStatus : " + this.selectedStatus + ", ");
		sb.append5("activationStatus : " + this.activationStatus + ", ");
		sb.append5("virtualizationPercentage : " + this.virtualizationPercentage + ", ");
		sb.append5("backgroundBrushData : " + this.backgroundBrushData.serialize() + ", ");
		sb.append5("opacity : " + this.opacity + ", ");
		if (this.horizontalAlignment != null) {
			sb.append5("horizontalAlignment : " + <number>this.horizontalAlignment + ", ");
		}
		if (this.verticalAlignment != null) {
			sb.append5("verticalAlignment : " + <number>this.verticalAlignment + ", ");
		}
		sb.append5("renderValue : \"" + this.renderValue + "\", ");
		if (this.textColor != null) {
			sb.append5("textColor : " + this.textColor.serialize() + ", ");
		}
		if (!stringIsNullOrEmpty(this.fontStyle)) {
			sb.append5("fontStyle : \"" + this.fontStyle + "\", ");
		}
		if (!stringIsNullOrEmpty(this.fontVariant)) {
			sb.append5("fontVariant : \"" + this.fontVariant + "\", ");
		}
		if (!stringIsNullOrEmpty(this.fontWeight)) {
			sb.append5("fontWeight : \"" + this.fontWeight + "\", ");
		}
		if (!stringIsNullOrEmpty(this.fontFamily)) {
			sb.append5("fontFamily : \"" + this.fontFamily + "\", ");
		}
		if (!stringIsNullOrEmpty(this.fontStretch)) {
			sb.append5("fontStretch : \"" + this.fontStretch + "\", ");
		}
		if (!isNaN_(this.fontSize)) {
			sb.append5("fontSize : " + this.fontSize + ", ");
		}
		sb.append5("sortDirection : " + <number>this.sortDirection + ", ");
		sb.append5("indent : " + this.indent + ", ");
		sb.append5("isCollapsable : " + this.isCollapsable.toString().toLowerCase() + ", ");
		this.serializeOverride(sb);
		let result = sb.toString();
		if (stringEndsWith(result, ", ")) {
			result = result.substr(0, result.length - 2);
		}
		result += "} ";
		return result;
	}
	protected get_type(): string {
		return "Cell";
	}
	protected get type(): string {
		return this.get_type();
	}
	private _lineBreakMode: string = null;
	get lineBreakMode(): string {
		return this._lineBreakMode;
	}
	set lineBreakMode(value: string) {
		this._lineBreakMode = value;
	}
	protected serializeOverride(sb: StringBuilder): void {
	}
}


