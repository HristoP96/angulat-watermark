/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class AsyncVirtualDataTask extends Base {
	static $t: Type = markType(AsyncVirtualDataTask, 'AsyncVirtualDataTask');
	private _hasErrors: boolean = false;
	get hasErrors(): boolean {
		return this._hasErrors;
	}
	set hasErrors(value: boolean) {
		this._hasErrors = value;
	}
	private _isRunning: boolean = false;
	get isRunning(): boolean {
		return this._isRunning;
	}
	set isRunning(value: boolean) {
		this._isRunning = value;
	}
	private _isCancelled: boolean = false;
	get isCancelled(): boolean {
		return this._isCancelled;
	}
	set isCancelled(value: boolean) {
		this._isCancelled = value;
	}
	private _isCompleted: boolean = false;
	get isCompleted(): boolean {
		return this._isCompleted;
	}
	set isCompleted(value: boolean) {
		this._isCompleted = value;
	}
	private _result: any = null;
	get result(): any {
		return this._result;
	}
	set result(value: any) {
		this._result = value;
	}
	private _run: () => void = null;
	get run(): () => void {
		return this._run;
	}
	set run(value: () => void) {
		this._run = value;
	}
}


