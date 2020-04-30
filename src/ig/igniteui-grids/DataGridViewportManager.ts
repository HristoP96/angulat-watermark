/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { IViewportManager, IViewportManager_$type } from "./IViewportManager";

/**
 * @hidden 
 */
export class DataGridViewportManager extends Base implements IViewportManager {
	static $t: Type = markType(DataGridViewportManager, 'DataGridViewportManager', (<any>Base).$type, [IViewportManager_$type]);
	private _grid: any = null;
	constructor(owner: any) {
		super();
		this._grid = owner;
	}
	moveViewportTo(x_: number, y_: number): void {
		let grid_ = this._grid;
		if (grid_._scrollTo) { grid_._scrollTo(x_, y_); } else { grid_.scrollTo(x_, y_) };
	}
}


