/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { LabelAppearanceData } from "igniteui-core/LabelAppearanceData";
import { LineVisualData } from "igniteui-core/LineVisualData";
import { RectData } from "igniteui-core/RectData";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";

/**
 * @hidden 
 */
export class SparklineAxisVisualData extends Base {
	static $t: Type = markType(SparklineAxisVisualData, 'SparklineAxisVisualData');
	constructor() {
		super();
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _minLabel: LabelAppearanceData = null;
	get minLabel(): LabelAppearanceData {
		return this._minLabel;
	}
	set minLabel(value: LabelAppearanceData) {
		this._minLabel = value;
	}
	private _maxLabel: LabelAppearanceData = null;
	get maxLabel(): LabelAppearanceData {
		return this._maxLabel;
	}
	set maxLabel(value: LabelAppearanceData) {
		this._maxLabel = value;
	}
	private _axisLine: LineVisualData = null;
	get axisLine(): LineVisualData {
		return this._axisLine;
	}
	set axisLine(value: LineVisualData) {
		this._axisLine = value;
	}
	scaleByViewport(viewport: RectData): void {
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("name: \"" + this.name + "\"");
		if (this.minLabel != null) {
			sb.appendLine1(",");
			sb.append5("minLabel: " + this.minLabel.serialize());
		}
		if (this.maxLabel != null) {
			sb.appendLine1(",");
			sb.append5("maxLabel: " + this.maxLabel.serialize());
		}
		if (this.axisLine != null) {
			sb.appendLine1(",");
			sb.append5("axisLine: " + this.axisLine.serialize());
		}
		sb.appendLine1("");
		sb.appendLine1("}");
		return sb.toString();
	}
}


