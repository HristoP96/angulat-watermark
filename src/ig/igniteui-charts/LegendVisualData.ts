/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { LegendVisualDataList } from "./LegendVisualDataList";
import { RectData } from "igniteui-core/RectData";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { List$1 } from "igniteui-core/List$1";
import { LegendItemVisualData } from "./LegendItemVisualData";

/**
 * @hidden 
 */
export class LegendVisualData extends Base {
	static $t: Type = markType(LegendVisualData, 'LegendVisualData');
	constructor() {
		super();
		this.items = new LegendVisualDataList();
	}
	private _items: LegendVisualDataList = null;
	get items(): LegendVisualDataList {
		return this._items;
	}
	set items(value: LegendVisualDataList) {
		this._items = value;
	}
	private _viewport: RectData = null;
	get viewport(): RectData {
		return this._viewport;
	}
	set viewport(value: RectData) {
		this._viewport = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("width: " + this.width + ",");
		sb.appendLine1("height: " + this.height + ",");
		sb.appendLine1("items: [");
		for (let i = 0; i < this.items.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.items._inner[i].serialize());
		}
		sb.appendLine1("],");
		sb.appendLine1("}");
		return sb.toString();
	}
}


