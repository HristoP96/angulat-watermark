/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { QuadTreeBoundingBox } from "./QuadTreeBoundingBox";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { LinkedListNode$1 } from "./LinkedListNode$1";
import { LinkedList$1 } from "./LinkedList$1";
import { QuadTreeForceVector } from "./QuadTreeForceVector";

/**
 * @hidden 
 */
export class QuadTree extends Base {
	static $t: Type = markType(QuadTree, 'QuadTree');
	constructor(width: number, height: number, maxDepthValue: number, nodeCapacity: number) {
		super();
		this.root = new QuadTreeNode();
		this.root.owner = this;
		this.root.box = new QuadTreeBoundingBox();
		let dim = Math.max(width, height);
		this.root.box.centerX = dim / 2;
		this.root.box.centerY = dim / 2;
		this.root.box.halfWidth = dim / 2;
		this.root.box.halfHeight = dim / 2;
		this.capacity = nodeCapacity;
		this.maxDepth = maxDepthValue;
	}
	private _root: QuadTreeNode = null;
	private get root(): QuadTreeNode {
		return this._root;
	}
	private set root(value: QuadTreeNode) {
		this._root = value;
	}
	capacity: number = 0;
	maxDepth: number = 0;
	insert(p: QuadTreeBoundingBox): boolean {
		return this.root.insert(p);
	}
	remove(p: QuadTreeBoundingBox): boolean {
		return this.root.remove(p);
	}
	findLeaves(p: QuadTreeBoundingBox): List$1<QuadTreeNode> {
		let ret: List$1<QuadTreeNode> = new List$1<QuadTreeNode>((<any>QuadTreeNode).$type, 0);
		this.root.findLeaves(p, ret);
		return ret;
	}
	cleanup(): void {
		this.root.checkEmpty();
	}
	updateCenterOfMass(): void {
		this.root.updateCenterOfMass();
	}
	distinctCount(): number {
		return this.distinctCountHelper(this.root, new HashSet$1<QuadTreeBoundingBox>((<any>QuadTreeBoundingBox).$type, 0));
	}
	distinctCountHelper(node: QuadTreeNode, seen: HashSet$1<QuadTreeBoundingBox>): number {
		if (node.isLeaf) {
			let count: number = 0;
			let p = node.points.first;
			while (p != null) {
				if (!seen.contains(p.value)) {
					count += 1;
					seen.add_1(p.value);
				}
				p = p.next;
			}
			return count;
		}
		let sum: number = this.distinctCountHelper(node.nW, seen);
		sum += this.distinctCountHelper(node.nE, seen);
		sum += this.distinctCountHelper(node.sW, seen);
		sum += this.distinctCountHelper(node.sE, seen);
		return sum;
	}
	getForceVectorForPoint(targetX: number, targetY: number, ratio: number): QuadTreeForceVector {
		return this.root.getForceVectorForPoint(targetX, targetY, ratio);
	}
}

/**
 * @hidden 
 */
