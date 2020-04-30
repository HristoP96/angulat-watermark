/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { RectData } from "igniteui-core/RectData";
import { PrimitiveVisualDataList } from "igniteui-core/PrimitiveVisualDataList";
import { PointerTooltipVisualDataList } from "./PointerTooltipVisualDataList";
import { MarkerVisualDataList } from "./MarkerVisualDataList";
import { CalloutVisualDataList } from "./CalloutVisualDataList";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { MarkerVisualData } from "./MarkerVisualData";
import { PointerTooltipVisualData } from "./PointerTooltipVisualData";
import { List$1 } from "igniteui-core/List$1";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { CalloutVisualData } from "./CalloutVisualData";

/**
 * @hidden 
 */
export class SeriesVisualData extends Base {
	static $t: Type = markType(SeriesVisualData, 'SeriesVisualData');
	constructor() {
		super();
		this.shapes = new PrimitiveVisualDataList();
		this.markerShapes = new MarkerVisualDataList();
		this.pointerTooltips = new PointerTooltipVisualDataList();
		this.calloutShapes = new CalloutVisualDataList();
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
	private _opacity: number = 0;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		this._opacity = value;
	}
	private _shapes: PrimitiveVisualDataList = null;
	get shapes(): PrimitiveVisualDataList {
		return this._shapes;
	}
	set shapes(value: PrimitiveVisualDataList) {
		this._shapes = value;
	}
	private _pointerTooltips: PointerTooltipVisualDataList = null;
	get pointerTooltips(): PointerTooltipVisualDataList {
		return this._pointerTooltips;
	}
	set pointerTooltips(value: PointerTooltipVisualDataList) {
		this._pointerTooltips = value;
	}
	private _markerShapes: MarkerVisualDataList = null;
	get markerShapes(): MarkerVisualDataList {
		return this._markerShapes;
	}
	set markerShapes(value: MarkerVisualDataList) {
		this._markerShapes = value;
	}
	private _calloutShapes: CalloutVisualDataList = null;
	get calloutShapes(): CalloutVisualDataList {
		return this._calloutShapes;
	}
	set calloutShapes(value: CalloutVisualDataList) {
		this._calloutShapes = value;
	}
	private _pixels: number[] = null;
	get pixels(): number[] {
		return this._pixels;
	}
	set pixels(value: number[]) {
		this._pixels = value;
	}
	private _pixelWidth: number = 0;
	get pixelWidth(): number {
		return this._pixelWidth;
	}
	set pixelWidth(value: number) {
		this._pixelWidth = value;
	}
	private _pixelHeight: number = 0;
	get pixelHeight(): number {
		return this._pixelHeight;
	}
	set pixelHeight(value: number) {
		this._pixelHeight = value;
	}
	scaleByViewport(): void {
		for (let shape of fromEnum<PrimitiveVisualData>(this.shapes)) {
			shape.scaleByViewport(this.viewport);
		}
		for (let markerShape of fromEnum<MarkerVisualData>(this.markerShapes)) {
			markerShape.scaleByViewport(this.viewport);
		}
		for (let pointer of fromEnum<PointerTooltipVisualData>(this.pointerTooltips)) {
			pointer.scaleByViewport(this.viewport);
		}
	}
	serialize(): string {
		let sb = new StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("name: \"" + this.name + "\",");
		sb.appendLine1("type: \"" + this.type + "\", ");
		sb.appendLine1("opacity: " + this.opacity + ", ");
		sb.appendLine1("viewport: { left: " + this.viewport.left + ", top: " + this.viewport.top + ", width: " + this.viewport.width + ", height: " + this.viewport.height + "}, ");
		sb.appendLine1("shapes: [");
		for (let i = 0; i < this.shapes.count; i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.shapes._inner[i].serialize());
		}
		sb.appendLine1("],");
		sb.appendLine1("pointerTooltips: [");
		for (let i1 = 0; i1 < this.pointerTooltips.count; i1++) {
			if (i1 != 0) {
				sb.append5(", ");
			}
			sb.append5(this.pointerTooltips._inner[i1].serialize());
		}
		sb.appendLine1("],");
		if (this.calloutShapes != null && this.calloutShapes.count > 0) {
			sb.appendLine1("calloutshapes: [");
			for (let i2 = 0; i2 < this.calloutShapes.count; i2++) {
				if (i2 != 0) {
					sb.append5(", ");
				}
				sb.append5(this.calloutShapes._inner[i2].serialize());
			}
			sb.appendLine1("],");
		}
		sb.appendLine1("markerShapes: [");
		for (let i3 = 0; i3 < this.markerShapes.count; i3++) {
			if (i3 != 0) {
				sb.append5(", ");
			}
			sb.append5(this.markerShapes._inner[i3].serialize());
		}
		sb.appendLine1("]");
		if (this.pixels != null) {
			sb.appendLine1(", pixels: [");
			for (let i4 = 0; i4 < this.pixels.length; i4++) {
				if (i4 != 0) {
					sb.append5(", ");
				}
				sb.append5(this.pixels[i4].toString());
			}
			sb.appendLine1("], ");
			sb.appendLine1("pixelWidth: " + this.pixelWidth + ", ");
		}
		sb.appendLine1("}");
		return sb.toString();
	}
}


