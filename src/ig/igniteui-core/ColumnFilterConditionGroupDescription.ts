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
export class ColumnFilterConditionGroupDescription extends ColumnFilterConditionDescription {
	static $t: Type = markType(ColumnFilterConditionGroupDescription, 'ColumnFilterConditionGroupDescription', (<any>ColumnFilterConditionDescription).$type);
	protected get_type(): string {
		return "ColumnFilterConditionGroup";
	}
	constructor() {
		super();
	}
	private _usesOrOperator: boolean = false;
	get usesOrOperator(): boolean {
		return this._usesOrOperator;
	}
	set usesOrOperator(value: boolean) {
		this._usesOrOperator = value;
		this.markDirty("UsesOrOperator");
	}
	private _item: ColumnFilterConditionDescription = null;
	get item(): ColumnFilterConditionDescription {
		return this._item;
	}
	set item(value: ColumnFilterConditionDescription) {
		this._item = value;
		this.markDirty("Item");
	}
}


