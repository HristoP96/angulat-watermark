/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { ColumnSupportingCalculationDescription } from "./ColumnSupportingCalculationDescription";
import { DataSourceSupportingCalculationDescription } from "./DataSourceSupportingCalculationDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class FinancialCalculationSupportingCalculationsDescription extends Description {
	static $t: Type = markType(FinancialCalculationSupportingCalculationsDescription, 'FinancialCalculationSupportingCalculationsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "FinancialCalculationSupportingCalculations";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _eMA: ColumnSupportingCalculationDescription = null;
	get eMA(): ColumnSupportingCalculationDescription {
		return this._eMA;
	}
	set eMA(value: ColumnSupportingCalculationDescription) {
		this._eMA = value;
		this.markDirty("EMA");
	}
	private _sMA: ColumnSupportingCalculationDescription = null;
	get sMA(): ColumnSupportingCalculationDescription {
		return this._sMA;
	}
	set sMA(value: ColumnSupportingCalculationDescription) {
		this._sMA = value;
		this.markDirty("SMA");
	}
	private _sTDEV: ColumnSupportingCalculationDescription = null;
	get sTDEV(): ColumnSupportingCalculationDescription {
		return this._sTDEV;
	}
	set sTDEV(value: ColumnSupportingCalculationDescription) {
		this._sTDEV = value;
		this.markDirty("STDEV");
	}
	private _movingSum: ColumnSupportingCalculationDescription = null;
	get movingSum(): ColumnSupportingCalculationDescription {
		return this._movingSum;
	}
	set movingSum(value: ColumnSupportingCalculationDescription) {
		this._movingSum = value;
		this.markDirty("MovingSum");
	}
	private _shortVolumeOscillatorAverage: DataSourceSupportingCalculationDescription = null;
	get shortVolumeOscillatorAverage(): DataSourceSupportingCalculationDescription {
		return this._shortVolumeOscillatorAverage;
	}
	set shortVolumeOscillatorAverage(value: DataSourceSupportingCalculationDescription) {
		this._shortVolumeOscillatorAverage = value;
		this.markDirty("ShortVolumeOscillatorAverage");
	}
	private _longVolumeOscillatorAverage: DataSourceSupportingCalculationDescription = null;
	get longVolumeOscillatorAverage(): DataSourceSupportingCalculationDescription {
		return this._longVolumeOscillatorAverage;
	}
	set longVolumeOscillatorAverage(value: DataSourceSupportingCalculationDescription) {
		this._longVolumeOscillatorAverage = value;
		this.markDirty("LongVolumeOscillatorAverage");
	}
	private _shortPriceOscillatorAverage: DataSourceSupportingCalculationDescription = null;
	get shortPriceOscillatorAverage(): DataSourceSupportingCalculationDescription {
		return this._shortPriceOscillatorAverage;
	}
	set shortPriceOscillatorAverage(value: DataSourceSupportingCalculationDescription) {
		this._shortPriceOscillatorAverage = value;
		this.markDirty("ShortPriceOscillatorAverage");
	}
	private _longPriceOscillatorAverage: DataSourceSupportingCalculationDescription = null;
	get longPriceOscillatorAverage(): DataSourceSupportingCalculationDescription {
		return this._longPriceOscillatorAverage;
	}
	set longPriceOscillatorAverage(value: DataSourceSupportingCalculationDescription) {
		this._longPriceOscillatorAverage = value;
		this.markDirty("LongPriceOscillatorAverage");
	}
	private _makeSafeRef: string = null;
	get makeSafeRef(): string {
		return this._makeSafeRef;
	}
	set makeSafeRef(value: string) {
		this._makeSafeRef = value;
		this.markDirty("MakeSafeRef");
	}
}


