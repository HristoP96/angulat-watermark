/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { List$1 } from "./List$1";
import { GeometryData } from "./GeometryData";
import { Path } from "./Path";
import { AppearanceHelper } from "./AppearanceHelper";
import { Line } from "./Line";
import { StringBuilder } from "./StringBuilder";
import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "./type";
import { RectData } from "./RectData";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";

/**
 * @hidden 
 */
export class PathVisualData extends PrimitiveVisualData {
	static $t: Type = markType(PathVisualData, 'PathVisualData', (<any>PrimitiveVisualData).$type);
	protected get_type(): string {
		return "Path";
	}
	get type(): string {
		return this.get_type();
	}
	constructor(initNumber: number);
	constructor(initNumber: number, name: string, path: Path);
	constructor(initNumber: number, name: string, line: Line);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(1, "path1");
				this._data = null;
				this.data = new List$1<GeometryData>((<any>GeometryData).$type, 0);
			}
			break;

			case 1:
			{
				let name: string = <string>_rest[0];
				let path: Path = <Path>_rest[1];
				super(1, name);
				this._data = null;
				this.data = AppearanceHelper.fromGeometry(path.data);
				AppearanceHelper.getShapeAppearance(this.appearance, path);
			}
			break;

			case 2:
			{
				let name: string = <string>_rest[0];
				let line: Line = <Line>_rest[1];
				super(1, name);
				this._data = null;
				this.data = AppearanceHelper.fromLineData(line);
				AppearanceHelper.getShapeAppearance(this.appearance, line);
			}
			break;

		}

	}
	private _data: List$1<GeometryData>;
	get data(): List$1<GeometryData> {
		return this._data;
	}
	set data(value: List$1<GeometryData>) {
		this._data = value;
	}
	protected serializeOverride(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("data: [");
		for (let i = 0; i < this.data.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5((this.data._inner[i] != null ? this.data._inner[i].serialize() : "null"));
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	scaleByViewport(viewport: RectData): void {
		super.scaleByViewport(viewport);
		for (let data of fromEnum<GeometryData>(this.data)) {
			data.scaleByViewport(viewport);
		}
	}
	getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void {
		for (let i = 0; i < this.data.count; i++) {
			let data = this.data._inner[i];
			data.getPointsOverride(points, settings);
		}
	}
}


