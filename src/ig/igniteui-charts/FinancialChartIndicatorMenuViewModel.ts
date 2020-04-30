/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialChartDropDownControlViewModel } from "./FinancialChartDropDownControlViewModel";
import { FinancialIndicatorTypeCollection } from "./FinancialIndicatorTypeCollection";
import { FinancialOverlayTypeCollection } from "./FinancialOverlayTypeCollection";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { FinancialChartVolumeType } from "./FinancialChartVolumeType";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class FinancialChartIndicatorMenuViewModel extends FinancialChartDropDownControlViewModel {
	static $t: Type = markType(FinancialChartIndicatorMenuViewModel, 'FinancialChartIndicatorMenuViewModel', (<any>FinancialChartDropDownControlViewModel).$type);
	private _indicatorTypes: FinancialIndicatorTypeCollection = null;
	get indicatorTypes(): FinancialIndicatorTypeCollection {
		return this._indicatorTypes;
	}
	set indicatorTypes(value: FinancialIndicatorTypeCollection) {
		this._indicatorTypes = value;
	}
	private _overlayTypes: FinancialOverlayTypeCollection = null;
	get overlayTypes(): FinancialOverlayTypeCollection {
		return this._overlayTypes;
	}
	set overlayTypes(value: FinancialOverlayTypeCollection) {
		this._overlayTypes = value;
	}
	private _trendLineType: TrendLineType = <TrendLineType>0;
	get trendLineType(): TrendLineType {
		return this._trendLineType;
	}
	set trendLineType(value: TrendLineType) {
		this._trendLineType = value;
	}
	private _volumeType: FinancialChartVolumeType = <FinancialChartVolumeType>0;
	get volumeType(): FinancialChartVolumeType {
		return this._volumeType;
	}
	set volumeType(value: FinancialChartVolumeType) {
		this._volumeType = value;
	}
}


