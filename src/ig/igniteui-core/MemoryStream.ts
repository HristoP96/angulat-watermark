/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Stream, Base, SeekOrigin, typeGetValue, Type, markType } from "./type";

/**
 * @hidden 
 */
export class MemoryStream extends Stream {
	static $t: Type = markType(MemoryStream, 'MemoryStream', (<any>Stream).$type);
	private _data: number[] = null;
	private _position: number = 0;
	private _length: number = 0;
	private _hasStrings: boolean = false;
	constructor(initNumber: number);
	constructor(initNumber: number, capacity: number);
	constructor(initNumber: number, buffer: number[]);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let $outerArgs = <any[]>[ 0 ];
				{
					let capacity: number = <number>$outerArgs[0];
					this._data = <number[]>new Array(capacity);
					for (let i: number = 0; i < capacity; i++) {
						this._data[i] = 0;
					}
				}
			}
			break;

			case 1:
			{
				let capacity: number = <number>_rest[0];
				this._data = <number[]>new Array(capacity);
				for (let i: number = 0; i < capacity; i++) {
					this._data[i] = 0;
				}
			}
			break;

			case 2:
			{
				let buffer: number[] = <number[]>_rest[0];
				this._data = buffer;
				this._length = buffer.length;
				this._hasStrings = this._length != 0 && typeof <any>this._data[0] === 'string';
			}
			break;

		}

	}
	protected get_canRead(): boolean {
		return true;
	}
	get canRead(): boolean {
		return this.get_canRead();
	}
	protected get_canSeek(): boolean {
		return true;
	}
	get canSeek(): boolean {
		return this.get_canSeek();
	}
	protected get_canWrite(): boolean {
		return true;
	}
	get canWrite(): boolean {
		return this.get_canWrite();
	}
	protected get_capacity(): number {
		return this._data.length;
	}
	protected set_capacity(value: number): void {
		if (this._data.length == value) {
			return;
		}
		for (let i: number = this._length; i < value; i++) {
			this._data[i] = 0;
		}
	}
	get capacity(): number {
		return this.get_capacity();
	}
	set capacity(value: number) {
		this.set_capacity(value);
	}
	protected get_length(): number {
		return this._length;
	}
	get length(): number {
		return this.get_length();
	}
	protected get_position(): number {
		return this._position;
	}
	protected set_position(value: number): void {
		if (this._position == value) {
			return;
		}
		this._position = <number>value;
		if (this.capacity <= this._position) {
			this.capacity = this._position + 1;
		}
	}
	get position(): number {
		return this.get_position();
	}
	set position(value: number) {
		this.set_position(value);
	}
	protected disposeCore(disposing: boolean): void {
	}
	flush(): void {
	}
	getBuffer(): number[] {
		return this._data;
	}
	read(buffer: number[], offset: number, count: number): number {
		let resolvedCount = Math.min(this._length - this._position, count);
		if (this._hasStrings) {
			for (let i: number = 0; i < resolvedCount; i++) {
				buffer[offset++] = <number>((<any>this._data[this._position++]).charCodeAt(0) & 0xFF);
			}
		} else {
			for (let i1: number = 0; i1 < resolvedCount; i1++) {
				buffer[offset++] = this._data[this._position++];
			}
		}
		return resolvedCount;
	}
	readByte(): number {
		if (this._length <= this._position) {
			return -1;
		}
		if (this._hasStrings) {
			return <number>((<any>this._data[this._position++]).charCodeAt(0) & 0xFF);
		}
		return this._data[this._position++];
	}
	seek(offset: number, loc: SeekOrigin): number {
		switch (loc) {
			case SeekOrigin.Begin:
			this._position = <number>offset;
			break;

			case SeekOrigin.Current:
			this._position += <number>offset;
			break;

			case SeekOrigin.End:
			this._position = this._length + <number>offset;
			break;

		}

		return this._position;
	}
	setLength(value: number): void {
		if (this.capacity < value) {
			this.capacity = Math.max(<number>value, this.capacity * 2);
		}
		this._length = <number>value;
		if (this._length < this._position) {
			this._position = this._length;
		}
	}
	toArray(): number[] {
		if (this._hasStrings) {
			let all = <number[]>new Array(this._length);
			let position = this.position;
			this.position = 0;
			this.read(all, 0, all.length);
			this.position = position;
			return all;
		}
		return <number[]>(this._data.slice(0, this._length));
	}
	write(buffer: number[], offset: number, count: number): void {
		let newPosition = this._position + count;
		if (this.length < newPosition) {
			this.setLength(newPosition);
		}
		let isString = count != 0 && typeof <any>buffer[offset] === 'string';
		if (isString == this._hasStrings) {
			for (let i: number = 0; i < count; i++) {
				this._data[this._position++] = buffer[offset++];
			}
		} else if (isString) {
			for (let i1: number = 0; i1 < count; i1++) {
				this._data[this._position++] = <number>((<any>buffer).charCodeAt(offset++) & 0xFF);
			}
		} else {
			for (let i2: number = 0; i2 < count; i2++) {
				this._data[this._position++] = typeGetValue(<any>(String.fromCharCode(buffer[offset++])));
			}
		}
	}
	writeByte(value: number): void {
		let isString = typeof <any>value === 'string';
		if (isString == this._hasStrings) {
			this._data[this._position++] = value;
		} else if (isString) {
			this._data[this._position++] = <number>((<any>value).charCodeAt(0) & 0xFF);
		} else {
			this._data[this._position++] = typeGetValue(<any>(String.fromCharCode(value)));
		}
		if (this._length < this._position) {
			this._length = this._position;
		}
	}
	writeTo(stream: Stream): void {
		stream.write(this._data, 0, this._length);
	}
}


