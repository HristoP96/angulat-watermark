/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { List$1 } from "igniteui-core/List$1";
import { XamDataChart } from "./XamDataChart";
import { SeriesViewer } from "./SeriesViewer";

/**
 * @hidden 
 */
export class IndicatorPane extends Base {
	static $t: Type = markType(IndicatorPane, 'IndicatorPane');
	private _renderer: DomRenderer = null;
	private get renderer(): DomRenderer {
		return this._renderer;
	}
	private set renderer(value: DomRenderer) {
		this._renderer = value;
	}
	private _gridDiv: DomWrapper = null;
	private get gridDiv(): DomWrapper {
		return this._gridDiv;
	}
	private set gridDiv(value: DomWrapper) {
		this._gridDiv = value;
	}
	provideContainer(container: any): void {
		this.renderer = <DomRenderer><any>container;
		if (this.renderer == null) {
			return;
		}
		this.gridDiv = this.renderer.createElement("div");
		this.gridDiv.setStyleProperty("height", "100%");
		this.gridDiv.setStyleProperty("width", "100%");
		this.gridDiv.setStyleProperty("display", "grid");
		this.gridDiv.setStyleProperty("display", "-ms-grid");
		this.gridDiv.setStyleProperty("-ms-grid-columns", "100%");
		this.renderer.append(this.gridDiv);
		this.renderCharts();
	}
	private renderCharts(): void {
		if (this.gridDiv == null) {
			return;
		}
		this.gridDiv.removeChildren();
		if (this.indicatorCharts == null) {
			return;
		}
		let msGridRowsAttributeValue: string = "";
		for (let ii: number = 0; ii < this.indicatorCharts.count; ii++) {
			let indicatorChart: XamDataChart = this.indicatorCharts._inner[ii];
			let indicatorDiv: DomWrapper = this.renderer.createElement("div");
			indicatorDiv.setStyleProperty("grid-row", (ii + 1).toString());
			indicatorDiv.setStyleProperty("grid-column", (1).toString());
			indicatorDiv.setStyleProperty("-ms-grid-row", (ii + 1).toString());
			indicatorDiv.setStyleProperty("-ms-grid-column", (1).toString());
			this.gridDiv.append(indicatorDiv);
			let indicatorRenderer: DomRenderer = this.renderer.getSubRenderer(indicatorDiv);
			indicatorChart.provideContainer(indicatorRenderer);
			msGridRowsAttributeValue += " 1fr";
		}
		msGridRowsAttributeValue = msGridRowsAttributeValue.trim();
		this.gridDiv.setStyleProperty("-ms-grid-rows", msGridRowsAttributeValue);
	}
	private static readonly indicatorChartsPropertyName: string = "IndicatorCharts";
	private _indicatorCharts: List$1<XamDataChart> = null;
	get indicatorCharts(): List$1<XamDataChart> {
		return this._indicatorCharts;
	}
	set indicatorCharts(value: List$1<XamDataChart>) {
		let oldValue: List$1<XamDataChart> = this.indicatorCharts;
		if (value != oldValue) {
			this._indicatorCharts = value;
			this.onPropertyUpdated(IndicatorPane.indicatorChartsPropertyName, oldValue, this.indicatorCharts);
		}
	}
	private onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case IndicatorPane.indicatorChartsPropertyName:
			this.renderCharts();
			break;

		}

	}
	notifyContainerResized(): void {
		if (this.indicatorCharts == null || this.renderer == null) {
			return;
		}
		for (let chart of fromEnum<XamDataChart>(this.indicatorCharts)) {
			chart.notifyContainerResized();
		}
	}
}


