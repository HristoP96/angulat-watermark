/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, getInstanceType } from "igniteui-core/type";
import { IOverlayProxy, IOverlayProxy_$type } from "./IOverlayProxy";
import { Series } from "./Series";
import { FinancialOverlay } from "./FinancialOverlay";
import { FinancialSeries } from "./FinancialSeries";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { stringEndsWith } from "igniteui-core/string";

/**
 * @hidden 
 */
export class OverlayProxy extends Base implements IOverlayProxy {
	static $t: Type = markType(OverlayProxy, 'OverlayProxy', (<any>Base).$type, [IOverlayProxy_$type]);
	matchesType(series: Series): boolean {
		if (stringEndsWith(getInstanceType(series).typeName, "Overlay")) {
			return true;
		}
		return false;
	}
	setCloseMemberPath(overlay: Series, v: string): void {
		(<FinancialOverlay>overlay).closeMemberPath = v;
	}
	setHighMemberPath(overlay: Series, v: string): void {
		(<FinancialOverlay>overlay).highMemberPath = v;
	}
	setLowMemberPath(overlay: Series, v: string): void {
		(<FinancialOverlay>overlay).lowMemberPath = v;
	}
	setMultiplier(series: Series, indicatorMultiplier: number): void {
		if (getInstanceType(series).typeName == "BollingerBandsOverlay") {
			let s_ = series;
			let p_ = indicatorMultiplier;
			s_['multiplier'] = p_;
		}
	}
	setOpenMemberPath(overlay: Series, v: string): void {
		(<FinancialOverlay>overlay).openMemberPath = v;
	}
	setVolumeMemberPath(overlay: Series, v: string): void {
		(<FinancialOverlay>overlay).volumeMemberPath = v;
	}
	setXAxis(overlay: Series, xAxis: CategoryAxisBase): void {
		(<FinancialOverlay>overlay).xAxis = xAxis;
	}
	setYAxis(overlay: Series, yAxis: NumericYAxis): void {
		(<FinancialOverlay>overlay).yAxis = yAxis;
	}
}


