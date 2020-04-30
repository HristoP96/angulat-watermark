/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Random } from "igniteui-core/Random";
import { truncate } from "igniteui-core/number";

/**
 * @hidden 
 */
export class Randomizer extends Base {
	static $t: Type = markType(Randomizer, 'Randomizer');
	private static rand: Random = new Random(0);
	static getString(length: number): string {
		let chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		let ret = "";
		for (let i: number = 0; i < length; i++) {
			let ind = Randomizer.rand.next1(chars.length);
			ret += chars.charAt(ind);
		}
		return ret;
	}
	static getNum1(min: number, max: number): number {
		return Randomizer.rand.next2(min, max);
	}
	static getNum(length: number): number {
		let min = Math.pow(10, (length - 1));
		let max = 9 * min;
		return Randomizer.rand.next2(<number>truncate(min), <number>truncate(max));
	}
}


