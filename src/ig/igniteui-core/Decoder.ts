/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";

/**
 * @hidden 
 */
export abstract class Decoder extends Base {
	static $t: Type = markType(Decoder, 'Decoder');
	convert(bytes: number[], byteIndex: number, byteCount: number, chars: string[], charIndex: number, charCount: number, flush: boolean, bytesUsed: number, charsUsed: number, completed: boolean): { p7: number; p8: number; p9: boolean; } {
		throw new NotImplementedException(0);
		return {
			p7: bytesUsed,
			p8: charsUsed,
			p9: completed

		};
	}
	abstract getCharCount(bytes: number[], index: number, count: number): number;
	getCharCount1(bytes: number[], index: number, count: number, flush: boolean): number {
		throw new NotImplementedException(0);
	}
	abstract getChars(bytes: number[], byteIndex: number, byteCount: number, chars: string[], charIndex: number): number;
	getChars1(bytes: number[], byteIndex: number, byteCount: number, chars: string[], charIndex: number, flush: boolean): number {
		throw new NotImplementedException(0);
	}
	reset(): void {
		throw new NotImplementedException(0);
	}
}


