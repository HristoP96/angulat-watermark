/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IDataSourceExecutionContext, IDataSourceExecutionContext_$type } from "./IDataSourceExecutionContext";

/**
 * @hidden 
 */
export class DataSourceExecutionContext extends Base implements IDataSourceExecutionContext {
	static $t: Type = markType(DataSourceExecutionContext, 'DataSourceExecutionContext', (<any>Base).$type, [IDataSourceExecutionContext_$type]);
	private _requestAnimationFrame: (arg1: () => void) => void = null;
	private get requestAnimationFrame(): (arg1: () => void) => void {
		return this._requestAnimationFrame;
	}
	private set requestAnimationFrame(value: (arg1: () => void) => void) {
		this._requestAnimationFrame = value;
	}
	constructor() {
		super();
		this.requestAnimationFrame = <(arg1: () => void) => void>((<any>window).requestAnimationFrame ||
            (<any>window).webkitRequestAnimationFrame ||
            (<any>window).mozRequestAnimationFrame ||
            (<any>window).oRequestAnimationFrame ||
            (<any>window).msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            });
	}
	enqueueAction(callback: () => void): void {
		window.setTimeout(() => callback(), 0);
	}
	execute(callback: () => void): void {
		window.setTimeout(() => callback(), 0);
	}
	executeDelayed(callback: () => void, delayMilliseconds: number): void {
		window.setTimeout(() => callback(), delayMilliseconds);
	}
}


