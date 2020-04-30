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
export class PropertyReferenceFilterExpressionDescription extends FilterExpressionDescription {
	static $t: Type = markType(PropertyReferenceFilterExpressionDescription, 'PropertyReferenceFilterExpressionDescription', (<any>FilterExpressionDescription).$type);
	protected get_type(): string {
		return "PropertyReferenceFilterExpression";
	}
	constructor() {
		super();
	}
	private _propertyReference: string = null;
	get propertyReference(): string {
		return this._propertyReference;
	}
	set propertyReference(value: string) {
		this._propertyReference = value;
		this.markDirty("PropertyReference");
	}
}


