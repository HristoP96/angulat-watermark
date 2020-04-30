/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Point, ICollection$1, ICollection$1_$type, Type, markType } from "./type";
import { EdgeClipper } from "./EdgeClipper";
import { LeftClipper } from "./LeftClipper";
import { BottomClipper } from "./BottomClipper";
import { RightClipper } from "./RightClipper";
import { TopClipper } from "./TopClipper";
import { Rect } from "./Rect";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class Clipper extends Base {
	static $t: Type = markType(Clipper, 'Clipper');
	get target(): IList$1<Point> {
		return this._target;
	}
	set target(value: IList$1<Point>) {
		if (this._firstClipper != null) {
			this._firstClipper.clear();
		}
		this._firstClipper = null;
		this._target = value;
		let headVal: IList$1<Point> = this._target;
		if (this.leftClipper != null) {
			this.leftClipper.dst = headVal;
			headVal = this.leftClipper;
			this._firstClipper = this.leftClipper;
		}
		if (this.bottomClipper != null) {
			this.bottomClipper.dst = headVal;
			headVal = this.bottomClipper;
			this.bottomClipper._nextClipper = this._firstClipper;
			this._firstClipper = this.bottomClipper;
		}
		if (this.rightClipper != null) {
			this.rightClipper.dst = headVal;
			headVal = this.rightClipper;
			this.rightClipper._nextClipper = this._firstClipper;
			this._firstClipper = this.rightClipper;
		}
		if (this.topClipper != null) {
			this.topClipper.dst = headVal;
			headVal = this.topClipper;
			this.topClipper._nextClipper = this._firstClipper;
			this._firstClipper = this.topClipper;
		}
		this.head = headVal;
	}
	private head: IList$1<Point> = null;
	private _firstClipper: EdgeClipper = null;
	private _target: IList$1<Point> = null;
	private leftClipper: LeftClipper = null;
	private bottomClipper: BottomClipper = null;
	private rightClipper: RightClipper = null;
	private topClipper: TopClipper = null;
	constructor(initNumber: number, clip: Rect, isClosed: boolean);
	constructor(initNumber: number, left: number, bottom: number, right: number, top: number, isClosed: boolean);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let clip: Rect = <Rect>_rest[0];
				let isClosed: boolean = <boolean>_rest[1];
				this.leftClipper = ((() => {
					let $ret = new LeftClipper();
					$ret.edge = clip.left;
					$ret.isClosed = isClosed;
					return $ret;
				})());
				this.bottomClipper = ((() => {
					let $ret = new BottomClipper();
					$ret.edge = clip.bottom;
					$ret.isClosed = isClosed;
					return $ret;
				})());
				this.rightClipper = ((() => {
					let $ret = new RightClipper();
					$ret.edge = clip.right;
					$ret.isClosed = isClosed;
					return $ret;
				})());
				this.topClipper = ((() => {
					let $ret = new TopClipper();
					$ret.edge = clip.top;
					$ret.isClosed = isClosed;
					return $ret;
				})());
			}
			break;

			case 1:
			{
				let left: number = <number>_rest[0];
				let bottom: number = <number>_rest[1];
				let right: number = <number>_rest[2];
				let top: number = <number>_rest[3];
				let isClosed: boolean = <boolean>_rest[4];
				this.leftClipper = !isNaN_(left) ? ((() => {
					let $ret = new LeftClipper();
					$ret.edge = left;
					$ret.isClosed = isClosed;
					return $ret;
				})()) : null;
				this.bottomClipper = !isNaN_(bottom) ? ((() => {
					let $ret = new BottomClipper();
					$ret.edge = bottom;
					$ret.isClosed = isClosed;
					return $ret;
				})()) : null;
				this.rightClipper = !isNaN_(right) ? ((() => {
					let $ret = new RightClipper();
					$ret.edge = right;
					$ret.isClosed = isClosed;
					return $ret;
				})()) : null;
				this.topClipper = !isNaN_(top) ? ((() => {
					let $ret = new TopClipper();
					$ret.edge = top;
					$ret.isClosed = isClosed;
					return $ret;
				})()) : null;
			}
			break;

		}

	}
	add(point: Point): void {
		this.head.add(point);
	}
	bulkAdd(points: IList$1<Point>, inReverseOrder: boolean): void {
		let pts = points;
		let pointsCount = points.count;
		let clippers = <EdgeClipper[]>new Array(4);
		clippers[0] = this.topClipper;
		clippers[1] = this.rightClipper;
		clippers[2] = this.bottomClipper;
		clippers[3] = this.leftClipper;
		let topEdge: number = 0;
		let rightEdge: number = 0;
		let bottomEdge: number = 0;
		let leftEdge: number = 0;
		if (this.topClipper != null) {
			topEdge = this.topClipper.edge;
		}
		if (this.rightClipper != null) {
			rightEdge = this.rightClipper.edge;
		}
		if (this.bottomClipper != null) {
			bottomEdge = this.bottomClipper.edge;
		}
		if (this.leftClipper != null) {
			leftEdge = this.leftClipper.edge;
		}
		let isInside: boolean = false;
		let j: number;
		let clippersCount: number = clippers.length;
		let fullCount: number = clippersCount + 1;
		let currClipper: EdgeClipper = null;
		let cur: Point;
		let k: number;
		let pointListCount: number = 0;
		let pointList: Point[] = <Point[]>new Array(16);
		let nextPointListCount: number = 0;
		let nextPointList: Point[] = <Point[]>new Array(16);
		let startPosition: number = 0;
		let dir: number = 1;
		let currY: number;
		let currX: number;
		if (inReverseOrder) {
			startPosition = pointsCount - 1;
			dir = -1;
		}
		for (let i = startPosition; i < pointsCount && i >= 0; i += dir) {
			cur = pts.item(i);
			pointList[pointListCount] = cur;
			pointListCount++;
			for (j = 0; j < fullCount; j++) {
				if (j < clippersCount) {
					currClipper = clippers[j];
					if (currClipper == null) {
						continue;
					}
				}
				for (k = 0; k < pointListCount; k++) {
					cur = pointList[k];
					currX = cur.x;
					currY = cur.y;
					if (j >= clippersCount) {
						this._target.add(cur);
						continue;
					}
					isInside = (j == 0 && currY >= topEdge) || (j == 1 && currX <= rightEdge) || (j == 2 && currY <= bottomEdge) || (j == 3 && currX >= leftEdge);
					if (currClipper.init) {
						currClipper.init = false;
						currClipper.first = cur;
					} else {
						if (true) {
							if (isInside) {
								if (!currClipper.prevInside) {
									nextPointList[nextPointListCount] = currClipper.intersection(currClipper.prev, cur);
									nextPointListCount++;
								} else {
									if (!currClipper.isClosed && !currClipper.isOutput) {
										nextPointList[nextPointListCount] = currClipper.prev;
										nextPointListCount++;
										currClipper.isOutput = true;
									}
								}
								nextPointList[nextPointListCount] = cur;
								nextPointListCount++;
							} else {
								if (currClipper.prevInside) {
									if (!currClipper.isClosed && !currClipper.isOutput) {
										nextPointList[nextPointListCount] = currClipper.prev;
										nextPointListCount++;
										currClipper.isOutput = true;
									}
									nextPointList[nextPointListCount] = currClipper.intersection(currClipper.prev, cur);
									nextPointListCount++;
								}
							}
						}
					}
					currClipper.prev = cur;
					currClipper.prevInside = isInside;
				}
				let swap = pointList;
				pointList = nextPointList;
				nextPointList = swap;
				pointListCount = nextPointListCount;
				nextPointListCount = 0;
			}
		}
	}
	get isClosed(): boolean {
		return (this.leftClipper == null || this.leftClipper.isClosed) && (this.bottomClipper == null || this.bottomClipper.isClosed) && (this.rightClipper == null || this.rightClipper.isClosed) && (this.topClipper == null || this.topClipper.isClosed);
	}
	set isClosed(value: boolean) {
		if (this.leftClipper != null) {
			this.leftClipper.isClosed = value;
		}
		if (this.bottomClipper != null) {
			this.bottomClipper.isClosed = value;
		}
		if (this.rightClipper != null) {
			this.rightClipper.isClosed = value;
		}
		if (this.topClipper != null) {
			this.topClipper.isClosed = value;
		}
	}
}


