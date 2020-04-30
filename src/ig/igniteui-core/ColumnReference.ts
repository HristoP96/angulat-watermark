/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IFastItemColumnInternal } from "./IFastItemColumnInternal";

/**
 * @hidden 
 */
export class ColumnReference extends Base {
	static $t: Type = markType(ColumnReference, 'ColumnReference');
	constructor(fastItemColumn: IFastItemColumnInternal) {
		super();
		this.fastItemColumn = fastItemColumn;
		this.references = 0;
	}
	fastItemColumn: IFastItemColumnInternal = null;
	private _references: number = 0;
	get references(): number {
		return this._references;
	}
	set references(value: number) {
		this._references = value;
	}
}


