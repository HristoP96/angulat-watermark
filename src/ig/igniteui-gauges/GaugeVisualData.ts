/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { ScaleVisualData } from "./ScaleVisualData";
import { ScaleLabelVisualDataList } from "./ScaleLabelVisualDataList";
import { ScaleTickmarkVisualDataList } from "./ScaleTickmarkVisualDataList";
import { NeedleVisualData } from "./NeedleVisualData";
import { RangeVisualDataList } from "./RangeVisualDataList";
import { RectData } from "igniteui-core/RectData";
import { ScaleLabelVisualData } from "./ScaleLabelVisualData";
import { ScaleTickmarkVisualData } from "./ScaleTickmarkVisualData";
import { RangeVisualData } from "./RangeVisualData";
import { List$1 } from "igniteui-core/List$1";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class GaugeVisualData extends Base {
	static $t: Type = markType(GaugeVisualData, 'GaugeVisualData');
	private _scalePath: PrimitiveVisualData = null;
	get scalePath(): PrimitiveVisualData {
		return this._scalePath;
	}
	set scalePath(value: PrimitiveVisualData) {
		this._scalePath = value;
	}
	private _needlePath: PrimitiveVisualData = null;
	get needlePath(): PrimitiveVisualData {
		return this._needlePath;
	}
	set needlePath(value: PrimitiveVisualData) {
		this._needlePath = value;
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
	private _scale: ScaleVisualData = null;
	get scale(): ScaleVisualData {
		return this._scale;
	}
	set scale(value: ScaleVisualData) {
		this._scale = value;
	}
	private _scaleLabels: ScaleLabelVisualDataList = null;
	get scaleLabels(): ScaleLabelVisualDataList {
		return this._scaleLabels;
	}
	set scaleLabels(value: ScaleLabelVisualDataList) {
		this._scaleLabels = value;
	}
	private _scaleTickmarks: ScaleTickmarkVisualDataList = null;
	get scaleTickmarks(): ScaleTickmarkVisualDataList {
		return this._scaleTickmarks;
	}
	set scaleTickmarks(value: ScaleTickmarkVisualDataList) {
		this._scaleTickmarks = value;
	}
	private _needle: NeedleVisualData = null;
	get needle(): NeedleVisualData {
		return this._needle;
	}
	set needle(value: NeedleVisualData) {
		this._needle = value;
	}
	private _ranges: RangeVisualDataList = null;
	get ranges(): RangeVisualDataList {
		return this._ranges;
	}
	set ranges(value: RangeVisualDataList) {
		this._ranges = value;
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
		if (this.needlePath != null) {
			this.needlePath.scaleByViewport(this.viewport);
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
			for (let label of fromEnum<ScaleLabelVisualData>(this.scaleLabels)) {
				label.scaleByViewport(this.viewport);
			}
		}
		if (this.scaleTickmarks != null) {
			for (let tickmark of fromEnum<ScaleTickmarkVisualData>(this.scaleTickmarks)) {
				if (tickmark.tickPath != null) {
					tickmark.tickPath.scaleByViewport(this.viewport);
				}
			}
		}
		if (this.ranges != null) {
			for (let range of fromEnum<RangeVisualData>(this.ranges)) {
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
		if (this.needlePath != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("needlePath: ");
			sb.appendLine1(this.needlePath.serialize());
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
			for (let label of fromEnum<ScaleLabelVisualData>(this.scaleLabels)) {
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
			for (let tickmark of fromEnum<ScaleTickmarkVisualData>(this.scaleTickmarks)) {
				if (subFirst1) {
					subFirst1 = false;
				} else {
					sb.append5(", ");
				}
				sb.appendLine1(tickmark.serialize());
			}
			sb.appendLine1("]");
		}
		if (this.needle != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("needle: ");
			sb.appendLine1(this.needle.serialize());
		}
		if (this.ranges != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			let subFirst2: boolean = true;
			sb.append5("ranges: [");
			for (let range of fromEnum<RangeVisualData>(this.ranges)) {
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


