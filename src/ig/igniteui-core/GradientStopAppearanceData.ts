/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";
import { ColorData } from "./ColorData";

/**
 * @hidden 
 */
export class GradientStopAppearanceData extends Base implements IVisualData {
	static $t: Type = markType(GradientStopAppearanceData, 'GradientStopAppearanceData', (<any>Base).$type, [IVisualData_$type]);
	private _colorValue: ColorData = null;
	get colorValue(): ColorData {
		return this._colorValue;
	}
	set colorValue(value: ColorData) {
		this._colorValue = value;
	}
	private _offset: number = 0;
	get offset(): number {
		return this._offset;
	}
	set offset(value: number) {
		this._offset = value;
	}
	serialize(): string {
		return "{ " + "colorValue: " + (this.colorValue != null ? this.colorValue.serialize() : "null") + ", offset: " + this.offset + " }";
	}
}


