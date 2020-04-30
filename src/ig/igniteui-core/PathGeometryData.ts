/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeometryData } from "./GeometryData";
import { List$1 } from "./List$1";
import { PathFigureData } from "./PathFigureData";
import { StringBuilder } from "./StringBuilder";
import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "./type";
import { RectData } from "./RectData";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";

/**
 * @hidden 
 */
export class PathGeometryData extends GeometryData {
	static $t: Type = markType(PathGeometryData, 'PathGeometryData', (<any>GeometryData).$type);
	constructor() {
		super();
		this.figures = new List$1<PathFigureData>((<any>PathFigureData).$type, 0);
	}
	protected get_type(): string {
		return "Path";
	}
	get type(): string {
		return this.get_type();
	}
	private _figures: List$1<PathFigureData> = null;
	get figures(): List$1<PathFigureData> {
		return this._figures;
	}
	set figures(value: List$1<PathFigureData>) {
		this._figures = value;
	}
	protected serializeOverride(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("figures: [");
		for (let i = 0; i < this.figures.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.figures._inner[i].serialize());
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	scaleByViewport(viewport: RectData): void {
		for (let figure of fromEnum<PathFigureData>(this.figures)) {
			figure.scaleByViewport(viewport);
		}
	}
	getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void {
		for (let i = 0; i < this.figures.count; i++) {
			let figure = this.figures._inner[i];
			figure.getPointsOverride(points, settings);
		}
	}
}


