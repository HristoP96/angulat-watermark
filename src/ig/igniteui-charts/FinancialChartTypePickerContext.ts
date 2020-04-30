/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class FinancialChartTypePickerContext extends Base {
	static $t: Type = markType(FinancialChartTypePickerContext, 'FinancialChartTypePickerContext');
	private _vm: any = null;
	get vm(): any {
		return this._vm;
	}
	set vm(value: any) {
		this._vm = value;
	}
	private _template: any = null;
	get template(): any {
		return this._template;
	}
	set template(value: any) {
		this._template = value;
	}
}


