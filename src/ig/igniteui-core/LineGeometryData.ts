/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeometryData } from "./GeometryData";
import { Base, Type, markType } from "./type";
import { RectData } from "./RectData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";

/**
 * @hidden 
 */
export class LineGeometryData extends GeometryData {
	static $t: Type = markType(LineGeometryData, 'LineGeometryData', (<any>GeometryData).$type);
	protected get_type(): string {
		return "Line";
	}
	get type(): string {
		return this.get_type();
	}
	private _x1: number = 0;
	get x1(): number {
		return this._x1;
	}
	set x1(value: number) {
		this._x1 = value;
	}
	private _y1: number = 0;
	get y1(): number {
		return this._y1;
	}
	set y1(value: number) {
		this._y1 = value;
	}
	private _x2: number = 0;
	get x2(): number {
		return this._x2;
	}
	set x2(value: number) {
		this._x2 = value;
	}
	private _y2: number = 0;
	get y2(): number {
		return this._y2;
	}
	set y2(value: number) {
		this._y2 = value;
	}
	protected serializeOverride(): string {
		return "x1: " + this.x1 + ", y1: " + this.y1 + ", x2: " + this.x2 + ", y2:" + this.y2;
	}
	scaleByViewport(viewport: RectData): void {
		this.x1 = (this.x1 - viewport.left) / viewport.width;
		this.y1 = (this.y1 - viewport.top) / viewport.height;
		this.x2 = (this.x2 - viewport.left) / viewport.width;
		this.y2 = (this.y2 - viewport.top) / viewport.height;
	}
	getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void {
		let current = new List$1<PointData>((<any>PointData).$type, 0);
		points.add(current);
		current.add(new PointData(this.x1, this.y1));
		current.add(new PointData(this.x2, this.y2));
	}
}


