/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { TreemapNodeVisualDataList } from "./TreemapNodeVisualDataList";
import { RectData } from "igniteui-core/RectData";
import { TreemapNodeVisualData } from "./TreemapNodeVisualData";
import { List$1 } from "igniteui-core/List$1";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class TreemapVisualData extends Base {
	static $t: Type = markType(TreemapVisualData, 'TreemapVisualData');
	private _nodes: TreemapNodeVisualDataList = null;
	get nodes(): TreemapNodeVisualDataList {
		return this._nodes;
	}
	set nodes(value: TreemapNodeVisualDataList) {
		this._nodes = value;
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	scaleByViewport(): void {
		if (this.nodes != null) {
			for (let node of fromEnum<TreemapNodeVisualData>(this.nodes)) {
				node.scaleByViewport(this.viewport);
			}
		}
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		let first: boolean = true;
		sb.appendLine1("{");
		if (this.nodes != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			let subFirst: boolean = true;
			sb.append5("Nodes: [");
			for (let node of fromEnum<TreemapNodeVisualData>(this.nodes)) {
				if (subFirst) {
					subFirst = false;
				} else {
					sb.append5(", ");
				}
				sb.appendLine1(node.serialize());
			}
			sb.appendLine1("]");
		}
		if (this.name != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("name: '");
			sb.append5(this.name);
			sb.appendLine1("'");
		}
		if (first) {
			first = false;
		} else {
			sb.append5(", ");
		}
		sb.append5("viewport: {");
		sb.append5("left: " + this.viewport.left + ", top: " + this.viewport.top + ", width: " + this.viewport.width + ", height: " + this.viewport.height);
		sb.appendLine1("}");
		sb.appendLine1("}");
		return sb.toString();
	}
	private _viewport: RectData = null;
	get viewport(): RectData {
		return this._viewport;
	}
	set viewport(value: RectData) {
		this._viewport = value;
	}
}


