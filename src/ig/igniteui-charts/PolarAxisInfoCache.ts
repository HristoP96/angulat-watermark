/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { NumericAngleAxis } from "./NumericAngleAxis";
import { NumericRadiusAxis } from "./NumericRadiusAxis";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { NumericAxisBase } from "./NumericAxisBase";
import { Axis } from "./Axis";

/**
 * @hidden 
 */
export class PolarAxisInfoCache extends Base {
	static $t: Type = markType(PolarAxisInfoCache, 'PolarAxisInfoCache');
	private _angleAxis: NumericAngleAxis = null;
	get angleAxis(): NumericAngleAxis {
		return this._angleAxis;
	}
	set angleAxis(value: NumericAngleAxis) {
		this._angleAxis = value;
	}
	private _radiusAxis: NumericRadiusAxis = null;
	get radiusAxis(): NumericRadiusAxis {
		return this._radiusAxis;
	}
	set radiusAxis(value: NumericRadiusAxis) {
		this._radiusAxis = value;
	}
	private _angleAxisIsLogarithmic: boolean = false;
	get angleAxisIsLogarithmic(): boolean {
		return this._angleAxisIsLogarithmic;
	}
	set angleAxisIsLogarithmic(value: boolean) {
		this._angleAxisIsLogarithmic = value;
	}
	private _radiusAxisIsLogarithmic: boolean = false;
	get radiusAxisIsLogarithmic(): boolean {
		return this._radiusAxisIsLogarithmic;
	}
	set radiusAxisIsLogarithmic(value: boolean) {
		this._radiusAxisIsLogarithmic = value;
	}
	private _angleAxisIsInverted: boolean = false;
	get angleAxisIsInverted(): boolean {
		return this._angleAxisIsInverted;
	}
	set angleAxisIsInverted(value: boolean) {
		this._angleAxisIsInverted = value;
	}
	private _radiusAxisIsInverted: boolean = false;
	get radiusAxisIsInverted(): boolean {
		return this._radiusAxisIsInverted;
	}
	set radiusAxisIsInverted(value: boolean) {
		this._radiusAxisIsInverted = value;
	}
	private _fastItemsSource: IFastItemsSource = null;
	get fastItemsSource(): IFastItemsSource {
		return this._fastItemsSource;
	}
	set fastItemsSource(value: IFastItemsSource) {
		this._fastItemsSource = value;
	}
	private _radiusExtentScale: number = 0;
	get radiusExtentScale(): number {
		return this._radiusExtentScale;
	}
	set radiusExtentScale(value: number) {
		this._radiusExtentScale = value;
	}
	private _innerRadiusExtentScale: number = 0;
	get innerRadiusExtentScale(): number {
		return this._innerRadiusExtentScale;
	}
	set innerRadiusExtentScale(value: number) {
		this._innerRadiusExtentScale = value;
	}
	constructor(numAxis: NumericAngleAxis, radAxis: NumericRadiusAxis, itemsSource: IFastItemsSource) {
		super();
		this.angleAxis = numAxis;
		this.radiusAxis = radAxis;
		this.angleAxisIsLogarithmic = this.angleAxis.isReallyLogarithmic;
		this.angleAxisIsInverted = this.angleAxis.isInverted;
		this.radiusAxisIsLogarithmic = this.radiusAxis.isReallyLogarithmic;
		this.radiusAxisIsInverted = this.radiusAxis.isInverted;
		this.radiusExtentScale = this.radiusAxis.actualRadiusExtentScale;
		this.innerRadiusExtentScale = this.radiusAxis.actualInnerRadiusExtentScale;
		this.fastItemsSource = itemsSource;
	}
}


