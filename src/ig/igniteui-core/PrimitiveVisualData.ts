/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";
import { PrimitiveAppearanceData } from "./PrimitiveAppearanceData";
import { ShapeTags } from "./ShapeTags";
import { RectData } from "./RectData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";
import { StringBuilder } from "./StringBuilder";

/**
 * @hidden 
 */
export abstract class PrimitiveVisualData extends Base implements IVisualData {
	static $t: Type = markType(PrimitiveVisualData, 'PrimitiveVisualData', (<any>Base).$type, [IVisualData_$type]);
	constructor(initNumber: number);
	constructor(initNumber: number, name: string);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let name: string = <string>_rest[0];
				this.name = name;
				this.tags = new ShapeTags();
				this.appearance = new PrimitiveAppearanceData();
			}
			break;

		}

	}
	private _appearance: PrimitiveAppearanceData = null;
	get appearance(): PrimitiveAppearanceData {
		return this._appearance;
	}
	set appearance(value: PrimitiveAppearanceData) {
		this._appearance = value;
	}
	private _tags: ShapeTags = null;
	get tags(): ShapeTags {
		return this._tags;
	}
	set tags(value: ShapeTags) {
		this._tags = value;
	}
	abstract get type(): string;
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	scaleByViewport(viewport: RectData): void {
		this.appearance.scaleByViewport(viewport);
	}
	getPoints(settings: GetPointsSettings): List$1<List$1<PointData>> {
		let points = new List$1<List$1<PointData>>((<any>List$1).$type.specialize((<any>PointData).$type), 0);
		this.getPointsOverride(points, settings);
		return points;
	}
	abstract getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void;
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("appearance: " + (this.appearance != null ? this.appearance.serialize() : "null") + ", ");
		sb.appendLine1("tags: [");
		for (let i = 0; i < this.tags.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5("\"" + this.tags._inner[i] + "\"");
		}
		sb.appendLine1("],");
		sb.appendLine1("type: \"" + this.type + "\", ");
		sb.appendLine1("name: \"" + this.name + "\", ");
		sb.appendLine1(this.serializeOverride());
		sb.appendLine1("}");
		return sb.toString();
	}
	protected serializeOverride(): string {
		return "";
	}
}


