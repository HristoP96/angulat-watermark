/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { SizeData } from "igniteui-core/SizeData";
import { PointData } from "igniteui-core/PointData";
import { RectData } from "igniteui-core/RectData";
import { stringEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class DoughnutChartLabelVisualData extends Base {
	static $t: Type = markType(DoughnutChartLabelVisualData, 'DoughnutChartLabelVisualData');
	private _labelValue: any = null;
	get labelValue(): any {
		return this._labelValue;
	}
	set labelValue(value: any) {
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
	scaleByViewport(viewport: RectData): void {
		this.labelPosition = new PointData((this.labelPosition.x - viewport.left) / viewport.width, (this.labelPosition.y - viewport.top) / viewport.height);
		this.labelSize = new SizeData((this.labelSize.width) / viewport.width, (this.labelSize.height) / viewport.height);
	}
	serialize(): string {
		let retVal: string = "{ labelValue: '";
		retVal += this.labelValue == null ? stringEmpty() : this.labelValue;
		retVal += "', labelSize: { width: " + this.labelSize.width + ", height: " + this.labelSize.height + "}, labelPosition: { x: " + this.labelPosition.x + ", y: " + this.labelPosition.y + "}}";
		return retVal;
	}
}


