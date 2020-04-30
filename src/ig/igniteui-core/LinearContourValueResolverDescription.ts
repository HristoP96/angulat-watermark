/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ContourValueResolverDescription } from "./ContourValueResolverDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class LinearContourValueResolverDescription extends ContourValueResolverDescription {
	static $t: Type = markType(LinearContourValueResolverDescription, 'LinearContourValueResolverDescription', (<any>ContourValueResolverDescription).$type);
	protected get_type(): string {
		return "LinearContourValueResolver";
	}
	constructor() {
		super();
	}
	private _valueCount: number = 0;
	get valueCount(): number {
		return this._valueCount;
	}
	set valueCount(value: number) {
		this._valueCount = value;
		this.markDirty("ValueCount");
	}
}


