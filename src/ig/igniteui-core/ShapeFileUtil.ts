/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, BaseError, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, EnumUtil, String_$type, enumGetBox, fromEnum, Point_$type, IEnumerable$1, callStaticConstructors, Type, markType, PointUtil } from "./type";
import { Header } from "./Header";
import { BinaryReader } from "./BinaryReader";
import { XBaseField } from "./XBaseField";
import { Dictionary$2 } from "./Dictionary$2";
import { XBaseDataType, XBaseDataType_$type } from "./XBaseDataType";
import { Rect } from "./Rect";
import { Encoding } from "./Encoding";
import { List$1 } from "./List$1";
import { ShapefileRecord } from "./ShapefileRecord";
import { ShapeType, ShapeType_$type } from "./ShapeType";
import { Size } from "./Size";
import { u32BitwiseAnd } from "./numberExtended";
import { stringReplace } from "./string";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class ShapeFileUtil extends Base {
	static $t: Type = markType(ShapeFileUtil, 'ShapeFileUtil');
	static readHeader(shpReader: BinaryReader, dbfReader: BinaryReader): Header {
		if (ShapeFileUtil.dbfBaseDataTypes == null) {
			ShapeFileUtil.initDataTypes();
		}
		let shapeHeader: Header = new Header();
		let filecode: number = ShapeFileUtil.swap(shpReader.readInt32());
		if (filecode != 9994) {
			throw new BaseError(1, "Corrupt Shp file - incorrect file code");
		}
		shpReader.readInt32();
		shpReader.readInt32();
		shpReader.readInt32();
		shpReader.readInt32();
		shpReader.readInt32();
		ShapeFileUtil.swap(shpReader.readInt32());
		shpReader.readInt32();
		shapeHeader.shapeType = <ShapeType>shpReader.readInt32();
		let xymin: Point = PointUtil.create();
		let xymax: Point = PointUtil.create();
		xymin.x = shpReader.readDouble();
		xymin.y = shpReader.readDouble();
		xymax.x = shpReader.readDouble();
		xymax.y = shpReader.readDouble();
		shpReader.readDouble();
		shpReader.readDouble();
		shpReader.readDouble();
		shpReader.readDouble();
		shapeHeader.bounds = new Rect(0, xymin.x, xymin.y, xymax.x - xymin.x, xymax.y - xymin.y);
		if (dbfReader != null) {
			let version: number = dbfReader.readByte();
			if (version != 3) {
				throw new BaseError(1, "Corrupt Dbf file - wrong version number");
			}
			dbfReader.readByte();
			dbfReader.readByte();
			dbfReader.readByte();
			dbfReader.readUInt32();
			dbfReader.readUInt16();
			let lengthOfEachRecord: number = dbfReader.readUInt16();
			dbfReader.readBytes(2);
			dbfReader.readBytes(1);
			dbfReader.readBytes(1);
			dbfReader.readBytes(4);
			dbfReader.readBytes(8);
			dbfReader.readBytes(1);
			dbfReader.readBytes(1);
			dbfReader.readBytes(2);
			let totalFieldLength: number = 0;
			while (totalFieldLength < lengthOfEachRecord - 1) {
				let dbfField: XBaseField = new XBaseField();
				dbfField.name = stringReplace(Encoding.uTF8.getString1(dbfReader.readBytes(11), 0, 10), "\0", "");
				let key = Encoding.uTF8.getString1(dbfReader.readBytes(1), 0, 1).charAt(0);
				dbfField.type = ShapeFileUtil.dbfBaseDataTypes.item(key);
				dbfReader.readBytes(4);
				dbfField.length = dbfReader.readByte();
				dbfReader.readBytes(15);
				shapeHeader.dbfBaseFields.add(dbfField);
				totalFieldLength += dbfField.length;
			}
			if (dbfReader.readByte() != 13) {
				throw new BaseError(1, "Corrupt Dbf file - Missing field descriptor array terminator");
			}
		}
		return shapeHeader;
	}
	static readShape(shapeHeader: Header, shpReader: BinaryReader, dbfReader: BinaryReader): ShapefileRecord {
		let number: number = ShapeFileUtil.swap(shpReader.readInt32());
		let length: number = ShapeFileUtil.swap(shpReader.readInt32());
		let shapeType = <ShapeType>shpReader.readInt32();
		let row: ShapefileRecord = null;
		switch (shapeType) {
			case ShapeType.None: break;
			case ShapeType.Point:
			row = ShapeFileUtil.readSymbol(shpReader);
			break;

			case ShapeType.PolyLine:
			row = ShapeFileUtil.readPath(shpReader);
			break;

			case ShapeType.Polygon:
			row = ShapeFileUtil.readSurface(shpReader);
			break;

			case ShapeType.PolyPoint: break;
			case ShapeType.PointZ: break;
			case ShapeType.PolyLineZ:
			row = ShapeFileUtil.readPathZ(shpReader);
			break;

			case ShapeType.PolygonZ:
			row = ShapeFileUtil.readSurfaceZ(shpReader);
			break;

			case ShapeType.PolyPointZ: break;
			case ShapeType.PointM: break;
			case ShapeType.PolyLineM: break;
			case ShapeType.PolygonM: break;
			case ShapeType.PolyPointM: break;
			case ShapeType.PolyPatch: break;
			default: break;
		}

		if (row == null) {
			throw new BaseError(1, "Corrupt Shp file - failed to read " + EnumUtil.getName<ShapeType>(ShapeType_$type, shapeType));
		}
		row.shapeType = shapeType;
		if (dbfReader != null) {
			dbfReader.readBytes(1);
			row.fields = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
			for (let baseField of fromEnum<XBaseField>(shapeHeader.dbfBaseFields)) {
				row.fieldsNames.add(baseField.name);
				let baseFieldBytes: number[] = dbfReader.readBytes(baseField.length);
				let baseFieldString: string = Encoding.uTF8.getString1(baseFieldBytes, 0, baseField.length);
				switch (baseField.type) {
					case XBaseDataType.Number:
					row.fieldsTypes.add("double");
					let val = parseFloat(baseFieldString);
					if (!isNaN_(val)) {
						row.fields.addItem(baseField.name, val);
						ShapeFileUtil.flattenFieldOnRow(row, baseField.name, val);
					}
					break;

					case XBaseDataType.FloatingPoint:
					row.fieldsTypes.add("float");
					let fval = parseFloat(baseFieldString);
					if (!isNaN_(fval)) {
						row.fields.addItem(baseField.name, fval);
						ShapeFileUtil.flattenFieldOnRow(row, baseField.name, fval);
					}
					break;

					case XBaseDataType.Character:
					row.fieldsTypes.add("string");
					let sVal = baseFieldString.trim();
					row.fields.addItem(baseField.name, sVal);
					ShapeFileUtil.flattenFieldOnRow(row, baseField.name, sVal);
					break;

					case XBaseDataType.Date:
					row.fieldsTypes.add("date");
					let str_ = baseFieldString;
					let dval = Date.parse(str_);
					row.fields.addItem(baseField.name, dval);
					ShapeFileUtil.flattenFieldOnRow(row, baseField.name, dval);
					break;

					default: throw new BaseError(1, "Unrecognized field type: " + enumGetBox<XBaseDataType>(XBaseDataType_$type, baseField.type));
				}

			}
		}
		return row;
	}
	private static flattenFieldOnRow(row_: ShapefileRecord, property_: string, val_: any): void {
		if (!row_.fieldValues) {
            row_.fieldValues = {};
            };
		row_.fieldValues[property_] = val_;
	}
	private static swap(i: number): number {
		return <number>(((i & 255) << 24) | ((i & 65280) << 8) | ((i & 16711680) >> 8) | ((u32BitwiseAnd(i, 4278190080)) >> 24));
	}
	private static readSymbol(shpReader: BinaryReader): ShapefileRecord {
		let p0: Point = ((() => {
			let $ret = PointUtil.create();
			$ret.x = shpReader.readDouble();
			$ret.y = shpReader.readDouble();
			return $ret;
		})());
		return ((() => {
			let $ret = new ShapefileRecord();
			$ret.bounds = new Rect(3, p0, Size.empty);
			$ret.points = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 1, <IEnumerable$1<List$1<Point>>><any><List$1<Point>[]>[ new List$1<Point>(Point_$type, 1, <IEnumerable$1<Point>><any><Point[]>[ p0 ]) ]);
			return $ret;
		})());
	}
	private static readPathZ(shpReader: BinaryReader): ShapefileRecord {
		let numParts: number, numPoints: number;
		let result: ShapefileRecord = ((() => { let $ret = ShapeFileUtil.readPath1(shpReader, numParts, numPoints); numParts = $ret.p1; numPoints = $ret.p2; return $ret.ret; })());
		shpReader.readDouble();
		shpReader.readDouble();
		for (let current: number = 0; current < numPoints; current++) {
			shpReader.readDouble();
		}
		shpReader.readDouble();
		shpReader.readDouble();
		for (let current1: number = 0; current1 < numPoints; current1++) {
			shpReader.readDouble();
		}
		return result;
	}
	private static readPath1(shpReader: BinaryReader, numParts: number, numPoints: number): { ret: ShapefileRecord; p1: number; p2: number; } {
		let p: Point = PointUtil.create();
		let xymin: Point = ((() => {
			let $ret = PointUtil.create();
			$ret.x = shpReader.readDouble();
			$ret.y = shpReader.readDouble();
			return $ret;
		})());
		let xymax: Point = ((() => {
			let $ret = PointUtil.create();
			$ret.x = shpReader.readDouble();
			$ret.y = shpReader.readDouble();
			return $ret;
		})());
		let bounds: Rect = new Rect(0, xymin.x, xymin.y, xymax.x - xymin.x, xymax.y - xymin.y);
		numParts = shpReader.readInt32();
		numPoints = shpReader.readInt32();
		let partindex: number[] = <number[]>new Array(numParts);
		for (let i: number = 0; i < numParts; ++i) {
			partindex[i] = shpReader.readInt32();
		}
		let pointCollections: List$1<List$1<Point>> = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 0);
		for (let i1: number = 0; i1 < numParts; ++i1) {
			let partsize: number = (i1 < numParts - 1 ? partindex[i1 + 1] : numPoints) - partindex[i1];
			let pointCollection: List$1<Point> = new List$1<Point>(Point_$type, 2, partsize - 1);
			for (let j: number = 0; j < partsize; ++j) {
				p = PointUtil.create();
				p.x = shpReader.readDouble();
				p.y = shpReader.readDouble();
				pointCollection.add(p);
			}
			if (pointCollection.count > 0) {
				pointCollections.add(pointCollection);
			}
		}
		return {
			ret: ((() => {
				let $ret = new ShapefileRecord();
				$ret.bounds = bounds;
				$ret.points = pointCollections;
				return $ret;
			})()),
			p1: numParts,
			p2: numPoints

		};
	}
	private static readPath(shpReader: BinaryReader): ShapefileRecord {
		let numParts: number, numPoints: number;
		return ((() => { let $ret = ShapeFileUtil.readPath1(shpReader, numParts, numPoints); numParts = $ret.p1; numPoints = $ret.p2; return $ret.ret; })());
	}
	private static readSurfaceZ(shpReader: BinaryReader): ShapefileRecord {
		let numParts: number, numPoints: number;
		let result: ShapefileRecord = ((() => { let $ret = ShapeFileUtil.readSurface1(shpReader, numParts, numPoints); numParts = $ret.p1; numPoints = $ret.p2; return $ret.ret; })());
		shpReader.readDouble();
		shpReader.readDouble();
		for (let current: number = 0; current < numPoints; current++) {
			shpReader.readDouble();
		}
		shpReader.readDouble();
		shpReader.readDouble();
		for (let current1: number = 0; current1 < numPoints; current1++) {
			shpReader.readDouble();
		}
		return result;
	}
	private static readSurface(shpReader: BinaryReader): ShapefileRecord {
		let numParts: number, numPoints: number;
		return ((() => { let $ret = ShapeFileUtil.readSurface1(shpReader, numParts, numPoints); numParts = $ret.p1; numPoints = $ret.p2; return $ret.ret; })());
	}
	private static readSurface1(shpReader: BinaryReader, numParts: number, numPoints: number): { ret: ShapefileRecord; p1: number; p2: number; } {
		let xymin: Point = ((() => {
			let $ret = PointUtil.create();
			$ret.x = shpReader.readDouble();
			$ret.y = shpReader.readDouble();
			return $ret;
		})());
		let xymax: Point = ((() => {
			let $ret = PointUtil.create();
			$ret.x = shpReader.readDouble();
			$ret.y = shpReader.readDouble();
			return $ret;
		})());
		let bounds: Rect = new Rect(0, xymin.x, xymin.y, xymax.x - xymin.x, xymax.y - xymin.y);
		let p: Point = PointUtil.create();
		numParts = shpReader.readInt32();
		numPoints = shpReader.readInt32();
		let partindex: number[] = <number[]>new Array(numParts);
		for (let i: number = 0; i < numParts; ++i) {
			partindex[i] = shpReader.readInt32();
		}
		let pointCollections: List$1<List$1<Point>> = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 0);
		for (let i1: number = 0; i1 < numParts; ++i1) {
			let partsize: number = (i1 < numParts - 1 ? partindex[i1 + 1] : numPoints) - partindex[i1];
			let pointCollection: List$1<Point> = new List$1<Point>(Point_$type, 2, partsize);
			p = PointUtil.create();
			p.x = shpReader.readDouble();
			p.y = shpReader.readDouble();
			for (let j: number = 1; j < partsize; ++j) {
				p = PointUtil.create();
				p.x = shpReader.readDouble();
				p.y = shpReader.readDouble();
				pointCollection.add(p);
			}
			if (pointCollection.count > 1) {
				pointCollections.add(pointCollection);
			}
		}
		return {
			ret: ((() => {
				let $ret = new ShapefileRecord();
				$ret.bounds = bounds;
				$ret.points = pointCollections;
				return $ret;
			})()),
			p1: numParts,
			p2: numPoints

		};
	}
	private static dbfBaseDataTypes: Dictionary$2<string, XBaseDataType> = null;
	private static initDataTypes(): void {
		ShapeFileUtil.dbfBaseDataTypes = new Dictionary$2<string, XBaseDataType>(String_$type, XBaseDataType_$type, 0);
		ShapeFileUtil.dbfBaseDataTypes.item('C', XBaseDataType.Character);
		ShapeFileUtil.dbfBaseDataTypes.item('N', XBaseDataType.Number);
		ShapeFileUtil.dbfBaseDataTypes.item('L', XBaseDataType.Logical);
		ShapeFileUtil.dbfBaseDataTypes.item('D', XBaseDataType.Date);
		ShapeFileUtil.dbfBaseDataTypes.item('M', XBaseDataType.Memo);
		ShapeFileUtil.dbfBaseDataTypes.item('F', XBaseDataType.FloatingPoint);
		ShapeFileUtil.dbfBaseDataTypes.item('B', XBaseDataType.Binary);
		ShapeFileUtil.dbfBaseDataTypes.item('G', XBaseDataType.General);
		ShapeFileUtil.dbfBaseDataTypes.item('P', XBaseDataType.Picture);
		ShapeFileUtil.dbfBaseDataTypes.item('Y', XBaseDataType.Currency);
		ShapeFileUtil.dbfBaseDataTypes.item('T', XBaseDataType.DateTime);
		ShapeFileUtil.dbfBaseDataTypes.item('I', XBaseDataType.Integer);
		ShapeFileUtil.dbfBaseDataTypes.item('V', XBaseDataType.VariField);
		ShapeFileUtil.dbfBaseDataTypes.item('X', XBaseDataType.Variant);
		ShapeFileUtil.dbfBaseDataTypes.item('@', XBaseDataType.Timestamp);
		ShapeFileUtil.dbfBaseDataTypes.item('O', XBaseDataType.double1);
		ShapeFileUtil.dbfBaseDataTypes.item('+', XBaseDataType.AutoIncrement);
	}
	static staticInit(): void {
		ShapeFileUtil.initDataTypes();
	}
}


(function(v) { callStaticConstructors(); })(true);
