/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";
import { Series } from "./Series";

/**
 * @hidden 
 */
export class FinancialChartCustomIndicatorArgs extends EventArgs {
	static $t: Type = markType(FinancialChartCustomIndicatorArgs, 'FinancialChartCustomIndicatorArgs', (<any>EventArgs).$type);
	constructor(source: any, series: Series, index: number) {
		super();
		this.index = index;
		this.indicatorInfo = source;
		this.series = series;
	}
	private _indicatorInfo: any = null;
	get indicatorInfo(): any {
		return this._indicatorInfo;
	}
	set indicatorInfo(value: any) {
		this._indicatorInfo = value;
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
}


