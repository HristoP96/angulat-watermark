/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategoryXAxisDescription } from "./CategoryXAxisDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class OrdinalTimeXAxisDescription extends CategoryXAxisDescription {
	static $t: Type = markType(OrdinalTimeXAxisDescription, 'OrdinalTimeXAxisDescription', (<any>CategoryXAxisDescription).$type);
	protected get_type(): string {
		return "OrdinalTimeXAxis";
	}
	constructor() {
		super();
	}
	private _dateTimeMemberPath: string = null;
	get dateTimeMemberPath(): string {
		return this._dateTimeMemberPath;
	}
	set dateTimeMemberPath(value: string) {
		this._dateTimeMemberPath = value;
		this.markDirty("DateTimeMemberPath");
	}
	private _minimumValue: Date = new Date();
	get minimumValue(): Date {
		return this._minimumValue;
	}
	set minimumValue(value: Date) {
		this._minimumValue = value;
		this.markDirty("MinimumValue");
	}
	private _maximumValue: Date = new Date();
	get maximumValue(): Date {
		return this._maximumValue;
	}
	set maximumValue(value: Date) {
		this._maximumValue = value;
		this.markDirty("MaximumValue");
	}
}