export class QuadTreeNode extends Base {
	static $t: Type = markType(QuadTreeNode, 'QuadTreeNode');
	constructor() {
		super();
		this.centerOfMassX = 0;
		this.centerOfMassY = 0;
		this.mass = 0;
		this.points = new LinkedList$1<QuadTreeBoundingBox>((<any>QuadTreeBoundingBox).$type);
		this.children = <QuadTreeNode[]>new Array(4);
		this.box = new QuadTreeBoundingBox();
		for (let i = 0; i < QuadTreeNode.childrenCount; i++) {
			this.children[i] = null;
		}
	}
	remove(p: QuadTreeBoundingBox): boolean {
		if (!this.box.intersect(p)) {
			return false;
		}
		let isLeaf: boolean = this.nW == null && this.nE == null && this.sW == null && this.sE == null;
		if (isLeaf) {
			let currPoint = this.points.first;
			while (currPoint != null) {
				if (currPoint.value == p) {
					this.points.remove(currPoint);
					this.pointsCount--;
					return true;
				}
				currPoint = currPoint.next;
			}
			return false;
		}
		this.nW.remove(p);
		this.nE.remove(p);
		this.sW.remove(p);
		this.sE.remove(p);
		return false;
	}
	get isLeaf(): boolean {
		return this.nW == null && this.nE == null && this.sW == null && this.sE == null;
	}
	findLeaves(bbox: QuadTreeBoundingBox, leaves: List$1<QuadTreeNode>): void {
		if (!this.box.intersect(bbox)) {
			return;
		}
		if (this.isLeaf) {
			leaves.add(this);
			return;
		}
		this.nW.findLeaves(bbox, leaves);
		this.nE.findLeaves(bbox, leaves);
		this.sW.findLeaves(bbox, leaves);
		this.sE.findLeaves(bbox, leaves);
	}
	checkEmpty(): void {
		if (this.nW != null) {
			this.nW.checkEmpty();
		}
		if (this.nE != null) {
			this.nE.checkEmpty();
		}
		if (this.sW != null) {
			this.sW.checkEmpty();
		}
		if (this.sE != null) {
			this.sW.checkEmpty();
		}
		if (this.nW.isLeaf && this.nW.pointsCount == 0 && this.nE.isLeaf && this.nE.pointsCount == 0 && this.sW.isLeaf && this.sW.pointsCount == 0 && this.sE.isLeaf && this.sE.pointsCount == 0) {
			this.nW = null;
			this.nE = null;
			this.sW = null;
			this.sE = null;
			return;
		}
	}
	insert(p: QuadTreeBoundingBox): boolean {
		if (!this.box.intersect(p)) {
			return false;
		}
		let isLeaf: boolean = this.nW == null && this.nE == null && this.sW == null && this.sE == null;
		if (isLeaf && this.pointsCount < this.owner.capacity) {
			this.points.addLast(p);
			this.pointsCount++;
			return true;
		} else if (isLeaf && this.depth < this.owner.maxDepth) {
			this.subDivide();
		} else if (isLeaf) {
			this.points.addLast(p);
			this.pointsCount++;
			return true;
		}
		let inserted: boolean = this.nW.insert(p);
		inserted = this.nE.insert(p) || inserted;
		inserted = this.sW.insert(p) || inserted;
		inserted = this.sE.insert(p) || inserted;
		return inserted;
	}
	private subDivide(): void {
		this.nW = new QuadTreeNode();
		this.nE = new QuadTreeNode();
		this.sW = new QuadTreeNode();
		this.sE = new QuadTreeNode();
		let quarterWidth: number = this.box.halfWidth / 2;
		this.nW.box.centerX = this.box.centerX - quarterWidth;
		this.nW.box.centerY = this.box.centerY - quarterWidth;
		this.nE.box.centerX = this.box.centerX + quarterWidth;
		this.nE.box.centerY = this.box.centerY - quarterWidth;
		this.sW.box.centerX = this.box.centerX - quarterWidth;
		this.sW.box.centerY = this.box.centerY + quarterWidth;
		this.sE.box.centerX = this.box.centerX + quarterWidth;
		this.sE.box.centerY = this.box.centerY + quarterWidth;
		for (let i = 0; i < QuadTreeNode.childrenCount; i++) {
			this.children[i].depth = this.depth + 1;
			this.children[i].box.halfWidth = quarterWidth;
			this.children[i].box.halfHeight = quarterWidth;
			this.children[i].owner = this.owner;
		}
		let curr = this.points.first;
		while (curr != null) {
			let p = curr.value;
			this.nW.insert(p);
			this.nE.insert(p);
			this.sW.insert(p);
			this.sE.insert(p);
			curr = curr.next;
		}
		this.points.clear();
		this.pointsCount = 0;
	}
	updateCenterOfMass(): void {
		if (this.isLeaf) {
			let sumX: number = 0;
			let sumY: number = 0;
			let currPoint = this.points.first;
			while (currPoint != null) {
				let p = currPoint.value;
				sumX += p.centerX;
				sumY += p.centerY;
				currPoint = currPoint.next;
			}
			if (this.pointsCount == 0) {
				this.centerOfMassX = 0;
				this.centerOfMassY = 0;
				this.mass = 0;
			} else {
				this.centerOfMassX = sumX / this.pointsCount;
				this.centerOfMassY = sumY / this.pointsCount;
				this.mass = this.pointsCount;
			}
		} else {
			this.nW.updateCenterOfMass();
			this.sW.updateCenterOfMass();
			this.nE.updateCenterOfMass();
			this.sE.updateCenterOfMass();
			let sumX1: number = 0;
			let sumY1: number = 0;
			let totalMass: number = 0;
			for (let i = 0; i < QuadTreeNode.childrenCount; i++) {
				totalMass += this.children[i].mass;
				sumX1 += this.children[i].centerOfMassX * this.children[i].mass;
				sumY1 += this.children[i].centerOfMassY * this.children[i].mass;
			}
			if (this.mass > 0) {
				this.centerOfMassX = sumX1 / totalMass;
				this.centerOfMassY = sumY1 / totalMass;
			}
			this.mass = totalMass;
		}
	}
	getForceVectorForPoint(targetX: number, targetY: number, ratio: number): QuadTreeForceVector {
		let dist = Math.sqrt((targetX - this.centerOfMassX) * (targetX - this.centerOfMassX) + (targetY - this.centerOfMassY) * (targetY - this.centerOfMassY));
		let width = this.box.halfWidth * 2;
		if (width / dist < ratio || this.isLeaf) {
			let fx = (targetX - this.centerOfMassX) * this.mass / (dist * dist);
			let fy = (targetY - this.centerOfMassY) * this.mass / (dist * dist);
			return ((() => {
				let $ret = new QuadTreeForceVector();
				$ret.x = fx;
				$ret.y = fy;
				return $ret;
			})());
		} else {
			let sumX: number = 0;
			let sumY: number = 0;
			for (let i = 0; i < QuadTreeNode.childrenCount; i++) {
				let f = this.children[i].getForceVectorForPoint(targetX, targetY, ratio);
				sumX += f.x;
				sumY += f.y;
			}
			return ((() => {
				let $ret = new QuadTreeForceVector();
				$ret.x = sumX;
				$ret.y = sumY;
				return $ret;
			})());
		}
	}
	owner: QuadTree = null;
	points: LinkedList$1<QuadTreeBoundingBox> = null;
	pointsCount: number = 0;
	box: QuadTreeBoundingBox = null;
	static readonly nWIndex: number = 0;
	static readonly nEIndex: number = 1;
	static readonly sWIndex: number = 2;
	static readonly sEIndex: number = 3;
	static readonly childrenCount: number = 4;
	depth: number = 0;
	children: QuadTreeNode[] = null;
	get nW(): QuadTreeNode {
		return this.children[QuadTreeNode.nWIndex];
	}
	set nW(value: QuadTreeNode) {
		this.children[QuadTreeNode.nWIndex] = value;
	}
	get nE(): QuadTreeNode {
		return this.children[QuadTreeNode.nEIndex];
	}
	set nE(value: QuadTreeNode) {
		this.children[QuadTreeNode.nEIndex] = value;
	}
	get sW(): QuadTreeNode {
		return this.children[QuadTreeNode.sWIndex];
	}
	set sW(value: QuadTreeNode) {
		this.children[QuadTreeNode.sWIndex] = value;
	}
	get sE(): QuadTreeNode {
		return this.children[QuadTreeNode.sEIndex];
	}
	set sE(value: QuadTreeNode) {
		this.children[QuadTreeNode.sEIndex] = value;
	}
	centerOfMassX: number = 0;
	centerOfMassY: number = 0;
	mass: number = 0;
}


