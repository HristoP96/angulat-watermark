/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { BrushAppearanceData } from "./BrushAppearanceData";
import { List$1 } from "./List$1";
import { GradientStopAppearanceData } from "./GradientStopAppearanceData";
import { StringBuilder } from "./StringBuilder";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class LinearGradientBrushAppearanceData extends BrushAppearanceData {
	static $t: Type = markType(LinearGradientBrushAppearanceData, 'LinearGradientBrushAppearanceData', (<any>BrushAppearanceData).$type);
	constructor() {
		super();
		this.stops = new List$1<GradientStopAppearanceData>((<any>GradientStopAppearanceData).$type, 0);
	}
	protected get_type(): string {
		return "linear";
	}
	get type(): string {
		return this.get_type();
	}
	private _startX: number = 0;
	get startX(): number {
		return this._startX;
	}
	set startX(value: number) {
		this._startX = value;
	}
	private _startY: number = 0;
	get startY(): number {
		return this._startY;
	}
	set startY(value: number) {
		this._startY = value;
	}
	private _endX: number = 0;
	get endX(): number {
		return this._endX;
	}
	set endX(value: number) {
		this._endX = value;
	}
	private _endY: number = 0;
	get endY(): number {
		return this._endY;
	}
	set endY(value: number) {
		this._endY = value;
	}
	private _stops: List$1<GradientStopAppearanceData> = null;
	get stops(): List$1<GradientStopAppearanceData> {
		return this._stops;
	}
	set stops(value: List$1<GradientStopAppearanceData>) {
		this._stops = value;
	}
	protected serializeOverride(): string {
		let sb = new StringBuilder(0);
		sb.append5("startX: " + this.startX + ", endX: " + this.endX + ", startY: " + this.startY + ", endY: " + this.endY);
		sb.append5(", stops: [");
		for (let i = 0; i < this.stops.count; i++) {
			if (i > 0) {
				sb.append5(", ");
			}
			sb.append5(this.stops._inner[i].serialize());
		}
		sb.append5("]");
		return sb.toString();
	}
}


