/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellInfoDescription } from "./CellInfoDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TemplateCellInfoDescription extends CellInfoDescription {
	static $t: Type = markType(TemplateCellInfoDescription, 'TemplateCellInfoDescription', (<any>CellInfoDescription).$type);
	protected get_type(): string {
		return "TemplateCellInfo";
	}
	constructor() {
		super();
	}
	private _valueRef: string = null;
	get valueRef(): string {
		return this._valueRef;
	}
	set valueRef(value: string) {
		this._valueRef = value;
		this.markDirty("ValueRef");
	}
}


