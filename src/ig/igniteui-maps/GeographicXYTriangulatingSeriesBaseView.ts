/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HostSeriesView } from "./HostSeriesView";
import { GeographicXYTriangulatingSeriesBase } from "./GeographicXYTriangulatingSeriesBase";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export abstract class GeographicXYTriangulatingSeriesBaseView extends HostSeriesView {
	static $t: Type = markType(GeographicXYTriangulatingSeriesBaseView, 'GeographicXYTriangulatingSeriesBaseView', (<any>HostSeriesView).$type);
	constructor(model: GeographicXYTriangulatingSeriesBase) {
		super(model);
		this.geographicXYModel = model;
	}
	private _geographicXYModel: GeographicXYTriangulatingSeriesBase = null;
	private get geographicXYModel(): GeographicXYTriangulatingSeriesBase {
		return this._geographicXYModel;
	}
	private set geographicXYModel(value: GeographicXYTriangulatingSeriesBase) {
		this._geographicXYModel = value;
	}
}


