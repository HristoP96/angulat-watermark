/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FilterExpressionDescription } from "./FilterExpressionDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class FunctionFilterExpressionDescription extends FilterExpressionDescription {
	static $t: Type = markType(FunctionFilterExpressionDescription, 'FunctionFilterExpressionDescription', (<any>FilterExpressionDescription).$type);
	protected get_type(): string {
		return "FunctionFilterExpression";
	}
	constructor() {
		super();
	}
	private _functionType: string = null;
	get functionType(): string {
		return this._functionType;
	}
	set functionType(value: string) {
		this._functionType = value;
		this.markDirty("FunctionType");
	}
}


