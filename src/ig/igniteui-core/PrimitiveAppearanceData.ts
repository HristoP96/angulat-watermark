/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";
import { ColorData } from "./ColorData";
import { BrushAppearanceData } from "./BrushAppearanceData";
import { RectData } from "./RectData";
import { StringBuilder } from "./StringBuilder";

/**
 * @hidden 
 */
export class PrimitiveAppearanceData extends Base implements IVisualData {
	static $t: Type = markType(PrimitiveAppearanceData, 'PrimitiveAppearanceData', (<any>Base).$type, [IVisualData_$type]);
	private _stroke: ColorData = null;
	get stroke(): ColorData {
		return this._stroke;
	}
	set stroke(value: ColorData) {
		this._stroke = value;
	}
	private _strokeExtended: BrushAppearanceData = null;
	get strokeExtended(): BrushAppearanceData {
		return this._strokeExtended;
	}
	set strokeExtended(value: BrushAppearanceData) {
		this._strokeExtended = value;
	}
	private _fill: ColorData = null;
	get fill(): ColorData {
		return this._fill;
	}
	set fill(value: ColorData) {
		this._fill = value;
	}
	private _fillExtended: BrushAppearanceData = null;
	get fillExtended(): BrushAppearanceData {
		return this._fillExtended;
	}
	set fillExtended(value: BrushAppearanceData) {
		this._fillExtended = value;
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
	}
	private _isVisible: boolean = false;
	get isVisible(): boolean {
		return this._isVisible;
	}
	set isVisible(value: boolean) {
		this._isVisible = value;
	}
	private _opacity: number = 0;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		this._opacity = value;
	}
	private _canvasLeft: number = 0;
	get canvasLeft(): number {
		return this._canvasLeft;
	}
	set canvasLeft(value: number) {
		this._canvasLeft = value;
	}
	private _canvasTop: number = 0;
	get canvasTop(): number {
		return this._canvasTop;
	}
	set canvasTop(value: number) {
		this._canvasTop = value;
	}
	private _canvaZIndex: number = 0;
	get canvaZIndex(): number {
		return this._canvaZIndex;
	}
	set canvaZIndex(value: number) {
		this._canvaZIndex = value;
	}
	private _dashArray: any[] = null;
	get dashArray(): any[] {
		return this._dashArray;
	}
	set dashArray(value: any[]) {
		this._dashArray = value;
	}
	private _dashCap: number = 0;
	get dashCap(): number {
		return this._dashCap;
	}
	set dashCap(value: number) {
		this._dashCap = value;
	}
	scaleByViewport(viewport: RectData): void {
		this.canvasLeft = (this.canvasLeft - viewport.left) / viewport.width;
		this.canvasTop = (this.canvasTop - viewport.top) / viewport.height;
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("stroke: " + (this.stroke != null ? this.stroke.serialize() : "null") + ", ");
		sb.appendLine1("fill: " + (this.fill != null ? this.fill.serialize() : "null") + ", ");
		sb.appendLine1("strokeExtended: " + (this.strokeExtended != null ? this.strokeExtended.serialize() : "null") + ", ");
		sb.appendLine1("fillExtended: " + (this.fillExtended != null ? this.fillExtended.serialize() : "null") + ", ");
		sb.appendLine1("strokeThickness: " + this.strokeThickness + ", ");
		sb.appendLine1("isVisible: " + (this.isVisible ? "true" : "false") + ", ");
		sb.appendLine1("opacity: " + this.opacity + ", ");
		sb.appendLine1("canvasLeft: " + this.canvasLeft + ", ");
		sb.appendLine1("canvasTop: " + this.canvasTop + ", ");
		sb.appendLine1("canvasZIndex: " + this.canvaZIndex + ", ");
		sb.appendLine1("dashArray: null, ");
		sb.appendLine1("dashCap: " + this.dashCap);
		sb.appendLine1("}");
		return sb.toString();
	}
}


