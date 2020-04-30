/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { CellModelExport } from "./CellModelExport";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class GridLayerExport extends Base {
	static $t: Type = markType(GridLayerExport, 'GridLayerExport');
	private _cells: List$1<CellModelExport> = null;
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	get cells(): List$1<CellModelExport> {
		return this._cells;
	}
	constructor(name: string) {
		super();
		this.name = name;
		this._cells = new List$1<CellModelExport>((<any>CellModelExport).$type, 0);
	}
	add($export: CellModelExport): void {
		this._cells.add($export);
	}
	clear(): void {
		this._cells.clear();
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("name: \"" + this.name + "\", cells: [");
		for (let i: number = 0; i < this._cells.count; i++) {
			sb.append5(this._cells._inner[i].serialize());
			if (i < this._cells.count - 1) {
				sb.append5(", ");
			}
		}
		sb.append5("]");
		sb.append5("}");
		return sb.toString();
	}
}


