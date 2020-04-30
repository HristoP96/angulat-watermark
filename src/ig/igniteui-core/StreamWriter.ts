//
// System.IO.StreamWriter.cs
//
// Authors:
//   Dietmar Maurer (dietmar@ximian.com)
//   Paolo Molaro (lupus@ximian.com)
//
// (C) Ximian, Inc.  http://www.ximian.com
//

//
// Copyright (C) 2004 Novell, Inc (http://www.novell.com)
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
import { TextWriter } from "./TextWriter";
import { Stream, BaseError, Base, Type, markType } from "./type";
import { Encoding } from "./Encoding";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { NullStream } from "./NullStream";
import { arrayCopy1 } from "./arrayExtended";

/**
 * @hidden 
 */
export class StreamWriter extends TextWriter {
	static $t: Type = markType(StreamWriter, 'StreamWriter', (<any>TextWriter).$type);
	private internalEncoding: Encoding;
	private internalStream: Stream;
	private iflush: boolean;
	private static readonly defaultBufferSize: number = 1024;
	private static readonly defaultFileBufferSize: number = 4096;
	private static readonly minimumBufferSize: number = 256;
	private byte_buf: number[];
	private byte_pos: number;
	private decode_buf: string[];
	private decode_pos: number;
	private disposedAlready: boolean;
	private preamble_done: boolean;
	static readonly null1: StreamWriter = new StreamWriter(2, new NullStream(), Encoding.uTF8Unmarked, 1);
	constructor(initNumber: number, stream: Stream);
	constructor(initNumber: number, stream: Stream, encoding: Encoding);
	constructor(initNumber: number, stream: Stream, encoding: Encoding, bufferSize: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let stream: Stream = <Stream>_rest[0];
				let $outerArgs = <any[]>[ stream, Encoding.uTF8Unmarked, StreamWriter.defaultBufferSize ];
				{
					let stream: Stream = <Stream>$outerArgs[0];
					let encoding: Encoding = <Encoding>$outerArgs[1];
					let bufferSize: number = <number>$outerArgs[2];
					super(0);
					this.internalEncoding = null;
					this.internalStream = null;
					this.iflush = false;
					this.byte_buf = null;
					this.byte_pos = 0;
					this.decode_buf = null;
					this.decode_pos = 0;
					this.disposedAlready = false;
					this.preamble_done = false;
					if (null == stream) {
						throw new ArgumentNullException(0, "stream");
					}
					if (null == encoding) {
						throw new ArgumentNullException(0, "encoding");
					}
					if (bufferSize <= 0) {
						throw new ArgumentOutOfRangeException(1, "bufferSize");
					}
					if (!stream.canWrite) {
						throw new ArgumentException(1, "Can not write to stream");
					}
					this.internalStream = stream;
					this.initialize(encoding, bufferSize);
				}
			}
			break;

			case 1:
			{
				let stream: Stream = <Stream>_rest[0];
				let encoding: Encoding = <Encoding>_rest[1];
				let $outerArgs = <any[]>[ stream, encoding, StreamWriter.defaultBufferSize ];
				{
					let stream: Stream = <Stream>$outerArgs[0];
					let encoding: Encoding = <Encoding>$outerArgs[1];
					let bufferSize: number = <number>$outerArgs[2];
					super(0);
					this.internalEncoding = null;
					this.internalStream = null;
					this.iflush = false;
					this.byte_buf = null;
					this.byte_pos = 0;
					this.decode_buf = null;
					this.decode_pos = 0;
					this.disposedAlready = false;
					this.preamble_done = false;
					if (null == stream) {
						throw new ArgumentNullException(0, "stream");
					}
					if (null == encoding) {
						throw new ArgumentNullException(0, "encoding");
					}
					if (bufferSize <= 0) {
						throw new ArgumentOutOfRangeException(1, "bufferSize");
					}
					if (!stream.canWrite) {
						throw new ArgumentException(1, "Can not write to stream");
					}
					this.internalStream = stream;
					this.initialize(encoding, bufferSize);
				}
			}
			break;

