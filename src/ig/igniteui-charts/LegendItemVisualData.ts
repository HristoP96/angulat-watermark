/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { RectData } from "igniteui-core/RectData";
import { PrimitiveAppearanceData } from "igniteui-core/PrimitiveAppearanceData";
import { LabelAppearanceData } from "igniteui-core/LabelAppearanceData";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class LegendItemVisualData extends Base {
	static $t: Type = markType(LegendItemVisualData, 'LegendItemVisualData');
	constructor() {
		super();
		this.labelBounds = RectData.empty;
		this.appearance = new PrimitiveAppearanceData();
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
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
	private _bounds: RectData = null;
	get bounds(): RectData {
		return this._bounds;
	}
	set bounds(value: RectData) {
		this._bounds = value;
	}
	private _badgeBounds: RectData = null;
	get badgeBounds(): RectData {
		return this._badgeBounds;
	}
	set badgeBounds(value: RectData) {
		this._badgeBounds = value;
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
		let serializeRect: (arg1: RectData) => string = (rect: RectData) => "{ left: " + rect.left + ", top: " + rect.top + ", width: " + rect.width + ", height: " + rect.height + "}";
		sb.appendFormat2("bounds: {0},\r\n", serializeRect(this.bounds));
		sb.appendFormat2("badgeBounds: {0},\r\n", serializeRect(this.badgeBounds));
		sb.appendFormat2("labelBounds: {0}\r\n", serializeRect(this.labelBounds));
		sb.appendLine1("}");
		return sb.toString();
	}
}


