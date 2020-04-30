/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellInfoDescription } from "./CellInfoDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DateTimeCellInfoDescription extends CellInfoDescription {
	static $t: Type = markType(DateTimeCellInfoDescription, 'DateTimeCellInfoDescription', (<any>CellInfoDescription).$type);
	protected get_type(): string {
		return "DateTimeCellInfo";
	}
	constructor() {
		super();
	}
	private _dateTimeValue: Date = new Date();
	get dateTimeValue(): Date {
		return this._dateTimeValue;
	}
	set dateTimeValue(value: Date) {
		this._dateTimeValue = value;
		this.markDirty("DateTimeValue");
	}
	private _formatOverrideRef: string = null;
	get formatOverrideRef(): string {
		return this._formatOverrideRef;
	}
	set formatOverrideRef(value: string) {
		this._formatOverrideRef = value;
		this.markDirty("FormatOverrideRef");
	}
	private _dateTimeFormat: string = null;
	get dateTimeFormat(): string {
		return this._dateTimeFormat;
	}
	set dateTimeFormat(value: string) {
		this._dateTimeFormat = value;
		this.markDirty("DateTimeFormat");
	}
	private _isOffsetValue: boolean = false;
	get isOffsetValue(): boolean {
		return this._isOffsetValue;
	}
	set isOffsetValue(value: boolean) {
		this._isOffsetValue = value;
		this.markDirty("IsOffsetValue");
	}
}


