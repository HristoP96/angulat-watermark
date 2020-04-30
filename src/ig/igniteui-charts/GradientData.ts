/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { GradientStopData } from "./GradientStopData";

/**
 * @hidden 
 */
export class GradientData extends Base {
	static $t: Type = markType(GradientData, 'GradientData');
	constructor() {
		super();
		this.gradientStops = new List$1<GradientStopData>((<any>GradientStopData).$type, 0);
	}
	private _gradientStops: List$1<GradientStopData> = null;
	get gradientStops(): List$1<GradientStopData> {
		return this._gradientStops;
	}
	set gradientStops(value: List$1<GradientStopData>) {
		this._gradientStops = value;
	}
	sort(): void {
		this.gradientStops.sort2((o1: GradientStopData, o2: GradientStopData) => Base.compareSimple((<GradientStopData>o1).offset, (<GradientStopData>o2).offset));
	}
}


