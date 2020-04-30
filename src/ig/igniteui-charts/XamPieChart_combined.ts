/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PieChartBase } from "./PieChartBase";
import { PieChartBaseView } from "./PieChartBaseView";
import { Type, Base, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";

/**
 * @hidden 
 */
export class XamPieChart extends PieChartBase {
	static $t: Type = markType(XamPieChart, 'XamPieChart', (<any>PieChartBase).$type);
	createView(): PieChartBaseView {
		return new XamPieChartView(this);
	}
	onViewCreated(view: PieChartBaseView): void {
		super.onViewCreated(view);
		this.pieChartView = <XamPieChartView>view;
	}
	private _pieChartView: XamPieChartView = null;
	get pieChartView(): XamPieChartView {
		return this._pieChartView;
	}
	set pieChartView(value: XamPieChartView) {
		this._pieChartView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>XamPieChart).$type;
	}
}

/**
 * @hidden 
 */
export class XamPieChartView extends PieChartBaseView {
	static $t: Type = markType(XamPieChartView, 'XamPieChartView', (<any>PieChartBaseView).$type);
	private _pieChartModel: XamPieChart = null;
	protected get pieChartModel(): XamPieChart {
		return this._pieChartModel;
	}
	protected set pieChartModel(value: XamPieChart) {
		this._pieChartModel = value;
	}
	constructor(model: XamPieChart) {
		super(model);
		this.pieChartModel = model;
	}
}


