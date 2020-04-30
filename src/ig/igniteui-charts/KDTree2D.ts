/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, EventArgs, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, runOn, Type, markType } from "igniteui-core/type";
import { KDTreeNode2D } from "./KDTreeNode2D";
import { KDPointData } from "./KDPointData";
import { Random } from "igniteui-core/Random";
import { KDTreeThunk } from "./KDTreeThunk";
import { Stack$1 } from "igniteui-core/Stack$1";
import { List$1 } from "igniteui-core/List$1";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { KNearestResults } from "./KNearestResults";
import { KNearestResult } from "./KNearestResult";
import { SearchArgs } from "./SearchArgs";
import { SearchData } from "./SearchData";
import { intDivide, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class KDTree2D extends Base {
	static $t: Type = markType(KDTree2D, 'KDTree2D');
	constructor(initNumber: number, points: KDPointData[], maxLeafSize: number);
	constructor(initNumber: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let points: KDPointData[] = <KDPointData[]>_rest[0];
				let maxLeafSize: number = <number>_rest[1];
				this.root = this.kDTreeHelper(points, 0, points.length - 1, 0, maxLeafSize);
			}
			break;

			case 1: break;
		}

	}
	protected _progressivePoints: KDPointData[] = null;
	protected _progressiveThunks: Stack$1<KDTreeThunk> = null;
	protected _toProcess: List$1<KDTreeThunk> = null;
	private _currentProgressiveLevel: number = 0;
	private _lock: any = {};
	get syncLock(): any {
		return this._lock;
	}
	progressiveThunkCompleted: (sender: any, e: EventArgs) => void = null;
	static getProgressive(points: KDPointData[], maxLeafSize: number): KDTree2D {
		let ret = new KDTree2D(1);
		ret.root = new KDTreeNode2D();
		ret.root.unfinished = true;
		ret._progressivePoints = points;
		ret._progressiveThunks = new Stack$1<KDTreeThunk>((<any>KDTreeThunk).$type);
		ret._toProcess = new List$1<KDTreeThunk>((<any>KDTreeThunk).$type, 0);
		let thunk: KDTreeThunk = new KDTreeThunk();
		thunk.startIndex = 0;
		thunk.endIndex = points.length - 1;
		thunk.level = 0;
		thunk.maxLeafSize = maxLeafSize;
		thunk.node = ret.root;
		ret._progressiveThunks.push(thunk);
		return ret;
	}
	progressiveStep(renderer: DomRenderer): boolean {
		if (this._progressiveThunks.count == 0 && this._toProcess.count == 0) {
			this._progressivePoints = null;
			return false;
		}
		if (this._progressiveThunks.count == 0 && this._toProcess.count > 0) {
			return true;
		}
		this._currentProgressiveLevel = this._progressiveThunks.peek().level;
		while (this._progressiveThunks.count > 0 && this._progressiveThunks.peek().level == this._currentProgressiveLevel) {
			this._toProcess.add(this._progressiveThunks.pop());
		}
		if (renderer != null) {
			renderer.setTimeout(runOn(this, this.processThunks), 0);
		} else {
			window.setTimeout(runOn(this, this.processThunks), 0);
		}
		return true;
	}
	private _isCancelled: boolean = false;
	cancelLoad(): void {
		this._isCancelled = true;
	}
	private processThunks(): void {
		let t: KDTreeThunk;
		for (let i = 0; i < this._toProcess.count; i++) {
			if (this._isCancelled || this._progressivePoints == null) {
				return;
			}
			if (this._progressivePoints.length == 0) {
				continue;
			}
			t = this._toProcess._inner[i];
			this.kDTreeHelperProgressive(t.node, this._progressivePoints, t.startIndex, t.endIndex, t.level, t.maxLeafSize);
		}
		this._toProcess.clear();
		if (this.progressiveThunkCompleted != null) {
			this.progressiveThunkCompleted(this, new EventArgs());
		}
	}
	private kDTreeHelperProgressive(node: KDTreeNode2D, points: KDPointData[], startIndex: number, endIndex: number, level: number, maxLeafSize: number): void {
		node.unfinished = false;
		node.isX = (level % 2) == 0;
		node.descendantCount = (endIndex - startIndex);
		if (startIndex == endIndex) {
			node.median = points[startIndex];
			return;
		}
		if (startIndex > endIndex) {
			node.unfinished = true;
			return;
		}
		if ((endIndex - startIndex) + 1 <= maxLeafSize) {
			node.median = points[startIndex];
			node.otherPoints = <KDPointData[]>new Array((endIndex - startIndex) + 1);
			let j: number = 0;
			for (let i: number = startIndex; i <= endIndex; i++) {
				node.otherPoints[j++] = points[i];
			}
			return;
		}
		let k = Math.max(intDivide((endIndex - startIndex), 2), 1);
		let medianIndex: number = this.select(points, startIndex, endIndex, node.isX, k);
		node.median = points[medianIndex];
		if (startIndex <= medianIndex - 1) {
			node.leftChild = ((() => {
				let $ret = new KDTreeNode2D();
				$ret.unfinished = true;
				return $ret;
			})());
			node.leftChild.descendantCount = ((medianIndex - 1) - startIndex) + 1;
			this._progressiveThunks.push(((() => {
				let $ret = new KDTreeThunk();
				$ret.startIndex = startIndex;
				$ret.endIndex = medianIndex - 1;
				$ret.level = level + 1;
				$ret.maxLeafSize = maxLeafSize;
				$ret.node = node.leftChild;
				return $ret;
			})()));
		} else {
			node.leftChild = null;
		}
		if (medianIndex + 1 <= endIndex) {
			node.rightChild = ((() => {
				let $ret = new KDTreeNode2D();
				$ret.unfinished = true;
				return $ret;
			})());
			node.rightChild.descendantCount = (endIndex - (medianIndex + 1)) + 1;
			this._progressiveThunks.push(((() => {
				let $ret = new KDTreeThunk();
				$ret.startIndex = medianIndex + 1;
				$ret.endIndex = endIndex;
				$ret.level = level + 1;
				$ret.maxLeafSize = maxLeafSize;
				$ret.node = node.rightChild;
				return $ret;
			})()));
		} else {
			node.rightChild = null;
		}
	}
	private kDTreeHelper(points: KDPointData[], startIndex: number, endIndex: number, level: number, maxLeafSize: number): KDTreeNode2D {
		let node = new KDTreeNode2D();
		node.isX = (level % 2) == 0;
		node.descendantCount = (endIndex - startIndex);
		if (startIndex == endIndex) {
			node.median = points[startIndex];
			return node;
		}
		if (startIndex > endIndex) {
			return null;
		}
		if ((endIndex - startIndex) + 1 <= maxLeafSize) {
			node.median = points[startIndex];
			node.otherPoints = <KDPointData[]>new Array(endIndex - startIndex + 1);
			let j: number = 0;
			for (let i: number = startIndex; i <= endIndex; i++) {
				node.otherPoints[j++] = points[i];
			}
			return node;
		}
		let k = Math.max(intDivide((endIndex - startIndex), 2), 1);
		let medianIndex: number = this.select(points, startIndex, endIndex, node.isX, k);
		node.median = points[medianIndex];
		node.leftChild = this.kDTreeHelper(points, startIndex, medianIndex - 1, level + 1, maxLeafSize);
		node.rightChild = this.kDTreeHelper(points, medianIndex + 1, endIndex, level + 1, maxLeafSize);
		return node;
	}
	private partition(points: KDPointData[], isX: boolean, startIndex: number, endIndex: number, pivotIndex: number): number {
		let pivotValue = isX ? points[pivotIndex].x : points[pivotIndex].y;
		let temp = points[pivotIndex];
		points[pivotIndex] = points[endIndex];
		points[endIndex] = temp;
		let storeIndex: number = startIndex;
		for (let i = startIndex; i < endIndex; i++) {
			let val: number;
			if (isX) {
				val = points[i].x;
			} else {
				val = points[i].y;
			}
			if (val <= pivotValue) {
				temp = points[storeIndex];
				points[storeIndex] = points[i];
				points[i] = temp;
				storeIndex++;
			}
		}
		temp = points[endIndex];
		points[endIndex] = points[storeIndex];
		points[storeIndex] = temp;
		return storeIndex;
	}
	private _rand: Random = new Random(0);
	private select(points: KDPointData[], startIndex: number, endIndex: number, isX: boolean, k: number): number {
		if (startIndex == endIndex) {
			return startIndex;
		}
		let pivotIndex = this._rand.next2(startIndex, endIndex);
		let newIndex = this.partition(points, isX, startIndex, endIndex, pivotIndex);
		let pivotDistance = newIndex - startIndex + 1;
		if (pivotDistance == k) {
			return newIndex;
		} else if (k < pivotDistance) {
			return this.select(points, startIndex, newIndex - 1, isX, k);
		} else {
			return this.select(points, newIndex + 1, endIndex, isX, k - pivotDistance);
		}
	}
	kNearest(results: KNearestResults, xValue: number, yValue: number, k: number): void {
		this.kNearestHelper(results, xValue, yValue, k, this.root);
	}
	private kNearestHelper(results: KNearestResults, xValue: number, yValue: number, k: number, current: KDTreeNode2D): void {
		if (current == null || current.unfinished) {
			return;
		}
		if (current.leftChild == null && current.rightChild == null) {
			this.addNearest(results, xValue, yValue, current, current.median, true, 0, k);
			if (results.breakOut) {
				return;
			}
			if (current.otherPoints != null && current.otherPoints.length > 0) {
				for (let i = 0; i < current.otherPoints.length; i++) {
					this.addNearest(results, xValue, yValue, current, current.otherPoints[i], false, i, k);
					if (results.breakOut) {
						return;
					}
				}
			}
			return;
		}
		this.addNearest(results, xValue, yValue, current, current.median, true, 0, k);
		if (results.breakOut) {
			return;
		}
		if (current.isX) {
			if (xValue <= current.median.x) {
				this.kNearestHelper(results, xValue, yValue, k, current.leftChild);
				if (results.breakOut) {
					return;
				}
				if (this.dist(xValue, yValue, current.median.x, yValue) < results.currentFurthestDist) {
					this.kNearestHelper(results, xValue, yValue, k, current.rightChild);
				}
				if (results.breakOut) {
					return;
				}
			} else {
				this.kNearestHelper(results, xValue, yValue, k, current.rightChild);
				if (results.breakOut) {
					return;
				}
				if (this.dist(xValue, yValue, current.median.x, yValue) < results.currentFurthestDist) {
					this.kNearestHelper(results, xValue, yValue, k, current.leftChild);
				}
				if (results.breakOut) {
					return;
				}
			}
		} else {
			if (yValue <= current.median.y) {
				this.kNearestHelper(results, xValue, yValue, k, current.leftChild);
				if (results.breakOut) {
					return;
				}
				if (this.dist(xValue, yValue, xValue, current.median.y) < results.currentFurthestDist) {
					this.kNearestHelper(results, xValue, yValue, k, current.rightChild);
				}
				if (results.breakOut) {
					return;
				}
			} else {
				this.kNearestHelper(results, xValue, yValue, k, current.rightChild);
				if (results.breakOut) {
					return;
				}
				if (this.dist(xValue, yValue, xValue, current.median.y) < results.currentFurthestDist) {
					this.kNearestHelper(results, xValue, yValue, k, current.leftChild);
				}
				if (results.breakOut) {
					return;
				}
			}
		}
	}
	private addNearest(results: KNearestResults, xValue: number, yValue: number, current: KDTreeNode2D, pointData: KDPointData, isMedian: boolean, index: number, k: number): void {
		if (results.breakOut) {
			return;
		}
		if (results.consideredCount > results.consideredCutoff) {
			results.breakOut = true;
			return;
		}
		if (results.results.count < k) {
			if (isNaN_(results.currentNearestDist)) {
				results.currentNearestDist = this.dist(xValue, yValue, pointData.x, pointData.y);
				results.currentFurthestDist = results.currentNearestDist;
				results.currentFurthestIndex = 0;
			}
			results.results.add(((() => {
				let $ret = new KNearestResult();
				$ret.isMedian = isMedian;
				$ret.index = index;
				$ret.node = current;
				$ret.x = pointData.x;
				$ret.y = pointData.y;
				return $ret;
			})()));
			results.consideredCount++;
			let dist = this.dist(xValue, yValue, pointData.x, pointData.y);
			if (dist < results.currentNearestDist) {
				results.currentNearestDist = dist;
			}
			if (dist > results.currentFurthestDist) {
				results.currentFurthestDist = dist;
				results.currentFurthestIndex = results.results.count - 1;
			}
			return;
		}
		let newDist = 0;
		if (newDist < results.currentFurthestDist) {
			if (newDist < results.currentNearestDist) {
				results.currentNearestDist = newDist;
			}
			results.results._inner[results.currentFurthestIndex] = ((() => {
				let $ret = new KNearestResult();
				$ret.isMedian = isMedian;
				$ret.index = index;
				$ret.node = current;
				$ret.x = pointData.x;
				$ret.y = pointData.y;
				return $ret;
			})());
			let maxDist: number = 0;
			let maxIndex: number = 0;
			for (let i = 0; i < results.results.count; i++) {
				let currDist = this.dist(xValue, yValue, results.results._inner[i].x, results.results._inner[i].y);
				if (currDist > maxDist) {
					maxDist = currDist;
					maxIndex = i;
				}
			}
			results.consideredCount++;
		}
	}
	private dist(xValue: number, yValue: number, xValue2: number, yValue2: number): number {
		return (xValue - xValue2) * (xValue - xValue2) + (yValue - yValue2) * (yValue - yValue2);
	}
	getVisible(nodes: IList$1<KDTreeNode2D>, args: SearchArgs, xMinimum: number, xMaximum: number, yMinimum: number, yMaximum: number): void {
		this.getVisibleHelper(nodes, this.root, args, xMinimum, xMaximum, yMinimum, yMaximum, false, 0);
	}
	private getVisibleHelper(nodes: IList$1<KDTreeNode2D>, currentNode: KDTreeNode2D, args: SearchArgs, currentXMinimum: number, currentXMaximum: number, currentYMinimum: number, currentYMaximum: number, report: boolean, depth: number): void {
		if (currentNode == null) {
			return;
		}
		let sd = currentNode.searchData;
		if (depth > args.maxRenderDepth || ((currentYMaximum - currentYMinimum) < args.pixelSizeY && (currentXMaximum - currentXMinimum) < args.pixelSizeX)) {
			if (currentNode.searchData == null) {
				currentNode.searchData = new SearchData();
			}
			sd = currentNode.searchData;
			sd.isCutoff = true;
			sd.minX = currentXMinimum;
			sd.maxX = currentXMaximum;
			sd.minY = currentYMinimum;
			sd.maxY = currentYMaximum;
			nodes.add(currentNode);
			return;
		}
		if (sd != null) {
			sd.isCutoff = false;
		}
		if (currentNode.leftChild == null && currentNode.rightChild == null) {
			nodes.add(currentNode);
			return;
		}
		let leftXMinimum: number;
		let leftXMaximum: number;
		let leftYMinimum: number;
		let leftYMaximum: number;
		let rightXMinimum: number;
		let rightXMaximum: number;
		let rightYMinimum: number;
		let rightYMaximum: number;
		if (currentNode.isX) {
			leftXMinimum = currentXMinimum;
			leftXMaximum = currentNode.median.x;
			leftYMinimum = currentYMinimum;
			leftYMaximum = currentYMaximum;
			rightXMinimum = currentNode.median.x;
			rightXMaximum = currentXMaximum;
			rightYMinimum = currentYMinimum;
			rightYMaximum = currentYMaximum;
		} else {
			leftXMinimum = currentXMinimum;
			leftXMaximum = currentXMaximum;
			leftYMinimum = currentYMinimum;
			leftYMaximum = currentNode.median.y;
			rightXMinimum = currentXMinimum;
			rightXMaximum = currentXMaximum;
			rightYMinimum = currentNode.median.y;
			rightYMaximum = currentYMaximum;
		}
		if (report) {
			nodes.add(currentNode);
			this.getVisibleHelper(nodes, currentNode.leftChild, args, leftXMinimum, leftXMaximum, leftYMinimum, leftYMaximum, true, depth + 1);
			this.getVisibleHelper(nodes, currentNode.rightChild, args, rightXMinimum, rightXMaximum, rightYMinimum, rightYMaximum, true, depth + 1);
		} else {
			let addedCurrent: boolean = false;
			if (leftXMinimum >= args.minX && leftXMaximum <= args.maxX && leftYMinimum >= args.minY && leftYMaximum <= args.maxY) {
				addedCurrent = true;
				nodes.add(currentNode);
				this.getVisibleHelper(nodes, currentNode.leftChild, args, leftXMinimum, leftXMaximum, leftYMinimum, leftYMaximum, true, depth + 1);
			} else if (!(args.minX > leftXMaximum || args.maxX < leftXMinimum || args.minY > leftYMaximum || args.maxY < leftYMinimum)) {
				addedCurrent = true;
				nodes.add(currentNode);
				this.getVisibleHelper(nodes, currentNode.leftChild, args, leftXMinimum, leftXMaximum, leftYMinimum, leftYMaximum, false, depth + 1);
			}
			if (rightXMinimum >= args.minX && rightXMaximum <= args.maxX && rightYMinimum >= args.minY && rightYMaximum <= args.maxY) {
				if (!addedCurrent) {
					nodes.add(currentNode);
				}
				this.getVisibleHelper(nodes, currentNode.rightChild, args, rightXMinimum, rightXMaximum, rightYMinimum, rightYMaximum, true, depth + 1);
			} else if (!(args.minX > rightXMaximum || args.maxX < rightXMinimum || args.minY > rightYMaximum || args.maxY < rightYMinimum)) {
				if (!addedCurrent) {
					nodes.add(currentNode);
				}
				this.getVisibleHelper(nodes, currentNode.rightChild, args, rightXMinimum, rightXMaximum, rightYMinimum, rightYMaximum, false, depth + 1);
			}
		}
	}
	private _root: KDTreeNode2D = null;
	protected get root(): KDTreeNode2D {
		return this._root;
	}
	protected set root(value: KDTreeNode2D) {
		this._root = value;
	}
	validate(): void {
		this.validateHelper(this.root);
	}
	private validateHelper(Root: KDTreeNode2D): number {
		if (Root == null) {
			return 0;
		}
		if (this.validateHelper(Root.leftChild) + this.validateHelper(Root.rightChild) != Root.descendantCount) {
			let a: number = 0;
		}
		return Root.descendantCount + 1;
	}
}


