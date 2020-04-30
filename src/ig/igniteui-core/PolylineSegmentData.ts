/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SegmentData } from "./SegmentData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { PolyLineSegment } from "./PolyLineSegment";
import { Point, Base, Type, markType } from "./type";
import { StringBuilder } from "./StringBuilder";
import { RectData } from "./RectData";
import { GetPointsSettings } from "./GetPointsSettings";

/**
 * @hidden 
 */
export class PolylineSegmentData extends SegmentData {
	static $t: Type = markType(PolylineSegmentData, 'PolylineSegmentData', (<any>SegmentData).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, poly: PolyLineSegment);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				this.points = new List$1<PointData>((<any>PointData).$type, 0);
			}
			break;

			case 1:
			{
				let poly: PolyLineSegment = <PolyLineSegment>_rest[0];
				this.points = new List$1<PointData>((<any>PointData).$type, 0);
				for (let i = 0; i < poly._points.count; i++) {
					this.points.add(PointData.fromPoint(poly._points._inner[i]));
				}
			}
			break;

		}

	}
	protected get_type(): string {
		return "Polyline";
	}
	get type(): string {
		return this.get_type();
	}
	private _points: List$1<PointData> = null;
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
		for (let i = 0; i < this.points.count; i++) {
			this.points._inner[i] = new PointData((this.points._inner[i].x - viewport.left) / viewport.width, (this.points._inner[i].y - viewport.top) / viewport.height);
		}
	}
	getPointsOverride(current: List$1<PointData>, settings: GetPointsSettings): void {
		for (let i = 0; i < this.points.count; i++) {
			current.add(new PointData(this.points._inner[i].x, this.points._inner[i].y));
		}
	}
}


