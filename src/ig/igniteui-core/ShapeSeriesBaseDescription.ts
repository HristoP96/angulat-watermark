/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SeriesDescription } from "./SeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class ShapeSeriesBaseDescription extends SeriesDescription {
	static $t: Type = markType(ShapeSeriesBaseDescription, 'ShapeSeriesBaseDescription', (<any>SeriesDescription).$type);
	protected get_type(): string {
		return "ShapeSeriesBase";
	}
	constructor() {
		super();
	}
	private _shapeMemberPath: string = null;
	get shapeMemberPath(): string {
		return this._shapeMemberPath;
	}
	set shapeMemberPath(value: string) {
		this._shapeMemberPath = value;
		this.markDirty("ShapeMemberPath");
	}
	private _xAxisRef: string = null;
	get xAxisRef(): string {
		return this._xAxisRef;
	}
	set xAxisRef(value: string) {
		this._xAxisRef = value;
		this.markDirty("XAxisRef");
	}
	private _yAxisRef: string = null;
	get yAxisRef(): string {
		return this._yAxisRef;
	}
	set yAxisRef(value: string) {
		this._yAxisRef = value;
		this.markDirty("YAxisRef");
	}
	private _shapeFilterResolution: number = 0;
	get shapeFilterResolution(): number {
		return this._shapeFilterResolution;
	}
	set shapeFilterResolution(value: number) {
		this._shapeFilterResolution = value;
		this.markDirty("ShapeFilterResolution");
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


