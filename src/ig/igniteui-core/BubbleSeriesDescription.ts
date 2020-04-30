/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterBaseDescription } from "./ScatterBaseDescription";
import { Description } from "./Description";
import { SizeScaleDescription } from "./SizeScaleDescription";
import { BrushScaleDescription } from "./BrushScaleDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class BubbleSeriesDescription extends ScatterBaseDescription {
	static $t: Type = markType(BubbleSeriesDescription, 'BubbleSeriesDescription', (<any>ScatterBaseDescription).$type);
	protected get_type(): string {
		return "BubbleSeries";
	}
	constructor() {
		super();
	}
	private _radiusMemberPath: string = null;
	get radiusMemberPath(): string {
		return this._radiusMemberPath;
	}
	set radiusMemberPath(value: string) {
		this._radiusMemberPath = value;
		this.markDirty("RadiusMemberPath");
	}
	private _radiusScale: SizeScaleDescription = null;
	get radiusScale(): SizeScaleDescription {
		return this._radiusScale;
	}
	set radiusScale(value: SizeScaleDescription) {
		this._radiusScale = value;
		this.markDirty("RadiusScale");
	}
	private _labelMemberPath: string = null;
	get labelMemberPath(): string {
		return this._labelMemberPath;
	}
	set labelMemberPath(value: string) {
		this._labelMemberPath = value;
		this.markDirty("LabelMemberPath");
	}
	private _fillMemberPath: string = null;
	get fillMemberPath(): string {
		return this._fillMemberPath;
	}
	set fillMemberPath(value: string) {
		this._fillMemberPath = value;
		this.markDirty("FillMemberPath");
	}
	private _fillScale: BrushScaleDescription = null;
	get fillScale(): BrushScaleDescription {
		return this._fillScale;
	}
	set fillScale(value: BrushScaleDescription) {
		this._fillScale = value;
		this.markDirty("FillScale");
	}
}


