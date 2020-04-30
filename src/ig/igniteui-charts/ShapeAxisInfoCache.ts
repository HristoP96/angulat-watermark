/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { NumericXAxis } from "./NumericXAxis";
import { NumericYAxis } from "./NumericYAxis";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";

/**
 * @hidden 
 */
export class ShapeAxisInfoCache extends Base {
	static $t: Type = markType(ShapeAxisInfoCache, 'ShapeAxisInfoCache');
	private _xAxis: NumericXAxis = null;
	get xAxis(): NumericXAxis {
		return this._xAxis;
	}
	set xAxis(value: NumericXAxis) {
		this._xAxis = value;
	}
	private _yAxis: NumericYAxis = null;
	get yAxis(): NumericYAxis {
		return this._yAxis;
	}
	set yAxis(value: NumericYAxis) {
		this._yAxis = value;
	}
	private _xAxisIsInverted: boolean = false;
	get xAxisIsInverted(): boolean {
		return this._xAxisIsInverted;
	}
	set xAxisIsInverted(value: boolean) {
		this._xAxisIsInverted = value;
	}
	private _yAxisIsInverted: boolean = false;
	get yAxisIsInverted(): boolean {
		return this._yAxisIsInverted;
	}
	set yAxisIsInverted(value: boolean) {
		this._yAxisIsInverted = value;
	}
	private _fastItemsSource: IFastItemsSource = null;
	get fastItemsSource(): IFastItemsSource {
		return this._fastItemsSource;
	}
	set fastItemsSource(value: IFastItemsSource) {
		this._fastItemsSource = value;
	}
	private _shapeColumn: IFastItemColumn$1<any> = null;
	get shapeColumn(): IFastItemColumn$1<any> {
		return this._shapeColumn;
	}
	set shapeColumn(value: IFastItemColumn$1<any>) {
		this._shapeColumn = value;
	}
}


