/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LinearGraphScaleFrame } from "./LinearGraphScaleFrame";
import { LinearGraphRectFrame } from "./LinearGraphRectFrame";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class BulletGraphScaleFrame extends LinearGraphScaleFrame {
	static $t: Type = markType(BulletGraphScaleFrame, 'BulletGraphScaleFrame', (<any>LinearGraphScaleFrame).$type);
	constructor() {
		super();
		this.actualValue = new LinearGraphRectFrame();
	}
	private _actualValue: LinearGraphRectFrame = null;
	get actualValue(): LinearGraphRectFrame {
		return this._actualValue;
	}
	set actualValue(value: LinearGraphRectFrame) {
		this._actualValue = value;
	}
	interpolate(p: number, previous: LinearGraphScaleFrame, next: LinearGraphScaleFrame): void {
		super.interpolate(p, previous, next);
		this.actualValue = LinearGraphRectFrame.interpolate(p, 1 - p, (<BulletGraphScaleFrame>previous).actualValue, (<BulletGraphScaleFrame>next).actualValue);
	}
}


