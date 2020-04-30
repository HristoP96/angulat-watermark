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
export class EllipseGeometryData extends GeometryData {
	static $t: Type = markType(EllipseGeometryData, 'EllipseGeometryData', (<any>GeometryData).$type);
	protected get_type(): string {
		return "Ellipse";
	}
	get type(): string {
		return this.get_type();
	}
	private _centerX: number = 0;
	get centerX(): number {
		return this._centerX;
	}
	set centerX(value: number) {
		this._centerX = value;
	}
	private _centerY: number = 0;
	get centerY(): number {
		return this._centerY;
	}
	set centerY(value: number) {
		this._centerY = value;
	}
	private _radiusX: number = 0;
	get radiusX(): number {
		return this._radiusX;
	}
	set radiusX(value: number) {
		this._radiusX = value;
	}
	private _radiusY: number = 0;
	get radiusY(): number {
		return this._radiusY;
	}
	set radiusY(value: number) {
		this._radiusY = value;
	}
	protected serializeOverride(): string {
		return "centerX: " + this.centerX + ", centerY: " + this.centerY + ", radiusX: " + this.radiusX + ", radiusY: " + this.radiusY;
	}
	scaleByViewport(viewport: RectData): void {
		this.centerX = (this.centerX - viewport.left) / viewport.width;
		this.centerY = (this.centerY - viewport.top) / viewport.height;
		this.radiusX = this.radiusX / viewport.width;
		this.radiusY = this.radiusY / viewport.height;
	}
	getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void {
		let current = new List$1<PointData>((<any>PointData).$type, 0);
		points.add(current);
		current.add(new PointData(this.centerX, this.centerY));
	}
}


