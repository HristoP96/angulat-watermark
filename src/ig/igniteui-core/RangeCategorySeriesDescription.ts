/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategorySeriesDescription } from "./CategorySeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class RangeCategorySeriesDescription extends CategorySeriesDescription {
	static $t: Type = markType(RangeCategorySeriesDescription, 'RangeCategorySeriesDescription', (<any>CategorySeriesDescription).$type);
	protected get_type(): string {
		return "RangeCategorySeries";
	}
	constructor() {
		super();
	}
	private _lowMemberPath: string = null;
	get lowMemberPath(): string {
		return this._lowMemberPath;
	}
	set lowMemberPath(value: string) {
		this._lowMemberPath = value;
		this.markDirty("LowMemberPath");
	}
	private _highMemberPath: string = null;
	get highMemberPath(): string {
		return this._highMemberPath;
	}
	set highMemberPath(value: string) {
		this._highMemberPath = value;
		this.markDirty("HighMemberPath");
	}
}


