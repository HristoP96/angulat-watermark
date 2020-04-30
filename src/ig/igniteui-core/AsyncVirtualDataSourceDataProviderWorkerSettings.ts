/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IDataSourcePage } from "./IDataSourcePage";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";

/**
 * @hidden 
 */
export class AsyncVirtualDataSourceDataProviderWorkerSettings extends Base {
	static $t: Type = markType(AsyncVirtualDataSourceDataProviderWorkerSettings, 'AsyncVirtualDataSourceDataProviderWorkerSettings');
	private _pageSizeRequested: number = 0;
	get pageSizeRequested(): number {
		return this._pageSizeRequested;
	}
	set pageSizeRequested(value: number) {
		this._pageSizeRequested = value;
	}
	private _timeoutMilliseconds: number = 0;
	get timeoutMilliseconds(): number {
		return this._timeoutMilliseconds;
	}
	set timeoutMilliseconds(value: number) {
		this._timeoutMilliseconds = value;
	}
	private _pageLoaded: (page: IDataSourcePage, currentFullCount: number, actualPageSize: number) => void = null;
	get pageLoaded(): (page: IDataSourcePage, currentFullCount: number, actualPageSize: number) => void {
		return this._pageLoaded;
	}
	set pageLoaded(value: (page: IDataSourcePage, currentFullCount: number, actualPageSize: number) => void) {
		this._pageLoaded = value;
	}
	private _executionContext: IDataSourceExecutionContext = null;
	get executionContext(): IDataSourceExecutionContext {
		return this._executionContext;
	}
	set executionContext(value: IDataSourceExecutionContext) {
		this._executionContext = value;
	}
}


