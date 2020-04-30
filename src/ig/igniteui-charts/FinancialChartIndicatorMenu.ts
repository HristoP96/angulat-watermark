/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialChartDropDownControl } from "./FinancialChartDropDownControl";
import { FinancialIndicatorTypeCollection } from "./FinancialIndicatorTypeCollection";
import { FinancialChartIndicatorMenuViewModel } from "./FinancialChartIndicatorMenuViewModel";
import { FinancialOverlayTypeCollection } from "./FinancialOverlayTypeCollection";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { FinancialChartVolumeType } from "./FinancialChartVolumeType";
import { Base, runOn, Type, markType } from "igniteui-core/type";
import { FinancialChartIndicatorMenuView } from "./FinancialChartIndicatorMenuView";
import { FinancialChartDropDownControlViewModel } from "./FinancialChartDropDownControlViewModel";

/**
 * @hidden 
 */
export class FinancialChartIndicatorMenu extends FinancialChartDropDownControl {
	static $t: Type = markType(FinancialChartIndicatorMenu, 'FinancialChartIndicatorMenu', (<any>FinancialChartDropDownControl).$type);
	private static readonly defaultTemplate: string = "";
	constructor(initNumber: number);
	constructor(initNumber: number, template: any);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let $outerArgs = <any[]>[ null ];
				{
					let template: any = <any>$outerArgs[0];
					super("financialChartIndicatorMenu", template, FinancialChartIndicatorMenu.defaultTemplate);
					this.view = new FinancialChartIndicatorMenuView();
					this.viewModel = new FinancialChartIndicatorMenuViewModel();
					this.viewModel.onSelectionChanged = runOn(this, this.onSelectionChanged);
					this.viewModel.dropDownClick = runOn(this.view, this.view.handleDropDownClick);
					this.view.viewModel = this.viewModel;
				}
			}
			break;

			case 1:
			{
				let template: any = <any>_rest[0];
				super("financialChartIndicatorMenu", template, FinancialChartIndicatorMenu.defaultTemplate);
				this.view = new FinancialChartIndicatorMenuView();
				this.viewModel = new FinancialChartIndicatorMenuViewModel();
				this.viewModel.onSelectionChanged = runOn(this, this.onSelectionChanged);
				this.viewModel.dropDownClick = runOn(this.view, this.view.handleDropDownClick);
				this.view.viewModel = this.viewModel;
			}
			break;

		}

	}
	protected get_dropDownButtonClass(): string {
		return ".financialChartIndicatorMenuDropDownButton";
	}
	protected get dropDownButtonClass(): string {
		return this.get_dropDownButtonClass();
	}
	protected get_dropDownMenuClass(): string {
		return ".financialChartIndicatorMenuDropDownMenu";
	}
	protected get dropDownMenuClass(): string {
		return this.get_dropDownMenuClass();
	}
	get indicatorTypes(): FinancialIndicatorTypeCollection {
		return this.indicatorMenuViewModel.indicatorTypes;
	}
	get overlayTypes(): FinancialOverlayTypeCollection {
		return this.indicatorMenuViewModel.overlayTypes;
	}
	get trendLineType(): TrendLineType {
		return this.indicatorMenuViewModel.trendLineType;
	}
	get volumeType(): FinancialChartVolumeType {
		return this.indicatorMenuViewModel.volumeType;
	}
	private get indicatorMenuViewModel(): FinancialChartIndicatorMenuViewModel {
		return <FinancialChartIndicatorMenuViewModel>this.viewModel;
	}
	protected get_staysOpenOnClick(): boolean {
		return true;
	}
}


