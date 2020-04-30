/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { RectangleVisualData } from "igniteui-core/RectangleVisualData";
import { PolygonVisualData } from "igniteui-core/PolygonVisualData";
import { PolyLineVisualData } from "igniteui-core/PolyLineVisualData";
import { List$1 } from "igniteui-core/List$1";
import { RectData } from "igniteui-core/RectData";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";

/**
 * @hidden 
 */
export class PointerTooltipVisualData extends Base {
	static $t: Type = markType(PointerTooltipVisualData, 'PointerTooltipVisualData');
	private _boxShape: RectangleVisualData = null;
	get boxShape(): RectangleVisualData {
		return this._boxShape;
	}
	set boxShape(value: RectangleVisualData) {
		this._boxShape = value;
	}
	private _pointerFillShape: PolygonVisualData = null;
	get pointerFillShape(): PolygonVisualData {
		return this._pointerFillShape;
	}
	set pointerFillShape(value: PolygonVisualData) {
		this._pointerFillShape = value;
	}
	private _pointerOutlineShape: PolyLineVisualData = null;
	get pointerOutlineShape(): PolyLineVisualData {
		return this._pointerOutlineShape;
	}
	set pointerOutlineShape(value: PolyLineVisualData) {
		this._pointerOutlineShape = value;
	}
	private _offsetX: number = 0;
	get offsetX(): number {
		return this._offsetX;
	}
	set offsetX(value: number) {
		this._offsetX = value;
	}
	private _offsetY: number = 0;
	get offsetY(): number {
		return this._offsetY;
	}
	set offsetY(value: number) {
		this._offsetY = value;
	}
	private _categoryNames: List$1<string> = null;
	get categoryNames(): List$1<string> {
		return this._categoryNames;
	}
	set categoryNames(value: List$1<string>) {
		this._categoryNames = value;
	}
	serialize(): string {
		let catNames = "";
		if (this.categoryNames != null) {
			for (let name of fromEnum<string>(this.categoryNames)) {
				catNames += "\"" + name + "\",";
			}
			if (catNames != "") {
				catNames = catNames.substr(0, catNames.length - 1);
			}
		}
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("offsetX: " + this.offsetX + ", ");
		sb.appendLine1("offsetY: " + this.offsetY + ", ");
		sb.appendLine1("boxShape: " + this.boxShape.serialize() + ", ");
		sb.appendLine1("pointerFillShape: " + this.pointerFillShape.serialize() + ", ");
		sb.appendLine1("viewport: { left: " + this.viewport.left + ", top: " + this.viewport.top + ", width: " + this.viewport.width + ", height: " + this.viewport.height + "}, ");
		sb.appendLine1("pointerOutlineShape: " + this.pointerOutlineShape.serialize() + ", ");
		sb.appendLine1("categoryNames: [" + catNames + "]");
		sb.appendLine1("}");
		return sb.toString();
	}
	scaleByViewport(viewport: RectData): void {
		this.boxShape.scaleByViewport(this.viewport);
		this.pointerFillShape.scaleByViewport(this.viewport);
		this.pointerOutlineShape.scaleByViewport(this.viewport);
		this.offsetX = (this.offsetX - viewport.left) / viewport.width;
		this.offsetY = (this.offsetY - viewport.top) / viewport.height;
	}
	private _viewport: RectData = null;
	get viewport(): RectData {
		return this._viewport;
	}
	set viewport(value: RectData) {
		this._viewport = value;
	}
}


