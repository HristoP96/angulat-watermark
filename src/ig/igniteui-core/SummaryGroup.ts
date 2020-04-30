/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { DataSourceSpecialRow } from "./DataSourceSpecialRow";

/**
 * @hidden 
 */
export class SummaryGroup extends Base {
	static $t: Type = markType(SummaryGroup, 'SummaryGroup');
	private _summaries: DataSourceSpecialRow[] = null;
	get summaries(): DataSourceSpecialRow[] {
		return this._summaries;
	}
	set summaries(value: DataSourceSpecialRow[]) {
		this._summaries = value;
	}
}


