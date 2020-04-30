/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, ICollection, ICollection_$type, IEnumerable, IEnumerable_$type, IEnumerator, IEnumerator_$type, IEnumerator$1, IEnumerator$1_$type, IDisposable, IDisposable_$type, NotSupportedException, toEnum, Type, markType } from "./type";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { IndexOutOfRangeException } from "./IndexOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
import { intDivide } from "./number";

/**
 * @hidden 
 */
export class BitArray extends Base implements ICollection, IEnumerable {
	static $t: Type = markType(BitArray, 'BitArray', (<any>Base).$type, [ICollection_$type, IEnumerable_$type]);
	private _count: number = 0;
	private _values: number[] = null;
	constructor(initNumber: number, bits: BitArray);
	constructor(initNumber: number, values: boolean[]);
	constructor(initNumber: number, length: number);
	constructor(initNumber: number, values: number[]);
	constructor(initNumber: number, length: number, defaultValue: boolean);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let bits: BitArray = <BitArray>_rest[0];
				let $outerArgs = <any[]>[ bits._values ];
				{
					let values: number[] = <number[]>$outerArgs[0];
					this._count = values.length * 32;
					this._values = <number[]>new Array(values.length);
					for (let i: number = 0; i < values.length; i++) {
						this._values[i] = values[i];
					}
				}
				this._count = bits._count;
			}
			break;

			case 1:
			{
				let values: boolean[] = <boolean[]>_rest[0];
				this.length = values.length;
				for (let i: number = 0; i < values.length; i++) {
					this.item(i, values[i]);
				}
			}
			break;

			case 2:
			{
				let length: number = <number>_rest[0];
				let $outerArgs = <any[]>[ length, false ];
				{
					let length: number = <number>$outerArgs[0];
					let defaultValue: boolean = <boolean>$outerArgs[1];
					this._count = length;
					this._values = <number[]>new Array((intDivide((length - 1), 32)) + 1);
					this.setAll(defaultValue);
				}
			}
			break;

			case 3:
			{
				let values: number[] = <number[]>_rest[0];
				this._count = values.length * 32;
				this._values = <number[]>new Array(values.length);
				for (let i: number = 0; i < values.length; i++) {
					this._values[i] = values[i];
				}
			}
			break;

			case 4:
			{
				let length: number = <number>_rest[0];
				let defaultValue: boolean = <boolean>_rest[1];
				this._count = length;
				this._values = <number[]>new Array((intDivide((length - 1), 32)) + 1);
				this.setAll(defaultValue);
			}
			break;

		}

	}
	get count(): number {
		return this._count;
	}
	get isReadOnly(): boolean {
		return false;
	}
	get isSynchronized(): boolean {
		return false;
	}
	get length(): number {
		return this._count;
	}
	set length(value: number) {
		if (value < 0) {
			throw new ArgumentOutOfRangeException(0);
		}
		this._count = value;
		let newArrayLength = (intDivide((this._count - 1), 32)) + 1;
		if (this._values.length < newArrayLength) {
			let old = this._values;
			this._values = <number[]>new Array(newArrayLength);
			for (let i: number = 0; i < old.length; i++) {
				this._values[i] = old[i];
			}
		}
	}
	get syncRoot(): any {
		return null;
	}
	item(index: number, value?: boolean): boolean {
		if (arguments.length === 2) {
			if (index < 0 || this._count <= index) {
				throw new IndexOutOfRangeException(0);
			}
			if (value) {
				this._values[intDivide(index, 32)] |= 1 << (index % 32);
			} else {
				this._values[intDivide(index, 32)] &= ~(1 << (index % 32));
			}
			return value;
		} else {
			if (index < 0 || this._count <= index) {
				throw new IndexOutOfRangeException(0);
			}
			return (this._values[intDivide(index, 32)] & (1 << (index % 32))) != 0;
		}
	}
	and(value: BitArray): BitArray {
		if (value.length != this.length) {
			throw new ArgumentException(1, "The BitArrays do not have the same length");
		}
		for (let i: number = 0; i < this._values.length; i++) {
			this._values[i] &= value._values[i];
		}
		return this;
	}
	clone(): any {
		return new BitArray(0, this);
	}
	copyTo(array: any[], index: number): void {
		for (let i: number = 0; i < this._count; i++) {
			array[index + i] = this.item(i);
		}
	}
	get(index: number): boolean {
		return this.item(index);
	}
	private *_getEnumeratorObject(): IterableIterator<any> {
		for (let i: number = 0; i < this._count; i++) {
			yield this.item(i);
		}
	}
	getEnumeratorObject(): IEnumerator {
		return toEnum(() => this._getEnumeratorObject()).getEnumeratorObject();
	}
	not(): BitArray {
		for (let i: number = 0; i < this._values.length; i++) {
			this._values[i] = ~this._values[i];
		}
		return this;
	}
	or(value: BitArray): BitArray {
		if (value.length != this.length) {
			throw new ArgumentException(1, "The BitArrays do not have the same length");
		}
		for (let i: number = 0; i < this._values.length; i++) {
			this._values[i] |= value._values[i];
		}
		return this;
	}
	set(index: number, value: boolean): void {
		this.item(index, value);
	}
	setAll(value: boolean): void {
		let val = value ? -1 : 0;
		for (let i: number = 0; i < this._values.length; i++) {
			this._values[i] = val;
		}
	}
	xor(value: BitArray): BitArray {
		if (value.length != this.length) {
			throw new ArgumentException(1, "The BitArrays do not have the same length");
		}
		for (let i: number = 0; i < this._values.length; i++) {
			this._values[i] ^= value._values[i];
		}
		return this;
	}
}


