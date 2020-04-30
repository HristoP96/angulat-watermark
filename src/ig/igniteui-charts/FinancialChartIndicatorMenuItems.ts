/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "igniteui-core/List$1";
import { FinancialChartIndicatorMenuItem } from "./FinancialChartIndicatorMenuItem";
import { SRProvider } from "igniteui-core/SRProvider";
import { OrderedDictionary$2 } from "./OrderedDictionary$2";
import { FinancialIndicatorType, FinancialIndicatorType_$type } from "./FinancialIndicatorType";
import { FinancialOverlayType, FinancialOverlayType_$type } from "./FinancialOverlayType";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { FinancialChartVolumeType, FinancialChartVolumeType_$type } from "./FinancialChartVolumeType";
import { Base, IEnumerator$1, IEnumerator$1_$type, Type, Enum, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, typeGetValue, fromEnum, markType, EnumUtil } from "igniteui-core/type";
import { OrderedDictionary } from "./OrderedDictionary";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class FinancialChartIndicatorMenuItems extends List$1<FinancialChartIndicatorMenuItem> {
	static $t: Type = markType(FinancialChartIndicatorMenuItems, 'FinancialChartIndicatorMenuItems', (<any>List$1).$type.specialize((<any>FinancialChartIndicatorMenuItem).$type));
	constructor(sr: SRProvider) {
		super((<any>FinancialChartIndicatorMenuItem).$type, 0);
		this.sR = sr;
		this.addEnumCategory$1<FinancialOverlayType>(FinancialOverlayType_$type, this.getString("FinancialChart_IndicatorMenu_OverlaysCategoryHeader", "Overlays"));
		this.addEnumCategory$1<TrendLineType>(TrendLineType_$type, this.getString("FinancialChart_IndicatorMenu_TrendlinesCategoryHeader", "Trendlines"));
		this.addEnumCategory$1<FinancialChartVolumeType>(FinancialChartVolumeType_$type, this.getString("FinancialChart_IndicatorMenu_VolumeCategoryHeader", "Volume"));
		this.addEnumCategory$1<FinancialIndicatorType>(FinancialIndicatorType_$type, this.getString("FinancialChart_IndicatorMenu_IndicatorsCategoryHeader", "Standalone Indicators"));
	}
	private _sR: SRProvider = null;
	private get sR(): SRProvider {
		return this._sR;
	}
	private set sR(value: SRProvider) {
		this._sR = value;
	}
	private getString(key: string, defaultValue: string): string {
		let result: string = this.sR.getString(key);
		return stringIsNullOrEmpty(result) ? defaultValue : result;
	}
	private addEnumCategory$1<T>($t: Type, header: string): void {
		this.add(((() => {
			let $ret = new FinancialChartIndicatorMenuItem();
			$ret.content = header;
			$ret.label = header;
			return $ret;
		})()));
		this.addEnumValues$1<T>($t);
	}
	private addEnumValues$1<T>($t: Type): void {
		let enumValues: List$1<any> = new List$1<any>((<any>Base).$type, 0);
		let enumValueLabels: Dictionary$2<any, string> = new Dictionary$2<any, string>((<any>Base).$type, String_$type, 0);
		let enumTypes: Dictionary$2<any, Type> = new Dictionary$2<any, Type>((<any>Base).$type, (<any>Type).$type, 0);
		let readNames: (arg1: OrderedDictionary) => void = (names: OrderedDictionary) => {
			for (let ii: number = 0; ii < names.length; ii++) {
				let enumValue: number = typeGetValue(names.keyAtIndex(ii));
				enumValues.add1(enumValue);
				let name: string = <string>names.valueFromKey(enumValue);
				enumValueLabels.addItem(enumValue, name);
				enumTypes.addItem(enumValue, $t);
			}
		};
		if ($t == FinancialOverlayType_$type) {
			readNames(this.overlayNames);
		} else if ($t == TrendLineType_$type) {
			readNames(this.trendlineNames);
		} else if ($t == FinancialIndicatorType_$type) {
			readNames(this.indicatorNames);
		} else if ($t == FinancialChartVolumeType_$type) {
			readNames(this.volumeNames);
		} else {
			let names: string[] = EnumUtil.getNames($t);
			let values: any[] = EnumUtil.getValues($t);
			for (let ii: number = 0; ii < values.length; ii++) {
				let enumValue: any;
				let name: string;
				enumValue = values[ii];
				name = names[ii];
				name = name.charAt(0).toUpperCase() + name.substr(1);
				if (name == "None") {
					continue;
				}
				enumValues.add1(enumValue);
				enumValueLabels.addItem(enumValue, name);
				enumTypes.addItem(enumValue, $t);
			}
		}
		for (let enumValue1 of fromEnum<any>(enumValues)) {
			this.add(((() => {
				let $ret = new FinancialChartIndicatorMenuItem();
				$ret.content = enumValue1;
				$ret.label = enumValueLabels.containsKey(enumValue1) ? enumValueLabels.item(enumValue1) : enumValue1.toString();
				$ret.indentation = 1;
				$ret.type = enumTypes.containsKey(enumValue1) ? enumTypes.item(enumValue1) : null;
				return $ret;
			})()));
		}
	}
	private _indicatorNames: OrderedDictionary$2<FinancialIndicatorType, string> = null;
	private get indicatorNames(): OrderedDictionary$2<FinancialIndicatorType, string> {
		if (this._indicatorNames == null) {
			this.initializeIndicatorNames();
		}
		return this._indicatorNames;
	}
	private initializeIndicatorNames(): void {
		this._indicatorNames = ((() => {
			let $ret = new OrderedDictionary$2<FinancialIndicatorType, string>(FinancialIndicatorType_$type, String_$type);
			$ret.addItem(FinancialIndicatorType.AbsoluteVolumeOscillator, this.getString("FinancialChart_IndicatorsMenu_Indicator_AbsoluteVolumeOscillator", "Absolute Volume Oscillator"));
			$ret.addItem(FinancialIndicatorType.AccumulationDistribution, this.getString("FinancialChart_IndicatorsMenu_Indicator_AccumulationDistribution", "Accumulation Distribution"));
			$ret.addItem(FinancialIndicatorType.AverageDirectionalIndex, this.getString("FinancialChart_IndicatorsMenu_Indicator_AverageDirectionalIndex", "Average Directional Index"));
			$ret.addItem(FinancialIndicatorType.AverageTrueRange, this.getString("FinancialChart_IndicatorsMenu_Indicator_AverageTrueRange", "Average True Range"));
			$ret.addItem(FinancialIndicatorType.BollingerBandWidth, this.getString("FinancialChart_IndicatorsMenu_Indicator_BollingerBandWidth", "Bollinger Band Width"));
			$ret.addItem(FinancialIndicatorType.ChaikinOscillator, this.getString("FinancialChart_IndicatorsMenu_Indicator_ChaikinOscillator", "Chaikin Oscillator"));
			$ret.addItem(FinancialIndicatorType.ChaikinVolatility, this.getString("FinancialChart_IndicatorsMenu_Indicator_ChaikinVolatility", "Chaikin Volatility"));
			$ret.addItem(FinancialIndicatorType.CommodityChannelIndex, this.getString("FinancialChart_IndicatorsMenu_Indicator_CommodityChannelIndex", "Commodity Channel Index"));
			$ret.addItem(FinancialIndicatorType.DetrendedPriceOscillator, this.getString("FinancialChart_IndicatorsMenu_Indicator_DetrendedPriceOscillator", "Detrended Price Oscillator"));
			$ret.addItem(FinancialIndicatorType.EaseOfMovement, this.getString("FinancialChart_IndicatorsMenu_Indicator_EaseOfMovement", "Ease Of Movement"));
			$ret.addItem(FinancialIndicatorType.FastStochasticOscillator, this.getString("FinancialChart_IndicatorsMenu_Indicator_FastStochasticOscillator", "Fast Stochastic Oscillator"));
			$ret.addItem(FinancialIndicatorType.ForceIndex, this.getString("FinancialChart_IndicatorsMenu_Indicator_ForceIndex", "Force Index"));
			$ret.addItem(FinancialIndicatorType.FullStochasticOscillator, this.getString("FinancialChart_IndicatorsMenu_Indicator_FullStochasticOscillator", "Full Stochastic Oscillator"));
			$ret.addItem(FinancialIndicatorType.MarketFacilitationIndex, this.getString("FinancialChart_IndicatorsMenu_Indicator_MarketFacilitationIndex", "Market Facilitation Index"));
			$ret.addItem(FinancialIndicatorType.MassIndex, this.getString("FinancialChart_IndicatorsMenu_Indicator_MassIndex", "Mass Index"));
			$ret.addItem(FinancialIndicatorType.MedianPrice, this.getString("FinancialChart_IndicatorsMenu_Indicator_MedianPrice", "Median Price"));
			$ret.addItem(FinancialIndicatorType.MoneyFlowIndex, this.getString("FinancialChart_IndicatorsMenu_Indicator_MoneyFlowIndex", "Money Flow Index"));
			$ret.addItem(FinancialIndicatorType.MovingAverageConvergenceDivergence, this.getString("FinancialChart_IndicatorsMenu_Indicator_MovingAverageConvergenceDivergence", "MACD"));
			$ret.addItem(FinancialIndicatorType.NegativeVolumeIndex, this.getString("FinancialChart_IndicatorsMenu_Indicator_NegativeVolumeIndex", "Negative Volume Index"));
			$ret.addItem(FinancialIndicatorType.OnBalanceVolume, this.getString("FinancialChart_IndicatorsMenu_Indicator_OnBalanceVolume", "On Balance Volume"));
			$ret.addItem(FinancialIndicatorType.PercentagePriceOscillator, this.getString("FinancialChart_IndicatorsMenu_Indicator_PercentagePriceOscillator", "Percentage Price Oscillator"));
			$ret.addItem(FinancialIndicatorType.PercentageVolumeOscillator, this.getString("FinancialChart_IndicatorsMenu_Indicator_PercentageVolumeOscillator", "Percentage Volume Oscillator"));
			$ret.addItem(FinancialIndicatorType.PositiveVolumeIndex, this.getString("FinancialChart_IndicatorsMenu_Indicator_PositiveVolumeIndex", "Positive Volume Index"));
			$ret.addItem(FinancialIndicatorType.PriceVolumeTrend, this.getString("FinancialChart_IndicatorsMenu_Indicator_PriceVolumeTrend", "Price Volume Trend"));
			$ret.addItem(FinancialIndicatorType.RateOfChangeAndMomentum, this.getString("FinancialChart_IndicatorsMenu_Indicator_RateOfChangeAndMomentum", "ROC"));
			$ret.addItem(FinancialIndicatorType.RelativeStrengthIndex, this.getString("FinancialChart_IndicatorsMenu_Indicator_RelativeStrengthIndex", "RSI"));
			$ret.addItem(FinancialIndicatorType.SlowStochasticOscillator, this.getString("FinancialChart_IndicatorsMenu_Indicator_SlowStochasticOscillator", "Slow Stochastic Oscillator"));
			$ret.addItem(FinancialIndicatorType.StandardDeviation, this.getString("FinancialChart_IndicatorsMenu_Indicator_StandardDeviation", "Standard Deviation"));
			$ret.addItem(FinancialIndicatorType.StochRSI, this.getString("FinancialChart_IndicatorsMenu_Indicator_StochRSI", "Stoch RSI"));
			$ret.addItem(FinancialIndicatorType.TRIX, this.getString("FinancialChart_IndicatorsMenu_Indicator_TRIX", "TRIX"));
			$ret.addItem(FinancialIndicatorType.TypicalPrice, this.getString("FinancialChart_IndicatorsMenu_Indicator_TypicalPrice", "Typical Price"));
			$ret.addItem(FinancialIndicatorType.UltimateOscillator, this.getString("FinancialChart_IndicatorsMenu_Indicator_UltimateOscillator", "Ultimate Oscillator"));
			$ret.addItem(FinancialIndicatorType.WeightedClose, this.getString("FinancialChart_IndicatorsMenu_Indicator_WeightedClose", "Weighted Close"));
			$ret.addItem(FinancialIndicatorType.WilliamsPercentR, this.getString("FinancialChart_IndicatorsMenu_Indicator_WilliamsPercentR", "Williams %R"));
			return $ret;
		})());
	}
	private _overlayNames: OrderedDictionary$2<FinancialOverlayType, string> = null;
	private get overlayNames(): OrderedDictionary$2<FinancialOverlayType, string> {
		if (this._overlayNames == null) {
			this.initializeOverlayNames();
		}
		return this._overlayNames;
	}
	private initializeOverlayNames(): void {
		this._overlayNames = ((() => {
			let $ret = new OrderedDictionary$2<FinancialOverlayType, string>(FinancialOverlayType_$type, String_$type);
			$ret.addItem(FinancialOverlayType.BollingerBands, this.getString("FinancialChart_IndicatorsMenu_Overlay_BollingerBands", "Bollinger Bands"));
			$ret.addItem(FinancialOverlayType.PriceChannel, this.getString("FinancialChart_IndicatorsMenu_Overlay_PriceChannel", "Price Channel"));
			return $ret;
		})());
	}
	private _trendlineNames: OrderedDictionary$2<TrendLineType, string> = null;
	private get trendlineNames(): OrderedDictionary$2<TrendLineType, string> {
		if (this._trendlineNames == null) {
			this.initializeTrendlineNames();
		}
		return this._trendlineNames;
	}
	private initializeTrendlineNames(): void {
		this._trendlineNames = ((() => {
			let $ret = new OrderedDictionary$2<TrendLineType, string>(TrendLineType_$type, String_$type);
			$ret.addItem(TrendLineType.LinearFit, this.getString("FinancialChart_IndicatorsMenu_TrendLine_LinearFit", "Linear Fit"));
			$ret.addItem(TrendLineType.QuadraticFit, this.getString("FinancialChart_IndicatorsMenu_TrendLine_QuadraticFit", "Quadratic Fit"));
			$ret.addItem(TrendLineType.CubicFit, this.getString("FinancialChart_IndicatorsMenu_TrendLine_CubicFit", "Cubic Fit"));
			$ret.addItem(TrendLineType.QuarticFit, this.getString("FinancialChart_IndicatorsMenu_TrendLine_QuarticFit", "Quartic Fit"));
			$ret.addItem(TrendLineType.QuinticFit, this.getString("FinancialChart_IndicatorsMenu_TrendLine_QuinticFit", "Quintic Fit"));
			$ret.addItem(TrendLineType.LogarithmicFit, this.getString("FinancialChart_IndicatorsMenu_TrendLine_LogarithmicFit", "Logarithmic Fit"));
			$ret.addItem(TrendLineType.ExponentialFit, this.getString("FinancialChart_IndicatorsMenu_TrendLine_ExponentialFit", "Exponential Fit"));
			$ret.addItem(TrendLineType.PowerLawFit, this.getString("FinancialChart_IndicatorsMenu_TrendLine_PowerLawFit", "Power LawFit"));
			$ret.addItem(TrendLineType.SimpleAverage, this.getString("FinancialChart_IndicatorsMenu_TrendLine_SimpleAverage", "Simple Average"));
			$ret.addItem(TrendLineType.ExponentialAverage, this.getString("FinancialChart_IndicatorsMenu_TrendLine_ExponentialAverage", "Exponential Average"));
			$ret.addItem(TrendLineType.ModifiedAverage, this.getString("FinancialChart_IndicatorsMenu_TrendLine_ModifiedAverage", "Modified Average"));
			$ret.addItem(TrendLineType.CumulativeAverage, this.getString("FinancialChart_IndicatorsMenu_TrendLine_CumulativeAverage", "Cumulative Average"));
			$ret.addItem(TrendLineType.WeightedAverage, this.getString("FinancialChart_IndicatorsMenu_TrendLine_WeightedAverage", "Weighted Average"));
			return $ret;
		})());
	}
	private _volumeNames: OrderedDictionary$2<FinancialChartVolumeType, string> = null;
	private get volumeNames(): OrderedDictionary$2<FinancialChartVolumeType, string> {
		if (this._volumeNames == null) {
			this.initializeVolumeNames();
		}
		return this._volumeNames;
	}
	private initializeVolumeNames(): void {
		this._volumeNames = ((() => {
			let $ret = new OrderedDictionary$2<FinancialChartVolumeType, string>(FinancialChartVolumeType_$type, String_$type);
			$ret.addItem(FinancialChartVolumeType.Area, this.getString("FinancialChart_IndicatorsMenu_Volume_Area", "Area"));
			$ret.addItem(FinancialChartVolumeType.Column, this.getString("FinancialChart_IndicatorsMenu_Volume_Column", "Column"));
			$ret.addItem(FinancialChartVolumeType.Line, this.getString("FinancialChart_IndicatorsMenu_Volume_Line", "Line"));
			return $ret;
		})());
	}
}


