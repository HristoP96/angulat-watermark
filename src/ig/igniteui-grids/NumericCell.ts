/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TextCell } from "./TextCell";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { GridCellBase } from "./GridCellBase";
import { Base, Type, markType } from "igniteui-core/type";
import { CellContentHorizontalAlignment } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment } from "./CellContentVerticalAlignment";

/**
 * @hidden 
 */
export class NumericCell extends TextCell {
	static $t: Type = markType(NumericCell, 'NumericCell', (<any>TextCell).$type);
	constructor(renderer: DomRenderer) {
		super(renderer);
		this.setHorizontalAlignment(this.textView, CellContentHorizontalAlignment.Right);
		this.setVerticalAlignment(this.textView, CellContentVerticalAlignment.Center);
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyChanged(propertyName, oldValue, newValue);
		if (propertyName == GridCellBase.indentPropertyName || propertyName == GridCellBase.isCollapsablePropertyName) {
			this.textView.setRawStyleProperty("margin-left", this.expansionIndicatorMarginLeft + this.expansionIndicatorWidth + this.expansionIndicatorMarginRight + "px");
		}
	}
}


