/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, Point, Point_$type, getBoxIfEnum, Number_$type, String_$type, markType, getInstanceType } from "igniteui-core/type";
import { QUnitHelper } from "./QUnitHelper";
import { stringToString$1, stringEmpty, StringComparison } from "igniteui-core/string";
import { stringFormat1, stringFormat, stringCompare1 } from "igniteui-core/stringExtended";

/**
 * @hidden 
 */
export class Assert extends Base {
	static $t: Type = markType(Assert, 'Assert');
	private static getMessage(message: string, ...parameters: any[]): string {
		if (parameters == null || parameters.length == 0) {
			return message;
		}
		if (parameters.length == 1 && parameters[0] == null) {
			return message;
		}
		return stringFormat1(message, ...parameters);
	}
	static areEqual3(expected: any, actual: any): void {
		Assert.areEqual4(expected, actual, stringEmpty(), null);
	}
	static areEqual4(expected: any, actual: any, message: string, ...parameters: any[]): void {
		Assert.areEqual$1<any>((<any>Base).$type, expected, actual, message, ...parameters);
	}
	static areEqual$1<T>($t: Type, expected: T, actual: T, message: string, ...parameters: any[]): void {
		let areEqual: boolean;
		if ($t == Point_$type) {
			areEqual = <boolean>((<any>expected).__x === (<any>actual).__x && (<any>expected).__y === (<any>actual).__y);
		} else {
			areEqual = Base.equalsStatic(getBoxIfEnum<T>($t, expected), getBoxIfEnum<T>($t, actual));
		}
		if (areEqual) {
			return;
		}
		Assert.okInternal(areEqual, stringFormat("Expected:<{0}>. Actual:<{1}>. {2}", Assert.getDisplayText$1<T>($t, expected), Assert.getDisplayText$1<T>($t, actual), Assert.getMessage(message, ...parameters)));
	}
	private static getDisplayText$1<T>($t: Type, value: T): string {
		if (getBoxIfEnum<T>($t, value) == null) {
			return "<null>";
		}
		return stringToString$1<T>($t, value);
	}
	static areEqual(expected: number, actual: number, delta: number): void {
		Assert.areEqual2(expected, actual, delta, stringEmpty(), null);
	}
	static areEqual1(expected: number, actual: number, delta: number, message: string): void {
		Assert.areEqual2(expected, actual, delta, message, null);
	}
	static areEqual2(expected: number, actual: number, delta: number, message: string, ...parameters: any[]): void {
		Assert.okInternal(Math.abs(<number>(expected - actual)) <= delta, stringFormat("Expected:<{0}>. Actual:<{1}>. {2}", Assert.getDisplayText$1<number>(Number_$type, expected), Assert.getDisplayText$1<number>(Number_$type, actual), Assert.getMessage(message, ...parameters)));
	}
	static areEqual5(expected: string, actual: string, ignoreCase: boolean, message: string, ...parameters: any[]): void {
		Assert.okInternal(stringCompare1(expected, actual, StringComparison.CurrentCultureIgnoreCase) == 0, stringFormat("Expected:<{0}>. Actual:<{1}>. {2}", Assert.getDisplayText$1<string>(String_$type, expected), Assert.getDisplayText$1<string>(String_$type, actual), Assert.getMessage(message, ...parameters)));
	}
	static areNotEqual2(expected: string, actual: string, ignoreCase: boolean, message: string, ...parameters: any[]): void {
		Assert.okInternal(stringCompare1(expected, actual, StringComparison.CurrentCultureIgnoreCase) != 0, stringFormat("Not Expected:<{0}>. Actual:<{1}>. {2}", Assert.getDisplayText$1<string>(String_$type, expected), Assert.getDisplayText$1<string>(String_$type, actual), Assert.getMessage(message, ...parameters)));
	}
	static areNotEqual(expected: any, actual: any): void {
		Assert.areNotEqual1(expected, actual, stringEmpty(), null);
	}
	static areNotEqual1(expected: any, actual: any, message: string, ...parameters: any[]): void {
		Assert.areNotEqual$1<any>((<any>Base).$type, expected, actual, message, ...parameters);
	}
	static areNotEqual$1<T>($t: Type, expected: T, actual: T, message: string, ...parameters: any[]): void {
		Assert.okInternal(!Base.equalsStatic(getBoxIfEnum<T>($t, expected), getBoxIfEnum<T>($t, actual)), Assert.getMessage(message, ...parameters));
	}
	static areNotSame(expected: any, actual: any): void {
		Assert.areNotSame2(expected, actual, stringEmpty(), null);
	}
	static areNotSame1(expected: any, actual: any, message: string): void {
		Assert.areNotSame2(expected, actual, message, null);
	}
	static areNotSame2(expected: any, actual: any, message: string, ...parameters: any[]): void {
		Assert.okInternal(!Base.referenceEquals(expected, actual), stringFormat1(message, ...parameters));
	}
	static areSame(expected: any, actual: any): void {
		Assert.areSame2(expected, actual, stringEmpty(), null);
	}
	static areSame1(expected: any, actual: any, message: string): void {
		Assert.areSame2(expected, actual, message, null);
	}
	static areSame2(expected: any, actual: any, message: string, ...parameters: any[]): void {
		Assert.okInternal(Base.referenceEquals(expected, actual), Assert.getMessage(message, ...parameters));
	}
	static fail(): void {
		Assert.fail2(stringEmpty(), null);
	}
	static fail1(message: string): void {
		Assert.okInternal(false, message);
	}
	static fail2(message: string, ...parameters: any[]): void {
		Assert.okInternal(false, Assert.getMessage(message, ...parameters));
	}
	static inconclusive(): void {
		Assert.inconclusive2(stringEmpty(), null);
	}
	static inconclusive1(message: string): void {
		Assert.inconclusive2(message, null);
	}
	static inconclusive2(message: string, ...parameters: any[]): void {
		Assert.fail2(message, ...parameters);
	}
	static isFalse(condition: boolean): void {
		Assert.isFalse2(condition, stringEmpty(), null);
	}
	static isFalse1(condition: boolean, message: string): void {
		Assert.isFalse2(condition, message, null);
	}
	static isFalse2(condition: boolean, message: string, ...parameters: any[]): void {
		Assert.okInternal(!condition, Assert.getMessage(message, ...parameters));
	}
	static isInstanceOfType(value: any, expectedType: Type): void {
		Assert.isInstanceOfType2(value, expectedType, stringEmpty(), null);
	}
	static isInstanceOfType1(value: any, expectedType: Type, message: string): void {
		Assert.isInstanceOfType2(value, expectedType, message, null);
	}
	static isInstanceOfType2(value: any, expectedType: Type, message: string, ...parameters: any[]): void {
		Assert.okInternal((value != null && getInstanceType(value) == expectedType) || (expectedType != null && expectedType.isInstanceOfType(value)), Assert.getMessage(message, ...parameters));
	}
	static isNotInstanceOfType(value: any, wrongType: Type): void {
		Assert.isNotInstanceOfType2(value, wrongType, stringEmpty(), null);
	}
	static isNotInstanceOfType1(value: any, wrongType: Type, message: string): void {
		Assert.isNotInstanceOfType2(value, wrongType, message, null);
	}
	static isNotInstanceOfType2(value: any, wrongType: Type, message: string, ...parameters: any[]): void {
		Assert.okInternal(wrongType != null && (value == null || (getInstanceType(value) != wrongType && !wrongType.isInstanceOfType(value))), Assert.getMessage(message, ...parameters));
	}
	static isNotNull(value: any): void {
		Assert.isNotNull2(value, stringEmpty(), null);
	}
	static isNotNull1(value: any, message: string): void {
		Assert.isNotNull2(value, message, null);
	}
	static isNotNull2(value: any, message: string, ...parameters: any[]): void {
		Assert.okInternal(Base.equalsStatic(value, null) == false, Assert.getMessage(message, ...parameters));
	}
	static isNull(value: any): void {
		Assert.isNull2(value, stringEmpty(), null);
	}
	static isNull1(value: any, message: string): void {
		Assert.isNull2(value, message, null);
	}
	static isNull2(value: any, message: string, ...parameters: any[]): void {
		Assert.okInternal(Base.equalsStatic(value, null), Assert.getMessage(message, ...parameters));
	}
	static isTrue(condition: boolean): void {
		Assert.isTrue2(condition, stringEmpty(), null);
	}
	static isTrue1(condition: boolean, message: string): void {
		Assert.isTrue2(condition, message, null);
	}
	static isTrue2(condition: boolean, message: string, ...parameters: any[]): void {
		Assert.okInternal(condition, Assert.getMessage(message, ...parameters));
	}
	private static okInternal(passed: boolean, message: string): void {
		QUnitHelper.ok(passed, message);
	}
}


