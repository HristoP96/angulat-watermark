/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellPresenterBase } from "./CellPresenterBase";
import { RowSeparatorCell } from "./RowSeparatorCell";
import { GridCellBase } from "./GridCellBase";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class RowSeparatorCellPresenter extends CellPresenterBase {
	static $t: Type = markType(RowSeparatorCellPresenter, 'RowSeparatorCellPresenter', (<any>CellPresenterBase).$type);
	get rowSeparatorCell(): RowSeparatorCell {
		return <RowSeparatorCell>this.cell;
	}
	constructor(cell: GridCellBase) {
		super(cell);
	}
}


