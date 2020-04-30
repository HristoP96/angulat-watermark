/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { RingVisualDataList } from "./RingVisualDataList";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { List$1 } from "igniteui-core/List$1";
import { RingVisualData } from "./RingVisualData";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class RingSeriesVisualData extends Base {
	static $t: Type = markType(RingSeriesVisualData, 'RingSeriesVisualData');
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _labelExtent: number = 0;
	get labelExtent(): number {
		return this._labelExtent;
	}
	set labelExtent(value: number) {
		this._labelExtent = value;
	}
	private _labelsPosition: string = null;
	get labelsPosition(): string {
		return this._labelsPosition;
	}
	set labelsPosition(value: string) {
		this._labelsPosition = value;
	}
	private _leaderLineType: string = null;
	get leaderLineType(): string {
		return this._leaderLineType;
	}
	set leaderLineType(value: string) {
		this._leaderLineType = value;
	}
	private _leaderLineVisibility: boolean = false;
	get leaderLineVisibility(): boolean {
		return this._leaderLineVisibility;
	}
	set leaderLineVisibility(value: boolean) {
		this._leaderLineVisibility = value;
	}
	private _leaderLineMargin: number = 0;
	get leaderLineMargin(): number {
		return this._leaderLineMargin;
	}
	set leaderLineMargin(value: number) {
		this._leaderLineMargin = value;
	}
	private _rings: RingVisualDataList = null;
	get rings(): RingVisualDataList {
		return this._rings;
	}
	set rings(value: RingVisualDataList) {
		this._rings = value;
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		let first: boolean = true;
		sb.appendLine1("{");
		if (this.name != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("name: ");
			sb.appendLine1("'" + this.name + "'");
		}
		if (!isNaN_(this.labelExtent)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("labelExtent: ");
			sb.appendLine1(this.labelExtent.toString());
		}
		if (this.labelsPosition != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("labelsPosition: ");
			sb.appendLine1("'" + this.labelsPosition + "'");
		}
		if (this.leaderLineType != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("leaderLineType: ");
			sb.appendLine1("'" + this.leaderLineType + "'");
		}
		sb.append5(", leaderLineVisibility: ");
		sb.appendLine1(this.leaderLineVisibility ? "true" : "false");
		if (!isNaN_(<number>this.leaderLineMargin)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("leaderLineMargin: ");
			sb.appendLine1(this.leaderLineMargin.toString());
		}
		sb.appendLine1(", rings: [");
		for (let i = 0; i < this.rings.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.rings._inner[i].serialize());
		}
		sb.appendLine1("]}");
		return sb.toString();
	}
}


