/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class NeedleVisualData extends Base {
	static $t: Type = markType(NeedleVisualData, 'NeedleVisualData');
	private _angle: number = 0;
	get angle(): number {
		return this._angle;
	}
	set angle(value: number) {
		this._angle = value;
	}
	serialize(): string {
		return "{ angle: " + this.angle.toString() + "}";
	}
}


