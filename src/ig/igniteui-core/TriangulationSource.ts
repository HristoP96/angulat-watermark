/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IList$1, IList$1_$type, Point, Type, markType } from "./type";
import { TriangulationSourcePointRecord } from "./TriangulationSourcePointRecord";
import { Triangle } from "./Triangle";
import { Triangulator } from "./Triangulator";
import { BinaryReader } from "./BinaryReader";
import { boxArray$1 } from "./array";

/**
 * @hidden 
 */
export class TriangulationSource extends Base {
	static $t: Type = markType(TriangulationSource, 'TriangulationSource');
	static create(count: number, getXY: (arg1: number) => Point, getValue: (arg1: number) => number): TriangulationSource {
		let result: TriangulationSource = new TriangulationSource();
		let points = <TriangulationSourcePointRecord[]>new Array(count);
		let record: TriangulationSourcePointRecord;
		let p: Point;
		let xColumn: number[] = <number[]>new Array(count);
		let yColumn: number[] = <number[]>new Array(count);
		let x: number = 0;
		let y: number = 0;
		for (let ii: number = 0; ii < count; ii++) {
			record = new TriangulationSourcePointRecord();
			p = getXY(ii);
			x = p.x;
			y = p.y;
			record.pointX = x;
			record.pointY = y;
			record.value = getValue(ii);
			points[ii] = record;
			xColumn[ii] = x;
			yColumn[ii] = y;
		}
		result.points = <IEnumerable$1<TriangulationSourcePointRecord>><any>points;
		let triangulator: Triangulator = new Triangulator(count, boxArray$1<number>(xColumn), boxArray$1<number>(yColumn));
		triangulator.triangulate();
		result.triangles = triangulator.getResult();
		return result;
	}
	static loadItf(reader: BinaryReader): TriangulationSource {
		reader.readBytes(5);
		let pointCount: number = reader.readInt32();
		let triangleCount: number = reader.readInt32();
		let dataOffset: number = reader.readInt32();
		let crsLength: number = reader.readInt32();
		reader.readBytes(crsLength);
		let result: TriangulationSource = new TriangulationSource();
		let points = <TriangulationSourcePointRecord[]>new Array(pointCount);
		let point: TriangulationSourcePointRecord;
		for (let ii: number = 0; ii < pointCount; ii++) {
			point = new TriangulationSourcePointRecord();
			point.pointX = reader.readDouble();
			point.pointY = reader.readDouble();
			point.value = reader.readSingle();
			points[ii] = point;
		}
		result.points = <IEnumerable$1<TriangulationSourcePointRecord>><any>points;
		let triangles = <Triangle[]>new Array(triangleCount);
		let newTriangle: Triangle;
		for (let ii1: number = 0; ii1 < triangleCount; ii1++) {
			newTriangle = new Triangle();
			newTriangle.v1 = reader.readInt32();
			newTriangle.v2 = reader.readInt32();
			newTriangle.v3 = reader.readInt32();
			triangles[ii1] = newTriangle;
		}
		result.triangles = boxArray$1<Triangle>(triangles);
		return result;
	}
	private _points: IEnumerable$1<TriangulationSourcePointRecord> = null;
	get points(): IEnumerable$1<TriangulationSourcePointRecord> {
		return this._points;
	}
	set points(value: IEnumerable$1<TriangulationSourcePointRecord>) {
		this._points = value;
	}
	private _triangles: IList$1<Triangle> = null;
	get triangles(): IList$1<Triangle> {
		return this._triangles;
	}
	set triangles(value: IList$1<Triangle>) {
		this._triangles = value;
	}
	private static readonly cRS: string = "LOCAL_CS[]";
}


