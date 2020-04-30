/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { ArcVisualDataList } from "./ArcVisualDataList";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { List$1 } from "igniteui-core/List$1";
import { ArcVisualData } from "./ArcVisualData";

/**
 * @hidden 
 */
export class RingVisualData extends Base {
	static $t: Type = markType(RingVisualData, 'RingVisualData');
	private _arcs: ArcVisualDataList = null;
	get arcs(): ArcVisualDataList {
		return this._arcs;
	}
	set arcs(value: ArcVisualDataList) {
		this._arcs = value;
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		let first: boolean = true;
		sb.appendLine1("{");
		if (this.arcs != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.appendLine1("arcs: [");
			for (let i = 0; i < this.arcs.count; i++) {
				if (i != 0) {
					sb.append5(", ");
				}
				sb.append5(this.arcs._inner[i].serialize());
			}
			sb.appendLine1("]");
		}
		sb.appendLine1("}");
		return sb.toString();
	}
}


