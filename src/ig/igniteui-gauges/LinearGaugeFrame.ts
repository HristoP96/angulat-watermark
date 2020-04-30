/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LinearGraphFrame } from "./LinearGraphFrame";
import { LinearGraphScaleFrame } from "./LinearGraphScaleFrame";
import { LinearGaugeScaleFrame } from "./LinearGaugeScaleFrame";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class LinearGaugeFrame extends LinearGraphFrame {
	static $t: Type = markType(LinearGaugeFrame, 'LinearGaugeFrame', (<any>LinearGraphFrame).$type);
	constructor() {
		super();
		this.scaleFrame = new LinearGaugeScaleFrame();
	}
	private _scaleFrame: LinearGraphScaleFrame = null;
	protected get_scaleFrame(): LinearGraphScaleFrame {
		return this._scaleFrame;
	}
	protected set_scaleFrame(value: LinearGraphScaleFrame): void {
		this._scaleFrame = value;
	}
	get scaleFrame(): LinearGraphScaleFrame {
		return this.get_scaleFrame();
	}
	set scaleFrame(value: LinearGraphScaleFrame) {
		this.set_scaleFrame(value);
	}
}


