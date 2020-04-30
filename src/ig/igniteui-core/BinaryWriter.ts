/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IDisposable, IDisposable_$type, Stream, SeekOrigin, Type, markType } from "./type";
import { UTF8Encoding } from "./UTF8Encoding";
import { Encoding } from "./Encoding";
import { BitConverter } from "./BitConverter";

/**
 * @hidden 
 */
export class BinaryWriter extends Base implements IDisposable {
	static $t: Type = markType(BinaryWriter, 'BinaryWriter', (<any>Base).$type, [IDisposable_$type]);
	private readonly _baseStream: Stream = null;
	private readonly _encoding: Encoding = null;
	constructor(initNumber: number);
	constructor(initNumber: number, output: Stream);
	constructor(initNumber: number, output: Stream, encoding: Encoding);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let output: Stream = <Stream>_rest[0];
				let $outerArgs = <any[]>[ output, new UTF8Encoding(0, false, true) ];
				{
					let output: Stream = <Stream>$outerArgs[0];
					let encoding: Encoding = <Encoding>$outerArgs[1];
					this._baseStream = output;
					this._encoding = encoding;
				}
			}
			break;

			case 2:
			{
				let output: Stream = <Stream>_rest[0];
				let encoding: Encoding = <Encoding>_rest[1];
				this._baseStream = output;
				this._encoding = encoding;
			}
			break;

		}

	}
	protected get_baseStream(): Stream {
		return this._baseStream;
	}
	get baseStream(): Stream {
		return this.get_baseStream();
	}
	close(): void {
		this.disposeCore(true);
	}
	dispose(): void {
		this.disposeCore(true);
	}
	protected disposeCore(disposing: boolean): void {
		if (disposing) {
			this._baseStream.close();
		}
	}
	flush(): void {
		this._baseStream.flush();
	}
	seek(offset: number, origin: SeekOrigin): number {
		return this._baseStream.seek(offset, origin);
	}
	write4(value: boolean): void {
		this._baseStream.write(BitConverter.getBytes(value), 0, 1);
	}
	write5(value: number): void {
		this._baseStream.write(BitConverter.getBytes3(value), 0, 1);
	}
	write(buffer: number[]): void {
		this._baseStream.write(buffer, 0, buffer.length);
	}
	write6(ch: string): void {
	}
	write1(chars: string[]): void {
	}
	write7(value: number): void {
		this._baseStream.write(BitConverter.getBytes2(value), 0, 8);
	}
	write12(value: number): void {
		this._baseStream.write(BitConverter.getBytes6(value), 0, 4);
	}
	write9(value: number): void {
		this._baseStream.write(BitConverter.getBytes4(value), 0, 4);
	}
	write10(value: number): void {
		this._baseStream.write(BitConverter.getBytes5(value), 0, 8);
	}
	write11(value: number): void {
		this._baseStream.write(BitConverter.getBytes3(value), 0, 2);
	}
	write8(value: number): void {
		this._baseStream.write(BitConverter.getBytes3(value), 0, 2);
	}
	write13(value: string): void {
	}
	write15(value: number): void {
		this._baseStream.write(BitConverter.getBytes8(value), 0, 4);
	}
	write16(value: number): void {
		this._baseStream.write(BitConverter.getBytes9(value), 0, 8);
	}
	write14(value: number): void {
		this._baseStream.write(BitConverter.getBytes7(value), 0, 2);
	}
	write2(buffer: number[], index: number, count: number): void {
	}
	write3(chars: string[], index: number, count: number): void {
	}
	protected write7BitEncodedInt(value: number): void {
	}
}


