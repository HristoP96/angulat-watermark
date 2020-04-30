/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { PointData } from "igniteui-core/PointData";
import { LabelAppearanceData } from "igniteui-core/LabelAppearanceData";
import { SizeData } from "igniteui-core/SizeData";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { RectData } from "igniteui-core/RectData";

/**
 * @hidden 
 */
export class AxisLabelVisualData extends Base {
	static $t: Type = markType(AxisLabelVisualData, 'AxisLabelVisualData');
	private _labelValue: any = null;
	get labelValue(): any {
		return this._labelValue;
	}
	set labelValue(value: any) {
		this._labelValue = value;
	}
	private _labelPosition: number = 0;
	get labelPosition(): number {
		return this._labelPosition;
	}
	set labelPosition(value: number) {
		this._labelPosition = value;
	}
	private _position: PointData = null;
	get position(): PointData {
		return this._position;
	}
	set position(value: PointData) {
		this._position = value;
	}
	private _panelPosition: PointData = null;
	get panelPosition(): PointData {
		return this._panelPosition;
	}
	set panelPosition(value: PointData) {
		this._panelPosition = value;
	}
	private _appearance: LabelAppearanceData = null;
	get appearance(): LabelAppearanceData {
		return this._appearance;
	}
	set appearance(value: LabelAppearanceData) {
		this._appearance = value;
	}
	private _size: SizeData = null;
	get size(): SizeData {
		return this._size;
	}
	set size(value: SizeData) {
		this._size = value;
	}
	constructor() {
		super();
		this.position = new PointData(NaN, NaN);
		this.size = new SizeData(NaN, NaN);
		this.panelPosition = new PointData(NaN, NaN);
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("position: " + "{ x: " + this.position.x + ", y: " + this.position.y + "},");
		sb.appendLine1("size: " + "{ width: " + this.size.width + ", height: " + this.size.height + "},");
		sb.appendLine1("labelPosition: " + this.labelPosition + ",");
		sb.appendLine1("appearance: " + (this.appearance != null ? this.appearance.serialize() : "null"));
		sb.appendLine1("}");
		return sb.toString();
	}
	scaleByViewport(viewport: RectData, isHorizontal: boolean): void {
		if (isHorizontal) {
			this.labelPosition = (this.labelPosition - viewport.left) / viewport.width;
		} else {
			this.labelPosition = (this.labelPosition - viewport.top) / viewport.height;
		}
		let x = (this.position.x - viewport.left) / viewport.width;
		let y = (this.position.y - viewport.top) / viewport.height;
		this.position = new PointData(x, y);
		let w = (this.size.width) / viewport.width;
		let h = (this.size.height) / viewport.height;
		this.size = new SizeData(w, h);
		;
	}
}


