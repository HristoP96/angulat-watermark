/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CanvasGridCellBase } from "./CanvasGridCellBase";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { Base, Type, markType } from "igniteui-core/type";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";

/**
 * @hidden 
 */
export class CanvasSectionHeaderCell extends CanvasGridCellBase {
	static $t: Type = markType(CanvasSectionHeaderCell, 'CanvasSectionHeaderCell', (<any>CanvasGridCellBase).$type);
	constructor(renderer: DomRenderer) {
		super(renderer);
		this.setHorizontalAlignment(CellContentHorizontalAlignment.Left);
		this.setVerticalAlignment(CellContentVerticalAlignment.Center);
	}
	protected get_isPlaceholderSupported(): boolean {
		return true;
	}
}


