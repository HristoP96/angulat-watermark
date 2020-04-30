/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { PointData } from "igniteui-core/PointData";
import { RectData } from "igniteui-core/RectData";
import { PrimitiveAppearanceData } from "igniteui-core/PrimitiveAppearanceData";
import { LabelAppearanceData } from "igniteui-core/LabelAppearanceData";
import { PathVisualData } from "igniteui-core/PathVisualData";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class PieSliceVisualData extends Base {
	static $t: Type = markType(PieSliceVisualData, 'PieSliceVisualData');
	constructor() {
		super();
		this.labelBounds = RectData.empty;
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
	private _radius: number = 0;
	get radius(): number {
		return this._radius;
	}
	set radius(value: number) {
		this._radius = value;
	}
	private _explodedRadius: number = 0;
	get explodedRadius(): number {
		return this._explodedRadius;
	}
	set explodedRadius(value: number) {
		this._explodedRadius = value;
	}
	private _innerExtentStart: number = 0;
	get innerExtentStart(): number {
		return this._innerExtentStart;
	}
	set innerExtentStart(value: number) {
		this._innerExtentStart = value;
	}
	private _innerExtentEnd: number = 0;
	get innerExtentEnd(): number {
		return this._innerExtentEnd;
	}
	set innerExtentEnd(value: number) {
		this._innerExtentEnd = value;
	}
	private _isSelected: boolean = false;
	get isSelected(): boolean {
		return this._isSelected;
	}
	set isSelected(value: boolean) {
		this._isSelected = value;
	}
	private _isExploded: boolean = false;
	get isExploded(): boolean {
		return this._isExploded;
	}
	set isExploded(value: boolean) {
		this._isExploded = value;
	}
	private _isOthersSlice: boolean = false;
	get isOthersSlice(): boolean {
		return this._isOthersSlice;
	}
	set isOthersSlice(value: boolean) {
		this._isOthersSlice = value;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
	}
	private _labelAngle: number = 0;
	get labelAngle(): number {
		return this._labelAngle;
	}
	set labelAngle(value: number) {
		this._labelAngle = value;
	}
	private _labelBounds: RectData = null;
	get labelBounds(): RectData {
		return this._labelBounds;
	}
	set labelBounds(value: RectData) {
		this._labelBounds = value;
	}
	private _appearance: PrimitiveAppearanceData = null;
	get appearance(): PrimitiveAppearanceData {
		return this._appearance;
	}
	set appearance(value: PrimitiveAppearanceData) {
		this._appearance = value;
	}
	private _labelAppearance: LabelAppearanceData = null;
	get labelAppearance(): LabelAppearanceData {
		return this._labelAppearance;
	}
	set labelAppearance(value: LabelAppearanceData) {
		this._labelAppearance = value;
	}
	private _leaderLineAppearance: PrimitiveAppearanceData = null;
	get leaderLineAppearance(): PrimitiveAppearanceData {
		return this._leaderLineAppearance;
	}
	set leaderLineAppearance(value: PrimitiveAppearanceData) {
		this._leaderLineAppearance = value;
	}
	private _slicePath: PathVisualData = null;
	get slicePath(): PathVisualData {
		return this._slicePath;
	}
	set slicePath(value: PathVisualData) {
		this._slicePath = value;
	}
	private _leaderLinePath: PathVisualData = null;
	get leaderLinePath(): PathVisualData {
		return this._leaderLinePath;
	}
	set leaderLinePath(value: PathVisualData) {
		this._leaderLinePath = value;
	}
	scaleByViewport(viewport: RectData): void {
		if (this.slicePath != null) {
			this.slicePath.scaleByViewport(viewport);
		}
		if (this.leaderLinePath != null) {
			this.leaderLinePath.scaleByViewport(viewport);
		}
		if (!this.labelBounds.isEmpty) {
			let left = (this.labelBounds.left - viewport.left) / viewport.width;
			let top = (this.labelBounds.top - viewport.top) / viewport.height;
			let right = ((this.labelBounds.left + this.labelBounds.width) - viewport.left) / viewport.width;
			let bottom = ((this.labelBounds.top + this.labelBounds.height) - viewport.top) / viewport.height;
			this.labelBounds = new RectData(left, top, right - left, bottom - top);
		}
		if (this.origin != null) {
			this.origin = new PointData((this.origin.x - viewport.left) / viewport.width, (this.origin.y - viewport.top) / viewport.height);
		}
		if (this.explodedOrigin != null) {
			this.explodedOrigin = new PointData((this.explodedOrigin.x - viewport.left) / viewport.width, (this.explodedOrigin.y - viewport.top) / viewport.height);
		}
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		if (this.label != null) {
			sb.appendLine1("label: \"" + this.label + "\", ");
		}
		if (this.appearance != null) {
			sb.appendLine1("appearance: " + this.appearance.serialize() + ", ");
		}
		if (this.labelAppearance != null) {
			sb.appendLine1("labelAppearance: " + this.labelAppearance.serialize() + ", ");
		}
		if (this.leaderLineAppearance != null) {
			sb.appendLine1("leaderLineAppearance: " + this.leaderLineAppearance.serialize() + ", ");
		}
		if (this.slicePath != null) {
			sb.appendLine1("slicePath: " + this.slicePath.serialize() + ", ");
		}
		if (this.leaderLinePath != null) {
			let serializedLine: string = this.leaderLinePath.serialize();
			if (serializedLine != null) {
				sb.appendLine1("leaderLinePath: " + serializedLine + ", ");
			}
		}
		sb.appendLine1("labelAngle: " + this.labelAngle + ", ");
		sb.appendLine1("labelBounds: { left: " + this.labelBounds.left + ", top: " + this.labelBounds.top + ", width: " + this.labelBounds.width + ", height: " + this.labelBounds.height + "}");
		sb.appendLine1("}");
		return sb.toString();
	}
}


