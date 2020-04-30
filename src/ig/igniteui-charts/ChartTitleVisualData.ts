/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { RectData } from "igniteui-core/RectData";
import { LabelAppearanceData } from "igniteui-core/LabelAppearanceData";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class ChartTitleVisualData extends Base {
	static $t: Type = markType(ChartTitleVisualData, 'ChartTitleVisualData');
	constructor() {
		super();
		this.appearance = new LabelAppearanceData();
	}
	get width(): number {
		return this.viewport.width;
	}
	get height(): number {
		return this.viewport.height;
	}
	private _viewport: RectData = null;
	get viewport(): RectData {
		return this._viewport;
	}
	set viewport(value: RectData) {
		this._viewport = value;
	}
	private _textPlotArea: RectData = null;
	get textPlotArea(): RectData {
		return this._textPlotArea;
	}
	set textPlotArea(value: RectData) {
		this._textPlotArea = value;
	}
	private _appearance: LabelAppearanceData = null;
	get appearance(): LabelAppearanceData {
		return this._appearance;
	}
	set appearance(value: LabelAppearanceData) {
		this._appearance = value;
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("viewport: " + this.viewport.serialize() + ", ");
		sb.appendLine1("textPlotArea: " + this.textPlotArea.serialize() + ", ");
		sb.appendLine1("appearance: " + this.appearance.serialize());
		sb.appendLine1("}");
		return sb.toString();
	}
	scaleByViewport1(viewport: RectData): void {
		let x = (this.textPlotArea.left - viewport.left) / viewport.width;
		let y = (this.textPlotArea.top - viewport.top) / viewport.height;
		let width = this.textPlotArea.width / viewport.width;
		let height = this.textPlotArea.height / viewport.height;
		this.textPlotArea = new RectData(x, y, width, height);
	}
	scaleByViewport(): void {
		let x = (this.textPlotArea.left - this.viewport.left) / this.viewport.width;
		let y = (this.textPlotArea.top - this.viewport.top) / this.viewport.height;
		let width = this.textPlotArea.width / this.viewport.width;
		let height = this.textPlotArea.height / this.viewport.height;
		this.textPlotArea = new RectData(x, y, width, height);
	}
	unScaleByViewport1(viewport: Rect): void {
		let x = this.textPlotArea.left * viewport.width;
		let y = this.textPlotArea.top * viewport.height;
		let width = this.textPlotArea.width * viewport.width;
		let height = this.textPlotArea.height * viewport.height;
		this.textPlotArea = new RectData(x, y, width, height);
	}
	unScaleByViewport(): void {
		let x = this.textPlotArea.left * this.viewport.width;
		let y = this.textPlotArea.top * this.viewport.height;
		let width = this.textPlotArea.width * this.viewport.width;
		let height = this.textPlotArea.height * this.viewport.height;
		this.textPlotArea = new RectData(x, y, width, height);
	}
}


