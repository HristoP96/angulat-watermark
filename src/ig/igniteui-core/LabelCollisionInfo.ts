/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { LinkedListNode$1 } from "./LinkedListNode$1";
import { QuadTreeBoundingBox } from "./QuadTreeBoundingBox";
import { LabelCollisionPlacementPositions } from "./LabelCollisionPlacementPositions";
import { List$1 } from "./List$1";

/**
 * @hidden 
 */
export class LabelCollisionInfo extends Base {
	static $t: Type = markType(LabelCollisionInfo, 'LabelCollisionInfo');
	private _labelNode: LinkedListNode$1<LabelCollisionInfo> = null;
	get labelNode(): LinkedListNode$1<LabelCollisionInfo> {
		return this._labelNode;
	}
	set labelNode(value: LinkedListNode$1<LabelCollisionInfo>) {
		this._labelNode = value;
	}
	private _targetX: number = 0;
	get targetX(): number {
		return this._targetX;
	}
	set targetX(value: number) {
		this._targetX = value;
	}
	private _targetY: number = 0;
	get targetY(): number {
		return this._targetY;
	}
	set targetY(value: number) {
		this._targetY = value;
	}
	private _targetHalfWidth: number = 0;
	get targetHalfWidth(): number {
		return this._targetHalfWidth;
	}
	set targetHalfWidth(value: number) {
		this._targetHalfWidth = value;
	}
	private _targetHalfHeight: number = 0;
	get targetHalfHeight(): number {
		return this._targetHalfHeight;
	}
	set targetHalfHeight(value: number) {
		this._targetHalfHeight = value;
	}
	private _targetBox: QuadTreeBoundingBox = null;
	get targetBox(): QuadTreeBoundingBox {
		return this._targetBox;
	}
	set targetBox(value: QuadTreeBoundingBox) {
		this._targetBox = value;
	}
	private _labelHalfWidth: number = 0;
	get labelHalfWidth(): number {
		return this._labelHalfWidth;
	}
	set labelHalfWidth(value: number) {
		this._labelHalfWidth = value;
	}
	private _labelHalfHeight: number = 0;
	get labelHalfHeight(): number {
		return this._labelHalfHeight;
	}
	set labelHalfHeight(value: number) {
		this._labelHalfHeight = value;
	}
	private _currentCenterX: number = 0;
	get currentCenterX(): number {
		return this._currentCenterX;
	}
	set currentCenterX(value: number) {
		this._currentCenterX = value;
	}
	private _currentCenterY: number = 0;
	get currentCenterY(): number {
		return this._currentCenterY;
	}
	set currentCenterY(value: number) {
		this._currentCenterY = value;
	}
	private _worldCurrentCenterX: number = 0;
	get worldCurrentCenterX(): number {
		return this._worldCurrentCenterX;
	}
	set worldCurrentCenterX(value: number) {
		this._worldCurrentCenterX = value;
	}
	private _worldCurrentCenterY: number = 0;
	get worldCurrentCenterY(): number {
		return this._worldCurrentCenterY;
	}
	set worldCurrentCenterY(value: number) {
		this._worldCurrentCenterY = value;
	}
	private _actualCenterX: number = 0;
	get actualCenterX(): number {
		return this._actualCenterX;
	}
	set actualCenterX(value: number) {
		this._actualCenterX = value;
	}
	private _actualCenterY: number = 0;
	get actualCenterY(): number {
		return this._actualCenterY;
	}
	set actualCenterY(value: number) {
		this._actualCenterY = value;
	}
	private _worldActualCenterX: number = 0;
	get worldActualCenterX(): number {
		return this._worldActualCenterX;
	}
	set worldActualCenterX(value: number) {
		this._worldActualCenterX = value;
	}
	private _worldActualCenterY: number = 0;
	get worldActualCenterY(): number {
		return this._worldActualCenterY;
	}
	set worldActualCenterY(value: number) {
		this._worldActualCenterY = value;
	}
	private _actualPosition: LabelCollisionPlacementPositions = <LabelCollisionPlacementPositions>0;
	get actualPosition(): LabelCollisionPlacementPositions {
		return this._actualPosition;
	}
	set actualPosition(value: LabelCollisionPlacementPositions) {
		this._actualPosition = value;
	}
	private _actualLabelBox: QuadTreeBoundingBox = null;
	get actualLabelBox(): QuadTreeBoundingBox {
		return this._actualLabelBox;
	}
	set actualLabelBox(value: QuadTreeBoundingBox) {
		this._actualLabelBox = value;
	}
	private _data: any = null;
	get data(): any {
		return this._data;
	}
	set data(value: any) {
		this._data = value;
	}
	private _colliding: boolean = false;
	get colliding(): boolean {
		return this._colliding;
	}
	set colliding(value: boolean) {
		this._colliding = value;
	}
	private _collidesWith: List$1<LabelCollisionInfo> = null;
	get collidesWith(): List$1<LabelCollisionInfo> {
		return this._collidesWith;
	}
	set collidesWith(value: List$1<LabelCollisionInfo>) {
		this._collidesWith = value;
	}
}


