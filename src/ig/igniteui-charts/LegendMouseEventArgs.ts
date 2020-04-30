/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Point, Type, markType } from "igniteui-core/type";
import { MouseEventArgs } from "igniteui-core/MouseEventArgs";
import { ILegendSeries } from "igniteui-core/ILegendSeries";
import { ILegendOwner } from "igniteui-core/ILegendOwner";
import { UIElement } from "igniteui-core/UIElement";

/**
 * @hidden 
 */
export class LegendMouseEventArgs extends EventArgs {
	static $t: Type = markType(LegendMouseEventArgs, 'LegendMouseEventArgs', (<any>EventArgs).$type);
	constructor(chart: ILegendOwner, series: ILegendSeries, item: any, originalEvent: MouseEventArgs, legendItem: any) {
		super();
		this.chart = chart;
		this.series = series;
		this.item = item;
		this.originalEvent = originalEvent;
		this.legendItem = legendItem;
	}
	toString(): string {
		return this.chart.name + ", " + this.series.name + ", " + (this.item != null ? this.item.toString() : "") + ", " + this.getPosition(null).toString();
	}
	private _originalEvent: MouseEventArgs = null;
	private get originalEvent(): MouseEventArgs {
		return this._originalEvent;
	}
	private set originalEvent(value: MouseEventArgs) {
		this._originalEvent = value;
	}
	getPosition(relativeTo: UIElement): Point {
		return this.originalEvent.getPosition(relativeTo);
	}
	get originalSource(): any {
		return this.originalEvent.originalSource;
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _series: ILegendSeries = null;
	get series(): ILegendSeries {
		return this._series;
	}
	set series(value: ILegendSeries) {
		this._series = value;
	}
	private _chart: ILegendOwner = null;
	get chart(): ILegendOwner {
		return this._chart;
	}
	set chart(value: ILegendOwner) {
		this._chart = value;
	}
	private _legendItem: any = null;
	get legendItem(): any {
		return this._legendItem;
	}
	set legendItem(value: any) {
		this._legendItem = value;
	}
}


