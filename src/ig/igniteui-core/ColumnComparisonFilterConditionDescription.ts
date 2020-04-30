/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ColumnFilterConditionDescription } from "./ColumnFilterConditionDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ColumnComparisonFilterConditionDescription extends ColumnFilterConditionDescription {
	static $t: Type = markType(ColumnComparisonFilterConditionDescription, 'ColumnComparisonFilterConditionDescription', (<any>ColumnFilterConditionDescription).$type);
	protected get_type(): string {
		return "ColumnComparisonFilterCondition";
	}
	constructor() {
		super();
	}
	private _operator: string = null;
	get operator(): string {
		return this._operator;
	}
	set operator(value: string) {
		this._operator = value;
		this.markDirty("Operator");
	}
	private _valueRef: string = null;
	get valueRef(): string {
		return this._valueRef;
	}
	set valueRef(value: string) {
		this._valueRef = value;
		this.markDirty("ValueRef");
	}
	private _isCaseSensitive: boolean = false;
	get isCaseSensitive(): boolean {
		return this._isCaseSensitive;
	}
	set isCaseSensitive(value: boolean) {
		this._isCaseSensitive = value;
		this.markDirty("IsCaseSensitive");
	}
}


