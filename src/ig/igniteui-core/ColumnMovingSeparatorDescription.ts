/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DefinitionBaseDescription } from "./DefinitionBaseDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ColumnMovingSeparatorDescription extends DefinitionBaseDescription {
	static $t: Type = markType(ColumnMovingSeparatorDescription, 'ColumnMovingSeparatorDescription', (<any>DefinitionBaseDescription).$type);
	protected get_type(): string {
		return "ColumnMovingSeparator";
	}
	constructor() {
		super();
	}
	private _separatorWidth: number = 0;
	get separatorWidth(): number {
		return this._separatorWidth;
	}
	set separatorWidth(value: number) {
		this._separatorWidth = value;
		this.markDirty("SeparatorWidth");
	}
}


