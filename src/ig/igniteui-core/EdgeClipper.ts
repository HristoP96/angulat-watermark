/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Point, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator, IEnumerator_$type, IEnumerator$1, IEnumerator$1_$type, Point_$type, Type, markType, PointUtil } from "./type";

/**
 * @hidden 
 */
export abstract class EdgeClipper extends Base implements IList$1<Point> {
	static $t: Type = markType(EdgeClipper, 'EdgeClipper', (<any>Base).$type, [IList$1_$type.specialize(Point_$type)]);
	get dst(): IList$1<Point> {
		return this._dst;
	}
	set dst(value: IList$1<Point>) {
		if (this._dst != value) {
			this.init = true;
			this._dst = value;
		}
	}
	_dst: IList$1<Point> = null;
	_nextClipper: EdgeClipper = null;
	get nextClipper(): EdgeClipper {
		return this._nextClipper;
	}
	set nextClipper(value: EdgeClipper) {
		this._nextClipper = value;
	}
	init: boolean = true;
	first: Point = null;
	prev: Point = null;
	prevInside: boolean = false;
	isClosed: boolean = false;
	isOutput: boolean = false;
	add(cur: Point): void {
		let CurInside: boolean = this.isInside(cur);
		if (this.init) {
			this.init = false;
			this.first = cur;
		} else {
			if (true) {
				if (CurInside) {
					if (!this.prevInside) {
						this._dst.add(this.intersection(this.prev, cur));
					} else {
						if (!this.isClosed && !this.isOutput) {
							this._dst.add(this.prev);
							this.isOutput = true;
						}
					}
					this._dst.add(cur);
				} else {
					if (this.prevInside) {
						if (!this.isClosed && !this.isOutput) {
							this._dst.add(this.prev);
							this.isOutput = true;
						}
						this._dst.add(this.intersection(this.prev, cur));
					}
				}
			}
		}
		this.prev = cur;
		this.prevInside = CurInside;
	}
	clear(): void {
		if (this.isClosed && !this.init) {
			this.add(this.first);
		}
		if (this._nextClipper != null) {
			this._nextClipper.clear();
		}
		this.init = true;
		this.isOutput = false;
	}
	protected abstract isInside(pt: Point): boolean;
	abstract intersection(b: Point, e: Point): Point;
	getEnumeratorObject(): IEnumerator {
		return null;
	}
	getEnumerator(): IEnumerator$1<Point> {
		return null;
	}
	get isReadOnly(): boolean {
		return false;
	}
	get count(): number {
		return 0;
	}
	remove(item: Point): boolean {
		return false;
	}
	removeAt(index: number): void {
	}
	copyTo(array: Point[], arrayIndex: number): void {
	}
	contains(item: Point): boolean {
		return false;
	}
	item(index: number, value?: Point): Point {
		if (arguments.length === 2) {
			return value;
		} else {
			return <Point>{ $type: Point_$type, x: 0, y: 0 };
		}
	}
	insert(index: number, item: Point): void {
	}
	indexOf(item: Point): number {
		return -1;
	}
}


