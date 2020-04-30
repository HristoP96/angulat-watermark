/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnchoredRadialSeriesDescription } from "./AnchoredRadialSeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class RadialColumnSeriesDescription extends AnchoredRadialSeriesDescription {
	static $t: Type = markType(RadialColumnSeriesDescription, 'RadialColumnSeriesDescription', (<any>AnchoredRadialSeriesDescription).$type);
	protected get_type(): string {
		return "RadialColumnSeries";
	}
	constructor() {
		super();
	}
	private _radiusX: number = 0;
	get radiusX(): number {
		return this._radiusX;
	}
	set radiusX(value: number) {
		this._radiusX = value;
		this.markDirty("RadiusX");
	}
	private _radiusY: number = 0;
	get radiusY(): number {
		return this._radiusY;
	}
	set radiusY(value: number) {
		this._radiusY = value;
		this.markDirty("RadiusY");
	}
}


