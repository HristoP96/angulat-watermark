/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TextReader } from "./TextReader";
import { Stream, Base, Type, markType } from "./type";
import { Encoding } from "./Encoding";
import { Decoder } from "./Decoder";
import { NotImplementedException } from "./NotImplementedException";
import { StringBuilder } from "./StringBuilder";
import { arrayCopy1 } from "./arrayExtended";

/**
 * @hidden 
 */
export class StreamReader extends TextReader {
	static $t: Type = markType(StreamReader, 'StreamReader', (<any>TextReader).$type);
	private static readonly bufferSize: number = 1024;
	private readonly _stream: Stream = null;
	private _encoding: Encoding = null;
	private _decoder: Decoder = null;
	private _charBuffer: string[] = null;
	private _charBufferLength: number = 0;
	private _charBufferPosition: number = 0;
	constructor(stream: Stream) {
		super();
		this._stream = stream;
		this._encoding = Encoding.uTF8;
		this._decoder = this._encoding.getDecoder();
		this._charBuffer = <string[]>new Array(this._encoding.getMaxCharCount(StreamReader.bufferSize));
	}
	private fillBuffer(): void {
		let buffer = <number[]>new Array(StreamReader.bufferSize);
		let byteCount = this._stream.read(buffer, 0, buffer.length);
		this._charBufferLength = this._decoder.getChars(buffer, 0, byteCount, this._charBuffer, 0);
		this._charBufferPosition = 0;
	}
	peek(): number {
		if (this._charBufferPosition == this._charBufferLength) {
			this.fillBuffer();
			if (this._charBufferPosition == this._charBufferLength) {
				return -1;
			}
		}
		return this._charBuffer[this._charBufferPosition].charCodeAt(0);
	}
	read(): number {
		if (this._charBufferPosition == this._charBufferLength) {
			this.fillBuffer();
			if (this._charBufferPosition == this._charBufferLength) {
				return -1;
			}
		}
		return this._charBuffer[this._charBufferPosition++].charCodeAt(0);
	}
	read1(buffer: string[], index: number, count: number): number {
		let total = 0;
		while (count > 0) {
			let charsRemaining = Math.min(count, this._charBufferLength - this._charBufferPosition);
			if (charsRemaining == 0) {
				this.fillBuffer();
				charsRemaining = Math.min(count, this._charBufferLength - this._charBufferPosition);
				if (charsRemaining == 0) {
					break;
				}
			}
			arrayCopy1(this._charBuffer, this._charBufferPosition, buffer, index, charsRemaining);
			total += charsRemaining;
			count -= charsRemaining;
			this._charBufferPosition += charsRemaining;
		}
		return total;
	}
	readLine(): string {
		throw new NotImplementedException(0);
	}
	readToEnd(): string {
		let builder = new StringBuilder(0);
		while (true) {
			let charsRemaining = this._charBufferLength - this._charBufferPosition;
			if (charsRemaining == 0) {
				this.fillBuffer();
				charsRemaining = this._charBufferLength - this._charBufferPosition;
				if (charsRemaining == 0) {
					break;
				}
			}
			builder.append(this._charBuffer, this._charBufferPosition, charsRemaining);
			this._charBufferPosition = this._charBufferLength;
		}
		return builder.toString();
	}
}


