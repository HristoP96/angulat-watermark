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
export class CalloutSeriesSelectingEventArgs extends Base {
	static $t: Type = markType(CalloutSeriesSelectingEventArgs, 'CalloutSeriesSelectingEventArgs');
	private _xValue: any = null;
	get xValue(): any {
		return this._xValue;
	}
	set xValue(value: any) {
		this._xValue = value;
	}
	private _yValue: any = null;
	get yValue(): any {
		return this._yValue;
	}
	set yValue(value: any) {
		this._yValue = value;
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
	private _seriesName: string = null;
	get seriesName(): string {
		return this._seriesName;
	}
	set seriesName(value: string) {
		this._seriesName = value;
	}
}


