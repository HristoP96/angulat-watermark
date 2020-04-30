/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { RingSeriesVisualDataList } from "./RingSeriesVisualDataList";
import { RectData } from "igniteui-core/RectData";
import { RingSeriesVisualData } from "./RingSeriesVisualData";
import { RingVisualData } from "./RingVisualData";
import { ArcVisualData } from "./ArcVisualData";
import { SliceVisualData } from "./SliceVisualData";
import { List$1 } from "igniteui-core/List$1";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class DoughnutChartVisualData extends Base {
	static $t: Type = markType(DoughnutChartVisualData, 'DoughnutChartVisualData');
	private _series: RingSeriesVisualDataList = null;
	get series(): RingSeriesVisualDataList {
		return this._series;
	}
	set series(value: RingSeriesVisualDataList) {
		this._series = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _holeRadius: number = 0;
	get holeRadius(): number {
		return this._holeRadius;
	}
	set holeRadius(value: number) {
		this._holeRadius = value;
	}
	private _dipScalingRatio: number = 0;
	get dipScalingRatio(): number {
		return this._dipScalingRatio;
	}
	set dipScalingRatio(value: number) {
		this._dipScalingRatio = value;
	}
	constructor() {
		super();
		this.dipScalingRatio = 1;
	}
	scaleByViewport(): void {
		if (this.series != null) {
			for (let series of fromEnum<RingSeriesVisualData>(this.series)) {
				for (let ring of fromEnum<RingVisualData>(series.rings)) {
					for (let arc of fromEnum<ArcVisualData>(ring.arcs)) {
						for (let slice of fromEnum<SliceVisualData>(arc.slices)) {
							slice.scaleByViewport(this.viewport);
						}
					}
				}
			}
		}
	}
	serialize(): string {
		let sb: StringBuilder = new StringBuilder(0);
		let first: boolean = true;
		sb.appendLine1("{");
		if (!isNaN_(this.width)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("width: ");
			sb.appendLine1(this.width.toString());
		}
		if (!isNaN_(this.height)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("height: ");
			sb.appendLine1(this.height.toString());
		}
		if (!isNaN_(this.holeRadius)) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.append5("holeRadius: ");
			sb.appendLine1(this.holeRadius.toString());
		}
		if (this.viewport != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.appendLine1("viewport: {");
			sb.append5("left: " + this.viewport.left + ", top: " + this.viewport.top + ", width: " + this.viewport.width + ", height: " + this.viewport.height);
			sb.appendLine1("}");
		}
		if (this.series != null) {
			if (first) {
				first = false;
			} else {
				sb.append5(", ");
			}
			sb.appendLine1("series: [");
			for (let i = 0; i < this.series.count; i++) {
				if (i != 0) {
					sb.append5(", ");
				}
				sb.append5(this.series._inner[i].serialize());
			}
			sb.appendLine1("]");
		}
		if (!first) {
			sb.append5(", ");
		}
		sb.append5("dipScalingRatio: " + this.dipScalingRatio.toString());
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


