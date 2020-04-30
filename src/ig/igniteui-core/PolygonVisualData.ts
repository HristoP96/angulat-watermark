/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { Polygon } from "./Polygon";
import { Point, Base, Type, markType } from "./type";
import { AppearanceHelper } from "./AppearanceHelper";
import { StringBuilder } from "./StringBuilder";
import { RectData } from "./RectData";
import { GetPointsSettings } from "./GetPointsSettings";

/**
 * @hidden 
 */
export class PolygonVisualData extends PrimitiveVisualData {
	static $t: Type = markType(PolygonVisualData, 'PolygonVisualData', (<any>PrimitiveVisualData).$type);
	protected get_type(): string {
		return "Polygon";
	}
	get type(): string {
		return this.get_type();
	}
	constructor(initNumber: number);
	constructor(initNumber: number, name: string, polygon: Polygon);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(1, "polygon1");
				this._points = null;
				this.points = new List$1<PointData>((<any>PointData).$type, 0);
			}
			break;

			case 1:
			{
				let name: string = <string>_rest[0];
				let polygon: Polygon = <Polygon>_rest[1];
				super(1, name);
				this._points = null;
				this.points = new List$1<PointData>((<any>PointData).$type, 0);
				for (let i = 0; i < polygon.points.count; i++) {
					this.points.add(PointData.fromPoint(polygon.points._inner[i]));
				}
				AppearanceHelper.getShapeAppearance(this.appearance, polygon);
			}
			break;

		}

	}
	private _points: List$1<PointData>;
	get points(): List$1<PointData> {
		return this._points;
	}
	set points(value: List$1<PointData>) {
		this._points = value;
	}
	protected serializeOverride(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("points: [");
		for (let i = 0; i < this.points.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5("{ x: " + this.points._inner[i].x + ", y: " + this.points._inner[i].y + "}");
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	scaleByViewport(viewport: RectData): void {
		super.scaleByViewport(viewport);
		for (let i = 0; i < this.points.count; i++) {
			this.points._inner[i] = new PointData((this.points._inner[i].x - viewport.left) / viewport.width, (this.points._inner[i].y - viewport.top) / viewport.height);
		}
	}
	getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void {
		let current = new List$1<PointData>((<any>PointData).$type, 0);
		points.add(current);
		for (let i = 0; i < this.points.count; i++) {
			current.add(this.points._inner[i]);
		}
	}
}


