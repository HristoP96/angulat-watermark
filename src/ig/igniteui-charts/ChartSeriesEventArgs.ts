/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Series } from "./Series";

/**
 * @hidden 
 */
export class ChartSeriesEventArgs extends Base {
	static $t: Type = markType(ChartSeriesEventArgs, 'ChartSeriesEventArgs');
	constructor(series: Series) {
		super();
		this.series = series;
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
}


