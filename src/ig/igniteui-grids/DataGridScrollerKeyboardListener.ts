/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { IScrollerKeyboardListener, IScrollerKeyboardListener_$type } from "igniteui-core/IScrollerKeyboardListener";
import { Grid } from "./Grid";

/**
 * @hidden 
 */
export class DataGridScrollerKeyboardListener extends Base implements IScrollerKeyboardListener {
	static $t: Type = markType(DataGridScrollerKeyboardListener, 'DataGridScrollerKeyboardListener', (<any>Base).$type, [IScrollerKeyboardListener_$type]);
	private _grid: Grid = null;
	constructor(grid: Grid) {
		super();
		this._grid = grid;
	}
	onDownArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		return this._grid.onDownArrow(isShiftPressed, isCtrlPressed);
	}
	onEnd(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		return this._grid.onEnd(isShiftPressed, isCtrlPressed);
	}
	onHome(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		return this._grid.onHome(isShiftPressed, isCtrlPressed);
	}
	onLeftArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		return this._grid.onLeftArrow(isShiftPressed, isCtrlPressed);
	}
	onPageDown(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		return this._grid.onPageDown(isShiftPressed, isCtrlPressed);
	}
	onPageUp(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		return this._grid.onPageUp(isShiftPressed, isCtrlPressed);
	}
	onRightArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		return this._grid.onRightArrow(isShiftPressed, isCtrlPressed);
	}
	onTab(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		return this._grid.onTab(isShiftPressed, isCtrlPressed);
	}
	onUpArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		return this._grid.onUpArrow(isShiftPressed, isCtrlPressed);
	}
	onWheel(): void {
		this._grid.onWheel();
	}
	onEnter(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		return this._grid.onEnter(isShiftPressed, isCtrlPressed);
	}
}


