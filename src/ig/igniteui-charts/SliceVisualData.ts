/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { PieSliceVisualData } from "./PieSliceVisualData";
import { BrushAppearanceData } from "igniteui-core/BrushAppearanceData";
import { DoughnutChartLabelVisualData } from "./DoughnutChartLabelVisualData";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { PointData } from "igniteui-core/PointData";
import { RectData } from "igniteui-core/RectData";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class SliceVisualData extends Base {
	static $t: Type = markType(SliceVisualData, 'SliceVisualData');
	private _pieSlice: PieSliceVisualData = null;
	get pieSlice(): PieSliceVisualData {
		return this._pieSlice;
	}
	set pieSlice(value: PieSliceVisualData) {
		this._pieSlice = value;
	}
	private _outline: BrushAppearanceData = null;
	get outline(): BrushAppearanceData {
		return this._outline;
	}
	set outline(value: BrushAppearanceData) {
		this._outline = value;
	}
	private _labelVisualData: DoughnutChartLabelVisualData = null;
	get labelVisualData(): DoughnutChartLabelVisualData {
		return this._labelVisualData;
	}
	set labelVisualData(value: DoughnutChartLabelVisualData) {
		this._labelVisualData = value;
	}
	private _backgroundPath: PrimitiveVisualData = null;
	get backgroundPath(): PrimitiveVisualData {
		return this._backgroundPath;
	}
	set backgroundPath(value: PrimitiveVisualData) {
		this._backgroundPath = value;
	}
	private _origin: PointData = null;
	get origin(): PointData {
		return this._origin;
	}
	set origin(value: PointData) {
		this._origin = value;
	}
	private _explodedOrigin: PointData = null;
	get explodedOrigin(): PointData {
		return this._explodedOrigin;
	}
	set explodedOrigin(value: PointData) {
		this._explodedOrigin = value;
	}
	private _isExploded: boolean = false;
	get isExploded(): boolean {
		return this._isExploded;
	}
	set isExploded(value: boolean) {
		this._isExploded = value;
	}
	private _isSelected: boolean = false;
	get isSelected(): boolean {
		return this._isSelected;
	}
	set isSelected(value: boolean) {
		this._isSelected = value;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _radius: number = 0;
	get radius(): number {
		return this._radius;
	}
	set radius(value: number) {
		this._radius = value;
	}
	private _startAngle: number = 0;
	get startAngle(): number {
		return this._startAngle;
	}
	set startAngle(value: number) {
		this._startAngle = value;
	}
	private _endAngle: number = 0;
	get endAngle(): number {
		return this._endAngle;
	}
	set endAngle(value: number) {
		this._endAngle = value;
	}
	private _visibility: boolean = false;
	get visibility(): boolean {
		return this._visibility;
	}
	set visibility(value: boolean) {
		this._visibility = value;
	}
	scaleByViewport(viewport: RectData): void {
		this.origin = new PointData((this.origin.x - viewport.left) / viewport.width, (this.origin.y - viewport.top) / viewport.height);
		this.explodedOrigin = new PointData((this.explodedOrigin.x - viewport.left) / viewport.width, (this.explodedOrigin.y - viewport.top) / viewport.height);
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		let first: boolean = true;
		sb.appendLine1("{");
		if (this.pieSlice != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("pieSlice: ");
			sb.appendLine1(this.pieSlice.serialize());
		}
		if (this.labelVisualData != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("labelVisualData: ");
			sb.appendLine1(this.labelVisualData.serialize());
		}
		if (this.backgroundPath != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("backgroundPath: ");
			sb.appendLine1(this.backgroundPath.serialize());
		}
		if (first) {
			first = false;
		} else {
			sb.append5(", ");
		}
		sb.append5("isExploded: ");
		sb.appendLine1(this.isExploded.toString().toLowerCase());
		if (first) {
			first = false;
		} else {
			sb.append5(", ");
		}
		sb.append5("isSelected: ");
		sb.appendLine1(this.isSelected.toString().toLowerCase());
		if (!isNaN_(this.explodedOrigin.x) && !isNaN_(this.explodedOrigin.y)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("explodedOrigin: ");
			sb.appendLine1("{ x: " + this.explodedOrigin.x.toString() + ", y: " + this.explodedOrigin.y.toString() + "}");
		}
		if (!isNaN_(this.origin.x) && !isNaN_(this.origin.y)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("origin: ");
			sb.appendLine1("{ x: " + this.origin.x.toString() + ", y: " + this.origin.y.toString() + "}");
		}
		if (!isNaN_(<number>this.index)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("index: ");
			sb.appendLine1(this.index.toString());
		}
		if (!isNaN_(this.radius)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("radius: ");
			sb.appendLine1(this.radius.toString());
		}
		sb.append5(", visibility: ");
		sb.appendLine1(this.visibility ? "true" : "false");
		if (!isNaN_(this.startAngle)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("startAngle: ");
			sb.appendLine1(this.startAngle.toString());
		}
		if (!isNaN_(this.endAngle)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("endAngle: ");
			sb.appendLine1(this.endAngle.toString());
		}
		sb.appendLine1("}");
		return sb.toString();
	}
}


