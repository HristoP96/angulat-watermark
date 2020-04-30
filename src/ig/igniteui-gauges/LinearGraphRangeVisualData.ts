/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ToolTipItemVisualData } from "./ToolTipItemVisualData";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class LinearGraphRangeVisualData extends ToolTipItemVisualData {
	static $t: Type = markType(LinearGraphRangeVisualData, 'LinearGraphRangeVisualData', (<any>ToolTipItemVisualData).$type);
	private _rangePath: PrimitiveVisualData = null;
	get rangePath(): PrimitiveVisualData {
		return this._rangePath;
	}
	set rangePath(value: PrimitiveVisualData) {
		this._rangePath = value;
	}
	serialize(): string {
		return "{ rangePath: " + this.rangePath.serialize() + ", type: '" + this.type + "'}";
	}
	protected get_type(): string {
		return "range";
	}
	get type(): string {
		return this.get_type();
	}
}


