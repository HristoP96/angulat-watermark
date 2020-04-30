/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterTriangulationSeriesDescription } from "./ScatterTriangulationSeriesDescription";
import { ColorScaleDescription } from "./ColorScaleDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ScatterAreaSeriesDescription extends ScatterTriangulationSeriesDescription {
	static $t: Type = markType(ScatterAreaSeriesDescription, 'ScatterAreaSeriesDescription', (<any>ScatterTriangulationSeriesDescription).$type);
	protected get_type(): string {
		return "ScatterAreaSeries";
	}
	constructor() {
		super();
	}
	private _colorScale: ColorScaleDescription = null;
	get colorScale(): ColorScaleDescription {
		return this._colorScale;
	}
	set colorScale(value: ColorScaleDescription) {
		this._colorScale = value;
		this.markDirty("ColorScale");
	}
	private _colorMemberPath: string = null;
	get colorMemberPath(): string {
		return this._colorMemberPath;
	}
	set colorMemberPath(value: string) {
		this._colorMemberPath = value;
		this.markDirty("ColorMemberPath");
	}
}


