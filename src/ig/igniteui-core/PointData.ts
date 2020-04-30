/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, typeCast, Type, markType, PointUtil } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";

/**
 * @hidden 
 */
export class PointData extends Base implements IVisualData {
	static $t: Type = markType(PointData, 'PointData', (<any>Base).$type, [IVisualData_$type]);
	constructor(x: number, y: number) {
		super();
		this.x = x;
		this.y = y;
	}
	private _x: number = 0;
	get x(): number {
		return this._x;
	}
	set x(value: number) {
		this._x = value;
	}
	private _y: number = 0;
	get y(): number {
		return this._y;
	}
	set y(value: number) {
		this._y = value;
	}
	serialize(): string {
		return "{ x: " + this.x + ", y: " + this.y + "}";
	}
	static fromPoint(p: Point): PointData {
		let d: PointData = new PointData(p.x, p.y);
		return d;
	}
	toPoint(): Point {
		let p: Point = PointUtil.create();
		p.x = this.x;
		p.y = this.y;
		return p;
	}
	equals(obj: any): boolean {
		let p = typeCast<PointData>((<any>PointData).$type, obj);
		if (p == null) {
			return false;
		}
		return p.x == this.x && p.y == this.y;
	}
	getHashCode(): number {
		return ((this.x) * 397) ^ (this.y);
	}
	static get empty(): PointData {
		return new PointData(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
	}
}


