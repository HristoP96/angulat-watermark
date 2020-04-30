/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "./DependencyObject";
import { DVSR } from "./DVSR";
import { DomRenderer, DomRenderer_$type } from "./dom";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class SRProvider extends DependencyObject {
	static $t: Type = markType(SRProvider, 'SRProvider', (<any>DependencyObject).$type);
	private _sR: DVSR = null;
	private get sR(): DVSR {
		return this._sR;
	}
	private set sR(value: DVSR) {
		this._sR = value;
	}
	private _container: DomRenderer = null;
	get container(): DomRenderer {
		return this._container;
	}
	set container(value: DomRenderer) {
		this._container = value;
		this.sR.container = this._container;
	}
	constructor(container: DomRenderer) {
		super();
		super.toString();
		this._container = container;
		this.sR = new DVSR(container);
	}
	get oPD_DefaultInteraction(): string {
		return this.sR.getString("OPD_DefaultInteraction");
	}
	get oPD_ScaleToFit(): string {
		return this.sR.getString("OPD_ScaleToFit");
	}
	get oPD_ZoomTo100(): string {
		return this.sR.getString("OPD_ZoomTo100");
	}
	get oPD_ScaleToFit_SeriesViewer(): string {
		return this.sR.getString("OPD_ScaleToFit_SeriesViewer");
	}
	get pieChart_Others(): string {
		return this.sR.getString("PieChart_Others");
	}
	get financialSeries_Open(): string {
		return this.sR.getString("FinancialSeries_Open");
	}
	get financialSeries_Close(): string {
		return this.sR.getString("FinancialSeries_Close");
	}
	get financialSeries_Low(): string {
		return this.sR.getString("FinancialSeries_Low");
	}
	get financialSeries_High(): string {
		return this.sR.getString("FinancialSeries_High");
	}
	get financialSeries_Volume(): string {
		return this.sR.getString("FinancialSeries_Volume");
	}
	get bubbleSeries_Radius(): string {
		return this.sR.getString("BubbleSeries_Radius");
	}
	get dataProviderNotInitialized(): string {
		return this.sR.getString("DataProviderNotInitialized");
	}
	get object_Sealed(): string {
		return this.sR.getString("Object_Sealed");
	}
	get rangeModificationsNotSupported(): string {
		return this.sR.getString("RangeModificationsNotSupported");
	}
	get default_Series_Title(): string {
		return this.sR.getString("Default_Series_Title");
	}
	get dataChart_InteractivityNotLoaded(): string {
		return this.sR.getString("DataChart_InteractivityNotLoaded");
	}
	get dataChart_TrendLinesNotLoaded(): string {
		return this.sR.getString("DataChart_TrendLinesNotLoaded");
	}
	get dataChart_NumberAbbreviatorNotLoaded(): string {
		return this.sR.getString("DataChart_NumberAbbreviatorNotLoaded");
	}
	get dataChart_VisualDataNotLoaded(): string {
		return this.sR.getString("DataChart_VisualDataNotLoaded");
	}
	get trial_Version(): string {
		return this.sR.getString("TRIAL_VERSION");
	}
	get scatterSeries_Value(): string {
		return this.sR.getString("ScatterSeries_Value");
	}
	getString(resourceName: string): string {
		return this.sR.getString(resourceName);
	}
	get financialChart_RangeSelector_OneMonth(): string {
		return this.sR.getString("FinancialChart_RangeSelector_OneMonth");
	}
	get financialChart_RangeSelector_ThreeMonths(): string {
		return this.sR.getString("FinancialChart_RangeSelector_ThreeMonths");
	}
	get financialChart_RangeSelector_SixMonths(): string {
		return this.sR.getString("FinancialChart_RangeSelector_SixMonths");
	}
	get financialChart_RangeSelector_YearToDate(): string {
		return this.sR.getString("FinancialChart_RangeSelector_YearToDate");
	}
	get financialChart_RangeSelector_OneYear(): string {
		return this.sR.getString("FinancialChart_RangeSelector_OneYear");
	}
	get financialChart_RangeSelector_All(): string {
		return this.sR.getString("FinancialChart_RangeSelector_All");
	}
	get financialChart_RangeSelector_From(): string {
		return this.sR.getString("FinancialChart_RangeSelector_From");
	}
	get financialChart_RangeSelector_To(): string {
		return this.sR.getString("FinancialChart_RangeSelector_To");
	}
	get financialChart_IndicatorMenu_Header(): string {
		return this.sR.getString("FinancialChart_IndicatorMenu_Header");
	}
	get financialChart_IndicatorMenu_OverlaysCategoryHeader(): string {
		return this.sR.getString("FinancialChart_IndicatorMenu_OverlaysCategoryHeader");
	}
	get financialChart_IndicatorMenu_TrendlinesCategoryHeader(): string {
		return this.sR.getString("FinancialChart_IndicatorMenu_TrendlinesCategoryHeader");
	}
	get financialChart_IndicatorMenu_VolumeCategoryHeader(): string {
		return this.sR.getString("FinancialChart_IndicatorMenu_VolumeCategoryHeader");
	}
	get financialChart_IndicatorMenu_IndicatorsCategoryHeader(): string {
		return this.sR.getString("FinancialChart_IndicatorMenu_IndicatorsCategoryHeader");
	}
}


