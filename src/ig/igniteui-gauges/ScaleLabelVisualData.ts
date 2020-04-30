/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { SizeData } from "igniteui-core/SizeData";
import { PointData } from "igniteui-core/PointData";
import { LabelAppearanceData } from "igniteui-core/LabelAppearanceData";
import { RectData } from "igniteui-core/RectData";

/**
 * @hidden 
 */
export class ScaleLabelVisualData extends Base {
	static $t: Type = markType(ScaleLabelVisualData, 'ScaleLabelVisualData');
	private _labelValue: string = null;
	get labelValue(): string {
		return this._labelValue;
	}
	set labelValue(value: string) {
		this._labelValue = value;
	}
	private _labelSize: SizeData = null;
	get labelSize(): SizeData {
		return this._labelSize;
	}
	set labelSize(value: SizeData) {
		this._labelSize = value;
	}
	private _labelPosition: PointData = null;
	get labelPosition(): PointData {
		return this._labelPosition;
	}
	set labelPosition(value: PointData) {
		this._labelPosition = value;
	}
	private _appearance: LabelAppearanceData = null;
	get appearance(): LabelAppearanceData {
		return this._appearance;
	}
	set appearance(value: LabelAppearanceData) {
		this._appearance = value;
	}
	scaleByViewport(viewport: RectData): void {
		this.labelPosition = new PointData((this.labelPosition.x - viewport.left) / viewport.width, (this.labelPosition.y - viewport.top) / viewport.height);
		this.labelSize = new SizeData((this.labelSize.width) / viewport.width, (this.labelSize.height) / viewport.height);
	}
	serialize(): string {
		return "{ labelValue: '" + this.labelValue + "', labelSize: { width: " + this.labelSize.width + ", height: " + this.labelSize.height + "}, labelPosition: { x: " + this.labelPosition.x + ", y: " + this.labelPosition.y + "}, appearance: " + this.appearance.serialize() + "}";
	}
}


