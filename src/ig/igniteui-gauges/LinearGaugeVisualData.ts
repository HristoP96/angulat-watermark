/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LinearGraphVisualData } from "./LinearGraphVisualData";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { LinearNeedleVisualData } from "./LinearNeedleVisualData";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { ToolTipItemVisualData } from "./ToolTipItemVisualData";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class LinearGaugeVisualData extends LinearGraphVisualData {
	static $t: Type = markType(LinearGaugeVisualData, 'LinearGaugeVisualData', (<any>LinearGraphVisualData).$type);
	private _needlePath: PrimitiveVisualData = null;
	get needlePath(): PrimitiveVisualData {
		return this._needlePath;
	}
	set needlePath(value: PrimitiveVisualData) {
		this._needlePath = value;
	}
	private _needle: LinearNeedleVisualData = null;
	get needle(): LinearNeedleVisualData {
		return this._needle;
	}
	set needle(value: LinearNeedleVisualData) {
		this._needle = value;
	}
	scaleByViewport(): void {
		super.scaleByViewport();
		if (this.needlePath != null) {
			this.needlePath.scaleByViewport(this.viewport);
		}
	}
	serialize(): string {
		let baseSerialize: string = super.serialize();
		let sb: StringBuilder = new StringBuilder(0);
		let first: boolean = baseSerialize.length == 0;
		if (this.needlePath != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("needlePath: ");
			sb.appendLine1(this.needlePath.serialize());
		}
		if (this.needle != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("needle: ");
			sb.appendLine1(this.needle.serialize());
		}
		if (first) {
			return baseSerialize;
		}
		sb.append5("}");
		return baseSerialize.substr(0, baseSerialize.length - 1) + sb.toString();
	}
}


