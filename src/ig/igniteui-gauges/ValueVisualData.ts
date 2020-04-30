/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ToolTipItemVisualData } from "./ToolTipItemVisualData";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class ValueVisualData extends ToolTipItemVisualData {
	static $t: Type = markType(ValueVisualData, 'ValueVisualData', (<any>ToolTipItemVisualData).$type);
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
	}
	serialize(): string {
		return "{ value: " + this.value.toString() + ", type: '" + this.type + "'}";
	}
	protected get_type(): string {
		return "value";
	}
	get type(): string {
		return this.get_type();
	}
}


