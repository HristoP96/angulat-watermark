/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { ILegendSeries } from "igniteui-core/ILegendSeries";

/**
 * @hidden 
 */
export class LegendItemInfo extends Base {
	static $t: Type = markType(LegendItemInfo, 'LegendItemInfo');
	private _text: string = null;
	get text(): string {
		return this._text;
	}
	set text(value: string) {
		this._text = value;
	}
	private _legendItem: any = null;
	get legendItem(): any {
		return this._legendItem;
	}
	set legendItem(value: any) {
		this._legendItem = value;
	}
	private _series: ILegendSeries = null;
	get series(): ILegendSeries {
		return this._series;
	}
	set series(value: ILegendSeries) {
		this._series = value;
	}
	private _dataContext: any = null;
	get dataContext(): any {
		return this._dataContext;
	}
	set dataContext(value: any) {
		this._dataContext = value;
	}
}


