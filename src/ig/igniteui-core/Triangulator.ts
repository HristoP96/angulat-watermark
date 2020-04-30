/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "./DependencyObject";
import { TriangulatorContext } from "./TriangulatorContext";
import { IList$1, IList$1_$type, Base, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Number_$type, Point_$type, fromEnum, runOn, Type, markType, PointUtil } from "./type";
import { List$1 } from "./List$1";
import { Triangle } from "./Triangle";
import { HashSet$1 } from "./HashSet$1";
import { LinkedList$1 } from "./LinkedList$1";
import { HalfEdgeSet } from "./HalfEdgeSet";
import { PointTester } from "./PointTester";
import { PointComparer } from "./PointComparer";
import { TriangulationStatusEventArgs } from "./TriangulationStatusEventArgs";
import { LinkedListNode$1 } from "./LinkedListNode$1";
import { HalfEdge } from "./HalfEdge";
import { truncate, isNaN_, isInfinity } from "./number";

/**
 * @hidden 
 */
export class Triangulator extends DependencyObject {
	static $t: Type = markType(Triangulator, 'Triangulator', (<any>DependencyObject).$type);
	private _count: number = 0;
	private _xColumn: IList$1<number> = null;
	private _yColumn: IList$1<number> = null;
	constructor(count: number, xColumn: IList$1<number>, yColumn: IList$1<number>) {
		super();
		this._count = count;
		this._xColumn = xColumn;
		this._yColumn = yColumn;
	}
	triangulateAsync(): void {
		{
			this.setupContext();
			if (this.context != null) {
				this.context.async = true;
			}
			this.scheduleStep();
		}
	}
	triangulate(): void {
		{
			this.setupContext();
			if (this.context != null) {
				this.context.async = false;
			}
			this.scheduleStep();
		}
	}
	private setupContext(): void {
		let count = this._count;
		let xColumn = this._xColumn;
		let yColumn = this._yColumn;
		let result: List$1<Triangle> = new List$1<Triangle>((<any>Triangle).$type, 0);
		let indices: List$1<number> = ((() => {
			let $ret = new List$1<number>(Number_$type, 0);
			$ret.capacity = count;
			return $ret;
		})());
		let distinctPoints: HashSet$1<Point> = new HashSet$1<Point>(Point_$type, 2, new PointComparer());
		for (let i: number = 0; i < count; ++i) {
			let xx: number = xColumn.item(i), yy: number = yColumn.item(i);
			if (isNaN_(xx) || isNaN_(yy) || isInfinity(xx) || isInfinity(yy)) {
				continue;
			}
			let pp: Point = <Point>{ $type: Point_$type, x: xx, y: yy };
			if (distinctPoints.contains(pp)) {
				continue;
			}
			distinctPoints.add_1(pp);
			indices.add(i);
		}
		count = indices.count;
		if (count >= 3) {
			let comparison: (x: number, y: number) => number = (a: number, b: number) => {
				if (xColumn.item(a) < xColumn.item(b)) {
					return -1;
				} else if (xColumn.item(a) > xColumn.item(b)) {
					return 1;
				}
				if (yColumn.item(a) < yColumn.item(b)) {
					return -1;
				} else if (yColumn.item(a) > yColumn.item(b)) {
					return 1;
				}
				return 0;
			};
			indices.sort2(<(arg1: number, arg2: number) => number><any>comparison);
			let xmin: number = xColumn.item(indices._inner[0]);
			let xmax: number = xColumn.item(indices._inner[count - 1]);
			let ymin: number = yColumn.item(indices._inner[0]);
			let ymax: number = ymin;
			for (let i1: number = 1; i1 < count; i1++) {
				let yValue: number = yColumn.item(indices._inner[i1]);
				if (isNaN_(yValue)) {
					continue;
				}
				ymin = Math.min(ymin, yValue);
				ymax = Math.max(ymax, yValue);
			}
			let dx: number = xmax - xmin;
			let dy: number = ymax - ymin;
			let dmax: number = Math.max(dx, dy);
			let xmid: number = (xmax + xmin) / 2;
			let ymid: number = (ymax + ymin) / 2;
			let s0: Point = <Point>{ $type: Point_$type, x: xmid - 20 * dmax, y: ymid - dmax };
			let s1: Point = <Point>{ $type: Point_$type, x: xmid, y: ymid + 20 * dmax };
			let s2: Point = <Point>{ $type: Point_$type, x: xmid + 20 * dmax, y: ymid - dmax };
			let triangleList: LinkedList$1<Triangle> = new LinkedList$1<Triangle>((<any>Triangle).$type);
			let completedList: LinkedList$1<Triangle> = new LinkedList$1<Triangle>((<any>Triangle).$type);
			let edgeBuffer: HalfEdgeSet = new HalfEdgeSet();
			let pointTester: PointTester = new PointTester();
			triangleList.addFirst(((() => {
				let $ret = new Triangle();
				$ret.v1 = count;
				$ret.v2 = count + 1;
				$ret.v3 = count + 2;
				return $ret;
			})()));
			let context = new TriangulatorContext();
			context.count = count;
			context.s0 = s0;
			context.s1 = s1;
			context.s2 = s2;
			context.completedList = completedList;
			context.edgeBuffer = edgeBuffer;
			context.indices = indices;
			context.pointTester = pointTester;
			context.result = result;
			context.triangleList = triangleList;
			context.xColumn = xColumn;
			context.yColumn = yColumn;
			let numSteps: number = 1;
			if (count > 3000) {
				numSteps = 20;
			}
			context.stepSize = <number>truncate(Math.ceil(count / <number>numSteps));
			context.currentStart = 0;
			context.currentEnd = context.stepSize;
			this._status = 0;
			this.notifyStatus();
			this.context = context;
		}
	}
	private notifyStatus(): void {
		this.doNotifyStatus();
	}
	private doNotifyStatus(): void {
		if (this.triangulationStatusChanged != null) {
			this.triangulationStatusChanged(this, new TriangulationStatusEventArgs(this._status));
		}
	}
	getResult(): List$1<Triangle> {
		if (this.context == null) {
			return null;
		}
		return this.context.result;
	}
	private _context: TriangulatorContext = null;
	private get context(): TriangulatorContext {
		return this._context;
	}
	private set context(value: TriangulatorContext) {
		this._context = value;
	}
	private step(): void {
		{
			if (this.context == null) {
				return;
			}
			let context = this.context;
			let count = this.context.count;
			let xColumn = this.context.xColumn;
			let yColumn = this.context.yColumn;
			let indices = this.context.indices;
			let s0 = this.context.s0;
			let s1 = this.context.s1;
			let s2 = this.context.s2;
			let result = this.context.result;
			let triangleList = this.context.triangleList;
			let completedList = this.context.completedList;
			let pointTester = this.context.pointTester;
			let edgeBuffer = this.context.edgeBuffer;
			let currentStart = this.context.currentStart;
			let currentEnd = this.context.currentEnd;
			let px: number;
			let py: number;
			let v1index: number;
			let v1x: number;
			let v1y: number;
			let v2index: number;
			let v2x: number;
			let v2y: number;
			let v3index: number;
			let v3x: number;
			let v3y: number;
			let currentTriangle: Triangle;
			for (let i: number = currentStart; i < currentEnd; ++i) {
				edgeBuffer.clear();
				if (i < count) {
					px = xColumn.item(indices._inner[i]);
					py = yColumn.item(indices._inner[i]);
				} else if (i == count) {
					px = s0.x;
					py = s0.y;
				} else if (i == count + 1) {
					px = s1.x;
					py = s1.y;
				} else {
					px = s2.x;
					py = s2.y;
				}
				let next: LinkedListNode$1<Triangle> = null;
				for (let curr = triangleList.first; curr != null; curr = next) {
					next = curr.next;
					currentTriangle = curr.value;
					v1index = currentTriangle.v1;
					v2index = currentTriangle.v2;
					v3index = currentTriangle.v3;
					if (v1index < count) {
						v1x = xColumn.item(indices._inner[v1index]);
						v1y = yColumn.item(indices._inner[v1index]);
					} else if (v1index == count) {
						v1x = s0.x;
						v1y = s0.y;
					} else if (v1index == count + 1) {
						v1x = s1.x;
						v1y = s1.y;
					} else {
						v1x = s2.x;
						v1y = s2.y;
					}
					if (v2index < count) {
						v2x = xColumn.item(indices._inner[v2index]);
						v2y = yColumn.item(indices._inner[v2index]);
					} else if (v2index == count) {
						v2x = s0.x;
						v2y = s0.y;
					} else if (v2index == count + 1) {
						v2x = s1.x;
						v2y = s1.y;
					} else {
						v2x = s2.x;
						v2y = s2.y;
					}
					if (v3index < count) {
						v3x = xColumn.item(indices._inner[v3index]);
						v3y = yColumn.item(indices._inner[v3index]);
					} else if (v3index == count) {
						v3x = s0.x;
						v3y = s0.y;
					} else if (v3index == count + 1) {
						v3x = s1.x;
						v3y = s1.y;
					} else {
						v3x = s2.x;
						v3y = s2.y;
					}
					pointTester.test(px, py, v1x, v1y, v2x, v2y, v3x, v3y);
					if (pointTester.complete) {
						completedList.addLast(currentTriangle);
						triangleList.remove(curr);
					}
					if (pointTester.inside) {
						let e: HalfEdge;
						e = new HalfEdge(v1index, v2index);
						if (edgeBuffer.contains(e)) {
							edgeBuffer.remove(e);
						} else {
							edgeBuffer.add(e);
						}
						e = new HalfEdge(v2index, v3index);
						if (edgeBuffer.contains(e)) {
							edgeBuffer.remove(e);
						} else {
							edgeBuffer.add(e);
						}
						e = new HalfEdge(v3index, v1index);
						if (edgeBuffer.contains(e)) {
							edgeBuffer.remove(e);
						} else {
							edgeBuffer.add(e);
						}
						triangleList.remove(curr);
					}
				}
				for (let edge of fromEnum<HalfEdge>(edgeBuffer)) {
					let newTriangle: Triangle = new Triangle();
					newTriangle.v1 = edge.b;
					newTriangle.v2 = edge.e;
					newTriangle.v3 = i;
					triangleList.addLast(newTriangle);
				}
			}
			if (currentEnd == count) {
				for (let curr1 = completedList.first; curr1 != null; curr1 = curr1.next) {
					currentTriangle = curr1.value;
					if (currentTriangle.v1 < count && currentTriangle.v2 < count && currentTriangle.v3 < count) {
						result.add(((() => {
							let $ret = new Triangle();
							$ret.v1 = indices._inner[currentTriangle.v1];
							$ret.v2 = indices._inner[currentTriangle.v2];
							$ret.v3 = indices._inner[currentTriangle.v3];
							return $ret;
						})()));
					}
				}
				for (let curr2 = triangleList.first; curr2 != null; curr2 = curr2.next) {
					currentTriangle = curr2.value;
					if (currentTriangle.v1 < count && currentTriangle.v2 < count && currentTriangle.v3 < count) {
						result.add(((() => {
							let $ret = new Triangle();
							$ret.v1 = indices._inner[currentTriangle.v1];
							$ret.v2 = indices._inner[currentTriangle.v2];
							$ret.v3 = indices._inner[currentTriangle.v3];
							return $ret;
						})()));
					}
				}
				this._status = 100;
				this.notifyStatus();
			} else {
				currentStart = currentEnd;
				currentEnd += context.stepSize;
				if (currentEnd > count) {
					currentEnd = count;
				}
				context.currentStart = currentStart;
				context.currentEnd = currentEnd;
				this._status += <number>truncate(Math.floor(100 / 20));
				this.notifyStatus();
				this.scheduleStep();
			}
		}
	}
	cancel(): void {
		{
			this.context = null;
		}
	}
	private scheduleStep(): void {
		{
			if (this.context != null && this.context.async) {
				window.setTimeout(runOn(this, this.step), 0);
			} else {
				this.step();
			}
		}
	}
	private _status: number = 0;
	get status(): number {
		return this._status;
	}
	triangulationStatusChanged: (sender: any, args: TriangulationStatusEventArgs) => void = null;
}


