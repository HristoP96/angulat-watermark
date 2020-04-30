/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IDisposable, IDisposable_$type, Stream, Type, markType } from "./type";

/**
 * @hidden 
 */
export class BinaryReader extends Base implements IDisposable {
	static $t: Type = markType(BinaryReader, 'BinaryReader', (<any>Base).$type, [IDisposable_$type]);
	private _data: string = null;
	private _isBigEndian: boolean = false;
	private _currOffset: number = 0;
	get canRead(): boolean {
		return this._currOffset < this._data.length;
	}
	get currentPosition(): number {
		return this._currOffset;
	}
	get length(): number {
		if (this._useStream) {
			return this._stream.length;
		}
		return this._data.length;
	}
	private _useArray: boolean = false;
	private _useStream: boolean = false;
	constructor(initNumber: number, dataString: string, isBigEndian: boolean);
	constructor(initNumber: number, input: Stream);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let dataString: string = <string>_rest[0];
				let isBigEndian: boolean = <boolean>_rest[1];
				this._data = dataString;
				this._isBigEndian = isBigEndian;
				let data_ = this._data;
				if (<boolean>(typeof Uint8Array != 'undefined' && (<any>data_) instanceof Uint8Array)) {
					this._useArray = true;
				}
			}
			break;

			case 1:
			{
				let input: Stream = <Stream>_rest[0];
				this._stream = input;
				this._useStream = true;
			}
			break;

		}

	}
	private getByte(offset_: number): number {
		if (this._useStream) {
			this._stream.position = offset_;
			return <number>this._stream.readByte();
		} else if (this._useArray) {
			return <number>(+this._data[offset_] & 0xFF);
		} else {
			return <number>(this._data.charCodeAt(offset_) & 0xFF);
		}
	}
	private getBytes(offset_: number, length: number): number[] {
		let ret: number[] = <number[]>new Array(length);
		if (this._useStream) {
			this._stream.position = offset_;
			this._stream.read(ret, 0, <number>length);
		} else if (this._useArray) {
			for (let i_: number = 0; i_ < length; i_++) {
				ret[i_] = <number>(+this._data[offset_ + i_] & 0xFF);
			}
		} else {
			for (let i_: number = 0; i_ < length; i_++) {
				ret[i_] = <number>(this._data.charCodeAt(offset_ + i_) & 0xFF);
			}
		}
		return ret;
	}
	private getBytesBackwards(offset_: number, length_: number): number[] {
		let ret: number[] = <number[]>new Array(length_);
		if (this._useStream) {
			this._stream.position = offset_;
			this._stream.read(ret, 0, <number>length_);
			ret.reverse();
		} else if (this._useArray) {
			for (let i_: number = 0; i_ < length_; i_++) {
				ret[i_] = <number>(+this._data[offset_ + (length_ - 1 - i_)] & 0xFF);
			}
		} else {
			for (let i_: number = 0; i_ < length_; i_++) {
				ret[i_] = <number>(this._data.charCodeAt(offset_ + (length_ - 1 - i_)) & 0xFF);
			}
		}
		return ret;
	}
	readByte(): number {
		if (this._useStream) {
			this._currOffset = this._stream.position;
		}
		let ret: number = this.getByte(this._currOffset);
		this._currOffset = this._currOffset + 1;
		return ret;
	}
	readBytes(count: number): number[] {
		if (this._useStream) {
			this._currOffset = this._stream.position;
		}
		let ret: number[] = this.getBytes(this._currOffset, count);
		this._currOffset = this._currOffset + count;
		return ret;
	}
	readUInt32(): number {
		if (this._useStream) {
			this._currOffset = this._stream.position;
		}
		let num: number = 0;
		if (this._isBigEndian) {
			num = num + (this.getByte(this._currOffset) << 24);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 16);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 8);
			this._currOffset = this._currOffset + 1;
			num = num + this.getByte(this._currOffset);
			this._currOffset = this._currOffset + 1;
		} else {
			num = num + this.getByte(this._currOffset);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 8);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 16);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 24);
			this._currOffset = this._currOffset + 1;
		}
		if (num < 0) {
			num = num + 0xFFFFFFFF + 1;
		}
		return <number>num;
	}
	readUInt16(): number {
		if (this._useStream) {
			this._currOffset = this._stream.position;
		}
		let num: number = 0;
		if (this._isBigEndian) {
			num = num + (this.getByte(this._currOffset) << 8);
			this._currOffset = this._currOffset + 1;
			num = num + this.getByte(this._currOffset);
			this._currOffset = this._currOffset + 1;
		} else {
			num = num + this.getByte(this._currOffset);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 8);
			this._currOffset = this._currOffset + 1;
		}
		return <number>num;
	}
	readInt32(): number {
		if (this._useStream) {
			this._currOffset = this._stream.position;
		}
		let num: number = 0;
		if (this._isBigEndian) {
			num = num + (this.getByte(this._currOffset) << 24);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 16);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 8);
			this._currOffset = this._currOffset + 1;
			num = num + this.getByte(this._currOffset);
			this._currOffset = this._currOffset + 1;
		} else {
			num = num + this.getByte(this._currOffset);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 8);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 16);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 24);
			this._currOffset = this._currOffset + 1;
		}
		if (num > 2147483647) {
			num = num - 0xFFFFFFFF - 1;
		}
		return <number>num;
	}
	readDouble(): number {
		if (this._useStream) {
			this._currOffset = this._stream.position;
		}
		let bytes = this.getBytesBackwards(this._currOffset, 8);
		this._currOffset = this._currOffset + 8;
		let sign: number = bytes[0] >>> 7;
		let exponent: number = 0;
		exponent = exponent + (bytes[1] >>> 4);
		exponent = exponent + ((bytes[0] & 127) << 4);
		let fraction: number = 1;
		let currByte: number = bytes[1];
		let factor: number = 1 / 2;
		let currPos: number = 0;
		let hasFraction: boolean = false;
		for (currPos = 5; currPos <= 8; currPos++) {
			if ((currByte & (1 << (8 - currPos))) > 0) {
				fraction = fraction + factor;
				hasFraction = true;
			}
			factor = factor / 2;
		}
		for (let bytePos = 2; bytePos < 8; bytePos++) {
			currByte = bytes[bytePos];
			for (currPos = 1; currPos <= 8; currPos++) {
				if ((currByte & (1 << (8 - currPos))) > 0) {
					fraction = fraction + factor;
					hasFraction = true;
				}
				factor = factor / 2;
			}
		}
		if (exponent == 0 && !hasFraction) {
			return 0;
		}
		if (exponent == 0 && hasFraction) {
			exponent = 1;
			fraction = fraction - 1;
		}
		if (exponent == 1860 && !hasFraction) {
			if (sign == 1) {
				return Number.NEGATIVE_INFINITY;
			} else {
				return Number.POSITIVE_INFINITY;
			}
		}
		if (exponent == 1860 && hasFraction) {
			return NaN;
		}
		let biasedExponent = exponent - 1023;
		return Math.pow(-1, sign) * Math.pow(2, biasedExponent) * fraction;
	}
	readSingle(): number {
		if (this._useStream) {
			this._currOffset = this._stream.position;
		}
		let bytes = this.getBytesBackwards(this._currOffset, 4);
		this._currOffset = this._currOffset + 4;
		let sign: number = bytes[0] >>> 7;
		let exponent: number = 0;
		exponent = exponent + (bytes[1] >>> 7);
		exponent = exponent + ((bytes[0] & 127) << 1);
		let fraction: number = 1;
		let currByte: number = bytes[1];
		let factor: number = 1 / 2;
		let currPos: number = 0;
		let hasFraction: boolean = false;
		for (currPos = 2; currPos <= 8; currPos++) {
			if ((currByte & (1 << (8 - currPos))) > 0) {
				fraction = fraction + factor;
				hasFraction = true;
			}
			factor = factor / 2;
		}
		for (let bytePos = 2; bytePos < 4; bytePos++) {
			currByte = bytes[bytePos];
			for (currPos = 1; currPos <= 8; currPos++) {
				if ((currByte & (1 << (8 - currPos))) > 0) {
					fraction = fraction + factor;
					hasFraction = true;
				}
				factor = factor / 2;
			}
		}
		if (exponent == 0 && !hasFraction) {
			return 0;
		}
		if (exponent == 0 && hasFraction) {
			exponent = 1;
			fraction = fraction - 1;
		}
		if (exponent == 255 && !hasFraction) {
			if (sign == 1) {
				return Number.NEGATIVE_INFINITY;
			} else {
				return Number.POSITIVE_INFINITY;
			}
		}
		if (exponent == 255 && hasFraction) {
			return NaN;
		}
		let biasedExponent = exponent - 127;
		return (<number>Math.pow(-1, sign)) * (<number>Math.pow(2, biasedExponent)) * <number>fraction;
	}
	private _stream: Stream = null;
	protected get_baseStream(): Stream {
		return this._stream;
	}
	get baseStream(): Stream {
		return this.get_baseStream();
	}
	readBoolean(): boolean {
		if (this._useStream) {
			this._currOffset = this._stream.position;
		}
		let ret: number = this.getByte(this._currOffset);
		this._currOffset = this._currOffset + 1;
		return ret != 0;
	}
	readInt16(): number {
		if (this._useStream) {
			this._currOffset = this._stream.position;
		}
		let num: number = 0;
		if (this._isBigEndian) {
			num = num + (this.getByte(this._currOffset) << 8);
			this._currOffset = this._currOffset + 1;
			num = num + this.getByte(this._currOffset);
			this._currOffset = this._currOffset + 1;
		} else {
			num = num + this.getByte(this._currOffset);
			this._currOffset = this._currOffset + 1;
			num = num + (this.getByte(this._currOffset) << 8);
			this._currOffset = this._currOffset + 1;
		}
		if (num > 32767) {
			num -= (65535 + 1);
		}
		return <number>num;
	}
	readSByte(): number {
		if (this._useStream) {
			this._currOffset = this._stream.position;
		}
		let ret: number = this.getByte(this._currOffset);
		this._currOffset = this._currOffset + 1;
		if (ret > 127) {
			return <number>(ret - 255 + 1);
		}
		return <number>ret;
	}
	close(): void {
		(<IDisposable>this).dispose();
	}
	dispose(): void {
		if (this._useStream) {
			this._stream.dispose();
		}
	}
}


