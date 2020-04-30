/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, Boolean_$type, Date_$type, Type, markType } from "./type";
import { ODataLiteralEmitter, ODataLiteralEmitter_$type } from "./ODataLiteralEmitter";
import { StringBuilder } from "./StringBuilder";
import { timeSpanTotalMilliseconds, timeSpanNegate, timeSpanDays, timeSpanHours, timeSpanMinutes, timeSpanSeconds, timeSpanMilliseconds } from "./timespan";
import { dateToStringFormat } from "./dateExtended";

/**
 * @hidden 
 */
export class DefaultODataLiteralEmitter extends Base implements ODataLiteralEmitter {
	static $t: Type = markType(DefaultODataLiteralEmitter, 'DefaultODataLiteralEmitter', (<any>Base).$type, [ODataLiteralEmitter_$type]);
	emitLiteral(value: any, leaveUnquoted: boolean): string {
		if (value == null) {
			return "null";
		}
		if (typeCast<boolean>(Boolean_$type, value) !== null) {
			return <boolean>value ? "true" : "false";
		} else if (typeCast<Date>(Date_$type, value) !== null) {
			return this.emitDateTime(<Date>value);
		} else if (typeof value === 'string') {
			let ret = value.toString();
			if (!leaveUnquoted) {
				ret = "'" + ret + "'";
			}
			return ret;
		} else {
			return value.toString();
		}
	}
	private emitTimespan(value: number): string {
		let neg = false;
		if (timeSpanTotalMilliseconds(value) < 0) {
			neg = true;
			value = timeSpanNegate(value);
		}
		let sb: StringBuilder = new StringBuilder(0);
		sb.append5("duration'");
		if (neg) {
			sb.append5("-");
		}
		sb.append5("P");
		if (timeSpanDays(value) > 0) {
			sb.append5(timeSpanDays(value).toString());
			sb.append5("D");
		}
		sb.append5("T");
		if (timeSpanHours(value) > 0) {
			sb.append3(timeSpanHours(value));
			sb.append5("H");
		}
		if (timeSpanMinutes(value) > 0 || timeSpanHours(value) > 0) {
			sb.append3(timeSpanMinutes(value));
			sb.append5("M");
		}
		if (timeSpanSeconds(value) > 0 || timeSpanMilliseconds(value) > 0 || timeSpanHours(value) > 0 || timeSpanMinutes(value) > 0) {
			sb.append3(timeSpanSeconds(value));
			if (timeSpanMilliseconds(value) > 0) {
				sb.append5(".");
				sb.append5((<number>timeSpanMilliseconds(value) / 1000).toString());
			}
			sb.append5("S");
		}
		sb.append5("'");
		return sb.toString();
	}
	private emitDateTime(value: Date): string {
		let ret: string;
		if (value.getSeconds() == 0 && value.getMilliseconds() == 0) {
			ret = dateToStringFormat(value, "yyyy-MM-ddTHH:mm");
		} else if (value.getMilliseconds() == 0) {
			ret = dateToStringFormat(value, "yyyy-MM-ddTHH:mm:ss");
		} else {
			ret = dateToStringFormat(value, "yyyy-MM-ddTHH:mm:ss.fffffff");
		}
		return "datetime'" + ret + "'";
	}
}


