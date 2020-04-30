/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "./type";
import { PathSegmentCollection } from "./PathSegmentCollection";

/**
 * @hidden 
 */
export class PathFigure extends Base {
	static $t: Type = markType(PathFigure, 'PathFigure');
	constructor() {
		super();
		this._segments = new PathSegmentCollection();
		this._isClosed = false;
		this._isFilled = true;
	}
	_segments: PathSegmentCollection = null;
	get segments(): PathSegmentCollection {
		return this._segments;
	}
	set segments(value: PathSegmentCollection) {
		this._segments = value;
	}
	_startPoint: Point = null;
	get startPoint(): Point {
		return this._startPoint;
	}
	set startPoint(value: Point) {
		this._startPoint = value;
	}
	_isFilled: boolean = false;
	get isFilled(): boolean {
		return this._isFilled;
	}
	set isFilled(value: boolean) {
		this._isFilled = value;
	}
	_isClosed: boolean = false;
	get isClosed(): boolean {
		return this._isClosed;
	}
	set isClosed(value: boolean) {
		this._isClosed = value;
	}
}


