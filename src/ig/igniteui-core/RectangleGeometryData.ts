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
export class RectangleGeometryData extends GeometryData {
	static $t: Type = markType(RectangleGeometryData, 'RectangleGeometryData', (<any>GeometryData).$type);
	protected get_type(): string {
		return "Rectangle";
	}
	get type(): string {
		return this.get_type();
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
	protected serializeOverride(): string {
		return "x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height;
	}
	scaleByViewport(viewport: RectData): void {
		this.x = (this.x - viewport.left) / viewport.width;
		this.y = (this.y - viewport.top) / viewport.height;
		this.width = this.width / viewport.width;
		this.height = this.height / viewport.height;
	}
	getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void {
		let current = new List$1<PointData>((<any>PointData).$type, 0);
		points.add(current);
		current.add(new PointData(this.x, this.y));
		current.add(new PointData(this.x + this.width, this.y));
		current.add(new PointData(this.x + this.width, this.y + this.height));
		current.add(new PointData(this.x, this.y + this.height));
	}
}


