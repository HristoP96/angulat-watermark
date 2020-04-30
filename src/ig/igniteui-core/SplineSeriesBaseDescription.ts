/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class SplineSeriesBaseDescription extends HorizontalAnchoredCategorySeriesDescription {
	static $t: Type = markType(SplineSeriesBaseDescription, 'SplineSeriesBaseDescription', (<any>HorizontalAnchoredCategorySeriesDescription).$type);
	protected get_type(): string {
		return "SplineSeriesBase";
	}
	constructor() {
		super();
	}
	private _splineType: string = null;
	get splineType(): string {
		return this._splineType;
	}
	set splineType(value: string) {
		this._splineType = value;
		this.markDirty("SplineType");
	}
}


