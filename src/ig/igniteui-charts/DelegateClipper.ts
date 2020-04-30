/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, NotSupportedException, Point_$type, fromEnum, toEnum, Type, markType, PointUtil } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { Clipper } from "igniteui-core/Clipper";
import { Thread } from "igniteui-core/culture";

/**
 * @hidden 
 */
export class DelegateClipper extends Base {
	static $t: Type = markType(DelegateClipper, 'DelegateClipper');
	constructor(x: (arg1: number) => number, y: (arg1: number) => number, count: number, clipper: Clipper) {
		super();
		let pointsIn: List$1<Point> = new List$1<Point>(Point_$type, 0);
		for (let index of fromEnum<number>(DelegateClipper.enumerableRange(0, count))) {
			pointsIn.add(<Point>{ $type: Point_$type, x: x(index), y: y(index) });
		}
		this.points = new List$1<Point>(Point_$type, 0);
		this.x = (ii: number) => this.points.count > ii ? this.points._inner[ii].x : NaN;
		this.y = (ii: number) => this.points.count > ii ? this.points._inner[ii].y : NaN;
		clipper.target = this.points;
		for (let pp of fromEnum<Point>(pointsIn)) {
			clipper.add(pp);
		}
		clipper.target = null;
	}
	private _points: List$1<Point> = null;
	private get points(): List$1<Point> {
		return this._points;
	}
	private set points(value: List$1<Point>) {
		this._points = value;
	}
	private _x: (arg1: number) => number = null;
	get x(): (arg1: number) => number {
		return this._x;
	}
	set x(value: (arg1: number) => number) {
		this._x = value;
	}
	private _y: (arg1: number) => number = null;
	get y(): (arg1: number) => number {
		return this._y;
	}
	set y(value: (arg1: number) => number) {
		this._y = value;
	}
	get count(): number {
		return this.points.count;
	}
	private static *_enumerableRange(start: number, count: number): IterableIterator<any> {
		for (let ii: number = start; ii < start + count; ii++) {
			yield ii;
		}
	}
	private static enumerableRange(start: number, count: number): IEnumerable$1<number> {
		return toEnum(() => DelegateClipper._enumerableRange(start, count));
	}
}


