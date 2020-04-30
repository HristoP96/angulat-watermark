/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";

/**
 * @hidden 
 */
export class ScaleTickmarkVisualData extends Base {
	static $t: Type = markType(ScaleTickmarkVisualData, 'ScaleTickmarkVisualData');
	private _tickPath: PrimitiveVisualData = null;
	get tickPath(): PrimitiveVisualData {
		return this._tickPath;
	}
	set tickPath(value: PrimitiveVisualData) {
		this._tickPath = value;
	}
	serialize(): string {
		return "{ tickPath: " + this.tickPath.serialize() + "}";
	}
}


