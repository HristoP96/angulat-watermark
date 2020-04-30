/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { ToolTipItemVisualData } from "./ToolTipItemVisualData";
import { ColorData } from "igniteui-core/ColorData";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class LinearGraphToolTipVisualData extends Base {
	static $t: Type = markType(LinearGraphToolTipVisualData, 'LinearGraphToolTipVisualData');
	private _item: ToolTipItemVisualData = null;
	get item(): ToolTipItemVisualData {
		return this._item;
	}
	set item(value: ToolTipItemVisualData) {
		this._item = value;
	}
	private _outline: ColorData = null;
	get outline(): ColorData {
		return this._outline;
	}
	set outline(value: ColorData) {
		this._outline = value;
	}
	private _itemBrush: ColorData = null;
	get itemBrush(): ColorData {
		return this._itemBrush;
	}
	set itemBrush(value: ColorData) {
		this._itemBrush = value;
	}
	private _thickness: number = 0;
	get thickness(): number {
		return this._thickness;
	}
	set thickness(value: number) {
		this._thickness = value;
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		sb.append5("{ item: ");
		if (this.item != null) {
			sb.append5(this.item.serialize());
		}
		sb.append5(", ");
		sb.append5("outline: ");
		sb.append5(this.outline.serialize());
		sb.append5(", ");
		sb.append5("itemBrush: ");
		sb.append5(this.itemBrush.serialize());
		sb.append5(", ");
		sb.append5("thickness: ");
		sb.append5(this.thickness.toString());
		sb.append5("}");
		return sb.toString();
	}
}


