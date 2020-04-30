/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";
import { PointData } from "./PointData";
import { List$1 } from "./List$1";
import { SegmentData } from "./SegmentData";
import { PathFigure } from "./PathFigure";
import { PathSegment } from "./PathSegment";
import { PathSegmentType } from "./PathSegmentType";
import { LineSegment } from "./LineSegment";
import { LineSegmentData } from "./LineSegmentData";
import { PolyLineSegment } from "./PolyLineSegment";
import { PolylineSegmentData } from "./PolylineSegmentData";
import { ArcSegment } from "./ArcSegment";
import { ArcSegmentData } from "./ArcSegmentData";
import { PolyBezierSegment } from "./PolyBezierSegment";
import { PolyBezierSegmentData } from "./PolyBezierSegmentData";
import { BezierSegment } from "./BezierSegment";
import { BezierSegmentData } from "./BezierSegmentData";
import { StringBuilder } from "./StringBuilder";
import { RectData } from "./RectData";
import { GetPointsSettings } from "./GetPointsSettings";

/**
 * @hidden 
 */
export class PathFigureData extends Base implements IVisualData {
	static $t: Type = markType(PathFigureData, 'PathFigureData', (<any>Base).$type, [IVisualData_$type]);
	constructor(initNumber: number);
	constructor(initNumber: number, fig: PathFigure);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				this.segments = new List$1<SegmentData>((<any>SegmentData).$type, 0);
				this.startPoint = new PointData(NaN, NaN);
			}
			break;

			case 1:
			{
				let fig: PathFigure = <PathFigure>_rest[0];
				this.segments = new List$1<SegmentData>((<any>SegmentData).$type, 0);
				this.startPoint = PointData.fromPoint(fig._startPoint);
				for (let i = 0; i < fig._segments.count; i++) {
					let seg = fig._segments._inner[i];
					let newData: SegmentData = null;
					switch (seg.type) {
						case PathSegmentType.Line:
						newData = new LineSegmentData(1, <LineSegment>seg);
						break;

						case PathSegmentType.PolyLine:
						newData = new PolylineSegmentData(1, <PolyLineSegment>seg);
						break;

						case PathSegmentType.Arc:
						newData = new ArcSegmentData(1, <ArcSegment>seg);
						break;

						case PathSegmentType.PolyBezier:
						newData = new PolyBezierSegmentData(1, <PolyBezierSegment>seg);
						break;

						case PathSegmentType.Bezier:
						newData = new BezierSegmentData(1, <BezierSegment>seg);
						break;

					}

					this.segments.add(newData);
				}
			}
			break;

		}

	}
	private _startPoint: PointData = null;
	get startPoint(): PointData {
		return this._startPoint;
	}
	set startPoint(value: PointData) {
		this._startPoint = value;
	}
	private _segments: List$1<SegmentData> = null;
	get segments(): List$1<SegmentData> {
		return this._segments;
	}
	set segments(value: List$1<SegmentData>) {
		this._segments = value;
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		if (this.startPoint != null) {
			sb.appendLine1("startPoint: { x: " + this.startPoint.x + ", y: " + this.startPoint.y + "}, ");
		}
		sb.appendLine1("segments: [");
		for (let i = 0; i < this.segments.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.segments._inner[i].serialize());
		}
		sb.appendLine1("]");
		sb.appendLine1("}");
		return sb.toString();
	}
	scaleByViewport(viewport: RectData): void {
		if (this.startPoint != null) {
			this.startPoint = new PointData((this.startPoint.x - viewport.left) / viewport.width, (this.startPoint.y - viewport.top) / viewport.height);
		}
		for (let i = 0; i < this.segments.count; i++) {
			this.segments._inner[i].scaleByViewport(viewport);
		}
	}
	getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void {
		let current = new List$1<PointData>((<any>PointData).$type, 0);
		points.add(current);
		if (!settings.ignoreFigureStartPoint) {
			current.add(new PointData(this.startPoint.x, this.startPoint.y));
		}
		for (let i = 0; i < this.segments.count; i++) {
			this.segments._inner[i].getPointsOverride(current, settings);
		}
	}
}


