/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "./List$1";
import { LabelAppearanceData } from "./LabelAppearanceData";
import { IVisualData, IVisualData_$type } from "./IVisualData";
import { StringBuilder } from "./StringBuilder";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class LabelAppearanceDataList extends List$1<LabelAppearanceData> implements IVisualData {
	static $t: Type = markType(LabelAppearanceDataList, 'LabelAppearanceDataList', (<any>List$1).$type.specialize((<any>LabelAppearanceData).$type), [IVisualData_$type]);
	constructor() {
		super((<any>LabelAppearanceData).$type, 0);
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.append5("{ items: [");
		for (let i = 0; i < this.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this._inner[i].serialize());
		}
		return sb.toString();
	}
}


