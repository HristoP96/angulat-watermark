/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { SeriesDescription } from "./SeriesDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class FinancialChartCustomIndicatorArgsDescription extends Description {
	static $t: Type = markType(FinancialChartCustomIndicatorArgsDescription, 'FinancialChartCustomIndicatorArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "FinancialChartCustomIndicatorArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _series: SeriesDescription = null;
	get series(): SeriesDescription {
		return this._series;
	}
	set series(value: SeriesDescription) {
		this._series = value;
		this.markDirty("Series");
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
		this.markDirty("Index");
	}
}


