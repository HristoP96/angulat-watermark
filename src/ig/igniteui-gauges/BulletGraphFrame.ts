/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LinearGraphFrame } from "./LinearGraphFrame";
import { LinearGraphScaleFrame } from "./LinearGraphScaleFrame";
import { BulletGraphScaleFrame } from "./BulletGraphScaleFrame";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class BulletGraphFrame extends LinearGraphFrame {
	static $t: Type = markType(BulletGraphFrame, 'BulletGraphFrame', (<any>LinearGraphFrame).$type);
	constructor() {
		super();
		this.scaleFrame = new BulletGraphScaleFrame();
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


