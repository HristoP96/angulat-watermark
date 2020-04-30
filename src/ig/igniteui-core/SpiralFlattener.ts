/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Number_$type, Type, markType } from "./type";
import { List$1 } from "./List$1";
import { Stack$1 } from "./Stack$1";
import { SpiralTodo } from "./SpiralTodo";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class SpiralFlattener extends Base {
	static $t: Type = markType(SpiralFlattener, 'SpiralFlattener');
	constructor() {
		super();
	}
	static spiral(startAngle: number, startRadius: number, endAngle: number, endRadius: number, error: number): List$1<number> {
		if (isNaN_(error) || error <= 0) {
			error = 1;
		}
		let ret: List$1<number> = new List$1<number>(Number_$type, 0);
		let todo: Stack$1<SpiralTodo> = new Stack$1<SpiralTodo>((<any>SpiralTodo).$type);
		let b: number = (endRadius - startRadius) / (endAngle - startAngle);
		let a: number = startRadius - b * startAngle;
		let b2: number = b * b;
		let a2: number = a * a;
		let ab: number = a * b;
		todo.push(((() => {
			let $ret = new SpiralTodo();
			$ret.p0 = 0;
			$ret.p1 = 1;
			return $ret;
		})()));
		while (todo.count != 0) {
			let s: SpiralTodo = todo.pop();
			let r0: number = startRadius + s.p0 * (endRadius - startRadius);
			let t0: number = startAngle + s.p0 * (endAngle - startAngle);
			let t02: number = t0 * t0;
			let t03: number = t02 * t0;
			let r1: number = startRadius + s.p1 * (endRadius - startRadius);
			let t1: number = startAngle + s.p1 * (endAngle - startAngle);
			let t12: number = t1 * t1;
			let t13: number = t12 * t1;
			let segment: number;
			if (b == 0) {
				segment = a2 * (t1 - t0) / 2 + ab * (t12 - t02) / 2 + b2 * (t13 - t03) / 6;
			} else {
				segment = (Math.pow(a + b * t1, 3) - Math.pow(a + b * t0, 3)) / (6 * b);
			}
			let triangle: number = 0.5 * r0 * r1 * Math.sin(t1 - t0);
			if (segment - triangle > error) {
				let pm: number = 0.5 * (s.p0 + s.p1);
				todo.push(((() => {
					let $ret = new SpiralTodo();
					$ret.p0 = pm;
					$ret.p1 = s.p1;
					return $ret;
				})()));
				todo.push(((() => {
					let $ret = new SpiralTodo();
					$ret.p0 = s.p0;
					$ret.p1 = pm;
					return $ret;
				})()));
			} else {
				ret.add(s.p0);
			}
		}
		ret.add(1);
		return ret;
	}
}


