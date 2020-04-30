/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, EventArgs, typeCast, markType, getInstanceType } from "igniteui-core/type";
import { IIndicatorProxy, IIndicatorProxy_$type } from "./IIndicatorProxy";
import { Series } from "./Series";
import { FinancialIndicator } from "./FinancialIndicator";
import { FinancialSeries } from "./FinancialSeries";
import { IndicatorDisplayType } from "./IndicatorDisplayType";
import { IShortPeriodLongPeriod, IShortPeriodLongPeriod_$type } from "./IShortPeriodLongPeriod";
import { Brush } from "igniteui-core/Brush";
import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { stringEndsWith } from "igniteui-core/string";

/**
 * @hidden 
 */
export class IndicatorProxy extends Base implements IIndicatorProxy {
	static $t: Type = markType(IndicatorProxy, 'IndicatorProxy', (<any>Base).$type, [IIndicatorProxy_$type]);
	matchesType(series: Series): boolean {
		if (stringEndsWith(getInstanceType(series).typeName, "Indicator")) {
			return true;
		}
		return false;
	}
	setCloseMemberPath(indicator: Series, v: string): void {
		(<FinancialIndicator>indicator).closeMemberPath = v;
	}
	setDisplayType(indicator: Series, indicatorDisplayType: IndicatorDisplayType): void {
		(<FinancialIndicator>indicator).displayType = indicatorDisplayType;
	}
	setHighMemberPath(indicator: Series, v: string): void {
		(<FinancialIndicator>indicator).highMemberPath = v;
	}
	setLongPeriod(series: Series, indicatorLongPeriod: number): void {
		if (typeCast<IShortPeriodLongPeriod>(IShortPeriodLongPeriod_$type, series) !== null) {
			(<IShortPeriodLongPeriod><any>series).longPeriod = indicatorLongPeriod;
		}
	}
	setLowMemberPath(indicator: Series, v: string): void {
		(<FinancialIndicator>indicator).lowMemberPath = v;
	}
	setNegativeBrush(indicator: Series, brush: Brush): void {
		(<FinancialIndicator>indicator).negativeBrush = brush;
	}
	setOpenMemberPath(indicator: Series, v: string): void {
		(<FinancialIndicator>indicator).openMemberPath = v;
	}
	setPeriodOverride(series: Series, indicatorPeriod: number): void {
		if (typeCast<StrategyBasedIndicator>((<any>StrategyBasedIndicator).$type, series) !== null) {
			(<StrategyBasedIndicator>series).setPeriodOverride(indicatorPeriod);
		}
	}
	setShortPeriod(series: Series, indicatorShortPeriod: number): void {
		if (typeCast<IShortPeriodLongPeriod>(IShortPeriodLongPeriod_$type, series) !== null) {
			(<IShortPeriodLongPeriod><any>series).shortPeriod = indicatorShortPeriod;
		}
	}
	setSignalPeriod(series: Series, indicatorSignalPeriod: number): void {
		if (getInstanceType(series).typeName == "MovingAverageConvergenceDivergenceIndicator") {
			let s_ = series;
			let p_ = indicatorSignalPeriod;
			s_['signalPeriod'] = p_;
		}
	}
	setSmoothingPeriod(series: Series, indicatorSmoothingPeriod: number): void {
		if (getInstanceType(series).typeName == "FullStochasticOscillatorIndicator") {
			let s_ = series;
			let p_ = indicatorSmoothingPeriod;
			s_['smoothingPeriod'] = p_;
		}
	}
	setVolumeMemberPath(indicator: Series, v: string): void {
		(<FinancialIndicator>indicator).volumeMemberPath = v;
	}
	setXAxis(indicator: Series, xAxis: CategoryAxisBase): void {
		(<FinancialIndicator>indicator).xAxis = xAxis;
	}
	setYAxis(indicator: Series, yAxis: NumericYAxis): void {
		(<FinancialIndicator>indicator).yAxis = yAxis;
	}
	handleCustomIndicatorEvent(indicator: Series, handler: (sender: any, e: EventArgs) => void): void {
		if (getInstanceType(indicator).typeName == "CustomIndicator") {
			let s_ = indicator;
			let p_ = handler;
			s_['indicator'] = p_;
		}
	}
}


