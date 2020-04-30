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
export class FormatSummaryTextEventArgs extends Base {
	static $t: Type = markType(FormatSummaryTextEventArgs, 'FormatSummaryTextEventArgs');
	private _propertyPath: string = null;
	get propertyPath(): string {
		return this._propertyPath;
	}
	set propertyPath(value: string) {
		this._propertyPath = value;
	}
	private _displayName: string = null;
	get displayName(): string {
		return this._displayName;
	}
	set displayName(value: string) {
		this._displayName = value;
	}
	private _summaryResult: any = null;
	get summaryResult(): any {
		return this._summaryResult;
	}
	set summaryResult(value: any) {
		this._summaryResult = value;
	}
	private _formattedResult: string = null;
	get formattedResult(): string {
		return this._formattedResult;
	}
	set formattedResult(value: string) {
		this._formattedResult = value;
	}
	private _formattedText: string = null;
	get formattedText(): string {
		return this._formattedText;
	}
	set formattedText(value: string) {
		this._formattedText = value;
	}
}


