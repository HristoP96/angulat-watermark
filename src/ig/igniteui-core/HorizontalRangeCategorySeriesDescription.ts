/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RangeCategorySeriesDescription } from "./RangeCategorySeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class HorizontalRangeCategorySeriesDescription extends RangeCategorySeriesDescription {
	static $t: Type = markType(HorizontalRangeCategorySeriesDescription, 'HorizontalRangeCategorySeriesDescription', (<any>RangeCategorySeriesDescription).$type);
	protected get_type(): string {
		return "HorizontalRangeCategorySeries";
	}
	constructor() {
		super();
	}
	private _xAxisRef: string = null;
	get xAxisRef(): string {
		return this._xAxisRef;
	}
	set xAxisRef(value: string) {
		this._xAxisRef = value;
		this.markDirty("XAxisRef");
	}
	private _yAxisRef: string = null;
	get yAxisRef(): string {
		return this._yAxisRef;
	}
	set yAxisRef(value: string) {
		this._yAxisRef = value;
		this.markDirty("YAxisRef");
	}
}


