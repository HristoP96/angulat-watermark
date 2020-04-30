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
import { StringBuilder } from "./StringBuilder";

/**
 * @hidden 
 */
export abstract class SegmentData extends Base implements IVisualData {
	static $t: Type = markType(SegmentData, 'SegmentData', (<any>Base).$type, [IVisualData_$type]);
	abstract get type(): string;
	abstract scaleByViewport(viewport: RectData): void;
	abstract getPointsOverride(current: List$1<PointData>, settings: GetPointsSettings): void;
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("type: \"" + this.type + "\", ");
		sb.appendLine1(this.serializeOverride());
		sb.appendLine1("}");
		return sb.toString();
	}
	protected serializeOverride(): string {
		return "";
	}
}


