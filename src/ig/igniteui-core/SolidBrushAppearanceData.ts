/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { BrushAppearanceData } from "./BrushAppearanceData";
import { ColorData } from "./ColorData";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class SolidBrushAppearanceData extends BrushAppearanceData {
	static $t: Type = markType(SolidBrushAppearanceData, 'SolidBrushAppearanceData', (<any>BrushAppearanceData).$type);
	protected get_type(): string {
		return "solid";
	}
	get type(): string {
		return this.get_type();
	}
	private _colorValue: ColorData = null;
	get colorValue(): ColorData {
		return this._colorValue;
	}
	set colorValue(value: ColorData) {
		this._colorValue = value;
	}
	protected serializeOverride(): string {
		return "colorValue: " + (this.colorValue != null ? this.colorValue.serialize() : "null");
	}
}


