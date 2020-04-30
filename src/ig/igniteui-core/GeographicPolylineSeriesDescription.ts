/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicShapeSeriesBaseDescription } from "./GeographicShapeSeriesBaseDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GeographicPolylineSeriesDescription extends GeographicShapeSeriesBaseDescription {
	static $t: Type = markType(GeographicPolylineSeriesDescription, 'GeographicPolylineSeriesDescription', (<any>GeographicShapeSeriesBaseDescription).$type);
	protected get_type(): string {
		return "GeographicPolylineSeries";
	}
	constructor() {
		super();
	}
	private _shapeStyleSelectorRef: string = null;
	get shapeStyleSelectorRef(): string {
		return this._shapeStyleSelectorRef;
	}
	set shapeStyleSelectorRef(value: string) {
		this._shapeStyleSelectorRef = value;
		this.markDirty("ShapeStyleSelectorRef");
	}
	private _shapeFill: string = null;
	get shapeFill(): string {
		return this._shapeFill;
	}
	set shapeFill(value: string) {
		this._shapeFill = value;
		this.markDirty("ShapeFill");
	}
	private _shapeStroke: string = null;
	get shapeStroke(): string {
		return this._shapeStroke;
	}
	set shapeStroke(value: string) {
		this._shapeStroke = value;
		this.markDirty("ShapeStroke");
	}
	private _shapeStrokeThickness: number = 0;
	get shapeStrokeThickness(): number {
		return this._shapeStrokeThickness;
	}
	set shapeStrokeThickness(value: number) {
		this._shapeStrokeThickness = value;
		this.markDirty("ShapeStrokeThickness");
	}
	private _shapeOpacity: number = 0;
	get shapeOpacity(): number {
		return this._shapeOpacity;
	}
	set shapeOpacity(value: number) {
		this._shapeOpacity = value;
		this.markDirty("ShapeOpacity");
	}
	private _styleShape: string = null;
	get styleShapeRef(): string {
		return this._styleShape;
	}
	set styleShapeRef(value: string) {
		this._styleShape = value;
		this.markDirty("StyleShapeRef");
	}
}


