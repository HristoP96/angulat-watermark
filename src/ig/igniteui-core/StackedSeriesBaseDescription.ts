/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategorySeriesDescription } from "./CategorySeriesDescription";
import { Description } from "./Description";
import { StackedFragmentSeriesDescription } from "./StackedFragmentSeriesDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class StackedSeriesBaseDescription extends CategorySeriesDescription {
	static $t: Type = markType(StackedSeriesBaseDescription, 'StackedSeriesBaseDescription', (<any>CategorySeriesDescription).$type);
	protected get_type(): string {
		return "StackedSeriesBase";
	}
	constructor() {
		super();
	}
	private _autoGenerateSeries: boolean = false;
	get autoGenerateSeries(): boolean {
		return this._autoGenerateSeries;
	}
	set autoGenerateSeries(value: boolean) {
		this._autoGenerateSeries = value;
		this.markDirty("AutoGenerateSeries");
	}
	private _reverseLegendOrder: boolean = false;
	get reverseLegendOrder(): boolean {
		return this._reverseLegendOrder;
	}
	set reverseLegendOrder(value: boolean) {
		this._reverseLegendOrder = value;
		this.markDirty("ReverseLegendOrder");
	}
	private _seriesCreated: string = null;
	get seriesCreatedRef(): string {
		return this._seriesCreated;
	}
	set seriesCreatedRef(value: string) {
		this._seriesCreated = value;
		this.markDirty("SeriesCreatedRef");
	}
	private _series: StackedFragmentSeriesDescription[] = null;
	get series(): StackedFragmentSeriesDescription[] {
		return this._series;
	}
	set series(value: StackedFragmentSeriesDescription[]) {
		this._series = value;
		this.markDirty("Series");
	}
}


