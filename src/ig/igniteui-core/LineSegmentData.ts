/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SegmentData } from "./SegmentData";
import { PointData } from "./PointData";
import { LineSegment } from "./LineSegment";
import { Base, Type, markType } from "./type";
import { RectData } from "./RectData";
import { List$1 } from "./List$1";
import { GetPointsSettings } from "./GetPointsSettings";

/**
 * @hidden 
 */
export class LineSegmentData extends SegmentData {
	static $t: Type = markType(LineSegmentData, 'LineSegmentData', (<any>SegmentData).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, seg: LineSegment);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				this.point = new PointData(NaN, NaN);
			}
			break;

			case 1:
			{
				let seg: LineSegment = <LineSegment>_rest[0];
				this.point = PointData.fromPoint(seg.point);
			}
			break;

		}

	}
	protected get_type(): string {
		return "Line";
	}
	get type(): string {
		return this.get_type();
	}
	private _point: PointData = null;
	get point(): PointData {
		return this._point;
	}
	set point(value: PointData) {
		this._point = value;
	}
	protected serializeOverride(): string {
		return "point: { x: " + this.point.x + ", y: " + this.point.y + "}";
	}
	scaleByViewport(viewport: RectData): void {
		this.point = new PointData((this.point.x - viewport.left) / viewport.width, (this.point.y - viewport.top) / viewport.height);
	}
	getPointsOverride(current: List$1<PointData>, settings: GetPointsSettings): void {
		current.add(new PointData(this.point.x, this.point.y));
	}
}


