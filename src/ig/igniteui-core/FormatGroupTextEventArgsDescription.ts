/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class FormatGroupTextEventArgsDescription extends Description {
	static $t: Type = markType(FormatGroupTextEventArgsDescription, 'FormatGroupTextEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "FormatGroupTextEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _groupName: string = null;
	get groupName(): string {
		return this._groupName;
	}
	set groupName(value: string) {
		this._groupName = value;
		this.markDirty("GroupName");
	}
	private _groupValueRef: string = null;
	get groupValueRef(): string {
		return this._groupValueRef;
	}
	set groupValueRef(value: string) {
		this._groupValueRef = value;
		this.markDirty("GroupValueRef");
	}
	private _formattedValue: string = null;
	get formattedValue(): string {
		return this._formattedValue;
	}
	set formattedValue(value: string) {
		this._formattedValue = value;
		this.markDirty("FormattedValue");
	}
	private _formattedText: string = null;
	get formattedText(): string {
		return this._formattedText;
	}
	set formattedText(value: string) {
		this._formattedText = value;
		this.markDirty("FormattedText");
	}
}


