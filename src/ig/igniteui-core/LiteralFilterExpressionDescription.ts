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
export class LiteralFilterExpressionDescription extends FilterExpressionDescription {
	static $t: Type = markType(LiteralFilterExpressionDescription, 'LiteralFilterExpressionDescription', (<any>FilterExpressionDescription).$type);
	protected get_type(): string {
		return "LiteralFilterExpression";
	}
	constructor() {
		super();
	}
	private _literalValueRef: string = null;
	get literalValueRef(): string {
		return this._literalValueRef;
	}
	set literalValueRef(value: string) {
		this._literalValueRef = value;
		this.markDirty("LiteralValueRef");
	}
	private _leaveUnquoted: boolean = false;
	get leaveUnquoted(): boolean {
		return this._leaveUnquoted;
	}
	set leaveUnquoted(value: boolean) {
		this._leaveUnquoted = value;
		this.markDirty("LeaveUnquoted");
	}
}


