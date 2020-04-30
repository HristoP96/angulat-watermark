/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SeriesVisualData } from "./SeriesVisualData";
import { SeriesVisualDataList } from "./SeriesVisualDataList";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class StackedSeriesVisualData extends SeriesVisualData {
	static $t: Type = markType(StackedSeriesVisualData, 'StackedSeriesVisualData', (<any>SeriesVisualData).$type);
	constructor() {
		super();
		this.fragmentSeries = new SeriesVisualDataList();
	}
	private _fragmentSeries: SeriesVisualDataList = null;
	get fragmentSeries(): SeriesVisualDataList {
		return this._fragmentSeries;
	}
	set fragmentSeries(value: SeriesVisualDataList) {
		this._fragmentSeries = value;
	}
}


