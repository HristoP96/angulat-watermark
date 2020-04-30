/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IDisposable, IDisposable_$type, IEnumerator, IEnumerator_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable, IEnumerable_$type, NotSupportedException, fromEnum, toEnum, Type, markType, getEnumerator } from "./type";
import { Thread } from "./culture";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class TrendCalculators extends Base {
	static $t: Type = markType(TrendCalculators, 'TrendCalculators');
	private static *_wMA(sequence: IEnumerable$1<number>, period: number): IterableIterator<any> {
		let buffer: number[] = <number[]>new Array(period);
		let i: number = 0;
		for (i = 0; i < period; i++) {
			buffer[i] = 0;
		}
		let total: number = NaN;
		let numerator: number = NaN;
		let weightsum: number = NaN;
		let wma: number = NaN;
		i = 0;
		for (let value of fromEnum<number>(sequence)) {
			if (!isNaN_(value)) {
				let cursor: number = i % period;
				if (i == 0) {
					weightsum = 1;
					wma = value;
					numerator = value;
					total = value;
				} else if (i < period) {
					weightsum += (i + 1);
					total += value;
					numerator += (i + 1) * value;
					wma = numerator / weightsum;
				} else {
					numerator = numerator + (period * value) - total;
					wma = numerator / weightsum;
					total = total + value - buffer[cursor];
				}
				buffer[cursor] = value;
				++i;
			}
			yield wma;
		}
	}
	static wMA(sequence: IEnumerable$1<number>, period: number): IEnumerable$1<number> {
		return toEnum(() => TrendCalculators._wMA(sequence, period));
	}
	private static *_eMA(sequence: IEnumerable$1<number>, period: number): IterableIterator<any> {
		let i: number = 0;
		let ema: number = NaN;
		let alpha: number = 2 / (1 + period);
		for (let value of fromEnum<number>(sequence)) {
			if (!isNaN_(value)) {
				if (i < period) {
					ema = isNaN_(ema) ? value : (ema * i + value) / (i + 1);
				} else {
					ema = (value - ema) * alpha + ema;
				}
				++i;
			}
			yield ema;
		}
	}
	static eMA(sequence: IEnumerable$1<number>, period: number): IEnumerable$1<number> {
		return toEnum(() => TrendCalculators._eMA(sequence, period));
	}
	private static *_mMA(sequence: IEnumerable$1<number>, period: number): IterableIterator<any> {
		let i: number = 0;
		let mma: number = NaN;
		let alpha: number = 1 / period;
		for (let value of fromEnum<number>(sequence)) {
			if (!isNaN_(value)) {
				if (i < period) {
					mma = isNaN_(mma) ? value : (mma * i + value) / (i + 1);
				} else {
					mma = (value - mma) * alpha + mma;
				}
				++i;
			}
			yield mma;
		}
	}
	static mMA(sequence: IEnumerable$1<number>, period: number): IEnumerable$1<number> {
		return toEnum(() => TrendCalculators._mMA(sequence, period));
	}
	private static *_cMA(sequence: IEnumerable$1<number>): IterableIterator<any> {
		let cma: number = NaN;
		let i: number = 0;
		for (let value of fromEnum<number>(sequence)) {
			if (!isNaN_(value)) {
				cma = isNaN_(cma) ? value : (cma * i + value) / (i + 1);
				++i;
			}
			yield cma;
		}
	}
	static cMA(sequence: IEnumerable$1<number>): IEnumerable$1<number> {
		return toEnum(() => TrendCalculators._cMA(sequence));
	}
	private static *_sMA(sequence: IEnumerable$1<number>, period: number): IterableIterator<any> {
		let buffer: number[] = <number[]>new Array(period);
		let i: number = 0;
		for (i = 0; i < period; i++) {
			buffer[i] = 0;
		}
		i = 0;
		let sma: number = NaN;
		for (let value of fromEnum<number>(sequence)) {
			if (!isNaN_(value)) {
				let next: number = value / period;
				let cursor: number = i % period;
				if (i < period) {
					sma = isNaN_(sma) ? value : (sma * i + value) / (i + 1);
				} else {
					sma = sma + next - buffer[cursor];
				}
				buffer[cursor] = next;
				++i;
			}
			yield sma;
		}
	}
	static sMA(sequence: IEnumerable$1<number>, period: number): IEnumerable$1<number> {
		return toEnum(() => TrendCalculators._sMA(sequence, period));
	}
	private static *_movingSum(sequence: IEnumerable$1<number>, period: number): IterableIterator<any> {
		let buffer: number[] = <number[]>new Array(period);
		let i: number = 0;
		for (i = 0; i < period; i++) {
			buffer[i] = 0;
		}
		i = 0;
		let ms: number = NaN;
		for (let value of fromEnum<number>(sequence)) {
			if (!isNaN_(value)) {
				let next: number = value;
				let cursor: number = i % period;
				if (i < period) {
					ms = isNaN_(ms) ? next : ms + next;
				} else {
					ms = ms + next - buffer[cursor];
				}
				buffer[cursor] = next;
				++i;
			}
			yield ms;
		}
	}
	static movingSum(sequence: IEnumerable$1<number>, period: number): IEnumerable$1<number> {
		return toEnum(() => TrendCalculators._movingSum(sequence, period));
	}
	private static *_sTDEV(sequence: IEnumerable$1<number>, period: number): IterableIterator<any> {
		let sma: IEnumerator$1<number> = getEnumerator(TrendCalculators.sMA(sequence, period));
		let price: IEnumerator$1<number> = getEnumerator(sequence);
		let buffer: number[] = <number[]>new Array(period);
		let i: number = 0;
		for (i = 0; i < period; i++) {
			buffer[i] = 0;
		}
		i = 0;
		while (price.moveNext() && sma.moveNext()) {
			buffer[(i++) % period] = <number>price.current;
			let S: number = 0;
			if (i < period) {
				let effectivePeriod: number = 0;
				for (let j: number = 0; j < i; j++) {
					let t: number = (sma.current - buffer[j]);
					S += t * t;
					effectivePeriod++;
				}
				yield Math.sqrt(S / effectivePeriod);
			} else {
				for (let j1: number = 0; j1 < period; ++j1) {
					let t1: number = (sma.current - buffer[j1]);
					S += t1 * t1;
				}
				yield Math.sqrt(S / period);
			}
		}
	}
	static sTDEV(sequence: IEnumerable$1<number>, period: number): IEnumerable$1<number> {
		return toEnum(() => TrendCalculators._sTDEV(sequence, period));
	}
}