			case 2:
			{
				let stream: Stream = <Stream>_rest[0];
				let encoding: Encoding = <Encoding>_rest[1];
				let bufferSize: number = <number>_rest[2];
				super(0);
				this.internalEncoding = null;
				this.internalStream = null;
				this.iflush = false;
				this.byte_buf = null;
				this.byte_pos = 0;
				this.decode_buf = null;
				this.decode_pos = 0;
				this.disposedAlready = false;
				this.preamble_done = false;
				if (null == stream) {
					throw new ArgumentNullException(0, "stream");
				}
				if (null == encoding) {
					throw new ArgumentNullException(0, "encoding");
				}
				if (bufferSize <= 0) {
					throw new ArgumentOutOfRangeException(1, "bufferSize");
				}
				if (!stream.canWrite) {
					throw new ArgumentException(1, "Can not write to stream");
				}
				this.internalStream = stream;
				this.initialize(encoding, bufferSize);
			}
			break;

		}

	}
	initialize(encoding: Encoding, bufferSize: number): void {
		this.internalEncoding = encoding;
		this.decode_pos = this.byte_pos = 0;
		let BufferSize: number = Math.max(bufferSize, StreamWriter.minimumBufferSize);
		this.decode_buf = <string[]>new Array(BufferSize);
		this.byte_buf = <number[]>new Array(encoding.getMaxByteCount(BufferSize));
		if (this.internalStream.canSeek && this.internalStream.position > 0) {
			this.preamble_done = true;
		}
	}
	protected get_autoFlush(): boolean {
		return this.iflush;
	}
	protected set_autoFlush(value: boolean): void {
		this.iflush = value;
		if (this.iflush) {
			this.flush();
		}
	}
	get autoFlush(): boolean {
		return this.get_autoFlush();
	}
	set autoFlush(value: boolean) {
		this.set_autoFlush(value);
	}
	protected get_baseStream(): Stream {
		return this.internalStream;
	}
	get baseStream(): Stream {
		return this.get_baseStream();
	}
	protected get_encoding(): Encoding {
		return this.internalEncoding;
	}
	get encoding(): Encoding {
		return this.get_encoding();
	}
	protected dispose1(disposing: boolean): void {
		let exc: BaseError = null;
		if (!this.disposedAlready && disposing && this.internalStream != null) {
			try {
				this.flush();
			}
			catch (e) {
				exc = e;
			}
			this.disposedAlready = true;
			try {
				this.internalStream.close();
			}
			catch (e1) {
				if (exc == null) {
					exc = e1;
				}
			}
		}
		this.internalStream = null;
		this.byte_buf = null;
		this.internalEncoding = null;
		this.decode_buf = null;
		if (exc != null) {
			throw exc;
		}
	}
	flush(): void {
		if (this.disposedAlready) {
			throw new ObjectDisposedException(0, "StreamWriter");
		}
		this.decode();
		if (this.byte_pos > 0) {
			this.flushBytes();
			this.internalStream.flush();
		}
	}
	private flushBytes(): void {
		if (!this.preamble_done && this.byte_pos > 0) {
			let preamble: number[] = this.internalEncoding.getPreamble();
			if (preamble.length > 0) {
				this.internalStream.write(preamble, 0, preamble.length);
			}
			this.preamble_done = true;
		}
		this.internalStream.write(this.byte_buf, 0, this.byte_pos);
		this.byte_pos = 0;
	}
	private decode(): void {
		if (this.byte_pos > 0) {
			this.flushBytes();
		}
		if (this.decode_pos > 0) {
			let len: number = this.internalEncoding.getBytes2(this.decode_buf, 0, this.decode_pos, this.byte_buf, this.byte_pos);
			this.byte_pos += len;
			this.decode_pos = 0;
		}
	}
	write1(buffer: string[], index: number, count: number): void {
		if (this.disposedAlready) {
			throw new ObjectDisposedException(0, "StreamWriter");
		}
		if (buffer == null) {
			throw new ArgumentNullException(0, "buffer");
		}
		if (index < 0) {
			throw new ArgumentOutOfRangeException(2, "index", "< 0");
		}
		if (count < 0) {
			throw new ArgumentOutOfRangeException(2, "count", "< 0");
		}
		if (index > buffer.length - count) {
			throw new ArgumentException(1, "index + count > buffer.Length");
		}
		this.lowLevelWrite(buffer, index, count);
		if (this.iflush) {
			this.flush();
		}
	}
	private lowLevelWrite(buffer: string[], index: number, count: number): void {
		while (count > 0) {
			let todo: number = this.decode_buf.length - this.decode_pos;
			if (todo == 0) {
				this.decode();
				todo = this.decode_buf.length;
			}
			if (todo > count) {
				todo = count;
			}
			arrayCopy1(buffer, index, this.decode_buf, this.decode_pos, todo);
			count -= todo;
			index += todo;
			this.decode_pos += todo;
		}
	}
	private lowLevelWrite1(s: string): void {
		let count: number = s.length;
		let index: number = 0;
		while (count > 0) {
			let todo: number = this.decode_buf.length - this.decode_pos;
			if (todo == 0) {
				this.decode();
				todo = this.decode_buf.length;
			}
			if (todo > count) {
				todo = count;
			}
			for (let i: number = 0; i < todo; i++) {
				this.decode_buf[i + this.decode_pos] = s.charAt(i + index);
			}
			count -= todo;
			index += todo;
			this.decode_pos += todo;
		}
	}
	write3(value: string): void {
		if (this.disposedAlready) {
			throw new ObjectDisposedException(0, "StreamWriter");
		}
		if (this.decode_pos >= this.decode_buf.length) {
			this.decode();
		}
		this.decode_buf[this.decode_pos++] = value;
		if (this.iflush) {
			this.flush();
		}
	}
	write(buffer: string[]): void {
		if (this.disposedAlready) {
			throw new ObjectDisposedException(0, "StreamWriter");
		}
		if (buffer != null) {
			this.lowLevelWrite(buffer, 0, buffer.length);
		}
		if (this.iflush) {
			this.flush();
		}
	}
	write10(value: string): void {
		if (this.disposedAlready) {
			throw new ObjectDisposedException(0, "StreamWriter");
		}
		if (value != null) {
			this.lowLevelWrite1(value);
		}
		if (this.iflush) {
			this.flush();
		}
	}
	close(): void {
		this.dispose1(true);
	}
}


