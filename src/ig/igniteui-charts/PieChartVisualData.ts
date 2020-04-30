/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { PieSliceVisualDataList } from "./PieSliceVisualDataList";
import { PieSliceVisualData } from "./PieSliceVisualData";
import { RectData } from "igniteui-core/RectData";
import { List$1 } from "igniteui-core/List$1";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class PieChartVisualData extends Base {
	static $t: Type = markType(PieChartVisualData, 'PieChartVisualData');
	constructor() {
		super();
		this.slices = new PieSliceVisualDataList();
		this.others = new List$1<any>((<any>Base).$type, 0);
		this.dipScalingRatio = 1;
	}
	private _slices: PieSliceVisualDataList = null;
	get slices(): PieSliceVisualDataList {
		return this._slices;
	}
	set slices(value: PieSliceVisualDataList) {
		this._slices = value;
	}
	private _othersSlice: PieSliceVisualData = null;
	get othersSlice(): PieSliceVisualData {
		return this._othersSlice;
	}
	set othersSlice(value: PieSliceVisualData) {
		this._othersSlice = value;
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _viewport: RectData = null;
	get viewport(): RectData {
		return this._viewport;
	}
	set viewport(value: RectData) {
		this._viewport = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _others: List$1<any> = null;
	get others(): List$1<any> {
		return this._others;
	}
	set others(value: List$1<any>) {
		this._others = value;
	}
	private _radiusFactor: number = 0;
	get radiusFactor(): number {
		return this._radiusFactor;
	}
	set radiusFactor(value: number) {
		this._radiusFactor = value;
	}
	private _leaderLineMargin: number = 0;
	get leaderLineMargin(): number {
		return this._leaderLineMargin;
	}
	set leaderLineMargin(value: number) {
		this._leaderLineMargin = value;
	}
	private _isViewportScaled: boolean = false;
	get isViewportScaled(): boolean {
		return this._isViewportScaled;
	}
	set isViewportScaled(value: boolean) {
		this._isViewportScaled = value;
	}
	private _dipScalingRatio: number = 0;
	get dipScalingRatio(): number {
		return this._dipScalingRatio;
	}
	set dipScalingRatio(value: number) {
		this._dipScalingRatio = value;
	}
	scaleByViewport(): void {
		if (this.isViewportScaled) {
			return;
		}
		this.isViewportScaled = true;
		for (let i = 0; i < this.slices.count; i++) {
			this.slices._inner[i].scaleByViewport(this.viewport);
		}
		if (this.othersSlice != null) {
			this.othersSlice.scaleByViewport(this.viewport);
		}
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("name: " + this.name + ",");
		sb.appendLine1("leaderLineMargin: " + this.leaderLineMargin + ",");
		sb.appendLine1("radiusFactor: " + this.radiusFactor + ",");
		sb.appendLine1("width: " + this.width + ",");
		sb.appendLine1("height: " + this.height + ",");
		sb.appendLine1("isViewportScaled: " + (this.isViewportScaled ? "true" : "false") + ", ");
		sb.appendLine1("slices: [");
		for (let i = 0; i < this.slices.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.slices._inner[i].serialize());
		}
		sb.appendLine1("],");
		sb.appendLine1("viewport: { left: " + this.viewport.left + ", top: " + this.viewport.top + ", width: " + this.viewport.width + ", height: " + this.viewport.height + "}");
		sb.append5(", dipScalingRatio: " + this.dipScalingRatio.toString());
		sb.appendLine1("}");
		return sb.toString();
	}
}


