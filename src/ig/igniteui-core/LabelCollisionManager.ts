/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, runOn, Point_$type, Type, markType, PointUtil } from "./type";
import { List$1 } from "./List$1";
import { LabelCollisionPlacementPositions, LabelCollisionPlacementPositions_$type } from "./LabelCollisionPlacementPositions";
import { QuadTree } from "./QuadTree";
import { LabelCollisionManagerCollisionMode } from "./LabelCollisionManagerCollisionMode";
import { IExecutionContext } from "./IExecutionContext";
import { Rect } from "./Rect";
import { LinkedList$1 } from "./LinkedList$1";
import { LabelCollisionInfo } from "./LabelCollisionInfo";
import { QuadTreeBoundingBox } from "./QuadTreeBoundingBox";
import { LinkedListNode$1 } from "./LinkedListNode$1";
import { Random } from "./Random";
import { QuadTreeNode } from "./QuadTreeNode";
import { HashSet$1 } from "./HashSet$1";
import { QuadTreeForceVector } from "./QuadTreeForceVector";
import { GeometryUtil } from "./GeometryUtil";
import { truncate, isNaN_ } from "./number";

/**
 * @hidden 
 */
export class LabelCollisionManager extends Base {
	static $t: Type = markType(LabelCollisionManager, 'LabelCollisionManager');
	constructor(width: number, height: number, viewport: Rect, execution: IExecutionContext, positionPadding: number, mode: LabelCollisionManagerCollisionMode, topPriority: LabelCollisionPlacementPositions, annealingStepCount: number, annealingMilliseconds: number, allowLabelShifting: boolean) {
		super();
		this.viewport = viewport;
		this.width = width;
		this.height = height;
		this.tree = new QuadTree(width, height, 8, 8);
		this.mode = mode;
		this.execution = execution;
		this.preferredPlacements = new List$1<LabelCollisionPlacementPositions>(LabelCollisionPlacementPositions_$type, 0);
		this.preferredPlacements.add(LabelCollisionPlacementPositions.Top);
		this.preferredPlacements.add(LabelCollisionPlacementPositions.TopRight);
		this.preferredPlacements.add(LabelCollisionPlacementPositions.BottomRight);
		this.preferredPlacements.add(LabelCollisionPlacementPositions.Right);
		this.preferredPlacements.add(LabelCollisionPlacementPositions.Bottom);
		this.preferredPlacements.add(LabelCollisionPlacementPositions.BottomLeft);
		this.preferredPlacements.add(LabelCollisionPlacementPositions.Left);
		this.preferredPlacements.add(LabelCollisionPlacementPositions.TopLeft);
		this.preferredPlacements.remove(topPriority);
		this.preferredPlacements.insert(0, topPriority);
		this.positionPadding = positionPadding;
		this.annealingStepCount = annealingStepCount;
		this.annealingMilliseconds = annealingMilliseconds;
		this._allowLabelShifting = allowLabelShifting;
	}
	tryPosition(info: LabelCollisionInfo, position: LabelCollisionPlacementPositions, offsetX: number, offsetY: number, overrideBoundsCheck: boolean): QuadTreeBoundingBox {
		let centerX: number = 0;
		let centerY: number = 0;
		switch (position) {
			case LabelCollisionPlacementPositions.Top:
			centerX = info.targetX;
			centerY = (((info.targetY - info.targetHalfHeight) - info.labelHalfHeight) - this.positionPadding - offsetY);
			break;

			case LabelCollisionPlacementPositions.TopLeft:
			centerX = (((info.targetX - info.targetHalfWidth) - info.labelHalfWidth) - this.positionPadding) - offsetX;
			centerY = (((info.targetY - info.targetHalfHeight) - info.labelHalfHeight) - this.positionPadding) - offsetY;
			break;

			case LabelCollisionPlacementPositions.TopRight:
			centerX = (((info.targetX + info.targetHalfWidth) + info.labelHalfWidth) + this.positionPadding) + offsetX;
			centerY = (((info.targetY - info.targetHalfHeight) - info.labelHalfHeight) - this.positionPadding) - offsetY;
			break;

			case LabelCollisionPlacementPositions.Left:
			centerX = (((info.targetX - info.targetHalfWidth) - info.labelHalfWidth) - this.positionPadding) - offsetX;
			centerY = info.targetY;
			break;

			case LabelCollisionPlacementPositions.Right:
			centerX = (((info.targetX + info.targetHalfWidth) + info.labelHalfWidth) + this.positionPadding) + offsetX;
			centerY = info.targetY;
			break;

			case LabelCollisionPlacementPositions.Bottom:
			centerX = info.targetX;
			centerY = (((info.targetY + info.targetHalfHeight) + info.labelHalfHeight) + this.positionPadding) + offsetY;
			break;

			case LabelCollisionPlacementPositions.BottomLeft:
			centerX = (((info.targetX - info.targetHalfWidth) - info.labelHalfWidth) - this.positionPadding) - offsetX;
			centerY = (((info.targetY + info.targetHalfHeight) + info.labelHalfHeight) + this.positionPadding) + offsetY;
			break;

			case LabelCollisionPlacementPositions.BottomRight:
			centerX = (((info.targetX + info.targetHalfWidth) + info.labelHalfWidth) + this.positionPadding) + offsetX;
			centerY = (((info.targetY + info.targetHalfHeight) + info.labelHalfHeight) + this.positionPadding) - offsetY;
			break;

		}

		let box: QuadTreeBoundingBox = new QuadTreeBoundingBox();
		box.centerX = centerX;
		box.centerY = centerY;
		box.halfWidth = info.labelHalfWidth;
		box.halfHeight = info.labelHalfHeight;
		box.data = info;
		if (this.collidesWithEdge(box) && !overrideBoundsCheck) {
			return null;
		}
		return box;
	}
	private collidesWithEdge(box: QuadTreeBoundingBox): boolean {
		let left = box.centerX - box.halfWidth;
		let right = box.centerX + box.halfWidth;
		let top = box.centerY - box.halfHeight;
		let bottom = box.centerY + box.halfHeight;
		let viewport = this.viewport;
		if (left < viewport.left || right > viewport.right || top < viewport.top || bottom > viewport.bottom) {
			return true;
		}
		return false;
	}
	private _preferredPlacements: List$1<LabelCollisionPlacementPositions> = null;
	get preferredPlacements(): List$1<LabelCollisionPlacementPositions> {
		return this._preferredPlacements;
	}
	set preferredPlacements(value: List$1<LabelCollisionPlacementPositions>) {
		this._preferredPlacements = value;
	}
	labelsMoved: (movedLabels: List$1<LabelCollisionInfo>) => void = null;
	private _finished: () => void = null;
	get finished(): () => void {
		return this._finished;
	}
	set finished(value: () => void) {
		this._finished = value;
	}
	private _tree: QuadTree = null;
	private get tree(): QuadTree {
		return this._tree;
	}
	private set tree(value: QuadTree) {
		this._tree = value;
	}
	private _mode: LabelCollisionManagerCollisionMode = <LabelCollisionManagerCollisionMode>0;
	get mode(): LabelCollisionManagerCollisionMode {
		return this._mode;
	}
	set mode(value: LabelCollisionManagerCollisionMode) {
		this._mode = value;
	}
	private _execution: IExecutionContext = null;
	private get execution(): IExecutionContext {
		return this._execution;
	}
	private set execution(value: IExecutionContext) {
		this._execution = value;
	}
	private _positionPadding: number = 0;
	get positionPadding(): number {
		return this._positionPadding;
	}
	set positionPadding(value: number) {
		this._positionPadding = value;
	}
	private _annealingStepCount: number = 0;
	get annealingStepCount(): number {
		return this._annealingStepCount;
	}
	set annealingStepCount(value: number) {
		this._annealingStepCount = value;
	}
	private _annealingMilliseconds: number = 0;
	get annealingMilliseconds(): number {
		return this._annealingMilliseconds;
	}
	set annealingMilliseconds(value: number) {
		this._annealingMilliseconds = value;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private moveBox(box: QuadTreeBoundingBox, centerX: number, centerY: number, halfWidth: number, halfHeight: number): void {
		this.doMoveBox(box, centerX, centerY, halfWidth, halfHeight);
	}
	private doMoveBox(box: QuadTreeBoundingBox, centerX: number, centerY: number, halfWidth: number, halfHeight: number): void {
		this.tree.remove(box);
		box.centerX = centerX;
		box.centerY = centerY;
		box.halfWidth = halfWidth;
		box.halfHeight = halfHeight;
		this.tree.insert(box);
	}
	removeBox(box: QuadTreeBoundingBox): void {
		this.tree.remove(box);
	}
	private _labels: LinkedList$1<LabelCollisionInfo> = new LinkedList$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type);
	private _labelCount: number = 0;
	addLabel(label: LabelCollisionInfo): void {
		this._labelCount++;
		this._labels.addLast(label);
		label.labelNode = this._labels.last;
		if (label.targetBox == null) {
			label.targetBox = new QuadTreeBoundingBox();
			label.targetBox.centerX = label.targetX;
			label.targetBox.centerY = label.targetY;
			label.targetBox.halfWidth = label.targetHalfWidth;
			label.targetBox.halfHeight = label.targetHalfHeight;
			label.targetBox.data = label;
			this.tree.insert(label.targetBox);
		}
	}
	removeLabel(label: LabelCollisionInfo): void {
		if (label.targetBox != null) {
			this.tree.remove(label.targetBox);
			label.targetBox = null;
		}
		if (label.actualLabelBox != null) {
			this.tree.remove(label.actualLabelBox);
			label.actualLabelBox = null;
		}
		if (label.labelNode != null) {
			this._labels.remove(label.labelNode);
			label.labelNode = null;
		}
		this._labelCount--;
	}
	moveTarget(label: LabelCollisionInfo): void {
		if (label.targetBox != null && label.targetBox.centerX == label.targetX && label.targetBox.centerY == label.targetY) {
			return;
		}
		if (label.targetBox != null) {
			this.tree.remove(label.targetBox);
		}
		let offsetX: number = NaN;
		let offsetY: number = NaN;
		if (label.targetBox == null) {
			label.targetBox = new QuadTreeBoundingBox();
			label.targetBox.data = label;
		} else {
			if (label.actualLabelBox != null) {
				offsetX = label.actualLabelBox.centerX - label.targetBox.centerX;
				offsetY = label.actualLabelBox.centerY - label.targetBox.centerY;
			}
		}
		label.targetBox.centerX = label.targetX;
		label.targetBox.centerY = label.targetY;
		label.targetBox.halfWidth = label.targetHalfWidth;
		label.targetBox.halfHeight = label.targetHalfHeight;
		this.tree.insert(label.targetBox);
		if (label.actualLabelBox != null) {
			this.tree.remove(label.actualLabelBox);
			if (!isNaN_(offsetX)) {
				label.actualLabelBox = new QuadTreeBoundingBox();
				label.actualLabelBox.centerX = label.targetBox.centerX + offsetX;
				label.actualLabelBox.centerY = label.targetBox.centerY + offsetY;
				label.actualLabelBox.data = label;
				label.actualLabelBox.halfWidth = label.labelHalfWidth;
				label.actualLabelBox.halfHeight = label.labelHalfHeight;
				label.actualCenterX = label.actualLabelBox.centerX;
				label.actualCenterY = label.actualLabelBox.centerY;
				this.tree.insert(label.actualLabelBox);
			} else {
				label.actualLabelBox = this.tryPosition(label, label.actualPosition, 0, 0, true);
				label.actualCenterX = label.actualLabelBox.centerX;
				label.actualCenterY = label.actualLabelBox.centerY;
				this.tree.insert(label.actualLabelBox);
			}
		}
	}
	moveLabel(label: LabelCollisionInfo): void {
		this.tree.remove(label.actualLabelBox);
		label.actualLabelBox.centerX = label.actualCenterX;
		label.actualLabelBox.centerY = label.actualCenterY;
		label.actualLabelBox.halfWidth = label.labelHalfWidth;
		label.actualLabelBox.halfHeight = label.labelHalfHeight;
		this.tree.insert(label.actualLabelBox);
	}
	startCollision(): void {
		this._stepCancelled = false;
		{
			let curr = this._labels.first;
			while (curr != null) {
				if (curr.value.actualLabelBox != null) {
					this.tree.remove(curr.value.actualLabelBox);
					curr.value.actualLabelBox = null;
					if (curr.value.collidesWith != null) {
						curr.value.collidesWith.clear();
					}
				}
				curr = curr.next;
			}
			this._overlappingCount = 0;
		}
		this._currentStep = 0;
		this._initialTemp = 0.4;
		this._temp = 0.4;
		let steps = <number>truncate(Math.ceil((this.annealingMilliseconds / 150) * this.annealingStepCount));
		this._totalSteps = steps;
		this.collisionStep();
	}
	private _movedLabels: List$1<LabelCollisionInfo> = new List$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type, 0);
	private _stepQueued: boolean = false;
	private _stepCancelled: boolean = false;
	cancel(): void {
		this._stepCancelled = true;
	}
	private doCollisionStep(): void {
		this._stepQueued = false;
		if (this._stepCancelled) {
			return;
		}
		this.collisionStep();
	}
	private collisionStep(): void {
		this._movedLabels.clear();
		this.placeUnplaced(false);
		if (this.mode == LabelCollisionManagerCollisionMode.SimulatedAnnealing) {
			for (let i = 0; i < this.annealingStepCount; i++) {
				this._temp = this._initialTemp * (this._totalSteps - this._currentStep) / this._totalSteps;
				this.doAnnealingStep();
				this._currentStep++;
				if (this._currentStep > this._totalSteps) {
					if (this.finished != null) {
						this.finished();
					}
					return;
				}
			}
			if (this.labelsMoved != null) {
				this.labelsMoved(this._movedLabels);
			}
			if (this._overlappingCount > 0) {
				if (!this._stepQueued) {
					this._stepQueued = true;
					this.execution.executeDelayed(runOn(this, this.doCollisionStep), 150);
				}
			} else {
				if (this.finished != null) {
					this.finished();
				}
			}
		} else {
			if (this.mode == LabelCollisionManagerCollisionMode.GreedyCenterOfMass) {
				let currentLabel = this._labels.first;
				this.tree.updateCenterOfMass();
				while (currentLabel != null) {
					let info = currentLabel.value;
					if (info.actualLabelBox != null) {
						this.tree.remove(info.actualLabelBox);
						info.actualLabelBox = null;
						info.colliding = false;
						info.collidesWith = null;
					}
					currentLabel = currentLabel.next;
				}
				this._overlappingCount = 0;
				this.placeUnplaced(true);
			}
			if (this.labelsMoved != null) {
				this.labelsMoved(this._movedLabels);
			}
		}
	}
	private static _rand: Random = new Random(0);
	private _totalSteps: number = 0;
	private _currentStep: number = 0;
	private _initialTemp: number = 0;
	private _temp: number = 0;
	private doAnnealingStep(): void {
		let index: number = <number>truncate(Math.round((this._labelCount - 1) * LabelCollisionManager._rand.nextDouble()));
		let i: number = 0;
		let currLabel = this._labels.first;
		let currentScore = this.getScore(null);
		let tryLimit: number = 30;
		let upperLimit: number = 60;
		while (currLabel != null) {
			let info = currLabel.value;
			let randomX: number = 0;
			let randomY: number = 0;
			if (this._allowLabelShifting) {
				randomX = LabelCollisionManager._rand.nextDouble() * info.labelHalfWidth * 2;
				randomY = LabelCollisionManager._rand.nextDouble() * info.labelHalfHeight * 2;
			}
			if (i == index) {
				let positionIndex: number = <number>truncate(Math.round((this.preferredPlacements.count - 1) * LabelCollisionManager._rand.nextDouble()));
				while (this.preferredPlacements._inner[positionIndex] == info.actualPosition) {
					positionIndex = <number>truncate(Math.round((this.preferredPlacements.count - 1) * LabelCollisionManager._rand.nextDouble()));
				}
				let prevBox = info.actualLabelBox;
				let newBox = this.tryPosition(info, this.preferredPlacements._inner[positionIndex], randomX, randomY, false);
				let j: number = 0;
				while (newBox == null) {
					if (j >= tryLimit) {
						randomX = 0;
						randomY = 0;
					}
					if (j >= upperLimit) {
						break;
					}
					positionIndex = <number>truncate(Math.round((this.preferredPlacements.count - 1) * LabelCollisionManager._rand.nextDouble()));
					newBox = this.tryPosition(info, this.preferredPlacements._inner[positionIndex], randomX, randomY, false);
					j++;
				}
				info.actualLabelBox = newBox;
				if (prevBox != null) {
					this.tree.remove(prevBox);
				}
				if (newBox != null) {
					this.tree.insert(newBox);
					let newScore = this.getScore(info);
					let shouldMove = currentScore > newScore;
					if (!shouldMove) {
						let prob: number = Math.exp(-(newScore - currentScore) / this._temp);
						if (LabelCollisionManager._rand.nextDouble() < prob) {
							shouldMove = true;
						}
					}
					if (!shouldMove && prevBox != null) {
						this.tree.remove(newBox);
						this.tree.insert(prevBox);
						info.actualLabelBox = prevBox;
						if (!this._useOverlapAmount) {
							this.getScore(info);
						}
					} else {
						info.actualPosition = this.preferredPlacements._inner[positionIndex];
						info.actualCenterX = info.actualLabelBox.centerX;
						info.actualCenterY = info.actualLabelBox.centerY;
						this._movedLabels.add(info);
					}
				} else {
					if (!this._useOverlapAmount) {
						this.getScore(info);
					}
					info.colliding = false;
					this._movedLabels.add(info);
				}
				break;
			}
			i++;
			currLabel = currLabel.next;
		}
	}
	private _overlappingCount: number = 0;
	private _useOverlapAmount: boolean = false;
	private _allowLabelShifting: boolean = false;
	private getScore(label: LabelCollisionInfo): number {
		if (this._useOverlapAmount) {
			let score: number = 0;
			let currLabel = this._labels.first;
			while (currLabel != null) {
				let info = currLabel.value;
				let preColliding = info.colliding;
				info.colliding = false;
				if (info.actualLabelBox != null) {
					let leaves = this.tree.findLeaves(info.actualLabelBox);
					for (let j = 0; j < leaves.count; j++) {
						let currPoint = leaves._inner[j].points.first;
						while (currPoint != null) {
							let testBox = currPoint.value;
							if (testBox.data == info) {
								currPoint = currPoint.next;
								continue;
							}
							if (info.actualLabelBox.intersect(testBox)) {
								info.colliding = true;
								score += info.actualLabelBox.insersectionArea(testBox);
							}
							currPoint = currPoint.next;
						}
					}
					if (info.colliding != preColliding) {
						this._movedLabels.add(info);
					}
				}
				currLabel = currLabel.next;
			}
			return score;
		} else {
			if (label != null) {
				let currentColliding: HashSet$1<LabelCollisionInfo> = new HashSet$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type, 0);
				let initialColliding: HashSet$1<LabelCollisionInfo> = new HashSet$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type, 0);
				let newColliding: HashSet$1<LabelCollisionInfo> = new HashSet$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type, 0);
				let newCollidinglist: List$1<LabelCollisionInfo> = new List$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type, 0);
				if (label.collidesWith != null) {
					for (let i = 0; i < label.collidesWith.count; i++) {
						currentColliding.add_1(label.collidesWith._inner[i]);
						initialColliding.add_1(label.collidesWith._inner[i]);
					}
				}
				let preColliding1 = label.colliding;
				label.colliding = false;
				if (label.actualLabelBox != null) {
					let leaves1 = this.tree.findLeaves(label.actualLabelBox);
					for (let j1 = 0; j1 < leaves1.count; j1++) {
						let currPoint1 = leaves1._inner[j1].points.first;
						while (currPoint1 != null) {
							let testBox1 = currPoint1.value;
							if (testBox1.data == label) {
								currPoint1 = currPoint1.next;
								continue;
							}
							if (label.actualLabelBox.intersect(testBox1) && !newColliding.contains(<LabelCollisionInfo>testBox1.data)) {
								label.colliding = true;
								newColliding.add_1(<LabelCollisionInfo>testBox1.data);
								newCollidinglist.add(<LabelCollisionInfo>testBox1.data);
							}
							currPoint1 = currPoint1.next;
						}
					}
					leaves1 = this.tree.findLeaves(label.targetBox);
					for (let j2 = 0; j2 < leaves1.count; j2++) {
						let currPoint2 = leaves1._inner[j2].points.first;
						while (currPoint2 != null) {
							let testBox2 = currPoint2.value;
							if (testBox2.data == label) {
								currPoint2 = currPoint2.next;
								continue;
							}
							if (this.bothTargets(label.targetBox, testBox2)) {
								currPoint2 = currPoint2.next;
								continue;
							}
							if (label.targetBox.intersect(testBox2) && !newColliding.contains(<LabelCollisionInfo>testBox2.data)) {
								label.colliding = true;
								newColliding.add_1(<LabelCollisionInfo>testBox2.data);
								newCollidinglist.add(<LabelCollisionInfo>testBox2.data);
							}
							currPoint2 = currPoint2.next;
						}
					}
					if (label.colliding != preColliding1) {
						this._movedLabels.add(label);
					}
					if (label.collidesWith != null) {
						for (let i1 = label.collidesWith.count - 1; i1 >= 0; i1--) {
							if (!newColliding.contains(label.collidesWith._inner[i1])) {
								let other = label.collidesWith._inner[i1];
								let otherRemoved: boolean = other.collidesWith.remove(label);
								label.collidesWith.removeAt(i1);
								if (other.collidesWith.count == 0 && otherRemoved) {
									this._overlappingCount--;
								}
								let removedOther: boolean = currentColliding.remove(other);
								if (currentColliding.count == 0 && removedOther) {
									this._overlappingCount--;
								}
							}
						}
					}
					for (let i2 = 0; i2 < newCollidinglist.count; i2++) {
						let other1 = newCollidinglist._inner[i2];
						if (!currentColliding.contains(other1)) {
							if (label.collidesWith == null) {
								label.collidesWith = new List$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type, 0);
							}
							label.collidesWith.add(other1);
							if (currentColliding.count == 0) {
								this._overlappingCount++;
							}
							currentColliding.add_1(other1);
							if (other1.collidesWith == null) {
								other1.collidesWith = new List$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type, 0);
							}
							if (other1.collidesWith.count == 0) {
								this._overlappingCount++;
							}
							other1.collidesWith.add(label);
						}
					}
				}
			}
			return this._overlappingCount;
		}
	}
	private bothTargets(targetBox: QuadTreeBoundingBox, testBox: QuadTreeBoundingBox): boolean {
		if ((<LabelCollisionInfo>targetBox.data).targetBox == targetBox && (<LabelCollisionInfo>testBox.data).targetBox == testBox) {
			return true;
		}
		return false;
	}
	get collisionsCount(): number {
		return this._overlappingCount;
	}
	private _collisionChannel: string = null;
	get collisionChannel(): string {
		return this._collisionChannel;
	}
	set collisionChannel(value: string) {
		this._collisionChannel = value;
	}
	private _owner: any = null;
	get owner(): any {
		return this._owner;
	}
	set owner(value: any) {
		this._owner = value;
	}
	resize(width: number, height: number, viewport: Rect): void {
		this.viewport = viewport;
		let newTree: QuadTree = new QuadTree(width, height, this.tree.maxDepth, this.tree.capacity);
		let currentLabel = this._labels.first;
		while (currentLabel != null) {
			newTree.insert(currentLabel.value.targetBox);
			if (currentLabel.value.actualLabelBox != null) {
				newTree.insert(currentLabel.value.actualLabelBox);
			}
			currentLabel = currentLabel.next;
		}
		this.tree = newTree;
		this.width = width;
		this.height = height;
	}
	hasBoundaryCollisions(): boolean {
		let currLabel = this._labels.first;
		while (currLabel != null) {
			currLabel.value.colliding = false;
			if (currLabel.value.actualLabelBox != null) {
				if (this.collidesWithEdge(currLabel.value.actualLabelBox)) {
					return true;
				}
			}
			currLabel = currLabel.next;
		}
		return false;
	}
	getCurrentCollisionCount(): number {
		let currLabel = this._labels.first;
		while (currLabel != null) {
			currLabel.value.colliding = false;
			currLabel = currLabel.next;
		}
		currLabel = this._labels.first;
		while (currLabel != null) {
			let box = currLabel.value.actualLabelBox;
			let targetBox = currLabel.value.targetBox;
			let leaves = this.tree.findLeaves(targetBox);
			for (let j = 0; j < leaves.count; j++) {
				let currPoint = leaves._inner[j].points.first;
				while (currPoint != null) {
					let testBox = currPoint.value;
					if (this.bothTargets(targetBox, testBox)) {
						currPoint = currPoint.next;
						continue;
					}
					if (targetBox.intersect(testBox)) {
						let label = <LabelCollisionInfo>currPoint.value.data;
						if (label != currLabel.value) {
							label.colliding = true;
							currLabel.value.colliding = true;
						}
					}
					currPoint = currPoint.next;
				}
			}
			if (box == null) {
				return -1;
			}
			leaves = this.tree.findLeaves(box);
			for (let j1 = 0; j1 < leaves.count; j1++) {
				let currPoint1 = leaves._inner[j1].points.first;
				while (currPoint1 != null) {
					let testBox1 = currPoint1.value;
					if (box.intersect(testBox1)) {
						let label1 = <LabelCollisionInfo>currPoint1.value.data;
						if (label1 != currLabel.value) {
							label1.colliding = true;
							currLabel.value.colliding = true;
						}
					}
					currPoint1 = currPoint1.next;
				}
			}
			currLabel = currLabel.next;
		}
		let count: number = 0;
		currLabel = this._labels.first;
		while (currLabel != null) {
			if (currLabel.value.colliding) {
				count++;
			}
			currLabel = currLabel.next;
		}
		return count;
	}
	private placeUnplaced(byCenterOfMass: boolean): void {
		let currLabel = this._labels.first;
		while (currLabel != null) {
			let info = currLabel.value;
			if (info.actualLabelBox == null || byCenterOfMass) {
				let found: boolean = false;
				if (byCenterOfMass) {
					let forceVector = this.tree.getForceVectorForPoint(info.targetX, info.targetY, 1.5);
					let indices = this.getPlacementIndicesForForceVector(forceVector);
					for (let i = 0; i < indices.length; i++) {
						let ind = indices[i];
						let box = this.tryPosition(info, ind, 0, 0, false);
						if (box == null) {
							continue;
						}
						let leaves = this.tree.findLeaves(box);
						found = true;
						for (let j = 0; j < leaves.count; j++) {
							let currPoint = leaves._inner[j].points.first;
							while (currPoint != null) {
								let testBox = currPoint.value;
								if (box.intersect(testBox)) {
									found = false;
									break;
								}
								currPoint = currPoint.next;
							}
						}
						if (found) {
							info.actualLabelBox = box;
							info.actualPosition = ind;
							info.actualCenterX = info.actualLabelBox.centerX;
							info.actualCenterY = info.actualLabelBox.centerY;
							this.tree.insert(info.actualLabelBox);
							this._movedLabels.add(info);
							break;
						}
					}
				}
				if (!found) {
					found = this.findOptimisticPosition(info);
				}
			}
			currLabel = currLabel.next;
		}
	}
	findOptimisticPosition(info: LabelCollisionInfo): boolean {
		let found: boolean = false;
		if (!found) {
			for (let i = 0; i < this.preferredPlacements.count; i++) {
				let box = this.tryPosition(info, this.preferredPlacements._inner[i], 0, 0, false);
				if (box == null) {
					continue;
				}
				found = !this.checkCollision(box, info);
				let targetBox = info.targetBox;
				if (targetBox == null) {
					targetBox = new QuadTreeBoundingBox();
					targetBox.data = info;
					targetBox.centerX = info.targetX;
					targetBox.centerY = info.targetY;
					targetBox.halfWidth = info.targetHalfWidth;
					targetBox.halfHeight = info.targetHalfHeight;
					this.tree.insert(targetBox);
					info.targetBox = targetBox;
				}
				let targetCollides = this.checkCollision(targetBox, info);
				found = found && !targetCollides;
				if (found) {
					info.actualLabelBox = box;
					info.actualPosition = this.preferredPlacements._inner[i];
					info.actualCenterX = info.actualLabelBox.centerX;
					info.actualCenterY = info.actualLabelBox.centerY;
					this.tree.insert(info.actualLabelBox);
					this._movedLabels.add(info);
					break;
				}
			}
		}
		if (!found) {
			let minArea: number = Number.POSITIVE_INFINITY;
			let minIndex: number = 0;
			let minCollidesWith: List$1<LabelCollisionInfo> = null;
			for (let i1 = 0; i1 < this.preferredPlacements.count; i1++) {
				let currArea: number = 0;
				let currCollidesWith: List$1<LabelCollisionInfo> = null;
				let currColliding: HashSet$1<LabelCollisionInfo> = new HashSet$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type, 0);
				if (!this._useOverlapAmount) {
					currCollidesWith = new List$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type, 0);
				}
				let box1 = this.tryPosition(info, this.preferredPlacements._inner[i1], 0, 0, false);
				if (box1 == null) {
					continue;
				}
				let leaves = this.tree.findLeaves(box1);
				for (let j = 0; j < leaves.count; j++) {
					let currPoint = leaves._inner[j].points.first;
					while (currPoint != null) {
						let testBox = currPoint.value;
						if (box1.intersect(testBox)) {
							currArea += box1.insersectionArea(testBox);
							if (!this._useOverlapAmount) {
								if (!currColliding.contains(<LabelCollisionInfo>testBox.data)) {
									currCollidesWith.add(<LabelCollisionInfo>testBox.data);
									currColliding.add_1(<LabelCollisionInfo>testBox.data);
								}
							}
						}
						currPoint = currPoint.next;
					}
				}
				let targetBox1 = info.targetBox;
				if (targetBox1 == null) {
					targetBox1 = new QuadTreeBoundingBox();
					targetBox1.data = info;
					targetBox1.centerX = info.targetX;
					targetBox1.centerY = info.targetY;
					targetBox1.halfWidth = info.targetHalfWidth;
					targetBox1.halfHeight = info.targetHalfHeight;
				}
				leaves = this.tree.findLeaves(targetBox1);
				for (let j1 = 0; j1 < leaves.count; j1++) {
					let currPoint1 = leaves._inner[j1].points.first;
					while (currPoint1 != null) {
						let testBox1 = currPoint1.value;
						if (currPoint1.value.data == info) {
							currPoint1 = currPoint1.next;
							continue;
						}
						if (this.bothTargets(targetBox1, testBox1)) {
							currPoint1 = currPoint1.next;
							continue;
						}
						if (targetBox1.intersect(testBox1)) {
							if (!this._useOverlapAmount) {
								if (!currColliding.contains(<LabelCollisionInfo>testBox1.data)) {
									currCollidesWith.add(<LabelCollisionInfo>testBox1.data);
									currColliding.add_1(<LabelCollisionInfo>testBox1.data);
								}
							}
						}
						currPoint1 = currPoint1.next;
					}
				}
				if (currArea < minArea) {
					let minBox = this.tryPosition(info, this.preferredPlacements._inner[i1], 0, 0, false);
					if (minBox != null) {
						minArea = currArea;
						minIndex = i1;
						if (!this._useOverlapAmount) {
							minCollidesWith = currCollidesWith;
						}
					}
				}
			}
			let newBox = this.tryPosition(info, this.preferredPlacements._inner[minIndex], 0, 0, false);
			info.colliding = true;
			if (!this._useOverlapAmount) {
				if (info.collidesWith != null && info.collidesWith.count > 0) {
					this._overlappingCount--;
					for (let i2 = info.collidesWith.count - 1; i2 >= 0; i2--) {
						let other = info.collidesWith._inner[i2];
						if (other.collidesWith != null) {
							other.collidesWith.remove(info);
							if (other.collidesWith.count == 0) {
								this._overlappingCount--;
							}
						}
					}
				}
				if (minCollidesWith == null) {
					info.colliding = false;
					this._movedLabels.add(info);
					return false;
				}
				info.collidesWith = minCollidesWith;
				if (minCollidesWith.count > 0) {
					this._overlappingCount++;
				}
				for (let i3 = 0; i3 < minCollidesWith.count; i3++) {
					let other1 = minCollidesWith._inner[i3];
					if (other1.collidesWith == null) {
						other1.collidesWith = new List$1<LabelCollisionInfo>((<any>LabelCollisionInfo).$type, 0);
					}
					if (!other1.collidesWith.contains(info)) {
						if (other1.collidesWith.count == 0) {
							this._overlappingCount++;
						}
						other1.collidesWith.add(info);
					}
				}
			}
			info.actualLabelBox = newBox;
			info.actualPosition = this.preferredPlacements._inner[minIndex];
			info.actualCenterX = info.actualLabelBox.centerX;
			info.actualCenterY = info.actualLabelBox.centerY;
			this.tree.insert(info.actualLabelBox);
			this._movedLabels.add(info);
		}
		return found;
	}
	private checkCollision(box: QuadTreeBoundingBox, info: LabelCollisionInfo): boolean {
		let collides: boolean = false;
		let leaves = this.tree.findLeaves(box);
		for (let j = 0; j < leaves.count; j++) {
			let currPoint = leaves._inner[j].points.first;
			while (currPoint != null) {
				if (currPoint.value.data == info) {
					currPoint = currPoint.next;
					continue;
				}
				let testBox = currPoint.value;
				if (this.bothTargets(box, testBox)) {
					currPoint = currPoint.next;
					continue;
				}
				if (box.intersect(testBox)) {
					collides = true;
					break;
				}
				currPoint = currPoint.next;
			}
		}
		return collides;
	}
	private getPlacementIndicesForForceVector(forceVector: QuadTreeForceVector): LabelCollisionPlacementPositions[] {
		let indices: LabelCollisionPlacementPositions[] = <LabelCollisionPlacementPositions[]>new Array(3);
		let ang = GeometryUtil.getAngleTo(<Point>{ $type: Point_$type, x: 0, y: 0 }, <Point>{ $type: Point_$type, x: forceVector.x, y: forceVector.y });
		ang = ang * 180 / Math.PI;
		ang = GeometryUtil.simplifyAngle(ang);
		if ((ang >= 0 && ang <= 22.5) || (ang >= 337.5 && ang <= 360)) {
			indices[0] = LabelCollisionPlacementPositions.Right;
			indices[1] = LabelCollisionPlacementPositions.TopRight;
			indices[2] = LabelCollisionPlacementPositions.BottomRight;
		}
		if (ang >= 22.5 && ang <= 67.5) {
			indices[0] = LabelCollisionPlacementPositions.Right;
			indices[1] = LabelCollisionPlacementPositions.BottomRight;
			indices[2] = LabelCollisionPlacementPositions.Bottom;
		}
		if (ang >= 67.5 && ang <= 112.5) {
			indices[0] = LabelCollisionPlacementPositions.BottomRight;
			indices[1] = LabelCollisionPlacementPositions.Bottom;
			indices[2] = LabelCollisionPlacementPositions.BottomLeft;
		}
		if (ang >= 112.5 && ang <= 157.5) {
			indices[0] = LabelCollisionPlacementPositions.Bottom;
			indices[1] = LabelCollisionPlacementPositions.BottomLeft;
			indices[2] = LabelCollisionPlacementPositions.Left;
		}
		if (ang >= 157.5 && ang <= 202.5) {
			indices[0] = LabelCollisionPlacementPositions.BottomLeft;
			indices[1] = LabelCollisionPlacementPositions.Left;
			indices[2] = LabelCollisionPlacementPositions.TopLeft;
		}
		if (ang >= 202.5 && ang <= 247.5) {
			indices[0] = LabelCollisionPlacementPositions.Left;
			indices[1] = LabelCollisionPlacementPositions.TopLeft;
			indices[2] = LabelCollisionPlacementPositions.Top;
		}
		if (ang >= 247.5 && ang <= 292.5) {
			indices[0] = LabelCollisionPlacementPositions.TopLeft;
			indices[1] = LabelCollisionPlacementPositions.Top;
			indices[2] = LabelCollisionPlacementPositions.TopRight;
		}
		if (ang >= 292.5 && ang <= 337.5) {
			indices[0] = LabelCollisionPlacementPositions.Top;
			indices[1] = LabelCollisionPlacementPositions.TopRight;
			indices[2] = LabelCollisionPlacementPositions.Right;
		}
		return indices;
	}
	testHit(position: Point, isFinger: boolean): LabelCollisionInfo {
		let collides: boolean = false;
		let colliding: QuadTreeBoundingBox = null;
		let box: QuadTreeBoundingBox = new QuadTreeBoundingBox();
		box.centerX = position.x;
		box.centerY = position.y;
		box.halfWidth = 5;
		box.halfHeight = 5;
		let leaves = this.tree.findLeaves(box);
		for (let j = 0; j < leaves.count; j++) {
			let currPoint = leaves._inner[j].points.first;
			while (currPoint != null) {
				let testBox = currPoint.value;
				if ((<LabelCollisionInfo>testBox.data).targetBox == testBox) {
					currPoint = currPoint.next;
					continue;
				}
				if (box.intersect(testBox)) {
					colliding = testBox;
					collides = true;
					break;
				}
				currPoint = currPoint.next;
			}
		}
		if (collides) {
			return <LabelCollisionInfo>colliding.data;
		} else {
			return null;
		}
	}
}


