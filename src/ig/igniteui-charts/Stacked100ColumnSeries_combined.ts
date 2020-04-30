/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StackedColumnSeries } from "./StackedColumnSeries";
import { IStacked100Series, IStacked100Series_$type } from "./IStacked100Series";
import { Type, Base, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategorySeries } from "./CategorySeries";
import { Series } from "./Series";
import { SeriesView } from "./SeriesView";
import { CategorySeriesView } from "./CategorySeriesView";
import { StackedSeriesBase } from "./StackedSeriesBase";
import { Stacked100DataPreparer } from "./Stacked100DataPreparer";
import { StackedColumnSeriesView } from "./StackedColumnSeriesView";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { Stacked100ColumnBucketCalculator } from "./Stacked100ColumnBucketCalculator";

/**
 * @hidden 
 */
export class Stacked100ColumnSeries extends StackedColumnSeries implements IStacked100Series {
	static $t: Type = markType(Stacked100ColumnSeries, 'Stacked100ColumnSeries', (<any>StackedColumnSeries).$type, [IStacked100Series_$type]);
	constructor() {
		super();
		this.defaultStyleKey = (<any>Stacked100ColumnSeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	protected createView(): SeriesView {
		return new Stacked100ColumnSeriesView(this);
	}
	private _stacked100ColumnView: Stacked100ColumnSeriesView;
	get stacked100ColumnView(): Stacked100ColumnSeriesView {
		return this._stacked100ColumnView;
	}
	set stacked100ColumnView(value: Stacked100ColumnSeriesView) {
		this._stacked100ColumnView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.stacked100ColumnView = <Stacked100ColumnSeriesView>view;
	}
	getSeriesView(): CategorySeriesView {
		return this.stacked100ColumnView;
	}
	protected prepareData(): void {
		super.prepareData();
		Stacked100DataPreparer.prepareData(this);
	}
}

/**
 * @hidden 
 */
export class Stacked100ColumnSeriesView extends StackedColumnSeriesView {
	static $t: Type = markType(Stacked100ColumnSeriesView, 'Stacked100ColumnSeriesView', (<any>StackedColumnSeriesView).$type);
	private _stacked100ColumnModel: Stacked100ColumnSeries = null;
	get stacked100ColumnModel(): Stacked100ColumnSeries {
		return this._stacked100ColumnModel;
	}
	set stacked100ColumnModel(value: Stacked100ColumnSeries) {
		this._stacked100ColumnModel = value;
	}
	constructor(model: Stacked100ColumnSeries) {
		super(model);
		this.stacked100ColumnModel = model;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new Stacked100ColumnBucketCalculator(this);
	}
}


