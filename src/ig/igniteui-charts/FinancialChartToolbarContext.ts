/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { FinancialChartToolbarViewModel } from "./FinancialChartToolbarViewModel";

/**
 * @hidden 
 */
export class FinancialChartToolbarContext extends Base {
	static $t: Type = markType(FinancialChartToolbarContext, 'FinancialChartToolbarContext');
	private _vm: FinancialChartToolbarViewModel = null;
	get vm(): FinancialChartToolbarViewModel {
		return this._vm;
	}
	set vm(value: FinancialChartToolbarViewModel) {
		this._vm = value;
	}
	private _template: any = null;
	get template(): any {
		return this._template;
	}
	set template(value: any) {
		this._template = value;
	}
	private _container: any = null;
	get container(): any {
		return this._container;
	}
	set container(value: any) {
		this._container = value;
	}
}


