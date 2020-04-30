/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";

/**
 * @hidden 
 */
export abstract class BrushAppearanceData extends Base implements IVisualData {
	static $t: Type = markType(BrushAppearanceData, 'BrushAppearanceData', (<any>Base).$type, [IVisualData_$type]);
	abstract get type(): string;
	serialize(): string {
		return "{ type: \"" + this.type + "\", " + this.serializeOverride() + " }";
	}
	protected serializeOverride(): string {
		return "";
	}
}


