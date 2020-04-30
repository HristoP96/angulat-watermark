/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellModelExport } from "./CellModelExport";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class DateTimeCellModelExport extends CellModelExport {
	static $t: Type = markType(DateTimeCellModelExport, 'DateTimeCellModelExport', (<any>CellModelExport).$type);
	private _dateTimeValue: Date = new Date();
	get dateTimeValue(): Date {
		return this._dateTimeValue;
	}
	set dateTimeValue(value: Date) {
		this._dateTimeValue = value;
	}
	private _dateTimeFormat: number = 0;
	get dateTimeFormat(): number {
		return this._dateTimeFormat;
	}
	set dateTimeFormat(value: number) {
		this._dateTimeFormat = value;
	}
	protected get_type(): string {
		return "DateTimeCell";
	}
	private _isOffsetValue: boolean = false;
	get isOffsetValue(): boolean {
		return this._isOffsetValue;
	}
	set isOffsetValue(value: boolean) {
		this._isOffsetValue = value;
	}
	protected serializeOverride(sb: StringBuilder): void {
		super.serializeOverride(sb);
		sb.append5("dateTimeFormat : " + this.dateTimeFormat + ", ");
	}
}


