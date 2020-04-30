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
export class OperationFilterExpressionDescription extends FilterExpressionDescription {
	static $t: Type = markType(OperationFilterExpressionDescription, 'OperationFilterExpressionDescription', (<any>FilterExpressionDescription).$type);
	protected get_type(): string {
		return "OperationFilterExpression";
	}
	constructor() {
		super();
	}
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
		this.markDirty("PropertyName");
	}
	private _valueRef: string = null;
	get valueRef(): string {
		return this._valueRef;
	}
	set valueRef(value: string) {
		this._valueRef = value;
		this.markDirty("ValueRef");
	}
	private _left: FilterExpressionDescription = null;
	get left(): FilterExpressionDescription {
		return this._left;
	}
	set left(value: FilterExpressionDescription) {
		this._left = value;
		this.markDirty("Left");
	}
	private _right: FilterExpressionDescription = null;
	get right(): FilterExpressionDescription {
		return this._right;
	}
	set right(value: FilterExpressionDescription) {
		this._right = value;
		this.markDirty("Right");
	}
	private _operator: string = null;
	get operator(): string {
		return this._operator;
	}
	set operator(value: string) {
		this._operator = value;
		this.markDirty("Operator");
	}
}


