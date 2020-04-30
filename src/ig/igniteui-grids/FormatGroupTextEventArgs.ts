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
export class FormatGroupTextEventArgs extends Base {
	static $t: Type = markType(FormatGroupTextEventArgs, 'FormatGroupTextEventArgs');
	private _groupName: string = null;
	get groupName(): string {
		return this._groupName;
	}
	set groupName(value: string) {
		this._groupName = value;
	}
	private _groupValue: any = null;
	get groupValue(): any {
		return this._groupValue;
	}
	set groupValue(value: any) {
		this._groupValue = value;
	}
	private _formattedValue: string = null;
	get formattedValue(): string {
		return this._formattedValue;
	}
	set formattedValue(value: string) {
		this._formattedValue = value;
	}
	private _formattedText: string = null;
	get formattedText(): string {
		return this._formattedText;
	}
	set formattedText(value: string) {
		this._formattedText = value;
	}
}


