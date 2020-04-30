/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, ICollection$1, ICollection$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IComparable, IComparable_$type, NotSupportedException, fromEnum, toEnum, typeCast, typeCastObjTo$t, fromEn, Type, getBoxIfEnum, Number_$type, markType, getEnumerator } from "./type";
import { IOrderedEnumerable$1 } from "./IOrderedEnumerable$1";
import { SortedList$1 } from "./SortedList$1";
import { List$1 } from "./List$1";
import { ArgumentNullException } from "./ArgumentNullException";
import { Thread } from "./culture";
import { Dictionary$2 } from "./Dictionary$2";
import { NotImplementedException } from "./NotImplementedException";
import { stringToString$1, stringCompareTo } from "./string";
import { CompareUtil } from "./compareUtil";

/**
 * @hidden 
 */
export class Enumerable extends Base {
	static $t: Type = markType(Enumerable, 'Enumerable');
	private static *_where$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, predicate: (arg1: TSource) => boolean): IterableIterator<any> {
		for (let item of fromEnum<TSource>(source)) {
			if (predicate(item)) {
				yield item;
			}
		}
	}
	static where$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, predicate: (arg1: TSource) => boolean): IEnumerable$1<TSource> {
		return toEnum(() => Enumerable._where$1<TSource>($tSource, source, predicate));
	}
	private static *_where$11<TSource>($tSource: Type, source: IEnumerable$1<TSource>, predicate: (arg1: TSource, arg2: number) => boolean): IterableIterator<any> {
		let index: number = 0;
		for (let item of fromEnum<TSource>(source)) {
			if (predicate(item, index)) {
				yield item;
			}
			index++;
		}
	}
	static where$11<TSource>($tSource: Type, source: IEnumerable$1<TSource>, predicate: (arg1: TSource, arg2: number) => boolean): IEnumerable$1<TSource> {
		return toEnum(() => Enumerable._where$11<TSource>($tSource, source, predicate));
	}
	private static *_select$2<TSource, TResult>($tSource: Type, $tResult: Type, source: IEnumerable$1<TSource>, selector: (arg1: TSource) => TResult): IterableIterator<any> {
		for (let item of fromEnum<TSource>(source)) {
			yield selector(item);
		}
	}
	static select$2<TSource, TResult>($tSource: Type, $tResult: Type, source: IEnumerable$1<TSource>, selector: (arg1: TSource) => TResult): IEnumerable$1<TResult> {
		return toEnum(() => Enumerable._select$2<TSource, TResult>($tSource, $tResult, source, selector));
	}
	private static *_selectMany$2<TSource, TResult>($tSource: Type, $tResult: Type, source: IEnumerable$1<TSource>, selector: (arg1: TSource) => IEnumerable$1<TResult>): IterableIterator<any> {
		for (let item of fromEnum<TSource>(source)) {
			for (let item2 of fromEnum<TResult>(selector(item))) {
				yield item2;
			}
		}
	}
	static selectMany$2<TSource, TResult>($tSource: Type, $tResult: Type, source: IEnumerable$1<TSource>, selector: (arg1: TSource) => IEnumerable$1<TResult>): IEnumerable$1<TResult> {
		return toEnum(() => Enumerable._selectMany$2<TSource, TResult>($tSource, $tResult, source, selector));
	}
	private static *_ofType$1<TResult>($tResult: Type, source: IEnumerable): IterableIterator<any> {
		for (let item of fromEn<any>(source)) {
			if (typeCast<TResult>($tResult, item) !== null) {
				yield typeCastObjTo$t<TResult>($tResult, item);
			}
		}
	}
	static ofType$1<TResult>($tResult: Type, source: IEnumerable): IEnumerable$1<TResult> {
		return toEnum(() => Enumerable._ofType$1<TResult>($tResult, source));
	}
	static last$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): TSource {
		let ilist = typeCast<IList$1<TSource>>(IList$1_$type.specialize($tSource), source);
		if (ilist != null) {
			return ilist.item(ilist.count - 1);
		}
		let current: TSource = Type.getDefaultValue<TSource>($tSource);
		for (let item of fromEnum<TSource>(source)) {
			current = item;
		}
		return current;
	}
	static first$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): TSource {
		for (let item of fromEnum<TSource>(source)) {
			return item;
		}
		return Type.getDefaultValue<TSource>($tSource);
	}
	static first$11<TSource>($tSource: Type, source: IEnumerable$1<TSource>, predicate: (arg1: TSource) => boolean): TSource {
		for (let item of fromEnum<TSource>(source)) {
			if (predicate(item)) {
				return item;
			}
		}
		return Type.getDefaultValue<TSource>($tSource);
	}
	static firstOrDefault$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): TSource {
		for (let item of fromEnum<TSource>(source)) {
			return item;
		}
		return Type.getDefaultValue<TSource>($tSource);
	}
	static orderBy$2<TSource, TKey>($tSource: Type, $tKey: Type, source: IEnumerable$1<TSource>, keySelector: (arg1: TSource) => TKey): IOrderedEnumerable$1<TSource> {
		let buffer: SortedList$1<TSource> = new SortedList$1<TSource>($tSource, source);
		buffer.sort2((o1: TSource, o2: TSource) => {
			let t1: TSource = <TSource>o1;
			let t2: TSource = <TSource>o2;
			let k1: TKey = keySelector(t1);
			let k2: TKey = keySelector(t2);
			if (typeCast<IComparable>(IComparable_$type, k1) !== null) {
				return CompareUtil.compareToObject((typeCast<IComparable>(IComparable_$type, k1)), getBoxIfEnum<TKey>($tKey, k2));
			} else {
				return <number>stringCompareTo(stringToString$1<TKey>($tKey, k1), stringToString$1<TKey>($tKey, k2));
			}
		});
		return buffer;
	}
	static orderByDescending$2<TSource, TKey>($tSource: Type, $tKey: Type, source: IEnumerable$1<TSource>, keySelector: (arg1: TSource) => TKey): IOrderedEnumerable$1<TSource> {
		let buffer: SortedList$1<TSource> = new SortedList$1<TSource>($tSource, source);
		buffer.sort2((o2: TSource, o1: TSource) => {
			let t1: TSource = <TSource>o1;
			let t2: TSource = <TSource>o2;
			let k1: TKey = keySelector(t1);
			let k2: TKey = keySelector(t2);
			if (typeCast<IComparable>(IComparable_$type, k1) !== null) {
				return CompareUtil.compareToObject((typeCast<IComparable>(IComparable_$type, k1)), getBoxIfEnum<TKey>($tKey, k2));
			} else {
				return <number>stringCompareTo(stringToString$1<TKey>($tKey, k1), stringToString$1<TKey>($tKey, k2));
			}
		});
		return buffer;
	}
	static toList$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): List$1<TSource> {
		let list: List$1<TSource> = new List$1<TSource>($tSource, 1, source);
		return list;
	}
	private static *_range(startValue: number, count: number): IterableIterator<any> {
		for (let i: number = startValue; i < count; i++) {
			yield i;
		}
	}
	static range(startValue: number, count: number): IEnumerable$1<number> {
		return toEnum(() => Enumerable._range(startValue, count));
	}
	private static *_concat$1<TSource>($tSource: Type, source1: IEnumerable$1<TSource>, source2: IEnumerable$1<TSource>): IterableIterator<any> {
		for (let item of fromEnum<TSource>(source1)) {
			yield item;
		}
		for (let item1 of fromEnum<TSource>(source2)) {
			yield item1;
		}
	}
	static concat$1<TSource>($tSource: Type, source1: IEnumerable$1<TSource>, source2: IEnumerable$1<TSource>): IEnumerable$1<TSource> {
		return toEnum(() => Enumerable._concat$1<TSource>($tSource, source1, source2));
	}
	static max(source: IEnumerable$1<number>): number {
		let first: boolean = true;
		let max: number = 0;
		for (let item of fromEnum<number>(source)) {
			if (first) {
				first = false;
				max = item;
			} else {
				max = Math.max(max, item);
			}
		}
		return max;
	}
	static max$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, selector: (arg1: TSource) => number): number {
		return Enumerable.max(Enumerable.select$2<TSource, number>($tSource, Number_$type, source, selector));
	}
	static min(source: IEnumerable$1<number>): number {
		let first: boolean = true;
		let min: number = 0;
		for (let item of fromEnum<number>(source)) {
			if (first) {
				first = false;
				min = item;
			} else {
				min = Math.min(min, item);
			}
		}
		return min;
	}
	static min$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, selector: (arg1: TSource) => number): number {
		return Enumerable.max(Enumerable.select$2<TSource, number>($tSource, Number_$type, source, selector));
	}
	static count$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): number {
		let count: number = 0;
		for (let item of fromEnum<TSource>(source)) {
			count++;
		}
		return count;
	}
	private static *_reverse$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): IterableIterator<any> {
		let list: List$1<TSource> = new List$1<TSource>($tSource, 1, source);
		for (let i: number = list.count - 1; i >= 0; i--) {
			yield list._inner[i];
		}
	}
	static reverse$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): IEnumerable$1<TSource> {
		return toEnum(() => Enumerable._reverse$1<TSource>($tSource, source));
	}
	static cast$1<TResult>($tResult: Type, source: IEnumerable): IEnumerable$1<TResult> {
		if (source == null) {
			throw new ArgumentNullException(0, "source");
		}
		let enumerable: IEnumerable$1<TResult> = typeCast<IEnumerable$1<TResult>>(IEnumerable$1_$type.specialize($tResult), source);
		if (enumerable != null) {
			return enumerable;
		}
		let list: List$1<TResult> = new List$1<TResult>($tResult, 0);
		for (let item of fromEn<any>(source)) {
			if (typeCast<TResult>($tResult, item) !== null) {
				list.add(typeCastObjTo$t<TResult>($tResult, item));
			} else {
				list.add(Type.getDefaultValue<TResult>($tResult));
			}
		}
		return list;
	}
	private static *_take$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, toTake: number): IterableIterator<any> {
		for (let item of fromEnum<TSource>(source)) {
			if (toTake > 0) {
				toTake--;
				yield item;
			} else {
				return undefined;
			}
		}
	}
	static take$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, toTake: number): IEnumerable$1<TSource> {
		return toEnum(() => Enumerable._take$1<TSource>($tSource, source, toTake));
	}
	private static *_skip$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, toSkip: number): IterableIterator<any> {
		for (let item of fromEnum<TSource>(source)) {
			if (toSkip <= 0) {
				yield item;
			} else {
				toSkip--;
			}
		}
	}
	static skip$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, toSkip: number): IEnumerable$1<TSource> {
		return toEnum(() => Enumerable._skip$1<TSource>($tSource, source, toSkip));
	}
	static any$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): boolean {
		for (let item of fromEnum<TSource>(source)) {
			return true;
		}
		return false;
	}
	static contains$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, value_: TSource): boolean {
		for (let item_ of fromEnum<TSource>(source)) {
			if (item_ === value_)
                {
                    return true;
                };
		}
		return false;
	}
	static union$1<TSource>($tSource: Type, first: IEnumerable$1<TSource>, second: IEnumerable$1<TSource>): IEnumerable$1<TSource> {
		return null;
	}
	static toArray$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): TSource[] {
		let arr = typeCast<List$1<TSource>>((<any>List$1).$type.specialize($tSource), source);
		if (arr != null) {
			return arr.toArray();
		}
		arr = new List$1<TSource>($tSource, 1, source);
		return <TSource[]>arr.asArray();
	}
	static elementAt$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, index: number): TSource {
		let iList = typeCast<IList$1<TSource>>(IList$1_$type.specialize($tSource), source);
		if (iList != null) {
			return iList.item(index);
		}
		return Enumerable.first$1<TSource>($tSource, Enumerable.skip$1<TSource>($tSource, source, index));
	}
	static sum(source: IEnumerable$1<number>): number {
		let sum: number = 0;
		for (let item of fromEnum<number>(source)) {
			sum += item;
		}
		return sum;
	}
	static sum$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, selector: (arg1: TSource) => number): number {
		return Enumerable.sum(Enumerable.select$2<TSource, number>($tSource, Number_$type, source, selector));
	}
	static sequenceEqual$1<TSource>($tSource: Type, first: IEnumerable$1<TSource>, second: IEnumerable$1<TSource>): boolean {
		if (first == null) {
			throw new ArgumentNullException(0, "first");
		}
		if (second == null) {
			throw new ArgumentNullException(0, "second");
		}
		let enumerator = getEnumerator(first);
		let enumerator2 = getEnumerator(second);
		{
			while (enumerator.moveNext()) {
				if (!enumerator2.moveNext() || !Base.equalsStatic(getBoxIfEnum<TSource>($tSource, enumerator.current), getBoxIfEnum<TSource>($tSource, enumerator2.current))) {
					return false;
				}
			}
			return (enumerator2.moveNext() == false);
		}
	}
	private static *_empty$1<TSource>($tSource: Type): IterableIterator<any> {
		return undefined;
	}
	static empty$1<TSource>($tSource: Type): IEnumerable$1<TSource> {
		return toEnum(() => Enumerable._empty$1<TSource>($tSource));
	}
	private static *_selectMany$3<TSource, TCollection, TResult>($tSource: Type, $tCollection: Type, $tResult: Type, source: IEnumerable$1<TSource>, collectionSelector: (arg1: TSource) => IEnumerable$1<TCollection>, resultSelector: (arg1: TSource, arg2: TCollection) => TResult): IterableIterator<any> {
		for (let item of fromEnum<TSource>(source)) {
			for (let result of fromEnum<TCollection>(collectionSelector(item))) {
				yield resultSelector(item, result);
			}
		}
	}
	static selectMany$3<TSource, TCollection, TResult>($tSource: Type, $tCollection: Type, $tResult: Type, source: IEnumerable$1<TSource>, collectionSelector: (arg1: TSource) => IEnumerable$1<TCollection>, resultSelector: (arg1: TSource, arg2: TCollection) => TResult): IEnumerable$1<TResult> {
		return toEnum(() => Enumerable._selectMany$3<TSource, TCollection, TResult>($tSource, $tCollection, $tResult, source, collectionSelector, resultSelector));
	}
	static any$11<TSource>($tSource: Type, source: IEnumerable$1<TSource>, predicate: (arg1: TSource) => boolean): boolean {
		for (let item of fromEnum<TSource>(source)) {
			if (predicate(item)) {
				return true;
			}
		}
		return false;
	}
	static firstOrDefault$11<TSource>($tSource: Type, source: IEnumerable$1<TSource>, predicate: (arg1: TSource) => boolean): TSource {
		for (let item of fromEnum<TSource>(source)) {
			if (predicate(item)) {
				return item;
			}
		}
		return Type.getDefaultValue<TSource>($tSource);
	}
	static all$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>, predicate: (arg1: TSource) => boolean): boolean {
		for (let item of fromEnum<TSource>(source)) {
			if (predicate(item) == false) {
				return false;
			}
		}
		return true;
	}
	static toDictionary$2<TSource, TKey>($tSource: Type, $tKey: Type, source: IEnumerable$1<TSource>, keySelector: (arg1: TSource) => TKey): Dictionary$2<TKey, TSource> {
		let d = new Dictionary$2<TKey, TSource>($tKey, $tSource, 0);
		for (let item of fromEnum<TSource>(source)) {
			d.item(keySelector(item), item);
		}
		return d;
	}
	static lastOrDefault$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): TSource {
		throw new NotImplementedException(0);
	}
	static zip$3<TFirst, TSecond, TResult>($tFirst: Type, $tSecond: Type, $tResult: Type, first: IEnumerable$1<TFirst>, second: IEnumerable$1<TSecond>, resultSelector: (arg1: TFirst, arg2: TSecond) => TResult): IEnumerable$1<TResult> {
		throw new NotImplementedException(0);
	}
	static distinct$1<TSource>($tSource: Type, source: IEnumerable$1<TSource>): IEnumerable$1<TSource> {
		throw new NotImplementedException(0);
	}
}


