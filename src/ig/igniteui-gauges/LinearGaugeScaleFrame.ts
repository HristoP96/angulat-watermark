/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LinearGraphScaleFrame } from "./LinearGraphScaleFrame";
import { LinearGraphNeedleFrame } from "./LinearGraphNeedleFrame";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class LinearGaugeScaleFrame extends LinearGraphScaleFrame {
	static $t: Type = markType(LinearGaugeScaleFrame, 'LinearGaugeScaleFrame', (<any>LinearGraphScaleFrame).$type);
	constructor() {
		super();
		this.needle = new LinearGraphNeedleFrame();
	}
	private _needle: LinearGraphNeedleFrame = null;
	get needle(): LinearGraphNeedleFrame {
		return this._needle;
	}
	set needle(value: LinearGraphNeedleFrame) {
		this._needle = value;
	}
	interpolate(p: number, previous: LinearGraphScaleFrame, next: LinearGraphScaleFrame): void {
		super.interpolate(p, previous, next);
		this.needle = LinearGraphNeedleFrame.interpolate(p, 1 - p, (<LinearGaugeScaleFrame>previous).needle, (<LinearGaugeScaleFrame>next).needle);
	}
}


