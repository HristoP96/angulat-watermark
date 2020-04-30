/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available types of marker than can be displayed by default by series with markers.
 */
export enum FinancialIndicatorType {
	/**
	 * Absolute volume oscillator indicator.
	 */
	AbsoluteVolumeOscillator = 0,
	/**
	 * Accumulation distribution indicator.
	 */
	AccumulationDistribution = 1,
	/**
	 * Average directional index indicator.
	 */
	AverageDirectionalIndex = 2,
	/**
	 * Average true range indicator.
	 */
	AverageTrueRange = 3,
	/**
	 * Bollinger band width indicator.
	 */
	BollingerBandWidth = 4,
	/**
	 * Chaikin oscillator indicator.
	 */
	ChaikinOscillator = 5,
	/**
	 * Chaikin volatility indicator.
	 */
	ChaikinVolatility = 6,
	/**
	 * Commodity channel index indicator.
	 */
	CommodityChannelIndex = 7,
	/**
	 * Detrended price oscillator indicator.
	 */
	DetrendedPriceOscillator = 8,
	/**
	 * Ease of movement indicator.
	 */
	EaseOfMovement = 9,
	/**
	 * Fast stochastic oscillator indicator.
	 */
	FastStochasticOscillator = 10,
	/**
	 * Force index indicator.
	 */
	ForceIndex = 11,
	/**
	 * Full stochastic oscillator indicator.
	 */
	FullStochasticOscillator = 12,
	/**
	 * Market facilitation index indicator.
	 */
	MarketFacilitationIndex = 13,
	/**
	 * Mass index indicator.
	 */
	MassIndex = 14,
	/**
	 * Median price indicator.
	 */
	MedianPrice = 15,
	/**
	 * Money flow index indicator.
	 */
	MoneyFlowIndex = 16,
	/**
	 * Moving average convergence divergence (MACD) indicator.
	 */
	MovingAverageConvergenceDivergence = 17,
	/**
	 * Negative volume index indicator.
	 */
	NegativeVolumeIndex = 18,
	/**
	 * On balance volume indicator.
	 */
	OnBalanceVolume = 19,
	/**
	 * Percentage price oscillator indicator.
	 */
	PercentagePriceOscillator = 20,
	/**
	 * Percentage volume oscillator indicator.
	 */
	PercentageVolumeOscillator = 21,
	/**
	 * Positive volume index indicator.
	 */
	PositiveVolumeIndex = 22,
	/**
	 * Price volume trend indicator.
	 */
	PriceVolumeTrend = 23,
	/**
	 * Rate of change and momentum indicator.
	 */
	RateOfChangeAndMomentum = 24,
	/**
	 * Relative strength index indicator.
	 */
	RelativeStrengthIndex = 25,
	/**
	 * Slow stochastic oscillator indicator.
	 */
	SlowStochasticOscillator = 26,
	/**
	 * Standard deviation indicator.
	 */
	StandardDeviation = 27,
	/**
	 * StochRSI indicator.
	 * Stochastic Relative Strength Index.
	 */
	StochRSI = 28,
	/**
	 * TRIX indicator.
	 * TRIple eXponential.
	 */
	TRIX = 29,
	/**
	 * Typical price indicator.
	 */
	TypicalPrice = 30,
	/**
	 * Ultimate oscillator indicator.
	 */
	UltimateOscillator = 31,
	/**
	 * Weighted close indicator.
	 */
	WeightedClose = 32,
	/**
	 * Williams %R indicator.
	 */
	WilliamsPercentR = 33
}

/**
 * @hidden 
 */
export let FinancialIndicatorType_$type = markEnum('FinancialIndicatorType', 'AbsoluteVolumeOscillator,0|AccumulationDistribution,1|AverageDirectionalIndex,2|AverageTrueRange,3|BollingerBandWidth,4|ChaikinOscillator,5|ChaikinVolatility,6|CommodityChannelIndex,7|DetrendedPriceOscillator,8|EaseOfMovement,9|FastStochasticOscillator,10|ForceIndex,11|FullStochasticOscillator,12|MarketFacilitationIndex,13|MassIndex,14|MedianPrice,15|MoneyFlowIndex,16|MovingAverageConvergenceDivergence,17|NegativeVolumeIndex,18|OnBalanceVolume,19|PercentagePriceOscillator,20|PercentageVolumeOscillator,21|PositiveVolumeIndex,22|PriceVolumeTrend,23|RateOfChangeAndMomentum,24|RelativeStrengthIndex,25|SlowStochasticOscillator,26|StandardDeviation,27|StochRSI,28|TRIX,29|TypicalPrice,30|UltimateOscillator,31|WeightedClose,32|WilliamsPercentR,33');


