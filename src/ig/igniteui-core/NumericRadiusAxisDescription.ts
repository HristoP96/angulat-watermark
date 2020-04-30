/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NumericAxisBaseDescription } from "./NumericAxisBaseDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class NumericRadiusAxisDescription extends NumericAxisBaseDescription {
	static $t: Type = markType(NumericRadiusAxisDescription, 'NumericRadiusAxisDescription', (<any>NumericAxisBaseDescription).$type);
	protected get_type(): string {
		return "NumericRadiusAxis";
	}
	constructor() {
		super();
	}
	private _radiusExtentScale: number = 0;
	get radiusExtentScale(): number {
		return this._radiusExtentScale;
	}
	set radiusExtentScale(value: number) {
		this._radiusExtentScale = value;
		this.markDirty("RadiusExtentScale");
	}
	private _innerRadiusExtentScale: number = 0;
	get innerRadiusExtentScale(): number {
		return this._innerRadiusExtentScale;
	}
	set innerRadiusExtentScale(value: number) {
		this._innerRadiusExtentScale = value;
		this.markDirty("InnerRadiusExtentScale");
	}
}


