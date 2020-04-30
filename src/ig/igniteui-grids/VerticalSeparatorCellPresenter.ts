/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellPresenterBase } from "./CellPresenterBase";
import { VerticalSeparatorCell } from "./VerticalSeparatorCell";
import { GridCellBase } from "./GridCellBase";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class VerticalSeparatorCellPresenter extends CellPresenterBase {
	static $t: Type = markType(VerticalSeparatorCellPresenter, 'VerticalSeparatorCellPresenter', (<any>CellPresenterBase).$type);
	get rowSeparatorCell(): VerticalSeparatorCell {
		return <VerticalSeparatorCell>this.cell;
	}
	constructor(cell: GridCellBase) {
		super(cell);
	}
}


