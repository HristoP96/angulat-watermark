//
// System.Xml.XmlConvert
//
// Authors:
//      Dwivedi, Ajay kumar (Adwiv@Yahoo.com)
//	Gonzalo Paniagua Javier (gonzalo@ximian.com)
//      Alan Tam Siu Lung (Tam@SiuLung.com)
//	Atsushi Enomoto (ginga@kit.hi-ho.ne.jp)
//
// (C) 2002 Ximian, Inc (http://www.ximian.com)
//

//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
import { Base, FormatException, Type, markType } from "./type";
import { CultureInfo } from "./culture";
import { XmlChar } from "./XmlChar";
import { StringBuilder } from "./StringBuilder";
import { XmlException } from "./XmlException";
import { StringWriter } from "./StringWriter";
import { TextWriter } from "./TextWriter";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { NumberStyles, parseInt32_2, parseUInt8_2, parseNumber, parseNumber1, parseInt16_2, parseInt64_2, parseInt8_2, numberToString, intToString, numberToString2, parseInt32_1, parseUInt16_2, parseUInt32_2, parseUInt64_2 } from "./numberExtended";
import { intDivide, isNegativeInfinity, isPositiveInfinity, isNaN_ } from "./number";
import { stringReplace, stringEmpty, stringToCharArray } from "./string";
import { trim, stringCompareOrdinal } from "./stringExtended";
import { ConvertUtil } from "./convertUtil";
import { timeSpanTicks, timeSpanNegate, timeSpanDays, timeSpanHours, timeSpanMinutes, timeSpanSeconds, timeSpanMilliseconds, timeSpanInit3, timeSpanFromTicks } from "./timespan";
import { dateToStringFormat } from "./dateExtended";

/**
 * @hidden 
 */
