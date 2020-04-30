/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SegmentData } from "./SegmentData";
import { PointData } from "./PointData";
import { ArcSegment } from "./ArcSegment";
import { Size } from "./Size";
import { Base, Type, markType } from "./type";
import { RectData } from "./RectData";
import { List$1 } from "./List$1";
import { GetPointsSettings } from "./GetPointsSettings";
import { SweepDirection } from "./SweepDirection";

/**
 * @hidden 
 */
export class ArcSegmentData extends SegmentData {
	static $t: Type = markType(ArcSegmentData, 'ArcSegmentData', (<any>SegmentData).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, arc: ArcSegment);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				this.point = new PointData(NaN, NaN);
				this.isLargeArc = false;
				this.isCounterClockwise = true;
				this.rotationAngle = 0;
			}
			break;

			case 1:
			{
				let arc: ArcSegment = <ArcSegment>_rest[0];
				this.point = PointData.fromPoint(arc.point);
				this.isLargeArc = arc.isLargeArc;
				this.isCounterClockwise = arc.sweepDirection == SweepDirection.Counterclockwise;
				this.sizeX = arc.size.width;
				this.sizeY = arc.size.height;
				this.rotationAngle = arc.rotationAngle;
			}
			break;

		}

	}
	protected get_type(): string {
		return "Arc";
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
	private _isLargeArc: boolean = false;
	get isLargeArc(): boolean {
		return this._isLargeArc;
	}
	set isLargeArc(value: boolean) {
		this._isLargeArc = value;
	}
	private _isCounterClockwise: boolean = false;
	get isCounterClockwise(): boolean {
		return this._isCounterClockwise;
	}
	set isCounterClockwise(value: boolean) {
		this._isCounterClockwise = value;
	}
	private _sizeX: number = 0;
	get sizeX(): number {
		return this._sizeX;
	}
	set sizeX(value: number) {
		this._sizeX = value;
	}
	private _sizeY: number = 0;
	get sizeY(): number {
		return this._sizeY;
	}
	set sizeY(value: number) {
		this._sizeY = value;
	}
	private _rotationAngle: number = 0;
	get rotationAngle(): number {
		return this._rotationAngle;
	}
	set rotationAngle(value: number) {
		this._rotationAngle = value;
	}
	protected serializeOverride(): string {
		return "point: { x: " + this.point.x + ", y: " + this.point.y + " }, isLargeArc: " + (this.isLargeArc ? "true" : "false") + ", isCounterClockwise: " + (this.isCounterClockwise ? "true" : "false") + ", sizeX: " + this.sizeX + ", sizeY: " + this.sizeY + ", rotationAngle: " + this.rotationAngle;
	}
	scaleByViewport(viewport: RectData): void {
		this.point = new PointData((this.point.x - viewport.left) / viewport.width, (this.point.y - viewport.top) / viewport.height);
		this.sizeX = this.sizeX / viewport.width;
		this.sizeY = this.sizeY / viewport.height;
	}
	getPointsOverride(current: List$1<PointData>, settings: GetPointsSettings): void {
		current.add(new PointData(this.point.x, this.point.y));
	}
}


