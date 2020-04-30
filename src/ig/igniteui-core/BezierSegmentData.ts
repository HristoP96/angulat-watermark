/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SegmentData } from "./SegmentData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { BezierSegment } from "./BezierSegment";
import { StringBuilder } from "./StringBuilder";
import { Base, Type, markType } from "./type";
import { RectData } from "./RectData";
import { GetPointsSettings } from "./GetPointsSettings";

/**
 * @hidden 
 */
export class BezierSegmentData extends SegmentData {
	static $t: Type = markType(BezierSegmentData, 'BezierSegmentData', (<any>SegmentData).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, segment: BezierSegment);
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
				let segment: BezierSegment = <BezierSegment>_rest[0];
				this.points = new List$1<PointData>((<any>PointData).$type, 0);
				this.points.add(PointData.fromPoint(segment.point1));
				this.points.add(PointData.fromPoint(segment.point2));
				this.points.add(PointData.fromPoint(segment.point3));
			}
			break;

		}

	}
	protected get_type(): string {
		return "Bezier";
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
			if (this.points._inner[i] == null) {
				break;
			}
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
			if (this.points._inner[i] == null) {
				break;
			}
			this.points._inner[i] = new PointData((this.points._inner[i].x - viewport.left) / viewport.width, (this.points._inner[i].y - viewport.top) / viewport.height);
		}
	}
	getPointsOverride(current: List$1<PointData>, settings: GetPointsSettings): void {
		for (let i = 0; i < this.points.count; i++) {
			current.add(new PointData(this.points._inner[i].x, this.points._inner[i].y));
		}
	}
}


