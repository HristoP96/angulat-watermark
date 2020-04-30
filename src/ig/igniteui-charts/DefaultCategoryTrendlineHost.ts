/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { IHasCategoryTrendline, IHasCategoryTrendline_$type } from "./IHasCategoryTrendline";
import { IHasTrendline } from "./IHasTrendline";
import { IPreparesCategoryTrendline } from "./IPreparesCategoryTrendline";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { DefaultCategoryTrendlinePreparer } from "./DefaultCategoryTrendlinePreparer";

/**
 * @hidden 
 */
export class DefaultCategoryTrendlineHost extends Base implements IHasCategoryTrendline {
	static $t: Type = markType(DefaultCategoryTrendlineHost, 'DefaultCategoryTrendlineHost', (<any>Base).$type, [IHasCategoryTrendline_$type]);
	constructor() {
		super();
		this._trendLinePreparer = new DefaultCategoryTrendlinePreparer();
	}
	private _trendLinePreparer: IPreparesCategoryTrendline = null;
	get trendlinePreparer(): IPreparesCategoryTrendline {
		return this._trendLinePreparer;
	}
	get trendLineType(): TrendLineType {
		return TrendLineType.None;
	}
	get trendLinePeriod(): number {
		return 1;
	}
	get isVertical(): boolean {
		return false;
	}
}


