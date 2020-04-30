/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { Line } from "./Line";
import { AppearanceHelper } from "./AppearanceHelper";
import { Base, Type, markType } from "./type";
import { RectData } from "./RectData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";

/**
 * @hidden 
 */
export class LineVisualData extends PrimitiveVisualData {
	static $t: Type = markType(LineVisualData, 'LineVisualData', (<any>PrimitiveVisualData).$type);
	protected get_type(): string {
		return "Line";
	}
	get type(): string {
		return this.get_type();
	}
	constructor(initNumber: number);
	constructor(initNumber: number, name: string, line: Line);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(1, "line1");
				this._x1 = 0;
				this._y1 = 0;
				this._x2 = 0;
				this._y2 = 0;
			}
			break;

			case 1:
			{
				let name: string = <string>_rest[0];
				let line: Line = <Line>_rest[1];
				super(1, name);
				this._x1 = 0;
				this._y1 = 0;
				this._x2 = 0;
				this._y2 = 0;
				this.x1 = line.x1;
				this.y1 = line.y1;
				this.x2 = line.x2;
				this.y2 = line.y2;
				AppearanceHelper.getShapeAppearance(this.appearance, line);
			}
			break;

		}

	}
	private _x1: number;
	get x1(): number {
		return this._x1;
	}
	set x1(value: number) {
		this._x1 = value;
	}
	private _y1: number;
	get y1(): number {
		return this._y1;
	}
	set y1(value: number) {
		this._y1 = value;
	}
	private _x2: number;
	get x2(): number {
		return this._x2;
	}
	set x2(value: number) {
		this._x2 = value;
	}
	private _y2: number;
	get y2(): number {
		return this._y2;
	}
	set y2(value: number) {
		this._y2 = value;
	}
	protected serializeOverride(): string {
		return "x1: " + this.x1 + ", y1: " + this.y1 + ", x2: " + this.x2 + ", y2: " + this.y2;
	}
	scaleByViewport(viewport: RectData): void {
		super.scaleByViewport(viewport);
		this.x1 = (this.x1 - viewport.left) / viewport.width;
		this.y1 = (this.y1 - viewport.top) / viewport.height;
	}
	getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void {
		let current = new List$1<PointData>((<any>PointData).$type, 0);
		points.add(current);
		current.add(new PointData(this.x1, this.y1));
		current.add(new PointData(this.x2, this.y2));
	}
}


