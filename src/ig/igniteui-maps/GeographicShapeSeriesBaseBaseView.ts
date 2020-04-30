/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HostSeriesView } from "./HostSeriesView";
import { GeographicShapeSeriesBaseBase } from "./GeographicShapeSeriesBaseBase";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export abstract class GeographicShapeSeriesBaseBaseView extends HostSeriesView {
	static $t: Type = markType(GeographicShapeSeriesBaseBaseView, 'GeographicShapeSeriesBaseBaseView', (<any>HostSeriesView).$type);
	constructor(model: GeographicShapeSeriesBaseBase) {
		super(model);
		this.shapeBaseModel = model;
	}
	private _shapeBaseModel: GeographicShapeSeriesBaseBase = null;
	private get shapeBaseModel(): GeographicShapeSeriesBaseBase {
		return this._shapeBaseModel;
	}
	private set shapeBaseModel(value: GeographicShapeSeriesBaseBase) {
		this._shapeBaseModel = value;
	}
}


