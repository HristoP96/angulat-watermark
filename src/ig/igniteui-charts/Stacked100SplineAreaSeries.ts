/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StackedSplineAreaSeries } from "./StackedSplineAreaSeries";
import { IStacked100Series, IStacked100Series_$type } from "./IStacked100Series";
import { Type, Base, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { Series } from "./Series";
import { StackedSeriesBase } from "./StackedSeriesBase";
import { Stacked100DataPreparer } from "./Stacked100DataPreparer";

/**
 * @hidden 
 */
export class Stacked100SplineAreaSeries extends StackedSplineAreaSeries implements IStacked100Series {
	static $t: Type = markType(Stacked100SplineAreaSeries, 'Stacked100SplineAreaSeries', (<any>StackedSplineAreaSeries).$type, [IStacked100Series_$type]);
	constructor() {
		super();
		this.defaultStyleKey = (<any>Stacked100SplineAreaSeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	protected prepareData(): void {
		super.prepareData();
		Stacked100DataPreparer.prepareData(this);
	}
}


