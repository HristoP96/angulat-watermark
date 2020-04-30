/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapSeriesHostDescription } from "./GeographicMapSeriesHostDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class GeographicShapeSeriesBaseDescription extends GeographicMapSeriesHostDescription {
	static $t: Type = markType(GeographicShapeSeriesBaseDescription, 'GeographicShapeSeriesBaseDescription', (<any>GeographicMapSeriesHostDescription).$type);
	protected get_type(): string {
		return "GeographicShapeSeriesBase";
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
	private _shapeFilterResolution: number = 0;
	get shapeFilterResolution(): number {
		return this._shapeFilterResolution;
	}
	set shapeFilterResolution(value: number) {
		this._shapeFilterResolution = value;
		this.markDirty("ShapeFilterResolution");
	}
}


