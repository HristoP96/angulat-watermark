/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { SliceVisualDataList } from "./SliceVisualDataList";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { RectData } from "igniteui-core/RectData";
import { SliceVisualData } from "./SliceVisualData";
import { List$1 } from "igniteui-core/List$1";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class ArcVisualData extends Base {
	static $t: Type = markType(ArcVisualData, 'ArcVisualData');
	private _slices: SliceVisualDataList = null;
	get slices(): SliceVisualDataList {
		return this._slices;
	}
	set slices(value: SliceVisualDataList) {
		this._slices = value;
	}
	private _leaderLine: PrimitiveVisualData = null;
	get leaderLine(): PrimitiveVisualData {
		return this._leaderLine;
	}
	set leaderLine(value: PrimitiveVisualData) {
		this._leaderLine = value;
	}
	scaleByViewport(viewport: RectData): void {
		for (let slice of fromEnum<SliceVisualData>(this.slices)) {
			slice.scaleByViewport(viewport);
		}
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		let first: boolean = true;
		sb.appendLine1("{");
		if (this.leaderLine != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("leaderLine: ");
			sb.appendLine1(this.leaderLine.serialize());
		}
		if (this.slices != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.appendLine1("slices: [");
			for (let i = 0; i < this.slices.count; i++) {
				if (i != 0) {
					sb.append5(", ");
				}
				sb.append5(this.slices._inner[i].serialize());
			}
		}
		sb.appendLine1("]}");
		return sb.toString();
	}
}


