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
export class GeographicShapeSeriesDescription extends GeographicShapeSeriesBaseDescription {
	static $t: Type = markType(GeographicShapeSeriesDescription, 'GeographicShapeSeriesDescription', (<any>GeographicShapeSeriesBaseDescription).$type);
	protected get_type(): string {
		return "GeographicShapeSeries";
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
	private _markerType: string = null;
	get markerType(): string {
		return this._markerType;
	}
	set markerType(value: string) {
		this._markerType = value;
		this.markDirty("MarkerType");
	}
	private _markerTemplateRef: string = null;
	get markerTemplateRef(): string {
		return this._markerTemplateRef;
	}
	set markerTemplateRef(value: string) {
		this._markerTemplateRef = value;
		this.markDirty("MarkerTemplateRef");
	}
	private _markerBrush: string = null;
	get markerBrush(): string {
		return this._markerBrush;
	}
	set markerBrush(value: string) {
		this._markerBrush = value;
		this.markDirty("MarkerBrush");
	}
	private _markerOutline: string = null;
	get markerOutline(): string {
		return this._markerOutline;
	}
	set markerOutline(value: string) {
		this._markerOutline = value;
		this.markDirty("MarkerOutline");
	}
	private _markerCollisionAvoidance: string = null;
	get markerCollisionAvoidance(): string {
		return this._markerCollisionAvoidance;
	}
	set markerCollisionAvoidance(value: string) {
		this._markerCollisionAvoidance = value;
		this.markDirty("MarkerCollisionAvoidance");
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


