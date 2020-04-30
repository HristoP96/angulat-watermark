/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialSeriesDescription } from "./FinancialSeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class FinancialIndicatorDescription extends FinancialSeriesDescription {
	static $t: Type = markType(FinancialIndicatorDescription, 'FinancialIndicatorDescription', (<any>FinancialSeriesDescription).$type);
	protected get_type(): string {
		return "FinancialIndicator";
	}
	constructor() {
		super();
	}
	private _displayType: string = null;
	get displayType(): string {
		return this._displayType;
	}
	set displayType(value: string) {
		this._displayType = value;
		this.markDirty("DisplayType");
	}
	private _ignoreFirst: number = 0;
	get ignoreFirst(): number {
		return this._ignoreFirst;
	}
	set ignoreFirst(value: number) {
		this._ignoreFirst = value;
		this.markDirty("IgnoreFirst");
	}
	private _trendLineType: string = null;
	get trendLineType(): string {
		return this._trendLineType;
	}
	set trendLineType(value: string) {
		this._trendLineType = value;
		this.markDirty("TrendLineType");
	}
	private _trendLineBrush: string = null;
	get trendLineBrush(): string {
		return this._trendLineBrush;
	}
	set trendLineBrush(value: string) {
		this._trendLineBrush = value;
		this.markDirty("TrendLineBrush");
	}
	private _actualTrendLineBrush: string = null;
	get actualTrendLineBrush(): string {
		return this._actualTrendLineBrush;
	}
	set actualTrendLineBrush(value: string) {
		this._actualTrendLineBrush = value;
		this.markDirty("ActualTrendLineBrush");
	}
	private _trendLineThickness: number = 0;
	get trendLineThickness(): number {
		return this._trendLineThickness;
	}
	set trendLineThickness(value: number) {
		this._trendLineThickness = value;
		this.markDirty("TrendLineThickness");
	}
	private _trendLinePeriod: number = 0;
	get trendLinePeriod(): number {
		return this._trendLinePeriod;
	}
	set trendLinePeriod(value: number) {
		this._trendLinePeriod = value;
		this.markDirty("TrendLinePeriod");
	}
}