export class XmlConvert extends Base {
	static $t: Type = markType(XmlConvert, 'XmlConvert');
	private static readonly encodedColon: string = "_x003A_";
	private static readonly floatStyle: NumberStyles = NumberStyles.AllowCurrencySymbol | NumberStyles.AllowExponent | NumberStyles.AllowDecimalPoint | NumberStyles.AllowLeadingSign | NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite;
	private static readonly integerStyle: NumberStyles = NumberStyles.Integer | NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite;
	private static readonly datetimeFormats: string[] = [ "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mm:ss.fzzz", "yyyy-MM-ddTHH:mm:ss.ffzzz", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:ss.ffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffzzz", "yyyy-MM-ddTHH:mm:ss.ffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ss.fZ", "yyyy-MM-ddTHH:mm:ss.ffZ", "yyyy-MM-ddTHH:mm:ss.fffZ", "yyyy-MM-ddTHH:mm:ss.ffffZ", "yyyy-MM-ddTHH:mm:ss.fffffZ", "yyyy-MM-ddTHH:mm:ss.ffffffZ", "yyyy-MM-ddTHH:mm:ss.fffffffZ", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm:ss.f", "yyyy-MM-ddTHH:mm:ss.ff", "yyyy-MM-ddTHH:mm:ss.fff", "yyyy-MM-ddTHH:mm:ss.ffff", "yyyy-MM-ddTHH:mm:ss.fffff", "yyyy-MM-ddTHH:mm:ss.ffffff", "yyyy-MM-ddTHH:mm:ss.fffffff", "HH:mm:ss", "HH:mm:ss.f", "HH:mm:ss.ff", "HH:mm:ss.fff", "HH:mm:ss.ffff", "HH:mm:ss.fffff", "HH:mm:ss.ffffff", "HH:mm:ss.fffffff", "HH:mm:sszzz", "HH:mm:ss.fzzz", "HH:mm:ss.ffzzz", "HH:mm:ss.fffzzz", "HH:mm:ss.ffffzzz", "HH:mm:ss.fffffzzz", "HH:mm:ss.ffffffzzz", "HH:mm:ss.fffffffzzz", "HH:mm:ssZ", "HH:mm:ss.fZ", "HH:mm:ss.ffZ", "HH:mm:ss.fffZ", "HH:mm:ss.ffffZ", "HH:mm:ss.fffffZ", "HH:mm:ss.ffffffZ", "HH:mm:ss.fffffffZ", "yyyy-MM-dd", "yyyy-MM-ddzzz", "yyyy-MM-ddZ", "yyyy-MM", "yyyy-MMzzz", "yyyy-MMZ", "yyyy", "yyyyzzz", "yyyyZ", "--MM-dd", "--MM-ddzzz", "--MM-ddZ", "---dd", "---ddzzz", "---ddZ" ];
	constructor() {
		super();
	}
	private static tryDecoding(s: string): string {
		if (s == null || s.length < 6) {
			return s;
		}
		let c: string = '\uffff';
		try {
			c = <string>String.fromCharCode(parseInt32_2(s.substr(1, 4), NumberStyles.HexNumber, CultureInfo.invariantCulture));
		}
		catch (e) {
			return s.charAt(0) + XmlConvert.decodeName(s.substr(1));
		}
		if (s.length == 6) {
			return c.toString();
		}
		return c + XmlConvert.decodeName(s.substr(6));
	}
	static decodeName(name: string): string {
		if (name == null || name.length == 0) {
			return name;
		}
		let pos: number = name.indexOf('_');
		if (pos == -1 || pos + 6 >= name.length) {
			return name;
		}
		if ((name.charAt(pos + 1) != 'X' && name.charAt(pos + 1) != 'x') || name.charAt(pos + 6) != '_') {
			return name.charAt(0) + XmlConvert.decodeName(name.substr(1));
		}
		return name.substr(0, pos) + XmlConvert.tryDecoding(name.substr(pos + 1));
	}
	static encodeLocalName(name: string): string {
		if (name == null) {
			return name;
		}
		let encoded: string = XmlConvert.encodeName(name);
		let pos: number = encoded.indexOf(':');
		if (pos == -1) {
			return encoded;
		}
		return stringReplace(encoded, ":", XmlConvert.encodedColon);
	}
	static isInvalid(c: string, firstOnlyLetter: boolean): boolean {
		if (c == ':') {
			return false;
		}
		if (firstOnlyLetter) {
			return !XmlChar.isFirstNameChar(c.charCodeAt(0));
		} else {
			return !XmlChar.isNameChar(c.charCodeAt(0));
		}
	}
	private static encodeName1(name: string, nmtoken: boolean): string {
		if (name == null || name.length == 0) {
			return name;
		}
		let sb: StringBuilder = new StringBuilder(0);
		let length: number = name.length;
		for (let i: number = 0; i < length; i++) {
			let c: string = name.charAt(i);
			if (XmlConvert.isInvalid(c, i == 0 && !nmtoken)) {
				sb.appendFormat2("_x{0:X4}_", <number>c.charCodeAt(0));
			} else if (c == '_' && i + 6 < length && name.charAt(i + 1) == 'x' && name.charAt(i + 6) == '_') {
				sb.append5("_x005F_");
			} else {
				sb.append1(c);
			}
		}
		return sb.toString();
	}
	static encodeName(name: string): string {
		return XmlConvert.encodeName1(name, false);
	}
	static encodeNmToken(name: string): string {
		if (name == stringEmpty()) {
			throw new XmlException(3, "Invalid NmToken: ''");
		}
		return XmlConvert.encodeName1(name, true);
	}
	static toBoolean(s: string): boolean {
		s = trim(s, ...XmlChar.whitespaceChars);
		switch (s) {
			case "1": return true;
			case "true": return true;
			case "0": return false;
			case "false": return false;
			default: throw new FormatException(1, s + " is not a valid boolean value");
		}

	}
	static toBinHexString(buffer: number[]): string {
		let w: StringWriter = new StringWriter(0);
		XmlConvert.writeBinHex(buffer, 0, buffer.length, w);
		return w.toString();
	}
	static writeBinHex(buffer: number[], index: number, count: number, w: TextWriter): void {
		if (buffer == null) {
			throw new ArgumentNullException(0, "buffer");
		}
		if (index < 0) {
			throw new ArgumentOutOfRangeException(3, "index", index, "index must be non negative integer.");
		}
		if (count < 0) {
			throw new ArgumentOutOfRangeException(3, "count", count, "count must be non negative integer.");
		}
		if (buffer.length < index + count) {
			throw new ArgumentOutOfRangeException(1, "index and count must be smaller than the length of the buffer.");
		}
		let end: number = index + count;
		for (let i: number = index; i < end; i++) {
			let val: number = buffer[i];
			let high: number = val >> 4;
			let low: number = val & 15;
			if (high > 9) {
				w.write3(<string>String.fromCharCode((high + 55)));
			} else {
				w.write3(<string>String.fromCharCode((high + 48)));
			}
			if (low > 9) {
				w.write3(<string>String.fromCharCode((low + 55)));
			} else {
				w.write3(<string>String.fromCharCode((low + 48)));
			}
		}
	}
	static toByte(s: string): number {
		return parseUInt8_2(s, NumberStyles.Integer, CultureInfo.invariantCulture);
	}
	static toChar(s: string): string {
		return ConvertUtil.toChar(s);
	}
	static toDecimal(s: string): number {
		return parseNumber(s, CultureInfo.invariantCulture);
	}
	static toDouble(s: string): number {
		if (s == null) {
			throw new ArgumentNullException(1);
		}
		let f: number = XmlConvert.tryParseStringFloatConstants(s);
		if (f != 0) {
			return f;
		}
		return parseNumber1(s, XmlConvert.floatStyle, CultureInfo.invariantCulture);
	}
	private static tryParseStringFloatConstants(s: string): number {
		let sidx: number = 0;
		while (sidx < s.length && /\s/i.test(s.charAt(sidx))) {
			sidx++;
		}
		if (sidx == s.length) {
			throw new FormatException(0);
		}
		let sEndPos: number = s.length - 1;
		while (/\s/i.test(s.charAt(sEndPos))) {
			sEndPos--;
		}
		if (XmlConvert.tryParseStringConstant("NaN", s, sidx, sEndPos)) {
			return NaN;
		}
		if (XmlConvert.tryParseStringConstant("INF", s, sidx, sEndPos)) {
			return Number.POSITIVE_INFINITY;
		}
		if (XmlConvert.tryParseStringConstant("-INF", s, sidx, sEndPos)) {
			return Number.NEGATIVE_INFINITY;
		}
		if (XmlConvert.tryParseStringConstant("Infinity", s, sidx, sEndPos)) {
			return Number.POSITIVE_INFINITY;
		}
		if (XmlConvert.tryParseStringConstant("-Infinity", s, sidx, sEndPos)) {
			return Number.NEGATIVE_INFINITY;
		}
		return 0;
	}
	private static tryParseStringConstant(format: string, s: string, start: number, end: number): boolean {
		return end - start + 1 == format.length && stringCompareOrdinal(format, 0, s, start, format.length) == 0;
	}
	static toInt16(s: string): number {
		return parseInt16_2(s, XmlConvert.integerStyle, CultureInfo.invariantCulture);
	}
	static toInt32(s: string): number {
		return parseInt32_2(s, XmlConvert.integerStyle, CultureInfo.invariantCulture);
	}
	static toInt64(s: string): number {
		return parseInt64_2(s, XmlConvert.integerStyle, CultureInfo.invariantCulture);
	}
	static toSByte(s: string): number {
		return parseInt8_2(s, XmlConvert.integerStyle, CultureInfo.invariantCulture);
	}
	static toSingle(s: string): number {
		if (s == null) {
			throw new ArgumentNullException(1);
		}
		let f: number = XmlConvert.tryParseStringFloatConstants(s);
		if (f != 0) {
			return f;
		}
		return parseNumber1(s, XmlConvert.floatStyle, CultureInfo.invariantCulture);
	}
	static toString9(value: number): string {
		return value.toString();
	}
	static toString8(value: number): string {
		return value.toString();
	}
	static toString2(value: number): string {
		return value.toString();
	}
	static toString10(value: number): string {
		return value.toString();
	}
	static toString3(value: string): string {
		return ConvertUtil.toString1(value, CultureInfo.invariantCulture);
	}
	static toString1(value: boolean): string {
		if (value) {
			return "true";
		}
		return "false";
	}
	static toString11(value: number): string {
		return value.toString();
	}
	static toString6(value: number): string {
		return numberToString(value, CultureInfo.invariantCulture);
	}
	static toString16(value: number): string {
		return value.toString();
	}
	static toString13(value: number): string {
		if (value == (0)) {
			return "PT0S";
		}
		let builder: StringBuilder = new StringBuilder(0);
		if (timeSpanTicks(value) < 0) {
			if (value == (-9007199254740991)) {
				return "-P10675199DT2H48M5.4775808S";
			}
			builder.append1('-');
			value = timeSpanNegate(value);
		}
		builder.append1('P');
		if (timeSpanDays(value) > 0) {
			builder.append3(timeSpanDays(value)).append1('D');
		}
		let ticks: number = timeSpanTicks(value) % (10000);
		if (timeSpanDays(value) > 0 || timeSpanHours(value) > 0 || timeSpanMinutes(value) > 0 || timeSpanSeconds(value) > 0 || timeSpanMilliseconds(value) > 0 || ticks > 0) {
			builder.append1('T');
			if (timeSpanHours(value) > 0) {
				builder.append3(timeSpanHours(value)).append1('H');
			}
			if (timeSpanMinutes(value) > 0) {
				builder.append3(timeSpanMinutes(value)).append1('M');
			}
			if (timeSpanSeconds(value) > 0 || timeSpanMilliseconds(value) > 0 || ticks > 0) {
				builder.append3(timeSpanSeconds(value));
				let trimZero: boolean = true;
				if (ticks > 0) {
					builder.append1('.').appendFormat2("{0:0000000}", timeSpanTicks(value) % (10000000));
				} else if (timeSpanMilliseconds(value) > 0) {
					builder.append1('.').appendFormat2("{0:000}", timeSpanMilliseconds(value));
				} else {
					trimZero = false;
				}
				if (trimZero) {
					while (builder.item(builder.length - 1) == '0') {
						builder.remove(builder.length - 1, 1);
					}
				}
				builder.append1('S');
			}
		}
		return builder.toString();
	}
	static toString7(value: number): string {
		if (isNegativeInfinity(value)) {
			return "-INF";
		}
		if (isPositiveInfinity(value)) {
			return "INF";
		}
		if (isNaN_(value)) {
			return "NaN";
		}
		return value.toString();
	}
	static toString12(value: number): string {
		if (isNegativeInfinity(value)) {
			return "-INF";
		}
		if (isPositiveInfinity(value)) {
			return "INF";
		}
		if (isNaN_(value)) {
			return "NaN";
		}
		return value.toString();
	}
	static toString15(value: number): string {
		return value.toString();
	}
	static toString14(value: number): string {
		return value.toString();
	}
	static toString4(value: Date): string {
		return dateToStringFormat(value, "yyyy-MM-ddTHH:mm:ss.fffffffzzz", CultureInfo.invariantCulture);
	}
	static toString5(value: Date, format: string): string {
		return dateToStringFormat(value, format, CultureInfo.invariantCulture);
	}
	static toTimeSpan(s: string): number {
		s = trim(s, ...XmlChar.whitespaceChars);
		if (s.length == 0) {
			throw new FormatException(1, "Invalid format string for duration schema datatype.");
		}
		let start: number = 0;
		if (s.charAt(0) == '-') {
			start = 1;
		}
		let minusValue: boolean = (start == 1);
		if (s.charAt(start) != 'P') {
			throw new FormatException(1, "Invalid format string for duration schema datatype.");
		}
		start++;
		let parseStep: number = 0;
		let days: number = 0;
		let isTime: boolean = false;
		let hours: number = 0;
		let minutes: number = 0;
		let seconds: number = 0;
		let ticks: number = 0;
		let parsedDigits: number = 0;
		let error: boolean = false;
		let i: number = start;
		while (i < s.length) {
			if (s.charAt(i) == 'T') {
				isTime = true;
				parseStep = 4;
				i++;
				start = i;
				continue;
			}
			for (; i < s.length; i++) {
				if (s.charAt(i).charCodeAt(0) < '0'.charCodeAt(0) || '9'.charCodeAt(0) < s.charAt(i).charCodeAt(0)) {
					break;
				}
			}
			if (parseStep == 7) {
				parsedDigits = i - start;
			}
			let value: number = parseInt32_1(s.substr(start, i - start), CultureInfo.invariantCulture);
			if (parseStep == 7) {
				for (; parsedDigits > 7; parsedDigits--) {
					value = intDivide(value, 10);
				}
				for (; parsedDigits < 7; parsedDigits++) {
					value *= 10;
				}
			}
			switch (s.charAt(i)) {
				case 'Y':
				days += value * 365;
				if (parseStep > 0) {
					error = true;
				} else {
					parseStep = 1;
				}
				break;

				case 'M':
				if (parseStep < 2) {
					days += 365 * (intDivide(value, 12)) + 30 * (value % 12);
					parseStep = 2;
				} else if (isTime && parseStep < 6) {
					minutes = value;
					parseStep = 6;
				} else {
					error = true;
				}
				break;

				case 'D':
				days += value;
				if (parseStep > 2) {
					error = true;
				} else {
					parseStep = 3;
				}
				break;

				case 'H':
				hours = value;
				if (!isTime || parseStep > 4) {
					error = true;
				} else {
					parseStep = 5;
				}
				break;

				case 'S':
				if (parseStep == 7) {
					ticks = value;
				} else {
					seconds = value;
				}
				if (!isTime || parseStep > 7) {
					error = true;
				} else {
					parseStep = 8;
				}
				break;

				case '.':
				if (parseStep > 7) {
					error = true;
				}
				seconds = value;
				parseStep = 7;
				break;

				default:
				error = true;
				break;

			}

			if (error) {
				break;
			}
			++i;
			start = i;
		}
		if (error) {
			throw new FormatException(1, "Invalid format string for duration schema datatype.");
		}
		let ts: number = timeSpanInit3(days, hours, minutes, seconds);
		if (minusValue) {
			return timeSpanFromTicks(-(timeSpanTicks(ts) + ticks));
		} else {
			return timeSpanFromTicks(timeSpanTicks(ts) + ticks);
		}
	}
	static toUInt16(s: string): number {
		return parseUInt16_2(s, NumberStyles.Integer, CultureInfo.invariantCulture);
	}
	static toUInt32(s: string): number {
		return parseUInt32_2(s, NumberStyles.Integer, CultureInfo.invariantCulture);
	}
	static toUInt64(s: string): number {
		return parseUInt64_2(s, NumberStyles.Integer, CultureInfo.invariantCulture);
	}
	static verifyName(name: string): string {
		if (name == null || name.length == 0) {
			throw new ArgumentNullException(0, "name");
		}
		if (!XmlChar.isName(name)) {
			throw new XmlException(3, "'" + name + "' is not a valid XML Name");
		}
		return name;
	}
	static verifyNCName(ncname: string): string {
		if (ncname == null || ncname.length == 0) {
			throw new ArgumentNullException(0, "ncname");
		}
		if (!XmlChar.isNCName(ncname)) {
			throw new XmlException(3, "'" + ncname + "' is not a valid XML NCName");
		}
		return ncname;
	}
	static verifyTOKEN(name: string): string {
		if (name == null) {
			throw new ArgumentNullException(0, "name");
		}
		if (name.length == 0) {
			return name;
		}
		if (XmlChar.isWhitespace(name.charAt(0).charCodeAt(0)) || XmlChar.isWhitespace(name.charAt(name.length - 1).charCodeAt(0))) {
			throw new XmlException(3, "Whitespace characters (#xA, #xD, #x9, #x20) are not allowed as leading or trailing whitespaces of xs:token.");
		}
		for (let i: number = 0; i < name.length; i++) {
			if (XmlChar.isWhitespace(name.charAt(i).charCodeAt(0)) && name.charAt(i) != ' ') {
				throw new XmlException(3, "Either #xA, #xD or #x9 are not allowed inside xs:token.");
			}
		}
		return name;
	}
	static verifyNMTOKEN(name: string): string {
		if (name == null) {
			throw new ArgumentNullException(0, "name");
		}
		if (!XmlChar.isNmToken(name)) {
			throw new XmlException(3, "'" + name + "' is not a valid XML NMTOKEN");
		}
		return name;
	}
	static fromBinHexString(s: string): number[] {
		let chars: string[] = stringToCharArray(s);
		let bytes: number[] = <number[]>new Array(intDivide(chars.length, 2) + chars.length % 2);
		XmlConvert.fromBinHexString1(chars, 0, chars.length, bytes);
		return bytes;
	}
	static fromBinHexString1(chars: string[], offset: number, charLength: number, buffer: number[]): number {
		let bufIndex: number = offset;
		for (let i: number = 0; i < charLength - 1; i += 2) {
			buffer[bufIndex] = (chars[i].charCodeAt(0) > '9'.charCodeAt(0) ? <number>(chars[i].charCodeAt(0) - 'A'.charCodeAt(0) + 10) : <number>(chars[i].charCodeAt(0) - '0'.charCodeAt(0)));
			buffer[bufIndex] <<= 4;
			buffer[bufIndex] += chars[i + 1].charCodeAt(0) > '9'.charCodeAt(0) ? <number>(chars[i + 1].charCodeAt(0) - 'A'.charCodeAt(0) + 10) : <number>(chars[i + 1].charCodeAt(0) - '0'.charCodeAt(0));
			bufIndex++;
		}
		if (charLength % 2 != 0) {
			buffer[bufIndex++] = <number>((chars[charLength - 1].charCodeAt(0) > '9'.charCodeAt(0) ? <number>(chars[charLength - 1].charCodeAt(0) - 'A'.charCodeAt(0) + 10) : <number>(chars[charLength - 1].charCodeAt(0) - '0'.charCodeAt(0))) << 4);
		}
		return bufIndex - offset;
	}
}


