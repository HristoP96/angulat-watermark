/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RingSeriesBaseDescription } from "./RingSeriesBaseDescription";
import { RingDescription } from "./RingDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class RingSeriesDescription extends RingSeriesBaseDescription {
	static $t: Type = markType(RingSeriesDescription, 'RingSeriesDescription', (<any>RingSeriesBaseDescription).$type);
	protected get_type(): string {
		return "RingSeries";
	}
	constructor() {
		super();
	}
	private _ring: RingDescription = null;
	get ring(): RingDescription {
		return this._ring;
	}
	set ring(value: RingDescription) {
		this._ring = value;
		this.markDirty("Ring");
	}
}


