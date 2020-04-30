/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { SparklineAxisVisualData } from "./SparklineAxisVisualData";
import { PathVisualData } from "igniteui-core/PathVisualData";
import { RectData } from "igniteui-core/RectData";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class SparklineVisualData extends Base {
	static $t: Type = markType(SparklineVisualData, 'SparklineVisualData');
	constructor() {
		super();
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _horizontalAxis: SparklineAxisVisualData = null;
	get horizontalAxis(): SparklineAxisVisualData {
		return this._horizontalAxis;
	}
	set horizontalAxis(value: SparklineAxisVisualData) {
		this._horizontalAxis = value;
	}
	private _verticalAxis: SparklineAxisVisualData = null;
	get verticalAxis(): SparklineAxisVisualData {
		return this._verticalAxis;
	}
	set verticalAxis(value: SparklineAxisVisualData) {
		this._verticalAxis = value;
	}
	private _sparkPath: PathVisualData = null;
	get sparkPath(): PathVisualData {
		return this._sparkPath;
	}
	set sparkPath(value: PathVisualData) {
		this._sparkPath = value;
	}
	private _negativeSparkPath: PathVisualData = null;
	get negativeSparkPath(): PathVisualData {
		return this._negativeSparkPath;
	}
	set negativeSparkPath(value: PathVisualData) {
		this._negativeSparkPath = value;
	}
	private _trendLinePath: PathVisualData = null;
	get trendLinePath(): PathVisualData {
		return this._trendLinePath;
	}
	set trendLinePath(value: PathVisualData) {
		this._trendLinePath = value;
	}
	private _rangePath: PathVisualData = null;
	get rangePath(): PathVisualData {
		return this._rangePath;
	}
	set rangePath(value: PathVisualData) {
		this._rangePath = value;
	}
	private _markersPath: PathVisualData = null;
	get markersPath(): PathVisualData {
		return this._markersPath;
	}
	set markersPath(value: PathVisualData) {
		this._markersPath = value;
	}
	private _negativeMarkersPath: PathVisualData = null;
	get negativeMarkersPath(): PathVisualData {
		return this._negativeMarkersPath;
	}
	set negativeMarkersPath(value: PathVisualData) {
		this._negativeMarkersPath = value;
	}
	private _lowMarkersPath: PathVisualData = null;
	get lowMarkersPath(): PathVisualData {
		return this._lowMarkersPath;
	}
	set lowMarkersPath(value: PathVisualData) {
		this._lowMarkersPath = value;
	}
	private _highMarkersPath: PathVisualData = null;
	get highMarkersPath(): PathVisualData {
		return this._highMarkersPath;
	}
	set highMarkersPath(value: PathVisualData) {
		this._highMarkersPath = value;
	}
	private _firstMarkerPath: PathVisualData = null;
	get firstMarkerPath(): PathVisualData {
		return this._firstMarkerPath;
	}
	set firstMarkerPath(value: PathVisualData) {
		this._firstMarkerPath = value;
	}
	private _lastMarkerPath: PathVisualData = null;
	get lastMarkerPath(): PathVisualData {
		return this._lastMarkerPath;
	}
	set lastMarkerPath(value: PathVisualData) {
		this._lastMarkerPath = value;
	}
	private _viewport: RectData = null;
	get viewport(): RectData {
		return this._viewport;
	}
	set viewport(value: RectData) {
		this._viewport = value;
	}
	private _marginViewport: RectData = null;
	get marginViewport(): RectData {
		return this._marginViewport;
	}
	set marginViewport(value: RectData) {
		this._marginViewport = value;
	}
	scaleByViewport(): void {
		this.horizontalAxis.scaleByViewport(this.viewport);
		this.verticalAxis.scaleByViewport(this.viewport);
		if (this.sparkPath != null) {
			this.sparkPath.scaleByViewport(this.marginViewport);
		}
		if (this.negativeSparkPath != null) {
			this.negativeSparkPath.scaleByViewport(this.marginViewport);
		}
		if (this.trendLinePath != null) {
			this.trendLinePath.scaleByViewport(this.marginViewport);
		}
		if (this.rangePath != null) {
			this.rangePath.scaleByViewport(this.marginViewport);
		}
		if (this.markersPath != null) {
			this.markersPath.scaleByViewport(this.marginViewport);
		}
		if (this.negativeMarkersPath != null) {
			this.negativeMarkersPath.scaleByViewport(this.marginViewport);
		}
		if (this.lowMarkersPath != null) {
			this.lowMarkersPath.scaleByViewport(this.marginViewport);
		}
		if (this.highMarkersPath != null) {
			this.highMarkersPath.scaleByViewport(this.marginViewport);
		}
		if (this.firstMarkerPath != null) {
			this.firstMarkerPath.scaleByViewport(this.marginViewport);
		}
		if (this.lastMarkerPath != null) {
			this.lastMarkerPath.scaleByViewport(this.marginViewport);
		}
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("name: \"" + this.name + "\"");
		if (this.horizontalAxis != null) {
			sb.appendLine1(",");
			sb.append5("horizontalAxis: " + this.horizontalAxis.serialize());
		}
		if (this.horizontalAxis != null) {
			sb.appendLine1(",");
			sb.append5("verticalAxis: " + this.verticalAxis.serialize());
		}
		if (this.sparkPath != null) {
			sb.appendLine1(",");
			sb.append5("sparkPath: " + this.sparkPath.serialize());
		}
		if (this.negativeSparkPath != null) {
			sb.appendLine1(",");
			sb.append5("negativeSparkPath: " + this.negativeSparkPath.serialize());
		}
		if (this.trendLinePath != null) {
			sb.appendLine1(",");
			sb.append5("trendLinePath: " + this.trendLinePath.serialize());
		}
		if (this.rangePath != null) {
			sb.appendLine1(",");
			sb.append5("rangePath: " + this.rangePath.serialize());
		}
		if (this.markersPath != null) {
			sb.appendLine1(",");
			sb.append5("markersPath: " + this.markersPath.serialize());
		}
		if (this.negativeMarkersPath != null) {
			sb.appendLine1(",");
			sb.append5("negativeMarkersPath: " + this.negativeMarkersPath.serialize());
		}
		if (this.lowMarkersPath != null) {
			sb.appendLine1(",");
			sb.append5("lowMarkersPath: " + this.lowMarkersPath.serialize());
		}
		if (this.highMarkersPath != null) {
			sb.appendLine1(",");
			sb.append5("highMarkersPath: " + this.highMarkersPath.serialize());
		}
		if (this.firstMarkerPath != null) {
			sb.appendLine1(",");
			sb.append5("firstMarkerPath: " + this.firstMarkerPath.serialize());
		}
		if (this.lastMarkerPath != null) {
			sb.appendLine1(",");
			sb.append5("lastMarkerPath: " + this.lastMarkerPath.serialize());
		}
		if (this.viewport != null) {
			sb.append5(",");
			sb.append5("viewPort:" + this.viewport.serialize());
		}
		if (this.marginViewport != null) {
			sb.append5(",");
			sb.append5("marginViewPort:" + this.marginViewport.serialize());
		}
		sb.appendLine1("");
		sb.appendLine1("}");
		return sb.toString();
	}
}


