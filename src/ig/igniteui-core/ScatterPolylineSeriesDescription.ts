/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ShapeSeriesBaseDescription } from "./ShapeSeriesBaseDescription";
import { StyleDescription } from "./StyleDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ScatterPolylineSeriesDescription extends ShapeSeriesBaseDescription {
	static $t: Type = markType(ScatterPolylineSeriesDescription, 'ScatterPolylineSeriesDescription', (<any>ShapeSeriesBaseDescription).$type);
	protected get_type(): string {
		return "ScatterPolylineSeries";
	}
	constructor() {
		super();
	}
	private _shapeStyle: StyleDescription = null;
	get shapeStyle(): StyleDescription {
		return this._shapeStyle;
	}
	set shapeStyle(value: StyleDescription) {
		this._shapeStyle = value;
		this.markDirty("ShapeStyle");
	}
}


