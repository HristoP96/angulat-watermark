/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";
import { RectData } from "./RectData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";

/**
 * @hidden 
 */
export abstract class GeometryData extends Base implements IVisualData {
	static $t: Type = markType(GeometryData, 'GeometryData', (<any>Base).$type, [IVisualData_$type]);
	abstract get type(): string;
	abstract scaleByViewport(viewport: RectData): void;
	abstract getPointsOverride(points: List$1<List$1<PointData>>, settings: GetPointsSettings): void;
	serialize(): string {
		return "{ type: \"" + this.type + "\", " + this.serializeOverride() + "}";
	}
	protected serializeOverride(): string {
		return "";
	}
}


