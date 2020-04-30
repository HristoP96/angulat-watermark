/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StackedBarSeries } from "./StackedBarSeries";
import { IStacked100Series, IStacked100Series_$type } from "./IStacked100Series";
import { Type, Base, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { Series } from "./Series";
import { SeriesView } from "./SeriesView";
import { CategorySeriesView } from "./CategorySeriesView";
import { StackedSeriesBase } from "./StackedSeriesBase";
import { Stacked100DataPreparer } from "./Stacked100DataPreparer";
import { StackedBarSeriesView } from "./StackedBarSeriesView";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { Stacked100BarBucketCalculator } from "./Stacked100BarBucketCalculator";

/**
 * @hidden 
 */
export class Stacked100BarSeries extends StackedBarSeries implements IStacked100Series {
	static $t: Type = markType(Stacked100BarSeries, 'Stacked100BarSeries', (<any>StackedBarSeries).$type, [IStacked100Series_$type]);
	constructor() {
		super();
		this.defaultStyleKey = (<any>Stacked100BarSeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	protected createView(): SeriesView {
		return new Stacked100BarSeriesView(this);
	}
	private _stacked100BarView: Stacked100BarSeriesView;
	get stacked100BarView(): Stacked100BarSeriesView {
		return this._stacked100BarView;
	}
	set stacked100BarView(value: Stacked100BarSeriesView) {
		this._stacked100BarView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.stacked100BarView = <Stacked100BarSeriesView>view;
	}
	getSeriesView(): CategorySeriesView {
		return this.stacked100BarView;
	}
	protected prepareData(): void {
		super.prepareData();
		Stacked100DataPreparer.prepareData(this);
	}
}

/**
 * @hidden 
 */
export class Stacked100BarSeriesView extends StackedBarSeriesView {
	static $t: Type = markType(Stacked100BarSeriesView, 'Stacked100BarSeriesView', (<any>StackedBarSeriesView).$type);
	private _stacked100BarModel: Stacked100BarSeries = null;
	get stacked100BarModel(): Stacked100BarSeries {
		return this._stacked100BarModel;
	}
	set stacked100BarModel(value: Stacked100BarSeries) {
		this._stacked100BarModel = value;
	}
	constructor(model: Stacked100BarSeries) {
		super(model);
		this.stacked100BarModel = model;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new Stacked100BarBucketCalculator(this);
	}
}


