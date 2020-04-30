/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { FinancialChartViewModel } from "./FinancialChartViewModel";

/**
 * @hidden 
 */
export class FinancialChartContext extends Base {
	static $t: Type = markType(FinancialChartContext, 'FinancialChartContext');
	private _vm: FinancialChartViewModel = null;
	get vm(): FinancialChartViewModel {
		return this._vm;
	}
	set vm(value: FinancialChartViewModel) {
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
	private _toolbarContainer: any = null;
	get toolbarContainer(): any {
		return this._toolbarContainer;
	}
	set toolbarContainer(value: any) {
		this._toolbarContainer = value;
	}
	private _legendContainer: any = null;
	get legendContainer(): any {
		return this._legendContainer;
	}
	set legendContainer(value: any) {
		this._legendContainer = value;
	}
	private _indicatorsContainer: any = null;
	get indicatorsContainer(): any {
		return this._indicatorsContainer;
	}
	set indicatorsContainer(value: any) {
		this._indicatorsContainer = value;
	}
	private _volumeContainer: any = null;
	get volumeContainer(): any {
		return this._volumeContainer;
	}
	set volumeContainer(value: any) {
		this._volumeContainer = value;
	}
	private _zoomContainer: any = null;
	get zoomContainer(): any {
		return this._zoomContainer;
	}
	set zoomContainer(value: any) {
		this._zoomContainer = value;
	}
}


