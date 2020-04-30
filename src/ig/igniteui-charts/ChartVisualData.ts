/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { AxisVisualDataList } from "./AxisVisualDataList";
import { SeriesVisualDataList } from "./SeriesVisualDataList";
import { ChartTitleVisualData } from "./ChartTitleVisualData";
import { RectData } from "igniteui-core/RectData";
import { AxisVisualData } from "./AxisVisualData";
import { SeriesVisualData } from "./SeriesVisualData";
import { List$1 } from "igniteui-core/List$1";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { GetPointsSettings } from "igniteui-core/GetPointsSettings";
import { PointData } from "igniteui-core/PointData";
import { PrimitiveVisualDataList } from "igniteui-core/PrimitiveVisualDataList";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";

/**
 * @hidden 
 */
export class ChartVisualData extends Base {
	static $t: Type = markType(ChartVisualData, 'ChartVisualData');
	constructor() {
		super();
		this.dipScalingRatio = 1;
		this.axes = new AxisVisualDataList();
		this.series = new SeriesVisualDataList();
	}
	private _axes: AxisVisualDataList = null;
	get axes(): AxisVisualDataList {
		return this._axes;
	}
	set axes(value: AxisVisualDataList) {
		this._axes = value;
	}
	private _series: SeriesVisualDataList = null;
	get series(): SeriesVisualDataList {
		return this._series;
	}
	set series(value: SeriesVisualDataList) {
		this._series = value;
	}
	private _title: ChartTitleVisualData = null;
	get title(): ChartTitleVisualData {
		return this._title;
	}
	set title(value: ChartTitleVisualData) {
		this._title = value;
	}
	private _subtitle: ChartTitleVisualData = null;
	get subtitle(): ChartTitleVisualData {
		return this._subtitle;
	}
	set subtitle(value: ChartTitleVisualData) {
		this._subtitle = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _contentArea: RectData = null;
	get contentArea(): RectData {
		return this._contentArea;
	}
	set contentArea(value: RectData) {
		this._contentArea = value;
	}
	private _centralArea: RectData = null;
	get centralArea(): RectData {
		return this._centralArea;
	}
	set centralArea(value: RectData) {
		this._centralArea = value;
	}
	private _plotArea: RectData = null;
	get plotArea(): RectData {
		return this._plotArea;
	}
	set plotArea(value: RectData) {
		this._plotArea = value;
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _isViewportScaled: boolean = false;
	get isViewportScaled(): boolean {
		return this._isViewportScaled;
	}
	set isViewportScaled(value: boolean) {
		this._isViewportScaled = value;
	}
	scaleByViewport(): void {
		for (let axis of fromEnum<AxisVisualData>(this.axes)) {
			axis.scaleByViewport();
		}
		for (let series of fromEnum<SeriesVisualData>(this.series)) {
			series.scaleByViewport();
		}
		if (this.title != null) {
			this.title.scaleByViewport();
		}
		if (this.subtitle != null) {
			this.subtitle.scaleByViewport();
		}
	}
	getBounds(): RectData {
		return new RectData(0, 0, this.width, this.height);
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("name: '" + this.name + "',");
		sb.appendLine1("width: " + this.width + ",");
		sb.appendLine1("height: " + this.height + ",");
		sb.appendLine1("plotArea: { left: " + this.plotArea.left + ", top: " + this.plotArea.top + ", width: " + this.plotArea.width + ", height: " + this.plotArea.height + "}, ");
		sb.appendLine1("contentArea: { left: " + this.contentArea.left + ", top: " + this.contentArea.top + ", width: " + this.contentArea.width + ", height: " + this.contentArea.height + "}, ");
		sb.appendLine1("centralArea: { left: " + this.centralArea.left + ", top: " + this.centralArea.top + ", width: " + this.centralArea.width + ", height: " + this.centralArea.height + "}, ");
		sb.appendLine1("isViewportScaled: " + (this.isViewportScaled ? "true" : "false") + ", ");
		sb.appendLine1("axes: [");
		for (let i = 0; i < this.axes.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.axes._inner[i].serialize());
		}
		sb.appendLine1("],");
		sb.appendLine1("series: [");
		for (let i1 = 0; i1 < this.series.count; i1++) {
			if (i1 != 0) {
				sb.append5(", ");
			}
			sb.append5(this.series._inner[i1].serialize());
		}
		sb.appendLine1("]");
		if (this.title != null) {
			sb.appendLine1(", title: " + this.title.serialize());
		}
		if (this.subtitle != null) {
			sb.appendLine1(", subtitle: " + this.subtitle.serialize());
		}
		sb.append5(", dipScalingRatio: " + this.dipScalingRatio.toString());
		sb.appendLine1("}");
		return sb.toString();
	}
	getSerializedSeriesPoints(seriesName: string, tag: string, settings: GetPointsSettings): string {
		let points = new List$1<List$1<PointData>>((<any>List$1).$type.specialize((<any>PointData).$type), 0);
		for (let i = 0; i < this.series.count; i++) {
			if (this.series._inner[i].name == seriesName) {
				let hasTag = this.series._inner[i].shapes.containingTag(tag);
				for (let j = 0; j < hasTag.count; j++) {
					let shape = hasTag._inner[i];
					shape.getPointsOverride(points, settings);
				}
			}
		}
		let sb = new StringBuilder(0);
		sb.appendLine1("[");
		for (let i1 = 0; i1 < points.count; i1++) {
			let pointList = points._inner[i1];
			sb.appendLine1("[");
			for (let j1 = 0; j1 < pointList.count; j1++) {
				if (j1 != 0) {
					sb.append5(", ");
				}
				sb.append5("{ x: " + pointList._inner[j1].x + ", y: " + pointList._inner[j1].y + "}");
			}
			sb.appendLine1("]");
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	private _dipScalingRatio: number = 0;
	get dipScalingRatio(): number {
		return this._dipScalingRatio;
	}
	set dipScalingRatio(value: number) {
		this._dipScalingRatio = value;
	}
}


