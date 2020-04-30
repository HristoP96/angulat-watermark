/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ColumnDescription } from "./ColumnDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DateTimeColumnDescription extends ColumnDescription {
	static $t: Type = markType(DateTimeColumnDescription, 'DateTimeColumnDescription', (<any>ColumnDescription).$type);
	protected get_type(): string {
		return "DateTimeColumn";
	}
	constructor() {
		super();
	}
	private _dateTimeFormat: string = null;
	get dateTimeFormat(): string {
		return this._dateTimeFormat;
	}
	set dateTimeFormat(value: string) {
		this._dateTimeFormat = value;
		this.markDirty("DateTimeFormat");
	}
	private _formatOverrideRef: string = null;
	get formatOverrideRef(): string {
		return this._formatOverrideRef;
	}
	set formatOverrideRef(value: string) {
		this._formatOverrideRef = value;
		this.markDirty("FormatOverrideRef");
	}
}


