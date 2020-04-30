/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { LinearScaleVisualData } from "./LinearScaleVisualData";
import { LinearGraphScaleLabelVisualDataList } from "./LinearGraphScaleLabelVisualDataList";
import { LinearGraphScaleTickmarkVisualDataList } from "./LinearGraphScaleTickmarkVisualDataList";
import { LinearGraphRangeVisualDataList } from "./LinearGraphRangeVisualDataList";
import { LinearGraphToolTipVisualData } from "./LinearGraphToolTipVisualData";
import { RectData } from "igniteui-core/RectData";
import { LinearGraphScaleLabelVisualData } from "./LinearGraphScaleLabelVisualData";
import { LinearGraphScaleTickmarkVisualData } from "./LinearGraphScaleTickmarkVisualData";
import { LinearGraphRangeVisualData } from "./LinearGraphRangeVisualData";
import { List$1 } from "igniteui-core/List$1";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { ToolTipItemVisualData } from "./ToolTipItemVisualData";

/**
 * @hidden 
 */
export abstract class LinearGraphVisualData extends Base {
	static $t: Type = markType(LinearGraphVisualData, 'LinearGraphVisualData');
	private _scalePath: PrimitiveVisualData = null;
	get scalePath(): PrimitiveVisualData {
		return this._scalePath;
	}
	set scalePath(value: PrimitiveVisualData) {
		this._scalePath = value;
	}
	private _backingPath: PrimitiveVisualData = null;
	get backingPath(): PrimitiveVisualData {
		return this._backingPath;
	}
	set backingPath(value: PrimitiveVisualData) {
		this._backingPath = value;
	}
	private _underlayPath: PrimitiveVisualData = null;
	get underlayPath(): PrimitiveVisualData {
		return this._underlayPath;
	}
	set underlayPath(value: PrimitiveVisualData) {
		this._underlayPath = value;
	}
	private _overlayPath: PrimitiveVisualData = null;
	get overlayPath(): PrimitiveVisualData {
		return this._overlayPath;
	}
	set overlayPath(value: PrimitiveVisualData) {
		this._overlayPath = value;
	}
	private _scale: LinearScaleVisualData = null;
	get scale(): LinearScaleVisualData {
		return this._scale;
	}
	set scale(value: LinearScaleVisualData) {
		this._scale = value;
	}
	private _scaleLabels: LinearGraphScaleLabelVisualDataList = null;
	get scaleLabels(): LinearGraphScaleLabelVisualDataList {
		return this._scaleLabels;
	}
	set scaleLabels(value: LinearGraphScaleLabelVisualDataList) {
		this._scaleLabels = value;
	}
	private _scaleTickmarks: LinearGraphScaleTickmarkVisualDataList = null;
	get scaleTickmarks(): LinearGraphScaleTickmarkVisualDataList {
		return this._scaleTickmarks;
	}
	set scaleTickmarks(value: LinearGraphScaleTickmarkVisualDataList) {
		this._scaleTickmarks = value;
	}
	private _ranges: LinearGraphRangeVisualDataList = null;
	get ranges(): LinearGraphRangeVisualDataList {
		return this._ranges;
	}
	set ranges(value: LinearGraphRangeVisualDataList) {
		this._ranges = value;
	}
	private _toolTip: LinearGraphToolTipVisualData = null;
	get toolTip(): LinearGraphToolTipVisualData {
		return this._toolTip;
	}
	set toolTip(value: LinearGraphToolTipVisualData) {
		this._toolTip = value;
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	scaleByViewport(): void {
		if (this.scalePath != null) {
			this.scalePath.scaleByViewport(this.viewport);
		}
		if (this.backingPath != null) {
			this.backingPath.scaleByViewport(this.viewport);
		}
		if (this.underlayPath != null) {
			this.underlayPath.scaleByViewport(this.viewport);
		}
		if (this.overlayPath != null) {
			this.overlayPath.scaleByViewport(this.viewport);
		}
		if (this.scaleLabels != null) {
			for (let label of fromEnum<LinearGraphScaleLabelVisualData>(this.scaleLabels)) {
				label.scaleByViewport(this.viewport);
			}
		}
		if (this.scaleTickmarks != null) {
			for (let tickmark of fromEnum<LinearGraphScaleTickmarkVisualData>(this.scaleTickmarks)) {
				if (tickmark.tickPath != null) {
					tickmark.tickPath.scaleByViewport(this.viewport);
				}
			}
		}
		if (this.ranges != null) {
			for (let range of fromEnum<LinearGraphRangeVisualData>(this.ranges)) {
				if (range.rangePath != null) {
					range.rangePath.scaleByViewport(this.viewport);
				}
			}
		}
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		let first: boolean = true;
		sb.appendLine1("{");
		if (this.scalePath != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("scalePath: ");
			sb.appendLine1(this.scalePath.serialize());
		}
		if (this.backingPath != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("backingPath: ");
			sb.appendLine1(this.backingPath.serialize());
		}
		if (this.underlayPath != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("underlayPath: ");
			sb.appendLine1(this.underlayPath.serialize());
		}
		if (this.overlayPath != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("overlayPath: ");
			sb.appendLine1(this.overlayPath.serialize());
		}
		if (this.scaleLabels != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			let subFirst: boolean = true;
			sb.append5("scaleLabels: [");
			for (let label of fromEnum<LinearGraphScaleLabelVisualData>(this.scaleLabels)) {
				if (subFirst) {
					subFirst = false;
				} else {
					sb.append5(", ");
				}
				sb.appendLine1(label.serialize());
			}
			sb.appendLine1("]");
		}
		if (this.scaleTickmarks != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			let subFirst1: boolean = true;
			sb.append5("scaleTickmarks: [");
			for (let tickmark of fromEnum<LinearGraphScaleTickmarkVisualData>(this.scaleTickmarks)) {
				if (subFirst1) {
					subFirst1 = false;
				} else {
					sb.append5(", ");
				}
				sb.appendLine1(tickmark.serialize());
			}
			sb.appendLine1("]");
		}
		if (this.ranges != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			let subFirst2: boolean = true;
			sb.append5("ranges: [");
			for (let range of fromEnum<LinearGraphRangeVisualData>(this.ranges)) {
				if (subFirst2) {
					subFirst2 = false;
				} else {
					sb.append5(", ");
				}
				sb.appendLine1(range.serialize());
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
		if (this.toolTip != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("toolTip: ");
			sb.append5(this.toolTip.serialize());
		}
		if (first) {
			first = false;
		} else {
			sb.append5(", ");
		}
		sb.append5("viewport: {");
		sb.append5("left: " + this.viewport.left + ", top: " + this.viewport.top + ", width: " + this.viewport.width + ", height: " + this.viewport.height);
		sb.appendLine1("}");
		sb.append5("}");
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


