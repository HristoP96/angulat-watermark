/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, getInstanceType } from "igniteui-core/type";
import { IFinancialPriceSeriesProxy, IFinancialPriceSeriesProxy_$type } from "./IFinancialPriceSeriesProxy";
import { Series } from "./Series";
import { FinancialSeries } from "./FinancialSeries";
import { CategoryMode } from "./CategoryMode";
import { PriceDisplayType } from "./PriceDisplayType";
import { FinancialPriceSeries } from "./FinancialPriceSeries";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { stringEndsWith } from "igniteui-core/string";

/**
 * @hidden 
 */
export class FinancialPriceSeriesProxy extends Base implements IFinancialPriceSeriesProxy {
	static $t: Type = markType(FinancialPriceSeriesProxy, 'FinancialPriceSeriesProxy', (<any>Base).$type, [IFinancialPriceSeriesProxy_$type]);
	getCloseMemberPath(financialSeries: Series): string {
		return (<FinancialSeries>financialSeries).closeMemberPath;
	}
	getHighMemberPath(financialSeries: Series): string {
		return (<FinancialSeries>financialSeries).highMemberPath;
	}
	getLowMemberPath(financialSeries: Series): string {
		return (<FinancialSeries>financialSeries).lowMemberPath;
	}
	getOpenMemberPath(financialSeries: Series): string {
		return (<FinancialSeries>financialSeries).openMemberPath;
	}
	getVolumeMemberPath(financialSeries: Series): string {
		return (<FinancialSeries>financialSeries).volumeMemberPath;
	}
	matchesType(ss: Series): boolean {
		if (!ss.isFinancial) {
			return false;
		}
		if (stringEndsWith(getInstanceType(ss).typeName, "Indicator") || stringEndsWith(getInstanceType(ss).typeName, "Overlay")) {
			return false;
		}
		return true;
	}
	setCategoryMode(priceSeries: Series, mode: CategoryMode): void {
		(<FinancialSeries>priceSeries).categoryMode = mode;
	}
	setCloseMemberPath(priceSeries: Series, v: string): void {
		(<FinancialSeries>priceSeries).closeMemberPath = v;
	}
	setDisplayType(priceSeries: Series, priceDisplayType: PriceDisplayType): void {
		(<FinancialPriceSeries>priceSeries).displayType = priceDisplayType;
	}
	setHighMemberPath(priceSeries: Series, v: string): void {
		(<FinancialSeries>priceSeries).highMemberPath = v;
	}
	setLowMemberPath(priceSeries: Series, v: string): void {
		(<FinancialSeries>priceSeries).lowMemberPath = v;
	}
	setOpenMemberPath(priceSeries: Series, v: string): void {
		(<FinancialSeries>priceSeries).openMemberPath = v;
	}
	setVolumeMemberPath(priceSeries: Series, v: string): void {
		(<FinancialSeries>priceSeries).volumeMemberPath = v;
	}
	setXAxis(priceSeries: Series, xAxis: CategoryAxisBase): void {
		(<FinancialSeries>priceSeries).xAxis = xAxis;
	}
	setYAxis(priceSeries: Series, yAxis: NumericYAxis): void {
		(<FinancialSeries>priceSeries).yAxis = yAxis;
	}
}


