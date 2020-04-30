/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { AsyncDataSourcePageTaskHolder } from "./AsyncDataSourcePageTaskHolder";

/**
 * @hidden 
 */
export class AsyncDataSourcePageRequest extends Base {
	static $t: Type = markType(AsyncDataSourcePageRequest, 'AsyncDataSourcePageRequest');
	private _index: number = 0;
	private _retryDelay: number = 0;
	private _pageTask: AsyncDataSourcePageTaskHolder = null;
	private _isDone: boolean = false;
	constructor(index: number, retryDelay: number) {
		super();
		this._index = index;
		this._retryDelay = retryDelay;
	}
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	get retryDelay(): number {
		return this._retryDelay;
	}
	set retryDelay(value: number) {
		this._retryDelay = value;
	}
	get taskHolder(): AsyncDataSourcePageTaskHolder {
		return this._pageTask;
	}
	set taskHolder(value: AsyncDataSourcePageTaskHolder) {
		this._pageTask = value;
	}
	get isDone(): boolean {
		return this._isDone;
	}
	set isDone(value: boolean) {
		this._isDone = value;
	}
}


