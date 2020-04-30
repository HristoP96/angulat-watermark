/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { RectData } from "igniteui-core/RectData";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { AxisLabelVisualDataList } from "./AxisLabelVisualDataList";
import { ChartTitleVisualData } from "./ChartTitleVisualData";
import { List$1 } from "igniteui-core/List$1";
import { RectangleVisualData } from "igniteui-core/RectangleVisualData";
import { AxisLabelVisualData } from "./AxisLabelVisualData";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class AxisVisualData extends Base {
	static $t: Type = markType(AxisVisualData, 'AxisVisualData');
	constructor() {
		super();
		this.tickMarksLength = 0;
		this.labels = new AxisLabelVisualDataList();
		this.title = new ChartTitleVisualData();
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _type: string = null;
	get type(): string {
		return this._type;
	}
	set type(value: string) {
		this._type = value;
	}
	private _viewport: RectData = null;
	get viewport(): RectData {
		return this._viewport;
	}
	set viewport(value: RectData) {
		this._viewport = value;
	}
	private _tickMarksLength: number = 0;
	get tickMarksLength(): number {
		return this._tickMarksLength;
	}
	set tickMarksLength(value: number) {
		this._tickMarksLength = value;
	}
	private _tickMarks: PrimitiveVisualData = null;
	get tickMarks(): PrimitiveVisualData {
		return this._tickMarks;
	}
	set tickMarks(value: PrimitiveVisualData) {
		this._tickMarks = value;
	}
	private _labels: AxisLabelVisualDataList = null;
	get labels(): AxisLabelVisualDataList {
		return this._labels;
	}
	set labels(value: AxisLabelVisualDataList) {
		this._labels = value;
	}
	private _axisLine: PrimitiveVisualData = null;
	get axisLine(): PrimitiveVisualData {
		return this._axisLine;
	}
	set axisLine(value: PrimitiveVisualData) {
		this._axisLine = value;
	}
	private _majorLines: PrimitiveVisualData = null;
	get majorLines(): PrimitiveVisualData {
		return this._majorLines;
	}
	set majorLines(value: PrimitiveVisualData) {
		this._majorLines = value;
	}
	private _minorLines: PrimitiveVisualData = null;
	get minorLines(): PrimitiveVisualData {
		return this._minorLines;
	}
	set minorLines(value: PrimitiveVisualData) {
		this._minorLines = value;
	}
	private _strips: PrimitiveVisualData = null;
	get strips(): PrimitiveVisualData {
		return this._strips;
	}
	set strips(value: PrimitiveVisualData) {
		this._strips = value;
	}
	private _labelsPlotArea: RectData = null;
	get labelsPlotArea(): RectData {
		return this._labelsPlotArea;
	}
	set labelsPlotArea(value: RectData) {
		this._labelsPlotArea = value;
	}
	private _labelsViewport: RectData = null;
	get labelsViewport(): RectData {
		return this._labelsViewport;
	}
	set labelsViewport(value: RectData) {
		this._labelsViewport = value;
	}
	private _title: ChartTitleVisualData = null;
	get title(): ChartTitleVisualData {
		return this._title;
	}
	set title(value: ChartTitleVisualData) {
		this._title = value;
	}
	private _annotationBackings: List$1<RectangleVisualData> = null;
	get annotationBackings(): List$1<RectangleVisualData> {
		return this._annotationBackings;
	}
	set annotationBackings(value: List$1<RectangleVisualData>) {
		this._annotationBackings = value;
	}
	scaleByViewport(): void {
		let isHorizontal = true;
		if (Base.equalsStatic(this.type, "NumericYAxis") || Base.equalsStatic(this.type, "CategoryYAxis") || Base.equalsStatic(this.type, "PercentChangeYAxis")) {
			isHorizontal = false;
		}
		for (let label of fromEnum<AxisLabelVisualData>(this.labels)) {
			label.scaleByViewport(this.labelsViewport, isHorizontal);
		}
		this.tickMarks.scaleByViewport(this.labelsViewport);
		this.axisLine.scaleByViewport(this.labelsViewport);
		if (this.title != null) {
			this.title.scaleByViewport1(this.labelsViewport);
		}
		this.majorLines.scaleByViewport(this.viewport);
		this.minorLines.scaleByViewport(this.viewport);
		this.strips.scaleByViewport(this.viewport);
		if (this.annotationBackings != null) {
			for (let backing of fromEnum<RectangleVisualData>(this.annotationBackings)) {
				backing.scaleByViewport(this.labelsViewport);
			}
		}
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("name: \"" + this.name + "\",");
		sb.appendLine1("type: \"" + this.type + "\", ");
		sb.appendLine1("tickMarksLength: \"" + this.tickMarksLength.toString() + "\", ");
		sb.appendLine1("viewport: " + this.viewport.serialize() + ", ");
		sb.appendLine1("labelsViewport: " + this.labelsViewport.serialize() + ", ");
		if (this.labelsPlotArea != null) {
			sb.appendLine1("labelsPlotArea: " + this.labelsPlotArea.serialize() + ", ");
		}
		sb.appendLine1("labels: [");
		for (let i = 0; i < this.labels.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.labels._inner[i].serialize());
		}
		sb.appendLine1("],");
		if (this.title != null) {
			sb.appendLine1("title: " + ((this.title != null) ? this.title.serialize() : "null") + ", ");
		}
		sb.appendLine1("axisLine: " + ((this.axisLine != null) ? this.axisLine.serialize() : "null") + ", ");
		sb.appendLine1("tickMarks: " + ((this.tickMarks != null) ? this.tickMarks.serialize() : "null") + ", ");
		if (this.annotationBackings != null) {
			sb.appendLine1("annotationBackings: [");
			for (let i1 = 0; i1 < this.annotationBackings.count; i1++) {
				if (i1 != 0) {
					sb.append5(", ");
				}
				sb.append5(this.annotationBackings._inner[i1].serialize());
			}
			sb.appendLine1("],");
		}
		if (this.axisLine != null) {
			sb.appendLine1("majorLines: " + ((this.majorLines != null) ? this.majorLines.serialize() : "null") + ", ");
			sb.appendLine1("minorLines: " + ((this.minorLines != null) ? this.minorLines.serialize() : "null") + ", ");
			sb.appendLine1("strips: " + ((this.strips != null) ? this.strips.serialize() : "null"));
		}
		sb.appendLine1("}");
		return sb.toString();
	}
}


