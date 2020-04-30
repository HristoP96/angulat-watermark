/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { TreemapLabelVisualData } from "./TreemapLabelVisualData";
import { RectData } from "igniteui-core/RectData";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class TreemapNodeVisualData extends Base {
	static $t: Type = markType(TreemapNodeVisualData, 'TreemapNodeVisualData');
	private _nodeRect: PrimitiveVisualData = null;
	get nodeRect(): PrimitiveVisualData {
		return this._nodeRect;
	}
	set nodeRect(value: PrimitiveVisualData) {
		this._nodeRect = value;
	}
	private _headerRect: PrimitiveVisualData = null;
	get headerRect(): PrimitiveVisualData {
		return this._headerRect;
	}
	set headerRect(value: PrimitiveVisualData) {
		this._headerRect = value;
	}
	private _label: TreemapLabelVisualData = null;
	get label(): TreemapLabelVisualData {
		return this._label;
	}
	set label(value: TreemapLabelVisualData) {
		this._label = value;
	}
	scaleByViewport(viewport: RectData): void {
		if (this.nodeRect != null) {
			this.nodeRect.scaleByViewport(viewport);
		}
		if (this.headerRect != null) {
			this.headerRect.scaleByViewport(viewport);
		}
		if (this.label != null) {
			this.label.scaleByViewport(viewport);
		}
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		let first: boolean = true;
		sb.appendLine1("{");
		if (this.nodeRect != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("nodeRect: ");
			sb.append5(this.nodeRect.serialize());
		}
		if (this.headerRect != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("headerRect: ");
			sb.append5(this.headerRect.serialize());
		}
		if (this.label != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("label: ");
			sb.append5(this.label.serialize());
		}
		sb.appendLine1("");
		sb.appendLine1("}");
		return sb.toString();
	}
}


