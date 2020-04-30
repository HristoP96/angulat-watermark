/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PolarLineSeriesBaseDescription } from "./PolarLineSeriesBaseDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PolarSplineSeriesDescription extends PolarLineSeriesBaseDescription {
	static $t: Type = markType(PolarSplineSeriesDescription, 'PolarSplineSeriesDescription', (<any>PolarLineSeriesBaseDescription).$type);
	protected get_type(): string {
		return "PolarSplineSeries";
	}
	constructor() {
		super();
	}
	private _stiffness: number = 0;
	get stiffness(): number {
		return this._stiffness;
	}
	set stiffness(value: number) {
		this._stiffness = value;
		this.markDirty("Stiffness");
	}
}


