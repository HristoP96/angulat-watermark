/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, ICollection, ICollection_$type, IEnumerator, IEnumerator_$type, IEnumerable, IEnumerable_$type, IDisposable, IDisposable_$type, fromEn, Type, markType, getEnumeratorObject } from "igniteui-core/type";
import { Assert } from "./Assert";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { stringEmpty } from "igniteui-core/string";
import { stringFormat } from "igniteui-core/stringExtended";

/**
 * @hidden 
 */
export class CollectionAssert extends Base {
	static $t: Type = markType(CollectionAssert, 'CollectionAssert');
	static areEqual(expected: ICollection, actual: ICollection): void {
		CollectionAssert.areEqual2(expected, actual, stringEmpty(), null);
	}
	static areEqual1(expected: ICollection, actual: ICollection, message: string): void {
		CollectionAssert.areEqual2(expected, actual, stringEmpty(), null);
	}
	static areEqual2(expected: ICollection, actual: ICollection, message: string, ...parameters: any[]): void {
		Assert.isTrue2(CollectionAssert.areEqualHelper(expected, actual), message, ...parameters);
	}
	static areNotEqual(expected: ICollection, actual: ICollection): void {
		CollectionAssert.areNotEqual2(expected, actual, stringEmpty(), null);
	}
	static areNotEqual1(expected: ICollection, actual: ICollection, message: string): void {
		CollectionAssert.areNotEqual2(expected, actual, stringEmpty(), null);
	}
	static areNotEqual2(expected: ICollection, actual: ICollection, message: string, ...parameters: any[]): void {
		Assert.isFalse2(CollectionAssert.areEqualHelper(expected, actual), message, ...parameters);
	}
	private static areEqualHelper(expected: ICollection, actual: ICollection): boolean {
		if (expected == actual) {
			return true;
		}
		if (expected == null || actual == null) {
			return false;
		}
		if (expected.count != actual.count) {
			return false;
		}
		let e1 = getEnumeratorObject(expected);
		let e2 = getEnumeratorObject(actual);
		while (e1.moveNext() && e2.moveNext()) {
			if (!Base.equalsStatic(e1.currentObject, e2.currentObject)) {
				return false;
			}
		}
		return true;
	}
	static contains(collection: ICollection, element: any): void {
		CollectionAssert.contains2(collection, element, stringEmpty(), null);
	}
	static contains1(collection: ICollection, element: any, message: string): void {
		CollectionAssert.contains2(collection, element, message, null);
	}
	static contains2(collection: ICollection, element: any, message: string, ...parameters: any[]): void {
		if (!CollectionAssert.containsHelper(collection, element)) {
			Assert.fail2(stringFormat("Expected the collection to contain '{0}'. Actual contents: '{1}'", element, CollectionAssert.getCollectionContents(collection)) + message, ...parameters);
		}
	}
	static doesNotContain(collection: ICollection, element: any): void {
		CollectionAssert.doesNotContain2(collection, element, stringEmpty(), null);
	}
	static doesNotContain1(collection: ICollection, element: any, message: string): void {
		CollectionAssert.doesNotContain2(collection, element, message, null);
	}
	static doesNotContain2(collection: ICollection, element: any, message: string, ...parameters: any[]): void {
		if (CollectionAssert.containsHelper(collection, element)) {
			Assert.fail2(stringFormat("Expected the collection to not contain '{0}'. Actual contents: '{1}'", element, CollectionAssert.getCollectionContents(collection)) + message, ...parameters);
		}
	}
	private static getCollectionContents(collection: ICollection): string {
		let sb = new StringBuilder(0);
		let index: number = 0;
		for (let item of fromEn<any>(collection)) {
			if (index++ >= 1) {
				sb.append1(',');
			}
			sb.append4(item);
		}
		return sb.toString();
	}
	private static containsHelper(expected: ICollection, item: any): boolean {
		for (let x of fromEn<any>(expected)) {
			if (Base.equalsStatic(x, item)) {
				return true;
			}
		}
		return false;
	}
}


